DROP DATABASE IF EXISTS Cars;
CREATE DATABASE IF NOT EXISTS Cars;

USE Cars;

CREATE TABLE IF NOT EXISTS carsInfo (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    placa VARCHAR(20) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    chassi VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
);

INSERT INTO users (id, name, placa, cor, chassi) VALUES
    ('1', 'Palio', '2240abc', 'branco', '123456');