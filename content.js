//$('#page-wrapper').html("");

//----------------------GOLBAL VAR----------------------------------

var is_Ctrl = false; //是否按下ctrl

//模式切换

var is_Translate = false; // 翻译模式

var is_Shift = false; //是否按下shift


// var qmessage = new Message();
var layerId = 0; //todo LAYER ID

var is_load = false; //todo LAYER 防止重复加载

var is_Tag = 'b';


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


