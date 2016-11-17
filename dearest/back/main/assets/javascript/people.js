/*失踪人员管理界面*/
/*后台index.html*/
$(function() {
	/*失踪人员管理表*/
	$.get("assets/json/people/people.json",{},function(data) {
			for (var i = 0;i<data.length;i++) {
				var tr = $('<tr><td>'+data[i].name+'</td><td>'+data[i].sex+'</td><td>'+data[i].address+'</td><td>'+data[i].time+'</td><td><span>'+data[i].edit+'</span><span style="margin-left: 2vh;">'+data[i].delete+'</span></td></tr>');
    			$("#people").append(tr);
				}
			});
			
			
	/*人员记录表*/
	
				
				
})
