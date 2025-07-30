<h1 align="center">🇮🇩 Discover-Indonesia</h1>

<p align="center">
  <img src="https://img.shields.io/badge/last%20commit-today-brightgreen" />
  <img src="https://img.shields.io/badge/language-HTML%20%7C%20CSS%20%7C%20JavaScript-blue" />
  <img src="https://img.shields.io/badge/framework-Vanilla%20JS-yellow" />
  <img src="https://img.shields.io/badge/deployment-GitHub%20Pages-green" />
  <img src="https://img.shields.io/badge/responsive-Yes-brightgreen" />
  <img src="https://img.shields.io/badge/license-MIT-blue" />
</p>

<p align="center">Situs web sederhana yang menampilkan 5 destinasi wisata populer di Indonesia menggunakan HTML, CSS, dan JavaScript. Data destinasi disimpan dalam file <code>destinations.json</code>.</p>

---

## 🌐 Demo

Kunjungi situs di: **[https://ficrammanifur.github.io/Discover-Indonesia/](https://ficrammanifur.github.io/Discover-Indonesia/)**

---

## ✨ Fitur

- 🗺️ **Menampilkan kartu destinasi** dengan nama, deskripsi, alamat, dan tautan ke Google Maps
- 📱 **Desain responsif** dengan efek animasi kartu saat hover
- 📊 **Data dinamis** diambil dari file `destinations.json`
- 🎨 **UI/UX modern** dengan animasi smooth
- 🔍 **SEO friendly** dengan meta tags yang optimal
- ⚡ **Performance optimized** dengan lazy loading

---

## 📁 Struktur Proyek

```
Discover-Indonesia/
├── index.html              # Halaman utama situs
├── style.css               # Gaya visual untuk situs
├── main.js                 # Logika untuk memuat data dan interaksi
├── destinations.json       # Data destinasi wisata
├── simple_server.cpp       # Server C++ untuk pengembangan lokal
├── assets/                 # Folder untuk gambar dan media
│   ├── images/
│   └── icons/
└── README.md              # Dokumentasi proyek
```

---

## 🏝️ Destinasi yang Ditampilkan

1. **Bali** - Pulau Dewata dengan pantai eksotis
2. **Yogyakarta** - Kota budaya dan sejarah
3. **Raja Ampat** - Surga diving Indonesia
4. **Bromo Tengger Semeru** - Keajaiban alam Jawa Timur
5. **Komodo Island** - Rumah naga purba

---

## 🚀 Cara Menjalankan Lokal

### Metode 1: Menggunakan Live Server (Recommended)

1. **Install Live Server extension** di VS Code
2. **Buka folder proyek** di VS Code
3. **Klik kanan** pada `index.html`
4. **Pilih "Open with Live Server"**

### Metode 2: Menggunakan Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Kemudian buka browser dan akses `http://localhost:8000`

### Metode 3: Menggunakan Node.js Server

```bash
# Install http-server globally
npm install -g http-server

# Jalankan server
http-server -p 8000

# Atau menggunakan npx
npx http-server -p 8000
```

### Metode 4: Menggunakan C++ Server (Opsional)

1. **Kompilasi server:**
   ```bash
   g++ simple_server.cpp -o simple_server -std=c++17 -lpthread
   ```

2. **Jalankan server:**
   ```bash
   ./simple_server
   ```

3. **Akses di browser:**
   `http://localhost:8080`

---

## 📊 Format Data Destinasi

File `destinations.json` menggunakan struktur berikut:

```json
{
  "destinations": [
    {
      "id": 1,
      "name": "Bali",
      "description": "Pulau Dewata yang terkenal dengan pantai eksotis, budaya Hindu yang kental, dan pemandangan alam yang memukau.",
      "address": "Provinsi Bali, Indonesia",
      "image": "assets/images/bali.jpg",
      "googleMapsUrl": "https://maps.google.com/?q=Bali,Indonesia",
      "category": "Pantai",
      "rating": 4.8,
      "bestTime": "April - Oktober"
    }
  ]
}
```

---

## 🎨 Teknologi yang Digunakan

### Frontend
- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan animasi
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Media Queries untuk responsivitas
- **Vanilla JavaScript** - Interaktivitas dan DOM manipulation
  - Fetch API untuk mengambil data JSON
  - Event handling
  - Dynamic content rendering

### Development Tools
- **VS Code** - Code editor
- **Live Server** - Development server
- **Git** - Version control
- **GitHub Pages** - Deployment platform

---

## 📱 Responsivitas

Website ini dioptimalkan untuk berbagai ukuran layar:

- 📱 **Mobile** (320px - 768px)
- 📟 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)

---

## 🔧 Kustomisasi

### Menambah Destinasi Baru

1. **Edit file `destinations.json`:**
   ```json
   {
     "id": 6,
     "name": "Destinasi Baru",
     "description": "Deskripsi destinasi...",
     "address": "Alamat lengkap",
     "image": "assets/images/destinasi-baru.jpg",
     "googleMapsUrl": "https://maps.google.com/?q=...",
     "category": "Kategori",
     "rating": 4.5,
     "bestTime": "Waktu terbaik berkunjung"
   }
   ```

2. **Tambahkan gambar** ke folder `assets/images/`

### Mengubah Styling

Edit file `style.css` untuk mengubah:
- Warna tema
- Font family
- Layout dan spacing
- Animasi dan efek

### Menambah Fitur JavaScript

Edit file `main.js` untuk menambah:
- Filter berdasarkan kategori
- Search functionality
- Sorting options
- Modal untuk detail destinasi

---

## 🚀 Deployment

### GitHub Pages

1. **Push code** ke repository GitHub
2. **Buka Settings** repository
3. **Scroll ke GitHub Pages** section
4. **Pilih source branch** (biasanya `main` atau `gh-pages`)
5. **Save** dan tunggu deployment selesai

### Netlify

1. **Drag & drop** folder proyek ke Netlify
2. **Atau connect** dengan GitHub repository
3. **Deploy** otomatis setiap ada push ke main branch

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🐛 Troubleshooting

### CORS Error saat Development
- Gunakan local server (Live Server, Python, atau Node.js)
- Jangan buka file HTML langsung di browser

### Gambar tidak muncul
- Periksa path gambar di `destinations.json`
- Pastikan file gambar ada di folder `assets/images/`

### Data tidak ter-load
- Periksa console browser untuk error
- Pastikan format JSON valid
- Cek network tab untuk request yang gagal

---

## 🔮 Roadmap

- [ ] **Search & Filter** functionality
- [ ] **Favorite destinations** dengan localStorage
- [ ] **Weather integration** untuk setiap destinasi
- [ ] **User reviews** dan rating system
- [ ] **Interactive map** dengan markers
- [ ] **Multi-language** support (EN/ID)
- [ ] **PWA** (Progressive Web App) features
- [ ] **Dark mode** toggle

---

## 🤝 Contributing

1. **Fork** repository ini
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

---

## 📄 License

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ficram Manifur**
- GitHub: [@ficrammanifur](https://github.com/ficrammanifur)
- Website: [ficrammanifur.github.io](https://ficrammanifur.github.io)

---

## 🙏 Acknowledgments

- **Unsplash** untuk foto-foto destinasi
- **Google Maps** untuk integrasi peta
- **GitHub Pages** untuk hosting gratis
- **Indonesia Tourism Board** untuk inspirasi konten

<div align="center">

**🌟 Star this repository if you find it helpful!**

**🇮🇩 Mari jelajahi keindahan Indonesia bersama!**

<p><a href="#top">⬆ Kembali ke Atas</a></p>

</div>
