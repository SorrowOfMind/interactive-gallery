import React, {useContext} from 'react';
import useFirestore from '../hooks/useFirestore';
import {ImgCtx} from '../contexts/ImgCtx';
import {ModalCtx} from '../contexts/ModalCtx';

const Images = () => {
    const {setLargeImgUrl} = useContext(ImgCtx);
    const {setModal} = useContext(ModalCtx);
    const {docs} = useFirestore('images');

    const handleLargeImg = e => {
        const {src} = e.target;
        setModal(true);
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
