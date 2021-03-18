/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc(){

//calc

    const result = document.querySelector('.calculating__result span');
    let sex = 'female',
        height,
        weight,
        age,
        ratio = 1.35;

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.35;
    }

    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
    }

    function setActiveElement(parent, activeClass){
        const elements = document.querySelectorAll(`${parent} div`);

        elements.forEach((element) =>{
            element.classList.remove(activeClass);
            if(element.getAttribute('id') === localStorage.getItem('sex')){
                element.classList.add(activeClass);
            }
            if(element.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                element.classList.add(activeClass);
            }
        });
    }

    setActiveElement('#gender', 'calculating__choose-item_active');
    setActiveElement('.calculating__choose_big', 'calculating__choose-item_active');

    function  calcTotal(){
        if(!sex || !height || !weight || !age || !ratio ){
            result.textContent = '___';
            return;
        }
        if(sex === 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else{
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parent, activeClass){
        const elements = document.querySelectorAll(`${parent} div`);
        elements.forEach((element)=>{
            element.addEventListener('click', (e)=>{
                if(e.target.getAttribute('data-ratio')){
                    ratio = e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', e.target.getAttribute('data-ratio'));
                }else{
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(element =>{
                    element.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });

    }
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynamicInformation(selector){
        const input = document.querySelector(selector);

        input.addEventListener('input', ()=>{
            if(input.value.match(/\D/g)){
                input.style.border = '1px solid red';
            }else{
                input.style.border = 'none';
            }
            switch (input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });

    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

module.exports = calc;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

function cards(){

//cards using classes

    class Card{
        constructor(image, subTitle, description, price, parent, ...classes){
            this.image = image;
            this.subTitle = subTitle;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(`${parent}`);
            this.classes = classes;
        }

        showCard(){
            const divContainer = document.createElement('div');
            if(this.classes.length >= 0){
                this.classes.forEach((className) =>{
                    divContainer.classList.add(className);
                });
            }else{
                divContainer.classList.add('menu__item');
            }

            divContainer.innerHTML = `<img src="${this.image}" alt="vegy">`;
            divContainer.innerHTML += `<h3 class="menu__item-subtitle">${this.subTitle}</h3>`;
            divContainer.innerHTML += `<div class="menu__item-descr">${this.description}</div>`;
            divContainer.innerHTML += `<div class="menu__item-divider"></div>`;
            divContainer.innerHTML += `<div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    </div>`;
            this.parent.append(divContainer);
        }
    }

    const getData = async (url) =>{
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    axios.get('http://localhost:3000/menu')
        .then(result =>{
            result.data.forEach(({img, title, descr, price}) => {
                price = price*74;
                new Card(img, title, descr, price, '.menu__field .container', 'menu__item').showCard();
            });
        });


}

module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms(){
    //forms

    const forms = document.querySelectorAll('form');
    const status = {
        loading: 'img/forms/spinner.svg',
        sent: 'You sent a letter',
        error: 'Some error'
    };



    const  postData = async (url, data)=>{
        const result = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };

    function bindPostData(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const data = new FormData(form);
            const message = document.createElement('img');
            message.src = status.loading;
            message.style.margin = '0 auto';
            message.style.display = 'block';
            message.style.height = '50px';
            message.style.width = '50px';
            message.style.color = '#000';
            form.insertAdjacentElement('afterend', message);
            const obj = {};
            data.forEach((value, key)=>{
                obj[key] = value;
            });
            postData(' http://localhost:3000/requests', JSON.stringify(obj))

                .then((data)=>{
                    showNotificationModal(status.sent);
                    message.remove();
                    console.log(data);
                }).catch(()=>{
                showNotificationModal(status.error);
            }).finally(()=>{
                form.reset();
            });
        });
    }

    forms.forEach((form)=>{
        bindPostData(form);
    });

    function showNotificationModal(message){
        hideModal();
        const oldModal = document.querySelector('.modal__dialog');
        oldModal.classList.add('hide');
        const newModal = document.createElement('div');
        newModal.classList.add('modal__dialog');
        newModal.innerHTML = `
        <div class="modal__content">
            <div data-modalclose="" class="modal__close">×</div>
            <div class="modal__title">${message}</div>
            
        </div>
    `;
        document.querySelector('.modal').append(newModal);
        showModal();
        setTimeout(()=>{
            newModal.remove();
            oldModal.classList.remove('hide');
            hideModal();
        }, 4000);

    }
}

module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal(){

//modal

    const contactsButtons = document.querySelectorAll('[data-contacts]');
    const modal = document.querySelector('[data-modal]');



    modal.addEventListener('click', (e)=>{
        if(e.target == modal || e.target.getAttribute('data-modalClose') == ''){
            hideModal();
        }
    });

    contactsButtons.forEach((item)=>{
        item.addEventListener('click', ()=>{
            showModal();
        });
    });
    function  showModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function hideModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    const modalTimerId = setTimeout(showModal, 50000);

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll(){
        if(window.pageYOffset +document.documentElement.clientHeight >=  document.documentElement.scrollHeight){
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider(){

//slider

    let current = 0;
    let slides = document.querySelectorAll('.offer__slide');
    const slidesCount = slides.length;
    const slidesCountText = document.querySelector('.offer__slider-counter #total');
    const currentSlideText = document.querySelector('.offer__slider-counter #current'),
        sliderInner = document.querySelector('.offer__slider-inner'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(sliderWrapper, null).width,
        slider = document.querySelector('.offer__slider');

    updateSliderCounter();
    slidesCountText.textContent = addZero(slidesCount);
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s';
    sliderInner.style.width = 100 * slidesCount + '%';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });


    const sliderButtons = document.querySelector('.offer__slider-counter');
    sliderButtons.addEventListener('click', (e)=>{
        if(e.target.classList.contains('offer__slider-next')){
            console.log(e.target.getAttribute('data-dot'));
            incrementSliderCounter();
        }else if(e.target.classList.contains('offer__slider-prev')){
            decrementSliderCounter();
        }
        setActiveDot(current);
        showSlide(current);
        updateSliderCounter();
    });
    function showSlide(ind){
        const offset = ind * +width.slice(0, width.length - 2)+ 'px';
        const reg = /\w/ig;
        console.log(width.replace(reg, ''));
        sliderInner.style.transform = `translateX(-${offset})`;
    }
    function incrementSliderCounter(){
        if(current < slidesCount - 1){
            current++;
        }else{
            current = 0;
        }
    }
    function decrementSliderCounter(){
        if(current > 0){
            current --;
        }else{
            current = slides.length - 1;
        }
    }
    function updateSliderCounter(){
        let currentText = current + 1;
        currentText = addZero(current + 1);
        currentSlideText.innerText = currentText;
    }
    function createDot(ind, parent){
        const span = document.createElement('span');
        span.classList.add('dot');
        span.setAttribute('data-dot', ind);
        parent.append(span);
    }

    const dotContainer = document.createElement('div');
    dotContainer.classList.add('dot-container');
    slider.append(dotContainer);

    slides.forEach((slide, ind) =>{
        createDot(ind, dotContainer);
    });

    dotContainer.addEventListener('click', (e)=>{
        const ind = +e.target.getAttribute('data-dot');
        showSlide(ind);
        setActiveDot(ind);

    });

    function setActiveDot(ind){
        const dots = document.querySelectorAll('.dot-container .dot');
        dots.forEach(dot =>{
            if(+dot.getAttribute('data-dot') !== ind){
                dot.classList.remove('active');
            }else{
                dot.classList.add('active');
            }
        });
    }
    showSlide(current);
    setActiveDot(current);
    updateSliderCounter();

}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs(){

//Tabs
    const tabsContent = document.querySelectorAll('.tabcontainer .tabcontent');
    const tabsLinks = document.querySelectorAll('.tabheader__items .tabheader__item');
    const linksContainer = document.querySelector('.tabheader__items');

    function hideTabs(tabs){
        tabs.forEach((item) => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
    }

    function showTab(i = 0){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
    }

    document.addEventListener('click', (e) =>{
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabsLinks.forEach((item, i) =>{
                item.classList.remove('tabheader__item_active');
                if(e.target == item){
                    hideTabs(tabsContent);
                    showTab(i);
                }
            });
            e.target.classList.add('tabheader__item_active');
        }
    });

    hideTabs(tabsContent);
    showTab();

}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer(){

//timer
    const deadLine = '2021-07-01T10:18:22';
    console.log(new Date());


    function displayTimer(days, hours, minutes, seconds){
        document.querySelector('#days').innerHTML = days;
        document.querySelector('#hours').innerHTML = hours;
        document.querySelector('#minutes').innerHTML = minutes;
        document.querySelector('#seconds').innerHTML = seconds;
    }

    function getRemainingTime(deadline){
        return Date.parse(deadLine) - Date.parse(new Date());
    }

    function addZero(target){
        if(target < 10){
            target = `0${target}`;
        }
        return target;
    }

    function calculateTimerValues(miliseconds){
        const days = addZero(Math.floor(miliseconds / (1000*60*60*24))) ;
        const hours = addZero(Math.floor((miliseconds % (1000*60*60*24))/(1000*60*60)));
        const minutes = addZero(Math.floor((miliseconds % (1000*60*60*24))%(1000*60*60)/(1000*60)));
        const seconds = addZero(Math.floor((miliseconds % (1000*60*60*24))%(1000*60*60)%(1000*60)/1000));
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function startTimer(){
        const intervalId = setInterval(()=>{
            if(getRemainingTime(deadLine) >= 0){
                const values = calculateTimerValues(getRemainingTime(deadLine));
                displayTimer(values.days, values.hours, values.minutes, values.seconds);
            }else{
                clearInterval(intervalId);
            }
        },1000);
    }
    if(getRemainingTime(deadLine) > 0){
        const values = calculateTimerValues(getRemainingTime(deadLine));
        displayTimer(values.days, values.hours, values.minutes, values.seconds);
        startTimer();
    }else{
        displayTimer('00','00','00','00');
    }

}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

    tabs();
    modal();
    calc();
    cards();
    forms();
    timer();
    slider();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map