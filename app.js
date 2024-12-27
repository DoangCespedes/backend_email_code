// Importamos las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes'); // Importamos el componente de rutas

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(cors()); // Para permitir solicitudes desde otros dominios
app.use(bodyParser.json()); // Parsear JSON en el cuerpo de las solicitudes

// Ruta principal para el servicio de envío de correos
app.use('/api/emails', emailRoutes);

// Manejo de errores (middleware)
app.use((err, req, res, next) => {
  console.error('Error en el servidor:', err.message);
  res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
