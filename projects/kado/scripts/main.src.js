jQuery(function($){
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

  function initMenu(menu)
  {

      $(menu + '>li').each(function(index, el) {
          if($(this).is(':has(ul)'))
          {
              $(menu + '>li>ul>li').each(function(index, el) {
                  if($(this).is(':has(ul)'))
                  {
                      $(this).addClass('sub-dropdown');
                  }
              });
              $(this).addClass('dropdown');
          }
      });



      // $('.dropdown>a').click(function(e){
      //     e.preventDefault();
      //     var thisUl = $(this).closest('.dropdown').find('ul');
      //     var uls = $(menu + ' .dropdown').children('ul').not(thisUl);

      //     uls.slideUp(300);
      //     thisUl.slideToggle(300);
      // });
  }

  initMenu('.nav-menu>ul');



  function tabs(tabs , tabs_content)
  {
      jQuery(tabs).click(function(e){
          var data_tab = jQuery(this).attr('data-tab');
          jQuery(tabs).removeClass('active');
          jQuery(this).addClass('active');
  
          jQuery(tabs_content).removeClass('active');
          jQuery(tabs_content + '[data-tab=' + data_tab + ']').addClass('active');
          jQuery(tabs_content + '[data-tab=' + data_tab + ']').find('.tab-slider').css('opacity' , '0');
          setTimeout(function(){
            jQuery(tabs_content + '[data-tab=' + data_tab + ']').find('.tab-slider').slick('reinit');
            jQuery(tabs_content + '[data-tab=' + data_tab + ']').find('.tab-slider').css('opacity' , '1');
          },300);
      });
  }

  function up() {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 777);
  }

  function toggle_mob_menu(toggler , menu)
  {
    $(toggler).click(function(e){
      $(this).toggleClass('open');
      $(menu).slideToggle(300);
      $('body').toggleClass('ovh');
    });
  }


  $('.search-btn').click(function(e){
    e.preventDefault();
    $(this).siblings('input').toggleClass('visible');
  });

  $('.up').click(function(e){
    up();
  });



  toggle_mob_menu('.mobile-toggler' , 'header .row-3');
  header_fixed(210 , 'scroll');
  tabs('.tabs .tab' , '.tabs-content .tab-content');


  var slider = $('.slider');
  var tab_slider = $('.tab-slider');
  var testim_slider = $('.testim-slider');
  var sert_slider = $('.sert-slider');
  var video_slider_big = $('.video-slider-big');
  var video_slider_small = $('.video-slider-small');

  sert_slider.slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  video_slider_big.slick({
    arrows: false,
    asNavFor: '.video-slider-small'
  });
  
  video_slider_small.slick({
    slidesToShow: 5,
    asNavFor: '.video-slider-big',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      }
    ]
  });

  slider.slick({
    dots: true,
    speed: 1000,
    arrows: false
  });

  tab_slider.slick({
    arrows:true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  testim_slider.slick({
    arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  })

  slider.on({
    beforeChange: function(event, slick, currentSlide, nextSlide)
    {

      var content = slider.find('.content');
      content.removeClass('visible');

      setTimeout(function(){
        //slider.slickPlay();
      } , 1000);
    },
    afterChange: function(event, slick, currentSlide, nextSlide)
    {
      var content = slider.find('.content');
      content.addClass('visible');
    }
  });


});