jQuery(function($){
	$.supersized({
		//Functionality
		slide_interval:5000, //transitions time between
		transition:1,//  0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed:1000,//speed
		slide_links:'blank',//Options: false, 'num', 'name', 'blank'
		slides:[//images
		{image:'/assets/img/headerimg-1.jpg'},
		{image:'/assets/img/headerimg-2.jpg'},
		{image:'/assets/img/headerimg-3.jpg'}
		]		
		})
	})