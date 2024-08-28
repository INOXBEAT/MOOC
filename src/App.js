import React, { useState } from 'react';
import YouTubeInput from './components/YouTubeInput';
import TranscriptUploader from './components/TranscriptUploader';
import InteractiveContent from './components/InteractiveContent';
import DownloadButton from './components/DownloadButton';
import './App.css';

function App() {
  const [transcript, setTranscript] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmitUrl = (url) => {
    // Lógica para obtener la transcripción desde la API de YouTube
    // Simulación de transcripción para el ejemplo
    setTranscript('Transcripción generada automáticamente...');
  };

  const handleUploadTranscript = (uploadedTranscript) => {
    const processedTranscript = processTranscript(uploadedTranscript);
    setTranscript(processedTranscript);
  };

  const processTranscript = (text) => {
    return text
      .split('\n') // Divide el texto en líneas
      .filter(line => !line.match(/^\d{2}:\d{2}:\d{2}/)) // Filtra las líneas que contienen tiempos
      .join(' ') // Junta todo en una sola línea con un espacio entre las frases
      .trim(); // Elimina espacios adicionales
  };

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleDownload = () => {
    // Lógica para generar y descargar el archivo
    alert('Funcionalidad de descarga aún no implementada');
  };

  return (
    <div className="App container mt-4">
      <header className="mb-4">
        <h1 className="text-center">Herramienta de Transcripción y Contenido Interactivo</h1>
      </header>
      <YouTubeInput onSubmit={handleSubmitUrl} />
      <TranscriptUploader onUpload={handleUploadTranscript} />
      {transcript && (
        <>
          <div className="transcript-display mt-4">
            <h3>Transcripción:</h3>
            <p>{transcript}</p> {/* Aquí se muestra la transcripción procesada */}
          </div>
          <InteractiveContent questions={questions} onAdd={handleAddQuestion} />
          <DownloadButton onClick={handleDownload} />
        </>
      )}
    </div>
  );
}

export default App;
