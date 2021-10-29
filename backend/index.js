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
  database: 'Cadastro_Aluno'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/aluno/get', (req, res) => {
  const selectAluno =
    "SELECT * FROM aluno_info";
  db.query(selectAluno, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.put('/aluno/update', (req, res) => {
  const nome = req.body.nome;
  const semestre = req.body.semetre;
  const updateAluno =
    "UPDATE aluno_info SET semestre = ? WHERE nome = ?";
  db.query(updateAluno, [semestre, nome], (err, result) => {
    if (err)
      console.log(err);
  });
});

app.delete('/aluno/delete/:nome', (req, res) => {
  const nome = req.params.nome;
  const deleteAluno =
    "DELETE FROM aluno_info WHERE nome = ?";
  db.query(deleteAluno, nome, (err, result) => {
    if (err)
      console.log(err);
  });
});

app.post('/aluno/insert', (req, res) => {
  const nome = req.body.nome;
  const semestre = req.body.semestre;
  const idade = req.body.idade;
  const insertAluno = "INSERT INTO aluno_info (nome, semestre, idade) VALUES (?,?,?);";
  db.query(insertAluno, [nome, semestre, idade], (err, result) => {
  });
});
app.listen(3000, () =>
  console.log('Servidor rodando'));
