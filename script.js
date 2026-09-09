(function () {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    button.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);

  button.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
})();
