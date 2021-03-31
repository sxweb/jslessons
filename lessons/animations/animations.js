'use strict';
const btn = document.querySelector('button');
const box = document.querySelector('.box');
let position = 0;

function myAnimation(){
    position++;
    box.style.top = position + 'px';
    box.style.left = position + 'px';

    if(position < 300){
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', ()=>requestAnimationFrame(myAnimation));