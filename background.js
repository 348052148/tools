function show(text) {
	  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
	  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
	  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
	  new Notification(hour + time[2] + ' ' + period, {
	    icon: 'images/avatar.jpg',
	    body: text
	  });
}


	
	//chrome.browserAction.setBadgeText({text:'HP'});
	
	// Conditionally initialize the options.
	localStorage.isActivated = false;
	
	chrome.windows.onFocusChanged.addListener(function(windowId) {
		
		localStorage.isActivated = true;
	});

	chrome.omnibox.onInputEntered.addListener(function(text) {
		var apiKey = "9064e65b28c849fc9d4d4dca178e8b77";
		var data = {
			key:apiKey,
			info:text,
			userid:"123456"
		};
        $.ajax({
            type: "POST",
            url: "http://www.tuling123.com/openapi/api",
            data:data,
            dataType: "json",
            success: function(data){
            	//todo 文本类
                if(data.code == 100000){
                    show(data.text);
				}
				//todo 链接类
				if(data.code == 200000){

				}
				//todo  新闻类
                if(data.code == 200000){

                }
                //todo 菜谱类
                if(data.code == 200000){

                }
            }
        });

	});

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});

	var nickname = (localStorage.nickname)?localStorage.nickname:"来自老公的关心";

	if(!localStorage.timer) localStorage.timer = 1800000;

	if(!localStorage.msg_fps) localStorage.msg_fps = 2000;

	var qmessage = new Message();

	qmessage.connect(nickname,function (data) {
        localStorage.id = data.userInfo.id;

        //todo 通知休息逻辑
        if (window.Notification) {

            setInterval(function() {

                if ( localStorage.isActivated ) {
                    show('时间到了请注意休息-'+nickname);
                }
            }, localStorage.timer);
        }
		//todo 接受消息逻辑
        setInterval(function(){
            qmessage.receiveMessage(data.userInfo.id,function (data) {
                if(data.status){
                    new Notification('发送消息', {
                        icon: 'images/avatar.jpg',
                        body: data.info+'-'+data.nickname
                    });
                }
            });
        },localStorage.msg_fps);


    });