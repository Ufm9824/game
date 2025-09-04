document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const square = document.getElementById('square');
  
  let version = "1.8.2(test)";
  ver.textContent = version;

  let x = 100;
  let y = 100;
  let dash = 0
  
  const key = {};

  // When key is pressed, set key[keyName] = true
  document.addEventListener('keydown', (e) => {
    key[e.key.toLowerCase()] = true;
  });

  // When key is released, set key[keyName] = false
  document.addEventListener('keyup', (e) => {
    key[e.key.toLowerCase()] = false;
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
  
  function gameLoop() {
    if (key.w) {
      y -= 10;  // W should move UP (y decreases)
    }
    if (key.s) {
      y += 10;  // S should move DOWN (y increases)
    }
    if (key.a) {
      x -= 10;  // A moves LEFT (x decreases)
    }
    if (key.d) {
      x += 10;  // D moves RIGHT (x increases)
    }
    if (key.space) {
      if (dash <= 0) {
        dash = 5
      }
      if (dash > 0) {
        x = x * 5
        y = y * 5
        dash -= 1
      }
    }

    // Update square position
    square.style.left = x + 'px';
    square.style.top = y + 'px';

    requestAnimationFrame(gameLoop);
  }

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
