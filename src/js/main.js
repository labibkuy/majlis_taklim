// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    if (mobileMenu) mobileMenu.classList.add('hidden');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Modal
function openModal(name, bio) {
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalBio').textContent = bio;
  document.getElementById('bioModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('bioModal').classList.add('hidden');
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('bioModal');
  if (modal && e.target === modal) closeModal();
});