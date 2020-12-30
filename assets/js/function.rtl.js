


$(document).ready(function(){
  

    $('.slider').slick({
        dots: true,
        arrows: true,
         rtl: true,
        prevArrow:'<span class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="23.442" height="37.453" viewBox="0 0 23.442 37.453"><g id="surface1" transform="translate(-19.586 44.039) rotate(-90)"><path id="Path_29758" data-name="Path 29758" d="M25.313,19.586,6.586,38.313,11.3,43.028,25.313,29.017,39.324,43.028l4.716-4.716Zm0,1.585L42.454,38.313l-3.131,3.131L25.313,27.432,11.3,41.443,8.171,38.313Zm0,1.449a.56.56,0,1,0,.56.56A.562.562,0,0,0,25.313,22.62ZM23.631,24.3a.56.56,0,1,0,.56.56A.562.562,0,0,0,23.631,24.3ZM21.95,25.983a.56.56,0,1,0,.56.56A.562.562,0,0,0,21.95,25.983Zm5.6,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,27.554,27.1Zm-7.286.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,20.269,27.664Zm8.967,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,29.236,28.785Zm-10.648.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,18.587,29.345Zm12.33,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,30.917,30.466Zm-14.011.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,16.906,31.027ZM32.6,32.148a.56.56,0,1,0,.56.56A.562.562,0,0,0,32.6,32.148Zm-17.374.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,15.225,32.708ZM34.28,33.829a.56.56,0,1,0,.56.56A.562.562,0,0,0,34.28,33.829Zm-20.736.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,13.543,34.389ZM35.961,35.51a.56.56,0,1,0,.56.56A.562.562,0,0,0,35.961,35.51Zm-24.1.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,11.862,36.071Zm25.78,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,37.642,37.192Zm-27.462.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,10.181,37.752Zm29.143,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,39.324,38.873Z" fill="#84e6b8"/></g></svg></span>',
        nextArrow:'<span class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="23.442" height="37.453" viewBox="0 0 23.442 37.453"><g id="surface1" transform="translate(43.028 -6.586) rotate(90)"><path id="Path_29758" data-name="Path 29758" d="M25.313,19.586,6.586,38.313,11.3,43.028,25.313,29.017,39.324,43.028l4.716-4.716Zm0,1.585L42.454,38.313l-3.131,3.131L25.313,27.432,11.3,41.443,8.171,38.313Zm0,1.449a.56.56,0,1,0,.56.56A.562.562,0,0,0,25.313,22.62ZM23.631,24.3a.56.56,0,1,0,.56.56A.562.562,0,0,0,23.631,24.3ZM21.95,25.983a.56.56,0,1,0,.56.56A.562.562,0,0,0,21.95,25.983Zm5.6,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,27.554,27.1Zm-7.286.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,20.269,27.664Zm8.967,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,29.236,28.785Zm-10.648.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,18.587,29.345Zm12.33,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,30.917,30.466Zm-14.011.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,16.906,31.027ZM32.6,32.148a.56.56,0,1,0,.56.56A.562.562,0,0,0,32.6,32.148Zm-17.374.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,15.225,32.708ZM34.28,33.829a.56.56,0,1,0,.56.56A.562.562,0,0,0,34.28,33.829Zm-20.736.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,13.543,34.389ZM35.961,35.51a.56.56,0,1,0,.56.56A.562.562,0,0,0,35.961,35.51Zm-24.1.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,11.862,36.071Zm25.78,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,37.642,37.192Zm-27.462.56a.56.56,0,1,0,.56.56A.562.562,0,0,0,10.181,37.752Zm29.143,1.121a.56.56,0,1,0,.56.56A.562.562,0,0,0,39.324,38.873Z" fill="#030a36"/></g></svg></span>'
    });

    // sliders.init(); 


  

    /*************/
    var lastScrollTop = 0,
          main_nav = $('nav.navbar');
      $(window).on('scroll',function(e){

         var st = $(this).scrollTop();

         if (st == 0){
          main_nav.removeClass('fixed');
         }
         else if(st > lastScrollTop){
          // downscroll code
          main_nav.removeClass('fixed')
         }
         else {
            // upscroll code
            console.log('up')
            main_nav.addClass('fixed')
         }
         lastScrollTop = st;
      });
   
      
    

});    





// DIRTY Responsive pricing table JS

$( "ul" ).on( "click", "li", function() {
    var pos = $(this).index()+1;
    $("tr").find('td').hide();
    $('td:nth-child('+pos+')').css('display','table-cell');
    $("tr").find('th:not(:eq(0))').hide();
    $('li').removeClass('active');
    $(this).addClass('active');
    $("tr").find('.sep').show();
  
  });
  
  // Initialize the media query
    var mediaQuery = window.matchMedia('(min-width: 640px)');
    
    // Add a listen event
    mediaQuery.addListener(doSomething);
    
    // Function to do something with the media query
    function doSomething(mediaQuery) {    
      if (mediaQuery.matches) {
        $('.sep').attr('colspan',5);
      } else {
        $('.sep').attr('colspan',2);
      }
    }
    
    // On load
    doSomething(mediaQuery);







 $(window).on('load resize orientationchange', function() {
        $('.mobile-carousel').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 768) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        dots: true,
                        arrows: true,
                         rtl: true,
                        slidesToScroll: 1,
                        mobileFirst: true,
                    });
                }
            }
        });
 });


   /**** nav bar */ 

   function menuToggle(){
    var nav = document.getElementById ('menu-overlay');
    nav.classList.toggle('active');
  }
