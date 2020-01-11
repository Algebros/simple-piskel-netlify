/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./canvas/canvas.scss":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./canvas/canvas.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#canvas {\\n  border: 1px solid black; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./canvas/canvas.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/animation_player/animation_player.scss":
/*!******************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/animation_player/animation_player.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".add-interface {\\n  display: flex;\\n  position: relative;\\n  width: 17%;\\n  height: 512px; }\\n  .add-interface .animation-player__cnt-FPS {\\n    display: flex;\\n    align-items: center; }\\n    .add-interface .animation-player__cnt-FPS .cnt-FPS {\\n      margin-right: 15px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./controller/animation_player/animation_player.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/frames/frame.scss":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/frames/frame.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".frames__list .active {\\n  border: 4px solid yellow; }\\n\\n.frames__list .item {\\n  text-align: center; }\\n  .frames__list .item canvas {\\n    width: 100px;\\n    height: 100px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./controller/frames/frame.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\n  background-color: #525252; }\\n\\n.main {\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.content {\\n  display: flex;\\n  justify-content: center;\\n  width: 60%;\\n  height: 512px;\\n  background-color: #999; }\\n\\n.property__coord {\\n  position: absolute;\\n  left: 0;\\n  bottom: 0; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/header/header.scss":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/header/header.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n  .header__menu {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100px;\\n    height: 70px; }\\n    .header__menu .burger-menu {\\n      display: block;\\n      width: 40px;\\n      height: 2px;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      background-color: #000; }\\n      .header__menu .burger-menu::before {\\n        content: \\\"\\\";\\n        position: absolute;\\n        width: 40px;\\n        height: 2px;\\n        margin-top: -10px;\\n        background-color: #000; }\\n      .header__menu .burger-menu::after {\\n        content: \\\"\\\";\\n        position: absolute;\\n        width: 40px;\\n        height: 2px;\\n        margin-top: 10px;\\n        background-color: #000; }\\n  .header__title .title {\\n    font-family: \\\"Roboto\\\";\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 24px;\\n    line-height: 28px;\\n    color: #fff;\\n    width: 100%; }\\n  .header__properties {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100px;\\n    height: 70px; }\\n    .header__properties .dotted {\\n      display: block;\\n      width: 5px;\\n      height: 5px;\\n      border-radius: 50%;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      background-color: #000; }\\n      .header__properties .dotted::before {\\n        content: \\\"\\\";\\n        position: absolute;\\n        width: 5px;\\n        height: 5px;\\n        border-radius: 50%;\\n        margin-top: -10px;\\n        background-color: #000; }\\n      .header__properties .dotted::after {\\n        content: \\\"\\\";\\n        position: absolute;\\n        width: 5px;\\n        height: 5px;\\n        border-radius: 50%;\\n        margin-top: 10px;\\n        background-color: #000; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./view/header/header.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/tools/tools.scss":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/tools/tools.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./svg/pen-solid.svg */ \"./view/tools/svg/pen-solid.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./svg/fill-solid.svg */ \"./view/tools/svg/fill-solid.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./svg/eye-dropper-solid.svg */ \"./view/tools/svg/eye-dropper-solid.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./svg/eraser-solid.svg */ \"./view/tools/svg/eraser-solid.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./svg/pen-alt-solid.svg */ \"./view/tools/svg/pen-alt-solid.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \".interface {\\n  display: flex;\\n  align-items: center;\\n  width: 20%; }\\n  .interface .tools {\\n    align-self: flex-start; }\\n    .interface .tools__size {\\n      display: flex;\\n      list-style: none;\\n      padding: 0;\\n      margin: 0; }\\n      .interface .tools__size .item {\\n        cursor: pointer;\\n        color: grey;\\n        line-height: 20px;\\n        text-align: center;\\n        width: 20px;\\n        height: 20px;\\n        margin-bottom: 30px;\\n        margin-right: 5px; }\\n        .interface .tools__size .item.checked {\\n          color: #fff;\\n          border: 1px solid yellow; }\\n        .interface .tools__size .item:last-child {\\n          margin-right: 0; }\\n    .interface .tools__list {\\n      font-size: 0;\\n      list-style: none;\\n      padding: 0;\\n      margin: 0; }\\n      .interface .tools__list .item {\\n        width: 50px;\\n        height: 50px;\\n        margin-bottom: 20px; }\\n        .interface .tools__list .item.pencil, .interface .tools__list .item.bucket, .interface .tools__list .item.colorSelect, .interface .tools__list .item.eraser, .interface .tools__list .item.stroke {\\n          filter: invert(100%) contrast(0%);\\n          cursor: pointer;\\n          background-size: 40px;\\n          background-repeat: no-repeat;\\n          background-position: center; }\\n        .interface .tools__list .item.pencil {\\n          background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n        .interface .tools__list .item.bucket {\\n          background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); }\\n        .interface .tools__list .item.colorSelect {\\n          background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"); }\\n        .interface .tools__list .item.eraser {\\n          background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n        .interface .tools__list .item.stroke {\\n          background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n        .interface .tools__list .item.checked {\\n          filter: invert(100%) contrast(100%);\\n          border: 2px solid blue; }\\n    .interface .tools__color-picker {\\n      font-size: 0;\\n      list-style: none;\\n      padding: 0;\\n      margin: 0; }\\n      .interface .tools__color-picker .item {\\n        width: 50px;\\n        height: 50px;\\n        border: 1px solid grey;\\n        margin-bottom: 5px; }\\n        .interface .tools__color-picker .item .input {\\n          width: 100%;\\n          height: 100%;\\n          border: none;\\n          background-color: transparent;\\n          padding: 0;\\n          margin: 0; }\\n        .interface .tools__color-picker .item .input {\\n          -webkit-appearance: none;\\n          border: none; }\\n        .interface .tools__color-picker .item .input::-webkit-color-swatch-wrapper {\\n          padding: 0; }\\n        .interface .tools__color-picker .item .input::-webkit-color-swatch {\\n          border: none; }\\n  .interface .frames {\\n    align-self: flex-start; }\\n    .interface .frames__list {\\n      padding: 0;\\n      margin: 0;\\n      list-style: none; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./view/tools/tools.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./canvas/canvas.js":
/*!**************************!*\
  !*** ./canvas/canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initCanvas; });\n/* harmony import */ var _canvas_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.scss */ \"./canvas/canvas.scss\");\n/* harmony import */ var _canvas_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction initCanvas(size, fillColor) {\n  var canvas = document.getElementById('canvas');\n  var context = canvas.getContext('2d');\n  canvas.width = size;\n  canvas.height = size;\n  context.fillStyle = fillColor;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  return context;\n}\n\n//# sourceURL=webpack:///./canvas/canvas.js?");

/***/ }),

