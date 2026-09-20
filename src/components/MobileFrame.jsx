import React from 'react';

export default function MobileFrame({ children }) {
  return (
    <div className="iphone13-viewport-container">
      <div className="iphone13-viewport-screen">
        {children}
      </div>
    </div>
  );
}
