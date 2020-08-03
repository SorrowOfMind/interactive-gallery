import React, {createContext, useState} from 'react';

export const ImgCtx = createContext();

const ImgCtxProvider = props => {
    const [largeImgUrl, setLargeImgUrl] = useState(null);
    return (
        <ImgCtx.Provider value={{largeImgUrl, setLargeImgUrl}}>
            {props.children}
        </ImgCtx.Provider>
    )
}

export default ImgCtxProvider;