$(function(){
    $(".prizeboxclose").on("click",function(){
        $(".prizeboxout").hide();
    });
    getprizearr();
    $(".code").qrcode("https://www.baidu.com");
});
// 奖品的数据列表
var prizearr = [
    {
        'prizename':'美女一个',
        'prizenum':'9',
        'prizeurl':'./image/prizedraw/prizelist/13.jpg',
        'prizerank':'一等奖',
    },
    {
        'prizename':'充气娃娃一个',
        'prizenum':'99',
        'prizeurl':'./image/prizedraw/prizelist/12.jpg',
        'prizerank':'二等奖',
    },
    {
        'prizename':'充气气球一个',
        'prizenum':'999',
        'prizeurl':'./image/prizedraw/prizelist/10.jpg',
        'prizerank':'安慰奖',
    }
];
// 抽奖滚动页面的每一列的用户列表数据
var imgarr = [
    [{
        'imgname':'美女一号',
        'imgurl':'./image/prizedraw/prizelist/5.jpg',
    },
    {
        'imgname':'美女二号',
        'imgurl':'./image/prizedraw/prizelist/2.jpg',
    },
    {
        'imgname':'美女三号',
        'imgurl':'./image/prizedraw/prizelist/3.jpg',
    },
    {
        'imgname':'美女四号',
        'imgurl':'./image/prizedraw/prizelist/4.jpg',
    },
    {
        'imgname':'美女五号',
        'imgurl':'./image/prizedraw/prizelist/5.jpg',
    },
    {
        'imgname':'美女六号',
        'imgurl':'./image/prizedraw/prizelist/6.jpg',
    },
    {
        'imgname':'美女七号',
        'imgurl':'./image/prizedraw/prizelist/7.jpg',
    },
    {
        'imgname':'美女八号',
        'imgurl':'./image/prizedraw/prizelist/8.jpg',
    },
    {
        'imgname':'美女九号',
        'imgurl':'./image/prizedraw/prizelist/9.jpg',
    }],
    [{
        'imgname':'充气娃娃一号',
        'imgurl':'./image/prizedraw/prizelist/2.jpg',
    },
    {
        'imgname':'充气娃娃二号',
        'imgurl':'./image/prizedraw/prizelist/2.jpg',
    },
    {
        'imgname':'充气娃娃三号',
        'imgurl':'./image/prizedraw/prizelist/3.jpg',
    },
    {
        'imgname':'充气娃娃四号',
        'imgurl':'./image/prizedraw/prizelist/4.jpg',
    },
    {
        'imgname':'充气娃娃五号',
        'imgurl':'./image/prizedraw/prizelist/5.jpg',
    },
    {
        'imgname':'充气娃娃六号',
        'imgurl':'./image/prizedraw/prizelist/6.jpg',
    },
    {
        'imgname':'充气娃娃七号',
        'imgurl':'./image/prizedraw/prizelist/7.jpg',
    },
    {
        'imgname':'充气娃娃八号',
        'imgurl':'./image/prizedraw/prizelist/8.jpg',
    },
    {
        'imgname':'充气娃娃九号',
        'imgurl':'./image/prizedraw/prizelist/9.jpg',
    }],
    [{
        'imgname':'充气气球一号',
        'imgurl':'./image/prizedraw/prizelist/1.jpg',
    },
    {
        'imgname':'充气气球二号',
        'imgurl':'./image/prizedraw/prizelist/2.jpg',
    },
    {
        'imgname':'充气气球三号',
        'imgurl':'./image/prizedraw/prizelist/3.jpg',
    },
    {
        'imgname':'充气气球四号',
        'imgurl':'./image/prizedraw/prizelist/4.jpg',
    },
    {
        'imgname':'充气气球五号',
        'imgurl':'./image/prizedraw/prizelist/5.jpg',
    },
    {
        'imgname':'充气气球六号',
        'imgurl':'./image/prizedraw/prizelist/6.jpg',
    },
    {
        'imgname':'充气气球七号',
        'imgurl':'./image/prizedraw/prizelist/7.jpg',
    },
    {
        'imgname':'充气气球八号',
        'imgurl':'./image/prizedraw/prizelist/8.jpg',
    },
    {
        'imgname':'充气气球九号',
        'imgurl':'./image/prizedraw/prizelist/9.jpg',
    }]
];
// 中奖号码数组
var prizenumarr = [
    {
        'imgname':'美女五号',
        'imgurl':'./image/prizedraw/prizelist/5.jpg',
    },
    {
        'imgname':'充气娃娃六号',
        'imgurl':'./image/prizedraw/prizelist/6.jpg',
    },
    {
        'imgname':'充气娃娃六号',
        'imgurl':'./image/prizedraw/prizelist/8.jpg',
    }
]
// 渲染奖品列表
function getprizearr(){
    var list = prizearr;
        // var list = data2.awards;
    if(isArray(list)){
        $('.imgboxshow').css({
            'width':290*list.length+'px'
        })
        var str = "";
        for(var i = 0; i < list.length; i++){
            str += '<div class="imgbox fl re">'
                +'<div class="imgjiang">'
                    +'<img src='+list[i].prizeurl+' alt="">'
                +'</div>'
                +'<div class="prizeci">'
                    +'<p class="lineshow max150 tac mgauto">'+list[i].prizerank+'</p>'
                +'</div>'
                +'<div class="prizeshow">'
                    +'<p class="wp100 tac prizenum">'+list[i].prizenum+'名</p>'
                    +'<p class="wp100 tac prizename">'+list[i].prizename+'</p>'
                    +'<p class="wp100 tac prizenums">剩余 <span class="prizenumnow">'+list[i].prizenum+'</span> 个</p>'
                +'</div>'
                +'<div class="fg prizestartbtn prizestartbtn" onclick="showprize(this)">抽奖</div>'
            +'</div>';
        } 
        $(".imgboxshow").html(str);
    }
}
// 显示抽奖页面
function showprize(_this){
    var title = $(_this).parent().find(".prizeci").find("p").html();
    $(".prizeboxtitle").html(title);
    $(".prizeboxtitle2").html(title);
    $("#startfn").show();
    $("#stopbtn").hide(); 
    $("#startfn").html("抽奖");                   
    $("#stopbtn").html("停止");
    getimgarr(); 
}
// 获取开始的抽奖人员
function getimgarr(callback){
    $(".prizeboxout").show();
    $(".prizeboxtitle2box").hide();
    $("#prizeboxshow1").html("");
    $("#prizeboxshow2").html("");
    for(var i = 0; i < imgarr.length; i++){ 
        var str1 = "";
        $("#prizeboxshow1").append('<div class="prizeboximgout re"><div class="prizeboximg"></div></div>');
        var imgarrj = imgarr[i];
        for(var j = 0; j < imgarrj.length; j++){
            str1 += '<div class="prizeboxmove">'
                +'<div class="img">'
                    +'<img src='+imgarrj[j].imgurl+' alt="">'
                    +'<p class="wp100 tac ">'+imgarrj[j].imgname+'</p>'
                +'</div>'
            +'</div>';
        } 
        $("#prizeboxshow1").find(".prizeboximg").eq(i).html(str1);
    }
    if(imgarr.length <= 5){
        $("#prizeboxshow1").css({
            "width":imgarr.length*159+"px"
        });
        $(".prizetop").css({
            "height":'417px'
        })
    }
    if(typeof callback == 'function'){
        callback();
    }       
};
var startbool = true; //true可以抽奖，防止多次触发停止，影响滚动
// 开始抽奖
function startfn(_this){
    startsettimeout = 0;
    $(".prizeboxtitle2box").hide();    
    if(startbool){
        startbool = false;
        stopbool = false;
        endbool = false;
        $("#startfn").html("正在抽奖");
        setTimeout(function(){
            $("#startfn").hide();
            startbool = true;  
            $("#stopbtn").show();
        },500);
        getimgarr(function(){
            setTimeout(function(){
                var prizeboximg = $(".prizeboximg");
                for(var i = 0; i < prizeboximg.length; i++){
                    startrun($(".prizeboximg").eq(i));
                }
            },100);
        });
    }   
}
// 抽奖滚动
var endbool = false; //滚动true结束抽奖
var firststartbool = false; //是不是第一次抽奖
function startrun(dom){
    var i = 0;
    var j = 0;
    var endtime = 5;//定时器的速度
    var speed = 5;//每次移动多少像素
    dom.append(dom.find(".prizeboxmove").eq(0).clone());
    var size = dom.find(".prizeboxmove").size();
    var domheight = dom.height() - 180;
    var timer = setInterval(function () {
        var top = speed * i;
        if(j == 3){
            domheight = 1850;
            if(top >= 1850){
                $("#startfn").show();
                $("#stopbtn").hide(); 
                $("#startfn").html("抽奖");                   
                $("#stopbtn").html("停止");
                $(".prizeboxtitle2box").show();
                clearInterval(timer);
            }
        }
        if(top >= domheight){
            if(endbool){
                j += 1;
                speed -= 1;
            }else{
                if(speed <= 8){
                    speed += 1;
                }
            }
            i = 0;
        }
        dom.css({
            'top':-top+"px"  //dom标签的动画为向上移动；
        });
        i += 1;
    },endtime);
}
// 结束抽奖
var stopbool = true; //true可以停止，防止多次触发停止，影响滚动
function stopfn(){
    if(stopbool){
        return false;
    }
    $("#stopbtn").html("正在停止");
    stopbool = true;
    $(".prizeboxtitle2box").hide();
    if(isArray(prizenumarr)){
        for(var i = 0; i < prizenumarr.length; i++){ 
            var str = '<div class="prizeboxmove">'
                +'<div class="img">'
                    +'<img src='+prizenumarr[i].imgurl+' alt="">'
                    +'<p class="wp100 tac ">'+prizenumarr[i].imgname+'</p>'
                +'</div>'
            +'</div>';
            $(".prizeboximg").eq(i).append(str);
        }
        endbool = true;
    }
}
//用户发送的ajax请求(这种请求是需要等待并禁止用户的其他操作)
function inAjax(url,reqData,callback){
	$.ajax({
        method: "post",
        dataType:"json",	        
        url:url,
        data:reqData,
        beforeSend:function(XMLHttpRequest){

        },
        complete:function(XMLHttpRequest, textStatus){

        },
        success:function(data){
        	callback(data);
        },
	    error:function(XMLHttpRequest, textStatus, errorThrown) {
    		console.log(textStatus);
        }
	});
};
// 弹窗提醒
function cog(msg){
    alert(msg);
}
// 判断是否为数组
//判断是否为数组且至少有一个元素;
function isArray(ar){
	if(!$.isArray(ar)){
		return false;
	}else if(ar.length<1){
		return false;
	}else{
		return true;
	}
}
//把url参数形式的字符串转成json
function getJson(parames){
	var fields = parames.split('&');
	var res = {};
	for(var i = 0;i<fields.length;i++){
	    var field = fields[i].split('=');
	    res[field[0]]=field[1];
	}
	return res;		
};