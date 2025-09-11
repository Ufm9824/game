document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const square = document.getElementById('square');
  
  let version = '2.1(test)';
  ver.textContent = version;
  console.log(version)
  
  let rotation = 0
  let up = false
  let down = false
  let left = false
  let right = false
  let x = 100;
  let y = 100;
  let dash = 0
  let dashCool = 0
  let i = 0
  let firstLoop = 0
  
  const key = {};

  document.addEventListener('keydown', (e) => {
    const keyName = e.key === ' ' ? 'space' : e.key.toLowerCase();
    key[keyName] = true;
  });
  
  document.addEventListener('keyup', (e) => {
    const keyName = e.key === ' ' ? 'space' : e.key.toLowerCase();
    key[keyName] = false;
  });

  function changeFavicon(src) {
let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = src;
  }

function spawnObstacles() {
  let i = 0;
  while (i < 10) {
    const obs = document.createElement('div');
    obs.classList.add('obstacle'); // optional
    obs.style.position = 'absolute';
    obs.style.top = '0'; // start at the top
    obs.style.left = i * 10 + '%';
    obs.style.height = '100vh'; // full viewport height
    obs.style.width = '10px';
    obs.style.backgroundColor = 'pink';
    document.body.appendChild(obs);
    i++;
  }
}


function gameLoop() {

spawnObstacles()
  
// calculate xD, yD (velocity)
xD = 0;
yD = 0;

if (key.w) yD -= 50;
if (key.s) yD += 50;
if (key.a) xD -= 50;
if (key.d) xD += 50;

if (key.space) {
  if (dash <= 0) dash = 5;
     if(dashCool <= 0){
      if (dash > 0) {
        xD *= 5;
        yD *= 5;
        if(dash === 1) {dashCool = 60}
        dash--;
    }
  }
}
dashCool--
    
left = xD < 0;
right = xD > 0;
up = yD < 0;
down = yD > 0;

if (xD === 0 && yD === 0) {
  // Standing still, keep current rotation
  desiredRotation = rotation;
} else {
  // Moving, set desired rotation
  if (left) {
    if (up) desiredRotation = -45;
    else if (down) desiredRotation = -135;
    else desiredRotation = -90;
  } else if (right) {
    if (up) desiredRotation = 45;
    else if (down) desiredRotation = 135;
    else desiredRotation = 90;
  } else if (up) {
    desiredRotation = 0;
  } else if (down) {
    desiredRotation = 180;
  }
}

rotation = desiredRotation
    
square.style.transform = `rotate(${rotation}deg)`;

// ...rest of your code

// update position
x = parseInt(getComputedStyle(square).left) + xD;
y = parseInt(getComputedStyle(square).top) + yD;

square.style.left = x + 'px';
square.style.top = y + 'px';

    
    console.log(square.style.transform)
    
    requestAnimationFrame(gameLoop);
  }

  changeFavicon('happy.png');
  requestAnimationFrame(gameLoop);
  if(firstLoop === 0) { firstLoop = 1 }
});
