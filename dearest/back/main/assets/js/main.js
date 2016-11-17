head.js("assets/js/skin-select/jquery.cookie.js");
head.js("assets/js/skin-select/skin-select.js");

head.js("assets/js/clock/date.js");



head.js("assets/js/newsticker/jquery.newsTicker.js", function() {

    var nt_title = $('#nt-title').newsTicker({
        row_height: 18,
        max_rows: 1,
        duration: 5000,
        pauseOnHover: 0
    });

});

//------------------------------------------------------------- 


/*左侧分级菜单*/
head.js("assets/js/custom/scriptbreaker-multiple-accordion-1.js", function() {

    $(".topnav").accordionze({
        accordionze: true,
        speed: 500,
        closedSign: '<img src="assets/img/plus.png">',
        openedSign: '<img src="assets/img/minus.png">'
    });

});



//------------------------------------------------------------- 
/*nav时间*/
head.js("assets/js/clock/jquery.clock.js", function() {

    $('#digital-clock').clock({
        offset: '+5',
        type: 'digital'
    });
});


//------------------------------------------------------------- 
/*左菜单栏访问量*/
head.js("assets/js/gage/raphael.2.1.0.min.js", "assets/js/gage/justgage.js", function() {

    var g1;
    window.onload = function() {
        var g1 = new JustGage({
            id: "g1",
            value: getRandomInt(0, 1000),
            min: 0,
            max: 1000,
            relativeGaugeSize: true,
            gaugeColor: "rgba(0,0,0,0.4)",
            levelColors: "#0DB8DF",
            labelFontColor : "#ffffff",
            titleFontColor: "#ffffff",
            valueFontColor :"#ffffff",
            label: "访问量",
            gaugeWidthScale: 0.2,
            donut: true
        });
    };
    });
//-------------------------------------------------
//天气预告
var weather = [
{weatherId:1,city:'北京',content1:'雨转晴',content2:'11 °C'},
{weatherId:2,city:'上海',content1:'雨转晴',content2:'22.2 °C'},
{weatherId:3,city:'广州',content1:'雨转晴',content2:'28 °C'},
{weatherId:4,city:'深圳',content1:'雨转晴',content2:'27 °C'},
{weatherId:5,city:'杭州',content1:'雨转晴',content2:'23 °C'}
]

 for (var i = 0; i<weather.length; i++) {
        
	var li = $('<li><i class="wi-day-lightning"></i>&#160;&#160;'+weather[i].city+'&#160;<b>'+weather[i].content1+'</b></i>&#160;; '+weather[i].content2+'</li>');
    $("#nt-title").append(li);
}
//----------------------------------------------


//------------------------------------------------



//------------------------------------------------

