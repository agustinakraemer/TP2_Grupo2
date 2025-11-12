const { DataTypes } = require('sequelize');
// ojo acá: usá el mismo nombre de carpeta que tengas: "connection" o "conection"
const sequelize = require('../connection/db'); // o '../conection/db' si la carpeta tiene una sola n

const Usuario = require('./Usuario')(sequelize, DataTypes);
const Clase = require('./Clase')(sequelize, DataTypes);
const Reserva = require('./Reserva')(sequelize, DataTypes);

// Un usuario tiene muchas reservas
Usuario.hasMany(Reserva, {
  foreignKey: 'idUsuario',
  as: 'reservas'
});

// Una clase tiene muchas reservas
Clase.hasMany(Reserva, {
  foreignKey: 'idClase',
  as: 'reservas'
});

// Una reserva pertenece a un usuario
Reserva.belongsTo(Usuario, {
  foreignKey: 'idUsuario',
  as: 'usuario'
});

// Una reserva pertenece a una clase
Reserva.belongsTo(Clase, {
  foreignKey: 'idClase',
  as: 'clase'
});

module.exports = {
  sequelize,
  Usuario,
  Clase,
  Reserva
};
