import React, {useContext} from 'react';
import useFirestore from '../hooks/useFirestore';
import {ImgCtx} from '../contexts/ImgCtx';

const Images = () => {
    const {setLargeImgUrl} = useContext(ImgCtx);
    const {docs} = useFirestore('images');

    const handleLargeImg = e => {
        const {src} = e.target;
        setLargeImgUrl(src);
    }

    console.log('images', docs)
    return (
        <div className="grid container">
            {docs && docs.map(doc => (
                <div className="img-wrapper" key={doc.id}>
                    <img src={doc.url} alt="pic" className="img" onClick={handleLargeImg}/>
                </div>
            ))}
        </div>
    )
}

export default Images
