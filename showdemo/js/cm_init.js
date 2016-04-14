//元素resize
$(function(){
	$(window).bind('load', function(){
		var shebei = getPageSize();
		//console.log(shebei[3]);
		var act_w = shebei[2];
		var act_h = shebei[3];
		var base_w = 320;
		var base_h = 480;
		var blw = base_w / act_w;
		var blh = base_h / act_h;
		$(".cm-resize").each(function(){
			var str = $(this).attr("cm-resize-x");
			if(str){
				var arr = str.split(';');
				//console.log(arr);
				for (var i=0;i<arr.length;i++) {
					if(arr[i]){
						var arr_tmp = arr[i].split(':');
						if( arr_tmp.length >= 1 ){
							var classname = arr_tmp[0];
							var classvalue = arr_tmp[1].match( /\-?\d+\.?\d*/gi );
							var classvalueafter = arr_tmp[1].match( /[a-z|A-Z]+/gi );
							$(this).css( classname, classvalue / blw + classvalueafter );
						}
					}
				}
			}
			
			var stry = $(this).attr("cm-resize-y");
			if(stry){
				var arry = stry.split(';');
				//console.log(arry);
				for (var i=0;i<arry.length;i++) {
					if(arry[i]){
						var arry_tmp = arry[i].split(':');
						if( arry_tmp.length >= 1 ){
							//console.log( arry_tmp[1].match( /\d+\.?\d*/gi ) );
							//console.log( arry_tmp[1].match( /[a-z|A-Z]+/gi ) );
							var classname = arry_tmp[0];
							var classvalue = arry_tmp[1].match( /\-?\d+\.?\d*/gi );
							var classvalueafter = arry_tmp[1].match( /[a-z|A-Z]+/gi );
							$(this).css( classname, classvalue / blh + classvalueafter );
						}
					}
				}
			}
		})
	});
})

//获取页面的高度、宽度
function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac    
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari    
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer    
        if (document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode    
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body) { // other Explorers    
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
        }
    }       
    // for small pages with total height less then height of the viewport    
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }    
    // for small pages with total width less then width of the viewport    
    if (xScroll < windowWidth) {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
}