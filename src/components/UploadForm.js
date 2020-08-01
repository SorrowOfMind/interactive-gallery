import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileTypes = ['image/png', 'image/jpeg'];

    const handleUpload = e => {
        const file = e.target.files[0];
        if (file && fileTypes.includes(file.type)) {
            setFile(file);
            setError(null);
        } else {
            setFile(null);
            setError('Only png and jpeg formats are allowed.');
        }
    }

    return (
        <form className="form container">
            <h2 className="form-title">Add some memory snapshots</h2>
            <input type="file" name="" id="" onChange={handleUpload}/>
            <div className="output">
                {error ? error : file ? file.name : null}
            </div>
        </form>
    )
}

export default UploadForm;