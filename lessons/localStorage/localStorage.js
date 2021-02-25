'use strict';

const checkbox = document.querySelector('#check');
if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}
checkbox.addEventListener('change', ()=>{
    localStorage.setItem('isChecked', true);
});
/*const some = localStorage.setItem('some', 15);
localStorage.removeItem('some');
localStorage.clear();*/

localStorage.setItem('obj', JSON.stringify({a:23}));

