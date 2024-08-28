import React, { useState } from 'react';

function TranscriptUploader({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      onUpload(e.target.result);
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <div className="transcript-uploader">
      <h3>Upload Transcript</h3>
      <input type="file" accept=".txt,.xlsx,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload} className="btn btn-primary mt-2">
        Upload
      </button>
    </div>
  );
}

export default TranscriptUploader;
