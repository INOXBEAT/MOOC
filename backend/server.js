const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta GET básica para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Ruta POST para generar la transcripción
app.post('/api/transcribe', async (req, res) => {
  const { url } = req.body;
  
  try {
    // Aquí deberías implementar la lógica para obtener la transcripción
    // Por ahora, usamos un ejemplo de transcripción
    const transcript = `Transcripción generada para el video: ${url}`;
    res.json({ transcript });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
