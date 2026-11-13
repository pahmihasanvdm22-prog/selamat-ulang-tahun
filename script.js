
const pages = document.querySelectorAll('.page');

// PINDAH HALAMAN
function showPage(id) {
  pages.forEach(page => {
    page.classList.toggle('active', page.id === id);
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// MEMBUKA FOTO
function openPhoto(number) {
  const lightbox = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-img');

  image.src = `assets/foto${number}.jpeg`;
  lightbox.classList.add('open');
}

// MENUTUP FOTO
function closePhoto() {
  document.getElementById('lightbox')
    .classList.remove('open');
}

// MEMBUKA SURAT
function openLetter() {
  const bottle = document.querySelector('.bottle');

  bottle.style.opacity = '0';
  bottle.style.transform = 'scale(.7) rotate(18deg)';

  setTimeout(() => {
    showPage('letter');
  }, 450);
}

// PESAN TERAKHIR
function showFinal() {
  document.getElementById('final-modal')
    .classList.add('open');
}

function closeFinal() {
  document.getElementById('final-modal')
    .classList.remove('open');
}

// TOMBOL ESC UNTUK MENUTUP
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closePhoto();
    closeFinal();
  }
});

// ANIMASI HATI MELAYANG
function makeHeart() {
  const heart = document.createElement('span');

  heart.className = 'heart-float';

  heart.textContent =
    Math.random() > 0.5 ? '♡' : '♥';

  heart.style.left =
    `${Math.random() * 100}vw`;

  heart.style.fontSize =
    `${12 + Math.random() * 18}px`;

  heart.style.animationDuration =
    `${6 + Math.random() * 5}s`;

  document.getElementById('hearts')
    .appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 11000);
}

setInterval(makeHeart, 1100);
