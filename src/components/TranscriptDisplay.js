import React, { useState } from 'react';

function TranscriptDisplay({ transcript, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(transcript);

  const handleEdit = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <div className="container mt-4">
      <h2>Transcripción</h2>
      {isEditing ? (
        <div className="form-group">
          <textarea
            className="form-control"
            rows="10"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleEdit}>
            Guardar Cambios
          </button>
        </div>
      ) : (
        <div>
          <pre className="bg-light p-3 border rounded">{transcript}</pre>
          <button className="btn btn-secondary mt-2" onClick={() => setIsEditing(true)}>
            Editar Transcripción
          </button>
        </div>
      )}
    </div>
  );
}

export default TranscriptDisplay;
