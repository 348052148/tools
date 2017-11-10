
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
            id:0,
            title:'',
            message:'',
            timer:6, //时间
            msg_fps:3, //消息 频率
            nickname: '来自老公的关心',
            currentPage:1,
            qmessage:null
        },
        created:function () {
            if(this.currentPage == 1) this.title = '聊天';
            if(this.currentPage == 2) this.title = '音乐';
            if(this.currentPage == 3) this.title = '时间';
            if(this.currentPage == 4) this.title = '更多';
            if(this.currentPage == 5) this.title = '设置';

            if(localStorage.id){
                this.id = localStorage.id
            }

            if(localStorage.timer){
                this.timer = localStorage.timer / 1000 / 60;
            }
            if(localStorage.msg_fps){
                this.msg_fps = localStorage.msg_fps / 1000;
            }
            if(localStorage.nickname){
                this.nickname = localStorage.nickname;
            }

            this.qmessage = new Message();
        },
        methods:{
            sendMessage:function () {
                this.qmessage.sendMessage(this.id,this.nickname,this.message,function (data) {
                    Vm.message = '';
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
                if(this.currentPage == 1) this.title = '聊天';
                if(this.currentPage == 2) this.title = '音乐';
                if(this.currentPage == 3) this.title = '时间';
                if(this.currentPage == 4) this.title = '更多';
                if(this.currentPage == 5) this.title = '设置';
            }
        },
        computed: {

        }
    });
};

