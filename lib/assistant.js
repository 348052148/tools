
//-----------------------DRAW LIST----------------------------------

var is_drag = false;
var cavans = $("<div id='canvas' ></div>");
$("body").append(cavans);
$("body").mousemove(function (event) {
    if(is_drag){

        var scrollPos = ScollPostion();

        var left = event.clientX + scrollPos.left - document.body.clientLeft;
        var top =event.clientY + scrollPos.top - document.body.clientTop;

        cavans.css({"top":top-cavans.height()/2});
        cavans.css({"left":left-cavans.width()/2});

        cavans.clientX = event.clientX;
        cavans.clientY = event.clientY;

    }
});

//todo 窗口滚动事件
window.onscroll = function(){
    var scrollPos = ScollPostion();

    var left = cavans.clientX + scrollPos.left - document.body.clientLeft;
    var top =cavans.clientY + scrollPos.top - document.body.clientTop;

    cavans.css({"top":top-cavans.height()/2});
    cavans.css({"left":left-cavans.width()/2});

};

cavans.mouseup(function () {
    is_drag=false;
});

cavans.mousedown(function () {
    is_drag=true;
});



var pWidth = $('body').width();
var pHeight = window.innerHeight;

cavans.css({'top':pHeight-100,'left':pWidth-100});
cavans.clientX = pWidth-100;
cavans.clientY = pHeight-100;

BGame.createWindow(0,0,60,60,'1px solid #eee',document.getElementById('canvas'));
BGame.init();
var director= new BDirector();
director.init(BGame);

var pinpinScence = new BScene();

var explorer = new BExplorer(director);

explorer.loadImages({
    pingping: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2020551558,2975581821&fm=27&gp=0.jpg",
    translate:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3132945234,3736709287&fm=27&gp=0.jpg"

},function (loadedImages,numImages) { //加载中回调

},function () { //加载完成回调
    var PingSprite = new BImageSprite();
    pinpinScence.addChild(PingSprite);

    BGame.hooks.push(function () {
        if(is_Translate){
            PingSprite.setImageData(explorer.IMG['translate']);
        }else{
            PingSprite.setImageData(explorer.IMG['pingping']);
        }
        PingSprite.height=60;
        PingSprite.width=60;

    });
});

director.addScene(pinpinScence);
director.run();