import bcryptjs from 'bcryptjs'


import Usuario from '../models/user.js'


const usuarioGet = async(req, res) => {

  const {limite = 5, desde = 0} = req.query;

  // const usuarios = await Usuario.find({state:true})
  //     .limit(Number(limite))
  //     .skip(Number(desde))
  // const total = await Usuario.countDocuments({state:true});

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({state:true}),
    Usuario.find({state:true})
      .limit(Number(limite))
      .skip(Number(desde))
  ])

  res.json({
    total,
    usuarios
  })
}


const usuarioPost = async (req, res) => {

    const {name, email, password, rol} = req.body;
    const usuario = new Usuario({name, email, password, rol});

    // encriptar el password

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);

    // guardar en la base de datos
    
    await usuario.save();
    
    res.json(usuario)
  }


  const usuarioDelete =async (req, res) => {
    const id = req.params.id;

    // borrar fisicamente
    // const usuario = await Usuario.findByIdAndDelete(id)

    // Cambiar el estado del usuario
    const usuario = await Usuario.findByIdAndUpdate(id,{state:false})
    
    res.json(usuario)
  }


  const usuarioPut =async (req, res) => {

    const id = req.params.id;
    const {password, google, email,_id,...resto} = req.body;

    // TODO VALIDAR CONTRA LA DB
    if(password){
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password,salt,{new:true});
    }
    const usuario = await Usuario.findByIdAndUpdate(id,resto,{new: true});
  
    res.json({
        "metodo":"put",
        usuario
    })
  }

  export {
    usuarioDelete,
    usuarioGet,
    usuarioPost,
    usuarioPut
  }