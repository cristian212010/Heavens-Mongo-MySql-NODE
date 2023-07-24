import Ruta from "../models/Rutas.js";

const getAll = async (req, res)=>{
    const info = await Ruta.find();
    res.json(info);
};

const insertData = async (req, res)=>{
    const info = new Ruta(req.body);
    try {
        const nuevaInfo = await info.save();
        res.json(nuevaInfo);
    } catch (error) {
        console.log(error);
    }
};

const deleteData = async (req, res)=>{
    try {
        await Ruta.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ruta no existe"});
    }
};

const oneData = async (req, res)=>{
    try {
        const info = await Ruta.findOne({_id:req.params.id});
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Ruta no existe"});
    }
}

const updateData = async (req, res)=>{
    try {
        const info = await Ruta.findOne({_id:req.params.id});
        if (req.body.nivelRuta) {
            info.nivelRuta = req.body.nivelRuta;
        }
        await info.save();
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Ruta no existe"});
    }
};


export {getAll, insertData, deleteData, oneData, updateData};