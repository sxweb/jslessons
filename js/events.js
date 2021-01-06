'use strict';
const button = document.querySelector('#container button');
//bad approach
/*button.onclick = function (){
    console.log('click');
}*/

button.addEventListener('click', () =>{
    console.log('click');
})
let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    i++;
    if(i == 1){
        button.removeEventListener('click', deleteElement);
    }

};
button.addEventListener('click', deleteElement);

const link = document.querySelector('.more-link');
link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
});



