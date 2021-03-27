/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


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

    

    axios.get('http://localhost:3000/menu')
        .then(result =>{
            result.data.forEach(({img, title, descr, price}) => {
                price = price*74;
                new Card(img, title, descr, price, '.menu__field .container', 'menu__item').showCard();
            });
        });


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function forms(formSelector, modalTimerId){
    //forms

    const forms = document.querySelectorAll(formSelector);
    const status = {
        loading: 'img/forms/spinner.svg',
        sent: 'You sent a letter',
        error: 'Some error'
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
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(' http://localhost:3000/requests', JSON.stringify(obj))

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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)('[data-modal]');
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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('[data-modal]', modalTimerId);
        setTimeout(()=>{
            newModal.remove();
            oldModal.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)('[data-modal]');
        }, 4000);

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "hideModal": () => (/* binding */ hideModal)
/* harmony export */ });
function  showModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
    
}

function hideModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(modalSelector, modalTrigger, modalTimerId){

//modal

    const contactsButtons = document.querySelectorAll(modalTrigger);
    const modal = document.querySelector(modalSelector);



    modal.addEventListener('click', (e)=>{
        if(e.target == modal || e.target.getAttribute('data-modalClose') == ''){
            hideModal(modalSelector);
        }
    });

    contactsButtons.forEach((item)=>{
        item.addEventListener('click', ()=> showModal(modalSelector, modalTimerId));
    });
    

    

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll(){
        if(window.pageYOffset +document.documentElement.clientHeight >=  document.documentElement.scrollHeight){
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./js/modules/timer.js");


function slider({slide, countText, currentText, field, wrapper, sliderCont, nextArrow, prevArrow, arrowCont, activeDotClass}){

//slider

    let current = 0;
    let slides = document.querySelectorAll(slide);
    const slidesCount = slides.length;
    const slidesCountText = document.querySelector(countText);
    const currentSlideText = document.querySelector(currentText),
        sliderInner = document.querySelector(field),
        sliderWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(sliderWrapper, null).width,
        slider = document.querySelector(sliderCont);

    updateSliderCounter();
    slidesCountText.textContent = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.addZero)(slidesCount);
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s';
    sliderInner.style.width = 100 * slidesCount + '%';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });


    const sliderButtons = document.querySelector(arrowCont);
    sliderButtons.addEventListener('click', (e)=>{
        if(e.target.classList.contains(nextArrow)){
            console.log(e.target.getAttribute('data-dot'));
            incrementSliderCounter();
        }else if(e.target.classList.contains(prevArrow)){
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
        currentText = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.addZero)(current + 1);
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
        current = ind;
        updateSliderCounter();

    });

    function setActiveDot(ind){
        const dots = document.querySelectorAll('.dot-container .dot');
        dots.forEach(dot =>{
            if(+dot.getAttribute('data-dot') !== ind){
                dot.classList.remove(activeDotClass);
            }else{
                dot.classList.add(activeDotClass);
            }
        });
    }
    showSlide(current);
    setActiveDot(current);
    updateSliderCounter();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tavsContent, tabItem, tabActiveClass){

//Tabs
    const tabsContent = document.querySelectorAll(tavsContent);
    const tabsLinks = document.querySelectorAll(tabItem);

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
        if(e.target && e.target.classList.contains(tabItem.slice(1))){
            tabsLinks.forEach((item, i) =>{
                item.classList.remove(tabActiveClass.slice(1));
                if(e.target == item){
                    hideTabs(tabsContent);
                    showTab(i);
                }
            });
            e.target.classList.add(tabActiveClass.slice(1));
        }
    });

    hideTabs(tabsContent);
    showTab();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "addZero": () => (/* binding */ addZero)
/* harmony export */ });
function addZero(target){
    if(target < 10){
        target = `0${target}`;
    }
    return target;
}

function timer(deadline, daysId, hoursId, minutesId, secondsId){

    function displayTimer(days, hours, minutes, seconds){
        document.querySelector(daysId).innerHTML = days;
        document.querySelector(hoursId).innerHTML = hours;
        document.querySelector(minutesId).innerHTML = minutes;
        document.querySelector(secondsId).innerHTML = seconds;
    }

    function getRemainingTime(deadline){
        return Date.parse(deadline) - Date.parse(new Date());
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
            if(getRemainingTime(deadline) >= 0){
                const values = calculateTimerValues(getRemainingTime(deadline));
                displayTimer(values.days, values.hours, values.minutes, values.seconds);
            }else{
                clearInterval(intervalId);
            }
        },1000);
    }
    if(getRemainingTime(deadline) > 0){
        const values = calculateTimerValues(getRemainingTime(deadline));
        displayTimer(values.days, values.hours, values.minutes, values.seconds);
        startTimer();
    }else{
        displayTimer('00','00','00','00');
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
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

const getData = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");











window.addEventListener('DOMContentLoaded', ()=>{

    const modalTimerId = setTimeout(()=>(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', modalTimerId), 50000);
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabcontent', '.tabheader__item', '.tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '[data-contacts]', modalTimerId);
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)('form', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__.default)('2021-07-01T10:18:22', '#days', '#hours', '#minutes', '#seconds');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        slide: '.offer__slide',
        countText: '.offer__slider-counter #total',
        currentText: '.offer__slider-counter #current',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper',
        sliderCont: '.offer__slider',
        nextArrow: 'offer__slider-next',
        prevArrow: 'offer__slider-prev',
        activeDotClass: 'active',
        arrowCont: '.offer__slider-counter'
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map