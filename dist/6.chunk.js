webpackJsonp([6],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-78d3d5f3",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78d3d5f3", Component.options)
  } else {
    hotAPI.reload("data-v-78d3d5f3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            value2: 0
        };
    },

    methods: {}
});

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('Carousel', {
    attrs: {
      "autoplay": "",
      "loop": ""
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  }, [_c('CarouselItem', [_c('div', {
    staticClass: "demo-carousel"
  }, [_c('img', {
    style: ({
      width: '100%'
    }),
    attrs: {
      "height": "200",
      "src": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
    }
  }), _vm._v("1")])]), _vm._v(" "), _c('CarouselItem', [_c('div', {
    staticClass: "demo-carousel"
  }, [_c('img', {
    style: ({
      width: '100%'
    }),
    attrs: {
      "height": "200",
      "src": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
    }
  }), _vm._v("2")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "plugs"
  }, [_c('ul', [_c('router-link', {
    attrs: {
      "to": {
        path: '/brow',
        params: {
          func: 'TaskList'
        }
      }
    }
  }, [_c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "aperture"
    }
  }), _c('span', [_vm._v("图形")])], 1)]), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "coffee"
    }
  }), _c('span', [_vm._v("coffie")])], 1), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "contrast"
    }
  }), _c('span', [_vm._v("半球")])], 1), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "ipod"
    }
  }), _c('span', [_vm._v("触摸")])], 1), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "network"
    }
  }), _c('span', [_vm._v("链接")])], 1), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "music-note"
    }
  }), _c('span', [_vm._v("音乐")])], 1), _vm._v(" "), _c('li', [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "size": "40",
      "type": "happy-outline"
    }
  }), _c('span', [_vm._v("表情")])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "notify"
  }, [_c('Card', {
    staticStyle: {
      "width": "49%",
      "display": "inline-block"
    }
  }, [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-film-outline"
    }
  }), _vm._v("\n                今日任务\n            ")], 1), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "extra",
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.changeLimit($event)
      }
    },
    slot: "extra"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-loop-strong"
    }
  }), _vm._v("\n                切换\n            ")], 1), _vm._v(" "), _c('ul', [_c('li', [_vm._v("\n                    完成文档编写\n                ")])])]), _vm._v(" "), _c('Card', {
    staticStyle: {
      "width": "49%",
      "display": "inline-block"
    }
  }, [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-film-outline"
    }
  }), _vm._v("\n                今日任务\n            ")], 1), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "extra",
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.changeLimit($event)
      }
    },
    slot: "extra"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-loop-strong"
    }
  }), _vm._v("\n                切换\n            ")], 1), _vm._v(" "), _c('ul', [_c('li', [_vm._v("\n                    完成文档编写\n                ")])])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78d3d5f3", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.chunk.js.map