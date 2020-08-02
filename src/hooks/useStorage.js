import {useState, useEffect} from 'react';
import {storage} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const[url, setUrl] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const strgRef = storage.ref(file.name);
        strgRef.put(file).on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, err => setErr(err), async() => {
            const url = await strgRef.getDownloadURL();
            setUrl(url);
        });
    }, [file])

    return {progress, url, err};
}

export default useStorage;
