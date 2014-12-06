$(document).ready(function (){
	var check = false;
	var menu = $("#wrap > #top > #menu > ul > li");
	var contents = $("#wrap > #contents > div");
	
	$(window).scroll(function (){
		var scroll_top = $(window).scrollTop();
		var target = contents.eq(1);
		var subtarget = contents.eq(2);
		if(target.offset().top <= scroll_top && subtarget.offset().top > scroll_top)
		{
			if(!check)
			{
				target.append("<img src='image/shop_06.jpg'/>");
				subtarget = target.find(">img:last-child");
				subtarget.css({
					position: "absolute",
					left: subtarget.offset().left+380,
					top: subtarget.offset().top,
					width: Math.min(850, $(window).width()-380)
				});
				subtarget.on({
					load: function (){
						$(this).slideUp(0);
						$(this).slideDown(500);
						$(this).off("load");
					}
				});
				for(i=0; i<6; i++)
				{
					target.append("<img src='image/shop_0"+(i+1)+".jpg'/>");
					subtarget = target.find(">img:last-child");
					subtarget.css({
						width: 150,
						height: 150,
						padding: 10,
						position: "absolute",
						opacity: 0.7
					});
					subtarget.animate({
						left: subtarget.offset().left+(i*30),
						top: subtarget.offset().top+(i*30)
					}, {
						duration: 500+(i*200),
						ease:"easeOutCubic"
					});
					subtarget.on({
						mouseover: function (){
							$(this).css({
								zIndex: 1000,
								opacity: 1
							});
						},
						mouseout: function (){
							$(this).css({
								zIndex: "auto",
								opacity: 0.7
							});
						},
						click: function (event){
							event.preventDefault();
							mainImageSlide($(this).attr("src"));
						}
					});
					if((i % 3) == 0){target.append("<br/>");}
				}
				check = true;
			}
		}
		else
		{
			if(check)
			{
				target.find(">*").remove();
				check = false;
			}
		}
	});
	
	function mainImageSlide(img)
	{
		var main_image = (contents.eq(1)).find(">img").eq(0);
		main_image.slideUp(500, function (){
			main_image.attr({
				src: img
			});
			main_image.slideDown(500);
		});
	}
	
	$(window).resize(function (){
		var scroll_top = $(window).scrollTop();
		var target = contents.eq(1);
		var subtarget = contents.eq(2);
		target.find(">*").remove();
		if(check)
		{
			target.append("<img src='image/shop_06.jpg'/>");
			subtarget = target.find(">img:last-child");
			subtarget.css({
				position: "absolute",
				left: subtarget.offset().left+380,
				top: subtarget.offset().top,
				width: Math.min(850, $(window).width()-380)
			});
			subtarget.on({
				load: function (){
					$(this).slideUp(0);
					$(this).slideDown(500);
					$(this).off("load");
				}
			});
			for(i=0; i<6; i++)
			{
				target.append("<img src='image/shop_0"+(i+1)+".jpg'/>");
				subtarget = target.find(">img:last-child");
				subtarget.css({
					width: 150,
					height: 150,
					padding: 10,
					position: "absolute",
					opacity: 0.7
				});
				subtarget.animate({
					left: subtarget.offset().left+(i*30),
					top: subtarget.offset().top+(i*30)
				}, {
					duration: 500+(i*200),
					ease:"easeOutCubic"
				});
				subtarget.on({
					mouseover: function (){
						$(this).css({
							zIndex: 1000,
							opacity: 1
						});
					},
					mouseout: function (){
						$(this).css({
							zIndex: "auto",
							opacity: 0.7
						});
					},
					click: function (event){
						event.preventDefault();
						mainImageSlide($(this).attr("src"));
					}
				});
				if((i % 3) == 0){target.append("<br/>");}
			}
		}
	});
});