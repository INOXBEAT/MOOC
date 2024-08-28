import React, { useState } from 'react';

function YouTubeInput({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Enlace de YouTube</h2>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa un enlace de YouTube"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Generar Transcripción
        </button>
      </form>
    </div>
  );
}

export default YouTubeInput;
