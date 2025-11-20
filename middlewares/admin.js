const buscarUsuario = require('../services/usuarioServicio');

async function esAdmin(req, res, next) {
const usuario = await buscarUsuario.obtenerPorId(req.params.adminId)
const isAdmin = usuario.isAdmin; 
  if (isAdmin === true) {
    next(); // puede continuar
  } else {
    res.status(403).json({ error: 'Acceso denegado. Solo para administradores.' });
  }
}

module.exports = esAdmin;
