import React from "react";
import { Link } from "react-router-dom";
import '../Gallery/Gallery.css'; 

const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image) => (
                <div key={image.id} className="gallery-item">
                    <Link to={`/image/${image.id}`} className="gallery-link">
                        <div
                            className="gallery-image-container"
                            style={{ backgroundImage: `url(${image.url})` }}
                        >
                            <div className="gallery-overlay">
                                <p className="gallery-title">{image.title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
