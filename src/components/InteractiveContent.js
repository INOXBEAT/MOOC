import React, { useState } from 'react';

function InteractiveContent({ questions, onAdd }) {
  const [question, setQuestion] = useState('');

  const handleAddClick = () => {
    if (question.trim()) {
      onAdd(question);
      setQuestion('');
    }
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
      <button onClick={handleAddClick}>Agregar Pregunta</button>
      <h3>Preguntas Agregadas:</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default InteractiveContent;
