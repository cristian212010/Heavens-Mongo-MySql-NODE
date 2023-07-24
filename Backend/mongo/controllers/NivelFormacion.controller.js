import Formacion from "../models/Formacion.js";

const getAll = async (req, res)=>{
    const info = await Formacion.find();
    res.json(info);
};

const insertData = async (req, res)=>{
    const info = new Formacion(req.body);
    try {
        const nuevaInfo = await info.save();
        res.json(nuevaInfo);
    } catch (error) {
        console.log(error);
    }
};

const deleteData = async (req, res)=>{
    try {
        await Formacion.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Formacion no existe"});
    }
};

const oneData = async (req, res)=>{
    try {
        const info = await Formacion.findOne({_id:req.params.id});
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Formacion no existe"});
    }
}

const updateData = async (req, res)=>{
    try {
        const info = await Formacion.findOne({_id:req.params.id});
        if (req.body.nivelFormacion) {
            info.nivelFormacion = req.body.nivelFormacion;
        }
        await info.save();
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Formacion no existe"});
    }
};


export {getAll, insertData, deleteData, oneData, updateData};