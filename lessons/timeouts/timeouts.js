'use strict';

const button = document.querySelector('button');
const box = document.querySelector('.box');
let timerId;
let position = 0;
button.addEventListener('click', (e)=>{
    e.preventDefault();

    timerId = setTimeout(function moveBox(){
        if(position < 400){
            position++;

            box.style.left = `${position}px`;
            box.style.top = `${position}px`;
        }else{
            clearTimeout(timerId);
        }

        timerId = setTimeout(moveBox, 10);
    },10);
});

//const someDate = new Date();
//const someDate = new Date('2020-05-01');
//const someDate = new Date(0);
//const someDate = new Date(-101000000000);
const someDate = new Date();
console.log(someDate.getFullYear());
console.log(someDate.getDate());
console.log(someDate.getDay());
console.log(someDate.getHours());
console.log(someDate.getUTCHours());
console.log(someDate.getTime());

let start = new Date();
for(let i = 0; i < 10000000; i ++){
    let some = i **3;
}
let end = new Date();
console.log(end - start);

