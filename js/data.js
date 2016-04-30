//新闻的数据
var arrNew = [
    {
        "new1" : "想要得奖？那就一起River Run！",
        "new2" : "5000元大奖、UC工作机会等你来！",
        "new3" : "想要得奖？那加油吧！",
        "new4" : "UC新生袋，环保一起来”精彩活动回顾",
        "new5" : "最壕UC微信号。天天送大奖"
    },
    {
        "new1" : "UC九游更名阿里游戏 将进行公司化运作",
        "new2" : "UC浏览器荣获北京晨报“最具人气APP奖",
        "new3" : "艾瑞移动阅读数据：书旗粘度强 掌阅",
        "new4" : "阿里文学打造开放IP衍生模式 倡导产业",
        "new5" : "比达咨询：Q3第三方手机浏览器活跃用"
    },
    {
        "new1" : "【分享】电视盒子提速完全攻略！",
        "new2" : "【原创】粉丝七言那些青葱的爱情！",
        "new3" : "【晒奖】搞笑帝活动获奖手机入手！",
        "new4" : "【脑暴】三十三期，看谜题打一文物！",
        "new5" : "【活动】抢楼送出寄语赢007电影套票！"
    }
];

//导航的数据
var arrNav = [
    { "href":"#", "text":"首页" },
    { "href":"#", "text":"下载" },
    { "href":"#", "text":"公司" },
    { "href":"#", "text":"合作" },
    { "href":"#", "text":"校园" },
    { "href":"#", "text":"社区" },
    { "href":"#", "text":"帮助" }
];
//导航的下拉菜单
var arrList = {
    "computer" : [
                    { "href":"www.uc.cn", "text":"手机浏览器" },
                    { "href":"#", "text":"电脑浏览器" },
                    { "href":"#", "text":"TV浏览器" },
                    { "href":"#", "text":"android浏览器" } 
                ],
    "company" : [
                    { "href":"#", "text":"公司介绍" },
                    { "href":"#", "text":"公司动态" },
                    { "href":"#", "text":"管理团队" },
                    { "href":"#", "text":"企业文化" },
                    { "href":"#", "text":"粉丝专区" },
                    { "href":"#", "text":"联系我们" }
                ],
    "ad" :      [
                    { "href":"#", "text":"广告合作" },
                    { "href":"#", "text":"媒体合作" },
                    { "href":"#", "text":"运营商合作" },
                    { "href":"#", "text":"终端商合作" },
                    { "href":"#", "text":"互联网合作" },
                    { "href":"#", "text":"开发者中心" },
                    { "href":"#", "text":"安卓开放平台" },
                    { "href":"#", "text":"游戏开放平台" }
                ]
}

//动态渲染导航数据
var oNav = document.getElementById('nav');
var aNLi = oNav.children;
for (var i = 0; i < arrNav.length; i++) {
    //console.log(arrNav[i]);
    var oA = document.createElement('a');
    oA.innerHTML= arrNav[i].text;
    oA.href= arrNav[i].href;
    aNLi[i].appendChild(oA); 
};

//动态渲染新闻数据
var oNewP = getByClass('oNewP')
// var str = '';
for (var i = 0; i < arrNew.length; i++) {
    var json = arrNew[i];
    for(var key in json){
        var aLi = document.createElement('li');
        var oA = document.createElement('a');
        oA.innerHTML = json[key];
        aLi.appendChild(oA);
        oNewP[i].appendChild(aLi);
    }
}

//导航下拉菜单的数据渲染
var oUl = getByClass('indor')
var n = 0;
for(var attr in arrList){
    //console.log(arrList[attr])
    var json = arrList[attr];
    console.log(json);

    for (var i = 0; i < json.length; i++) {
        //console.log(json[i].text);
        var eLi = document.createElement('li');
        eLi.innerHTML= '<a href="'+json[i].href+'">'+json[i].text+'</a>';
        oUl[n].appendChild(eLi)
    };
    n++;
}


