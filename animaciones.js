//variables
const parte1 = document.getElementById('parte1');
const parte2 = document.getElementById('parte2');
const parte3 = document.getElementById('parte3');
const parte4 = document.getElementById('parte4');
const parte5 = document.getElementById('parte5');
const parte6 = document.getElementById('parte6');
const video = document.getElementById('video');

//

const cargarImagen = (entradas) => {
   entradas.forEach((entradas) => {
       if(entradas.isIntersecting){
           entradas.target.classList.add('visible');
       }
   });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.6
});

observador.observe(parte1);
observador.observe(parte2);
observador.observe(parte3);
observador.observe(parte4);
observador.observe(parte5);
observador.observe(parte6);
observador.observe(video);