function tabs(tabs , tabs_content)
{
	$(tabs_content).removeClass('active');
	$(tabs_content).first().addClass('active');

	$(tabs).click(function(e){
		var data_tab = $(this).data('tab');

		$(tabs).removeClass('active');
		$(this).addClass('active');
		
		$(tabs_content).removeClass('active');
		$(tabs_content + '[data-tab=' + data_tab + ']').addClass('active');
		$('.slider-about-big , .slider-about-small').slick('refresh');
	});
}

tabs('.model.tab' , '.oborud-text .tab-content');
tabs('.about-section .tab' , '.about-section .tab-contents .tab-content');



$('.logos-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 769,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 767,
		settings: {
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}

	]
});

$('.sert-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}

	]

});

$(window).scroll(function(e){
	var header = $('header');
	if($(document).scrollTop() > 100)
	{
		header.addClass('scroll');
	} else {
		header.removeClass('scroll');
	}
});







// Cache selectors
var lastId,
topMenu = $("header .nav"),
topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    	var item = $($(this).attr("href"));
    	if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-(topMenuHeight+40);
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
  // $('.nav li').removeClass('active');
  // $(this).closest('li').addClass('active');
});

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop + 40)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";

//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//    }                   
// });


$('.slider-about-big').slick({
	dots: false,
	arrows: false,
	asNavFor: '.slider-about-small',
	focusOnSelect: true
});

$('.slider-about-small').slick({
	dots: false,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-about-big',
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 769,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1
		}
	},

	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	}

	]
});

$("input[type=tel]").mask("+7(999) 999-9999");

$('.mobile-nav-button').click(function(e){
	$('header .nav ul').slideToggle(300);
});

var window_width = $(window).width();

if(window_width <= 930)
{
	$('header .nav a').click(function(e){
		$('header .nav ul').slideUp(300);
	});
}

$(window).resize(function(event) {
	if(window_width <= 930)
	{
		$('header .nav a').click(function(e){
			$('header .nav ul').slideUp(300);
		});
	} else {

	}
});


$('.overlay , .close').click(function(e){
	$(this).closest('.popup').fadeOut(300);
});

$('.callback-button').click(function(e){
	e.preventDefault();
	$('#callback').fadeIn(300).css('display' , 'flex');
});

$('input').on('focus' , function(e){
	var placeholder = $(this).attr('placeholder');
	if(placeholder)
	{
		$(this).data('placeholder' , placeholder);
	}
	$(this).attr('placeholder' , '');
});

$('input').on('blur' , function(e){
	var placeholder = $(this).data('placeholder');
	if(!$(this).val() || $(this).val() == '')
	{
		$(this).attr('placeholder' , placeholder);
	}

	
});

