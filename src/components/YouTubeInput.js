import React, { useState } from 'react';

function YouTubeInput({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');

  const handleChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);

    const videoIdMatch = newUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (videoIdMatch) {
      setVideoId(videoIdMatch[1]);
      onSubmit(newUrl);
    } else {
      setVideoId('');
    }
  };

  return (
    <div className="youtube-input">
      <input
        type="text"
        className="form-control"
        placeholder="Ingresa la URL de YouTube"
        value={url}
        onChange={handleChange}
      />
      {videoId && (
        <div className="mt-3">
          <h5>Vista previa del video:</h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Vista previa de YouTube"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default YouTubeInput;
