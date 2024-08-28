import React, { useState } from "react";

function YouTubeInput({ onSubmit }) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url) {
            onSubmit(url);
            setUrl('');            
        }
    };

    return (
        <div>
            <h2>Agregar Enlace de YouTube</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa el enlace de Youtube"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Generar Trascripción</button>
            </form>
        </div>
    );
}

export default YouTubeInput;