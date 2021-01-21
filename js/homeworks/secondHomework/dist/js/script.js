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
const deadLine = '2021-01-21T10:18:22';
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

