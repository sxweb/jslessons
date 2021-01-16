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

