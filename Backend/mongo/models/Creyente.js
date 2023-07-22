import {Schema, model} from "mongoose"

const CreyenteSchema = Schema({
    nombre:{
        type:String,
        required : [true, 'El nombre es Obligatorio']
    },
    edad:{
        type:Number,
        required : [true, 'La edad es Obligatorio']
    },
    nivelFormacion:{
        type:String,
        required : true,
        default: "Liderazgo"
    },
    nivelRuta:{
        type:String,
        required: true,
        default: "nuevo"
    },
    Ministerio:{
        type:String,
        required:true,
        default:"Adoracion"
    }


})

const Creyente = model('creyentes',CreyenteSchema)

export default Creyente;