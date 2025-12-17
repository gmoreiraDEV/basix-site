import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { Resend } from 'resend';

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!connectionString) {
    console.warn('[⚠️] POSTGRES_URL/DATABASE_URL is not set. Form submissions will fail.');
}

const pool = connectionString
    ? new Pool({
        connectionString,
        ssl: process.env.POSTGRES_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    })
    : null;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const notificationRecipient = process.env.NOTIFY_EMAIL_TO;
const notificationSender = process.env.NOTIFY_EMAIL_FROM || 'Basix <no-reply@basix.ai>';

async function sendNotificationEmail(payload: {
    name: string;
    email: string;
    whatsapp?: string;
    company?: string;
    revenue?: string;
    message: string;
}) {
    if (!resend || !notificationRecipient) {
        console.warn('[ℹ️] Email notifications are not configured.');
        return;
    }

    const { name, email, whatsapp, company, revenue, message } = payload;

    const { error } = await resend.emails.send({
        from: notificationSender,
        to: notificationRecipient,
        subject: 'Novo formulário recebido',
        html: `
            <h2>Novo formulário enviado</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
            ${revenue ? `<p><strong>Faturamento:</strong> ${revenue}</p>` : ''}
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `,
    });

    if (error) {
        console.error('[❌] Erro ao enviar notificação de e-mail:', error);
    }
}

export async function POST(req: NextRequest) {
    if (!pool) {
        return NextResponse.json({ status: 'error', message: 'Configuração do banco de dados ausente.' }, { status: 500 });
    }

    try {
        const body = await req.json();
        const { name, email, whatsapp, message, company, revenue, source } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ status: 'error', message: 'Nome, e-mail e mensagem são obrigatórios.' }, { status: 400 });
        }

        const client = await pool.connect();

        try {
            const existing = await client.query('SELECT id FROM leads WHERE email = $1 LIMIT 1', [email]);

            if (existing.rows.length > 0) {
                return NextResponse.json({
                    status: 'duplicate',
                    message: 'Este e-mail já foi registrado. Obrigado pelo interesse!'
                }, { status: 400 });
            }

            await client.query(
                `INSERT INTO leads (name, email, whatsapp, company, revenue, message, source)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [name, email, whatsapp ?? null, company ?? null, revenue ?? null, message, source ?? null]
            );
        } finally {
            client.release();
        }

        await sendNotificationEmail({ name, email, whatsapp, company, revenue, message });

        return NextResponse.json({ status: 'success' });
    } catch (err) {
        console.error('[🔥] Erro interno na API:', err);
        return NextResponse.json({ status: 'error', message: 'Erro interno no servidor.' }, { status: 500 });
    }
}
