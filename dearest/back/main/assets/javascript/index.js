/*下面模拟的数据都是表格中的*/
/*index.html*/
/*失踪人员表*/
var people = [
{peopleId:1,name:'王斌',sex:'男',address:'广东省.东莞市.东坑镇.百顺市场外面的球场',time:'2004年11月12日',blood:'',jiguan:'湖南',birthDate:'1995年9月15日（现年21岁）',missType:'被拐卖',abstract:'身高135.圆脸单眼皮.皮肤较白.前面额头上有个旋.性格开朗',lianxiren:'张女士',phone:'15386024890',mail:'fen947649594@qq.com',lianxiAdd:'湖南省衡阳市衡东县霞流镇大水田九组',post:'421414',qita:'18320898254',beizhu:'',dengjiDate:'',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:2,name:'韩冷轩',sex:'男',address:'北京西火车站',time:'2016年9月15日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:3,name:'沐云帆',sex:'男',address:'北京南火车站',time:'2016年9月14日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:4,name:'李灵黛',sex:'女',address:'幸福幼儿园门口',time:'2016年7月14日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:5,name:'赵康',sex:'男',address:'银座商城门口',time:'2016年7月10日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:6,name:'安志',sex:'男',address:'798艺术区',time:'2016年4月10日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:7,name:'吴宇桐',sex:'女',address:'十三陵旅游景区',time:'2016年2月10日',show:'查看',edit:'编辑',delete:'删除'},
{peopleId:8,name:'虞信品',sex:'男',address:'首都机场附近',time:'2016年3月7日',show:'查看',edit:'编辑',delete:'删除'}
]

 for (var i = 0; i<people.length; i++) {
        
	var tr = $('<tr><td><input type="checkbox" /></td><td>'+people[i].name+'</td><td>'+people[i].sex+'</td><td>'+people[i].address+'</td><td>'+people[i].time+'</td><td><a style="color:#9ea7b3" href="miss_people_details.html"><span>'+people[i].show+'</span></a><span style="margin-left: 2vh;">'+people[i].edit+'</span><span style="margin-left: 2vh;">'+people[i].delete+'</span></td></tr>');
    $("#people").append(tr);
}
 /*失踪人员详细信息*/
var dl = $('<dt>被寻人姓名</dt><dd>'+people[0].name+'</dd><dt>性别</dt><dd>'+people[0].sex+'</dd><dt>血型</dt><dd>'+people[0].blood+'</dd><dt>籍贯</dt><dd>'+people[0].jiguan+'</dd><dt>出生日期</dt><dd>'+people[0].birthDate+'</dd><dt>失踪日期</dt><dd>'+people[0].time+'</dd><dt>失踪类型</dt><dd>'+people[0].missType+'</dd><dt>相貌特征</dt><dd>'+people[0].abstract+'</dd><dt>联系人</dt><dd>'+people[0].lianxiren+'</dd><dt>联系电话</dt><dd>'+people[0].phone+'</dd><dt>电子邮件</dt><dd>'+people[0].mail+'</dd><dt>联系地址</dt><dd>'+people[0].lianxiAdd+'</dd><dt>邮编</dt><dd>'+people[0].post+'</dd><dt>其他联系方式</dt><dd>'+people[0].qita+'</dd>')
$("#miss_people_details").append(dl);
//------------------------------------------------

/*失踪人员是否寻到表*/
var peopleT = [
{peopleTId:1,name:'林安深',sex:'男',sTime:'2014年1月21日',find:'是',fTime:'2015年10月21日',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:2,name:'简璐',sex:'女',sTime:'2013年9月15日',find:'否',fTime:'',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:3,name:'林海深',sex:'男',sTime:'2012年9月14日',find:'是',fTime:'2014年2月2日',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:4,name:'高伊晨',sex:'女',sTime:'2015年7月14日',find:'是',fTime:'2016年10月21日',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:5,name:'顾宗琪',sex:'男',sTime:'2014年7月10日',find:'是',fTime:'2016年3月1日',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:6,name:'程七七',sex:'女',sTime:'2011年4月10日',find:'否',fTime:'',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:7,name:'关荷',sex:'女',sTime:'2010年2月10日',find:'是',fTime:'2015年10月2日',show:'查看',edit:'编辑',delete:'删除'},
{peopleTId:8,name:'周越越',sex:'男',sTime:'2012年3月7日',find:'是',fTime:'2016年5月11日',show:'查看',edit:'编辑',delete:'删除'}
]


 for (var i = 0; i<peopleT.length; i++) {
    var tr = $('<tr><td><input type="checkbox" /></td><td>'+peopleT[i].name+'</td><td>'+peopleT[i].sex+'</td><td>'+peopleT[i].sTime+'</td><td >'+peopleT[i].find+'</td><td >'+peopleT[i].fTime+'</td><td class="edits"><span>'+peopleT[i].show+'</span><span style="margin-left: 2vh;">'+peopleT[i].edit+'</span><span style="margin-left: 2vh;">'+peopleT[i].delete+'</span></td></tr>');
    $("#peopleT").append(tr);
}

//------------------------------------------------
/*com_detail.html*/
/*模拟爱心企业的数据和企业发送的邮件数据*/

/*爱心企业的数据表*/
var company = [
{companyId:1,name:'中国红十字会',abstract:'中国红十字会',donate:'100万',time:'2016年10月1日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:2,name:'腾讯慈善公益基金会',abstract:'腾讯慈善公益基金会',donate:'200万',time:'2016年9月15日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:3,name:'I DO基金',abstract:'I DO基金',donate:'300万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:4,name:'中华慈善总会',abstract:'中华慈善总会',donate:'200万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:5,name:'阿里巴巴',abstract:'阿里巴巴',donate:'100万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:6,name:'万达',abstract:'万达',donate:'500万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:7,name:'百度',abstract:'百度',donate:'200万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:8,name:'儿童救助基金会',abstract:'儿童救助基金会',donate:'200万',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:9,name:'江苏黄埔再生资源利用有限公司',abstract:'江苏黄埔再生资源利用有限公司',donate:'200万',time:'2016年9月14日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:10,name:'成立福耀玻璃集团 ',abstract:'成立福耀玻璃集团',donate:'200万',time:'2016年9月14日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:11,name:'新奥集团',abstract:'新奥集团',donate:'200万',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:12,name:'中艺财富',abstract:'中艺财富',donate:'200万',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:13,name:'NU SKIN 如新',abstract:'NU SKIN 如新',donate:'200万',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:14,name:'中国华信能源有限公司',abstract:'中国华信能源有限公司',donate:'200万',time:'2016年8月7日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:15,name:'上海荷福控股集团有限公司',abstract:'上海荷福控股集团有限公司',donate:'200万',time:'2016年8月14日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:16,name:'大爱城投资控股有限公司',abstract:'大爱城投资控股有限公司',donate:'200万',time:'2016年8月14日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:17,name:'海航集团',abstract:'海航集团',donate:'300万',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:18,name:'联想集团',abstract:'联想集团',donate:'300万',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:19,name:'华为',abstract:'华为',donate:'100万',time:'2016年8月10日',show:'查看',edit:'编辑',delete:'删除'},
{companyId:20,name:'小米',abstract:'小米',donate:'100万',time:'2016年8月7日',show:'查看',edit:'编辑',delete:'删除'}
]

 for (var i = 0; i<company.length; i++) {
        
	var tr = $('<tr><td><input type="checkbox" /></td><td>'+company[i].name+'</td><td>'+company[i].abstract+'</td><td>'+company[i].donate+'</td><td>'+company[i].time+'</td><td><a style="color:#9ea7b3" href="details.html"><span>'+company[i].show+'</span></a><span style="margin-left: 2vh;">'+company[i].edit+'</span><span style="margin-left: 2vh;">'+company[i].delete+'</span></td></tr>');
    $("#company").append(tr);
}
//------------------------------------------------
/*企业发送的邮件表*/
var com_mail = [
{com_mailId:1,name:'中国红十字会',title:'中国红十字会',read:'是',time:'2016年10月1日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:2,name:'腾讯慈善公益基金会',title:'腾讯慈善公益基金会',read:'是',time:'2016年9月15日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:3,name:'I DO基金',title:'I DO基金',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:4,name:'中华慈善总会',title:'中华慈善总会',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:5,name:'阿里巴巴',title:'阿里巴巴',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:6,name:'万达',title:'万达',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:7,name:'百度',title:'百度',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:8,name:'儿童救助基金会',title:'儿童救助基金会',read:'是',time:'2016年10月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:9,name:'江苏黄埔再生资源利用有限公司',title:'江苏黄埔再生资源利用有限公司',read:'是',time:'2016年9月14日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:10,name:'成立福耀玻璃集团 ',title:'成立福耀玻璃集团',read:'是',time:'2016年9月14日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:11,name:'新奥集团',title:'新奥集团',read:'是',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:12,name:'中艺财富',title:'中艺财富',read:'是',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:13,name:'NU SKIN 如新',title:'NU SKIN 如新',read:'是',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:14,name:'中国华信能源有限公司',title:'中国华信能源有限公司',read:'是',time:'2016年8月7日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:15,name:'上海荷福控股集团有限公司',title:'上海荷福控股集团有限公司',read:'是',time:'2016年8月14日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:16,name:'大爱城投资控股有限公司',title:'大爱城投资控股有限公司',read:'是',time:'2016年8月14日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:17,name:'海航集团',title:'海航集团',read:'是',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:18,name:'联想集团',title:'联想集团',read:'是',time:'2016年9月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:19,name:'华为',title:'华为',read:'是',time:'2016年8月10日',show:'查看',edit:'编辑',delete:'删除'},
{com_mailId:20,name:'小米',title:'小米',read:'是',time:'2016年8月7日',show:'查看',edit:'编辑',delete:'删除'}
]

 for (var i = 0; i<com_mail.length; i++) {
        
	var tr = $('<tr><td><input type="checkbox" /></td><td>'+com_mail[i].name+'</td><td>'+com_mail[i].title+'</td><td>'+com_mail[i].time+'</td><td>'+com_mail[i].read+'</td><td><a style="color:#9ea7b3" href="mails.html"><span>'+com_mail[i].show+'</span></a><span style="margin-left: 2vh;">'+com_mail[i].edit+'</span><span style="margin-left: 2vh;">'+com_mail[i].delete+'</span></td></tr>');
    $("#com_mail").append(tr);
}
//------------------------------------------------
/*用户列表*/
/*userList.html*/
var userList = [
{userListId:1,name:'梦洁',password:'mengjie',sex:'女',birthday:'1976年10月1日',mail:'mengjie@163.com',phone:'18622368596',show:'查看',edit:'编辑',delete:'删除'},
{userListId:2,name:'雅静',password:'yajing',sex:'女',birthday:'1988年9月15日',mail:'yajing@163.com',phone:'18512365632',show:'查看',edit:'编辑',delete:'删除'},
{userListId:3,name:'歆瑶',password:'yinyao',sex:'女',birthday:'1985年10月7日',mail:'xinyao@qq.com',phone:'15622368626',show:'查看',edit:'编辑',delete:'删除'},
{userListId:4,name:'方仪 ',password:'fangyi',sex:'女',birthday:'1969年10月7日',mail:'fangyi@163.com',phone:'18622363496',show:'查看',edit:'编辑',delete:'删除'},
{userListId:5,name:'桂岚',password:'guilan',sex:'女',birthday:'1971年10月7日',mail:'guilan@126.com',phone:'15236496352',show:'查看',edit:'编辑',delete:'删除'},
{userListId:6,name:'易天',password:'chenming',sex:'男',birthday:'1984年10月7日',mail:'yitian223@163.com',phone:'15236963644',show:'查看',edit:'编辑',delete:'删除'},
{userListId:7,name:'晨铭 ',password:'yitian',sex:'男',birthday:'1973年10月7日',mail:'zhjf333@163.com',phone:'15123489502',show:'查看',edit:'编辑',delete:'删除'},
{userListId:8,name:'俊秋',password:'junjdf6',sex:'男',birthday:'1976年10月7日',mail:'junqiu23@126.com',phone:'15234673334',show:'查看',edit:'编辑',delete:'删除'},
{userListId:9,name:'昕然',password:'fdsffa223',sex:'女',birthday:'1978年9月14日',mail:'xinran@qq.com',phone:'13333334625',show:'查看',edit:'编辑',delete:'删除'},
{userListId:10,name:'宇龙 ',password:'zffz6652.',sex:'男',birthday:'1986年9月14日',mail:'yvlong222@163.com',phone:'15042359643',show:'查看',edit:'编辑',delete:'删除'},
{userListId:11,name:'菁迪',password:'didididi',sex:'女',birthday:'1996年9月10日',mail:'qingdi303@163.com',phone:'18000004377',show:'查看',edit:'编辑',delete:'删除'},
{userListId:12,name:'渊浩',password:'zjsfsa3s',sex:'男',birthday:'1966年9月10日',mail:'yuanhao2221@126.com',phone:'15633334570',show:'查看',edit:'编辑',delete:'删除'},
{userListId:13,name:'潇天',password:'NU22235',sex:'男',birthday:'1992年9月10日',mail:'xiaotian123@163.com',phone:'15644442345',show:'查看',edit:'编辑',delete:'删除'},
{userListId:14,name:'思亮',password:'aaaasdf3',sex:'男',birthday:'1990年8月7日',mail:'siliangzzz@sina.com',phone:'18645324679',show:'查看',edit:'编辑',delete:'删除'},
{userListId:15,name:'宁启',password:'efdfxc2',sex:'男',birthday:'1988年8月14日',mail:'ningqinnn@163.com',phone:'18543562873',show:'查看',edit:'编辑',delete:'删除'},
{userListId:16,name:'锴轩',password:'fsefe6ef',sex:'男',birthday:'1978年8月14日',mail:'xuanxuan@163.com',phone:'13956423567',show:'查看',edit:'编辑',delete:'删除'},
{userListId:17,name:'希喜',password:'faaef5ef2s',sex:'女',birthday:'1993年9月10日',mail:'xixixxxx@qq.com',phone:'13952348563',show:'查看',edit:'编辑',delete:'删除'},
{userListId:18,name:'泰鸿',password:'efs2a3',sex:'男',birthday:'1991年9月10日',mail:'taihong126@163.com',phone:'18634250123',show:'查看',edit:'编辑',delete:'删除'},
{userListId:19,name:'昊然',password:'sada2sd',sex:'男',birthday:'1994年8月10日',mail:'haorantur11@qq.com',phone:'18543162591',show:'查看',edit:'编辑',delete:'删除'},
{userListId:20,name:'瑾萱',password:'da3858fa',sex:'女',birthday:'1995年8月7日',mail:'fsfsz123@163.com',phone:'18542356370',show:'查看',edit:'编辑',delete:'删除'}
]

 for (var i = 0; i<userList.length; i++) {
        
	var tr = $('<tr><td><input type="checkbox" /></td><td>'+userList[i].name+'</td><td>'+userList[i].password+'</td><td>'+userList[i].sex+'</td><td>'+userList[i].birthday+'</td><td>'+userList[i].mail+'</td><td>'+userList[i].phone+'</td><td><a style="color:#9ea7b3" href="#.html"><span>'+com_mail[i].show+'</span></a><span style="margin-left: 2vh;">'+com_mail[i].edit+'</span><span style="margin-left: 2vh;">'+com_mail[i].delete+'</span></td></tr>');
    $("#userList").append(tr);
}
//------------------------------------------------
/*新闻*/
/*news.html*/
var news = [
{newsId:1,title:'好心人操碎心寻亲网帮了忙9年后哑女终于找到家',time:'2004年4月17日',where:'大河报',author:'',show:'查看',edit:'编辑',delete:'删除'},
{newsId:2,title:'默默，生日蜡烛为你点燃，家中妈妈盼你归来',time:'2000年12月17日',where:'《家报》第159期',author:'',show:'查看',edit:'编辑',delete:'删除'},
{newsId:3,title:'寻亲网：网上网下的故事',time:'2002年2月15日',where:'本报记者',author:'',show:'查看',edit:'编辑',delete:'删除'},
{newsId:4,title:'寻亲网助人找回亲骨肉,广东惠州欲建全国最大的失踪人口资料库 ',time:'2002年2月1日',where:'深圳商报 ',author:'深圳商报',show:'查看',edit:'编辑',delete:'删除'},
{newsId:5,title:'惠州人办起了“中国寻亲网”',time:'2002年1月29日',where:'摘自《惠州日报》',author:'guilan@126.com',show:'查看',edit:'编辑',delete:'删除'},
{newsId:6,title:'为打拐捧出一颗良心',time:'2002年1月10日',where:'',author:'邱长海',show:'查看',edit:'编辑',delete:'删除'},
{newsId:7,title:'买主们的悲喜人生 ',time:'2001年12月1日',where:'《齐鲁周刊》',author:'邱长海',show:'查看',edit:'编辑',delete:'删除'},
{newsId:8,title:'亲历拐卖儿童重灾区',time:'2002年1月10日',where:'《海峡周报》 ',author:'junqiu23@126.com',show:'查看',edit:'编辑',delete:'删除'},
{newsId:9,title:'寻亲网编织在泪水与脚印之间',time:'2000年4月1日',where:'《海峡周报》',author:'吴恩儿',show:'查看',edit:'编辑',delete:'删除'},
{newsId:10,title:'寻亲网牵线被拐儿童盼回家 ',time:'2001年7月11日',where:'《贵州都市报》',author:'',show:'查看',edit:'编辑',delete:'删除'},
{newsId:11,title:'寻亲记一家找回幸福，千百家还在悲哭',time:'2001年10月21日',where:'《羊城晚报》',author:'',show:'查看',edit:'编辑',delete:'删除'},
{newsId:12,title:'寻亲记孩子找回来了，可他还快乐吗？',time:'2001年10月18日',where:'《羊城晚报》',author:'',show:'查看',edit:'编辑',delete:'删除'}
]

 for (var i = 0; i<news.length; i++) {
        
	var tr = $('<tr><td><input type="checkbox" /></td><td>'+news[i].title+'</td><td>'+news[i].time+'</td><td>'+news[i].where+'</td><td>'+news[i].author+'</td><td><a style="color:#9ea7b3" href="news_detail.html"><span>'+com_mail[i].show+'</span></a><span style="margin-left: 2vh;">'+com_mail[i].edit+'</span><span style="margin-left: 2vh;">'+com_mail[i].delete+'</span></td></tr>');
    $("#news").append(tr);
}
//------------------------------------------------
