document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const Red = document.getElementById('Red');
  const Blue = document.getElementById('Blue');
  const Green = document.getElementById('Green');
  const check = document.getElementById('check');
  const square = document.getElementById('square');
  
  let version = 1.3;
  ver.textContent = version;
  
  let list = [Red, Blue, Green, check];

  for (let i = 0; i < list.length; i++) {
    const now = list[i];
    now.addEventListener('click', () => {
      console.log(i);
    });
  }

  function changeFavicon(src) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = src;
  }

  let spacePressed = false;
  document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
      spacePressed = true;
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === "Space") {
      spacePressed = false;
    }
  });

  let i = 0;
  let hJ = 0;
  let y = 50;
  let x = 50;
  let yV = 0;

  function gameLoop() {

    if (spacePressed) {
      if(hJ == 0) {
        hJ = 1
        yV += 5
    }};

    if( == 50) {
      hJ = 0
      yV = 0
    }

    if(yV < 0.5) {
      yv = 0
    } else {
      yv -= yv / 3
    }

    y += yV

    square.style.left = x + 'px'
    square.style.top = y + 'px'

    requestAnimationFrame(gameLoop);
  }

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
