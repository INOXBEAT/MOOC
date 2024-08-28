const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Endpoint para obtener transcripción
app.post('/api/transcribe', async (req, res) => {
  const { url } = req.body;
  // Aquí deberías implementar la lógica para obtener la transcripción del video de YouTube
  res.json({ transcript: 'Transcripción generada automáticamente...' });
});

// Endpoint para descargar el contenido
app.get('/api/download', (req, res) => {
  // Aquí deberías implementar la lógica para generar y servir el archivo descargable
  res.send('Contenido descargado');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
