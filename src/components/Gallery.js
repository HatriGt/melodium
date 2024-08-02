import React from 'react';

function Gallery() {
  const images = [
    { src: 'https://example.com/gallery1.jpg', alt: 'Students performing' },
    { src: 'https://example.com/gallery2.jpg', alt: 'Music class in session' },
    { src: 'https://example.com/gallery3.jpg', alt: 'Instruments display' },
    { src: 'https://example.com/gallery4.jpg', alt: 'Annual music festival' },
    { src: 'https://example.com/gallery5.jpg', alt: 'Student recital' },
    { src: 'https://example.com/gallery6.jpg', alt: 'Group singing session' },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Our Music School in Action</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;