var message=[
{message:1,city:"吉林、长春",base:"长春市红旗街1699号",dateTime:"2013-02-13",oneYN:200,leaveY:10,threeYN:500,tLeavaN:20,sum:480},
{message:2,city:"辽宁、沈阳",base:"沈阳市红旗街699号",dateTime:"2000-02-13",oneYN:300,leaveY:40,threeYN:1000,tLeavaN:200,sum:800},
{message:3,city:"吉林、吉林",base:"吉林市东西街99号",dateTime:"2014-11-13",oneYN:100,leaveY:0,threeYN:800,tLeavaN:26,sum:680},
{message:4,city:"黑龙江、哈尔滨",base:"哈尔滨市大旗街6099号",dateTime:"2012-02-13",oneYN:50,leaveY:0,threeYN:500,tLeavaN:13,sum:487},
{message:5,city:"北京、北京",base:"北京市昌平区西关1699号",dateTime:"2011-02-23",oneYN:200,leaveY:10,threeYN:509,tLeavaN:1,sum:609},
{message:6,city:"吉林、德惠",base:"德惠市九道街99号",dateTime:"2012-08-13",oneYN:10,leaveY:0,threeYN:100,tLeavaN:10,sum:90},
{message:7,city:"内蒙古、鄂尔多斯",base:"鄂尔多斯市大包街6990号",dateTime:"2010-02-13",oneYN:300,leaveY:5,threeYN:590,tLeavaN:20,sum:890},
{message:8,city:"江苏、无锡",base:"无锡小刘街109号",dateTime:"2015-02-13",oneYN:200,leaveY:10,threeYN:500,tLeavaN:20,sum:480},
{message:9,city:"河北、焦作",base:"焦作市焦作街1699号",dateTime:"2016-02-13",oneYN:200,leaveY:10,threeYN:280,tLeavaN:20,sum:260},
{message:10,city:"山西、泰安",base:"泰安市琪琪街689号",dateTime:"2015-02-13",oneYN:290,leaveY:3,threeYN:670,tLeavaN:37,sum:633},
{message:10,city:"上海",base:"上海市宝山区大名街639号",dateTime:"2014-09-10",oneYN:372,leaveY:50,threeYN:878,tLeavaN:90,sum:820},
{message:10,city:"天津",base:"天津市独立街689号",dateTime:"2011-11-10",oneYN:292,leaveY:50,threeYN:898,tLeavaN:58,sum:820},
{message:10,city:"广州",base:"广州市小洲街639号",dateTime:"2016-08-10",oneYN:302,leaveY:30,threeYN:848,tLeavaN:58,sum:820},
{message:10,city:"云南、昆明",base:"昆明市琪琪街639号",dateTime:"2010-08-10",oneYN:392,leaveY:50,threeYN:878,tLeavaN:58,sum:820}


]
for(var i=0;i<message.length;i++){
	var tr=$("<tr></tr>");
	var td=$('<td>'+message[i].city+'</td><td>'+message[i].base+'</td><td class="numeric">'+message[i].dateTime+'</td><td class="numeric">'+message[i].oneYN+'</td><td class="numeric">'
	+message[i].leaveY+'</td><td class="numeric">'+message[i].threeYN+'</td><td class="numeric">'+message[i].tLeavaN+'</td><td class="numeric">'+message[i].sum+'</td>');
	tr.append(td);
	$("#number").append(tr);
}


var scale=[
{scaleId:1,city:"吉林省",distribute:"吉林市、长春市、德惠市",sumNumber:1000,sumS:"30.3%",money:5000,eading:"王二小"},
{scaleId:2,city:"辽宁省",distribute:"沈阳市",sumNumber:800,sumS:"23.3%",money:3000,eading:"齐齐"},
{scaleId:3,city:"黑龙江省",distribute:"哈尔滨市",sumNumber:500,sumS:"18.6%",money:2300,eading:"田丫"},
{scaleId:1,city:"河北省",distribute:"焦作市",sumNumber:400,sumS:"12.3%",money:1240,eading:"田七"},
{scaleId:1,city:"内蒙古省",distribute:"鄂尔多斯市",sumNumber:130,sumS:"5.3%",money:800,eading:"二牛"},
{scaleId:1,city:"云南省",distribute:"昆明市、贵州市",sumNumber:1000,sumS:"30.3%",money:5000,eading:"张嘎"},
{scaleId:1,city:"山西省",distribute:"泰安市",sumNumber:700,sumS:"20.3%",money:3500,eading:"王小"},
{scaleId:1,city:"上海",distribute:"上海市",sumNumber:700,sumS:"10.3%",money:3467,eading:"王一"},
{scaleId:1,city:"广州",distribute:"广州市",sumNumber:700,sumS:"10.3%",money:3987,eading:"倪妮"},
{scaleId:1,city:"天津",distribute:"天津市",sumNumber:700,sumS:"10.3%",money:3450,eading:"jom"},

]
for(var i=0;i<scale.length;i++){
	var tr=$("<tr></tr>");
	var td=$("<td>"+scale[i].city+"</td><td>"+scale[i].distribute+"</td><td>"+scale[i].sumNumber+"</td><td>"+scale[i].sumS+"</td><td>"+scale[i].money+"</td><td>"+scale[i].eading+"</td>");
	tr.append(td);
	$("#scale").append(tr);
}





