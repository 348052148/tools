
// $('#timer_input').val(localStorage.timer/60000);
// var id = 20;
// $('#timer_input').change(function(){
//
// 	localStorage.timer = parseInt($('#timer_input').val())*1000*60;
// });

//Vue 控制
window.onload=function () {
    var Vm = new Vue({
        el:'#app',
        data:{
            message:'',
            timer:6, //时间
            msg_fps:3, //消息 频率
            nickname: '来自老公的关心',
            currentPage:1
        },
        created:function () {
            if(localStorage.timer){
                this.timer = localStorage.timer / 1000 / 60;
            }
            if(localStorage.msg_fps){
                this.msg_fps = localStorage.msg_fps / 1000;
            }
            if(localStorage.nickname){
                this.nickname = localStorage.nickname;
            }
        },
        methods:{
            sendMessage:function () {
                $.ajax({
                    type: "GET",
                    url: "http://chat.console.ismbao.com.cn/test/setData/"+this.message+"/20",
                    dataType: "json",
                    success: function(data){
                        Vm.message = '';
                    }
                });
            },
            setAttr:function () {
                localStorage.timer = this.timer*1000*60;
                localStorage.msg_fps = this.msg_fps*1000;
                localStorage.nickname = this.nickname;
            },
            //菜单烂open
            handleOpen:function (key, keyPath) {

            },
            //菜单烂close
            handleClose:function (key, keyPath) {

            },
            handleSelect:function (key, keyPath) {
                this.currentPage = key;
            }
        },
        computed: {

        }
    });
};

