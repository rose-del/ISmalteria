import pool from '@/lib/db.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const {nome, preco, descricao} = body;

        if (!nome || !preco) {
            return new Response(JSON.stringify({ error: "Nome e preço são obrigatórios!" }), {
                status: 400,
            });
        }

        const query = `
            INSERT INTO procedimentos (nome, preco, descricao)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;

        const values = [nome, preco, descricao];

        const result = await pool.query(query, values);
        const procedimentoCriado = result.rows[0];

        return new Response(JSON.stringify(procedimentoCriado), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erro ao cadastrar procedimento:', error);
        return new Response(JSON.stringify({ error: 'Erro interno no servidor.' }), {
            status: 500,
        });
    }
}
