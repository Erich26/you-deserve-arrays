const prompt = require('prompt-sync')({ sigint: true});

const array = JSON.parse(prompt('Enter an Array: '));

let fourthOrLast;

if (array < 4) {
    fourthOrLast = array[array.length - 1];
} else {
    fourthOrLast = array[3];
}

console.log('The fourth (or last) item is: ', fourthOrLast)


