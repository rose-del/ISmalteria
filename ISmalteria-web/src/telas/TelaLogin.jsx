import React from 'react';
import "../estilos/Forms.css";
import { Link } from 'react-router-dom';
import { Button } from 'antd';


export default function telaLogin() {
  return (
    <div className="login-form">
      <img src="./logo.svg" />
      <h2>Login para funcionários</h2>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <Link to="/menu">
          <Button
            type="primary"
            size="large"
            style={{ background: '#B2D8D3' }}
          >ACESSAR
          </Button>     
        </Link>
        <Link to="/cadastro">Não possui conta?</Link>
        <Link to="/redefinirSenha">Esqueci a senha...</Link>
      </form>
    </div>
  );
}
