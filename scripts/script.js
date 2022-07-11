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

//Nav-Bar Close on Link Click//
const navLinks = document.querySelectorAll('.nav-link')
const bsCollapse = new bootstrap.Collapse(menuToggle)
const navToggler = document.querySelector('.navbar-toggler')
const navbarNav = document.getElementById('navbarNav')

// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });

// document.navLinks.forEach(item => {
//     item.addEventListener('click', () => {
//         navbarNav.collapse('hide')
//     })
// });

//     navToggler.on("click", function () {
//         navMain.collapse('show');
//     });

// $(function(){ 
//     var navMain = $("#navbarNav");
//     navMain.on("click", "a", null, function () {
//         navMain.collapse('hide');
//     });
// });

// $('.navbar-collapse').on('click', function () {
//     $('.navbarNav').addClass('navbar-toggler');
//   });
  
//   $( '.navbarNav a' ).on("click", function(){
//     $('.navbarNav').removeClass('navbar-toggler');
//   });