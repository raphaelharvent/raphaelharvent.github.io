
// Année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle thème Bootstrap (dark/light)
const html = document.documentElement;
const btn = document.getElementById('themeToggle');

function setTheme(mode) {
  html.setAttribute('data-bs-theme', mode);
  localStorage.setItem('theme', mode);
  btn.innerHTML = mode === 'dark' ? '<i class="bi bi-brightness-high"></i> <span class="d-none d-sm-inline">Thème</span>' : '<i class="bi bi-moon-stars"></i> <span class="d-none d-sm-inline">Thème</span>';
}

btn.addEventListener('click', () => setTheme(html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'));

const saved = localStorage.getItem('theme'); if (saved) setTheme(saved);
