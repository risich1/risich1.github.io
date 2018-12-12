jQuery(function($){
  $('.home-slider').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000
  });

  $('.small-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.big-thumbs',
    focusOnSelect: true
  });

  $('.big-thumbs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-thumbs',
    responsive: [{
      breakpoint: 510,
      settings: {
        dots: true
      }
    }]
  });

  $('.mobile-toggler').click(function(e){
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $('body').toggleClass('ovh');
  });
});