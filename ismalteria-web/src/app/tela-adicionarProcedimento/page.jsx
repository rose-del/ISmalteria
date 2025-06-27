'use client'

import {useState} from "react";
import styles from "../page.module.css";

export default function Page() {
    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [mensagem, setMensagem] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const procedimento = {
            nome,
            preco: parseFloat(preco),
            descricao,
        };

        try {
            const res = await fetch('/api/procedimentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(procedimento),
            });
    
            if (res.ok) {
                setMensagem('Procedimento cadastrado com sucesso!');
                setNome("");
                setPreco("");
                setDescricao("");
            } else {
                const err = await res.json();
                setMensagem(`Erro: ${err.error || 'Não foi possível cadastrar.'}`);
            }
        } catch (error) {
            console.error(error);
            setMensagem("Erro ao enviar os dados.")
        }
    };

    return (
        <div className={styles.addProcedimento}>
            <h2 className={styles.titulo}>Novo Procedimento</h2>

            {mensagem && <p>{mensagem}</p>}

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required
                />

                <input
                    className={styles.input}
                    type="number"
                    step="0.01" 
                    placeholder="Preço" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                    required
                />

                <input 
                    className={styles.input}
                    type="text"
                    placeholder="Descrição do procedimento"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                <button className={styles.button} type="submit">Salvar</button>
            </form>
        </div>
    );
}