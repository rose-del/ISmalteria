import pool from '@/lib/db.js';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuid } from 'uuid';


export async function POST(request) {
    try {
        const formData = await request.formData();

        const nome = formData.get("nome");
        const preco = parseFloat(formData.get("preco"));
        const descricao = formData.get("descricao");
        const imagem = formData.get("imagem");

        if (!nome || !preco) {
            return new Response(JSON.stringify({ error: "Nome e preço são obrigatórios!" }), {
                status: 400,
            });
        }

        let imagemPath = null;

        if (imagem && imagem.name) {
            const buffer = Buffer.from(await imagem.arrayBuffer());
            console.log('Imagem recebida:', imagem);
            const filename = `${uuid()}-${imagem.name}`;
            const filepath = path.join(process.cwd(), 'public/uploads', filename);
            await writeFile(filepath, buffer);
            imagemPath = `/uploads/${filename}`;
        }

        const query = `
            INSERT INTO procedimentos (nome, preco, descricao, imagem_url)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;

        const values = [nome, preco, descricao, imagemPath];

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

export async function GET() {
    try {
      const result = await pool.query('SELECT * FROM procedimentos ORDER BY id DESC');
      const procedimentos = result.rows;
  
      return new Response(JSON.stringify(procedimentos), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Erro ao buscar procedimentos:', error);
      return new Response(JSON.stringify({ error: 'Erro interno ao buscar dados.' }), {
        status: 500,
      });
    }
  }
  