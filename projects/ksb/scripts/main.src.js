$.fancybox.defaults.animationEffect = "zoom-in-out";
$.fancybox.defaults.transitionDuration = "200";

function hide_preloader(preloader , ovhclass , doneclass)
{
  setTimeout(function(){
    $(preloader).addClass(doneclass);
    $('body').removeClass(ovhclass);
  } , 1000);
}

function header_fixed(top , toggleclass)
{
  $(window).scroll(function(e){
    if($(window).scrollTop() > top)
    {
      $('header').addClass(toggleclass);
    } else {
      $('header').removeClass(toggleclass);
    }
  });
}

function init_sliders()
{
  var slider = $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000
  });

  var sert_slider = $('.slider-3').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });


  var services_slider = $('.slider-4').slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
}

function toggle_mob_menu(toggler , menu)
{
  $(toggler).click(function(e){
    $(this).toggleClass('open');
    $(menu).slideToggle(300);
    $('body').toggleClass('ovh');
  });
}

function main()
{
    init_sliders();
    toggle_mob_menu('.mobile-toggler' , 'header .row-2');
    header_fixed(0 , 'fixed');

    window.onload = function(e){
      hide_preloader('#preloader' , 'ovh' , 'done');
    }; 
}

main();




