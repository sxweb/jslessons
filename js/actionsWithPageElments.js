'use strict';

let container = document.querySelector('#container');
console.dir(container);

container.style.backgroundColor = 'gray';
container.style.width = '500px';

//container.style.cssText = 'border: 1px solid #aaa;';

let links = document.querySelectorAll('.more-link');

/*
for(let i = 0; i < links.length; i++){
    links[i].style.color = 'red';
}*/

//some foreach practice
/*links.forEach((item) =>{
    item.style.color = 'red';
});*/
const linkWidth = '50px';
links.forEach((item) =>{
    item.style.display = 'block';
    item.style.cssText = `color:#fff; background: #aaa; padding: 2px 8px; width: ${linkWidth}; float: left; margin: 0 5px 5px 0`;
});

//container.classList.add('black');

const div = document.createElement('div');
div.classList.add('black');

//document.body.append(div);
//container.append(div);
//container.prepend('some text');

//container.before(div);
//container.after(div);

//links[0].remove();

//links[0].replaceWith(div);

//div.innerHTML = '<h2>some header</h2>';
//container.textContent = 'some textContent';

//container.insertAdjacentHTML('afterbegin', '<h2>some adjusted html</h2>');

//Old methods

//container.appendChild(div);
div.style.backgroundColor = '#ccc';
div.style.width = '100px';
div.style.height = '50px';
//container.insertBefore(div, links[0]);
//container.removeChild(links[0]);

//container.replaceChild(div, links[0]);

