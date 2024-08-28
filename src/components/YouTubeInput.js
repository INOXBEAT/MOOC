import React, { useState } from 'react';

function YouTubeInput({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const data = await response.json();
      onSubmit(data.transcript);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudo obtener la transcripción. Verifica la URL y el servidor.');
    }
  };

  return (
    <div>
      <h2>Agregar Enlace de YouTube</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingresa un enlace de Youtube"
          required
        />
        <button type="submit">Generar Transcripción</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default YouTubeInput;
