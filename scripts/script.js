//Dynamic copyright date//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//Carousel Slider Effects//
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        nav: true,
        loop: true,
        center: true,
        responsiveClass: true,
        margin: 5,
        padding: 5,
        stagePadding: 5,
        responsive: {
            0: {
                items: 1,
                dots: false
            },

            485: {
                items: 1,
                dots: true
            },

            728: {
                items: 2,
                dots: true
            },

            960: {
                items: 3,
                dots: true
            }
        }
    });
});



//Fade-In Effect//
const appearOptions = {
    threshold: .8,
    rootMargin: "0px 0px -80px 0px"
};

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    )
{
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
