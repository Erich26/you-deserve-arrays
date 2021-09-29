const prompt = require('prompt-sync')({ sigint: true});

const array = JSON.parse(prompt('Enter an Array: '));

if (array[0] === Number(array[0])) {
    console.log(true);
} else {
    console.log(false);
}