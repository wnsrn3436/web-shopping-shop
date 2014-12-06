$(document).ready(function (){
	var menu;
	var parallax = $("#wrap > #parallax > div");
	var contents = $("#wrap > #contents > div");
	
	$(window).scroll(function (){
		var scroll_top = $(window).scrollTop();
		menu = $("#wrap > #top > #menu > ul > .on");
		var sub = scroll_top - contents.eq(menu.index()).offset().top;
		parallax.each(function (i){
			var target = $(this);
			target.css({
				top: scroll_top + 100*(i+1) + (sub*2/(i+1))
			});
		});
	});
});