webpackJsonp([8],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/*********socket*********** */

var socket = {
    doFilterChain: [],
    requesFilterChain: [],
    listenFilterChain: [],
    initFilterChain: [],
    socketWs: null
};

socket.socketServer = function (closecall, errcall) {
    var _this = this;

    try {
        var ws = new WebSocket('ws://localhost:3000');

        this.socketWs = ws;

        ws.onmessage = function (msg) {
            _this.doFilterChain.forEach(function (f) {

                f(JSON.parse(msg.data), ws);
            });
            //请求
            var index = null;
            _this.requesFilterChain.forEach(function (f, i) {

                var msginfo = JSON.parse(msg.data);
                if (msginfo.action == f.id) {
                    f.func(msginfo, ws);
                    index = i;
                }
            });
            if (index != null) {
                _this.requesFilterChain.splice(index, 1);
            }
            //监听
            _this.listenFilterChain.forEach(function (f, i) {
                var msginfo = JSON.parse(msg.data);
                if (msginfo.action == f.id) {
                    f.func(msginfo, ws);
                    index = i;
                }
            });
        };

        ws.onopen = function (e) {
            _this.initFilterChain.forEach(function (f) {
                f(ws);
            });
            console.log('............................CONNECTION...............................');
        };

        ws.onerror = function (e) {
            errcall(e);
        };

        ws.onclose = function (e) {
            closecall(e);
        };
    } catch (e) {
        alert('无法连接到服务器');
    }
};

//获取socket资源
socket.socket = function () {
    return this.socketWs;
};

socket.listenConnect = function (func) {
    this.initFilterChain.push(func);
};

//请求
socket.request = function (action, data, func) {
    if (this.socketWs != null) {

        this.socketWs.send(JSON.stringify({ action: action, data: data }));
        this.requesFilterChain.push({ id: action, func: func });
    }
};

socket.listen = function (action, func) {
    this.listenFilterChain.push({ id: action, func: func });
};

/* harmony default export */ __webpack_exports__["a"] = (socket);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globa = {
    isnetwork: true,
    appList: []
};

/* harmony default export */ __webpack_exports__["a"] = (globa);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

util.MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
            } else {
                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
            }
        } else {
            return lResult ^ lX8 ^ lY8;
        }
    }

    function F(x, y, z) {
        return x & y | ~x & z;
    }
    function G(x, y, z) {
        return x & z | y & ~z;
    }
    function H(x, y, z) {
        return x ^ y ^ z;
    }
    function I(x, y, z) {
        return y ^ (x | ~z);
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
        }
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode(c >> 6 | 192);
                utftext += String.fromCharCode(c & 63 | 128);
            } else {
                utftext += String.fromCharCode(c >> 12 | 224);
                utftext += String.fromCharCode(c >> 6 & 63 | 128);
                utftext += String.fromCharCode(c & 63 | 128);
            }
        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    var S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    var S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    var S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;b = 0xEFCDAB89;c = 0x98BADCFE;d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;BB = b;CC = c;DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};

util.uuid = function () {
    return parseInt(Math.random() * 10000);
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var user = {
    id: '',
    username: '',
    nickname: '',
    _isLogin: false,
    accessToken: '',
    friendLst: [],
    record: []
};

user.addRecord = function (key, val) {
    this.record[key] = val;
};

user.isLogin = function () {
    return this._isLogin;
};

user.setLogin = function (s) {
    this._isLogin = s;
};
//登录
user.login = function (username, passwd, id) {
    localStorage.setItem('user', JSON.stringify({ username: username, passwd: passwd, id: id }));
    localStorage.setItem('user.friendLst', JSON.stringify(this.friendLst));
    this.setLogin(true);
};
//退出登录
user.logout = function () {
    this.setLogin(false);
};

//自动登录
user.autoLogin = function (callback) {

    try {
        var _user = JSON.parse(localStorage.getItem('user'));

        if (!_user.username) return false;
        if (!_user.passwd) return false;
        if (!_user.id) return false;

        if (_user) {
            callback(_user);
            return true;
        }
    } catch (e) {
        return false;
    }

    return false;
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/ts',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(27)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/msg',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(24)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/task',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(26)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/person',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(25)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/login',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(23)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    name: 'brow',
    path: '/brow/:components',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    name: 'appbox',
    path: '/appbox',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}];
