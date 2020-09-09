
function active (event){

    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1); 
    
    for (let i = 0; i < conten.length; i++) {
        conten[i].style.display = 'none';
        if (conten[i].getAttribute('id') == id) {
            conten[i].style.display = 'block';
        }
    }

    // el substring es para seleccionar elementos de un string a partir de determinada posición
}

const link = document.querySelectorAll('.tabs-tablist-item');
const conten = document.querySelectorAll('.tabs-content-item');

for (let i = 0; i < conten.length; i++) {
    conten[i].style.display = 'none';
}

conten[0].style.display = 'block';

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', active);
}