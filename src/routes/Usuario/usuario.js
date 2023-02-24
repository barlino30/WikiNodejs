const express = require('express');
const router = express.Router();
const UsuarioController = require('../../controllers/usuario/UsuarioController');

router.get('/listarUsuario', UsuarioController.listarUsuario);
router.post('/crearUsuario', UsuarioController.crearUsuario);
router.get('/eliminarUsuario/:id', UsuarioController.eliminarUsuario);
router.post('/modificarUsuario/:id', UsuarioController.modificarUsuario);

router.get('/listarUsu', UsuarioController.listarUsuario1);
router.post('/crearUsu', UsuarioController.crearUsuario1);


router.get('/api/listarUsuario', UsuarioController.listarUsuarioApi);
router.post('/api/crearUsuario', UsuarioController.crearUsuarioApi);
router.delete('/api/eliminarUsuario/:id', UsuarioController.eliminarUsuarioApi);
router.put('/api/modificarUsuario/:id', UsuarioController.modificarUsuarioApi);




module.exports = router;