/***/ "./canvas/canvas.scss":
/*!****************************!*\
  !*** ./canvas/canvas.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./canvas.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./canvas/canvas.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./canvas/canvas.scss?");

/***/ }),

/***/ "./canvas/canvas_tools.js":
/*!********************************!*\
  !*** ./canvas/canvas_tools.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return canvasTool; });\n/* harmony import */ var _tools_pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/pencil */ \"./canvas/tools/pencil.js\");\n/* harmony import */ var _tools_color_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/color_select */ \"./canvas/tools/color_select.js\");\n/* harmony import */ var _tools_eraser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/eraser */ \"./canvas/tools/eraser.js\");\n/* harmony import */ var _tools_stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/stroke */ \"./canvas/tools/stroke.js\");\n/* harmony import */ var _controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/frames/render_result_tools */ \"./controller/frames/render_result_tools.js\");\n/* harmony import */ var _tools_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/bucket */ \"./canvas/tools/bucket.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nvar tools = {\n  pencil: function pencil(event) {\n    var canvas = document.getElementById('canvas');\n\n    if (event.button === 0) {\n      canvas.addEventListener('mousemove', _tools_pencil__WEBPACK_IMPORTED_MODULE_0__[\"pencil\"]);\n      canvas.addEventListener('mouseup', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_pencil__WEBPACK_IMPORTED_MODULE_0__[\"pencil\"]);\n      }, {\n        once: true\n      });\n      canvas.addEventListener('mouseout', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_pencil__WEBPACK_IMPORTED_MODULE_0__[\"pencil\"]);\n      }, {\n        once: true\n      });\n    }\n  },\n  colorSelect: function colorSelect(event) {\n    var pageX = event.pageX;\n    var pageY = event.pageY;\n    Object(_tools_color_select__WEBPACK_IMPORTED_MODULE_1__[\"palettePicker\"])({\n      pageX: pageX,\n      pageY: pageY\n    });\n  },\n  eraser: function eraser(event) {\n    var canvas = document.getElementById('canvas');\n\n    if (event.button === 0) {\n      canvas.addEventListener('mousemove', _tools_eraser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      canvas.addEventListener('mouseup', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_eraser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      }, {\n        once: true\n      });\n      canvas.addEventListener('mouseout', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_eraser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      }, {\n        once: true\n      });\n    }\n  },\n  stroke: function stroke(event) {\n    var canvas = document.getElementById('canvas');\n\n    if (event.button === 0) {\n      Object(_tools_stroke__WEBPACK_IMPORTED_MODULE_3__[\"startPosition\"])();\n      canvas.addEventListener('mousemove', _tools_stroke__WEBPACK_IMPORTED_MODULE_3__[\"strokeTool\"]);\n      canvas.addEventListener('mouseup', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_stroke__WEBPACK_IMPORTED_MODULE_3__[\"strokeTool\"]);\n      }, {\n        once: true\n      });\n      canvas.addEventListener('mouseout', function () {\n        Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        canvas.removeEventListener('mousemove', _tools_stroke__WEBPACK_IMPORTED_MODULE_3__[\"strokeTool\"]);\n      }, {\n        once: true\n      });\n    }\n  },\n  bucket: function bucket() {\n    Object(_tools_bucket__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    Object(_controller_frames_render_result_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  }\n};\nfunction canvasTool(currentTool) {\n  var canvas = document.getElementById('canvas');\n  Object.keys(tools).forEach(function (tool) {\n    canvas.removeEventListener('mousedown', tools[tool]);\n  });\n  canvas.addEventListener('mousedown', tools[currentTool]);\n}\n\n//# sourceURL=webpack:///./canvas/canvas_tools.js?");

/***/ }),

/***/ "./canvas/tools/bucket.js":
/*!********************************!*\
  !*** ./canvas/tools/bucket.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _store$stateApp = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp,\n      canvasContext = _store$stateApp.canvasContext,\n      color = _store$stateApp.color;\n  canvasContext.fillStyle = color;\n  canvasContext.fillRect(0, 0, 512, 512);\n});\n\n//# sourceURL=webpack:///./canvas/tools/bucket.js?");

/***/ }),

/***/ "./canvas/tools/color_select.js":
/*!**************************************!*\
  !*** ./canvas/tools/color_select.js ***!
  \**************************************/
/*! exports provided: palettePicker, rgbStringToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palettePicker\", function() { return palettePicker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbStringToHex\", function() { return rgbStringToHex; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n\n\nfunction rgbStringToHex(rgb) {\n  var arr = rgb.split(/\\D+/);\n  var hex = '';\n  arr.forEach(function (element) {\n    if (element !== '') {\n      if (+element < 10) {\n        hex += \"0\".concat(element);\n      } else {\n        hex += Number(element).toString(16);\n      }\n    }\n  });\n  return \"#\".concat(hex);\n}\n\nfunction palettePicker(_ref) {\n  var pageX = _ref.pageX,\n      pageY = _ref.pageY;\n  var canvas = document.getElementById('canvas');\n  var rect = canvas.getBoundingClientRect();\n  var x = pageX - rect.x;\n  var y = pageY - rect.y;\n  var c = canvas.getContext('2d');\n  var p = c.getImageData(x, y, 1, 1).data;\n  var hex = rgbStringToHex(\"(\".concat(p[0], \", \").concat(p[1], \", \").concat(p[2], \")\"));\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setColor = hex;\n}\n\n\n\n//# sourceURL=webpack:///./canvas/tools/color_select.js?");

/***/ }),

