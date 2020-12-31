'use strict';

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(4 + 'some'));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

console.log(typeof (Number('4')));
console.log(typeof(+'5'));

console.log(typeof(parseInt('5')));

//let answer = +prompt('some question', '');

//to boolean

//0, '', null, undefined, NaN - false

let switcher  = null;
if(switcher){
    console.log('working...');
}

console.log(typeof(Boolean('4')));
console.log(typeof(!!'4555'));

