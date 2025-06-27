import pool from '@/lib/db.js';

export async function GET() {
    try {
        const result = await pool.query('SELECT NOW()');
        return Response.json({ time: result.rows[0] });
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {
            status: 500,
        });
    }
}
