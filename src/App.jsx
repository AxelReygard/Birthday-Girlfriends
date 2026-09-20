import React, { useState } from 'react';
import MobileFrame from './components/MobileFrame';
import FloatingHearts from './components/FloatingHearts';
import LetterSection from './components/LetterSection';
import DiarySection from './components/DiarySection';
import FloatingHeartsSection from './components/FloatingHeartsSection';
import PhotoboxGallery from './components/PhotoboxGallery';
import MusicPlayer from './components/MusicPlayer';
import PackageTracking from './components/PackageTracking';
import { Heart } from 'lucide-react';
import './styles/main.css';
// Step flow: letter → diary → hearts → photobox → music → tracking


// Step order: letter → diary → hearts → photobox → music → tracking
const STEPS = ['letter', 'diary', 'hearts', 'photobox', 'music', 'tracking'];

const STEP_LABELS = {
  letter:   { label: 'Surat Cinta 💌',    step: 1 },
  diary:    { label: 'Buku Harian 📖',    step: 2 },
  hearts:   { label: 'Hati Terbang 💕',   step: 3 },
  photobox: { label: 'Galeri Foto 📸',    step: 4 },
  music:    { label: 'Lagu Spesial 🎵',   step: 5 },
  tracking: { label: 'Resi Paket 📦',     step: 6 },
};

export default function App() {
  const [activeStep, setActiveStep] = useState('letter');
  const [playMusicTrigger, setPlayMusicTrigger] = useState(false);

  const goNext = (nextStep) => {
    setActiveStep(nextStep);
    // Small timeout to let state settle then scroll top
    setTimeout(() => {
      document.querySelector('.mobile-app-main')?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const currentStepInfo = STEP_LABELS[activeStep];

  return (
    <MobileFrame>
      <div className="app-container">
        {/* Ambient Floating Hearts Background (always visible) */}
        <FloatingHearts />

        {/* Top Header Branding */}
        <header className="mobile-app-header">
          <div className="app-brand flex-align gap-2">
            <Heart size={18} fill="#ff758c" color="#ff758c" className="heart-beat" />
            <span className="brand-text">Happy Birthday! ✨</span>
          </div>
          <div className="header-steps-pill">
            <span className="step-current">{currentStepInfo.step}</span>
            <span className="step-sep">/</span>
            <span className="step-total">6</span>
          </div>
        </header>

        {/* Step Progress Bar */}
        <div className="global-progress-bar">
          <div
            className="global-progress-fill"
            style={{ width: `${(currentStepInfo.step / 6) * 100}%` }}
          />
        </div>

        {/* Main Content - Linear Story Flow */}
        <main className="mobile-app-main">

          {activeStep === 'letter' && (
            <LetterSection
              onNextSection={() => goNext('diary')}
              onPlayMusic={() => {}} // music plays when entering music step
            />
          )}

          {activeStep === 'diary' && (
            <DiarySection
              onNextSection={() => goNext('hearts')}
            />
          )}

          {activeStep === 'hearts' && (
            <FloatingHeartsSection
              onNextSection={() => goNext('photobox')}
            />
          )}

          {activeStep === 'photobox' && (
            <PhotoboxGallery
              onNextSection={() => goNext('music')}
            />
          )}

          {activeStep === 'music' && (
            <MusicPlayer
              autoPlayTrigger={playMusicTrigger || true}
              onNextSection={() => goNext('tracking')}
              onRestartJourney={() => {
                setPlayMusicTrigger(false);
                goNext('letter');
              }}
            />
          )}

          {activeStep === 'tracking' && (
            <PackageTracking
              onNextSection={() => {
                // Last step — restart journey
                setPlayMusicTrigger(false);
                goNext('letter');
              }}
              isLastStep
            />
          )}

        </main>
      </div>
    </MobileFrame>
  );
}
