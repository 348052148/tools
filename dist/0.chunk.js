webpackJsonp([0],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(49),
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_user_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_loader_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_LoaderComponents_min_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_LoaderComponents_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__libs_LoaderComponents_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        LoaderComponents: __WEBPACK_IMPORTED_MODULE_3__libs_LoaderComponents_min_js___default.a
    },

    data: function data() {
        return {
            url: ''
        };
    },

    watch: {
        '$route': function $route(to, from) {
            console.log(this.$route.params.components);
            this.url = this.$route.params.components;
        }
    },
    beforeUpdate: function beforeUpdate() {},
    mounted: function mounted() {},
    created: function created() {
        this.url = this.$route.params.components;
    },

    methods: {}
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.LoaderComponents = n() : e.LoaderComponents = n();
}(this, function () {
  return function (e) {
    function n(r) {
      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }var t = {};return n.m = e, n.c = t, n.i = function (e) {
      return e;
    }, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }, n.p = "", n(n.s = 2);
  }([function (e, n, t) {
    t(8);var r = t(6)(t(1), t(7), "data-v-20c800f8", null);r.options.__file = "D:\\webproject\\iview-project\\src\\components\\LoaderComponents\\LoaderComponents.vue", r.esModule && Object.keys(r.esModule).some(function (e) {
      return "default" !== e && "__esModule" !== e;
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] LoaderComponents.vue: functional components are not supported with templates, they should use render functions."), e.exports = r.exports;
  }, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var r = t(3);n.default = { props: { url: { type: String, default: "" } }, name: "TaskList", data: function data() {
        return { mode: "" };
      }, watch: { url: function url() {
          var e = this;new r.a().urlLoad(this.url, function (n) {
            var t = Function;console.log(new t("return " + n)), e.mode = new Function("return " + n)();
          });
        } }, created: function created() {}, mounted: function mounted() {
        var e = this;new r.a().urlLoad(this.url, function (n) {
          var t = Function;console.log(new t("return " + n)), e.mode = new Function("return " + n)();
        });
      }, methods: {} };
  }, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var r = t(0),
        o = t.n(r);o.a.install = function (e) {
      e.component(o.a.name, o.a);
    }, n.default = o.a;
  }, function (e, n, t) {
    "use strict";
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }var o = function () {
      function e(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
      };
    }(),
        s = function () {
      function e() {
        r(this, e);
      }return o(e, [{ key: "urlLoad", value: function value(e, n) {
          var t = null;t = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), t.onreadystatechange = function () {
            4 == t.readyState && n(t.responseText);
          }, t.open("GET", e, !0), t.send(null);
        } }, { key: "locaLoad", value: function value(e, n) {
          var t = e,
              r = t.name,
              o = t.size;console.log("文件名:" + r + "大小:" + o);var s = new FileReader();s.readAsText(t), s.onload = function () {
            console.log(this.result), n(this.result);
          };
        } }]), e;
    }();n.a = s;
  }, function (e, n, t) {
    n = e.exports = t(5)(), n.push([e.i, "\n.synComponents[data-v-20c800f8] {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n}\n", ""]);
  }, function (e, n) {
    e.exports = function () {
      var e = [];return e.toString = function () {
        for (var e = [], n = 0; n < this.length; n++) {
          var t = this[n];t[2] ? e.push("@media " + t[2] + "{" + t[1] + "}") : e.push(t[1]);
        }return e.join("");
      }, e.i = function (n, t) {
        "string" == typeof n && (n = [[null, n, ""]]);for (var r = {}, o = 0; o < this.length; o++) {
          var s = this[o][0];"number" == typeof s && (r[s] = !0);
        }for (o = 0; o < n.length; o++) {
          var i = n[o];"number" == typeof i[0] && r[i[0]] || (t && !i[2] ? i[2] = t : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), e.push(i));
        }
      }, e;
    };
  }, function (e, n) {
    e.exports = function (e, n, t, r) {
      var o,
          s = e = e || {},
          i = _typeof(e.default);"object" !== i && "function" !== i || (o = e, s = e.default);var a = "function" == typeof s ? s.options : s;if (n && (a.render = n.render, a.staticRenderFns = n.staticRenderFns), t && (a._scopeId = t), r) {
        var u = Object.create(a.computed || null);Object.keys(r).forEach(function (e) {
          var n = r[e];u[e] = function () {
            return n;
          };
        }), a.computed = u;
      }return { esModule: o, exports: s, options: a };
    };
  }, function (e, n, t) {
    e.exports = { render: function render() {
        var e = this,
            n = e.$createElement,
            t = e._self._c || n;return t("div", { staticClass: "synComponents" }, [t(e.mode, e._g(e._b({ tag: "component" }, "component", e.$attrs, !1), e.$listeners))], 1);
      }, staticRenderFns: [] }, e.exports.render._withStripped = !0;
  }, function (e, n, t) {
    var r = t(4);"string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);t(9)("119e929a", r, !1);
  }, function (e, n, t) {
    function r(e) {
      for (var n = 0; n < e.length; n++) {
        var t = e[n],
            r = l[t.id];if (r) {
          r.refs++;for (var o = 0; o < r.parts.length; o++) {
            r.parts[o](t.parts[o]);
          }for (; o < t.parts.length; o++) {
            r.parts.push(s(t.parts[o]));
          }r.parts.length > t.parts.length && (r.parts.length = t.parts.length);
        } else {
          for (var i = [], o = 0; o < t.parts.length; o++) {
            i.push(s(t.parts[o]));
          }l[t.id] = { id: t.id, refs: 1, parts: i };
        }
      }
    }function o() {
      var e = document.createElement("style");return e.type = "text/css", f.appendChild(e), e;
    }function s(e) {
      var n,
          t,
          r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');if (r) {
        if (v) return h;r.parentNode.removeChild(r);
      }if (m) {
        var s = p++;r = d || (d = o()), n = i.bind(null, r, s, !1), t = i.bind(null, r, s, !0);
      } else r = o(), n = a.bind(null, r), t = function t() {
        r.parentNode.removeChild(r);
      };return n(e), function (r) {
        if (r) {
          if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;n(e = r);
        } else t();
      };
    }function i(e, n, t, r) {
      var o = t ? "" : r.css;if (e.styleSheet) e.styleSheet.cssText = y(n, o);else {
        var s = document.createTextNode(o),
            i = e.childNodes;i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(s, i[n]) : e.appendChild(s);
      }
    }function a(e, n) {
      var t = n.css,
          r = n.media,
          o = n.sourceMap;if (r && e.setAttribute("media", r), o && (t += "\n/*# sourceURL=" + o.sources[0] + " */", t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = t;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }e.appendChild(document.createTextNode(t));
      }
    }var u = "undefined" != typeof document;if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c = t(10),
        l = {},
        f = u && (document.head || document.getElementsByTagName("head")[0]),
        d = null,
        p = 0,
        v = !1,
        h = function h() {},
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports = function (e, n, t) {
      v = t;var o = c(e, n);return r(o), function (n) {
        for (var t = [], s = 0; s < o.length; s++) {
          var i = o[s],
              a = l[i.id];a.refs--, t.push(a);
        }n ? (o = c(e, n), r(o)) : o = [];for (var s = 0; s < t.length; s++) {
          var a = t[s];if (0 === a.refs) {
            for (var u = 0; u < a.parts.length; u++) {
              a.parts[u]();
            }delete l[a.id];
          }
        }
      };
    };var y = function () {
      var e = [];return function (n, t) {
        return e[n] = t, e.filter(Boolean).join("\n");
      };
    }();
  }, function (e, n) {
    e.exports = function (e, n) {
      for (var t = [], r = {}, o = 0; o < n.length; o++) {
        var s = n[o],
            i = s[0],
            a = s[1],
            u = s[2],
            c = s[3],
            l = { id: e + ":" + o, css: a, media: u, sourceMap: c };r[i] ? r[i].parts.push(l) : t.push(r[i] = { id: i, parts: [l] });
      }return t;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)(module)))

/***/ }),

/***/ 38:
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

/* unused harmony default export */ var _unused_webpack_default_export = (Loader);

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "brow"
  }, [_c('LoaderComponents', {
    attrs: {
      "url": _vm.url
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

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

});
//# sourceMappingURL=0.chunk.js.map