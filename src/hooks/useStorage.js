import React, {useState, useEffect} from 'react';
import {storage} from '../firebase/config';

const useStorage = (file) => {
    const [fileData, setFileData] = useState({
        progress: 0,
        error: null,
        url: null
    });

    useEffect(() => {
        const strgRef = storage.ref(file.name);
        strgRef.put(file).on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, err => setError(err), async() => {
            const url = await strgRef.getDownloadURL();
            setUrl(url)
        });
    }, [file])

    return {progess, url, error};
}

export default useStorage;
