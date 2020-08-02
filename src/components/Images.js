import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Images = () => {
    const {docs} = useFirestore('images');
    console.log('images', docs)
    return (
        <div className="grid container">
            {docs && docs.map(doc => (
                <div className="img-wrapper" key={doc.id}>
                    <img src={doc.url} alt="pic" className="img"/>
                </div>
            ))}
        </div>
    )
}

export default Images
