const prompt = require('prompt-sync')({ sigint: true});

const array = JSON.parse(prompt('Enter an Array: '));

const isLongList = array.length >= 10;

console.log('List is long: ', isLongList);