/***/ "./canvas/tools/eraser.js":
/*!********************************!*\
  !*** ./canvas/tools/eraser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return eraser; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n // https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript //\n\nfunction bresenham(startCoordinates, endCoordinates) {\n  var coordinatesArray = []; // Translate coordinates\n\n  var x1 = startCoordinates[0];\n  var y1 = startCoordinates[1];\n  var x2 = endCoordinates[0];\n  var y2 = endCoordinates[1]; // Define differences and error check\n\n  var dx = Math.abs(x2 - x1);\n  var dy = Math.abs(y2 - y1);\n  var sx = x1 < x2 ? 1 : -1;\n  var sy = y1 < y2 ? 1 : -1;\n  var err = dx - dy; // Set first coordinates\n\n  coordinatesArray.push([x1, y1]); // Main loop\n\n  while (!(x1 === x2 && y1 === y2)) {\n    // const e2 = err << 1;\n    var e2 = err * 2;\n\n    if (e2 > -dy) {\n      err -= dy;\n      x1 += sx;\n    }\n\n    if (e2 < dx) {\n      err += dx;\n      y1 += sy;\n    } // Set coordinates\n\n\n    coordinatesArray.push([x1, y1]);\n  } // Return the result\n\n\n  return coordinatesArray;\n}\n\nfunction eraser() {\n  var _store$stateApp = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp,\n      mousePosition = _store$stateApp.mousePosition,\n      lastPosition = _store$stateApp.lastPosition,\n      canvasContext = _store$stateApp.canvasContext,\n      size = _store$stateApp.size;\n  var start = [mousePosition.x, mousePosition.y];\n  var end = [lastPosition.x, lastPosition.y];\n  var arr = bresenham(start, end);\n\n  for (var i = 0; i < arr.length; i += 1) {\n    canvasContext.fillStyle = 'white';\n    canvasContext.fillRect(arr[i][0] * size, arr[i][1] * size, size, size);\n  }\n}\n\n//# sourceURL=webpack:///./canvas/tools/eraser.js?");

/***/ }),

/***/ "./canvas/tools/pencil.js":
/*!********************************!*\
  !*** ./canvas/tools/pencil.js ***!
  \********************************/
/*! exports provided: pencil, bresenham */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pencil\", function() { return pencil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bresenham\", function() { return bresenham; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n // https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript //\n\nfunction bresenham(startCoordinates, endCoordinates) {\n  var coordinatesArray = []; // Translate coordinates\n\n  var x1 = startCoordinates[0];\n  var y1 = startCoordinates[1];\n  var x2 = endCoordinates[0];\n  var y2 = endCoordinates[1]; // Define differences and error check\n\n  var dx = Math.abs(x2 - x1);\n  var dy = Math.abs(y2 - y1);\n  var sx = x1 < x2 ? 1 : -1;\n  var sy = y1 < y2 ? 1 : -1;\n  var err = dx - dy; // Set first coordinates\n\n  coordinatesArray.push([x1, y1]); // Main loop\n\n  while (!(x1 === x2 && y1 === y2)) {\n    // const e2 = err << 1;\n    var e2 = err * 2;\n\n    if (e2 > -dy) {\n      err -= dy;\n      x1 += sx;\n    }\n\n    if (e2 < dx) {\n      err += dx;\n      y1 += sy;\n    } // Set coordinates\n\n\n    coordinatesArray.push([x1, y1]);\n  } // Return the result\n\n\n  return coordinatesArray;\n}\n\nfunction pencil() {\n  var _store$stateApp = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp,\n      mousePosition = _store$stateApp.mousePosition,\n      lastPosition = _store$stateApp.lastPosition,\n      canvasContext = _store$stateApp.canvasContext,\n      color = _store$stateApp.color,\n      size = _store$stateApp.size;\n  var start = [mousePosition.x, mousePosition.y];\n  var end = [lastPosition.x, lastPosition.y];\n  var arr = bresenham(start, end);\n\n  for (var i = 0; i < arr.length; i += 1) {\n    canvasContext.fillStyle = color;\n    canvasContext.fillRect(arr[i][0] * size, arr[i][1] * size, size, size);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./canvas/tools/pencil.js?");

/***/ }),

/***/ "./canvas/tools/stroke.js":
/*!********************************!*\
  !*** ./canvas/tools/stroke.js ***!
  \********************************/
/*! exports provided: strokeTool, startPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"strokeTool\", function() { return strokeTool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startPosition\", function() { return startPosition; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n // https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript //\n\nfunction bresenham(startCoordinates, endCoordinates) {\n  var coordinatesArray = []; // Translate coordinates\n\n  var x1 = startCoordinates[0];\n  var y1 = startCoordinates[1];\n  var x2 = endCoordinates[0];\n  var y2 = endCoordinates[1]; // Define differences and error check\n\n  var dx = Math.abs(x2 - x1);\n  var dy = Math.abs(y2 - y1);\n  var sx = x1 < x2 ? 1 : -1;\n  var sy = y1 < y2 ? 1 : -1;\n  var err = dx - dy; // Set first coordinates\n\n  coordinatesArray.push([x1, y1]); // Main loop\n\n  while (!(x1 === x2 && y1 === y2)) {\n    // const e2 = err << 1;\n    var e2 = err * 2;\n\n    if (e2 > -dy) {\n      err -= dy;\n      x1 += sx;\n    }\n\n    if (e2 < dx) {\n      err += dx;\n      y1 += sy;\n    } // Set coordinates\n\n\n    coordinatesArray.push([x1, y1]);\n  } // Return the result\n\n\n  return coordinatesArray;\n}\n\nfunction strokeTool() {\n  var _store$stateApp = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp,\n      posForStroke = _store$stateApp.posForStroke,\n      lastPosition = _store$stateApp.lastPosition,\n      canvasContext = _store$stateApp.canvasContext,\n      canvasFrame = _store$stateApp.canvasFrame,\n      color = _store$stateApp.color,\n      size = _store$stateApp.size,\n      curFrame = _store$stateApp.curFrame;\n  var frame = canvasFrame[curFrame];\n  var newImg = new Image();\n  newImg.src = frame;\n  canvasContext.drawImage(newImg, 0, 0);\n  var start = [posForStroke.x, posForStroke.y];\n  var end = [lastPosition.x, lastPosition.y];\n  var arr = bresenham(start, end);\n\n  for (var i = 0; i < arr.length; i += 1) {\n    canvasContext.fillStyle = color;\n    canvasContext.fillRect(arr[i][0] * size, arr[i][1] * size, size, size);\n  }\n}\n\nfunction startPosition() {\n  var mousePosition = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.mousePosition;\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setPositionStroke = mousePosition;\n}\n\n\n\n//# sourceURL=webpack:///./canvas/tools/stroke.js?");

/***/ }),

