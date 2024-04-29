const express = require('express');
const router = express.Router();

const empleadoController = require ('../controllers/empleadoController');

router.get('/', empleadoController.mostrar);

module.exports=router;