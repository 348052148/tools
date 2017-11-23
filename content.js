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

//----------------------GOLBAL VAR----------------------------------

var is_Ctrl = false; //是否按下ctrl

//模式切换

var is_Translate = false; // 翻译模式

var is_Shift = false; //是否按下shift


// var qmessage = new Message();
var layerId = 0; //todo LAYER ID

var is_load = false; //todo LAYER 防止重复加载

var is_Tag = 'b';

//--------------------FUNC LIST----------------------------------

//todo 对选择的字符做替换操作
function replaceSelection(str) {
    if (window.getSelection) {
        var selecter = window.getSelection();
        var selectStr = selecter.toString();
        if (selectStr.trim != "") {
            var rang = selecter.getRangeAt(0);
            if(!rang) return false;
            var temp = $("<"+is_Tag+">"+"<"+is_Tag+"/>");
            console.log(temp);
            rang.surroundContents(temp[0]);
            //TODO 重载内容
            temp.html(str);
            temp.attr('source_data_html',selectStr);
            temp.addClass('pingping_translate_class');
        }
    } else if (document.selection) {//ie
        var selecter = document.selection.createRange();
        selecter.select();
        var selectStr = selecter.text;
        selecter.pasteHTML("<b>" + selectStr + "<b/>");
    }
}

//todo 还原翻译
function reductionALLSelection() {
    $('.pingping_translate_class').each(function () {
        $(this).html($(this).attr('source_data_html'));
    });
}

//todo 获取选择的字符

var funcGetSelectText = function(){
    var txt = '';
    if(document.selection){
        txt = document.selection.createRange().text;//ie
    }else{
        txt = document.getSelection();
    }
    return txt.toString();
};


var handleShift = function(){
    is_Translate = is_Translate ? false : true;
    if(!is_Translate){
        reductionALLSelection();
    }
};


//----------------------------VIEW LIST--------------------------------------------------
function ChatView() {
    var chat =$('<div id="chat">\n' +
        '        <textarea id="msg"></textarea>\n' +
        '    </div>');

    chat.find('textarea').css({'width':'523px','height':'205px','resize':'none','border':'1px #eee solid'});

    return chat;
}

function RobotView() {
    var robot = $('<div>\n' +
        '        <textarea id="quest"></textarea>\n' +
        '        <button id="quest_ok">提问</button>\n' +
        '    </div>');

    robot.find('textarea').css({'width':'523px','height':'180px','resize':'none','border':'1px #eee solid'});

    return robot;
}

function TranselateView(){
    var transelate = $('<div >\n' +
        '        <button id="transelate_ok" transelate_mode="1" style="font-size: 12px;">翻译</button>&nbsp;&nbsp;当前翻译：&nbsp<span id="transelate_mode" style="color: red;">中文-英文</span>\n' +
        '        <textarea id="transelate_zh_query"></textarea>\n' +
        '        <textarea id="transelate_en_query" readonly></textarea>\n'+
        '    </div>');
    transelate.find('textarea').css({'width':'523px','height':'90px','resize':'none','border':'1px #eee solid'});

    return transelate;
}

//--------------------------EVENT LIST------------------------------------------

$(document).mouseup(function(){
    var query = funcGetSelectText();
    if(is_Translate && query.trim !="")
    {
        chrome.extension.sendRequest({type:'translate',query: query}, function(response) {});

    }
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    //初始化
    if(request.type == 'init'){
        localStorage.id = request.id;
        sendResponse({status:true});
    }
    if(request.type == 'translate'){
        console.log(request.data);
        if(!request.data.error_code){
            if(request.data.trans_result)
            replaceSelection(request.data.trans_result[0].dst);
        }
        // layer.alert(request.data.trans_result[0].dst, {
        //     skin: 'layui-layer-molv' //样式类名
        //     ,closeBtn: 0,
        //     anim: 4
        // });
        sendResponse({status:true});
    }
});





$(document).keydown(function (event) {

    if(event.keyCode==27){
        is_load = false;
        layer.close(layerId);
    }

    if(event.keyCode == 17){
        is_Ctrl = true;
    }
    if(event.keyCode == 16){
        handleShift();
        is_Shift = true;
    }

    if(is_Ctrl && event.keyCode == 13){
        var message = $('#msg').val();
        // qmessage.sendMessage(localStorage.id,localStorage.nickname,message,function (data) {
        //     $('#msg').val('');
        // });
        chrome.extension.sendRequest({type:'chat',message: message}, function(response) {});

    }
    //insert件
    if(event.keyCode == 45 && is_load ==false){
        //layer.alert(event.keyCode);

        var chat = ChatView();

        chat.focus();



        var robot = RobotView();

        var transelate = TranselateView();

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
                title: '翻译',
                content: transelate.html()
            }]
        });

        //----------------------问答-------------------------------
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

        //-----------------------翻译--------------------------
        $('#transelate_zh_query').on('input propertychange',function(){
            // $('#transelate_zh_query').input(function () {
            var query = $(this).val();
            var transelate_mode = $('#transelate_ok').attr('transelate_mode');
            chrome.extension.sendRequest({type:'retime_translate',query: query,transelate_mode:transelate_mode}, function(response) {
                // console.log(response);
                if( response.data.trans_result && response.data.trans_result instanceof Array){
                    $('#transelate_en_query').val(response.data.trans_result[0].dst);
                }
            });
        });

        $('#transelate_ok').click(function () {
            if($(this).attr('transelate_mode') == 1){
                $(this).attr('transelate_mode',2);
                $('#transelate_mode').html('英文-中文');
            }else{
                $(this).attr('transelate_mode',1);
                $('#transelate_mode').html('中文-英文');
            }
        });

        is_load = true;
    }

});
$(document).keyup(function (event) {
    is_Ctrl = false;
    is_Shift = false;
});


//-----------------------DRAW LIST----------------------------------

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