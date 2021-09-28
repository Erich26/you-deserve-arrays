const prompt = require('prompt-sync')({ sigint: true});

let arr = [];

while (true) {
    let input = prompt('add an array:  enter "q" to quit: ');
    if(input === 'q' || input === null){
        break;
    }


    arr.push(Number(input));
    console.log(arr);
}
const last = arr[arr.length -1];

console.log(last);
