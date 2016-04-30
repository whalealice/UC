// var aLi = getByClass('active');
// for(var i=0;i<aLi.length;i++){
//     aLi[i].style.background = 'red';
// }
//正则的方法
function getByClass(sClass,obj){
    obj = obj || document;
    var aEle = obj.getElementsByTagName('*');//找到父级下面所有的元素
    var arr = [];
    var re = new RegExp('\\b'+sClass+'\\b');

    for(var i=0;i<aEle.length;i++){
        if(re.test(aEle[i].className)){ 
        //匹配成功返回true就把这个存进数组里
            arr.push(aEle[i]);
        }
    }
    return arr;
}
//导航栏的显示和隐藏
var aLi = getByClass('aLi',nav);
// console.log(aLi.length);
var oUl = getByClass('indor');

var timer = null;
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    oUl[i].index = i;
    aLi[i].onmouseover = function(){
        for (var i = 0; i < oUl.length; i++) {
            oUl[i].style.display = 'none';
        };
        clearTimeout(timer);
        oUl[this.index].style.display = 'block';
    }
    aLi[i].onmouseout = function(){
        i = this.index;  
        timer = setTimeout(function(){
            oUl[i].style.display = 'none';
        },500) 
    }
};

//轮播图
var oBar = document.getElementById('barBox');
var aImg = oBar.getElementsByTagName('li')
var oDot =  document.getElementById('dot');
var aBtn = oDot.getElementsByTagName('span')
var zIndex = 0;
var oLi = aImg[0];
var timer1 = null;
var num = 0;

for (var i = 1; i < aImg.length; i++) {
    aImg[i].style.opacity = 0;
};
for (var i = 0; i < aBtn.length; i++) {
    aBtn[i].index = i;
    aBtn[i].onclick = function(){
        fnTab(this.index);
        num = this.index;
    }
};
function fnTab(n){
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].className = '';
        aImg[i].style.zIndex = 0;
        // timeMove(aImg[i],{
        //     'opacity':0
        // },200,'linear')
    };
    aBtn[n].className = 'active';
    aImg[n].style.zIndex = 1;
    //定点清除
    timeMove(oLi,{
        'opacity':0
    },200)

    timeMove(aImg[n],{
        'opacity':1
    },500)
    //console.log(this.index);
    oLi = aImg[n];//定点清除 让第0个等于当前的
}
//自动切换
autoPlay();
function autoPlay(){
    timer1 = setInterval(function(){
        num++;
        if (num==aBtn.length) {
            num = 0;
        };
        fnTab(num)
    },4000)
}
oBar.onmouseover = function(){
    clearInterval(timer1);
}
oBar.onmouseout = autoPlay;

//底部copy 鼠标移入慢慢显示和隐藏
var gLink = document.getElementById('gLink')
var fLink = document.getElementById('fLink')
var bLink = getByClass('btn_link');
var onOff = true;
bLink[0].onmouseover = function(){
    if (onOff) { 
        //右侧的小按钮
        bLink[0].style.backgroundPosition = '-124px -248px';
        startMove(gLink, {
            'height' : '55'
        });
     }else{
        bLink[0].style.backgroundPosition = '-105px -248px';
        startMove(gLink, {
            'height' : '34'
        });
    }
    onOff = !onOff;
}
//时间版的运动函数不能来回移入 再动画没有完成前再移入 就会出问题
var onOff1 = true;
bLink[1].onmouseover = function(){
    if (onOff1) {
        bLink[1].style.backgroundPosition = '-124px -248px';
        startMove(fLink, {
            'height' : '115'
        });
     }else{
        bLink[1].style.backgroundPosition = '-105px -248px';
        startMove(fLink, {
            'height' : '34'
        });
    }
    onOff1 = !onOff1;
}

//微信的鼠标移入显示  
var icoWei = document.getElementById('icoWei'); //UC微信的文字
var weiBox = document.getElementById('weiBox'); //div的高度变大变小
icoWei.onmouseover = function(){
    startMove(weiBox, {
        'height' : '202'
    });
}
icoWei.onmouseout = function(){
    startMove(weiBox, {
        'height' : '0'
    });
}
//中文版移入显示和隐藏语言    
var timer2 = null;
var LanBtn = document.getElementById('lan-cur');
var LanList = document.getElementById('list-lan');
LanBtn.onmouseover = function(){
    clearTimeout(timer2);
    LanList.style.display = 'block';
}
LanBtn.onmouseout = function(){
    timer2 = setTimeout(function(){
        LanList.style.display = 'none';
    },500)
}
LanList.onmouseover = function(){
    clearTimeout(timer2);
    LanList.style.display = 'block';
}
LanList.onmouseout = function(){
    timer2 = setTimeout(function(){
        LanList.style.display = 'none';
    },500)
}

//版本切换的效果
var oLoad = document.getElementById('download');
var oA = oLoad.getElementsByTagName('a');
var pico = getByClass('pico');
var ptext = getByClass('ptext');
var down = getByClass('down');
var updata = getByClass('updata');
var round = getByClass('round');
var sBox = pico[3].children[0];  
var arr = ["22px","-121px","-265px","-957px","-691px","-832px"]
for (var i = 0; i < oA.length; i++) {
    oA[i].index = i;
    oA[i].onmouseover = function(){

        //图片的定位高度的变化   火狐不认单独的backgroundPositionY
        pico[this.index].style.backgroundPosition = ''+arr[this.index]+' -105px';

        ptext[this.index].style.display = 'none';
        //立即下载和更新时间的显示
        down[this.index].style.display = 'block';
        down[this.index].style.paddingTop = '6px';
        down[this.index].style.color = '#ff6600';

        updata[this.index].style.display = 'block';
        //外面的圆圈的透明度的显示
        round[this.index].style.opacity = 1;
    }
    oA[i].onmouseout = function(){
        //图片的定位高度的变化
        pico[this.index].style.backgroundPosition = ''+arr[this.index]+' 14px';

        ptext[this.index].style.display = 'block';
        //立即下载和更新时间的显示
        down[this.index].style.display = 'none';
        down[this.index].style.paddingTop = '3px';
        down[this.index].style.color = '#ff6600';

        updata[this.index].style.display = 'none';
        //外面的圆圈的透明度的显示
        round[this.index].style.opacity = 0;
    }
};
oA[3].onmouseover = function(){
    //图片的定位高度的变化
    pico[this.index].style.backgroundPosition = '-957px -105px'; 
    pico[this.index].style.height = '80px';

    sBox.style.top = '14px';
    sBox.style.color = '#ff6600';

    ptext[this.index].style.display = 'none';
    //立即下载和更新时间的显示
    // down[this.index].style.display = 'block';
    // down[this.index].style.paddingTop = '8px';
    // down[this.index].style.color = '#ff6600';

    updata[this.index].style.display = 'block';
    //外面的圆圈的透明度的显示
    round[this.index].style.opacity = 1;
}
oA[3].onmouseout = function(){
    //图片的定位高度的变化
    pico[this.index].style.backgroundPosition = '-957px 14px';
    pico[this.index].style.height = '70px';

    sBox.style.top = '80px';
    sBox.style.color = '#ff6600';

    ptext[this.index].style.display = 'block';
    //立即下载和更新时间的显示
    // down[this.index].style.display = 'none';
    // down[this.index].style.paddingTop = '3px';
    // down[this.index].style.color = '#ff6600';

    updata[this.index].style.display = 'none';
    //外面的圆圈的透明度的显示
    round[this.index].style.opacity = 0;
}
