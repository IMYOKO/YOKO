/*
 *  jQuery为开发插件提拱了两个方法，分别是：
 *  jQuery.fn.extend();
 *  jQuery.extend();
*/

//  jQuery.fn.extend = jQuery.prototype.extend
;(function($, window, document, undefind) {
    $.fn.extend({
		addColor:function(options){
		    let len = arguments.length;
		   	if(len==0){
				let color = $(this).css('color');
				$(this).html('颜色是：'+color);
		    }else{
				$(this).css('color',options);
				$(this).html('颜色是：'+options);
		    }
		}
    })
})(jQuery, window, document);
//调用方式   $('.addcolor').addColor();

//  jQuery.extend();
;(function($, window, document, undefind) {
    $.extend({
		errorMsg:function(options){
		    let html =$('<div class="tkbox error_bomb">'+
					'<div class="popup_bg"></div>'+
					'<div class="addgb">'+
						'<div class="kuang2">'+
						   	'<div class="tbpad">'+
								'<p class="k_tit bomb_error_msg" id="k_tit_dbqg"></p>'+
						    	'</div>'+
						  	'<div class="tkone">'+
								'<input type="button" value="" class="kque error_bomb_confirm" >'+
						   	'</div>'+
						'</div>'+
					 '</div>'+
				'</div>');
		    html.appendTo("body");
		    let error_bomb = $('.error_bomb');
		    let error_bomb_confirm = $('.error_bomb_confirm');
		    $('.bomb_error_msg').text(options);
		    error_bomb_confirm.val('确定');
		    error_bomb_confirm.click(function(){
		        error_bomb.remove();
		    });
		},
		add:function(a,b){
		    return a+b;
		}
    });
})(jQuery, window, document);
//调用方式   $.errorMsg('请输入数字');



/******************  $.fn.extend 面向对象写法  ************************/

;(function($, window, document, undefind) {
	//定义构造函数
	var AddColor = function(ele, opt) {
		this.$element = ele,
		this.defaults = {
			color: this.$element.css('color')
		},
		this.options = $.extend({}, this.defaults, opt)
	}
	//定义方法
	AddColor.prototype = {
		addColor: function(){
			return this.$element.css({
                'color': this.options.color
            });
		}
	}
	//在插件中试用对象
	$.fn.addColorPlugin = function(option){
		var addColorItem = new AddColor(this, option);
		return addColorItem.addColor();
	}
})(jQuery, window, document);

/********************************************************************/