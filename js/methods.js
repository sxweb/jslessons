'use strict';

const str = 'some string';
console.log(str.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.indexOf('string'));

const log = 'Hello World';
console.log(log.slice(log.indexOf('World')));

console.log(log.substring(4, 10));

console.log(log.substr(4, 4));

//numbers

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));