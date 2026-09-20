import React, { useState } from 'react';
import { BookHeart, Heart, Sparkles, ArrowRight } from 'lucide-react';

const diaryEntries = [
  {
    date: 'Tahun Pertama Bersama 💛',
    icon: '📖',
    text: 'Hari pertama aku mengenalmu, ada sesuatu yang berbeda. Seperti dunia tiba-tiba lebih berwarna, dan hatiku menemukan rumahnya yang paling nyaman.',
  },
  {
    date: 'Momen yang Aku Syukuri 🙏',
    icon: '✍️',
    text: 'Terima kasih sudah memilihku di antara semua pilihan yang ada. Setiap hari bersamamu bukan kebetulan — itu adalah doa yang dikabulkan.',
  },
  {
    date: 'Doa Untuk Ulang Tahunmu 🌹',
    icon: '🕊️',
    text: 'Di hari yang spesial ini, aku berdoa semoga hidupmu dipenuhi kebahagiaan, kesehatanmu selalu terjaga, dan semua impian indahmu segera menjadi kenyataan.',
  },
  {
    date: 'Janji Kecil Dariku 💍',
    icon: '🤍',
    text: 'Aku berjanji akan selalu berusaha menjadi yang terbaik untukmu. Menemanimu di hari susah, merayakan bersamamu di hari bahagia — selamanya.',
  },
];

export default function DiarySection({ onNextSection }) {
  const [activeEntry, setActiveEntry] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const goToEntry = (index) => {
    if (index === activeEntry) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveEntry(index);
      setIsFlipping(false);
    }, 300);
  };

  const nextEntry = () => {
    if (activeEntry < diaryEntries.length - 1) {
      goToEntry(activeEntry + 1);
    }
  };

  const prevEntry = () => {
    if (activeEntry > 0) {
      goToEntry(activeEntry - 1);
    }
  };

  return (
    <div className="diary-section-container fade-in-up">
      {/* Journey Step Tag */}
      <div className="journey-step-tag">
        <span>Langkah 2 dari 6</span>
        <span className="dot">•</span>
        <span>Buku Harian Cinta 📖</span>
      </div>

      <div className="diary-header">
        <BookHeart size={28} color="#ff758c" className="diary-main-icon" />
        <h2 className="section-title">Diary Perasaanku Untukmu</h2>
        <p className="section-description">
          Setiap kata di sini ditulis dengan sepenuh hati, khusus untuk kamu di hari istimewa ini 🌹
        </p>
      </div>

      {/* Diary Book Visual */}
      <div className="diary-book-wrapper">
        {/* Spine decoration */}
        <div className="diary-spine"></div>

        <div className={`diary-page ${isFlipping ? 'page-flip' : ''}`}>
          {/* Page Header */}
          <div className="diary-page-header">
            <span className="diary-page-icon">{diaryEntries[activeEntry].icon}</span>
            <div>
              <span className="diary-date-label">{diaryEntries[activeEntry].date}</span>
              <div className="diary-line-dec"></div>
            </div>
          </div>

          {/* Ruled lines */}
          <div className="diary-ruled-lines">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="diary-rule"></div>
            ))}
          </div>

          {/* Content */}
          <div className="diary-content">
            <p className="diary-text">{diaryEntries[activeEntry].text}</p>
          </div>

          {/* Hearts decoration bottom */}
          <div className="diary-page-footer">
            <div className="diary-hearts">
              <span>❤️</span>
              <Heart size={12} fill="#ff758c" color="#ff758c" />
              <span>💕</span>
            </div>
            <span className="diary-page-num">{activeEntry + 1} / {diaryEntries.length}</span>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="diary-dots">
        {diaryEntries.map((_, i) => (
          <button
            key={i}
            className={`diary-dot ${i === activeEntry ? 'active' : ''}`}
            onClick={() => goToEntry(i)}
            aria-label={`Halaman ${i + 1}`}
          />
        ))}
      </div>

      {/* Page Navigation Arrows */}
      <div className="diary-nav-arrows">
        <button
          className={`diary-arrow-btn ${activeEntry === 0 ? 'disabled' : ''}`}
          onClick={prevEntry}
          disabled={activeEntry === 0}
        >
          ← Sebelumnya
        </button>
        <button
          className={`diary-arrow-btn ${activeEntry === diaryEntries.length - 1 ? 'disabled' : ''}`}
          onClick={nextEntry}
          disabled={activeEntry === diaryEntries.length - 1}
        >
          Berikutnya →
        </button>
      </div>

      {/* Next Section Button */}
      <div className="next-action-box">
        <p className="gift-hint-text" style={{ textAlign: 'center' }}>
          <Sparkles size={14} style={{ display: 'inline', marginRight: 6 }} />
          Sekarang saatnya merasakan keindahan hati yang penuh cinta... ✨
        </p>
        <button className="btn-primary-romantic" onClick={onNextSection}>
          <Heart size={18} fill="#ffffff" />
          <span>Lanjut: Curhatan Hati yang Terbang ❤️</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
