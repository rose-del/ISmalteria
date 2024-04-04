import React from 'react';
import "../estilos/Forms.css";

export default function TelaCadastro() {
  return (
     <div className="login-form">
       <img src="./public/logo.svg"/>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        <button type="su.bmit">CRIAR CONTA</button>
      </form>
    </div>
  );
};