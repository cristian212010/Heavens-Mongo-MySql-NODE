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
INSERT INTO departamento (idDepartamento, nombreDepartamento) VALUES (1, 'Santander');

-- Insertar datos en la tabla "municipio"
INSERT INTO municipio (idMunicipio, nombreMunicipio, idDepartamento) VALUES
(1, 'Bucaramanga', 1),
(2, 'Piedecuesta', 1),
(4, 'FloridaBlanca', 1),
(5, 'Giron', 1);

-- Insertar datos en la tabla "comuna"
INSERT INTO comuna (idComuna, nombreComuna, idMunicipio) VALUES
(1, 'Comuna 2', 1),
(2, 'Comuna 10', 1),
(3, 'Comuna 3', 4),
(4, 'Comuna 4', 2),
(5, 'Comuna 5', 1);

-- Insertar datos en la tabla "barrio"
INSERT INTO barrio (idBarrio, nombreBarrio, idComuna) VALUES
(1, 'Cañaveral', 3),
(2, 'Diamante II', 2),
(3, 'Provenza', 2),
(4, 'Campohermoso', 5),
(5, 'San Pio', 4);

-- Insertar datos en la tabla "creyente"
INSERT INTO creyente (idIdentificacion, nombres, email, nroCelular, direccion, idBarrio) VALUES
(1, 'Maria Gonzalez', 'maria@gmail.com', '987654321', 'Calle 123', 1),
(2, 'Luis Ramirez', 'luis@hotmail.com', '567891234', 'Av. Principal', 3),
(3, 'Ana Smith', 'ana.smith@gmail.com', '111222333', 'Street 45', 2),
(4, 'Pedro Martinez', 'pedro.martinez@yahoo.com', '444555666', 'Avenida 7', 4),
(5, 'Laura Fernandez', 'laura.fernandez@outlook.com', '777888999', 'Plaza Mayor', 1)
(6, 'Luis Perez', 'luis@gmail.com', '1234567', 'Transversal 123', 5);
