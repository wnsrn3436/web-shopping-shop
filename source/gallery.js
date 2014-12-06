$(document).ready(function (){
	var count = 0;
	var prev_button = $("#wrap > #contents > #main > #mainbutton > a > #mainprev");
	var next_button = $("#wrap > #contents > #main > #mainbutton > a > #mainnext");
	var main_image = $("#wrap > #contents > #main > #mainimage");
	var main_subimage = $("#wrap > #contents > #main > #mainbutton > #mainsubimage > a > img");
	main_subimage.css("opacity", "0.5");
	main_subimage.eq(count).css("opacity", "1");
	
	prev_button.click(function (){
		count = (count==0 ? 2 : count-1);
		mainImageFade();
	});
	
	next_button.click(function (){
		count = (count + 1) % 3;
		mainImageFade();
	});
	
	main_subimage.click(function (){
		count = $(this).parent().index();
		mainImageFade();
	});
	
	function mainImageFade()
	{
		main_image.fadeOut(500, function (){
			main_image.css({
				backgroundImage: "url(image/main_0"+(count+1)+".jpg)"
			});
			main_image.fadeIn(500);
			main_subimage.css("opacity", "0.5");
			main_subimage.eq(count).css("opacity", "1");
		});
		clearTimeout(time_out);
		time_out = setTimeout(function (){
			count = (count + 1) % 3;
			mainImageFade();
		}, 4000);
	}
	
	var time_out = setTimeout(function (){
		count = (count + 1) % 3;
		mainImageFade();
	}, 4000);
});