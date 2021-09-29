const prompt = require("prompt-sync")({ sigint: true });

const array = JSON.parse(prompt('Enter an Array: '));

thirdElement = array[2];
secondChar = thirdElement[1];

const type = isNaN(thirdElement);

if (type === false) {
	console.log("Error Not A String");
}

console.log("The second char from third Item from is: " + secondChar);