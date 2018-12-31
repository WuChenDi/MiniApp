global.webpackJsonp([4],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_8_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_8_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-322c26d3", Component.options)
  } else {
    hotAPI.reload("data-v-322c26d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(46);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // pages: ['^pages/books/main'],
    pages: ['^pages/me/main'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '蜗牛图书',
      'navigationBarTextStyle': 'light'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [{
        pagePath: 'pages/books/main',
        text: '图书',
        iconPath: 'static/img/book.png',
        selectedIconPath: 'static/img/book-active.png'
      }, {
        pagePath: 'pages/comments/main',
        text: '评论',
        iconPath: 'static/img/todo.png',
        selectedIconPath: 'static/img/todo-active.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我',
        iconPath: 'static/img/me.png',
        selectedIconPath: 'static/img/me-active.png'
      }]
    }
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


//


/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const res = await get('/weapp/demo')
              // console.log(123, res)
              // wx.request({
              //   url:config.host+'/weapp/demo',
              //   success:function(res){
              //     console.log(res)
              //   }
              // })
              console.log('小程序启动了');

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[50]);
//# sourceMappingURL=app.js.map