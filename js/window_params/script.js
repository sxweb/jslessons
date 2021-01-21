'use strict';

const box = document.querySelector('.box');
const button = document.querySelector('button');

console.log(box.scrollHeight);
console.log(box.scrollWidth);
console.log(box.getBoundingClientRect());

//console.dir(document);

button.addEventListener('click',()=>{

    box.scrollTop = 0;
    console.log(box.clientWidth);
});