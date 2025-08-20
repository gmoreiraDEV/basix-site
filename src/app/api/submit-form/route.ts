import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, whatsapp, message } = body;

        const { data: existing, error: checkError } = await supabase
            .from('leads')
            .select('id')
            .eq('email', email)
            .maybeSingle();

        if (checkError) {
            console.error('Erro ao verificar duplicado:', checkError);
            return NextResponse.json({ status: 'error', message: 'Erro ao validar e-mail' }, { status: 500 });
        }

        if (existing) {
            return NextResponse.json({
                status: 'duplicate',
                message: 'Este e-mail já foi registrado. Obrigado pelo interesse!'
            }, { status: 400 });
        }

        const { error } = await supabase.from('leads').insert({
            name,
            email,
            whatsapp,
            message,
        });

        if (error) {
            console.error('[❌] Erro ao salvar lead no Supabase:', error);
            return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
        }

        return NextResponse.json({ status: 'success' });
    } catch (err) {
        console.error('[🔥] Erro interno na API:', err);
        return NextResponse.json({ status: 'error', message: String(err) }, { status: 500 });
    }
}
