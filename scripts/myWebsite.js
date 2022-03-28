

const menu = document.querySelector(".navMenu");
const menuItems = document.querySelectorAll(".navItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".fa-times");
const menuIcon = document.querySelector(".fa-bars");
const toggleLightDark= document.querySelector(".toggleLightDark");

//Dynamic copyright date//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//Toggle Nav Menu//
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display="none";
        menuIcon.style.display="block";
    }
    else {
        menu.classList.add("showMenu");
        closeIcon.style.display="block";
        menuIcon.style.display="none";
    };
};

function hideMenu() {
    menu.classList.remove("showMenu");
    closeIcon.style.display="none";
    menuIcon.style.display="block";
};

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(item => {
    item.addEventListener("click", hideMenu);
});
//Toggle Light/Dark Theme//
function toggleTheme() {
    var el = document.getElementById("style1");
    if (el.href.match("styles/style.css")) {
        el.href = "styles/myWebsiteDark.css";
    }
    else {
        el.href = "styles/style.css";
    }
}

toggleLightDark.addEventListener("click", toggleTheme);



const navBar= document.getElementById('navBar');
const topLink= document.getElementById('topLink');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
    navBar.classList.add('fixed-nav');
}
else{
    navBar.classList.remove('fixed-nav');
}

if(scrollHeight > 300){
    topLink.classList.add('show-link');
}
else {
    topLink.classList.remove('show-link');
}
});


