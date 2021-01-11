'use strict';

const button = document.querySelector('button');
const links = document.querySelectorAll('.more-link');
links[0].classList.add('first-link');
button.addEventListener('click', (e) =>{
    //links[0].classList.toggle('red');
    if(links[0].classList.contains('red')){
        links[0].classList.remove('red');
    }else{
        links[0].classList.add('red');
    }
});

const container = document.querySelector('#container');
container.addEventListener('click', (e)=>{
    e.preventDefault();
    /*if(e.target && e.target.tagName == 'A'){
        console.log('some message');
    }*/
    if(e.target && e.target.classList.contains('more-link')){
        console.log('some second message');
    }
    if(e.target && e.target.matches('a.first-link')){
        console.log('some third message');
    }
});

const newButton = document.createElement('button');
newButton.classList.add('red');
container.append(newButton);