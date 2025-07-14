(function() {
    'use strict';
    console.log("Skrip Asisten Evaluasi Dosen v6 (Jeda Diperpanjang) siap dijalankan...");

    // Fungsi untuk memberi jeda (waktu dalam milidetik)
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Fungsi utama yang menjalankan seluruh alur otomatisasi
    async function mulaiEvaluasiTotal() {
        const tombolPemicu = document.getElementById('tombol-evaluasi-dosen-otomatis');
        tombolPemicu.innerHTML = '⚙️ Sedang Bekerja...';
        tombolPemicu.disabled = true;

        const tombolMulai = Array.from(document.querySelectorAll('button')).find(
            btn => (btn.textContent || btn.innerText).trim() === 'Mulai Penilaian'
        );

        if (tombolMulai) {
            console.log("Menemukan tombol 'Mulai Penilaian', mengklik...");
            tombolMulai.click();
        } else {
            console.log("Tombol 'Mulai Penilaian' tidak ditemukan, lanjut memproses form.");
        }

        console.log("Menunggu form evaluasi dimuat...");
        await sleep(4000); 

        while (true) {
            console.log("--- Memproses form untuk dosen saat ini ---");

            let jawabanDipilih = 0;
            document.querySelectorAll('label').forEach(label => {
                if (label.textContent.trim() === 'Baik') {
                    const inputId = label.getAttribute('for');
                    if (inputId) {
                        const radioInput = document.getElementById(inputId);
                        if (radioInput) {
                            radioInput.click();
                            jawabanDipilih++;
                        }
                    }
                }
            });

            if (jawabanDipilih > 0) {
                console.log(`Berhasil mengklik ${jawabanDipilih} jawaban "Baik".`);
            } else {
                console.error("Gagal memilih jawaban. Hentikan skrip.");
                tombolPemicu.innerHTML = '❌ Gagal';
                return;
            }

            const textareaSaran = document.querySelector('textarea');
            if (textareaSaran) {
                textareaSaran.value = "Proses pembelajaran sudah berjalan dengan baik. Terima kasih.";
                console.log("Mengisi kolom kritik dan saran.");
            }

            await sleep(500);

            const tombolLanjutkan = Array.from(document.querySelectorAll('button')).find(
                btn => (btn.textContent || btn.innerText).trim().includes('Simpan & Lanjutkan')
            );

            if (tombolLanjutkan) {
                console.log("Menemukan 'Simpan & Lanjutkan', mengklik...");
                tombolLanjutkan.click();
                
                // --- JEDA DIPERPANJANG ---
                // Menunggu lebih lama agar form dosen berikutnya benar-benar siap
                console.log("Menunggu 7 detik untuk memuat form berikutnya...");
                await sleep(7000); // Jeda diperpanjang menjadi 5 detik
            } else {
                console.log("Tombol 'Simpan & Lanjutkan' tidak ditemukan. Evaluasi dianggap selesai.");
                break; 
            }
        }

        console.log("🎉 Semua evaluasi dosen telah selesai!");
        alert("🎉 Semua evaluasi dosen telah selesai!");
        tombolPemicu.innerHTML = '✔️ Semua Selesai';
    }

    // --- Pembuatan Tombol Pemicu ---
    if (document.getElementById('tombol-evaluasi-dosen-otomatis')) {
        document.getElementById('tombol-evaluasi-dosen-otomatis').remove();
    }
    const btn = document.createElement('button');
    btn.id = 'tombol-evaluasi-dosen-otomatis';
    btn.innerHTML = '✔️ Jalankan Evaluasi (Pilih Baik)';
    btn.style = 'position: fixed; top: 15px; right: 15px; z-index: 9999; padding: 10px 18px; background-color: #17a2b8; color: white; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 14px; font-weight: bold;';
    document.body.appendChild(btn);
    btn.addEventListener('click', mulaiEvaluasiTotal);

    console.log("Tombol 'Jalankan Evaluasi (Pilih Baik)' telah ditambahkan.");
})();