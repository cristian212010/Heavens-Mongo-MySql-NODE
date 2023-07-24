import Ministerio from "../models/Ministerio.js";

const getAll = async (req, res)=>{
    const info = await Ministerio.find();
    res.json(info);
};

const insertData = async (req, res)=>{
    const info = new Ministerio(req.body);
    try {
        const nuevaInfo = await info.save();
        res.json(nuevaInfo);
    } catch (error) {
        console.log(error);
    }
};

const deleteData = async (req, res)=>{
    try {
        await Ministerio.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ministerio no existe"});
    }
};

const oneData = async (req, res)=>{
    try {
        const info = await Ministerio.findOne({_id:req.params.id});
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Ministerio no existe"});
    }
}

const updateData = async (req, res)=>{
    try {
        const info = await Ministerio.findOne({_id:req.params.id});
        if (req.body.ministerio) {
            info.ministerio = req.body.ministerio;
        }
        await info.save();
        res.send(info);
    } catch (error) {
        res.status(404);
        res.send({error: "Ministerio no existe"});
    }
};


export {getAll, insertData, deleteData, oneData, updateData};