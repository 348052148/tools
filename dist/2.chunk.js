webpackJsonp([2],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-a08d0edc",
  /* cssModules */
  null
)
Component.options.__file = "D:\\webproject\\iview-project\\src\\views\\tasklist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tasklist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a08d0edc", Component.options)
  } else {
    hotAPI.reload("data-v-a08d0edc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_task_js__ = __webpack_require__(39);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            taskLst: [],
            complateLst: [],
            mode: 1,
            task: { name: '', desc: '', style: {} }
        };
    },
    created: function created() {
        //持久化逻辑
        this.taskLst = __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].needLst();
        this.complateLst = __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].complateLst();
    },

    methods: {
        routeAdd: function routeAdd() {
            this.task = {};
            this.mode = 2;
        },
        routerBack: function routerBack() {
            this.mode = 1;
        },
        Add: function Add() {
            this.task.id = __WEBPACK_IMPORTED_MODULE_0__libs_util_js__["a" /* default */].uuid();
            this.taskLst.push(this.task);
            this.mode = 1;
            //持久化逻辑
            __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].addTask(this.task);
        },
        sAddtask: function sAddtask() {
            var task = { name: '', desc: '', style: {} };
            task.id = __WEBPACK_IMPORTED_MODULE_0__libs_util_js__["a" /* default */].uuid();
            task.name = this.search;
            task.desc = this.search;
            //this.taskLst.push(task);
            //持久化逻辑
            __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].addTask(task);
            this.search = "";
        },
        clearCompalate: function clearCompalate(task) {
            __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].removeTask(task);
            this.$Message.info('删除任务:' + task.name);
        },
        complete: function complete(id) {
            var rid = null;
            var task = null;
            this.taskLst.forEach(function (v, i) {
                if (id == v.id) {
                    rid = i;
                    task = v;
                    return;
                }
            });
            //this.taskLst.splice(rid,1);

            task.state = 'complate';
            //this.complateLst.push(task);
            //持久化逻辑
            __WEBPACK_IMPORTED_MODULE_1__libs_task_js__["a" /* default */].complate(task);
            this.$Message.info('完成任务:' + task.name);
        },
        searchTask: function searchTask() {
            var _this = this;

            this.taskLst.forEach(function (v, i) {

                if (_this.search != '' && v.name.search(_this.search) >= 0) {
                    _this.taskLst[i].style = { color: 'red' };
                } else {
                    _this.taskLst[i].style = {};
                }
            });
            this.complateLst.forEach(function (v, i) {

                if (_this.search != '' && v.name.search(_this.search) >= 0) {
                    _this.complateLst[i].style = { color: '#FFB90F' };
                } else {
                    _this.complateLst[i].style = {};
                }
            });
        }
    }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var task = {
    NeedLst: [],
    ComplateLst: []
};

task.needLst = function () {
    try {
        if (this.NeedLst.length == 0) {
            this.NeedLst = JSON.parse(localStorage.getItem('task.NeedLst'));
        }
        this.NeedLst = this.NeedLst ? this.NeedLst : [];
    } catch (e) {
        return [];
    }
    return this.NeedLst;
};

task.complateLst = function () {
    try {
        if (this.ComplateLst.length == 0) {
            this.ComplateLst = JSON.parse(localStorage.getItem('task.ComplateLst'));
        }
        this.ComplateLst = this.ComplateLst ? this.ComplateLst : [];
    } catch (e) {
        return [];
    }
    return this.ComplateLst;
};

task.addTask = function (task) {
    console.log(task);
    this.NeedLst.push(task);

    this.save();
};

task.removeTask = function (task) {
    var ri = null;
    this.ComplateLst.forEach(function (v, i) {
        if (v.id == task.id) ri = i;
    });
    if (ri != null) this.ComplateLst.splice(ri, 1);

    this.save();
};

task.complate = function (task) {
    var rid = null;
    this.NeedLst.forEach(function (v, i) {
        if (task.id == v.id) {
            rid = i;
            task = v;
            return;
        }
    });
    if (rid != null) this.NeedLst.splice(rid, 1);
    this.ComplateLst.push(task);

    this.save();
};

task.save = function () {
    localStorage.setItem('task.NeedLst', JSON.stringify(this.NeedLst));
    localStorage.setItem('task.ComplateLst', JSON.stringify(this.ComplateLst));
};

/* harmony default export */ __webpack_exports__["a"] = (task);

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "task"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('i-input', {
    staticStyle: {
      "width": "350px"
    },
    attrs: {
      "icon": "ios-clock-outline",
      "placeholder": "请输入..."
    },
    on: {
      "on-enter": _vm.sAddtask,
      "on-change": _vm.searchTask
    },
    model: {
      value: (_vm.search),
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "plus-round"
    },
    on: {
      "click": _vm.routeAdd
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), (_vm.mode == 2) ? _c('div', {
    staticClass: "edit"
  }, [_c('i-form', {
    attrs: {
      "model": _vm.task,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "任务名称"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入"
    },
    model: {
      value: (_vm.task.name),
      callback: function($$v) {
        _vm.$set(_vm.task, "name", $$v)
      },
      expression: "task.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "截止时间"
    }
  }, [_c('Row', [_c('i-col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Date-picker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.task.date),
      callback: function($$v) {
        _vm.$set(_vm.task, "date", $$v)
      },
      expression: "task.date"
    }
  })], 1), _vm._v(" "), _c('i-col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": "2"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Time-picker', {
    attrs: {
      "type": "time",
      "placeholder": "选择时间"
    },
    model: {
      value: (_vm.task.time),
      callback: function($$v) {
        _vm.$set(_vm.task, "time", $$v)
      },
      expression: "task.time"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "任务描述"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 8,
        maxRows: 10
      },
      "placeholder": "请输入..."
    },
    model: {
      value: (_vm.task.desc),
      callback: function($$v) {
        _vm.$set(_vm.task, "desc", $$v)
      },
      expression: "task.desc"
    }
  })], 1), _vm._v(" "), _c('Form-item', [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.Add
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "margin-left": "8px"
    },
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": _vm.routerBack
    }
  }, [_vm._v("返回")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.mode == 1) ? _c('div', {
    staticClass: "body"
  }, [_c('Card', {
    staticClass: "handle",
    attrs: {
      "bordered": false
    }
  }, [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("待办事项")]), _vm._v(" "), _c('p', [_c('ul', _vm._l((_vm.taskLst), function(task) {
    return _c('li', {
      style: (task.style)
    }, [_c('Icon', {
      attrs: {
        "type": "ionic"
      }
    }), _vm._v("  " + _vm._s(task.name) + " "), _c('Checkbox', {
      staticClass: "check",
      on: {
        "on-change": function($event) {
          _vm.complete(task.id)
        }
      }
    })], 1)
  }))])]), _vm._v(" "), _c('Card', {
    staticClass: "complate",
    attrs: {
      "bordered": false
    }
  }, [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("完成事项")]), _vm._v(" "), _c('p', [_c('ul', _vm._l((_vm.complateLst), function(task) {
    return _c('li', {
      style: (task.style)
    }, [_c('Icon', {
      attrs: {
        "type": "android-done"
      }
    }), _vm._v("  " + _vm._s(task.name) + " \n                            "), _c('Icon', {
      staticClass: "clear",
      attrs: {
        "size": "16",
        "type": "trash-a"
      },
      nativeOn: {
        "click": function($event) {
          _vm.clearCompalate(task)
        }
      }
    })], 1)
  }))])])], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a08d0edc", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2.chunk.js.map