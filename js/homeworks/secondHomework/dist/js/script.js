'use strict';
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
const deadLine = '2021-05-01';
console.log(new Date());

function displayTimer(days, hours, minutes, seconds){
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
}

function getRemainingTime(deadline){
    return deadLine - (new Date());
}

function calculateTimerValues(miliseconds){
    const days = Math.round(miliseconds / (60*60*24)) ;
    const hours = Math.round((miliseconds % (60*60*24))/(60*60));
    const minutes = Math.round((miliseconds % (60*60*24))%(60*60)/60);
    const seconds = (miliseconds % (60*60*24))%(60*60);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

setInterval(()=>{
    const values = calculateTimerValues(getRemainingTime(deadLine));
    displayTimer(values.days, values.hours, values.minutes, values.seconds);
},1000);

