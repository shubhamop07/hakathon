import React, { useState } from 'react';

export default function Alerts() {
    const [alert, setAlert] = useState(true); // Assuming alert starts as visible for demonstration.

    const handleCloseError = () => {
        setAlert(false);
    }

    return (
        alert && (
            <div
                style={{
                    position: 'absolute',
                    top: '10px', // Adding some space from the top for better visibility
                    right: '10px', 
                    zIndex: 1,
                    width: 'auto'
                }}
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
            >
                <strong style={{ color: 'red' }}>Error</strong> : <span style={{ color: 'crimson' }}>Something went wrong!</span>
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={handleCloseError}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    );
}
