CREATE DATABASE IF NOT EXISTS clinica_veterinaria;

USE clinica_veterinaria;

CREATE TABLE IF NOT EXISTS animal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    responsavel VARCHAR(100) NOT NULL
);