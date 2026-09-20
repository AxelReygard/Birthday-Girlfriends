import React, { useState } from 'react';
import { Camera, Sparkles, Maximize2, Layers, Grid, ArrowRight, Music } from 'lucide-react';

export default function PhotoboxGallery({ onNextSection }) {
  const [viewMode, setViewMode] = useState('strip'); // 'strip' or 'grid'
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [flashEffect, setFlashEffect] = useState(false);

  // Photos configuration
  const defaultPhotos = [
    {
      id: 1,
      src: '/assets/images/foto1.jpg',
      fallback: '/assets/images/foto1.svg',
      title: 'Awal Mula Kebahagiaan ✨',
      date: 'Year 1 Memories',
      caption: 'Foto saat kita pertama kali merajut senyuman bersama.',
    },
    {
      id: 2,
      src: '/assets/images/foto2.jpg',
      fallback: '/assets/images/foto2.svg',
      title: '2 Tahun Penuh Tawa 💖',
      date: '2 Years Together',
      caption: 'Setiap hari bersamamu terasa indah dan tak tergantikan.',
    },
    {
      id: 3,
      src: '/assets/images/foto3.jpg',
      fallback: '/assets/images/foto3.svg',
      title: 'My World & Everything 🌹',
      date: 'Forever & Always',
      caption: 'Terima kasih sudah selalu ada dan mencerahkan hariku.',
    },
    {
      id: 4,
      src: '/assets/images/foto4.jpg',
      fallback: '/assets/images/foto4.svg',
      title: 'Favorite Girl 💫',
      date: 'Birthday Special',
      caption: 'You will always be my number one Favorite Girl!',
    },
  ];

  const handlePhotoError = (e, fallbackSrc) => {
    if (e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc;
    }
  };

  const handlePhotoClick = (photo) => {
    setFlashEffect(true);
    setTimeout(() => setFlashEffect(false), 300);
    setSelectedPhoto(photo);
  };

  return (
    <div className="photobox-gallery-container fade-in-up">
      {/* Camera Flash Screen Animation */}
      {flashEffect && <div className="camera-flash-overlay"></div>}

      {/* Journey Step Tag */}
      <div className="journey-step-tag">
        <span>Langkah 4 dari 6</span>
        <span className="dot">•</span>
        <span>Photobox Kenangan 2 Tahun 📸</span>
      </div>

      <h2 className="section-title">Galeri Photobox Kenangan Kita 📸</h2>
      <p className="section-description">
        Momen-momen indah 2 tahun bersama yang diabadikan khusus dalam bingkai Photobox bergaya aesthetic!
      </p>

      {/* Mode Switcher Bar */}
      <div className="view-mode-bar">
        <button
          className={`mode-btn ${viewMode === 'strip' ? 'active' : ''}`}
          onClick={() => setViewMode('strip')}
        >
          <Layers size={16} />
          <span>Photobox Strip</span>
        </button>
        <button
          className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <Grid size={16} />
          <span>Grid Polaroid</span>
        </button>
      </div>

      {/* PHOTOBOX STRIP MODE */}
      {viewMode === 'strip' && (
        <div className="photobox-strip-wrapper">
          <div className="photobox-strip-frame">
            {/* Header Stamp of the Photobox */}
            <div className="strip-header">
              <div className="strip-brand">
                <Camera size={16} />
                <span>PHOTOBOX • 2 YEARS LOVE</span>
              </div>
              <span className="strip-date">SPECIAL ANNIVERSARY EDITION</span>
            </div>

            {/* Photo List inside the strip */}
            <div className="strip-photos-list">
              {defaultPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  className="strip-photo-card"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <div className="tape-sticker top-left"></div>
                  <div className="photo-wrapper">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      onError={(e) => handlePhotoError(e, photo.fallback)}
                      loading="lazy"
                    />
                    <div className="photo-overlay-icon">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  <div className="photo-caption-bar">
                    <span className="frame-num">#{idx + 1}</span>
                    <span className="frame-text">{photo.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Stamp of Photobox Strip */}
            <div className="strip-footer">
              <div className="heart-stickers">
                <span>❤️</span>
                <span>✨</span>
                <span>💖</span>
              </div>
              <p className="strip-tagline">CREATED WITH LOVE FOR MY FAVORITE GIRL</p>
            </div>
          </div>
        </div>
      )}

      {/* POLAROID GRID MODE */}
      {viewMode === 'grid' && (
        <div className="polaroid-grid">
          {defaultPhotos.map((photo) => (
            <div
              key={photo.id}
              className="polaroid-card"
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="polaroid-image-box">
                <img
                  src={photo.src}
                  alt={photo.title}
                  onError={(e) => handlePhotoError(e, photo.fallback)}
                  loading="lazy"
                />
              </div>
              <div className="polaroid-caption">
                <p className="p-title">{photo.title}</p>
                <span className="p-date">{photo.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Next Section Action Button */}
      {onNextSection && (
        <div className="next-action-box">
          <button className="btn-primary-romantic" onClick={onNextSection}>
            <Music size={18} />
            <span>Lanjut: Pemutar Lagu Favorite Girl 🎵</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* LIGHTBOX ZOOM MODAL */}
      {selectedPhoto && (
        <div className="modal-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPhoto(null)}>×</button>

            <div className="lightbox-image-container">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                onError={(e) => handlePhotoError(e, selectedPhoto.fallback)}
              />
            </div>

            <div className="lightbox-details">
              <div className="flex-align gap-2 mb-1">
                <Sparkles size={16} color="#ff758c" />
                <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              </div>
              <p className="lightbox-caption">{selectedPhoto.caption}</p>
              <span className="lightbox-date">📅 {selectedPhoto.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
