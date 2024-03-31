/*Show Menu*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*Menu Show*/
/*Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Add the show-menu class to display the menu
    });
}

/*Menu Hide*/
/*Validate if constant exists*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Remove the show-menu class to hide the menu
    });
}

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

/*Add blur to the header */
const blurHeader = () =>{
    const header = documrnt.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)  


/* SCROLL REVEAL ANIMATION*/
const sr = scrollreveal({
    origin:'top',
    distance: '60px',
    duration: 3000,
    delay: 400
    //reset: true//animation repeat


})
sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image', {origin: 'right'})
sr.reveal('.about__image, .join__data', {origin: 'left'})
sr.reveal('.popular__card', {interval: 200})
