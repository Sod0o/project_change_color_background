// create a variable and connect to the button (using a class, add .)
const btn = document.querySelector('.btn');
// create a variable and connect to the body ( using an element, add the element name)
const body = document.querySelector('body');
// create an array and store colors
const colors = ['red', 'yellow', 'velvet', 'gray', 'blue', 'pink', 'purple'];
// set bg color to a color
body.style.backgroundColor = 'violet';

// Add an eventlistener to the button having click and bgColorChange as its parameters
// there will be a function where you create a variable that will get a random number
// using Math.random method multiplied by the lenght of the colors array
// because the random number will be a decimal, using ParseInt, we will convert it to a whole number
// and then we will style the body by setting the variable as colors index
btn.addEventListener('click', bgColorChange);

function bgColorChange() {
    const randomNum = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[randomNum];
}

