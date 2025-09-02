document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const Red = document.getElementById('red');
  const Blue = document.getElementById('blue');
  const Green = document.getElementById('green');
  const check = document.getElementById('check');

  let version = 1.0
  ver.textContent = version;
  
  let list = [Red, Blue, Green, check];

  for (let i = 0; i < list.length; i++) {
    const now = list[i];
    
    now.addEventListener('click', () => {
      console.log(i)
    });
    
  }
});
