const express = require('express');
const router = express.Router();
const TemaController = require('../../controllers/Tema/TemaController');

router.get('/listarTema', TemaController.listarTema);
router.post('/crearTema', TemaController.crearTema);
router.get('/eliminarTema/:id_temas', TemaController.eliminarTema);
router.post('/modificarTema/:id_temas', TemaController.modificarTema);

module.exports = router;