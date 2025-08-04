import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { nome, email, empresa, faturamento, mensagem } = body;

        const { error } = await supabase.from('leads').insert({
            nome,
            email,
            empresa,
            faturamento,
            mensagem
        });

        if (error) {
            console.error('Erro ao inserir lead:', error);
            return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
        }

        return NextResponse.json({ status: 'success' });
    } catch (err) {
        console.error('Erro interno:', err);
        return NextResponse.json({ status: 'error' }, { status: 500 });
    }
}
