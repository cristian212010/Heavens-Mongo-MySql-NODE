import Creyente from '../models/Creyente.js'

const getData = async (req,res) =>{
    const data = await Creyente.find();
    res.json(data)
};

const putData = async (req,res) =>{
    const {nombre,edad,nivelFromacion,nivelRuta,Ministerio} = req.body
    const creyente = new Creyente({nombre,edad,nivelFromacion,nivelRuta,Ministerio})

    const existeNombre = await Creyente.findOne({nombre})
    if (existeNombre) {
        return res.status(400).json({
            msg: "Name is already registered"
        });
    }

    await creyente.save();
    res.json({
        "message":"post api",
        creyente,
    });
}