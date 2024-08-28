import React, { useState } from 'react';

function InteractiveContent({ onAdd }) {
  const [question, setQuestion] = useState('');

  const handleAdd = () => {
    if (question) {
      onAdd(question);
      setQuestion('');
    }
  };

  return (
    <div>
      <h2>Agregar Contenido Interactivo</h2>
      <input
        type="text"
        placeholder="Ingresa una pregunta"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <button onClick={handleAdd}>Agregar Pregunta</button>
    </div>
  );
}

export default InteractiveContent;