/***/ "./controller/animation_player/animation_player.scss":
/*!***********************************************************!*\
  !*** ./controller/animation_player/animation_player.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./animation_player.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/animation_player/animation_player.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./controller/animation_player/animation_player.scss?");

/***/ }),

/***/ "./controller/animation_player/fullscrin.js":
/*!**************************************************!*\
  !*** ./controller/animation_player/fullscrin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  // http://qnimate.com/full-screen-api-tutorial-with-demo/\n  function fullScreen() {\n    if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {\n      if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {\n        var element = document.querySelector('.animation-player__frames'); // requestFullscreen is used to display an element in full screen mode.\n\n        if ('requestFullscreen' in element) {\n          element.requestFullscreen();\n        } else if ('webkitRequestFullscreen' in element) {\n          element.webkitRequestFullscreen();\n        } else if ('mozRequestFullScreen' in element) {\n          element.mozRequestFullScreen();\n        } else if ('msRequestFullscreen' in element) {\n          element.msRequestFullscreen();\n        }\n      }\n    }\n  }\n\n  fullScreen();\n\n  function screenChange() {\n    // fullscreenElement is assigned to html element if any element is in full screen mode.\n    if (!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {\n      // exitFullscreen us used to exit full screen manually\n      if ('exitFullscreen' in document) {\n        document.exitFullscreen();\n      } else if ('webkitExitFullscreen' in document) {\n        document.webkitExitFullscreen();\n      } else if ('mozCancelFullScreen' in document) {\n        document.mozCancelFullScreen();\n      } else if ('msExitFullscreen' in document) {\n        document.msExitFullscreen();\n      }\n    }\n  } // called when an event goes full screen and vice-versa.\n\n\n  document.addEventListener('fullscreenchange', screenChange);\n  document.addEventListener('webkitfullscreenchange', screenChange);\n  document.addEventListener('mozfullscreenchange', screenChange);\n  document.addEventListener('MSFullscreenChange', screenChange);\n});\n\n//# sourceURL=webpack:///./controller/animation_player/fullscrin.js?");

/***/ }),

/***/ "./controller/animation_player/inp_range.js":
/*!**************************************************!*\
  !*** ./controller/animation_player/inp_range.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var inpRange = document.getElementById('FPS');\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FPS = inpRange.value;\n  inpRange.addEventListener('input', function (e) {\n    var playerID = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.playerID;\n    window.cancelAnimationFrame(playerID);\n    _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FPS = e.target.value;\n  });\n});\n\n//# sourceURL=webpack:///./controller/animation_player/inp_range.js?");

/***/ }),

/***/ "./controller/animation_player/player.js":
/*!***********************************************!*\
  !*** ./controller/animation_player/player.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\n/* harmony import */ var _animation_player_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation_player.scss */ \"./controller/animation_player/animation_player.scss\");\n/* harmony import */ var _animation_player_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animation_player_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n\n\nfunction player() {\n  var canvas = document.querySelector('.animation-player__frames');\n  var ctx = canvas.getContext('2d');\n  var _store$stateApp = _model_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stateApp,\n      canvasFrame = _store$stateApp.canvasFrame,\n      fps = _store$stateApp.fps;\n  var frameCount = 0;\n  var lengthFrames = canvasFrame.length - 1;\n  var fpsInterval = 1000 / fps;\n  var then = Date.now();\n  var elapsed;\n  var now;\n\n  function animate() {\n    now = Date.now();\n    elapsed = now - then;\n\n    if (elapsed > fpsInterval) {\n      then = now - elapsed % fpsInterval;\n      if (frameCount > lengthFrames) frameCount = 0;\n      var img = new Image();\n      img.src = canvasFrame[frameCount];\n      var startPos = 0;\n      var imgSize = 512;\n      var frameSize = 200;\n\n      img.onload = function () {\n        ctx.drawImage(img, startPos, startPos, imgSize, imgSize, startPos, startPos, frameSize, frameSize);\n      };\n\n      frameCount += 1;\n    }\n\n    var playerID = window.requestAnimationFrame(animate);\n    _model_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerId = {\n      playerID: playerID\n    };\n  }\n\n  animate();\n}\n\n//# sourceURL=webpack:///./controller/animation_player/player.js?");

/***/ }),

