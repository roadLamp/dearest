var users=[
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
{userId:0,userName:"刘根",sex:"女",city:"江苏省...",picture:"img/t0141b5812c504ad4bc.jpg"},
]
for(var i=0;i<users.length;i++){
	var li1=$("<li class='ul_li'><img src="+users[i].picture+"></li>");
	var li2=$("<a href='#'><li class='ul_li1'><span class='f_long f_size_16'><b>"+users[i].userName+"</b></span><span class='f_gray_c5c'>"+users[i].sex+"</span><span class='f_gray_c8c' style='margin-left: 5px;'>"+users[i].city+"</span></li></a>");
	$("#ul").append(li1);
	$("#ul").append(li2);
//	$(".li").append(ul);
//	$("#list_ul").append(li);
}
