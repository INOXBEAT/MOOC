const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint para obtener transcripción
app.post('/api/transcribe', async (req, res) => {
  const { url } = req.body;
  // Aquí deberías implementar la lógica para obtener la transcripción del video de YouTube
  // Para la demostración, devolvemos un texto de ejemplo
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
