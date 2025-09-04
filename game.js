document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const square = document.getElementById('square');
  
  let version = "1.7(beta)";
  ver.textContent = version;

  let x = 100
  let y = 100

  const key = {};

  // When key is pressed, set key[keyName] = true
  document.addEventListener('keydown', (e) => {
    key[e.key.toLowerCase()] = true;  // store keys as lowercase for consistency
  });

  // When key is released, set key[keyName] = false
  document.addEventListener('keyup', (e) => {
    key[e.key.toLowerCase()] = false;
  });
  
  function gameLoop() {
    
    if(key.w) {
      x -= 10
    }
    if(key.s){
      x+= 10
    }

    x += 5

    square.style.left = x + 'px'
    square.style.top = y + 'px'
     requestAnimationFrame(gameLoop);
    
  }

  changeFavicon("happy.png");
  requestAnimationFrame(gameLoop);
});
