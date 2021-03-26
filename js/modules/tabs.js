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

export default tabs;