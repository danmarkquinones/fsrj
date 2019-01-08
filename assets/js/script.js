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

	$('#showcase-slider').owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		itemsMobile:[650,1],
		pagination: true,
		autoPlay: true,
		mouseDrag: false
	})

	// var header = document.getElementById("indiv-testimonial")
	// var indiv_testimony = header.querySelector(".indiv-testimonial-img img");
	// for (var i = 0; i < indiv_testimony.length; i++) {
	//   indiv_testimony[i].addEventListener("click", function() {
	//   var current = document.querySelector(".active");
	//   current[0].className = current[0].className.replace(" active", "");
	//   this.className += " active";
	//   });
	// }
	$(".indiv-testimonial-img img").click(function() {
	  	$(".indiv-testimonial-img ").removeClass('active');
	    $(this).parent().addClass('active');
	});

	$(".indiv-testimonies-gall-pic img").click(function() {
	  	$(".indiv-testimonies-gall-pic").removeClass('active');
	    $(this).closest('div').addClass('active');
	});

	$(".indiv-testimonies-gall-pic a").click(function(e){
      e.preventDefault()
      $('.indiv-testimonies-main-pic img').attr("src", $(this).attr("href"));
  })

	$(".indiv-service:odd .indiv-service-pic-1").addClass("order-lg-2");
	$(".indiv-service:odd .indiv-service-content").addClass("order-lg-1");
	$(".indiv-service:odd .indiv-service-pic-2").addClass("order-lg-3");


})