/*
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
	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
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