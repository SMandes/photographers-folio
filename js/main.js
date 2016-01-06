$(function(){
	//Cache the window object
	var $window = $(window);
	
	//Parallax background effect
	$('div[data-type="background"]').each(function(){
		
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
			
			//scroll the background at var speed
			//the yPos is a negative value because we are scrolling up
			
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			//Put together our final background position
			var coords = '50%' + yPos + 'px';
			
			//Move the background
			$bgobj.css({backgroundPosition: coords});
			
		});//end window scroll
	});	
});



//Script for sticky nav bar when scrolling to a certain point
$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    
      if ($(window).scrollTop() > 500) { //Pixels for 
      $('#nav-bar').addClass('navbar-fixed');
    }
      
    if ($(window).scrollTop() < 500) { // Pixels for
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });
});