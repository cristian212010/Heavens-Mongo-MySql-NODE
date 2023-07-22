-- SQLBook: Code
-- Active: 1684843862427@@127.0.0.1@3306@phpmyadmin
-- SQLBook: Code

DROP DATABASE iglesiaHeavensMysqlDB;
CREATE DATABASE iglesiaHeavensMysqlDB;

USE iglesiaHeavensMysqlDB;

CREATE TABLE departamento(
    idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    nombreDepartamento VARCHAR(50)
);

CREATE TABLE municipio(
    idMunicipio INT PRIMARY KEY AUTO_INCREMENT,
    nombreMunicipio VARCHAR(50),
    idDepartamento INT,
    FOREIGN KEY(idDepartamento) REFERENCES departamento(idDepartamento)
);

CREATE TABLE comuna(
    idComuna INT PRIMARY KEY AUTO_INCREMENT,
    nombreComuna VARCHAR(50),
    idMunicipio INT,
    FOREIGN KEY(idMunicipio) REFERENCES municipio(idMunicipio)
);

CREATE TABLE barrio(
    idBarrio INT PRIMARY KEY AUTO_INCREMENT,
    nombreBarrio VARCHAR(50),
    idComuna INT,
    FOREIGN KEY(idComuna) REFERENCES comuna(idComuna)
);


CREATE TABLE creyente(
    idIdentificacion INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(50),
    email VARCHAR(50),
    nroCelular INT,
    direccion VARCHAR(50),
    idBarrio INT,
    FOREIGN KEY(idBarrio) REFERENCES barrio(idBarrio)
);

-- Insertar datos en la tabla "departamento"
INSERT INTO departamento (nombreDepartamento) VALUES ('Antioquia');
INSERT INTO departamento (nombreDepartamento) VALUES ('Valle del Cauca');
INSERT INTO departamento (nombreDepartamento) VALUES ('Bogotá D.C.');

-- Insertar datos en la tabla "municipio"
INSERT INTO municipio (nombreMunicipio, idDepartamento) VALUES ('Medellín', 1);
INSERT INTO municipio (nombreMunicipio, idDepartamento) VALUES ('Cali', 2);
INSERT INTO municipio (nombreMunicipio, idDepartamento) VALUES ('Soacha', 3);

-- Insertar datos en la tabla "comuna"
INSERT INTO comuna (nombreComuna, idMunicipio) VALUES ('Comuna 1', 1);
INSERT INTO comuna (nombreComuna, idMunicipio) VALUES ('Comuna 2', 1);
INSERT INTO comuna (nombreComuna, idMunicipio) VALUES ('Comuna 3', 2);
INSERT INTO comuna (nombreComuna, idMunicipio) VALUES ('Comuna 4', 2);

-- Insertar datos en la tabla "barrio"
INSERT INTO barrio (nombreBarrio, idComuna) VALUES ('Barrio A', 1);
INSERT INTO barrio (nombreBarrio, idComuna) VALUES ('Barrio B', 1);
INSERT INTO barrio (nombreBarrio, idComuna) VALUES ('Barrio C', 2);
INSERT INTO barrio (nombreBarrio, idComuna) VALUES ('Barrio D', 3);

-- Insertar datos en la tabla "creyente"
INSERT INTO creyente (nombres, email, nroCelular, direccion, idBarrio) 
VALUES ('Juan Pérez', 'juan@example.com', 1234567890, 'Calle 123, A', 1);

INSERT INTO creyente (nombres, email, nroCelular, direccion, idBarrio) 
VALUES ('María Gómez', 'maria@example.com', 9876543210, 'Carrera 456, B', 2);

INSERT INTO creyente (nombres, email, nroCelular, direccion, idBarrio) 
VALUES ('Carlos López', 'carlos@example.com', 4567890123, 'Avenida 789, C', 3);

INSERT INTO creyente (nombres, email, nroCelular, direccion, idBarrio) 
VALUES ('Ana Martínez', 'ana@example.com', 7890123456, 'Calle 567, D', 4);