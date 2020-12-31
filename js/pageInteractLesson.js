'use strict';

//old methods

const container = document.getElementById('container');
console.log(container);

const links  = document.getElementsByClassName('more-link');
console.log(links[0]);

//new methods

const link = document.querySelectorAll('#container .more-link')[0];
const linksList = document.querySelectorAll('#container .more-link');
console.log(linksList);

