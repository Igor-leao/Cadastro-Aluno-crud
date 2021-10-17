import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [placa, setPlaca] = useState("");
  const [cor, setCor] = useState("");
  const [chassi, setChassi] = useState("");
  const [carList, setCarList] = useState([]);
  const [newColor, setNewColor] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/cars/get").then((response) => {
      console.log("oi to aqui")
      setCarList(response.data);
    })
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3000/cars/insert", {
      name: name,
      placa: placa,
      cor: cor,
      chassi: chassi,
    });
    setCarList([
      ...carList, {
        name: name,
        placa: placa,
        cor: cor,
        chassi: chassi,
      },
    ]);
  };


  const deleteCar = (name) => {
    Axios.delete(`http://localhost:3000/cars/delete/${name}`);
  };

  const updateColor = (name) => {
    Axios.put("http://localhost:3000/cars/update", {
      name: name,
      cor: newColor,
    });
    setNewColor("");
  };
  return (
    <div className="App">
      <h1>Crud Car </h1>
      <div className="form">
        <label>Nome do carro</label>
        <input
          type="text"
          name="carName"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label>Placa do carro</label>
        <input
          type="text"
          name="carPlaca"
          onChange={(e) => {
            setPlaca(e.target.value)
          }}
        />
        <label>Cor do carro</label>
        <input
          type="text"
          name="carCor"
          onChange={(e) => {
            setCor(e.target.value)
          }}
        />
        <label>Chassi do carro</label>
        <input
          type="text"
          name="carChassi"
          onChange={(e) => {
            setChassi(e.target.value)
          }}
        />

        <button className="addButton" onClick={submitReview}>Adicionar</button>


      </div>
      <div class="row">
        {carList.map((value) => {
          return (
            <div class="column">
              <div className="card">
                <h3>{value.name}</h3>
                <p>{value.placa}</p>
                <p>{value.cor}  {value.chassi}</p>


                <button
                  onClick={() => {
                    deleteCar(value.name);
                  }}
                >
                  Remover
                </button>

                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => {
                    setNewColor(e.target.value)
                  }}
                />
                <button onClick={() => {
                  updateColor(value.name)
                }}>Editar</button>


              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default App;