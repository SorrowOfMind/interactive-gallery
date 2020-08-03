import React, {useContext} from 'react';
import useFirestore from '../hooks/useFirestore';
import {ImgCtx} from '../contexts/ImgCtx';
import {ModalCtx} from '../contexts/ModalCtx';
import {motion} from'framer-motion';

const imgVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {delay: 0.5}
    }
}

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
                <motion.div 
                className="img-wrapper" 
                key={doc.id}
                layout
                whileHover={{scale: 1.05, opacity: 1}}
                >
                    <motion.img 
                        src={doc.url} 
                        alt="pic" 
                        className="img"
                        variants={imgVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={handleLargeImg}/>
                </motion.div>
            ))}
        </div>
    )
}

export default Images
