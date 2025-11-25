const usuarioServicio = require('../services/usuarioServicio');

async function esAdmin(req, res, next) {
  try {
    console.log('🔥 esAdmin() - adminId recibido:', req.params.adminId);

    const usuario = await usuarioServicio.obtenerPorId(req.params.adminId);

    console.log('🔥 esAdmin() - usuario encontrado:', usuario);

    if (!usuario) {
      return res.status(404).json({
        error: 'El administrador no existe en la base de datos.'
      });
    }

    if (!usuario.isAdmin) {   
      return res.status(403).json({
        error: 'Acceso denegado. Solo los administradores pueden realizar esta acción.'
      });
    }

    next();

  } catch (error) {
    console.error('🔥 esAdmin() - ERROR:', error);
    next(error);
  }
}

module.exports = esAdmin;
