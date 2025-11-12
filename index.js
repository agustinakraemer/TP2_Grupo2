const express = require('express');
const { sequelize } = require('./models'); // ahora lo traemos de models

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.json({ mensaje: 'pong 🏓' });
});

// Conexión + sync de modelos + levantar server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a MySQL correctamente');
    return sequelize.sync(); // crea tablas usuarios, clases, reservas si no existen
    // si querés forzar cambios de columnas: sequelize.sync({ alter: true })
  })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar o sincronizar la base de datos:', err);
  });
