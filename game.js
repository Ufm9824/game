document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const Red = document.getElementById('Red');
  const Blue = document.getElementById('Blue');
  const Green = document.getElementById('Green');
  const check = document.getElementById('check');

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

  let isFirst = true;
  let i = 0;

  function gameLoop() {
    if (isFirst) {
      isFirst = false;
      console.log("First frame");
    } else {
      console.log("Frame: " + i);
    }

    if (spacePressed) {
      changeFavicon("jeremy.png");
    } else {
      changeFavicon("happy.png");
    }

    i++;
    requestAnimationFrame(gameLoop);
  }

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
