function loadHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(elementId).innerHTML = data)
    .catch(err => console.error('Error loading HTML:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('components/head.html', 'head');
  loadHTML('components/sidebar.html', 'sidebar');
  loadHTML('components/navbar.html', 'navbar');
  loadHTML('components/about.html', 'about');
  loadHTML('components/services.html', 'services');
});
