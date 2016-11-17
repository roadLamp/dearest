/*company.html*/
/*只在后台界面使用*/
/*有待修改*/
var company_list_1 = [
{company_list_id:1,url:'assets/img/hongshizi.jpg',content1:'中国红十字会',content2:'中国红十字会1904年成立，以发扬人道、博爱、奉献精神，保护人的生命和健康，促进人类和平进步事业为宗旨。',content3:'人道',content4:'公正',content5:'中立',content6:'独立',content7:'志愿服务',content8:'统一',content9:'普遍',content10:'中国红十字会'}
]

 for (var i = 0; i<company_list_1.length; i++) {
        
	var div = $('<div class="vendor cs-style-6"><figure><img  class="companyImg1" src="'+company_list_1[i].url+'" alt=""><figcaption><a href="details.html">查看详情</a></figcaption></figure></div><div class="company-text"><h2>'+company_list_1[i].content1+'</h2><p>'+company_list_1[i].content2+'</p></div><div class="tag-nest"><i>'+company_list_1[i].content3+'</i><i>'+company_list_1[i].content4+'</i><i>'+company_list_1[i].content5+'</i><i>'+company_list_1[i].content6+'</i><i>'+company_list_1[i].content7+'</i><i>'+company_list_1[i].content8+'</i><i>'+company_list_1[i].content9+'</i></div><div class="video-category-bg"><h3>'+company_list_1[i].content10+'</h3><div class="triangle-white"></div><div class="triangle-video-right"></div></div>')
    $("#company_list_1").append(div);
}
 var company_list_2 = [
{company_list_id:1,url:'assets/img/tengxun.jpg',content1:'腾讯公益慈善基金会',content2:'腾讯公司倡导并发起了中国互联网第一家在民政部注册的全国性非公募基金会——腾讯基金会。',content3:'孤儿',content4:'困境儿童救助',content5:'腾讯公益慈善基金会'}
]

 for (var i = 0; i<company_list_1.length; i++) {
        
	var div = $('<div class="vendor cs-style-6"><figure><img  class="companyImg" src="'+company_list_2[i].url+'" alt=""><figcaption><a href="details.html">查看详情</a></figcaption></figure></div><div class="company-text"><h2>'+company_list_2[i].content1+'</h2><p>'+company_list_2[i].content2+'</p></div><div class="tag-nest"><i>'+company_list_2[i].content3+'</i><i>'+company_list_2[i].content4+'</i></div><div class="photo-category-bg"><h3>'+company_list_2[i].content5+'</h3><div class="triangle-white"></div><div class="triangle-photo-right"></div></div>')
    $("#company_list_2").append(div);
}
 var company_list_3 = [
{company_list_id:1,url:'assets/img/ido.jpg',content1:'I Do基金',content2:'I Do基金以发动社会力量关心救助儿童为宗旨，所捐款项主要用于灾 区受伤儿童的治疗和护理；灾区孤儿、贫困地区儿童及所有需要帮助儿童的救助；有突出表现儿童的奖励等。',content3:'儿童救助',content4:'梦想课堂',content5:'I Do基金'}
]

 for (var i = 0; i<company_list_3.length; i++) {
        
	var div = $('<div class="vendor cs-style-6"><figure><img  class="companyImg2" src="'+company_list_3[i].url+'" alt=""><figcaption><a href="details.html">查看详情</a></figcaption></figure></div><div class="company-text"><h2>'+company_list_3[i].content1+'</h2><p>'+company_list_3[i].content2+'</p></div><div class="tag-nest"><i>'+company_list_3[i].content3+'</i><i>'+company_list_3[i].content4+'</i></div><div class="audio-category-bg"><h3>'+company_list_3[i].content5+'</h3><div class="triangle-white"></div><div class="triangle-audio-right"></div></div>')
    $("#company_list_3").append(div);
}
