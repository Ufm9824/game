const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const check = document.getElementById('check');

let list = [red, blue, green, check];

console.log("What the fuck gpt");

// Use for loop instead of while for clarity
for (let i = 0; i < list.length; i++) {
  const now = list[i];
  
  now.addEventListener('click', () => {
    console.log(i);
  });
}
