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