
function Robot() {

    this.apiUrl = "http://www.tuling123.com/openapi/api";
    var apiKey = "9064e65b28c849fc9d4d4dca178e8b77";


    this.chatMessage = function (text,backcall) {
        var data = {
            key:apiKey,
            info:text,
            userid:"123456"
        };

        $.ajax({
            type: "POST",
            url: this.apiUrl,
            data:data,
            dataType: "json",
            success: function(data){
                backcall(data);
            }
        });
    };

}