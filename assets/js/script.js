const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const mobNav = document.querySelector('.mob-nav');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

document.addEventListener('click', (e) => {
  if (e.target.closest('.mob-nav')) {
    nav.classList.toggle('_active');
    burger.classList.toggle('_rotate');
  }
  if (!e.target.closest('header')) {
    nav.classList.remove('_active');
    burger.classList.remove('_rotate');
  }
});

const link = document.querySelector('.link');

link.addEventListener('click', (e) => {
  // console.log(link);
  e.preventDefault();
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  // console.log(e.code);
});
document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  // console.log(e.code);
});
window.addEventListener('scroll', function () {
  body.style.backgroundColor = `rgba(${scrollY * 0}, ${scrollY * 0.8}, ${scrollY * 0.4})`;
});
