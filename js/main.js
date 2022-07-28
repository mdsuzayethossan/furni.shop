$(function(){
    "use strict";
 //back to top
 var btn = $('.back-to-top');

 $(window).scroll(function() {
   if ($(window).scrollTop() > 300) {
     btn.addClass('show');
   } else {
     btn.removeClass('show');
   }
 });
 
 btn.on('click', function(e) {
   e.preventDefault();
   $("html, body").animate({ scrollTop: "0" },  5000);
 });
  //navbar
  var navbar = $('.navbar');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
      navbar.addClass('position-fixed');
    } else {
      navbar.removeClass('position-fixed');
    }
  });
    //offcanvas
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });

    $('.client-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:  $('.client-slide-icon-left'),
        nextArrow: $('.client-slide-icon-right'),
      });


    $('.company-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,   
        arrows: false,     
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
    
      ]
      });


    $('.banner-right-main').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:  $('.banner-up-icon'),
        nextArrow: $('.banner-down-icon'),
      });

      var containerEl = document.querySelector('.main-filter');

      var mixer = mixitup(containerEl);
});