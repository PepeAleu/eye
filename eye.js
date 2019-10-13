const iris = document.getElementById('iris');
const eye = document.getElementById('eye');
const SCALEX = innerWidth / 100;
const SCALEY = innerHeight / 60;

document.addEventListener('mousemove', moveEye);

function moveEye(event) {
  iris.style.left = (event.clientX / SCALEX) + 'px';
  iris.style.top = (event.clientY / SCALEY) + 'px';
}

let interval = 1000;

setInterval(() => {
  
  interval = Math.floor(Math.random() * 5);

  if(!interval) {
    eye.classList.toggle('blink');
  }

}, 500);