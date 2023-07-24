import Creyente from "../models/Creyente.js";

const getAll = async (req, res)=>{
    const info = await Creyente.find();
    res.json(info);
};

const insertData = async (req, res)=>{
    const info = new Creyente(req.body);
    try {
        const nuevaInfo = await info.save();
        res.json(nuevaInfo);
    } catch (error) {
        console.log(error);
    }
};

const deleteData = async (req, res)=>{
    try {
        await Creyente.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente no existe"});
    }
};

const oneData = async (req, res)=>{
    try {
        const info = await Creyente.findOne({_id:req.params.id});
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente no existe"});
    }
};

const updateData = async (req, res)=>{
    try {
        const info = await Creyente.findOne({_id:req.params.id});
        if (req.body.nombre) {
            info.nombre = req.body.nombre;
        }
        if (req.body.edad) {
            info.edad = req.body.edad;
        }
        if (req.body.nivelFormacion) {
            info.nivelFormacion = req.body.nivelFormacion;
        }
        if (req.body.nivelRuta) {
            info.nivelRuta = req.body.nivelRuta;
        }
        if (req.body.ministerio) {
            info.ministerio = req.body.ministerio;
        }
        await info.save();
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente no existe"});
    }
};


export {getAll, insertData, deleteData, oneData, updateData};