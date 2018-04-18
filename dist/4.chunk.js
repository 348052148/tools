webpackJsonp([4],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-4e0c4c68",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e0c4c68", Component.options)
  } else {
    hotAPI.reload("data-v-4e0c4c68", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_user_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            search: '',
            searchLst: [],

            ws: {},
            userInfo: {},
            userLst: [],
            currentId: 0,
            isActive: false,
            currentIndex: 0,
            inputMsg: ''
        };
    },
    created: function created() {
        var _this = this;

        //页面关闭时释放消息连接
        window.onbeforeunload = function () {

            __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__["a" /* default */].request('user.logout', {
                uid: _this.userInfo.id
            }, function (msg) {});
        };

        // 好友信息处理 包括聊天记录
        this.userInfo = __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */];
        if (__WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].friendLst > 1) {
            this.currentId = __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].friendLst[0].id;
            this.isActive = true;
        }

        //监听消息
        __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__["a" /* default */].listen('message.recv', function (msg) {
            console.log(msg);
            var index = null;
            _this.userInfo.friendLst.forEach(function (v, i) {
                if (v.id == msg.data.from) {
                    index = i;
                }
            });
            if (index != null) _this.userInfo.friendLst[index].msgLst.push({
                ismster: false, user: _this.userInfo.friendLst[index],
                content: {
                    text: msg.data.content
                }
            });
        });
    },

    computed: {
        getUserMsg: function getUserMsg() {
            var _this2 = this;

            var i = 0;
            this.userInfo.friendLst.forEach(function (v, index) {

                if (v.id == _this2.currentId) {
                    i = index;
                    _this2.currentIndex = index;
                }
            });
            if (!this.userInfo.friendLst[i]) {
                return [];
            }
            return this.userInfo.friendLst[i].msgLst;
        }
    },
    methods: {
        //选择好友
        selectFriend: function selectFriend() {},

        //添加好友
        addFriend: function addFriend() {},

        //处理搜索
        handleSearch: function handleSearch(value) {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__["a" /* default */].request('user.find.list', { keyword: value }, function (data) {
                console.log(data);
                _this3.searchLst = data.data.list;
                // this.searchLst = [];
                // data.data.list.forEach((v)=>{
                //     this.searchLst.push(v.nickname);
                // });
            });
        },


        //获取未读消息
        unreadMsgCount: function unreadMsgCount(user) {
            var unread = 0;

            if (this.currentId == user.id) return 0;

            user.msgLst.forEach(function (v) {
                if (!v.read) {
                    unread++;
                }
            });

            return unread;
        },

        //标准当前用户
        currentUserStyle: function currentUserStyle(id) {
            if (this.currentId == id) {
                return { color: 'red' };
            }
            return {};
        },

        //发送消息
        inputMessage: function inputMessage() {

            if (this.inputMsg == '') {
                this.$Message.warning('不能发送空消息');
                return false;
            }

            __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__["a" /* default */].request('message.send', {
                from: this.userInfo.id,
                to: this.userInfo.friendLst[this.currentIndex].id,
                content: this.inputMsg
            }, function (msg) {});

            this.userInfo.friendLst[this.currentIndex].msgLst.push({
                ismster: true, user: this.userInfo,
                content: {
                    text: this.inputMsg
                }
            });
            this.inputMsg = '';
        },

        //选择用户
        selectUser: function selectUser(user) {
            this.currentId = user.id;
            this.isActive = true;
            console.log(this.currentId);
        }
    }
});

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('div', {
    staticClass: "msg-list-swrip"
  }, [_c('div', {
    staticClass: "msg-list"
  }, [_c('ul', [_c('li', {
    staticClass: "search"
  }, [_c('AutoComplete', {
    attrs: {
      "icon": "search",
      "placeholder": "搜索"
    },
    on: {
      "on-search": _vm.handleSearch,
      "on-select": _vm.selectFriend
    },
    model: {
      value: (_vm.search),
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  }, [_vm._l((_vm.searchLst), function(friend) {
    return _c('Option', {
      key: friend.id,
      staticClass: "optionSearch",
      attrs: {
        "value": friend.nickname
      }
    }, [_c('span', {
      staticClass: "complete-title"
    }, [_vm._v(_vm._s(friend.nickname))]), _vm._v(" "), _c('span', {
      staticClass: "complete-add",
      on: {
        "click": _vm.addFriend
      }
    }, [_c('Icon', {
      attrs: {
        "type": "plus-round"
      }
    })], 1)])
  }), _vm._v(" "), _c('a', {
    staticClass: "biao",
    attrs: {
      "target": "_blank"
    }
  }, [_vm._v("好友搜索")])], 2)], 1), _vm._v(" "), _vm._l((_vm.userInfo.friendLst), function(user) {
    return (user.id != _vm.userInfo.id) ? _c('li', {
      style: (_vm.currentUserStyle(user.id)),
      on: {
        "click": function($event) {
          _vm.selectUser(user)
        }
      }
    }, [_c('Avatar', {
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg"
      }
    }), _vm._v("\n                  " + _vm._s(user.nickname) + "\n                "), _c('Badge', {
      staticClass: "demo-badge-alone",
      attrs: {
        "count": _vm.unreadMsgCount(user)
      }
    })], 1) : _vm._e()
  })], 2)])]), _vm._v(" "), (_vm.isActive == true) ? _c('div', {
    staticClass: "msg-window"
  }, [_c('Scroll', {
    staticClass: "chat",
    style: ({
      background: '#fff',
      marginBottom: '10px'
    }),
    attrs: {
      "height": 400
    }
  }, [_c('ul', _vm._l((_vm.getUserMsg), function(msg) {
    return _c('li', {
      class: msg.ismster ? 'slef-mode' : 'msg-mode'
    }, [_c('div', {
      staticClass: "user-info"
    }, [_c('Avatar', {
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg"
      }
    }), _vm._v("  " + _vm._s(msg.user.nickname) + "  ")], 1), _vm._v(" "), _c('div', {
      staticClass: "msg-content",
      attrs: {
        "data": msg.read = true
      }
    }, [_vm._v("\n                    " + _vm._s(msg.content.text) + " \n                    "), _vm._l((msg.content.imgs), function(img) {
      return _c('img', {
        attrs: {
          "width": "300",
          "src": img
        }
      })
    })], 2)])
  }))]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "输入发送内容",
      "clearable": ""
    },
    on: {
      "on-enter": _vm.inputMessage
    },
    model: {
      value: (_vm.inputMsg),
      callback: function($$v) {
        _vm.inputMsg = $$v
      },
      expression: "inputMsg"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "shape": "circle"
    }
  }, [_vm._v("发送")])], 1) : _c('div', {
    staticClass: "msg-window"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4e0c4c68", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4.chunk.js.map