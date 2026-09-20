import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Heart, Disc, RotateCcw, Sparkles, Package, ArrowRight } from 'lucide-react';


export default function MusicPlayer({ autoPlayTrigger, onRestartJourney, onNextSection }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeLyricIndex, setActiveLyricIndex] = useState(0);
  const [hasAudioLoaded, setHasAudioLoaded] = useState(true);

  const audioRef = useRef(null);

  // Justin Bieber - Favorite Girl Romantic Lyrics Quotes
  const lyrics = [
    "I always knew you were the one...",
    "You're my prize, my favorite girl 💖",
    "2 years together, and I love you more each day...",
    "You're my number one, my favorite girl! 🌹",
    "Happy Birthday to my one and only Favorite Girl ✨",
  ];

  // Auto rotate lyrics ticker when music is playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveLyricIndex((prev) => (prev + 1) % lyrics.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, lyrics.length]);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay waiting for user interaction");
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Audio play error", e);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleAudioError = () => {
    setHasAudioLoaded(false);
  };

  return (
    <div className="music-player-container fade-in-up">
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/music/favorite_girl.mp3"
        onTimeUpdate={handleTimeUpdate}
        onError={handleAudioError}
        loop
      />

      {/* Journey Step Tag */}
      <div className="journey-step-tag">
        <span>Langkah 5 dari 6</span>
        <span className="dot">•</span>
        <span>Lagu Favorite Girl 🎵</span>
      </div>

      <h2 className="section-title">Favorite Girl — Justin Bieber 🎵</h2>
      <p className="section-description">
        Lagu spesial ini didedikasikan khusus untukmu di ulang tahun ke-2 perjalanan kita bersama! 🌹
      </p>

      {/* Music Player Card */}
      <div className="player-card">
        {/* Album Art & Vinyl Disc */}
        <div className="vinyl-section">
          <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
            <div className="vinyl-center">
              <Disc size={28} color="#ffffff" />
            </div>
          </div>
          <div className="album-cover shadow-glow">
            <Heart size={36} fill="#ff758c" color="#ff758c" className="heart-icon-pulse" />
            <span className="album-title">FAVORITE GIRL</span>
            <span className="album-artist">Justin Bieber</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Audio Spectrum Waves Animation */}
        <div className={`audio-spectrum ${isPlaying ? 'active' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Floating Lyrics Quote Ticker */}
        <div className="lyrics-box">
          <Sparkles size={14} className="sparkle-icon" />
          <p className="lyrics-text lyric-fade">{lyrics[activeLyricIndex]}</p>
        </div>

        {/* Audio Controls Bar */}
        <div className="player-controls">
          <button className="icon-btn" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          <button className="play-btn-large" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={24} fill="#ffffff" /> : <Play size={24} fill="#ffffff" className="play-icon-offset" />}
          </button>

          <button
            className="icon-btn"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
              }
            }}
            title="Replay Lagu"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        {!hasAudioLoaded && (
          <div className="audio-notice-box">
            <p>
              💡 <strong>Petunjuk Lagu</strong>: Masukkan file MP3 Justin Bieber ke folder <code>public/assets/music/favorite_girl.mp3</code> agar dapat langsung diputar!
            </p>
          </div>
        )}
      </div>

      {/* Next Section Button */}
      {onNextSection && (
        <div className="next-action-box">
          <p className="gift-hint-text" style={{ textAlign: 'center' }}>
            Ada satu kejutan lagi yang menunggumu... 📦✨
          </p>
          <button className="btn-primary-romantic" onClick={onNextSection}>
            <Package size={18} />
            <span>Lanjut: Cek Resi Kado Spesialmu 📦</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Restart Button */}
      {onRestartJourney && (
        <div className="next-action-box">
          <button className="btn-secondary-romantic mt-3" onClick={onRestartJourney}>
            <RotateCcw size={16} />
            <span>Ulangi dari Awal 💌</span>
          </button>
        </div>
      )}
    </div>
  );
}
