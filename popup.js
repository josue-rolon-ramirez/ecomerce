const images = [...document.querySelectorAll('.image')];

const imagenPrincipal = document.querySelector('.imagen-primordial');

const imagesCarouselPopup = [...document.querySelectorAll('.carousel-popup')];

const imagesMobile = [...document.querySelectorAll('.imageMobile')];


const popup = document.querySelector('.popup');
const botonCerrar = document.querySelector('.icono-cerrar');
const inicioImage = document.querySelector('.inicio-image');
const flechaAtrasPopup = document.querySelector('.flecha-atras-popup');
const flechaAvanzarPopup = document.querySelector('.flecha-avanzar-popup');


const carousel = document.querySelector('.carousel');
const inicioImageMobile = document.querySelector('.inicio-image-mobile');
const flechaAtras = document.querySelector('.flecha-atras');
const flechaAvanzar = document.querySelector('.flecha-avanzar');


let index = 0



/* Desktop carousel */
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
    })
})

const updateImage = (i) => {
    let path = `images/image-product-${i+1}.jpg`;
    inicioImage.src = path;
    index = i;
    
}

const updateImageThumbnail = (i) => {
    let path = `images/image-product-${i+1}-thumbnail.jpg`;
    inicioImage.src = path;
    index = i;
}

botonCerrar.addEventListener('click', () => {
    popup.classList.toggle('activar');
     
})

flechaAtrasPopup.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }else{
        (index < images.length -1)
        updateImage(index = 3);
        
    }
})


flechaAvanzarPopup.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }else{
        (index > 4)
        updateImage(index - 3)
        
    }
})


imagenPrincipal.addEventListener('click', () => {
    popup.classList.toggle('activar')
})



/* Mobile Carousel*/

imagesMobile.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImageMobile(i);
        carousel.classList.toggle('activar-mobile');
        
    })
})

const updateImageMobile = (i) => {
    let path = `images/image-product-${i+1}.jpg`;
    inicioImageMobile.src = path;
    index = i;
    
}

flechaAtras.addEventListener('click', () => {
    if(index > 0){
        updateImageMobile(index - 1);
        
    }else{
        (index < imagesMobile.length -1)
        updateImageMobile(index = 3);
    }
})

flechaAvanzar.addEventListener('click', () => {
    if(index < imagesMobile.length - 1){
        updateImageMobile(index + 1);
    }else{
        (index < imagesMobile.length - 1)
        updateImageMobile(index - 3)
        
    }
})