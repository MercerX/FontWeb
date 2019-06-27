/*
需要显示日期时间的地方引入此js文件，并在显示的容器后面调用dateString方法
参数说明：
	1、id:		需要显示时间的容器的ID，必须。
	2、type:	日期时间显示的风格
				cn: 	2011年10月01日 星期三
				en:		October 1, 2011 Wednesday 
				en2		Oct 1,2011 Wed
	PS:格式种类可自行扩充				
*/
function dateString(id,type){
	var con = document.getElementById(id);
	showDate();
	function showDate(){
		con.innerHTML = DateString();
	}
	function DateString(){
		var weekdayNameC = new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
		var weekdayNameE = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		var monthNameE2 = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December");
		var weekdayNameE2 = new Array("Sun.","Mon.","Tues.","Wed.","Thurs.","Friday","Sat.");
		var monthNameE = new Array("Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sept.","Oct.","Nov.","Dec.");
		var date = new Date();
		var year = date.getYear();
		year = (year<1900?(1900+year):year);
		var month = date.getMonth();
		var day = date.getDate();
		var weekday = date.getDay();
/*		var hour = date.getHours();
		var minute = date.getMinutes();
		minute = minute>9?minute:"0"+minute;
		var second = date.getSeconds();
		second = second>9?second:"0"+second;
*/		
		if(type=="en"){
			var stringDate = monthNameE[month]+" "+day+", "+year+" "+weekdayNameE[weekday]; 	
		}else if(type=="en2"){
			var stringDate = monthNameE2[month]+" "+day+", "+year+" "+weekdayNameE2[weekday];
		}else if(type=="cn"){
			var stringDate = year+"年"+(month+1)+"月"+day+"日 "+weekdayNameC[weekday]; 
			
		}
		return stringDate;
	}
}
