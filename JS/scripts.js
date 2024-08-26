let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let iconos_sociales = document.querySelector('.iconos-sociales');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    iconos_sociales.classList.remove('active');
}
//BOton Scroll Top
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('#scroll-top').classList.add('active');
        document.querySelector('.iconos-sociales').classList.add('active');
    } else{
        document.querySelector('#scroll-top').classList.remove('active');
        document.querySelector('.iconos-sociales').classList.remove('active');
    }
}

//Pantalla de Carga
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1500);
}

window.onload = fadeOut();

// Recargar la pagina al clicar el logo
document.querySelector('.logo img').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    location.reload(); // Recarga la página
});

//SLIDER
var antBtn = document.querySelector('.anterior'),
    sigBtn = document.querySelector('.siguiente'),
    slider_negocios = document.querySelector('.slider-negocios'),
    lista = document.querySelector('.list-images'), 
    item_negocio = document.querySelectorAll('.item-slider-negocio')

let timeAutoNext = 5000

sigBtn.onclick = function(){
    showSlider('sig')
}

antBtn.onclick = function(){
    showSlider('ant')
}

let runNextAuto = setTimeout(() => {
    sigBtn.click()
}, timeAutoNext)

function showSlider(type) {
    let sliderItemsDom = lista.querySelectorAll('.slider-negocios .list-images .item-slider-negocio')
    if(type === 'sig'){
        lista.appendChild(sliderItemsDom[0])
        slider_negocios.classList.add('sig')
    } else{
        lista.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        slider_negocios.classList.add('ant')
    }

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        sigBtn.click()
    }, timeAutoNext)
}

// CARRUSEL DE LOGOS
$(".logo-carrusel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
    0: {
        items: 2
    },
    500: {
        items: 3
    },
    600: {
        items: 4
    },
    800: {
        items: 5
    },
    1200: {
        items: 6
    }
    }
});

// Tarjetas de Testimonios
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 8000, // Cambia de slide cada 8 segundos
        disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa con el slider
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
});

//Rutas Negocios
//Crear ruta en Google Maps
// Función genérica para trazar rutas
function trazarRuta(negocioId) {
    var negocio = document.getElementById(negocioId).value;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Obtener las coordenadas de la ubicación actual
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // URL de Google Maps para la ruta
            var url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${encodeURIComponent(negocio)}&travelmode=driving`;

            // Abrir la URL en una nueva ventana o pestaña
            window.open(url, "_blank");
        });
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

function marcarRuta(testimonioId) {
    var testimonio = document.getElementById(testimonioId).value;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Obtener las coordenadas de la ubicación actual
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // URL de Google Maps para la ruta
            var url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${encodeURIComponent(testimonio)}&travelmode=driving`;

            // Abrir la URL en una nueva ventana o pestaña
            window.open(url, "_blank");
        });
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

//Galería de videos
//#region 
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});
//#endregion
