import React, {useContext} from 'react';
import {ImgCtx} from '../contexts/ImgCtx';
import {ModalCtx} from '../contexts/ModalCtx';
import { motion } from 'framer-motion';

const backdropVariant = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {damping: 10}
    }
}

const imgVariant = {
    hidden: {
        x: '-200vw',
        opacity: 0
    },
    visible: {
        x: '50%',
        opacity: 1,
        transition: {duration: 2, delay: 0.1},
    }
}

const Modal = () => {
    const {largeImgUrl} = useContext(ImgCtx);
    const {modal, setModal} = useContext(ModalCtx);

    const closeModal = e => {
        if (e.currentTarget.id === 'backdrop') setModal(false);
    }

    return (
        <>
        {modal &&
        <motion.div 
        className="backdrop"
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        id="backdrop"
        onClick={closeModal}
        >
            {largeImgUrl && <img src={largeImgUrl} alt="large pic" className="large-img"/>}
        </motion.div>}
        </>
    )
}

export default Modal
