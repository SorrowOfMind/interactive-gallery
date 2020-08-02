import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    const {progress, err, url} = useStorage(file);

    useEffect(() => {
        if (url) setFile(null);
    }, [url, setFile])

    console.log(progress, url);
    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar;
