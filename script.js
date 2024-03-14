const navEL = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', () => {
    navEL.classList.toggle('nav--open');
    hamburgerEL.classList.toggle('hamburger--open');
})

navEL.addEventListener('click', ()  => {
    navEL.classList.remove('nav--open');
    hamburgerEL.classList.remove('hamburger--open');
})