/* harmony default export */ __webpack_exports__["a"] = (routers);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-500777ba",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-500777ba", Component.options)
  } else {
    hotAPI.reload("data-v-500777ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_globa_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_socket_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            active: '1',
            theme3: 'light',
            isCollapsed: false,
            isnetwork: true,
            title: '首页',
            appList: [{ appid: '1', icon: 'home', name: '首页', path: '/' }]
        };
    },
    created: function created() {
        var _this = this;

        this.isnetwork = __WEBPACK_IMPORTED_MODULE_0__libs_globa_js__["a" /* default */].isnetwork;
        //首页图标
        __WEBPACK_IMPORTED_MODULE_1__libs_socket_js__["a" /* default */].listenConnect(function (ws) {
            __WEBPACK_IMPORTED_MODULE_1__libs_socket_js__["a" /* default */].listen('system.app.menu', function (res) {
                console.log(res.data.list);
                res.data.list.forEach(function (v) {
                    _this.appList.push(v);
                });
            });

            __WEBPACK_IMPORTED_MODULE_1__libs_socket_js__["a" /* default */].request('system.app.menu', {}, function (res) {
                //this.appList = res.data.list;
            });
        });
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    computed: {
        rotateIcon: function rotateIcon() {
            return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
        },
        menuitemClasses: function menuitemClasses() {
            return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
        }
    },
    methods: {
        select: function select(appid) {
            var App = null;
            this.appList.forEach(function (v) {
                if (v.appid == appid) {
                    App = v;
                }
            });
            this.title = App.name;
            if (App) if (App.components) {
                console.log(App.components);
                this.$router.replace({ path: '/brow/' + encodeURIComponent(App.components), params: { components: App.components } });
            } else {
                this.$router.push({ path: App.path });
            }
        },
        collapsedSider: function collapsedSider() {
            this.$refs.side1.toggleCollapse();
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_socket__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__libs_globa_js__ = __webpack_require__(6);
var _this = this;













//开启socket 连接
__WEBPACK_IMPORTED_MODULE_8__libs_socket__["a" /* default */].listenConnect(function (ws) {

    if (!__WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].isLogin()) {
        //自动登录逻辑
        var isAuto = __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].autoLogin(function (userInfo) {

            __WEBPACK_IMPORTED_MODULE_8__libs_socket__["a" /* default */].request('login', { username: userInfo.username, pass: userInfo.passwd, id: userInfo.id }, function (msg) {
                console.log(msg);
                __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].friendLst = msg.data.friendLst;
                __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].id = msg.data.id;
                __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].nickname = msg.data.nickname;
                __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].accessToken = msg.data.accessToken;
                __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].login(userInfo.username, userInfo.passwd, __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].id);

                __WEBPACK_IMPORTED_MODULE_1_iview___default.a.Message.success('自动登录成功！');
            });
        });

        if (!isAuto) router.push({ path: '/login' });
    }

    //监听好友列表
    __WEBPACK_IMPORTED_MODULE_8__libs_socket__["a" /* default */].listen('user.friend.list', function (msg) {
        console.log(msg);
        var uLst = [];
        msg.data.list.forEach(function (v) {
            uLst.push({
                id: v.id, nickname: v.nickname, msgLst: []
            });
        });
        __WEBPACK_IMPORTED_MODULE_7__libs_user__["a" /* default */].friendLst = uLst;
    });

    //监听系统推送通知
    __WEBPACK_IMPORTED_MODULE_8__libs_socket__["a" /* default */].listen('system.push.notify', function (msg) {
        _this.$Notice.open({
            title: '系统通知',
            desc: '系统可能出现了异常'
        });
    });
});
try {
    __WEBPACK_IMPORTED_MODULE_8__libs_socket__["a" /* default */].socketServer(function (e) {
        __WEBPACK_IMPORTED_MODULE_9__libs_globa_js__["a" /* default */].isnetwork = false;
    }, function (err) {
        __WEBPACK_IMPORTED_MODULE_1_iview___default.a.Message.error('无法连接到服务器');
        __WEBPACK_IMPORTED_MODULE_9__libs_globa_js__["a" /* default */].isnetwork = false;
    });
} catch (e) {
    alert('无法连接到服务器');
    __WEBPACK_IMPORTED_MODULE_9__libs_globa_js__["a" /* default */].isnetwork = false;
}

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_iview___default.a);

// 路由配置
var RouterConfig = {
    routes: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
};
var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */](RouterConfig);

router.beforeEach(function (to, from, next) {
    __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.start();
    __WEBPACK_IMPORTED_MODULE_4__libs_util__["a" /* default */].title(to.meta.title);
    next();
});

router.afterEach(function (to, from, next) {
    __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: router,
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_5__app_vue___default.a);
    }
});

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('Layout', {
    staticClass: "layer"
  }, [_c('Sider', {
    ref: "side1",
    attrs: {
      "hide-trigger": "",
      "collapsible": "",
      "collapsed-width": 78
    },
    model: {
      value: (_vm.isCollapsed),
      callback: function($$v) {
        _vm.isCollapsed = $$v
      },
      expression: "isCollapsed"
    }
  }, [_c('Menu', {
    staticClass: "menu",
    class: _vm.menuitemClasses,
    attrs: {
      "width": "200",
      "theme": _vm.theme3,
      "active-name": _vm.active
    },
    on: {
      "on-select": _vm.select
    }
  }, _vm._l((_vm.appList), function(app) {
    return _c('MenuItem', {
      attrs: {
        "name": app.appid
      }
    }, [_c('Icon', {
      attrs: {
        "type": app.icon
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(app.name))])], 1)
  }))], 1), _vm._v(" "), _c('Layout', [_c('Header', {
    staticClass: "layout-header-bar",
    style: ({
      padding: 0,
      background: 'none',
      height: '50px',
      lineHeight: '50px',
      verticalAlign: 'middle'
    })
  }, [_c('span', {
    style: ({
      margin: '10px 10px'
    }),
    on: {
      "click": _vm.collapsedSider
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "rnotify"
  }, [_c('ul', [_c('li', [_c('Icon', {
    staticStyle: {
      "margin-right": "5px"
    },
    attrs: {
      "type": _vm.isnetwork ? 'social-rss' : 'social-rss-outline',
      "size": "16"
    }
  })], 1), _vm._v(" "), _c('li', [_c('Badge', {
    attrs: {
      "dot": ""
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-bell-outline",
      "size": "20"
    }
  })], 1)], 1)])])]), _vm._v(" "), _c('Content', {
    style: ({
      padding: '10px'
    })
  }, [_c('router-view')], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-500777ba", module.exports)
  }
}

/***/ })
],[14]);
//# sourceMappingURL=main.js.map