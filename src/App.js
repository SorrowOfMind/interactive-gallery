import React from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Images from './components/Images';
import Modal from './components/Modal';
import ImgCtxProvider from './contexts/ImgCtx';
import ModalCtxProvider from './contexts/ModalCtx';

function App() {

    return (
        <div className="App">
            <Header/>
            <UploadForm/>
            <ImgCtxProvider>
            <ModalCtxProvider>
                <Images/>
                <Modal/>
            </ModalCtxProvider>
            </ImgCtxProvider>
        </div>
    );
}

export default App;
