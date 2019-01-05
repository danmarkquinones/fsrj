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

	$(".indiv-service:odd .indiv-service-pic-1").addClass("order-lg-2");
	$(".indiv-service:odd .indiv-service-content").addClass("order-lg-1");
	$(".indiv-service:odd .indiv-service-pic-2").addClass("order-lg-3");

})