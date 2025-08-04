'use client';

import { useState } from 'react';

export default function Contato() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        revenue: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        }).then(response => response.json()).catch(error => {
            console.error('Erro ao enviar formulário:', error);
        }).finally(() => {
            setForm({ name: '', email: '', company: '', revenue: '', message: '' });
        });
    };

    return (
        <section id="contato" className="bg-gray-100 text-black py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Vamos conversar?
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border px-4 py-2 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border px-4 py-2 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Empresa</label>
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            required
                            className="border px-4 py-2 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Faturamento mensal</label>
                        <select
                            name="revenue"
                            value={form.revenue}
                            onChange={handleChange}
                            required
                            className="border px-4 py-2 rounded-md"
                        >
                            <option value="">Selecione</option>
                            <option value="100k-200k">R$100k - R$200k</option>
                            <option value="200k-500k">R$200k - R$500k</option>
                            <option value="500k+">Acima de R$500k</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Mensagem</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="border px-4 py-2 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}