/***/ "./controller/frames/add_clear_frame.js":
/*!**********************************************!*\
  !*** ./controller/frames/add_clear_frame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addFrame; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n\nfunction addFrame() {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'white';\n  ctx.fillRect(0, 0, 512, 512); // const img = canvas.toDataURL();\n\n  var img = 'data:image/png;base64,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BAUMgGDpIhMgQIAAAQPADxAgQIAAgaCAARAsXWQCBAgQIGAA+AECBAgQIBAUMACCpYtMgAABAgQMAD9AgAABAgSCAgZAsHSRCRAgQICAAeAHCBAgQIBAUMAACJYuMgECBAgQMAD8AAECBAgQCAoYAMHSRSZAgAABAgaAHyBAgAABAkEBAyBYusgECBAgQMAA8AMECBAgQCAoYAAESxeZAAECBAgYAH6AAAECBAgEBQyAYOkiEyBAgAABA8APECBAgACBoIABECxdZAIECBAgYAD4AQIECBAgEBQwAIKli0yAAAECBAwAP0CAAAECBIICBkCwdJEJECBAgIAB4AcIECBAgEBQwAAIli4yAQIECBAwAPwAAQIECBAIChgAwdJFJkCAAAECBoAfIECAAAECQQEDIFi6yAQIECBAwADwAwQIECBAIChgAARLF5kAAQIECBgAfoAAAQIECAQFDIBg6SITIECAAAEDwA8QIECAAIGggAEQLF1kAgQIECBgAPgBAgQIECAQFDAAgqWLTIAAAQIEDAA/QIAAAQIEggIGQLB0kQkQIECAgAHgBwgQIECAQFDAAAiWLjIBAgQIEDAA/AABAgQIEAgKGADB0kUmQIAAAQIGgB8gQIAAAQJBAQMgWLrIBAgQIEDAAPADBAgQIEAgKGAABEsXmQABAgQIGAB+gAABAgQIBAUMgGDpIhMgQIAAAQPADxAgQIAAgaCAARAsXWQCBAgQIGAA+AECBAgQIBAUMACCpYtMgAABAgQMAD9AgAABAgSCAgZAsHSRCRAgQICAAeAHCBAgQIBAUMAACJYuMgECBAgQMAD8AAECBAgQCAoYAMHSRSZAgAABAgaAHyBAgAABAkEBAyBYusgECBAgQMAA8AMECBAgQCAoYAAESxeZAAECBAgYAH6AAAECBAgEBQyAYOkiEyBAgAABA8APECBAgACBoIABECxdZAIECBAgYAD4AQIECBAgEBQwAIKli0yAAAECBAwAP0CAAAECBIICBkCwdJEJECBAgIAB4AcIECBAgEBQwAAIli4yAQIECBAwAPwAAQIECBAIChgAwdJFJkCAAAECBoAfIECAAAECQQEDIFi6yAQIECBAwADwAwQIECBAIChgAARLF5kAAQIECBgAfoAAAQIECAQFDIBg6SITIECAAAEDwA8QIECAAIGggAEQLF1kAgQIECBgAPgBAgQIECAQFDAAgqWLTIAAAQIEDAA/QIAAAQIEggIGQLB0kQkQIECAgAHgBwgQIECAQFDAAAiWLjIBAgQIEDAA/AABAgQIEAgKGADB0kUmQIAAAQIGgB8gQIAAAQJBAQMgWLrIBAgQIEDAAPADBAgQIEAgKGAABEsXmQABAgQIGAB+gAABAgQIBAUMgGDpIhMgQIAAAQPADxAgQIAAgaCAARAsXWQCBAgQIGAA+AECBAgQIBAUMACCpYtMgAABAgQMAD9AgAABAgSCAgZAsHSRCRAgQICAAeAHCBAgQIBAUMAACJYuMgECBAgQMAD8AAECBAgQCAoYAMHSRSZAgAABAgaAHyBAgAABAkEBAyBYusgECBAgQMAA8AMECBAgQCAoYAAESxeZAAECBAgYAH6AAAECBAgEBQyAYOkiEyBAgAABA8APECBAgACBoIABECxdZAIECBAgYAD4AQIECBAgEBQwAIKli0yAAAECBAwAP0CAAAECBIICBkCwdJEJECBAgIAB4AcIECBAgEBQwAAIli4yAQIECBAwAPwAAQIECBAIChgAwdJFJkCAAAECBoAfIECAAAECQQEDIFi6yAQIECBAwADwAwQIECBAIChgAARLF5kAAQIECBgAfoAAAQIECAQFDIBg6SITIECAAAEDwA8QIECAAIGggAEQLF1kAgQIECBgAPgBAgQIECAQFDAAgqWLTIAAAQIEDAA/QIAAAQIEggIGQLB0kQkQIECAgAHgBwgQIECAQFDAAAiWLjIBAgQIEDAA/AABAgQIEAgKGADB0kUmQIAAAQIGgB8gQIAAAQJBAQMgWLrIBAgQIEDAAPADBAgQIEAgKGAABEsXmQABAgQIGAB+gAABAgQIBAUMgGDpIhMgQIAAAQPADxAgQIAAgaCAARAsXWQCBAgQIGAA+AECBAgQIBAUMACCpYtMgAABAgQMAD9AgAABAgSCAgZAsHSRCRAgQICAAeAHCBAgQIBAUMAACJYuMgECBAgQMAD8AAECBAgQCAoYAMHSRSZAgAABAgaAHyBAgAABAkEBAyBYusgECBAgQMAA8AMECBAgQCAoYAAESxeZAAECBAgYAH6AAAECBAgEBQyAYOkiEyBAgAABA8APECBAgACBoIABECxdZAIECBAgYAD4AQIECBAgEBQwAIKli0yAAAECBAwAP0CAAAECBIICBkCwdJEJECBAgIAB4AcIECBAgEBQwAAIli4yAQIECBAwAPwAAQIECBAIChgAwdJFJkCAAAECBoAfIECAAAECQQEDIFi6yAQIECBAwADwAwQIECBAIChgAARLF5kAAQIECBgAfoAAAQIECAQFDIBg6SITIECAAAEDwA8QIECAAIGggAEQLF1kAgQIECBgAPgBAgQIECAQFDAAgqWLTIAAAQIEDAA/QIAAAQIEggIGQLB0kQkQIECAgAHgBwgQIECAQFDAAAiWLjIBAgQIEHjRb/pqFkszTAAAAABJRU5ErkJggg==';\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addFrame = img;\n}\n\n//# sourceURL=webpack:///./controller/frames/add_clear_frame.js?");

/***/ }),

/***/ "./controller/frames/copy_frame.js":
/*!*****************************************!*\
  !*** ./controller/frames/copy_frame.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addFrame; });\n/* harmony import */ var _frame_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame.scss */ \"./controller/frames/frame.scss\");\n/* harmony import */ var _frame_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_frame_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n\n\nfunction addFrame() {\n  var canvas = document.getElementById('canvas');\n  var img = canvas.toDataURL();\n  _model_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFrame = img;\n}\n\n//# sourceURL=webpack:///./controller/frames/copy_frame.js?");

/***/ }),

/***/ "./controller/frames/frame.scss":
/*!**************************************!*\
  !*** ./controller/frames/frame.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./frame.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./controller/frames/frame.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./controller/frames/frame.scss?");

/***/ }),

/***/ "./controller/frames/render_frame.js":
/*!*******************************************!*\
  !*** ./controller/frames/render_frame.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderFrame; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n\nfunction renderFrame() {\n  var canvasFrame = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.canvasFrame;\n  var lastIndex = canvasFrame.length - 1;\n  var curFrame = canvasFrame[lastIndex];\n  var newFrame = document.createElement('canvas');\n  newFrame.width = 100;\n  newFrame.height = 100;\n  var ctx = newFrame.getContext('2d');\n  newFrame.id = \"frame-\".concat(lastIndex);\n  newFrame.dataset.index = lastIndex;\n  var img = new Image();\n  img.src = curFrame;\n  var startPos = 0;\n  var canvas = document.getElementById('canvas');\n\n  img.onload = function () {\n    ctx.drawImage(img, startPos, startPos, canvas.width, canvas.height, startPos, startPos, newFrame.width, newFrame.height);\n  };\n\n  var ul = document.querySelector('.frames__list');\n  var li = document.createElement('li');\n  li.classList.add('item');\n  li.append(newFrame);\n  ul.append(li);\n}\n\n//# sourceURL=webpack:///./controller/frames/render_frame.js?");

/***/ }),

