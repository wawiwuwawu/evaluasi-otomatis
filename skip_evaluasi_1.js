(function() {
    'use strict';
    console.log("Skrip Asisten Evaluasi Otomatis (Mode: Baik, v3-Cepat) siap dijalankan...");

    // Fungsi untuk memberi jeda (waktu dalam milidetik)
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Fungsi utama untuk memproses satu halaman evaluasi
    async function prosesSatuHalaman() {
        console.log("Memproses halaman evaluasi saat ini...");

        // 1. Temukan dan pilih radio button dengan label "Baik"
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        let pilihanDitemukan = false;

        for (const radio of radioButtons) {
            const labelText = radio.parentElement.textContent.trim();
            if (labelText === "Baik") {
                radio.checked = true;
                console.log(`Memilih opsi: "${labelText}"`);
                pilihanDitemukan = true;
                break;
            }
        }

        if (!pilihanDitemukan) {
            console.warn("Opsi 'Baik' tidak ditemukan di halaman ini.");
        }

        await sleep(300);

        // 2. Temukan dan klik tombol "Selanjutnya" atau "Finish"
        const tombolSelanjutnya = document.querySelector('button.btn-info'); 

        if (tombolSelanjutnya && (tombolSelanjutnya.textContent || tombolSelanjutnya.innerText).includes('Selanjutnya')) {
            console.log("Mengklik tombol 'Selanjutnya'...");
            tombolSelanjutnya.click();
            return false; 
        } else {
            const tombolSelesai = Array.from(document.querySelectorAll('button')).find(btn =>
                (btn.textContent || btn.innerText).toLowerCase().includes('finish') ||
                (btn.textContent || btn.innerText).toLowerCase().includes('selesai')
            );
            
            if (tombolSelesai) {
                console.log("Halaman terakhir, mengklik tombol 'Selesai'...");
                tombolSelesai.click();
                return true;
            } else {
                 console.log("Tombol 'Selanjutnya' tidak ditemukan. Menganggap proses selesai.");
                 return true;
            }
        }
    }

    // Fungsi utama yang menjalankan seluruh alur otomatisasi
    async function mulaiEvaluasiOtomatis() {
        const tombolPemicu = document.getElementById('tombol-evaluasi-otomatis');
        tombolPemicu.innerHTML = '⚙️ Sedang Mengisi...';
        tombolPemicu.disabled = true;

        let selesai = false;
        while (!selesai) {
            selesai = await prosesSatuHalaman();
            if (selesai) break;
            
            // --- JEDA DIPERCEPAT ---
            await sleep(250); // Jeda dipercepat menjadi 0.75 detik (sebelumnya 1500)
        }

        console.log("🎉 Evaluasi otomatis telah selesai!");
        alert("🎉 Evaluasi otomatis selesai!");
        tombolPemicu.innerHTML = '✔️ Selesai';
    }

    // Pembuatan Tombol Pemicu
    if (document.getElementById('tombol-evaluasi-otomatis')) {
        document.getElementById('tombol-evaluasi-otomatis').remove();
    }
    const btn = document.createElement('button');
    btn.id = 'tombol-evaluasi-otomatis';
    btn.innerHTML = '🚀 Isi Evaluasi (Cepat)';
    btn.style = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; padding: 12px 20px; background-color: #dc3545; color: white; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 16px; font-weight: bold;';
    document.body.appendChild(btn);
    btn.addEventListener('click', mulaiEvaluasiOtomatis);

    console.log("Tombol 'Isi Evaluasi Otomatis (Cepat)' telah ditambahkan.");
})();