const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', function() {
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.innerText = '☀️ Light Mode';
        themeBtn.style.backgroundColor = '#f4f4f4';
        themeBtn.style.color = '#333';
    } else {
        themeBtn.innerText = '🌙 Dark Mode';
        themeBtn.style.backgroundColor = '#333';
        themeBtn.style.color = 'white';
    }
});