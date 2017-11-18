//$('#page-wrapper').html("");

var i = false;
var cavans = $("<div id='canvas' ></div>");
$("body").append(cavans);
$("body").mousemove(function (event) {
    if(i){
        var top = event.clientX + document.body.scrollLeft - document.body.clientLeft;
        var left =event.clientY + document.body.scrollTop - document.body.clientTop;
        cavans.css({"top":event.pageY-cavans.height()/2});
        cavans.css({"left":event.pageX-cavans.width()/2});
    }
});

cavans.mouseup(function () {
    i=false;
});
cavans.mousedown(function () {
    i=true;
});


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    //初始化
    if(request.type == 'init'){
        localStorage.id = request.id;
        sendResponse({status:true});
    }
});

var is_Ctrl = false;
// var qmessage = new Message();
var layerId = 0;
var is_load = false;
$(document).keydown(function (event) {

    if(event.keyCode==27){
        is_load = false;
        layer.close(layerId);
    }

    if(event.keyCode == 17){
        is_Ctrl = true;
    }

    if(is_Ctrl && event.keyCode == 13){
        var message = $('#msg').val();
        // qmessage.sendMessage(localStorage.id,localStorage.nickname,message,function (data) {
        //     $('#msg').val('');
        // });
        chrome.extension.sendRequest({message: message}, function(response) {});

    }
    //insert件
    if(event.keyCode == 45 && is_load ==false){
        //layer.alert(event.keyCode);
        var chat =$('<div id="chat">\n' +
            '        <textarea id="msg"></textarea>\n' +
            '    </div>');

        chat.find('textarea').css({'width':'523px','height':'205px','resize':'none','border':'1px #eee solid'});

        chat.focus();




        var robot = $('<div>\n' +
            '        <textarea id="quest"></textarea>\n' +
            '        <button id="quest_ok">提问</button>\n' +
            '    </div>');

        robot.find('textarea').css({'width':'523px','height':'180px','resize':'none','border':'1px #eee solid'});

        $('.layui-layer-content').css({'position':'none'});

        layerId = layer.tab({
            area: ['600px', '300px'],
            tab: [ {
                title: '聊天',
                content: chat.html()
            },{
                title: '问答',
                content: robot.html()
            }, {
                title: '音乐',
                content: '内容3'
            }]
        });
        var robotObj = new Robot();
        $('#quest_ok').click(function () {
            robotObj.chatMessage($('#quest').val(),function (data) {
                layer.alert(data.text, {
                    skin: 'layui-layer-molv' //样式类名
                    ,closeBtn: 0,
                    anim: 4
                });
            });
        });

        is_load = true;
    }

});
$(document).keyup(function (event) {
    is_Ctrl = false;
});


var pWidth = $('body').width();
var pHeight = window.innerHeight;

cavans.css({'top':pHeight-100,'left':pWidth-100});

BGame.createWindow(0,0,60,60,'1px solid #eee',document.getElementById('canvas'));
BGame.init();
var director= new BDirector();
director.init(BGame);

var pinpinScence = new BScene();

var explorer = new BExplorer(director);

explorer.loadImages({
    pingping: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2020551558,2975581821&fm=27&gp=0.jpg"

},function (loadedImages,numImages) { //加载中回调

},function () { //加载完成回调
    var PingSprite = new BImageSprite();
    PingSprite.setImageData(explorer.IMG['pingping']);
    PingSprite.height=60;
    PingSprite.width=60;
    pinpinScence.addChild(PingSprite);

});

director.addScene(pinpinScence);
director.run();