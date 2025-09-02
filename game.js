document.addEventListener('DOMContentLoaded', () => {
  const ver = document.getElementById('ver');
  const Red = document.getElementById('Red');
  const Blue = document.getElementById('Blue');
  const Green = document.getElementById('Green');
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
