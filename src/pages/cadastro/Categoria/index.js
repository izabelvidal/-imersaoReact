import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);

  const valoresIniciais = {
    nome: 'Categorias Inicial',
    descricao: 'Descrição Inicial',
    cor: '#bbb',
  }

  const [values, setvalues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setvalues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values}</h1>

      <form onSubmit={
        function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
        }
      }>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
                setValue('nome', infosDoEvento.target.valeu);
                //setvalue(infosDoEvento.target.values);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
                setvalues(infosDoEvento.target.value);
              }}
          />
          </label>
        </div>
        
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
                setvalues(infosDoEvento.target.value);
              }}
            />
          </label>
        </div>
        

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key ={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;