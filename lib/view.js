
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
