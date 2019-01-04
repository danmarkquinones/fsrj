$(document).ready(function(){

	$('.toggle').click(function(){
		$('.toggle').toggleClass('active');
		$('.sidebar').toggleClass('active');
	})

	// $(this).on('click', '.sidebar ul li a' , function(){
	// 	$(this).addClass('active')
	// })

	$('#testimonial-slider').owlCarousel({
		items:3,
		itemsDesktop:[1000,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		itemsMobile:[650,1],
		pagination: true,
		autoPlay: true
	})



})