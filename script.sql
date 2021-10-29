DROP DATABASE IF EXISTS Cadastro_Aluno;
CREATE DATABASE IF NOT EXISTS Cadastro_Aluno;

USE Cadastro_Aluno;

CREATE TABLE IF NOT EXISTS aluno_info (
	id_matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    semestre INT NOT NULL,
    idade INT NOT NULL,
    PRIMARY KEY (id_matricula)
);