/***/ "./controller/frames/render_result_tools.js":
/*!**************************************************!*\
  !*** ./controller/frames/render_result_tools.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/store */ \"./model/store.js\");\n/* eslint-disable import/no-cycle */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var curFrame = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.curFrame;\n  var canvas = document.getElementById('canvas');\n  var dataURL = canvas.toDataURL();\n  var frame = document.querySelector(\"canvas[data-index=\\\"\".concat(curFrame, \"\\\"]\"));\n  var ctx = frame.getContext('2d');\n  var img = new Image();\n  img.src = dataURL;\n  var startPos = 0;\n\n  img.onload = function () {\n    ctx.drawImage(img, startPos, startPos, canvas.width, canvas.height, startPos, startPos, frame.width, frame.height);\n  };\n\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateFrame = dataURL;\n});\n\n//# sourceURL=webpack:///./controller/frames/render_result_tools.js?");

/***/ }),

/***/ "./controller/get_current_color.js":
/*!*****************************************!*\
  !*** ./controller/get_current_color.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCurrentColor; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n\nfunction getCurrentColor(event) {\n  _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prop = {\n    color: event.target.value\n  };\n}\n\n//# sourceURL=webpack:///./controller/get_current_color.js?");

/***/ }),

/***/ "./controller/get_current_tool.js":
/*!****************************************!*\
  !*** ./controller/get_current_tool.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getTool; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n\nfunction getTool(event) {\n  if (event.target.dataset.tool !== undefined) {\n    _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prop = {\n      tool: event.target.dataset.tool\n    };\n  }\n}\n\n//# sourceURL=webpack:///./controller/get_current_tool.js?");

/***/ }),

/***/ "./controller/get_current_tool_size.js":
/*!*********************************************!*\
  !*** ./controller/get_current_tool_size.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getToolSize; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n\nfunction getToolSize(event) {\n  if (event.target.dataset.size !== null) {\n    _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prop = {\n      size: event.target.dataset.size\n    };\n  }\n}\n\n//# sourceURL=webpack:///./controller/get_current_tool_size.js?");

/***/ }),

/***/ "./controller/get_frame.js":
/*!*********************************!*\
  !*** ./controller/get_frame.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (event) {\n  if (event.target.tagName === 'CANVAS') {\n    var active = document.querySelector('.active');\n    if (active) active.classList.remove('active');\n    event.target.classList.add('active');\n    var indexCanvas = event.target.dataset.index;\n    var canvasFrame = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.canvasFrame;\n    var selectFrame = canvasFrame[indexCanvas];\n    var img = new Image();\n    img.src = selectFrame;\n    var canvas = document.getElementById('canvas');\n    var ctxCurrent = canvas.getContext('2d');\n    var startPos = 0;\n\n    img.onload = function () {\n      ctxCurrent.drawImage(img, startPos, startPos, canvas.width, canvas.height, startPos, startPos, canvas.width, canvas.height);\n    };\n\n    _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prop = {\n      indexCanvas: indexCanvas\n    };\n  }\n});\n\n//# sourceURL=webpack:///./controller/get_frame.js?");

/***/ }),

/***/ "./controller/get_mouse_pos.js":
/*!*************************************!*\
  !*** ./controller/get_mouse_pos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getMousePos; });\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n\nfunction getMousePos(event) {\n  var canvas = document.getElementById('canvas');\n  var rect = canvas.getBoundingClientRect();\n  var grid = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.canvasSize / _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stateApp.size;\n  var size = _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].size;\n  var x = Math.abs(Math.round((event.clientX - rect.left - size / 2) / size));\n  var y = Math.abs(Math.round((event.clientY - rect.top - size / 2) / size));\n  if (x >= 0 && x < grid && y >= 0 && y < grid) _model_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mousePos = {\n    x: x,\n    y: y\n  };\n}\n\n//# sourceURL=webpack:///./controller/get_mouse_pos.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/header/header */ \"./view/header/header.js\");\n/* harmony import */ var _view_tools_render_state_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/tools/render_state_tools */ \"./view/tools/render_state_tools.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/canvas */ \"./canvas/canvas.js\");\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/store */ \"./model/store.js\");\n/* harmony import */ var _view_listener_mouse_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/listener/mouse_position */ \"./view/listener/mouse_position.js\");\n/* harmony import */ var _view_listener_selection_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/listener/selection_tool */ \"./view/listener/selection_tool.js\");\n/* harmony import */ var _view_listener_selection_tool_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/listener/selection_tool_size */ \"./view/listener/selection_tool_size.js\");\n/* harmony import */ var _view_listener_selection_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/listener/selection_color */ \"./view/listener/selection_color.js\");\n/* harmony import */ var _view_listener_selection_frame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/listener/selection_frame */ \"./view/listener/selection_frame.js\");\n/* harmony import */ var _view_listener_button_add_frame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/listener/button_add-frame */ \"./view/listener/button_add-frame.js\");\n/* harmony import */ var _view_listener_button_copy_frame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/listener/button_copy-frame */ \"./view/listener/button_copy-frame.js\");\n/* harmony import */ var _controller_frames_copy_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controller/frames/copy_frame */ \"./controller/frames/copy_frame.js\");\n/* harmony import */ var _controller_animation_player_inp_range__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controller/animation_player/inp_range */ \"./controller/animation_player/inp_range.js\");\n/* harmony import */ var _view_listener_click_on_frame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/listener/click_on_frame */ \"./view/listener/click_on_frame.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function init() {\n  var canvasSize = 512;\n  var context = Object(_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(canvasSize, 'white');\n  _model_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].prop = {\n    canvasSize: canvasSize,\n    tool: 'pencil',\n    size: '1',\n    color: 'black',\n    context: context\n  };\n  Object(_view_listener_mouse_position__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_view_listener_selection_tool__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_view_listener_selection_tool_size__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  Object(_view_listener_selection_color__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n  Object(_view_listener_selection_frame__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  Object(_view_listener_button_add_frame__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n  Object(_view_listener_button_copy_frame__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n  Object(_controller_frames_copy_frame__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n  Object(_controller_animation_player_inp_range__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n  Object(_view_listener_click_on_frame__WEBPACK_IMPORTED_MODULE_14__[\"default\"])();\n})();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./model/store.js":
