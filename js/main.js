const navIconEl = document.querySelector('.nav_icon');
const navCloseEl = document.querySelector('.nav_close');
const navListEl = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav_bg_overlay');

// window.addEventListener('DOMContentLoaded', () =>{
//     document.body.style.visibility = 'visible';
//   });

const navOpen = () => {
    // after clicking on the hamburger menu the nav links will slide down 
    // to show those links adding show class 
    navListEl.classList.add('show');
    
    // after clicking on the hamburger menu the nav links will slide down 
    // to show the background behind the nav links using active class
    navBgOverlayEl.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}

const navClose = () => {
    navListEl.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    // using overflow-x hidden property because the content should not go outside the mobile screen viewport 
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// AOS
// AOS.refreshHard();
AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });