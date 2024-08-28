import React, { useState } from 'react';
import YouTubeInput from './components/YouTubeInput';
import TranscriptDisplay from './components/TranscriptDisplay';
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

  const handleEditTranscript = (newTranscript) => {
    setTranscript(newTranscript);
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
      {transcript && (
        <>
          <TranscriptDisplay transcript={transcript} onEdit={handleEditTranscript} />
          <InteractiveContent questions={questions} onAdd={handleAddQuestion} />
          <DownloadButton onClick={handleDownload} />
        </>
      )}
    </div>
  );
}

export default App;
