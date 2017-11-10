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
		show('你搜索了关键字');
	});

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});

	var nickname = (localStorage.nickname)?localStorage.nickname:"来自老公的关心";

	if(!localStorage.timer) localStorage.timer = 1800000;
	
	// Test for notification support.
	if (window.Notification) {
		
	  setInterval(function() {
	
	    if ( localStorage.isActivated ) {
	      show('时间到了请注意休息-'+nickname);
	    }
	  }, localStorage.timer);
	}
	
	setInterval(function(){
	$.ajax({
            type: "GET",
            url: "http://chat.console.ismbao.com.cn/test/getData/20",
            dataType: "json",
            success: function(data){
				if(data.status){
						new Notification('发送消息', {
							icon: 'images/avatar.jpg',
							body: data.info+'-'+nickname
						});
				}
                
            }
        });
	},localStorage.msg_fps);