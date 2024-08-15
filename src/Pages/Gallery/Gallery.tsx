import React from 'react';
import { logo1 } from '../../assets';

const Gallery = () => {
    return (
        <div className="gallery" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[logo1, logo1, logo1].map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} style={{ width: '200px', height: '200px', marginRight: 10 }} />
            ))}
        </div>
    );
};

export default Gallery;