/*!************************!*\
  !*** ./model/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_render_mouse_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/render_mouse_position */ \"./view/render_mouse_position.js\");\n/* harmony import */ var _view_tools_render_state_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/tools/render_state_tools */ \"./view/tools/render_state_tools.js\");\n/* harmony import */ var _view_tools_render_state_tool_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/tools/render_state_tool_size */ \"./view/tools/render_state_tool_size.js\");\n/* harmony import */ var _view_tools_render_selected_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/tools/render_selected_color */ \"./view/tools/render_selected_color.js\");\n/* harmony import */ var _canvas_canvas_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas_tools */ \"./canvas/canvas_tools.js\");\n/* harmony import */ var _controller_frames_render_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/frames/render_frame */ \"./controller/frames/render_frame.js\");\n/* harmony import */ var _controller_animation_player_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controller/animation_player/player */ \"./controller/animation_player/player.js\");\n/* harmony import */ var _view_render_fps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/render_fps */ \"./view/render_fps.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  canvasSize: null,\n  tool: null,\n  size: null,\n  color: null,\n  lastColor: null,\n  curFrame: null,\n  fps: null,\n  playerID: null,\n  canvasContext: null,\n  canvasFrame: [],\n  mousePosition: {},\n  lastPosition: {},\n  posForStroke: [],\n\n  set prop(obj) {\n    this.canvasSize = obj.canvasSize || this.canvasSize;\n    this.tool = obj.tool || this.tool;\n    this.size = obj.size || this.size;\n    this.lastColor = this.color;\n    this.color = obj.color || this.color;\n    this.canvasContext = obj.context || this.canvasContext;\n    this.curFrame = obj.indexCanvas || this.curFrame;\n    Object(_view_tools_render_state_tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.tool);\n    Object(_view_tools_render_state_tool_size__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.size);\n    Object(_canvas_canvas_tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.tool);\n    if (obj.color) Object(_view_tools_render_selected_color__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.color, this.lastColor);\n  },\n\n  set playerId(obj) {\n    this.playerID = obj.playerID || this.playerID;\n  },\n\n  set mousePos(obj) {\n    this.lastPosition = this.mousePosition;\n    this.mousePosition = obj;\n    Object(_view_render_mouse_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.mousePosition);\n  },\n\n  set addFrame(imgDataURL) {\n    this.canvasFrame.push(imgDataURL);\n    this.curFrame = this.canvasFrame.length - 1;\n    Object(_controller_frames_render_frame__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    Object(_controller_animation_player_player__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  },\n\n  set updateFrame(imgDataURL) {\n    this.canvasFrame[this.curFrame] = imgDataURL;\n  },\n\n  set setColor(arg) {\n    this.lastColor = this.color;\n    this.color = arg;\n    Object(_view_tools_render_selected_color__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.color, this.lastColor);\n  },\n\n  set setPositionStroke(pos) {\n    this.positionForStoke = pos;\n  },\n\n  set FPS(fps) {\n    window.cancelAnimationFrame(this.playerID);\n    this.fps = fps;\n    Object(_controller_animation_player_player__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    Object(_view_render_fps__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fps);\n  },\n\n  get stateApp() {\n    return {\n      canvasSize: this.canvasSize,\n      tool: this.tool,\n      size: this.size,\n      color: this.color,\n      curFrame: this.curFrame,\n      fps: this.fps,\n      playerID: this.playerID,\n      canvasContext: this.canvasContext,\n      canvasFrame: this.canvasFrame,\n      mousePosition: this.mousePosition,\n      lastPosition: this.lastPosition,\n      posForStroke: this.positionForStoke\n    };\n  }\n\n});\n\n//# sourceURL=webpack:///./model/store.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style.scss?");

/***/ }),

/***/ "./view/header/header.js":
/*!*******************************!*\
  !*** ./view/header/header.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"./view/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./view/header/header.js?");

/***/ }),

/***/ "./view/header/header.scss":
/*!*********************************!*\
  !*** ./view/header/header.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/header/header.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./view/header/header.scss?");

/***/ }),

/***/ "./view/listener/button_add-frame.js":
/*!*******************************************!*\
  !*** ./view/listener/button_add-frame.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return buttonFrame; });\n/* harmony import */ var _controller_frames_add_clear_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/frames/add_clear_frame */ \"./controller/frames/add_clear_frame.js\");\n// import addClearFrame from '../../frames/add_clear_frame';\n\nfunction buttonFrame() {\n  var btnFrame = document.querySelector('.frames .frames__add-frame');\n  btnFrame.addEventListener('click', _controller_frames_add_clear_frame__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./view/listener/button_add-frame.js?");

/***/ }),

/***/ "./view/listener/button_copy-frame.js":
/*!********************************************!*\
  !*** ./view/listener/button_copy-frame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return buttonFrame; });\n/* harmony import */ var _controller_frames_copy_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/frames/copy_frame */ \"./controller/frames/copy_frame.js\");\n\nfunction buttonFrame() {\n  var btnFrame = document.querySelector('.frames .frames__copy-frame');\n  btnFrame.addEventListener('click', _controller_frames_copy_frame__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./view/listener/button_copy-frame.js?");

/***/ }),

/***/ "./view/listener/click_on_frame.js":
/*!*****************************************!*\
  !*** ./view/listener/click_on_frame.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_animation_player_fullscrin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/animation_player/fullscrin */ \"./controller/animation_player/fullscrin.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var player = document.querySelector('.animation-player__frames');\n  player.addEventListener('click', _controller_animation_player_fullscrin__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./view/listener/click_on_frame.js?");

/***/ }),

/***/ "./view/listener/mouse_position.js":
/*!*****************************************!*\
  !*** ./view/listener/mouse_position.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_get_mouse_pos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/get_mouse_pos */ \"./controller/get_mouse_pos.js\");\n\n\nfunction mousePosition() {\n  var canvas = document.getElementById('canvas');\n  canvas.addEventListener('mousemove', _controller_get_mouse_pos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mousePosition);\n\n//# sourceURL=webpack:///./view/listener/mouse_position.js?");

