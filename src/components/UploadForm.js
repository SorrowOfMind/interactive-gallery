import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
            <h2 className="form-title">Add your pictures</h2>
            <label htmlFor="input" className="label">+</label>
            <input type="file" name="input" id="input" className="input" onChange={handleUpload}/>
            <div className="output">
                {error ? error : file ? file.name : null}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;