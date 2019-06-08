$(document).ready(function() {
    /* wow scroll */ 
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	)
	wow.init();
 
	  /*go to top when you do refreash for page*/
	// window.onbeforeunload = function () {
	//   window.scrollTo(0, 0);
	// }

	$("[data-target=nav]").click(function() {

	  $('html, body').stop().animate({
	    scrollTop: $( $(this).attr('href') ).offset().top
	  }, 1000);

	});


	$("#go-to-top").click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 1000);
	});

	/*side bar */

	$(".sidebar").hide()

	$(".sidebar-toggle").click(function(){
	  $(".sidebar").toggle()
	});
   

   $('.navbar-toggle').click(function() {
   	 $('.navbar-collapse').slideToggle(1000)
   })

   $('.nav-links li a').click(function() {
   	  $(this).addClass('active').parent('li').siblings().find('a').removeClass('active')
   	  $('.navbar-collapse').slideUp()
   })

   $('.nav li a').click(function() {
   	  $('.navbar-collapse').slideUp()
   })

   $(window).load(function(){
	  $('html, body').scrollTop(0);
	}, 'slow');


})


