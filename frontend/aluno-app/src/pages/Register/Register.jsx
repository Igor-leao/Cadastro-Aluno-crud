import React, { useState, useEffect } from 'react';

import Axios from 'axios';

function Register() {
  const [nome, setNome] = useState("");
  const [semestre, setSemestre] = useState("");
  const [idade, setIdade] = useState("");
  const [alunoList, setAlunoList] = useState([]);
  const [newSemestre, setNewSemestre] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/aluno/get").then((response) => {
      console.log("oi to aqui")
      setAlunoList(response.data);
    })
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3000/aluno/insert", {
      nome: nome,
      semestre: semestre,
      idade: idade,
    });
    setAlunoList([
      ...alunoList, {
        nome: nome,
        semestre: semestre,
        idade: idade,
      },
    ]);
  };


  const deleteAluno = (nome) => {
    Axios.delete(`http://localhost:3000/aluno/delete/${nome}`);
  };

  const updateSemestre = (nome) => {
    Axios.put("http://localhost:3000/aluno/update", {
      nome: nome,
      semestre: newSemestre,
    });
    setNewSemestre("");
  };
  return (
    <div className="App">
      <h1>Cadastro do Aluno </h1>
      <div className="form">
        <label>Nome do Aluno</label>
        <input
          type="text"
          nome="alunoNome"
          onChange={(e) => {
            setNome(e.target.value)
          }}
        />
        <label>semestre do ALuno</label>
        <input
          type="text"
          nome="ALunosemestre"
          onChange={(e) => {
            setSemestre(e.target.value)
          }}
        />
        <label>idade do Aluno</label>
        <input
          type="text"
          nome="alunoIdade"
          onChange={(e) => {
            setIdade(e.target.value)
          }}
        />

        <button className="addButton" onClick={submitReview}>Adicionar</button>


      </div>
      <div class="row">
        {alunoList.map((value) => {
          return (
            <div class="column">
              <div className="card">
                <h3>Nome: {value.nome}</h3>
                <p>Idade: {value.idade}</p>
                <p>Semestre: {value.semestre}</p>
                <button
                  onClick={() => {
                    deleteAluno(value.nome);
                  }}
                >
                  Remover
                </button>

                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => {
                    setNewSemestre(e.target.value)
                  }}
                />
                <button onClick={() => {
                  updateSemestre(value.nome)
                }}>Editar</button>


              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default Register;