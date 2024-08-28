import React from 'react';

function DownloadButton({ onClick }) {
  const handleDownload = () => {
    // Lógica para generar el archivo de texto
    const content = 'Transcripción y preguntas aquí'; // Reemplaza con el contenido real
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contenido.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Descargar Contenido</button>
    </div>
  );
}

export default DownloadButton;
