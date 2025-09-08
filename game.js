document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const square = document.getElementById('square');
  
  let version = "1.9.9(test)";
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
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = src;
  }

  function normalizeRotation(current, target) {
  let delta = target - current;
  
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  
  return current + delta;
  }

  function mod(n, m) {
  return ((n % m) + m) % m;
  }
  
  function shortestAngleDiff(current, target) {
    current = mod(current, 360);
    target = mod(target, 360);
    
    let delta = target - current;
    
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    
    return delta;
  }

  
  function gameLoop() {
    
// calculate xD, yD (velocity)
xD = 0;
yD = 0;

if (key.w) yD -= 10;
if (key.s) yD += 10;
if (key.a) xD -= 10;
if (key.d) xD += 10;

if (key.space) {
  if (dash <= 0) dash = 5;
  if (dash > 0) {
    xD *= 5;
    yD *= 5;
    dash--;
  }
}

// set direction flags based on velocity signs
left = xD < 0;
right = xD > 0;
up = yD < 0;
down = yD > 0;

// normalize rotation to 0-360
rotation = mod(rotation, 360);

if (xD === 0 && yD === 0) {
  desiredRotation = rotation;
} else {
  if (left) {
    if (up) desiredRotation = 315;    // -45° == 315° mod 360
    else if (down) desiredRotation = 225;  // -135° == 225°
    else desiredRotation = 270;      // -90° == 270°
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

// Calculate shortest delta
let delta = shortestAngleDiff(rotation, desiredRotation);

const rotationSpeed = 10; // degrees per frame

if (Math.abs(delta) <= rotationSpeed) {
  rotation = desiredRotation;
} else {
  rotation += delta > 0 ? rotationSpeed : -rotationSpeed;
}

// normalize rotation again so it stays in 0-360
rotation = mod(rotation, 360);

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

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
