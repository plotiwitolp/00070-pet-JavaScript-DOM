const one = document.querySelector('.one');

one.style.color = '#fff';
one.style.width = '150px';

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
  this.classList.toggle('three');
};

let oneData = one.getAttribute('data');
console.log(oneData);
let cssLink = document.querySelectorAll('link')[0].getAttribute('href');
console.log(cssLink);

one.setAttribute('data-num', 6);
