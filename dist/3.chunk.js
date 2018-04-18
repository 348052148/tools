webpackJsonp([3],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  "data-v-bf9b4df8",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\person.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] person.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf9b4df8", Component.options)
  } else {
    hotAPI.reload("data-v-bf9b4df8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_user_js__ = __webpack_require__(8);
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
            userInfo: { nickname: '未登录' }
        };
    },
    created: function created() {
        this.userInfo = __WEBPACK_IMPORTED_MODULE_1__libs_user_js__["a" /* default */];
    },

    methods: {
        url: function url() {
            return this.userInfo.isLogin() ? '/person' : '/login';
        }
    }
});

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "person"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.url()
    }
  }, [_c('Avatar', {
    staticClass: "avater",
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg"
    }
  }), _c('br'), _c('br'), _vm._v(" " + _vm._s(this.userInfo.nickname) + "\n         ")], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bf9b4df8", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3.chunk.js.map