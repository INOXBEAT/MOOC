import React, { useState } from 'react';

function InteractiveContent({ onAdd }) {
  const [question, setQuestion] = useState('');

  const handleAdd = () => {
    onAdd(question);
    setQuestion('');
  };

  return (
    <div>
      <h2>Agregar Pregunta</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Escribe tu pregunta aquí"
      />
      <button onClick={handleAdd}>Agregar Pregunta</button>
      <div>
        <h3>Preguntas Agregadas:</h3>
        <ul>
          {/* Mostrar las preguntas aquí */}
        </ul>
      </div>
    </div>
  );
}

export default InteractiveContent;
