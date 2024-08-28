import React from 'react';

function DownloadButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Descargar Contenido</button>
    </div>
  );
}

export default DownloadButton;
