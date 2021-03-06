﻿/*
 * 加减乘除精度函数
 */

//加法浮点
function accAdd(num1,num2){
    var r1,r2,m;
    try{
        r1 = num1.toString().split('.')[1].length;
    }catch(e){
        r1 = 0;
    }
    try{
        r2=num2.toString().split(".")[1].length;
    }catch(e){
        r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    return Math.round(num1*m+num2*m)/m;
}

//减法浮点
function accSub(num1,num2){
    var r1,r2,m;
    try{ 
        r1 = num1.toString().split('.')[1].length;
    }catch(e){
    	r1 = 0;
    }
    try{
        r2=num2.toString().split(".")[1].length;
    }catch(e){
        r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return (Math.round(num1*m-num2*m)/m).toFixed(n);
}

//精确乘法
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{
		m+=s1.split(".")[1].length;
    }catch(e){
	
    }
    try{
		m+=s2.split(".")[1].length;
    }catch(e){
	
    }
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

//精确除法
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{
    	t1=arg1.toString().split(".")[1].length;
    }catch(e){
    	
    }
    try{
    	t2=arg2.toString().split(".")[1].length;
    }catch(e){
    	
    }
    with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
}

//保留n位小数
function getFloat(number, n) {
    n = n ? parseInt(n) : 0;
    if (n <= 0) return Math.round(number);
    number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
    return number;
};

//判断坏数字
function badFloat(num, size) {
    if(isNaN(num)) return true;
	num += '';
    if(-1 == num.indexOf('.')) return false;
    var f_arr = num.split('.');
    if(f_arr[1].length > size) {
		return true;
    }
    return false;
}

//输入不是数字
function notNum(o, len) {
    if(isNaN($(o).val())) $(o).val("");
    var value = len ? formatfloat($(o).val(), len, 0) : parseInt($(o).val());
    if(badFloat($(o).val(), len)) $(o).val(value);
}

//移动端返回前到固定一页
pushHistory(); 
window.addEventListener("popstate", function(e) {
    var coinname =$('#coinname').val();
    var href = "您的返回页面地址.html";
    window.location.href=href;
}, false);
function pushHistory() {
    var state = {
	title: "title",
	url: ""
    };
    window.history.pushState(state, "title", "");
};

/*
 * 点击页面元素跳到某个地方
 * obj 节点
 * height  跳到元素距离顶部高度  当height==0时，就是返回顶部的功能
 * time  到达时间
 */
function gotoFun(obj,height,time){
    $(obj).click(function () {
		$('html,body').animate({scrollTop:height},time);
    })
}

//获取页面滚动距离
$(window).scroll(function(){
    var height = $(window).scrollTop();
});

//jq写 !important
$(obj).css('cssText','background:#e8e8e8 !important');

//js 时间戳转换成正常的时间
function formatDateTime(timeStamp,type) {   
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;   
    m = m < 10 ? ('0' + m) : m;      
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d; 
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;  
    second = second < 10 ? ('0' + second) : second;
    switch (type){
    	case 1:
    		return y + '-' + m + '-' + d;
    		break;
    	case 2:
    		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    		break;
    }
};    

//获取样式原生方法
function getCss(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};