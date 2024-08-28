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
    const content = `Transcripción:\n${transcript}\n\nPreguntas:\n${questions.join('\n')}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contenido_generado.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="App">
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
