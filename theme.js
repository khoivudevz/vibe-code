// Theme switcher logic
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const THEME_KEY = 'vibe-theme';

function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark-theme');
    root.classList.remove('light-theme');
    themeToggle.innerHTML = '☀️ Light';
  } else {
    root.classList.remove('dark-theme');
    root.classList.add('light-theme');
    themeToggle.innerHTML = '🌙 Dark';
  }
  localStorage.setItem(THEME_KEY, theme);
}

// Detect saved or system theme
function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Initial theme
setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = root.classList.contains('dark-theme') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});


// Initialize Splide for screenshots
if (document.getElementById('splide')) {
  new Splide('#splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: true,
    cover: false,
    heightRatio: 0.6,
    breakpoints: {
      600: { heightRatio: 0.7 }
    }
  }).mount();
} 