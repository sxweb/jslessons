'use strict';

//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.querySelector('.more-link-1').parentNode);
//console.log(document.querySelector('.more-link-1').nextSibling);
//console.log(document.querySelector('.more-link-1').previousSibling);

//to get elements
//console.log(document.querySelector('.more-link-1').nextElementSibling);
//console.log(document.querySelector('.more-link-1').previousElementSibling);
//console.log(document.querySelector('.more-link-1').parentElement);
//console.log(document.querySelector('#container').firstElementChild);
/*for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}*/
console.log(document.querySelector('[data-type="some"]').nextElementSibling);
