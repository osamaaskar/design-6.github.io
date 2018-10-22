$(function(){
    "use strict"

    // Make Background Size As Same As Window Size
    var winh = $(window).height();
    var navh = $(".navbar").innerHeight();

    $(".home").height(winh);

    //Sticky Navbar When Scroll

    $(window).scroll(function(){
      var sc = $(this).scrollTop();
      if(sc > 100){
        $('.navbar').removeClass('bg-light').addClass('sticky');
      }
      else{
        $('.navbar').removeClass('sticky').addClass('bg-light');
      }

      //Timer Count When Reach To Statestics Section
      var stattop = $('.statestics').offset().top;
      if(sc > stattop-1){
        $('.timer').countTo();
        $(window).off('scroll');
      }

    });

    //Change Portflio Buttons Background When Click It
    $('.buttons button').click(function(){
      $(this).addClass('active_btn').siblings().removeClass('active_btn');
      //Shuffle Images
      var btn_Id = $(this).attr('id');
      if(btn_Id == 'all'){
        $('.gallary > div').children().show(2000);
      } else {
        $('.gallary > div').children().hide();
        $('.gallary').children().contents().filter('.' + btn_Id).show(3000);
      }

    });


    //Owl Carousel >> Team Section

      $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });


  //Shuffle Choose Us
  $('.choose_panel li').click(function(){
    //Add Active Class
    $(this).addClass('ch_active').siblings().removeClass('ch_active');
    var p_data = $(this).data('class');
    $('.ch_content > div').hide();
    $('.ch_content').contents().filter('#' + p_data ).show();
  });


  //Magnificent Popup

  $('.popup').magnificPopup({
    type: 'iframe',
  });



  //Show Scroll Button
  $(window).scroll(function(){
    var n = $(this).scrollTop();
    if(n > 800){
      $('.sroll-button i').fadeIn();
    } else{
      $('.sroll-button i').fadeOut();
    }
  });

  //Scroll To Top By Button
  $('.sroll-button i').click(function(){
    $('body,html').animate({
      scrollTop :0
    },1000);
  });


  //Scroll To sections
  $('.nav-link').click(function(){

    $('body,html').animate({
      scrollTop: $($(this).attr('href')).offset().top-30
    },1000);
    $(this).parent().addClass('b-active').siblings().removeClass('b-active');
  });


  // initailize of WOW Animation

    new WOW().init();

});

//Spinner Loading When Window Is Loading

$(window).on('load',function(){
  $('body').css('overflow','auto');
  $('.spinner').fadeOut(2000,function(){
    $(this).parent().fadeOut(3000);
    $(this).remove();
  });

});
