import {Schema,model} from 'mongoose';

const FormacionSchema = Schema({
    nivelFormacion:{
        type: String,
        required: true
    }
});

const Formacion = model('nivelFormaciones',FormacionSchema)

export default Formacion;