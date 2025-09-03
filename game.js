document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const Red = document.getElementById('Red');
  const Blue = document.getElementById('Blue');
  const Green = document.getElementById('Green');
  const check = document.getElementById('check');

  let version = 1.3
  ver.textContent = version;
  
  let list = [Red, Blue, Green, check];

  for (let i = 0; i < list.length; i++) {
    const now = list[i];
    
    now.addEventListener('click', () => {
      console.log(i)
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

let isFirst = 0
let i = 0

function gameLoop(isFirst) {

  if(isFirst = 0) {
  isFirst = 1
  console.log("First frame")
  }
  else{
  console.log("Frame: " + i)
  }
  i++
  requestAnimationFrame(gameLoop)
}

changeFavicon("happy.ico")
  
requestAnimationFrame(gameLoop)
});
