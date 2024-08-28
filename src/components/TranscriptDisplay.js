import React, { useState } from 'react';

function TranscriptDisplay({ transcript, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTranscript, setEditedTranscript] = useState(transcript);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTranscript);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTranscript(e.target.value);
  };

  return (
    <div>
      <h2>Transcripción</h2>
      {isEditing ? (
        <>
          <textarea
            value={editedTranscript}
            onChange={handleChange}
            rows="10"
            cols="50"
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <pre>{transcript}</pre>
          <button onClick={handleEditClick}>Editar Transcripción</button>
        </>
      )}
    </div>
  );
}

export default TranscriptDisplay;
