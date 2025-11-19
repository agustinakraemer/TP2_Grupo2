const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controller/usuarioControlador');
const esAdmin = require('../middlewares/admin');

// TEST
router.get('/test', (req, res) => {
  res.send('✅ RUTA DE USUARIOS FUNCIONA');
});

// CRUD
router.get('/:adminId',esAdmin, usuarioControlador.listarUsuarios);
router.get('/:id/:adminId',esAdmin, usuarioControlador.obtenerUsuario);
router.post('/:adminId', esAdmin, usuarioControlador.crearUsuario);
router.delete('/:id/:adminId',esAdmin, usuarioControlador.eliminarUsuario);

module.exports = router;


