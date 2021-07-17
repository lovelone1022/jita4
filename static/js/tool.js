
//返回顶部
var bigfa_scroll = {
    backToTop: function($this) {
        $this.click(function() {
            $("body,html").animate({
                scrollTop: 0
            },
            800);
            return false;
        });
    }, 
}

$(document).ready(function() {
     var T = bigfa_scroll;
    T.backToTop($("#backtoTop")); 
	
	
	
	
	
	
	//设置初化视频宽高
	var width = $(".breadcrumb").width(); 
	$("#ifvideo").attr({
		"width" : width+30,
		"height" : width*0.45
	});
	
	//设置初始下一页样式
	var scwidth = $(this).width(); 		
	if(scwidth<992){
		$("#pre").addClass("pre");
	}else{
		$("#pre").removeClass("pre");
	}
	
	//解决轮播边框的问题
	var width = $(this).width();
	if(width<=847){
		$(".moving").addClass("clearpd");
	}
	//初始化图片高度，取值
	//reheight();
	$(window).resize(function () {      //监听视口大小
		//监听视口大小清除小屏的轮播边距
		var width = $(this).width(); 
		//alert(width);
		if(width<=847){
			$(".moving").addClass("clearpd");
		}else{
			$(".moving").removeClass("clearpd");;
		}
		//监听视口大小统一图片高度
		//reheight();
		//听视口大小设置视频宽高
		var widthsc = $(".breadcrumb").width(); 
		$("#ifvideo").attr({
			"width" : widthsc+30,
			"height" : widthsc*0.45
		});		
		//听视口大小设置下一页样式
		var scwidthsc = $(this).width(); 		
		if(scwidthsc<992){
			$("#pre").addClass("pre");
		}else{
			$("#pre").removeClass("pre");
		}		
	});
	
	
	
	
	
});

$(window).scroll(function(e) {
  h = $(window).height();
  t = $(document).scrollTop();
  if (t > 300) {
    $('#backtoTop').fadeIn('slow'); 
  } else {
    $('#backtoTop').fadeOut('fast'); 
  }
}) 

//IFRAME  高度自适应





function reheight() {
        var arr = [];
        $('.row .auto img').each(function(i){
            arr[i] = $(this).outerHeight();
        });
        $('.row .auto img').height(Math.max.apply(null,arr));
    };










