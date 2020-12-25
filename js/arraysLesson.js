'use strict';

let simpleArray = [12, 10, 5, 1, 2];
/* let popElement = simpleArray.pop();
console.log(popElement);
console.log(simpleArray); */

simpleArray.push(3);
//console.log(simpleArray);

const newString = simpleArray.join(',');
//console.log(newString);

const splitedString = newString.split(',');
//console.log(splitedString);

/* for(let value of splitedString){
    console.log(value);
} */

/* splitedString.forEach(function(element, i, arr){
    console.log(`${element} : ${i} in array ${arr}`);
}); */
function compareElements(a, b){
    return a - b;
}
console.log(splitedString.sort(compareElements));