(function($){
	$.fn.resizeWin = function(qWin){
		this.height($(window).height())
		$(window).resize(function () {
		   qWin.height($(window).height())
		})
	}

	$.fn.postion_footer_cricle = function(ele, parent_eleWidth, qPosi){
		this.css(qPosi, $(window).width()/2 - 27 - parent_eleWidth/2 - 18.5);
		$(window).resize(function(){
			ele.css(qPosi, $(window).width()/2 - 27 - parent_eleWidth/2 - 18.5);
		})
	}
	$.fn.postion_footer_curve = function(ele, parent_eleWidth, qPosi){
		this.css(qPosi, $(window).width()/2 - parent_eleWidth/2 - 21.5);
		$(window).resize(function(){
			ele.css(qPosi, $(window).width()/2 - parent_eleWidth/2 - 21.5);
		})
	}

	$.fn.middle_position = function(ele){
		this.css('left', ($(window).width()-1000)/2);
		this.css('top', $(window).height()/100*15);
		$(window).resize(function(){
			ele.css('left', ($(window).width()-1000)/2);
			ele.css('top', $(window).height()/100*15);
		})
	}
})(jQuery,window);