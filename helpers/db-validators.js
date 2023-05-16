import Role from "../models/role.js";
import Usuario from '../models/user.js';

// Valdacion de rol
const esRolValido= async(rol="")=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
       throw new Error(`El rol ${rol} no esta registrdo en la base de datos`)
    }
}
// Verificacion de si ya existe el usuario en la base
const emailExiste =async(email)=>{
    const existUser = await Usuario.findOne({email});
    if(existUser){
      throw new Error(`El correo ${email} ya existe`)
    }
}
const mongoDbExist =async(id)=>{
    const existId = await Usuario.findById(id);
    if(!existId){
      throw new Error(`El id: ${id} no existe`)
    }
}

export {
    esRolValido,
    emailExiste,
    mongoDbExist
}