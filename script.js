
/*function active (event){
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1); 
    
    for (let i = 0; i < conten.length; i++) {
        conten[i].classList.add('js-content-hidden');
        if (conten[i].getAttribute('id') == id) {
            conten[i].classList.remove('js-content-hidden');
        }
    }

    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('js-active');
    }

    event.currentTarget.classList.add('js-active');
}*/

const link = document.querySelectorAll('.tabs-tablist-item');
const conten = document.querySelectorAll('.tabs-content-item');

for (let i = 0; i < conten.length; i++) {
    conten[i].classList.add('js-content-hidden');
}

conten[0].classList.remove('js.active');
link[0].classList.add('js-active');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        console.log(id);
        //ocultamos todo menos el elemento con el id correcto.
        for (let i = 0; i < conten.length; i++) {
            conten[i].classList.add('js-content-hidden');
            if (conten[i].getAttribute('id') == id) {
                conten[i].classList.remove('js-content-hidden');
            }
        }
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('js-active');
        }
        event.currentTarget.classList.add('js-active');
    });
}