document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const square = document.getElementById('square');
  
  let version = "1.8.9(test)";
  ver.textContent = version;

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
  
  function gameLoop() {
    
    xD = 0
    yD = 0
    
    if (key.w) {
      yD -= 10;  // W should move UP (y decreases)
    }
    if (key.s) {
      yD += 10;  // S should move DOWN (y increases)
    }
    if (key.a) {
      xD -= 10;  // A moves LEFT (x decreases)
    }
    if (key.d) {
      xD += 10;  // D moves RIGHT (x increases)
    }
    if (key.space) {
      if (dash <= 0) {
        dash = 5
      }
      if (dash > 0) {
        xD = xD * 5
        yD = yD * 5
        dash -= 1
      }
    }

    console.log(parseInt(square.style.left), parseInt(square.style.top))

    x = parseInt(getComputedStyle(square).left);
    y = parseInt(getComputedStyle(square).top);
    x = x + xD
    y = y + yD

    if(x < 0) {
      left = true
    } else {
      left = false
    }
    if(x > 0) {
      right = false
    } else {
      right = false
    }
    if(y < 0) {
      down = true
    } else {
      down = false
    }
    if(y > 0) {
      up = true
    } else {
      up = false
    }

    if(left == true) {
      if(up == true) { rotation = -45 }
      if(down == true) {rotation = 45}
    } else {
      rotation = -90
    }
   
    square.style.left = x + 'px';
    square.style.top = y + 'px';
    square.style.transform = `rotate(${rotation}deg)`;

    
    console.log(square.style.transform)
    
    requestAnimationFrame(gameLoop);
  }

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
