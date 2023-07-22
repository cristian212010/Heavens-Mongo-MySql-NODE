import {Schema, model} from "mongoose"

const MinisterioSchema = Schema({
    Ministerio:{
        type: String,
        required : true
    }
})

const Ministerio = model('Ministerios',MinisterioSchema)

export default Ministerio;