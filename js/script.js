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
    tabs('.tabcontent', '.tabheader__item', '.tabheader__item_active');
    modal('[data-modal]', '[data-contacts]', modalTimerId);
    calc();
    cards();
    forms('form', modalTimerId);
    timer('2021-07-01T10:18:22', '#days', '#hours', '#minutes', '#seconds');
    slider({
        slide: '.offer__slide',
        countText: '.offer__slider-counter #total',
        currentText: '.offer__slider-counter #current',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper',
        sliderCont: '.offer__slider',
        nextArrow: 'offer__slider-next',
        prevArrow: 'offer__slider-prev',
        acticeDotClass: 'active'
    });
});
