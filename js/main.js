let currentAngle = 0;
const carousel = document.getElementById('carousel');
let autoPlayInterval; // Variabel untuk menyimpan timer

// 1. Fungsi Rotasi 3D
function rotate(direction) {
    if (direction === 'next') {
        currentAngle -= 72;
    } else {
        currentAngle += 72;
    }
    // Menambahkan transisi yang lebih halus untuk efek putar
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
}

// 2. Fungsi Auto-Play (Berputar otomatis setiap 3 detik)
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        rotate('next'); // Otomatis putar ke kanan
    }, 3000); // 3000ms = 3 detik
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Jalankan Auto-Play saat web pertama kali dibuka
startAutoPlay();

// 3. Fitur Pause: Berhenti berputar jika mouse diarahkan ke gambar
// Ini membuat UI lebih interaktif dan profesional
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// --- FUNGSI ADMIN PANEL DIHAPUS DARI SINI KARENA ANDA HANYA INGIN UI ---
