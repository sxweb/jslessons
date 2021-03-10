'use strict';

/*const ans = prompt('enter your name');

const reg = /n/;
const reg1 = /n/i;
const reg2 = /n/ig;*/
//i -вне зависимости от регистра
//m - многострочные данные
//g - сразу несколько вхождений
//console.log(ans.search(reg1));
//console.log(ans.match(reg2));

const passw = prompt('password');
const paswExp = /./g;
console.log(passw.replace(paswExp, '*'));