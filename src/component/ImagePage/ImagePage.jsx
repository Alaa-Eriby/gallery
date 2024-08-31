import React from "react";
import { useParams } from "react-router-dom";
import '../ImagePage/ImagePage.css'; 

const ImagePage = ({ images }) => {
    const { id } = useParams();
    const image = images.find((img) => img.id === parseInt(id, 10));

    if (!image) {
        return <div>Image not found</div>;
    }

    return (
        <div className="main">
            <div className="pictureSection">
                <div className="all">
                <div className="imageWrapper">
                    <img src={image.url} alt={image.title} />
                </div>
                <div className="titles">
                        <div className="title-artist">
                            <h1>{image.title}</h1>
                            {image.artist && <h2 className="artist">{image.artist}</h2>}
                            {image.additionalUrl && (
                                <img 
                                    className="additionalImage"
                                    src={image.additionalUrl} 
                                    alt={`${image.title} - Additional`} 
                                />
                            )}
                        </div>
                    </div>
                    </div>
                <div className="contentSection">
                    <div className="paragraph">
                        {image.year && <h2 className="year">{image.year}</h2>}
                        <p className="description">{image.description}</p>
                        </div>
                    {image.source && (
                        <p className="source">
                            <a href={image.source} target="_blank" rel="noopener noreferrer">Go to source</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagePage;

