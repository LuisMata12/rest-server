import { query } from "express";


const usuarioGet = (req, res) => {
    const params = req.query;
    res.json({
        "hello":'Hello World -controller',
        "metodo":"get",
        params
    })

  }
  const usuarioPost = (req, res) => {
    const {nombre,edad} = req.body;
    res.json({
        "hello":'Hello World',
        "metodo":"post",
        nombre,
        edad
    })
  }
  const usuarioDelete = (req, res) => {
    res.json({
        "hello":'Hello World',
        "metodo":"delete"
    })
  }
  const usuarioPut = (req, res) => {
    const id = req.params.id;
    res.json({
        "hello":'Hello World',
        "metodo":"put",
        id
    })
  }

  export {
    usuarioDelete,
    usuarioGet,
    usuarioPost,
    usuarioPut
  }