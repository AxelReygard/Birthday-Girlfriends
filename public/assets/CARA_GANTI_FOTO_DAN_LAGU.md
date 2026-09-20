# 🎵 & 📸 Cara Ganti Foto dan Lagu Ulang Tahun

Web ini sudah disiapkan agar Anda bisa dengan mudah memasukkan foto-foto romantis dan lagu pilihan Anda!

## 1. 🎵 Cara Mengganti Lagu (Justin Bieber - Favorite Girl)
1. Siapkan file lagu berformat MP3 (misalnya lagu Justin Bieber - Favorite Girl).
2. Simpan file tersebut ke folder: `public/assets/music/`
3. Beri nama file: `favorite_girl.mp3`
4. Maka pemutar musik di web akan otomatis memutar lagu ini!

> **Tips**: Jika lagu Anda memiliki nama lain atau format `.m4a`/`.ogg`, Anda dapat mengubah nama filenya menjadi `favorite_girl.mp3` atau mengubah jalurnya di file `src/components/MusicPlayer.jsx`.

---

## 2. 📸 Cara Mengganti Foto Photobox & Memori
1. Siapkan 4-8 foto romantis kesukaan kamu dan pasanganmu.
2. Simpan foto ke folder: `public/assets/images/`
3. Beri nama file:
   - `foto1.jpg` (atau `.png` / `.jpeg`)
   - `foto2.jpg`
   - `foto3.jpg`
   - `foto4.jpg`
   - `foto5.jpg`
   - `foto6.jpg`

4. Web ini sudah memiliki **Visual Fallback Aesthetic** jika foto belum dimasukkan, sehingga tampilan web akan tetap langsung sangat cantik dan berfungsi!

---

## 🚚 3. Cara Mengubah Data Resi Paket Kado (Pengiriman Kado)
Jika ingin mengubah **Nomor Resi**, **Nama Pengirim**, **Nama Penerima**, atau **Timeline Ekspedisi**, Anda tinggal mengedit file:
`src/components/PackageTracking.jsx` pada bagian `INITIAL_TRACKING_DATA`.
