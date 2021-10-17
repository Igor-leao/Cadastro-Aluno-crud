const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
// informaçẽos do banco de dados
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '36252589',
  database: 'Cars'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cars/get', (req, res) => {
  const selectCar =
    "SELECT * FROM carsInfo";
  db.query(selectCar, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.put('/cars/update', (req, res) => {
  const name = req.body.name;
  const cor = req.body.cor;
  const updateCar =
    "UPDATE carsInfo SET cor = ? WHERE name = ?";
  db.query(updateCar, [cor, name], (err, result) => {
    if (err)
      console.log(err);
  });
});

app.delete('/cars/delete/:name', (req, res) => {
  const name = req.params.name;
  const deleteCar =
    "DELETE FROM carsInfo WHERE name = ?";
  db.query(deleteCar, name, (err, result) => {
    if (err)
      console.log(err);
  });
});

app.post('/cars/insert', (req, res) => {
  const name = req.body.name;
  const placa = req.body.placa;
  const cor = req.body.cor;
  const chassi = req.body.chassi;
  const insertCar = "INSERT INTO carsInfo (name, placa, cor, chassi) VALUES (?,?,?,?);";
  db.query(insertCar, [name, placa, cor, chassi], (err, result) => {
  });
});
app.listen(3000, () =>
  console.log('Servidor rodando'));
