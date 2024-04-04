import React from 'react';
import "../estilos/Forms.css";

export default function App() {
  return (
    <div className="login-form">
      <img src="./logo.svg" />
      <h2>REDEFINIR SENHA</h2>
      <h3>
        Informe o e-mail para realizar a redefiniçãp de senha
      </h3>
      <form>
        <input type="text" placeholder="Email" />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  )
}
