import {Schema,model} from 'mongoose'


const UsuarioSchema = Schema({
    name:{
        type:String,
        required:[true,"the name is require"]
    },
    email:{
        type:String,
        required:[true,"the email is require"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"the password is require"],
    },
    email:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        emun:["ADMIN_ROLE","USER_ROLE"]
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:true
    }
});

UsuarioSchema.methods.toJSON= function(){
    const {__v, password,...usuario}= this.toObject();
    return usuario;
}

export default model('User',UsuarioSchema)