let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon')
let searchForm = document.querySelector('#search-form')
let close = document.querySelector('#close')


menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

searchIcon.addEventListener('click', ()=>{
    searchForm.classList.toggle('active')
})
close.addEventListener('click', ()=>{
    searchForm.classList.remove('active')
})




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll',()=>{
  let current = ''
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  sections.forEach(section=>{
    const top = section.offsetTop
    const height = section.offsetHeight
    if(scrollY >= (top - height/2)){
      current = section.getAttribute('id')
    }
  })
  navLinks.forEach(a =>{
    a.classList.remove('active')
    if(a.classList.contains(current)){
      a.classList.add('active')
    }
  })

  
})


var swiper = new Swiper(".home-slider", {
  spaceBetween: 140,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


function loader(){
 const load = document.querySelector('.loader-container')
 load.classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

