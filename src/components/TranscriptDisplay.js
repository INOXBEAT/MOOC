import React from 'react';

function TranscriptDisplay({ transcript, onEdit}) {
    return (
        <div>
            <h2>Trascripción del Video</h2>
            <textarea 
                rows={"10"}
                cols={"80"}
                value={transcript}
                onChange={(e) => onEdit(e.target.value)}
            />
        </div>
    );
}

export default TranscriptDisplay;