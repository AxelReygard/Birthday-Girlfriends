import React, { useState } from 'react';
import { Package, Truck, MapPin, CheckCircle2, Clock, Copy, Check, Heart, Sparkles, Navigation, Info, ArrowRight, Camera, RotateCcw } from 'lucide-react';

export default function PackageTracking({ onNextSection, isLastStep }) {

  const [copied, setCopied] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const trackingNumber = 'LOVE-2-YEARS-EXPRESS';

  const handleCopy = () => {
    navigator.clipboard.writeText(trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const timelineSteps = [
    {
      status: 'Pesanan Kado Spesial Dibuat',
      time: 'Hari Ini - 07:00 WIB',
      location: 'Bengkel Cinta 2 Tahun Bersama',
      desc: 'Kado fisik spesial ulang tahun telah dipaketkan dengan pita merah & segenap rasa sayang.',
      completed: true,
    },
    {
      status: 'Sortir di Transit Hub Rindu',
      time: 'Hari Ini - 10:30 WIB',
      location: 'Hub Transit Spesial Ulang Tahun',
      desc: 'Paket dinyatakan 100% Lolos QC Cinta & Siap Diantarkan ke Tuan Putri.',
      completed: true,
    },
    {
      status: 'Sedang Dalam Perjalanan (In Transit)',
      time: 'Live Update 🚚💨',
      location: 'Menuju Alamat Rumah Kamu',
      desc: 'Kurir Ekspres sedang membawa paket kado beneran ini menuju lokasimu. Ditunggu ya manis!',
      completed: true,
      current: true,
    },
    {
      status: 'Estimasi Tiba di Tanganmu',
      time: 'Segera Tiba! 🎉',
      location: 'Halaman Rumah / Kamar Kamu',
      desc: 'Siapkan senyuman terindahmu saat membuka kado ini nanti!',
      completed: false,
    },
  ];

  return (
    <div className="package-tracking-container fade-in-up">
      {/* Journey Step Tag */}
      <div className="journey-step-tag">
        <span>Langkah 6 dari 6</span>
        <span className="dot">•</span>
        <span>Resi Paket Kado Spesial 📦</span>
      </div>

      <h2 className="section-title">Status Pengiriman Kado Ulang Tahun 🎁</h2>
      <p className="section-description">
        Karena kado asli sedang dalam perjalanan ke rumahmu, kamu bisa memantau nomor resi & lokasinya di bawah ini!
      </p>

      {/* Modern E-Commerce Courier Receipt Card */}
      <div className="receipt-card">
        {/* Receipt Header */}
        <div className="receipt-header">
          <div className="courier-brand">
            <div className="courier-logo">
              <Heart size={20} fill="#ffffff" color="#ffffff" />
            </div>
            <div>
              <h3 className="courier-name">LOVE EXPRESS COURIER</h3>
              <span className="courier-service">Layanan Pengiriman Kado 2 Tahun Cinta</span>
            </div>
          </div>
          <div className="live-status-pill pulse-badge">
            <span className="dot"></span>
            <span>DALAM PERJALANAN</span>
          </div>
        </div>

        {/* Tracking Number Barcode Box */}
        <div className="tracking-number-box">
          <div className="tracking-info">
            <span className="label">NOMOR RESI PAKET:</span>
            <span className="resi-code">{trackingNumber}</span>
          </div>
          <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Tersalin!' : 'Salin Resi'}</span>
          </button>
        </div>

        {/* Barcode Visual Decor */}
        <div className="barcode-visual" aria-hidden="true">
          <div className="barcode-lines"></div>
          <span className="barcode-number">* {trackingNumber} *</span>
        </div>

        {/* Package Specs Grid */}
        <div className="package-specs-grid">
          <div className="spec-item">
            <span className="spec-label">Pengirim:</span>
            <span className="spec-value highlight">Pasangan 2 Tahunmu 💖</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Penerima:</span>
            <span className="spec-value highlight">The Birthday Girl 👸</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Berat Paket:</span>
            <span className="spec-value">Tak Terhingga (Penuh Cinta)</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Tipe Layanan:</span>
            <span className="spec-value">Super VVIP Surprise 🚀</span>
          </div>
        </div>

        {/* Interactive Delivery Map Button */}
        <button className="btn-track-map" onClick={() => setShowMapModal(true)}>
          <Navigation size={18} />
          <span>Lacak Radar Lokasi Kurir Live 🗺️</span>
        </button>

        {/* Timeline Progress */}
        <div className="tracking-timeline">
          <h4 className="timeline-heading">
            <Clock size={16} />
            <span>Riwayat Perjalanan Paket</span>
          </h4>

          <div className="timeline-list">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`timeline-step ${step.completed ? 'completed' : ''} ${step.current ? 'current-step' : ''}`}
              >
                <div className="step-icon-col">
                  <div className="step-node">
                    {step.current ? (
                      <Truck size={14} className="truck-spin" />
                    ) : step.completed ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Package size={14} />
                    )}
                  </div>
                  {index < timelineSteps.length - 1 && <div className="step-line"></div>}
                </div>

                <div className="step-content">
                  <div className="step-header">
                    <span className="step-status">{step.status}</span>
                    <span className="step-time">{step.time}</span>
                  </div>
                  <span className="step-location">📍 {step.location}</span>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Romantic Footer Note inside receipt */}
        <div className="receipt-footer-note">
          <Sparkles size={16} className="sparkle-icon" />
          <span>"Kabari aku ya begitu paket kadonya sudah kamu terima nanti!"</span>
        </div>
      </div>

      {/* Final / Next Section Action Button */}
      <div className="next-action-box">
        {isLastStep ? (
          <>
            <p className="gift-hint-text" style={{ textAlign: 'center' }}>
              🎉 Kamu sudah sampai di penghujung perjalanan romantis ini! Tunggu paket kadonya ya, sayang! 📦❤️
            </p>
            <button className="btn-primary-romantic" onClick={onNextSection}>
              <RotateCcw size={18} />
              <span>Ulangi Perjalanan dari Awal 💌</span>
            </button>
          </>
        ) : (
          <button className="btn-primary-romantic" onClick={onNextSection}>
            <Camera size={18} />
            <span>Lanjut: Lihat Galeri Photobox 📸</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>

      {/* Live Map Radar Modal */}
      {showMapModal && (
        <div className="modal-backdrop" onClick={() => setShowMapModal(false)}>
          <div className="map-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="flex-align gap-2">
                <Navigation size={18} className="spin-icon" />
                <h3>Radar Pengiriman Kado Live</h3>
              </div>
              <button className="close-btn" onClick={() => setShowMapModal(false)}>×</button>
            </div>

            <div className="radar-map-view">
              <div className="radar-pulse"></div>
              
              {/* Origin Icon */}
              <div className="map-pin origin-pin">
                <Heart size={20} fill="#ff758c" color="#ff758c" />
                <span>Pengirim</span>
              </div>

              {/* Moving Courier Truck */}
              <div className="map-courier-truck">
                <div className="truck-bubble">Kurir Sedang OTW! 🚚</div>
                <Truck size={28} className="truck-icon" />
              </div>

              {/* Destination Icon */}
              <div className="map-pin dest-pin">
                <MapPin size={24} color="#d63384" />
                <span>Rumah kamu</span>
              </div>

              {/* Path Line */}
              <svg className="map-path-svg" viewBox="0 0 300 150">
                <path d="M 40 100 Q 150 20 260 80" stroke="#ff758c" strokeWidth="3" strokeDasharray="6,6" fill="none" />
              </svg>
            </div>

            <div className="modal-info-box">
              <Info size={16} />
              <p>Paket kadomu sudah sangat dekat dengan lokasi tujuan. Siap-siap ya! ❤️</p>
            </div>

            <button className="btn-secondary-romantic" onClick={() => setShowMapModal(false)}>
              Tutup Radar Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
