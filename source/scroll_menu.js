$(document).ready(function (){
	var menu = $("#wrap > #top > #menu > ul > li");
	var contents = $("#wrap > #contents > div");
	
    menu.click(function (event){
		event.preventDefault();
		
		var target = $(this);
		var index = target.index();
		
		var section = contents.eq(index);
		var section_top = section.offset().top;
		
		$("html, body").stop().animate({scrollTop:section_top});
    });
    
    $("#wrap > #top > #title > a").click(function (event){
		event.preventDefault();
		
		var target = $(this);
		var index = target.index();
		
		var section = contents.eq(index);
		var section_top = section.offset().top;
		
		$("html, body").stop().animate({scrollTop:section_top});
    });
	
	$(window).scroll(function (){
		var scroll_top = $(window).scrollTop();
		contents.each(function (){
			var target = $(this);
			var index = target.index();
			if(target.offset().top <= scroll_top)
			{
				menu.removeClass("on");
				menu.eq(index).addClass("on");
			}
		});
	});
});