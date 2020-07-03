import React, { useState } from 'react';

import "./App.css";

function App() {



  const listaInicial = [
    { id: parseFloat((Math.random() * 10).toFixed(2)), valor: "Tirar o lixo" },
  ];

  const [item, setItem] = useState("");
  const [lista, setLista] = useState(listaInicial);
  const [valido, setValido] = useState(["", "escondecampo"]);

  let estadoAtuallabels = [

    `Adicionar o ${lista.length + 1}º item`,
    `Para atualizar uma tarefa informe uma nova e clique na que você quer atualizar`
  ];

  const onchangeinput = e => {

    setItem(e.target.value);
  }

  const addItem = (meuitem) => {

    const novo_item = {

      id: parseFloat((Math.random() * 10).toFixed(2)),
      valor: meuitem
    }

    if (meuitem.trim().length > 0) {

      setLista([...lista, novo_item])
      setValido(["", "escondecampo"]);


    } else {

      setValido(["Preencha com uma tarefa para adicionar!", "preenchercampo"])

    }
  }

  const remover = (id_item) => {

    const listaNova = lista.filter(item => item.id !== id_item);

    setLista(listaNova);
  }

  const atualizar = (indice) => {

    const lista_atualizada = [...lista];

    if (item.trim().length > 0) {

      lista_atualizada.splice(

        indice,
        1,
        {
          id: parseFloat((Math.random() * 10).toFixed(2)),
          valor: item
        }
      )

      setValido(["", "escondecampo"])
      setLista(lista_atualizada);

    } else {
      setValido(["Preencha com uma tarefa para alterar!", "preenchercampo"])
    }



    console.log(indice)
    console.log(lista);
  }

  return (
    <div className="App">
      <div>

        <header>
          <h3>Lista de Tarefas</h3>
          <label>{lista.length}</label>
        </header>
        <label className="placeholder">{estadoAtuallabels[0]}</label>
        <input value={item} onChange={onchangeinput} />
        <button onClick={() => addItem(item)}>Add</button>
        <label className="placeholder">{estadoAtuallabels[1]}</label>

        <div id="container__lista">
          <ul className="lista" value={lista}>
            {lista.map((mitem, index) =>
              <li className="lista__item" key={mitem.id}>

                <span onClick={() => atualizar(index)}>{mitem.valor}</span>
                <button onClick={() => remover(mitem.id)}>X</button>
          
              </li>)
            }
          </ul>
        </div>
        <span className={valido[1]}>{valido[0]}</span>

      </div>
    </div>

  );
}

export default App;
