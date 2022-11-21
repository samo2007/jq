$(function(){
$(window).on('scroll',function(){
    if($(window).scrollTop()){
         $('nav').addClass('white');
         $('.a1').addClass('color');
    }
   else{
    $('nav').removeClass('white')
    $('.a1').removeClass('color')
   }
  
})
$(window).on('scroll', function(){
     if($(window).scrollTop()){
          $('.row1').addClass('top');
     }
})
// gallery
$(document).ready(function(){
     $('.image-popup-vertical-fit').magnificPopup({
          type: 'image',
       mainClass: 'mfp-with-zoom', 
       gallery:{
                    enabled:true
               },
     
       zoom: {
         enabled: true, 
     
         duration: 300, // duration of the effect, in milliseconds
         easing: 'ease-in-out', // CSS transition easing function
     
         opener: function(openerElement) {
     
           return openerElement.is('img') ? openerElement : openerElement.find('img');
       }
     }
     
     });
     
     });

     
     $('#blogCarousel').carousel({
          interval: 500
      });
      $(window).scroll(function(){
          $(".sc").each(function(){
  
              var x = $(window).scrollTop() + $(window).height();
              var y = $(this).offset().top + $(this).height()
              if (x >= y) {
                  $(this).addClass('active');
              };
          })
      });
      $({counter:0}).animate({
          counter:1432805
      },{
          duration:3000,
          ease:"linear",
          step:function(){
               $("#count").text(Math.ceil(this.counter))
          }
      })
    //   $('.imm').on('click',function(){
    //       if($('.imm').click()){
    //            $('.div0').addClass('divdisplay');
               
    //       }
    //      else{
    //       $('.div0').removeClass('divdisplay')
          
    //      }
})
