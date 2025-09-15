$(document).ready(function () {
    $('.slider-products').slick({
        slidesToShow: 4,   // muestras 4 columnas al mismo tiempo
        slidesToScroll: 1, // avanzas de a 1
        infinite: true,    // loop infinito
        speed: 300,
        arrows: true,      // flechas
        dots: false,        // bolitas de navegación
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992, // tablets y pantallas medianas
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576, // móviles
                settings: {
                    slidesToShow: 1,
                    arrows: false,   // quitamos flechas para que no estorben en pantallas pequeñas
                    dots: true 
                }
            }
        ]
    });
});




$(document).ready(function () {
    $('.slider-reviews').slick({
        slidesToShow: 3,   // antes estaba en 3 → ahora serán 4 columnas en escritorio
        slidesToScroll: 1, // avanza de a 1
        infinite: true,    
        speed: 300,
        arrows: true,      // flechas visibles en escritorio
        dots: false,       
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200, // tablets y pantallas medianas
                settings: {
                    slidesToShow: 1 // en tablet se muestran 2
                }
            },
            {
                breakpoint: 576, // móviles
                settings: {
                    slidesToShow: 1, // en móvil solo 1
                    arrows: false,   // quitamos flechas para que no estorben en pantallas pequeñas
                    dots: true       // mostramos dots para navegación táctil
                }
            }
        ]
    });
});

AOS.init();
