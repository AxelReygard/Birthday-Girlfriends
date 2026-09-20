import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Heart, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function LetterSection({ onNextSection, onPlayMusic }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (onPlayMusic) onPlayMusic();

      // Confetti burst animation
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ff758c', '#ff7eb3', '#ffd166', '#ffffff', '#8a2387']
        });
      } catch (e) {
        console.log('Confetti triggered');
      }
    }
  };

  return (
    <div className="letter-section-container">
      {/* Journey Step Progress Tag */}
      <div className="journey-step-tag">
        <span>Langkah 1 dari 6</span>
        <span className="dot">•</span>
        <span>Surat Ucapan Romantis 💌</span>
      </div>

      <h1 className="letter-title">Happy Birthday, My Favorite Girl! 💖</h1>
      <p className="letter-subtitle">2 Tahun Perjalanan Indah Bersamamu...</p>

      {/* Interactive Envelope Container */}
      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={handleOpenEnvelope}>
        <div className="envelope">
          {/* Top Flap */}
          <div className="envelope-flap"></div>

          {/* Wax Seal */}
          {!isOpen && (
            <div className="wax-seal" title="Klik untuk membuka surat romantis!">
              <Heart size={22} fill="#ffffff" color="#ffffff" />
              <span className="seal-text">OPEN ME</span>
            </div>
          )}

          {/* Envelope Pocket */}
          <div className="envelope-pocket"></div>

          {/* Greeting Card sliding out */}
          <div className="letter-card">
            <div className="card-decor-top">✨ 🌹 2 Years Together 🌹 ✨</div>
            <h2 className="card-greeting">Selamat Ulang Tahun, Manisku! 🎉💖</h2>
            <div className="card-body-text">
              <p>
                Tak terasa, sudah <strong>2 tahun perjalanan indah</strong> yang kita lalui bersama. Setiap hari, setiap detik bersamamu adalah momen paling berharga yang selalu aku syukuri.
              </p>
              <p>
                Kamu bukan hanya sekadar pasangan bagiku, tapi juga rumah, tempatku merasa paling aman, dan alasan utama kenapa senyumku selalu merekah setiap harinya.
              </p>
              <p>
                Terima kasih sudah bertahan, menemani, dan mencintaiku dengan begitu tulus selama 2 tahun ini. Semoga di usiamu yang baru ini, semua impian manismu terwujud dan kebahagiaan selalu memelukmu.
              </p>
              <p>
                Ingat ya sayang, kamu akan selalu menjadi <strong>Favorite Girl</strong> nomor satu di hatiku. Dulu, sekarang, dan selamanya! 🌹✨
              </p>
            </div>
            <div className="card-signature">
              <p>Dengan segenap cintaku,</p>
              <span className="signature-name">❤️ Pasanganmu yang Selalu Mencintaimu</span>
            </div>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="click-prompt pulse-animation">
          <Mail size={18} />
          <span>Klik amplop di atas untuk membuka surat 💌</span>
        </div>
      )}

      {isOpen && (
        <div className="next-action-box fade-in-up">
          <p className="gift-hint-text">
            Aku juga punya kejutan kado asli yang sedang dikirimkan khusus untukmu... 📦✨
          </p>
          <button className="btn-primary-romantic" onClick={onNextSection}>
            <BookOpen size={18} />
            <span>Lanjut: Baca Diary Cintaku 📖</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
