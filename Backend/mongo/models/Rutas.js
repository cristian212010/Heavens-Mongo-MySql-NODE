import {Schema, model} from "mongoose"

const RutasSchema = Schema({
    nivelRuta:{
        type:String,
        required: true
    }
});

const Ruta = model('nivelRutas',RutasSchema);

export default Ruta;