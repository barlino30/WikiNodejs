const express = require('express');
const multer = require("../../lib/multer");
const router = express.Router();
const MaterialController = require('../../controllers/material/MaterialController');

router.get('/listarMaterial', MaterialController.listarMaterial);
router.post('/crearMaterial',  MaterialController.crearMaterial);
router.get('/eliminarMaterial/:id', MaterialController.eliminarMaterial);
router.post('/modificarMaterial/:id', MaterialController.modificarMaterial);
//multer.single('nombre formulario),
module.exports = router;