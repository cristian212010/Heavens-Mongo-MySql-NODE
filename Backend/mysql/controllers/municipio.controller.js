import dbConnection from "../config/dbConnect.js";

const getAll = async (req, res) => {
  try {
    const connection = await dbConnection();
    const result = await connection.query("SELECT * FROM municipio");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const insertData = async (req, res) => {
  try {
    const connection = await dbConnection();
    const result = await connection.query("INSERT INTO municipio SET?",req.body);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection();
    const result = await connection.query("DELETE FROM municipio WHERE idMunicipio =?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection();
    const result = await connection.query("UPDATE municipio SET ? WHERE idMunicipio =?",[req.body, id]);
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
    const result = await connection.query("SELECT * FROM municipio WHERE idMunicipio=?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  };
};

export const methodHTTP = {
  getAll,
  insertData,
  deleteData,
  updateData,
  getOne
};
