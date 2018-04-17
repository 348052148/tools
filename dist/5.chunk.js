webpackJsonp([5],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-427b790a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-427b790a", Component.options)
  } else {
    hotAPI.reload("data-v-427b790a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 32:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loginForm: {}
        };
    },

    methods: {
        handleSubmit: function handleSubmit() {
            var _this = this;

            var id = __WEBPACK_IMPORTED_MODULE_0__libs_util_js__["a" /* default */].MD5(this.loginForm.username + this.loginForm.passwd);
            //登录
            __WEBPACK_IMPORTED_MODULE_2__libs_socket_js__["a" /* default */].request('login', {
                username: this.loginForm.username,
                pass: this.loginForm.passwd,
                id: id
            }, function (msg) {
                console.log(msg);
                __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].friendLst = msg.data.friendLst;
                __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].id = msg.data.id;
                __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].nickname = msg.data.nickname;
                __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].accessToken = msg.data.accessToken;

                __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].login(_this.loginForm.username, _this.loginForm.passwd, __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */].id);

                _this.$router.go(-1);
                _this.$Message.success('登录成功');
            });
        }
    }
});

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "from"
  }, [_c('Input', {
    attrs: {
      "type": "text",
      "size": "large",
      "placeholder": "用户名"
    },
    model: {
      value: (_vm.loginForm.username),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "username", $$v)
      },
      expression: "loginForm.username"
    }
  }, [_c('Icon', {
    attrs: {
      "slot": "prepend",
      "type": "ios-person-outline"
    },
    slot: "prepend"
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "password",
      "size": "large",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.loginForm.passwd),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "passwd", $$v)
      },
      expression: "loginForm.passwd"
    }
  }, [_c('Icon', {
    attrs: {
      "slot": "prepend",
      "type": "ios-locked-outline"
    },
    slot: "prepend"
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit()
      }
    }
  }, [_vm._v("Signin")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-427b790a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5.chunk.js.map