function Message() {
    this.apiUrl = "http://chat.console.ismbao.com.cn/test/";

    this.sendMessage = function (id,nickname,message,backcall) {
        $.ajax({
            type: "GET",
            url: this.apiUrl+"setData/"+message+"/"+id,
            data:{nickname:nickname},
            dataType: "json",
            success: function(data){
                backcall(data);
            }
        });
    };

    this.connect = function(nickname,backcall){
        var uuid = Math.ceil(Math.random()*100000);
        var userInfo = {
            'id':uuid,
            'nickname':nickname
        };

        $.ajax({
            type: "GET",
            url: this.apiUrl+"connect",
            data:{userInfo:userInfo},
            dataType: "json",
            success: function(data){
                backcall(data);
            }
        });
    };

    this.receiveMessage = function (id,backcall) {
        $.ajax({
            type: "GET",
            url: this.apiUrl+"getData/"+localStorage.id,
            dataType: "json",
            success: function(data){
                backcall(data);
            }
        });
    };
}