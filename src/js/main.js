
//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};

$("document").ready(function () {
  app.init();
});

// Navbar
$(document).ready(function () {

   // navbar-toggler
   $('.navbar-toggler').click(function(){
      $('.navbar-toggler').toggleClass('change');
   })

   // navbar auto close 
   $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $('.navbar-toggler').toggleClass('change');
});
   // adding background effect and fixed
   $(window).scroll(function() {
      
      var $scrollPosition = $(this).scrollTop();
      // console.log($scrollPosition); uncomment to check scrollPosition value
      if ($scrollPosition >=80) {
         $('.navbar').addClass('effect');
         $('.navbar').addClass('fixed-top');
      }
      else {
         $('.navbar').removeClass('effect');
         $('.navbar').removeClass('fixed-top');
      }
   })

   // adding smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500
  });

   // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      let filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });
  
    // add styling 
    $('.btn-projects').on('click', function() {
      $('.btn-projects').removeClass('is-checked');
      $(this).addClass('is-checked');
    })



    // skills carousel

    $('#myCarouselcarousel').carousel({
      interval: 3000
    })


    // posts section

    $(window).scroll(function(){
      // console.log($scrollPosition)
       var $scrollPosition = $(this).scrollTop();
      console.log($scrollPosition)
      if ($scrollPosition >= 75)
        $('.about-me-image').animate({
          left: 0
        });
    });

    // about-me image
    $(window).scroll(function(){
      console.log($scrollPosition)
       var $scrollPosition = $(this).scrollTop();
      console.log($scrollPosition)
      if ($scrollPosition >= 2900)
        $('.posts').addClass('post-appear');
    });

   //change color of input field when focus
   $('.form-group input').focus(function (){
      $(this).css('background', '#FFEC78');
   }); 
   $('.form-group input').blur(function (){
      $(this).css('background', '#ffffff');
   }); 
   $('.form-group textarea').focus(function (){
      $(this).css('background', '#FFEC78');
   }); 
   $('.form-group textarea').blur(function (){
      $(this).css('background', '#ffffff');
   });     

});



