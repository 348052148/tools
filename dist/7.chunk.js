webpackJsonp([7],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-5c561f39",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\appbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] appbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c561f39", Component.options)
  } else {
    hotAPI.reload("data-v-5c561f39", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_socket_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            edit: false,
            searchStr: "",
            appLst: []
        };
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__libs_socket_js__["a" /* default */].request('system.app.list', {}, function (res) {
            console.log(res.data.list);
            _this.appLst = res.data.list;
        });
    },

    methods: {
        editDis: function editDis() {
            this.edit = !this.edit;
        }
    }
});

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "appbox"
  }, [_c('div', {
    staticClass: "state"
  }, [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "icon": "ios-clock-outline",
      "placeholder": "搜索"
    },
    model: {
      value: (_vm.searchStr),
      callback: function($$v) {
        _vm.searchStr = $$v
      },
      expression: "searchStr"
    }
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.editDis
    }
  }, [_vm._v("编辑")])], 1), _vm._v(" "), _c('div', {
    staticClass: "applist"
  }, [_c('ul', _vm._l((_vm.appLst), function(app) {
    return _c('li', [_c('Icon', {
      staticClass: "icon",
      attrs: {
        "size": "30",
        "type": app.icon
      }
    }), _c('div', {
      staticClass: "appname"
    }, [_vm._v(_vm._s(app.name))]), _vm._v(" "), _c('div', {
      staticClass: "edit"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'brow',
          params: {
            components: app.components
          }
        }
      }
    }, [_c('Icon', {
      staticClass: "open",
      attrs: {
        "size": "20",
        "title": "打开",
        "type": "outlet"
      }
    })], 1), _vm._v(" "), (_vm.edit) ? _c('block', [(app.ismenu == false) ? _c('Icon', {
      staticClass: "join",
      attrs: {
        "size": "20",
        "title": "设置菜单",
        "type": "ios-paperplane"
      }
    }) : _c('Icon', {
      staticClass: "join",
      attrs: {
        "size": "20",
        "title": "移除菜单",
        "type": "android-cancel"
      }
    }), _vm._v(" "), _c('Icon', {
      staticClass: "delete",
      attrs: {
        "size": "20",
        "title": "移除",
        "type": "ios-trash-outline"
      }
    })], 1) : _vm._e()], 1)], 1)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c561f39", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=7.chunk.js.map