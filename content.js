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
$(document).keydown(function (event) {
    var robot = new Robot();
    //insert件
    if(event.keyCode == 45){
        //layer.alert(event.keyCode);

        layer.tab({
            area: ['600px', '300px'],
            tab: [{
                title: '问答',
                content: '<input type="text" id="quest" /></br><button id="quest_ok">提问</button>'
            }, {
                title: '聊天',
                content: '内容2'
            }, {
                title: '音乐',
                content: '内容3'
            }]
        });
        $('#quest_ok').click(function () {
            robot.chatMessage($('#quest').val(),function (data) {
                layer.alert(data.text, {
                    skin: 'layui-layer-molv' //样式类名
                    ,closeBtn: 0,
                    anim: 4
                });
            });
        });
    }
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