import React, { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '✨', '🌸', '✨'];
    const initialHearts = Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
      left: Math.random() * 95,
      size: 14 + Math.random() * 22,
      duration: 6 + Math.random() * 9,
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    setHearts(initialHearts);
  }, []);

  return (
    <div className="floating-hearts-container" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          {heart.symbol}
        </span>
      ))}
    </div>
  );
}
