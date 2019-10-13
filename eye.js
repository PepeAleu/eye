const iris = document.getElementById('iris');
const eye = document.getElementById('eye');
//These are the scales for x and y axes, regarding the size of the eye 
const SCALEX = innerWidth / 100;
const SCALEY = innerHeight / 60;

let interval = 1000;

/**
 * Calculate the coordinates inside the eye, using the scales 
 * @param {*} event 
 */
function moveEye(event) {
  iris.style.left = (event.clientX / SCALEX) + 'px';
  iris.style.top = (event.clientY / SCALEY) + 'px';
}

/**
 * Simulate the blink of the eye randomly
 */
setInterval(() => {
  interval = Math.floor(Math.random() * 5);
  if(!interval) {
    eye.classList.toggle('blink');
  }
}, 500);

document.addEventListener('mousemove', moveEye);
