import {Router} from 'express';
import {check} from 'express-validator'
import { usuarioDelete, usuarioGet, usuarioPost, usuarioPut } from '../controllers/users.js';

import validarCampos from '../middelwares/validar-campos.js';
import {esRolValido,emailExiste,mongoDbExist} from "../helpers/db-validators.js"

const router = Router();

router.get('/', usuarioGet);

router.put('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(mongoDbExist),
    check("rol").custom(esRolValido),
    validarCampos
], usuarioPut);

router.post('/',[
    check("name","El nombre es obligatorio").not().isEmpty(),
    check("password","El password necesita al menos 6 caracteres").isLength({min:6}),
    check("email","El correo es invalido").isEmail(),
    check("rol").custom(esRolValido),
    check("email").custom(emailExiste),
    validarCampos
], usuarioPost);

router.delete('/:id',[
    check('id','No es un id valido').isMongoId(),
    check('id').custom(mongoDbExist),
    validarCampos
], usuarioDelete);


export default router