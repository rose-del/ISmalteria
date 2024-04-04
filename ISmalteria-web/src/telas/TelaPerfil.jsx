import '../estilos/Perfil.css';
import React from 'react';
import Uploud from './Uploud'
import Feedbacks from './Feedbacks'

export default function App() {
  return (
    <div className="perfil-form">
      <img src="./public/logo.svg" />
      <h2> <img src="./public/fotopessoal.svg" /> </h2>
      <form>
        <div className="bio-div">
          <h1> Biografia </h1>
        </div>
        <input type="text" placeholder="" />
        <button type="submit" style={{fontSize: 25, fontFamily: 'Cinzel'}}>Editar</button>
         <h2> IMAGENS DOS PROCEDIMENTOS </h2>
          <Uploud />
         <h2> IMAGEM DA TELA PRINCIPAL </h2>
          <Uploud />
         <h3> FEEDBACKS </h3>
          <Feedbacks />
      </form>
    </div>
  );
};