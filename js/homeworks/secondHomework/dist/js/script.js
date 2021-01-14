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