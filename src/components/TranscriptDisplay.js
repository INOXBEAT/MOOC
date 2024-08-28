import React, { useState } from 'react';

function TranscriptDisplay({ transcript, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [newTranscript, setNewTranscript] = useState(transcript);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(newTranscript);
    setEditing(false);
  };

  return (
    <div>
      <h2>Transcripción</h2>
      {editing ? (
        <div>
          <textarea
            value={newTranscript}
            onChange={(e) => setNewTranscript(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          <pre>{transcript}</pre>
          <button onClick={handleEdit}>Editar Transcripción</button>
        </div>
      )}
    </div>
  );
}

export default TranscriptDisplay;
