function ImageModal({ image, onClose }) {
  return (
    <div className="image-modal">
      <button onClick={onClose} className="close-button">Close</button>
      <img src={image.url} alt={image.title} className="image-modal-view" />
      <h2>{image.title}</h2>
      <h3>{image.year}</h3>
      <p>{image.description}</p>
      <p><em>Artist: {image.artist}</em></p>
    </div>
  );
}

export default ImageModal;
