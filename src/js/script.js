const hamburgerEl = document.querySelector('#hamburger');
const headerEl = document.querySelector('.header');
const overlayEl = document.querySelector('.overlay');

hamburgerEl.addEventListener('click', () => {
    if(headerEl.classList.contains('open')) {
        headerEl.classList.remove('open');
        overlayEl.classList.remove('fade-in');
        overlayEl.classList.add('fade-out');
    } else {
        headerEl.classList.add('open')
        overlayEl.classList.add('fade-in');
        overlayEl.classList.remove('fade-out');
    }   
})