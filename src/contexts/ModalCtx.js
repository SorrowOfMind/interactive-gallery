import React, {createContext, useState} from 'react';

export const ModalCtx = createContext();

const ModalCtxProvider = props => {
    const [modal, setModal] = useState(false);
    return (
        <ModalCtx.Provider value={{modal, setModal}}>
            {props.children}
        </ModalCtx.Provider>
    )
}

export default ModalCtxProvider;