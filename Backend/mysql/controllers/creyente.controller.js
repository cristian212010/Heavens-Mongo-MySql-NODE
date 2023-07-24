import dbConnection from "../config/dbConnect.js";

const getAll = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT idIdentificacion, nombres,email,nroCelular,direccion,barrio.nombreBarrio FROM creyente JOIN barrio ON creyente.idBarrio = barrio.idBarrio");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const insertData = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO creyente SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteData = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM creyente WHERE idIdentificacion =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateData = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE creyente SET ? WHERE idIdentificacion =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOne = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM creyente WHERE idIdentificacion=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

//Listar creyentes sde Bucaramanga
const getBucaramanga = async (req,res)=>{
    try {
        const connection = await dbConnection();
        const datos = await connection.query(`SELECT c.idIdentificacion, c.nombres, c.email, c.nroCelular, c.direccion, b.nombreBarrio
        FROM creyente c
        JOIN barrio b ON c.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio m ON co.idMunicipio = m.idMunicipio
        JOIN departamento d ON m.idDepartamento = d.idDepartamento
        WHERE m.nombreMunicipio = 'Bucaramanga'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

//Listar creyentes de floridablanca
const getFloridablanca = async (req,res)=>{
    try {
        const connection = await dbConnection();
        const datos = await connection.query(`
        SELECT c.idIdentificacion, c.nombres, c.email, c.nroCelular, c.direccion, b.nombreBarrio
        FROM creyente c
        JOIN barrio b ON c.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio m ON co.idMunicipio = m.idMunicipio
        WHERE m.nombreMunicipio = 'FloridaBlanca'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

//Listar Creyentes de la comuna 5
const getComuna5 = async (req,res)=>{
    try {
        const connection = await dbConnection();
        const datos = await connection.query(`
        SELECT c.idIdentificacion, c.nombres, c.email, c.nroCelular, c.direccion, b.nombreBarrio
        FROM creyente c
        JOIN barrio b ON c.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        WHERE co.nombreComuna = 'Comuna 5'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

//Listar Creyentes de San Pio
const getSanPio = async (req,res)=>{
    try {
        const connection = await dbConnection();
        const datos = await connection.query(`
        SELECT c.idIdentificacion, c.nombres, c.email, c.nroCelular, c.direccion, b.nombreBarrio
        FROM creyente c
        JOIN barrio b ON c.idBarrio = b.idBarrio
        WHERE b.nombreBarrio = 'San Pio'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

//Listar Creyentes de Santander
const getSantander = async (req,res)=>{
    try {
        const connection = await dbConnection();
        const datos = await connection.query(`
        SELECT c.idIdentificacion, c.nombres, c.email, c.nroCelular, c.direccion, b.nombreBarrio
        FROM creyente c
        JOIN barrio b ON c.idBarrio = b.idBarrio
        JOIN comuna co ON b.idComuna = co.idComuna
        JOIN municipio m ON co.idMunicipio = m.idMunicipio
        JOIN departamento d ON m.idDepartamento = d.idDepartamento
        WHERE d.nombreDepartamento = 'Santander'`);
        res.send(datos);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

export const methodHTTP = {
    getAll,
    insertData,
    deleteData,
    updateData,
    getOne,
    getBucaramanga,
    getFloridablanca,
    getComuna5,
    getSanPio,
    getSantander
};