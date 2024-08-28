import React, { useState } from 'react';

function InteractiveContent({ questions, onAdd }) {
  const [question, setQuestion] = useState('');

  const handleAddQuestion = () => {
    if (question.trim()) {
      onAdd(question);
      setQuestion('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Contenido Interactivo</h2>
      <div className="form-group">
        <label htmlFor="questionInput">Escribe tu pregunta aquí</label>
        <textarea
          id="questionInput"
          className="form-control"
          rows="3"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleAddQuestion}
        >
          Agregar Pregunta
        </button>
      </div>
      <div className="mt-4">
        <h3>Preguntas Agregadas:</h3>
        <ul className="list-group">
          {questions.map((q, index) => (
            <li key={index} className="list-group-item">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InteractiveContent;
