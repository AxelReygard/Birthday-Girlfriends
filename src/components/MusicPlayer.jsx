import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Disc, RotateCcw, Sparkles, Package, ArrowRight } from 'lucide-react';

export default function MusicPlayer({ autoPlayTrigger, onRestartJourney, onNextSection }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeLyricIndex, setActiveLyricIndex] = useState(0);
  const [hasAudioLoaded, setHasAudioLoaded] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const lyrics = [
    { time: 0,   text: "🎵 Favorite Girl — Justin Bieber" },
    { time: 4,   text: "Ah ah ah ah..." },
    { time: 13,  text: "I always knew you were the best..." },
    { time: 19,  text: "The coolest girl I know 🌟" },
    { time: 24,  text: "So prettier than all the rest" },
    { time: 29,  text: "The star of my show ⭐" },
    { time: 34,  text: "So many times I wished you'd be the one for me..." },
    { time: 41,  text: "But never knew you'd get like this, girl 💫" },
    { time: 47,  text: "You're who I'm thinking of..." },
    { time: 51,  text: "Girl, you ain't my runner-up 🏆" },
    { time: 56,  text: "And no matter what, you're always number one" },
    { time: 62,  text: "My prize possession, one and only 💎" },
    { time: 67,  text: "Adore you girl, I want you..." },
    { time: 71,  text: "The one I can't live without 💖" },
    { time: 76,  text: "That's you, that's you 🥺" },
    { time: 80,  text: "You're my special little lady ✨" },
    { time: 85,  text: "The one that makes me crazy 😍" },
    { time: 90,  text: "Of all the girls I've ever known..." },
    { time: 95,  text: "It's you, it's you 💝" },
    { time: 100, text: "My favorite, my favorite 🌹" },
    { time: 104, text: "My favorite, my favorite girl..." },
    { time: 109, text: "My favorite girl 💗" },
    { time: 115, text: "You're used to goin' out your way..." },
    { time: 120, text: "To impress these Mr. Wrongs" },
    { time: 125, text: "But you can be yourself with me 🤍" },
    { time: 130, text: "I'll take you as you are" },
    { time: 135, text: "I know they said believe in love..." },
    { time: 140, text: "It's a dream that can't be real" },
    { time: 145, text: "So girl let's write a fairytale 📖" },
    { time: 150, text: "And show 'em how we feel 💞" },
    { time: 155, text: "You're who I'm thinking of..." },
    { time: 160, text: "Girl, you ain't my runner-up 🏆" },
    { time: 165, text: "And no matter what, you're always number one" },
    { time: 170, text: "My prize possession, one and only 💎" },
    { time: 175, text: "Adore you girl, I want you..." },
    { time: 179, text: "The one I can't live without 💖" },
    { time: 183, text: "That's you, that's you 🥺" },
    { time: 187, text: "You're my special little lady ✨" },
    { time: 192, text: "The one that makes me crazy 😍" },
    { time: 197, text: "Of all the girls I've ever known..." },
    { time: 202, text: "It's you, it's you 💝" },
    { time: 207, text: "My favorite, my favorite 🌹" },
    { time: 211, text: "My favorite girl... 💗" },
    { time: 217, text: "You take my breath away 💨" },
    { time: 222, text: "With everything you say..." },
    { time: 226, text: "I just wanna be with you 🫶" },
    { time: 231, text: "My baby, my baby, oh..." },
    { time: 236, text: "My miss don't play no games" },
    { time: 241, text: "Treat you no other way" },
    { time: 246, text: "Than you deserve 👑" },
    { time: 250, text: "'Cause you're the girl of my dreams 🌙" },
    { time: 256, text: "My prize possession, one and only 💎" },
    { time: 261, text: "Adore you girl, I want you..." },
    { time: 265, text: "The one I can't live without 💖" },
    { time: 270, text: "That's you, that's you 🥺" },
    { time: 274, text: "You're my special little lady ✨" },
    { time: 279, text: "The one that makes me crazy 😍" },
    { time: 284, text: "Of all the girls I've ever known..." },
    { time: 289, text: "It's you, it's you 💝" },
    { time: 294, text: "My favorite, my favorite girl 🌹" },
    { time: 300, text: "My favorite girl... 💗" },
  ];

  useEffect(() => {
    let idx = 0;
    for (let i = lyrics.length - 1; i >= 0; i--) {
      if (currentTime >= lyrics[i].time) { idx = i; break; }
    }
    setActiveLyricIndex(idx);
  }, [currentTime]);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {}); }
  };

  const toggleMute = () => {
    if (audioRef.current) { audioRef.current.muted = !isMuted; setIsMuted(!isMuted); }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const ct = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      setCurrentTime(ct); setDuration(dur); setProgress((ct / dur) * 100);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const handleAudioError = () => setHasAudioLoaded(false);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="music-player-container fade-in-up">
      <audio ref={audioRef} src="/assets/music/Favorite Girl.mp3" onTimeUpdate={handleTimeUpdate} onError={handleAudioError} loop />

      <div className="journey-step-tag">
        <span>Langkah 5 dari 6</span>
        <span className="dot">•</span>
        <span>Lagu Favorite Girl 🎵</span>
      </div>

      <h2 className="section-title">Favorite Girl — Justin Bieber 🎵</h2>
      <p className="section-description">
        Lagu spesial ini didedikasikan khusus untukmu di ulang tahun kamu selama perjalanan kita bersama! 🌹
      </p>

      <div className="player-card">
        <div className="vinyl-section">
          <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
            <div className="vinyl-center"><Disc size={28} color="#ffffff" /></div>
          </div>
          <div className="album-cover shadow-glow">
            <Heart size={36} fill="#ff758c" color="#ff758c" className="heart-icon-pulse" />
            <span className="album-title">FAVORITE GIRL</span>
            <span className="album-artist">Justin Bieber</span>
          </div>
        </div>

        <div className="progress-bar-container" onClick={handleProgressClick} style={{ cursor: 'pointer' }} title="Klik untuk loncat ke posisi lagu">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', padding: '2px 4px 6px' }}>
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 ? formatTime(duration) : '--:--'}</span>
        </div>

        <div className={`audio-spectrum ${isPlaying ? 'active' : ''}`}>
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </div>

        <div className="lyrics-box">
          <Sparkles size={14} className="sparkle-icon" />
          <p key={activeLyricIndex} className="lyrics-text lyric-fade">{lyrics[activeLyricIndex].text}</p>
        </div>

        <div className="player-controls">
          <button className="icon-btn" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button className="play-btn-large" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={24} fill="#ffffff" /> : <Play size={24} fill="#ffffff" className="play-icon-offset" />}
          </button>
          <button className="icon-btn" onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }} title="Replay Lagu">
            <RotateCcw size={20} />
          </button>
        </div>

        {!hasAudioLoaded && (
          <div className="audio-notice-box"><p>💡 <strong>Selamat mendengarkan</strong></p></div>
        )}
      </div>

      {onNextSection && (
        <div className="next-action-box">
          <p className="gift-hint-text" style={{ textAlign: 'center' }}>Ada satu kejutan lagi yang menunggumu... 📦✨</p>
          <button className="btn-primary-romantic" onClick={onNextSection}>
            <Package size={18} /><span>Lanjut: Cek Resi Kado Spesialmu 📦</span><ArrowRight size={18} />
          </button>
        </div>
      )}

      {onRestartJourney && (
        <div className="next-action-box">
          <button className="btn-secondary-romantic mt-3" onClick={onRestartJourney}>
            <RotateCcw size={16} /><span>Ulangi dari Awal 💌</span>
          </button>
        </div>
      )}
    </div>
  );
}
