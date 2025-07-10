# Discover-Indonesia

Situs web sederhana yang menampilkan 5 destinasi wisata populer di Indonesia menggunakan HTML, CSS, dan JavaScript. Data destinasi disimpan dalam file `destinations.json`.

## Cara Mengakses
Kunjungi situs di: [https://ficrammanifur.github.io/Discover-Indonesia/](https://ficrammanifur.github.io/Discover-Indonesia/)

## Fitur
- Menampilkan kartu destinasi dengan nama, deskripsi, alamat, dan tautan ke Google Maps.
- Desain responsif dengan efek animasi kartu saat hover.
- Data destinasi diambil dari file `destinations.json`.

## File Proyek
- `index.html`: Halaman utama situs.
- `style.css`: Gaya visual untuk situs.
- `main.js`: Logika untuk memuat data dan interaksi.
- `destinations.json`: Data destinasi wisata.
- `simple_server.cpp`: Server C++ untuk pengembangan lokal (tidak digunakan di GitHub Pages).

## Cara Menjalankan Lokal
1. Kompilasi server (opsional):
   ```bash
   g++ simple_server.cpp -o simple_server -std=c++17 -lpthread

