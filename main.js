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
/*----show scroll up----*/
const scrollUp = () => {
    const scrollUp= docoment.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',  scrollUp)   

/*-----SCROLL SECTIONS ACTIVE LINK-----*/
const sections = docoment.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYoffset 

    sections.forEach(current => {
    const sectionHeight= current.offsetHeight,
    sectionTop= current.offsetTop - 58,
    sectionId= current.getAttribute('id'),
    sectionsClass= docoment.querySelector('.nav__menu a[href*=' + sectionId)
    if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
    }else {
        sectionsClass.classList.remove('active-link')
    } 
})
}
window.addEventListener('scroll',  scrollActive)   