'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import  calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import timer from './modules/timer';
import slider from './modules/slider';
import showModal from './modules/modal';

window.addEventListener('DOMContentLoaded', ()=>{

    const modalTimerId = setTimeout(()=>showModal('[data-modal]', modalTimerId), 50000);
    tabs();
    modal('[data-modal]', '[data-contacts]', modalTimerId);
    calc();
    cards();
    forms('form', modalTimerId);
    timer();
    slider();
});
