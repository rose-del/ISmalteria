'use client';

import { useEffect, useState } from 'react';
import styles from '../page.module.css';

export default function ListaProcedimentos() {
  const [procedimentos, setProcedimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchProcedimentos() {
      try {
        const res = await fetch('/api/procedimentos');
        const data = await res.json();
        setProcedimentos(data);
      } catch (error) {
        console.error('Erro ao buscar procedimentos:', error);
      } finally {
        setCarregando(false);
      }
    }

    fetchProcedimentos();
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.lista}>
      <h2 className={styles.titulo}>Procedimentos Cadastrados</h2>

      {procedimentos.length === 0 && <p>Nenhum procedimento encontrado.</p>}

      {procedimentos.map((proc) => (
        <div key={proc.id} className={styles.card}>
          {proc.imagem_url && (
            <img
              src={proc.imagem_url}
              alt={`Imagem de ${proc.nome}`}
              className={styles.imagem}
            />
          )}
          <h3>{proc.nome}</h3>
          <p><strong>Preço:</strong> R$ {Number(proc.preco).toFixed(2)}</p>
          <p>{proc.descricao}</p>
        </div>
      ))}
    </div>
  );
}
