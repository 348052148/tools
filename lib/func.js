//--------------------FUNC LIST----------------------------------

//todo 获取滚动位置
function ScollPostion() {
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {
        top: t,
        left: l,
        width: w,
        height: h
    };
}

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

