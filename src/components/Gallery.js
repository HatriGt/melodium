import React from 'react';

function Gallery() {
  const images = [
    { src: require('../images/MusicImages/MainPageMusicImage.png'), alt: 'Students performing' },
    { src: require('../images/MusicImages/file.png'), alt: 'Music class in session' },
    { src: require('../images/MusicImages/file_1.png'), alt: 'Instruments display' },
    { src: require('../images/MusicImages/file_1.png'), alt: 'Annual music festival' },
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