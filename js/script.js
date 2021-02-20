'use strict';

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

const cardsValues = [
    {
        image: 'img/tabs/vegy.jpg',
        subTitle: 'Меню "Фитнес"',
        description: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        price: '229'
    },
    {
        image: 'img/tabs/elite.jpg',
        subTitle: 'Меню “Премиум”',
        description: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        price: '550'
    },
    {
        image: 'img/tabs/post.jpg',
        subTitle: 'Меню "Постное"',
        description: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        price: '430'
    }
];

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
//slider
let slidesCount = 0;
let current = 0;
let slides = [];
const slidesCountText = document.querySelector('.offer__slider-counter #total');
const currentSlideText = document.querySelector('.offer__slider-counter #current');
const sliderContainer = document.querySelector('.offer__slide');
axios.get('http://localhost:3000/slider')
    .then(result => {
        showSlide(sliderContainer, result.data[0].image);
        slidesCount = result.data.length;
        slidesCountText.innerText = slidesCount;
        updateSliderCounter();
        slides = result.data;
    });

const sliderButtons = document.querySelector('.offer__slider-counter');
sliderButtons.addEventListener('click', (e)=>{
    if(e.target.classList.contains('offer__slider-next')){
        incrementSliderCounter();
    }else if(e.target.classList.contains('offer__slider-prev')){
        decrementSliderCounter();
    }
    showSlide(sliderContainer, slides[current].image);
    updateSliderCounter();
});
function showSlide(container, img){
    const image = document.createElement("img");
    image.src = img;
    container.innerHTML = '';
    container.append(image);
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
    currentSlideText.innerText = current + 1;
}