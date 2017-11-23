function show(text) {
	  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
	  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
	  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
	  new Notification(hour + time[2] + ' ' + period, {
	    icon: 'images/avatar.jpg',
	    body: text
	  });
}

	
	// Conditionally initialize the options.
	localStorage.isActivated = false;

    var nickname = (localStorage.nickname)?localStorage.nickname:"来自老公的关心";

    if(!localStorage.timer) localStorage.timer = 1800000;

    if(!localStorage.msg_fps) localStorage.msg_fps = 2000;


	
	chrome.windows.onFocusChanged.addListener(function(windowId) {
		
		localStorage.isActivated = true;
	});

	chrome.omnibox.onInputEntered.addListener(function(text) {
		new Robot().chatMessage(text,function (data) {
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
        });
	});


	var TabId = 0;

    //点击图标
	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});

	//tab创建
    chrome.tabs.onCreated.addListener(function(tab) {
        TabId = tab.id;
        chrome.tabs.sendRequest(tab.id, {type:'init',id:localStorage.id,nickname:localStorage.nickname}, function (response) {

        });
    });

    //tab更新
    chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
        TabId = tabId;
        chrome.tabs.sendRequest(tabId, {type:'init',id:localStorage.id,nickname:localStorage.nickname}, function (response) {

        });
    });

    //tab 选择
    chrome.tabs.onSelectionChanged.addListener(function(tabId,selectInfo) {
        TabId = tabId;
    });

    //todo websocket
    var socketClient = new SocketClient();

    socketClient.setServerOption({ip:'47.92.98.69',port:8181});

    var scene = new NQScene(socketClient);

    //发送返回的消息
    scene.run(function (event,wsocket) {
        dataInfo = GameUtils.parseMessage(event.data);
        if(GameUtils.TYPE.USER == dataInfo.head.type){
            chrome.tabs.sendRequest(TabId, {type:'message',id:localStorage.id,nickname:localStorage.nickname}, function (response) {

            });
        }
        console.log(event.data);
        //返回的消息
        if(GameUtils.TYPE.CHAT == dataInfo.head.type){
            new Notification('发送消息', {
                icon: 'images/avatar.jpg',
                body: dataInfo.body.content+'-'+'laogong'
            });
        }
    });

    //接受发送消息
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if(request.type == 'chat'){
            socketClient.send(request.message);
        }
        if(request.type == 'translate'){

            var appid = '20171122000098654';
            var key = 'l8BptNrr5nbPF3VsYDKi';
            var salt = (new Date).getTime();
            var query = request.query;
            // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
            var from = 'en';
            var to = 'zh';

            var str1 = appid + query + salt +key;
            var sign = MD5(str1);
            $.ajax({
                url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                type: 'get',
                dataType: 'json',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function (data) {
                    chrome.tabs.sendRequest(TabId, {type:'translate',data:data}, function (response) {

                    });
                }
            });
        }
        if(request.type == 'retime_translate'){

            var appid = '20171122000098654';
            var key = 'l8BptNrr5nbPF3VsYDKi';
            var salt = (new Date).getTime();
            var query = request.query;
            // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'

            var from = 'zh';
            var to = 'en';

            if(request.transelate_mode == '2'){
                from = 'en';
                to = 'zh';
            }

            var str1 = appid + query + salt +key;
            var sign = MD5(str1);
            $.ajax({
                url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                type: 'get',
                dataType: 'json',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function (data) {

                    sendResponse({type:'retime_translate',data:data});

                    // chrome.tabs.sendRequest(TabId, {type:'translate',data:data}, function (response) {
                    //
                    // });
                }
            });


        }
    });


    //todo 通知休息逻辑
    if (window.Notification) {

        setInterval(function() {

            if ( localStorage.isActivated ) {
                show('时间到了请注意休息-'+nickname);
            }
        }, localStorage.timer);
    }


    //todo ajaxBan

	// var qmessage = new Message();

	// qmessage.connect(nickname,function (data) {
     //    localStorage.id = data.userInfo.id;


		//todo 接受消息逻辑
        // setInterval(function(){
         //    qmessage.receiveMessage(data.userInfo.id,function (data) {
         //        if(data.status){
         //            new Notification('发送消息', {
         //                icon: 'images/avatar.jpg',
         //                body: data.info+'-'+data.nickname
         //            });
         //        }
         //    });
        // },localStorage.msg_fps);


    // });