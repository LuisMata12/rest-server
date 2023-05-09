import {Router} from 'express';
import { usuarioDelete, usuarioGet, usuarioPost, usuarioPut } from '../controllers/users.js';

const router = Router();

router.get('/', usuarioGet)
router.put('/:id', usuarioPut)
router.post('/', usuarioPost)
router.delete('/', usuarioDelete)


export default router