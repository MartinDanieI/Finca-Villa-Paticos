// --- CÓDIGO PARA EL SCROLL DEL HEADER ---
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Selecciona el div de nuestro cursor UNA SOLA VEZ
const cursorGradient = document.querySelector('.cursor-gradient');

// --- CÓDIGO PARA MOVER EL CURSOR ---
// Escucha cada vez que el mouse se mueve
window.addEventListener('mousemove', (e) => {
    // Actualiza la posición del círculo para que coincida con la del mouse
    if (cursorGradient) {
        cursorGradient.style.left = e.clientX + 'px';
        cursorGradient.style.top = e.clientY + 'px';
    }
});


// --- CÓDIGO PARA OCULTAR EL CURSOR SOBRE ENLACES Y EL MAPA---

// Seleccionamos todos los elementos que deben tener el "dedito" (y el mapa)
const interactiveElements = document.querySelectorAll('a, button, .btn, .map');

// Para cada elemento interactivo...
interactiveElements.forEach(el => {
    // Cuando el mouse entre en el elemento...
    el.addEventListener('mouseenter', () => {
        if (cursorGradient) {
            cursorGradient.classList.add('hidden'); // ...añade la clase para ocultar nuestro cursor
        }
    });
    // Cuando el mouse salga del elemento...
    el.addEventListener('mouseleave', () => {
        if (cursorGradient) {
            cursorGradient.classList.remove('hidden'); // ...quita la clase para volver a mostrarlo
        }
    });
});
// --- CÓDIGO PARA EL MENÚ HAMBURGUESA ---
const hamburgerBtn = document.querySelector('.hamburger-btn');
const mainNav = document.querySelector('.main-nav');

if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
    });
}



var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // Puntos de ruptura para el diseño responsive
        breakpoints: {
            // Cuando la ventana es >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            // Cuando la ventana es >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    });


