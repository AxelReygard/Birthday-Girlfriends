import React, { useEffect, useState, useRef } from 'react';
import { Heart, Sparkles, Wind, ArrowRight } from 'lucide-react';

const messages = [
  { emoji: '💖', text: 'Aku menyayangimu sepenuh hati' },
  { emoji: '🌹', text: 'Selamat ulang tahun, sayang!' },
  { emoji: '✨', text: 'Kamu adalah kebahagiaanku' },
  { emoji: '💕', text: '2 tahun penuh keindahan bersama' },
  { emoji: '🦋', text: 'Cintaku hanya untuk kamu' },
  { emoji: '🌙', text: 'Hari-hariku berarti karena ada kamu' },
  { emoji: '💫', text: 'Happy Birthday, Favorite Girl!' },
  { emoji: '🎀', text: 'Kamu adalah hadiah terindah hidupku' },
];

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    size: 16 + Math.random() * 28,
    duration: 5 + Math.random() * 8,
    delay: Math.random() * 6,
    symbol: ['❤️', '💖', '💕', '💗', '💓', '🌸', '✨', '🦋'][Math.floor(Math.random() * 8)],
    drift: (Math.random() - 0.5) * 60,
    opacity: 0.5 + Math.random() * 0.5,
  }));
}

export default function FloatingHeartsSection({ onNextSection }) {
  const [particles] = useState(() => generateParticles(24));
  const [messages2] = useState(() =>
    messages.map((m, i) => ({
      ...m,
      x: 5 + Math.random() * 75,
      y: 20 + (i * 10) + Math.random() * 5,
      delay: i * 0.6 + Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
    }))
  );
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowAll(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fhs-container fade-in-up">
      {/* Journey Step Tag */}
      <div className="journey-step-tag">
        <span>Langkah 3 dari 6</span>
        <span className="dot">•</span>
        <span>Lautan Hati Terbang 💕</span>
      </div>

      <div className="fhs-header">
        <h2 className="section-title">Perasaanku Terbang Untukmu</h2>
        <p className="section-description">
          Setiap hati yang terbang membawa satu doa dan satu pesan cinta spesial untukmu 🌸
        </p>
      </div>

      {/* The animated heart canvas */}
      <div className="fhs-canvas">
        {/* Background floating hearts */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="fhs-bg-heart"
            style={{
              left: `${p.x}%`,
              bottom: '-30px',
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
              '--drift': `${p.drift}px`,
            }}
          >
            {p.symbol}
          </span>
        ))}

        {/* Message bubbles */}
        {showAll && messages2.map((msg, i) => (
          <div
            key={i}
            className="fhs-message-bubble"
            style={{
              left: `${msg.x}%`,
              top: `${msg.y}%`,
              animationDelay: `${msg.delay}s`,
              animationDuration: `${msg.duration}s`,
            }}
          >
            <span className="fhs-bubble-emoji">{msg.emoji}</span>
            <span className="fhs-bubble-text">{msg.text}</span>
          </div>
        ))}

        {/* Central heart glow */}
        <div className="fhs-center-heart">
          <div className="fhs-heart-ring fhs-ring-1"></div>
          <div className="fhs-heart-ring fhs-ring-2"></div>
          <div className="fhs-heart-ring fhs-ring-3"></div>
          <Heart size={52} fill="#ff758c" color="#ff758c" className="fhs-main-heart" />
        </div>
      </div>

      {/* Love counter stats */}
      <div className="fhs-stats-row">
        <div className="fhs-stat-pill">
          <span className="fhs-stat-num">∞</span>
          <span className="fhs-stat-label">Rasa Sayang</span>
        </div>
        <div className="fhs-stat-pill">
          <span className="fhs-stat-num">2</span>
          <span className="fhs-stat-label">Tahun Bersama</span>
        </div>
        <div className="fhs-stat-pill">
          <span className="fhs-stat-num">1</span>
          <span className="fhs-stat-label">Cinta Sejati</span>
        </div>
      </div>

      {/* Next button */}
      <div className="next-action-box">
        <p className="gift-hint-text" style={{ textAlign: 'center' }}>
          Ada kenangan indah yang ingin aku tunjukkan padamu... 📸
        </p>
        <button className="btn-primary-romantic" onClick={onNextSection}>
          <Sparkles size={18} />
          <span>Lanjut: Galeri Foto Kenangan Kita 📸</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
