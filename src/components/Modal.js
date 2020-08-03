import React, {useContext} from 'react';
import {ImgCtx} from '../contexts/ImgCtx';

const Modal = () => {
    const {largeImgUrl} = useContext(ImgCtx);
    return (
        <div className="backdrop">
            {largeImgUrl && <img src={largeImgUrl} alt="large pic"/>}
        </div>
    )
}

export default Modal
