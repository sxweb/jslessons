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
const closeModalButton = document.querySelector('[data-modalClose]');


closeModalButton.addEventListener('click', ()=>{
    hideModal();
});

modal.addEventListener('click', (e)=>{
    if(e.target == modal){
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

//const modalTimerId = setTimeout(showModal, 5000);

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

function createCards(){
    for(let card of cardsValues){
        new Card(card.image, card.subTitle, card.description, card.price, '.menu__field .container', 'menu__item', 'big').showCard();
    }
}

createCards();

//forms

const forms = document.querySelectorAll('form');
const status = {
    loading: 'loading...',
    sent: 'You sent a letter',
    error: 'Some error'
}


function addFormEvent(form){
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = new FormData(form);
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.send(data);
        
        
        const message = document.createElement('div');
        message.classList.add('system-message');
        message.innerText = status.loading;
        form.append(message);

        request.addEventListener('load', ()=>{
            if(request.status === 200){
                message.innerText = status.sent;
            }else{
                message.innerText = status.error;
            }

            setTimeout(()=>{
                message.remove();
            }, 3000);
        });
    });
}

forms.forEach((form)=>{
    addFormEvent(form);
});