
  $('#mobile-toggler').click(function(e){
    $(this).toggleClass('open');
    $('#mobile-menu').slideToggle(300);
  });


  $(window).scroll(function(e){
    if($(window).scrollTop() > 300)
    {
      $('header.fixed').addClass('visible');
    } else {
      $('header.fixed').removeClass('visible');
    }
  });


  $('.bg-slider').slick({
    fade: true,
    asNavFor: '.text-slider',
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000
  });
  $('.text-slider').slick({
    fade: true,
    asNavFor: '.bg-slider'
  });


  $('.text-slider').on({
    beforeChange: function(event, slick, currentSlide, nextSlide){
      $('.text-slider-wrap').addClass('animationup');
    },

    afterChange: function(event, slick, currentSlide, nextSlide){
      $('.text-slider-wrap').removeClass('animationup');
    }

  });

  $('.gallery-slider').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        } 
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        } 
      }
    ]
  });

$('.big-img-slider').slick({
  dots:false,
  arrows: false,
  asNavFor: '.small-img-slider'
});

$('.small-img-slider').slick({
  dots:false,
  arrows: false,
  slidesToShow: 4,
  asNavFor: '.big-img-slider',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3
      } 
    }
  ]
});

$('.recom-slider').slick({
  dots:true,
  arrows: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3
      } 
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      } 
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      } 
    }
  ]
});

  
function hide_preloader(preloader , ovhclass , doneclass)
{
  setTimeout(function(){
    $(preloader).addClass(doneclass);
    $('body').removeClass(ovhclass);
  } , 1000);
}

window.onload = function(e){
  hide_preloader('#preloader' , 'ovh' , 'done');
}; 