/***/ }),

/***/ "./view/listener/selection_color.js":
/*!******************************************!*\
  !*** ./view/listener/selection_color.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectionColor; });\n/* harmony import */ var _controller_get_current_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/get_current_color */ \"./controller/get_current_color.js\");\n\nfunction selectionColor() {\n  var curColor = document.querySelector('.input[type=\"color\"]');\n  curColor.addEventListener('input', _controller_get_current_color__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./view/listener/selection_color.js?");

/***/ }),

/***/ "./view/listener/selection_frame.js":
/*!******************************************!*\
  !*** ./view/listener/selection_frame.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_get_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/get_frame */ \"./controller/get_frame.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var listFrames = document.querySelector('.frames__list');\n  listFrames.addEventListener('click', _controller_get_frame__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./view/listener/selection_frame.js?");

/***/ }),

/***/ "./view/listener/selection_tool.js":
/*!*****************************************!*\
  !*** ./view/listener/selection_tool.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectionTool; });\n/* harmony import */ var _controller_get_current_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/get_current_tool */ \"./controller/get_current_tool.js\");\n\nfunction selectionTool() {\n  var tool = document.querySelector('.tools__list');\n  tool.addEventListener('click', _controller_get_current_tool__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./view/listener/selection_tool.js?");

/***/ }),

/***/ "./view/listener/selection_tool_size.js":
/*!**********************************************!*\
  !*** ./view/listener/selection_tool_size.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectionSize; });\n/* harmony import */ var _controller_get_current_tool_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/get_current_tool_size */ \"./controller/get_current_tool_size.js\");\n\nfunction selectionSize() {\n  var toolSize = document.querySelector('.tools__size');\n  toolSize.addEventListener('click', _controller_get_current_tool_size__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./view/listener/selection_tool_size.js?");

/***/ }),

/***/ "./view/render_fps.js":
/*!****************************!*\
  !*** ./view/render_fps.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (fps) {\n  var spanFPS = document.querySelector('.render-fps');\n  spanFPS.textContent = fps;\n});\n\n//# sourceURL=webpack:///./view/render_fps.js?");

/***/ }),

/***/ "./view/render_mouse_position.js":
/*!***************************************!*\
  !*** ./view/render_mouse_position.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\nfunction render(coord) {\n  var mousePosition = document.querySelector('.property .property__coord');\n  mousePosition.textContent = \"\".concat(coord.x, \":\").concat(coord.y);\n}\n\n//# sourceURL=webpack:///./view/render_mouse_position.js?");

/***/ }),

/***/ "./view/tools/render_selected_color.js":
/*!*********************************************!*\
  !*** ./view/tools/render_selected_color.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderSelectColor; });\nfunction renderSelectColor(color, lastCol) {\n  var inpColor = document.querySelector('.current-color .input');\n  var lastColor = document.querySelector('.prev-color');\n  lastColor.style.backgroundColor = lastCol;\n  inpColor.value = color;\n}\n\n//# sourceURL=webpack:///./view/tools/render_selected_color.js?");

/***/ }),

/***/ "./view/tools/render_state_tool_size.js":
/*!**********************************************!*\
  !*** ./view/tools/render_state_tool_size.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (size) {\n  var removeToolChecked = document.querySelector('.tools__size .checked');\n  if (removeToolChecked != null) removeToolChecked.classList.remove('checked');\n  var curTool = document.querySelector(\".item[data-size=\\\"\".concat(size, \"\\\"]\"));\n  curTool.classList.add('checked');\n});\n\n//# sourceURL=webpack:///./view/tools/render_state_tool_size.js?");

/***/ }),

/***/ "./view/tools/render_state_tools.js":
/*!******************************************!*\
  !*** ./view/tools/render_state_tools.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.scss */ \"./view/tools/tools.scss\");\n/* harmony import */ var _tools_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tool) {\n  var removeToolChecked = document.querySelector('.tools__list .checked');\n  if (removeToolChecked != null) removeToolChecked.classList.remove('checked');\n  var curTool = document.querySelector(\".tools__list .\".concat(tool));\n  curTool.classList.add('checked');\n});\n\n//# sourceURL=webpack:///./view/tools/render_state_tools.js?");

/***/ }),

/***/ "./view/tools/svg/eraser-solid.svg":
/*!*****************************************!*\
  !*** ./view/tools/svg/eraser-solid.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"12d5b61ec442938ea75fcb5f7f73c167.svg\");\n\n//# sourceURL=webpack:///./view/tools/svg/eraser-solid.svg?");

/***/ }),

/***/ "./view/tools/svg/eye-dropper-solid.svg":
/*!**********************************************!*\
  !*** ./view/tools/svg/eye-dropper-solid.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"47b73a11c0677d822e29c925d5f3571f.svg\");\n\n//# sourceURL=webpack:///./view/tools/svg/eye-dropper-solid.svg?");

/***/ }),

/***/ "./view/tools/svg/fill-solid.svg":
/*!***************************************!*\
  !*** ./view/tools/svg/fill-solid.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6ed9104aa351da21412a0af0e0a5aa69.svg\");\n\n//# sourceURL=webpack:///./view/tools/svg/fill-solid.svg?");

/***/ }),

/***/ "./view/tools/svg/pen-alt-solid.svg":
/*!******************************************!*\
  !*** ./view/tools/svg/pen-alt-solid.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d020f967700caf51f0296f846aea29d8.svg\");\n\n//# sourceURL=webpack:///./view/tools/svg/pen-alt-solid.svg?");

/***/ }),

/***/ "./view/tools/svg/pen-solid.svg":
/*!**************************************!*\
  !*** ./view/tools/svg/pen-solid.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"912bdd59ec1d6e67ada14a827fbbebd8.svg\");\n\n//# sourceURL=webpack:///./view/tools/svg/pen-solid.svg?");

/***/ }),

/***/ "./view/tools/tools.scss":
/*!*******************************!*\
  !*** ./view/tools/tools.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./tools.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./view/tools/tools.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./view/tools/tools.scss?");

/***/ })

/******/ });