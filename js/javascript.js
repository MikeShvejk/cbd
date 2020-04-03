$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3, 
        slidesToScroll:1,
        speed: 500,
    });
});

$(document).ready(function(){
  $('.big-slider').slick({
      slidesToShow:1, 
      slidesToScroll:1,
      speed: 500,
  });
});

document.addEventListener("DOMContentLoaded", function(event) { 
  /*Change slider according to width.screen*/
  let widthWind = document.querySelector('body').offsetWidth;
  if (widthWind <= 1200) {
    $('.slider').slick({
      slidesToShow:2, 
      slidesToScroll:1,
      speed: 500,
  });
  }
});

/* Accordion */
let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.accordion__title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));

let email = document.getElementById('inputt'.value);

document.getElementById('buttn').addEventListener("click", function() {
  if(email) {
    alert('You are signed!');
  } else {
    alert('You are not signed!');
  }
});

/* Modal window for Login */
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("submit").addEventListener("click", function() {
      if(document.getElementById("name").value === '' || document.getElementById("password").value === '') {
        alert('Enter correct login and password');
      } else if(document.getElementById("name").value !== '' || document.getElementById("password").value !== '') {
        modal.style.display = "none";        
        let NAME = document.getElementById("name").value; 
        document.getElementById("myBtn").innerHTML = NAME;
      }  
    })
}

span.onclick = function() {
    modal.style.display = "none";
}

/* Fixed menu  */
window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  if(window.pageYOffset > 0){
      header.classList.add('header_background');
  } else{
      header.classList.remove('header_background');
  }
}; 

/* Gamburger menu */
  (function () {
    const burger = document.querySelector('.burger');
    const burgermenu = document.querySelector('.burger-menu');
    const body = document.querySelector('.body');
    const burgerline = document.querySelector('.burger__line'); 
    const product = document.getElementById('gambprod');  
    const faq = document.getElementById('faq');  
    const homy = document.getElementById('homy');   

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        burgermenu.classList.toggle('burger-menu_open');
        body.classList.toggle('body_overflow');  
        
        product.addEventListener('click', () => {
          burger.classList.remove('burger_active');
          burgermenu.classList.remove('burger-menu_open');
          body.classList.remove('body_overflow');    
        }) 

        faq.addEventListener('click', () => {
          burger.classList.remove('burger_active');
          burgermenu.classList.remove('burger-menu_open');
          body.classList.remove('body_overflow');    
        }) 

        homy.addEventListener('click', () => {
          burger.classList.remove('burger_active');
          burgermenu.classList.remove('burger-menu_open');
          body.classList.remove('body_overflow');    
        }) 
    });
  }()); 


/* Search */
document.getElementById('search').addEventListener('click', function() {
  document.querySelector('form').classList.add('form_open');
  document.getElementById('search-button').classList.add('search-button_open');
});

/* Click for text change */
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third'); 
let difference = document.getElementById('difference');
let what = document.getElementById('what');
let benefits = document.getElementById('benefits');
what.style.color = "#249c26";

document.getElementById('benefits').addEventListener('click', function() {
  second.style.display = "block";
  first.style.display = "none";
  third.style.display = "none";
  difference.style.color = "black";
  what.style.color = "black";
  benefits.style.color = "#249c26";
});

document.getElementById('what').addEventListener('click', function() {
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  difference.style.color = "black";
  benefits.style.color = "black";
  what.style.color = "#249c26";
});

document.getElementById('difference').addEventListener('click', function() {
  third.style.display = "block";
  first.style.display = "none";
  second.style.display = "none";
  benefits.style.color = "black";
  what.style.color = "black";
  difference.style.color = "#249c26";
});
  
