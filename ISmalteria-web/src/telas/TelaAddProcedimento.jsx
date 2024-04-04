import '../estilos/AddProcedimento.css';
import React from 'react';
import Upload from './Uploud';
import { SaveOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <div className="addProcedimento-form">
      <h2 className='addProcedimento-titulo'> NOVO PROCEDIMENTO </h2>
        <form>
          <input type="text" placeholder="NOME"/>
          <input type="text" placeholder="PREÇO" />
          <h1> Descrição do procedimento: </h1>
          <div className="textareaDiv">
            <textarea 
              className="descricao-textarea" 
              placeholder="Digite a descrição do procedimento aqui"
              >
            </textarea>
            <div>
              <Upload/>
            </div>
          </div>
         <div className='buttonDiv'>
            <button 
              type="submit"
              >Salvar 
              <SaveOutlined/>
            </button>
          </div>
      </form> 
    </div>
  )
}
