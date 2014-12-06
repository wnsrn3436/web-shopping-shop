$(document).ready(function(){
    var menu = $('#gnb > li');
    var wrap = $('#gnbWrap');
    var pageURL = location.href;
    var activeMenu;
    
    menu.on({
        mouseover:function(){
             var tg = $(this);
            menu.removeClass('on');
            tg.addClass('on');
            
             var th = tg.children('a').height() + tg.children('.sGnbArea').height();
             
            wrap.stop().animate({height:th});
        },
        mouseout:function(){
            var tg = $(this);
             tg.removeClass('on');
              
              var th = tg.children('a').height();
              
              wrap.stop().animate({height:th});
              
            
          }
      });
      
      menu.each(function(i){
          var tg = $(this);
          var sub = tg.find('> .sGnbArea > ul > li');
          var menuURL = tg.children('a').attr('href');
          var active = pageURL.indexOf(menuURL);
          if(active > -1) activeMenu = tg; 
          
          sub.each(function(j){
              var tg = $(this);
              var subURL = tg.children('a').attr('href');
              active = pageURL.indexOf(subURL);
              if(active > -1) activeMenu = tg;
          });
          
          sub.on({
              mouseover:function(event){
                  var tg = $(this);
                  sub.removeClass('on');
                  tg.addClass('on');
              },
              mouseout:function(){
                  var tg = $(this);
                  tg.removeClass('on');
                  }
          });
      });
      
      onActive();
      
      function onActive(){
          if(activeMenu) activeMenu.trigger('mouseover');
      }
    });
     
      $(function(){ 
    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    var current = 0;
    var setIntervalId;
    
    button.on({
        mouseover:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    $('#wrap').on({
        mouseover:function(){
            clearInterval(setIntervalId);
            
        },
        mouseout:function(){
            timer();
        }
        
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('mouseover');
        }, 3000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
   
              currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
        
		clearTimeout(time_out);
		time_out = setTimeout(function (){
			button.removeClass('on');
			button.eq((current+1) % 4).addClass('on');
			move((current+1) % 4);
		}, 4000);
      }
    
	var time_out = setTimeout(function (){
		button.removeClass('on');
		button.eq((current+1) % 4).addClass('on');
		move((current+1) % 4);
	}, 4000);
});

