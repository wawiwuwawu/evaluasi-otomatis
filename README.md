# Skrip Otomatis Pengisian Kuesioner Perkuliahan

Repositori ini berisi kumpulan skrip JavaScript yang dirancang untuk mengotomatiskan proses pengisian formulir evaluasi dan kuesioner di portal akademik. Skrip ini dibuat untuk tujuan edukasi dan membantu mempercepat proses pengisian yang repetitif.

---

##  Daftar Skrip

Ada dua jenis skrip utama dalam repositori ini, masing-masing untuk jenis formulir yang berbeda.

### 1. `skip_avaluasi_1.js`
Skrip ini ditujukan untuk formulir **evaluasi umum** yang memiliki format multi-halaman (misalnya, halaman 1 sampai 24).

**Fitur:**
* Secara otomatis memilih opsi jawaban pada setiap halaman. **Untuk pilihan jawabaanya bisa disesuaikan masing masing.**
* Secara otomatis mengklik tombol "Selanjutnya" untuk pindah ke halaman berikutnya.
* Berhenti ketika semua halaman telah terisi.

### 2. `skip_avaluasi_2.js`
Skrip ini dirancang untuk alur **evaluasi dosen** yang lebih kompleks, yang biasanya dimulai dari halaman dasbor.

**Fitur:**
* Memulai proses dari halaman daftar dosen dengan mengklik "Mulai Penilaian".
* Masuk ke dalam mode perulangan (loop) untuk setiap dosen.
* Mengisi semua pertanyaan di dalam *pop-up* (modal) untuk dosen saat ini. **Untuk pilihan jawabaanya bisa disesuaikan masing masing.**
* Mengklik "Simpan & Lanjutkan" untuk memuat form dosen berikutnya.
* Berhenti secara otomatis setelah dosen terakhir selesai dievaluasi.

---

## Cara Penggunaan 🚀

Langkah-langkah untuk menggunakan skrip ini sangat mudah:

1.  **Pilih Skrip yang Tepat**: Tentukan formulir mana yang akan Anda isi dan pilih file skrip yang sesuai (`evaluasi-umum.js` atau `evaluasi-dosen.js`).

2.  **Buka Halaman Awal**:
    * Untuk `skip_avaluasi_1.js`, buka halaman pertama dari kuesioner tersebut.
    * Untuk `skip_avaluasi_2.js`, buka halaman **dasbor** tempat daftar dosen ditampilkan (sebelum mengklik "Mulai Penilaian").

3.  **Buka Developer Tools**: Tekan tombol `F12` di keyboard Anda untuk membuka Developer Tools di browser. Atau bisa pergi ke titik 3 pada browser --> More Tools --> developer tools

4.  **Buka Console**: Di jendela Developer Tools, klik tab **`Console`**.

5.  **Salin Kode Skrip**: Buka file `.js` yang sudah Anda pilih, lalu salin **seluruh isi kode** di dalamnya (Ctrl+A, lalu Ctrl+C).

6.  **Tempel dan Jalankan**: Kembali ke tab `Console` di browser, tempel kode yang sudah Anda salin (Ctrl+V), lalu tekan `Enter`.

7.  **Klik Tombol Otomatis**: Sebuah tombol khusus akan muncul di pojok halaman web (biasanya berwarna hijau atau biru). Klik tombol tersebut untuk memulai proses otomatisasi. Duduk dan saksikan skrip bekerja!

---

## Kustomisasi Pilihan Jawaban 🔧

Secara default, skrip `evaluasi-dosen.js` diatur untuk memilih **"Baik"** atau **"Sangat Baik"**. Anda bisa dengan mudah mengubahnya.

Buka file `evaluasi-dosen.js` dan cari baris kode berikut:

```javascript
if (label.textContent.trim() === 'Baik') {
```

Anda bisa mengubah teks `'Baik'` menjadi pilihan lain yang Anda inginkan, misalnya:

* `'Sangat Baik'`
* `'Cukup'`
* `'Kurang'`

Pastikan teks yang Anda masukkan sama persis dengan yang ada di halaman web.

---

## Disclaimer ⚠️

* **Tujuan Edukasi**: Skrip ini dibuat hanya untuk tujuan pembelajaran dan otomatisasi tugas pribadi.
* **Gunakan dengan Bijak**: Anda bertanggung jawab penuh atas penggunaan skrip ini.
* **Pembaruan Situs Web**: Skrip ini bergantung pada struktur HTML halaman web. Jika pengembang situs web mengubah struktur kodenya di masa depan, skrip ini mungkin tidak akan berfungsi lagi dan perlu disesuaikan.
