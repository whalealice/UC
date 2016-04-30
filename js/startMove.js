// oDiv1.onclick = function() {
// 	startMove(this, {
// 		width : 200,
// 		height : 300,
// 		top:200,
// 		left:500
// 	});
// }

function startMove(obj,json,callback) {
	clearInterval(obj.timer);
	var iCur = 0;
	var iSpeed = 0;	
	obj.timer = setInterval(function() {
		//设置一个开关 控制两个属性值得大小不一样 
		var onOff = true;
					
		for ( var attr in json ) {
			//target没有 让json里的值等于他即可				
			var iTarget = json[attr];
			
			if (attr == 'opacity') {
				iCur = Math.round(getStyle( obj, 'opacity' ) * 100);
			} else {
				iCur = parseInt(getStyle(obj, attr));
			}
			//缓冲运动
			iSpeed = ( iTarget - iCur ) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			//循环的时候看 如果有一个值没有到目标点 就让开关为false就继续执行
			if (iCur != iTarget) {
				onOff = false;
				if (attr == 'opacity') {
					obj.style.opacity = (iCur + iSpeed) / 100;
					obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}
			
		}
		//循环完了 在这里看是不是所有的运动都到达了目标点 都到了开关就为true
		if (onOff) {
			clearInterval(obj.timer);
			callback && callback.call(obj);//判断一下为真的时候执行 解决有的有这项 有的没有
		}
		
	}, 30);
}
function getStyle(obj, attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,0)[attr];
}
//attr:变化的的样式 'left' 'width' 'opacity'
////num:变化的速度 
//target:变化到的最后值    透明度的值 0 - 100
//endFn:回调函数
function startMove1( obj,attr,num,target,endFn){
	clearInterval(obj.timer); //未定义 null
	//解决正负号的问题
  	if (attr=='opacity') {
		num = Math.floor(getStyle( obj, attr)*100) < target ? num : -num;
	}else{
		num = parseInt(getStyle(obj,attr)) < target ? num : -num;
	}
	
	obj.timer = setInterval(function(){

		if (attr == 'opacity') {
			var speed = Math.floor(getStyle( obj, attr )*100) + num;
		}else{
			var speed = parseInt(getStyle(obj,attr))+num; //步长
		}
    	
    	//dir为正数的时候往前，为负数的时候往后
    	if (speed>target && num>0 ||speed<target && num<0) {
	      	speed = target;   //往前
	   	 };
    	
        if (attr == 'opacity') {
        	obj.style.filter = 'alpha(opacity='+ speed +')';
        	obj.style.opacity = speed/100;
        }else{
        	obj.style[attr]= speed+'px';
        }

    	if ( speed == target ) {
			clearInterval(obj.timer );
			endFn&&endFn();  //判断一下为真的时候执行 解决有的有这项 有的没有
	    }

	},30);
}

// startMove2( oDiv,{
// 	'opacity':100,
// 	'left':200,
// 	'width':300,
// 	'height':200,
// 	'top':300
// },10)
//多值同时运动
function startMove2( obj,json,num,endFn){
	clearInterval(obj.timer); //未定义 null 	
	obj.timer = setInterval(function(){
		var onOff = true; //设置一个开关 控制两个属性值得大小不一样 
		for( var attr in json ){
			//target没有 让json里的值等于他即可
			var target = json[attr];
			//console.log(target);
			//解决正负号的问题
			if (attr=='opacity') {
				num = Math.floor(getStyle( obj, attr)*100) < target ? num : -num;
			}else{
				num = parseInt(getStyle(obj,attr)) < target ? num : -num;
			}
			//判断速度
			if (attr == 'opacity') {
				var speed = Math.floor(getStyle( obj, attr )*100) + num;
			}else{
				var speed = parseInt(getStyle(obj,attr))+num; //步长
			}
	    	//dir为正数的时候往前，为负数的时候往后
	    	if (speed>target && num>0 ||speed<target && num<0) {
		      	speed = target;   //往前
		   	 };
        	if (speed != target) {
        		//循环的时候看 如果有一个值没有到目标点 就让开关为false就继续执行
        		onOff = false;
        		if (attr == 'opacity') {
		        	obj.style.filter = 'alpha(opacity='+ speed +')';
		        	obj.style.opacity = speed/100;
		        }else{
		        	obj.style[attr]= speed+'px';
		        }
        	}
		}
		//循环完了 在这里看是不是所有的运动都到达了目标点 都到了开关就为true
		if (onOff) {
			clearInterval(obj.timer);
			endFn&&endFn();  //判断一下为真的时候执行 解决有的有这项 有的没有
		};
    },30);
}