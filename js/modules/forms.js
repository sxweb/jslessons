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