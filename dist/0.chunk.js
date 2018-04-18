webpackJsonp([0],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-4dc75427",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\brow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dc75427", Component.options)
  } else {
    hotAPI.reload("data-v-4dc75427", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);
    }
    // 远程加载


    _createClass(Loader, [{
        key: "urlLoad",
        value: function urlLoad(url, func) {
            var xmlHttp = null;
            //根据window.XMLHttpRequest对象是否存在使用不同的创建方式 
            if (window.XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest(); //FireFox、Opera等浏览器支持的创建方式 
            } else {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE浏览器支持的创建方式 
            }

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4) {
                    func(xmlHttp.responseText);
                }
            }; //设置回调函数 
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
    }, {
        key: "locaLoad",
        value: function locaLoad(file, func) {
            var selectedFile = file; // document.getElementById('files').files[0];
            var name = selectedFile.name; //读取选中文件的文件名
            var size = selectedFile.size; //读取选中文件的大小
            console.log("文件名:" + name + "大小:" + size);

            var reader = new FileReader(); //这是核心,读取操作就是由它完成.
            reader.readAsText(selectedFile); //读取文件的内容,也可以读取文件的URL
            reader.onload = function () {
                //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
                console.log(this.result);
                func(this.result);
            };
        }
    }]);

    return Loader;
}();

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_loader_js__ = __webpack_require__(28);
//
//
//
//
//
//
//
//
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
    props: {
        // 父组件提供请求地址
        url: {
            type: String,
            default: ''
        },
        socket: {
            type: Object,
            default: ''
        }
    },
    name: 'TaskList',
    data: function data() {
        return {
            mode: ''
        };
    },

    watch: {
        url: function url() {
            var _this = this;

            var loader = new __WEBPACK_IMPORTED_MODULE_0__libs_loader_js__["a" /* default */]();
            loader.urlLoad(this.url, function (text) {

                var Fn = Function;
                console.log(new Fn('return ' + text));
                _this.mode = new Function('return ' + text)();
            });
        }
    },
    created: function created() {},
    mounted: function mounted() {
        var _this2 = this;

        var loader = new __WEBPACK_IMPORTED_MODULE_0__libs_loader_js__["a" /* default */]();
        loader.urlLoad(this.url, function (text) {

            var Fn = Function;
            console.log(new Fn('return ' + text));
            _this2.mode = new Function('return ' + text)();
        });
    },

    methods: {}
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_user_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_loader_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LoaderComponents_LoaderComponents_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LoaderComponents_LoaderComponents_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_LoaderComponents_LoaderComponents_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_socket_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        LoaderComponents: __WEBPACK_IMPORTED_MODULE_3__components_LoaderComponents_LoaderComponents_vue___default.a
    },

    data: function data() {
        return {
            url: '',
            socket: null
        };
    },

    watch: {
        '$route': function $route(to, from) {
            console.log(this.$route.params.components);
            this.url = this.$route.params.components;
        }
    },
    computed: {
        furl: function furl() {
            this.url = this.$route.params.components;
            return this.url;
        }
    },
    beforeUpdate: function beforeUpdate() {},
    mounted: function mounted() {
        console.log('mounted');
    },
    created: function created() {
        this.socket = __WEBPACK_IMPORTED_MODULE_4__libs_socket_js__["a" /* default */];
        this.url = this.$route.params.components;
    },

    methods: {}
});

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-20c800f8",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\components\\LoaderComponents\\LoaderComponents.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoaderComponents.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20c800f8", Component.options)
  } else {
    hotAPI.reload("data-v-20c800f8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "synComponents"
  }, [_c(_vm.mode, _vm._g(_vm._b({
    tag: "component",
    attrs: {
      "socket": _vm.socket
    }
  }, 'component', _vm.$attrs, false), _vm.$listeners))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-20c800f8", module.exports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "brow"
  }, [_c('LoaderComponents', {
    attrs: {
      "socket": _vm.socket,
      "url": _vm.furl
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4dc75427", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map