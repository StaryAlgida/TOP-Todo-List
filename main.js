/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://rsms.me/inter/inter.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Inter\";\n}\n\n.bold {\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #000000a1;\n  color: white;\n  font-size: 2rem;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 130px 1fr 30px;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background-image: linear-gradient(\n    to right,\n    rgba(255, 138, 0, 0.5),\n    rgba(221, 76, 79, 0.5)\n  );\n\n  padding: 15px;\n}\n\n#menu {\n  font-size: 2.2rem;\n}\n\n#header-img {\n  width: 100px;\n}\n\n#content-container {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 1fr;\n}\n\naside {\n  padding-top: 25px;\n  padding-left: 10px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(255, 138, 0, 0.5),\n    rgba(221, 76, 79, 0.5)\n  );\n}\n\n.menu-img {\n  width: 30px;\n}\n\naside ul {\n  list-style: none;\n}\n\naside ul li {\n  margin-bottom: 10px;\n}\n\n.menu-button {\n  padding: 5px 20px 5px 20px;\n\n  display: flex;\n  align-items: center;\n  width: 175px;\n\n  border: none;\n  background-color: white;\n\n  transition: 0.3s;\n}\n\n.menu-button:hover {\n  background-color: rgb(213, 255, 135);\n  box-shadow: -1px 12px 24px 0px rgba(66, 68, 90, 0.21);\n  border-radius: 10px;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 40px;\n}\n\n#add-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 175px;\n\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  border: none;\n  background-color: white;\n\n  transition: 0.3s;\n}\n\n#add-button:hover {\n  background-color: rgb(230, 255, 184);\n\n  border-radius: 10px;\n}\n\n#todo-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  margin-top: 10px;\n}\n\n#add-todo {\n  padding: 5px;\n}\n\n#add-todo-buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n\n  margin-top: 5px;\n}\n\n#add-todo-buttons button {\n  width: 85px;\n  border: none;\n\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n#add {\n  background-color: rgb(201, 255, 119);\n}\n\n#cencle {\n  margin-left: 5px;\n  background-color: rgb(255, 129, 129);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 10px;\n  gap: 10px;\n}\n\n.done-button {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n}\n\n.done-button img {\n  width: 30px;\n}\n\n.project-button {\n  padding: 5px 20px 5px 20px;\n\n  display: flex;\n  align-items: center;\n  width: 145px;\n  height: 35px;\n\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.delete-project {\n  margin-top: -20px;\n}\n\n#project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.single-project-container {\n  display: flex;\n  align-items: flex-end;\n\n  background-color: white;\n\n  width: 170px;\n  padding-right: 5px;\n  transition: 0.3s;\n}\n\n.single-project-container:hover {\n  background-color: rgb(213, 255, 135);\n  box-shadow: -1px 12px 24px 0px rgba(66, 68, 90, 0.21);\n  border-radius: 10px;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#section-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.low {\n  background-color: hsla(84, 100%, 59%, 0.3);\n}\n\n.medium {\n  background-color: rgba(255, 255, 0, 0.3);\n}\n\n.hight {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n\n#tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearSection.ts":
/*!*****************************!*\
  !*** ./src/clearSection.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSectionContent: () => (/* binding */ clearSectionContent),\n/* harmony export */   clearSectionTitle: () => (/* binding */ clearSectionTitle)\n/* harmony export */ });\nfunction clearSectionTitle() {\n    const tilte = document.querySelector(\"#section-title\");\n    if (tilte)\n        tilte.innerHTML = ``;\n}\nfunction clearSectionContent() {\n    const contener = document.querySelector(\"#section-content\");\n    if (contener)\n        contener.innerHTML = ``;\n}\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/clearSection.ts?");

/***/ }),

/***/ "./src/createProject.ts":
/*!******************************!*\
  !*** ./src/createProject.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createProject(title, id) {\n    const Project = {\n        title: title,\n        id: id,\n        list: [],\n        setTask(task) {\n            this.list.push(task);\n        },\n        remove(id) {\n            if (this.list.length > 1) {\n                for (let i = 0; i < this.list.length; i++) {\n                    if (this.list[i].id === id) {\n                        this.list.splice(i, 1);\n                        break;\n                    }\n                }\n            }\n            else\n                this.list.pop();\n        },\n        getList() {\n            return this.list;\n        },\n        getSize() {\n            return this.list.length;\n        },\n    };\n    return Project;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n//# sourceURL=webpack://top-todo-list/./src/createProject.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _web_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web_init */ \"./src/web_init.ts\");\n/* harmony import */ var _tabs_toDo_toDoTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/toDo/toDoTab */ \"./src/tabs/toDo/toDoTab.ts\");\n/* harmony import */ var _tabs_today_todayTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/today/todayTab */ \"./src/tabs/today/todayTab.ts\");\n/* harmony import */ var _tabs_thisWeek_thisWeekTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/thisWeek/thisWeekTab */ \"./src/tabs/thisWeek/thisWeekTab.ts\");\n/* harmony import */ var _tabs_addProject_addProjectTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/addProject/addProjectTab */ \"./src/tabs/addProject/addProjectTab.ts\");\n\n\n\n\n\n\nwindow.onload = () => {\n    (0,_web_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_tabs_toDo_toDoTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_tabs_today_todayTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_tabs_thisWeek_thisWeekTab__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_tabs_addProject_addProjectTab__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.ts?");

/***/ }),

/***/ "./src/projectList.ts":
/*!****************************!*\
  !*** ./src/projectList.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ListOfProjects = {\n    list: [],\n    setProject(project) {\n        this.list.push(project);\n    },\n    remove(id) {\n        if (this.list.length > 1) {\n            for (let i = 0; i < this.list.length; i++) {\n                if (this.list[i].id === id) {\n                    this.list.splice(i, 1);\n                    break;\n                }\n            }\n        }\n        else\n            this.list.pop();\n        console.log(`project list pop:${this.list}`);\n    },\n    getList() {\n        return this.list;\n    },\n    getSize() {\n        return this.list.length;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOfProjects);\n\n\n//# sourceURL=webpack://top-todo-list/./src/projectList.ts?");

/***/ }),

/***/ "./src/renders/addTaskButtonAndForm.ts":
/*!*********************************************!*\
  !*** ./src/renders/addTaskButtonAndForm.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskButton: () => (/* binding */ addTaskButton),\n/* harmony export */   renderAddTaskForm: () => (/* binding */ renderAddTaskForm)\n/* harmony export */ });\n/* harmony import */ var _img_aside_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/aside/add.svg */ \"./src/img/aside/add.svg\");\n\nfunction addTaskButton() {\n    const addButton = document.createElement('button');\n    addButton.id = 'add-button';\n    addButton.innerHTML = `<img src=\"${_img_aside_add_svg__WEBPACK_IMPORTED_MODULE_0__}\" class=\"menu-img\"> Add task`;\n    return addButton;\n}\nfunction renderAddTaskForm() {\n    const container = document.querySelector(\"#section-content\");\n    if (container)\n        container.innerHTML = `\n                <input maxlength=\"30\" id=\"add-todo\" type=\"text\" autofocus>\n                <div id=\"add-todo-buttons\">\n                    <button id=\"add\">Add</button>\n                    <button id=\"cencle\">Cencle</button>\n                </div>`;\n}\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/renders/addTaskButtonAndForm.ts?");

/***/ }),

/***/ "./src/renders/projectAsideRender.ts":
/*!*******************************************!*\
  !*** ./src/renders/projectAsideRender.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tabs_addProject_tabProjectLstner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabs/addProject/tabProjectLstner */ \"./src/tabs/addProject/tabProjectLstner.ts\");\n/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/delete.svg */ \"./src/img/delete.svg\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projectList */ \"./src/projectList.ts\");\n/* harmony import */ var _clearSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clearSection */ \"./src/clearSection.ts\");\n\n\n\n\nfunction renderAsideProject(project, mainContainer) {\n    const container = document.createElement('div');\n    container.classList.add('single-project-container');\n    const mainButton = document.createElement('button');\n    (0,_tabs_addProject_tabProjectLstner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mainButton, project);\n    mainButton.classList.add('project-button');\n    if ((project.id != undefined) && project.title) {\n        mainButton.id = `aside-${project.id}`;\n        const title = createTitle(project.title);\n        const button = createDeleteButton(container, project.id);\n        mainButton.appendChild(title);\n        container.appendChild(mainButton);\n        container.appendChild(button);\n    }\n    mainContainer.appendChild(container);\n}\nfunction createTitle(title) {\n    const span = document.createElement('span');\n    span.innerText = `${title}`;\n    return span;\n}\nfunction createDeleteButton(container, project_id) {\n    const button = document.createElement('button');\n    button.classList.add('done-button');\n    button.classList.add('delete-project');\n    button.innerHTML = `<img src=\"${_img_delete_svg__WEBPACK_IMPORTED_MODULE_1__}\">`;\n    button.addEventListener('click', () => {\n        _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(project_id);\n        container.remove();\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_3__.clearSectionTitle)();\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_3__.clearSectionContent)();\n    });\n    return button;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAsideProject);\n\n\n//# sourceURL=webpack://top-todo-list/./src/renders/projectAsideRender.ts?");

/***/ }),

/***/ "./src/renders/singleTaskRender.ts":
/*!*****************************************!*\
  !*** ./src/renders/singleTaskRender.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_doneFalse_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/doneFalse.svg */ \"./src/img/doneFalse.svg\");\n/* harmony import */ var _img_doneTrue_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/doneTrue.svg */ \"./src/img/doneTrue.svg\");\n/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/delete.svg */ \"./src/img/delete.svg\");\n\n\n\nfunction taskRender(task, container, list) {\n    const div = document.createElement('div');\n    div.id = `${task.id}`;\n    div.classList.add('task');\n    const selectDiv = document.createElement('div');\n    selectDiv.classList.add('piority');\n    selectDiv.innerHTML = `<span>Piority:</span>`;\n    const doneButton = makeDoneButton(task);\n    const title = makeTitle(task);\n    const select = makeSelect(task, div);\n    selectDiv.appendChild(select);\n    const dateStartContainer = document.createElement('div');\n    makeStart(task, dateStartContainer);\n    const deleteButton = makeDelete(task.id, list);\n    div.appendChild(doneButton);\n    div.appendChild(title);\n    div.appendChild(selectDiv);\n    div.appendChild(dateStartContainer);\n    div.appendChild(deleteButton);\n    container.appendChild(div);\n}\nfunction makeDoneButton(task) {\n    const doneButton = document.createElement('button');\n    doneButton.classList.add(\"done-button\");\n    if (task.getDone()) {\n        doneButton.innerHTML = `<img src=${_img_doneTrue_svg__WEBPACK_IMPORTED_MODULE_1__}>`;\n    }\n    else {\n        doneButton.innerHTML = `<img src=${_img_doneFalse_svg__WEBPACK_IMPORTED_MODULE_0__}>`;\n    }\n    doneButton.addEventListener('click', () => {\n        if (task.getDone()) {\n            doneButton.innerHTML = `<img src=${_img_doneFalse_svg__WEBPACK_IMPORTED_MODULE_0__}>`;\n            task.setDone(false);\n        }\n        else {\n            doneButton.innerHTML = `<img src=${_img_doneTrue_svg__WEBPACK_IMPORTED_MODULE_1__}>`;\n            task.setDone(true);\n        }\n    });\n    return doneButton;\n}\nfunction makeTitle(task) {\n    const title = document.createElement('h2');\n    title.innerHTML = `${task.getTaskName()}`;\n    return title;\n}\nfunction makeSelect(task, div) {\n    const select = document.createElement('select');\n    select.classList.add('piority');\n    select.name = 'task-pioryty';\n    if (task.piority === 'medium') {\n        div.className = `task medium`;\n        select.innerHTML = `\n        <option value=\"low\">low</option>\n        <option value=\"medium\" selected>medium</option>\n        <option value=\"hight\">hight</option>`;\n    }\n    else if (task.piority === 'hight') {\n        div.className = `task hight`;\n        select.innerHTML = `\n        <option value=\"low\">low</option>\n        <option value=\"medium\">medium</option>\n        <option value=\"hight\" selected>hight</option>`;\n    }\n    else {\n        div.className = `task low`;\n        select.innerHTML = `\n        <option value=\"low\" selected>low</option>\n        <option value=\"medium\">medium</option>\n        <option value=\"hight\">hight</option>`;\n    }\n    selectListener(select, task, div);\n    return select;\n}\nfunction makeStart(task, contaner) {\n    const span = document.createElement('span');\n    contaner.innerHTML = `Date: `;\n    if (task.dateStart) {\n        span.innerHTML = ` ${task.dateStart}`;\n    }\n    else {\n        span.innerHTML = `No date`;\n    }\n    contaner.appendChild(span);\n    span.addEventListener('click', () => {\n        const input = document.createElement('input');\n        input.type = 'date';\n        contaner.innerHTML = `Date: `;\n        contaner.appendChild(input);\n        input.addEventListener('change', () => {\n            task.dateStart = `${input.value}`;\n            console.log(`Start: ${input.value}`);\n            makeStart(task, contaner);\n        });\n    });\n}\nfunction makeDelete(id, list) {\n    const button = document.createElement('button');\n    button.classList.add('done-button');\n    button.innerHTML = `<img src=${_img_delete_svg__WEBPACK_IMPORTED_MODULE_2__}>`;\n    button.addEventListener('click', () => {\n        const task = document.getElementById(`${id}`);\n        if (task) {\n            task.remove();\n        }\n        list.remove(id);\n    });\n    return button;\n}\nfunction selectListener(select, task, div) {\n    select.addEventListener('change', (event) => {\n        const selectedValue = event.target.value;\n        task.setPiority(selectedValue);\n        div.className = `task ${selectedValue}`;\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskRender);\n\n\n//# sourceURL=webpack://top-todo-list/./src/renders/singleTaskRender.ts?");

/***/ }),

/***/ "./src/renders/tabTitle.ts":
/*!*********************************!*\
  !*** ./src/renders/tabTitle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabTitle(title) {\n    const tabTitle = document.querySelector(\"#section-title\");\n    if (tabTitle)\n        tabTitle.innerHTML = `${title}`;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabTitle);\n\n\n//# sourceURL=webpack://top-todo-list/./src/renders/tabTitle.ts?");

/***/ }),

/***/ "./src/renders/tasksContainer.ts":
/*!***************************************!*\
  !*** ./src/renders/tasksContainer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tasksContainer() {\n    const taskContainer = document.createElement('div');\n    taskContainer.id = 'tasks-container';\n    return taskContainer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksContainer);\n\n\n//# sourceURL=webpack://top-todo-list/./src/renders/tasksContainer.ts?");

/***/ }),

/***/ "./src/tabs/addProject/addProjectTab.ts":
/*!**********************************************!*\
  !*** ./src/tabs/addProject/addProjectTab.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createProject */ \"./src/createProject.ts\");\n/* harmony import */ var _img_aside_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/aside/add.svg */ \"./src/img/aside/add.svg\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projectList */ \"./src/projectList.ts\");\n/* harmony import */ var _renders_projectAsideRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renders/projectAsideRender */ \"./src/renders/projectAsideRender.ts\");\n\n\n\n\nfunction addProject() {\n    const button = document.querySelector(\"#add-project\");\n    const container = document.querySelector(\"#project\");\n    if (button && container)\n        addProjectListner(button, container);\n}\nfunction addProjectListner(button, container) {\n    button.addEventListener(\"click\", () => {\n        container.innerHTML = `<input type=\"text\" maxlength=\"15\" id=\"project-title\">\n        <div>\n            <button id=\"p-add\">Add</button>\n            <button id=\"p-cencle\">Cencle</button>\n        </div>`;\n        add(container);\n        cencle(container);\n    });\n}\nfunction add(container) {\n    const button = document.querySelector(\"#p-add\");\n    const input = document.querySelector(\"#project-title\");\n    if (button && input) {\n        button.addEventListener(\"click\", () => {\n            if (input.value !== \"\") {\n                const project = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value, _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSize());\n                _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setProject(project);\n                reset(container);\n            }\n        });\n    }\n}\nfunction cencle(container) {\n    const button = document.querySelector(\"#p-cencle\");\n    if (button) {\n        button.addEventListener(\"click\", () => {\n            reset(container);\n        });\n    }\n}\nfunction reset(container) {\n    container.innerHTML = `<button class=\"menu-button\" id=\"add-project\"><img class=\"menu-img\" src=\"${_img_aside_add_svg__WEBPACK_IMPORTED_MODULE_1__}\"><span>Add Project</span></button>`;\n    const addProject = document.querySelector(\"#add-project\");\n    const project = document.querySelector(\"#project\");\n    const projectContanier = document.querySelector(\"#project-container\");\n    if (addProject && project && projectContanier) {\n        addProjectListner(addProject, project);\n        projectContanier.innerHTML = ``;\n        const list = _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getList();\n        list.forEach((project) => {\n            (0,_renders_projectAsideRender__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(project, projectContanier);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/addProject/addProjectTab.ts?");

/***/ }),

/***/ "./src/tabs/addProject/tabProjectLstner.ts":
/*!*************************************************!*\
  !*** ./src/tabs/addProject/tabProjectLstner.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clearSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clearSection */ \"./src/clearSection.ts\");\n/* harmony import */ var _renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renders/addTaskButtonAndForm */ \"./src/renders/addTaskButtonAndForm.ts\");\n/* harmony import */ var _renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renders/singleTaskRender */ \"./src/renders/singleTaskRender.ts\");\n/* harmony import */ var _renders_tabTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renders/tabTitle */ \"./src/renders/tabTitle.ts\");\n/* harmony import */ var _renders_tasksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renders/tasksContainer */ \"./src/renders/tasksContainer.ts\");\n/* harmony import */ var _taskObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../taskObj */ \"./src/taskObj.ts\");\n\n\n\n\n\n\nfunction tabProjectListner(button, project) {\n    button.addEventListener(\"click\", () => {\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionTitle)();\n        defaultView(project);\n    });\n}\nfunction defaultView(project) {\n    (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionContent)();\n    const container = document.querySelector(\"#section-content\");\n    if (project.title && container) {\n        (0,_renders_tabTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(project.title);\n        console.log(\"ok\");\n        const addButton = (0,_renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)();\n        addTaskButtonListner(addButton, project);\n        const taskContainer = (0,_renders_tasksContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        renderTasks(taskContainer, project);\n        container.appendChild(addButton);\n        container.appendChild(taskContainer);\n    }\n}\nfunction renderTasks(container, project) {\n    const list = project.getList();\n    list.forEach((task) => {\n        (0,_renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task, container, project);\n    });\n}\nfunction addTaskButtonListner(button, project) {\n    button.addEventListener(\"click\", () => {\n        (0,_renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__.renderAddTaskForm)();\n        const add = document.querySelector(\"#add\");\n        const cencle = document.querySelector(\"#cencle\");\n        if (add && cencle) {\n            cencleButton(cencle, project);\n            addButton(add, project);\n        }\n    });\n}\nfunction addButton(button, project) {\n    button.addEventListener(\"click\", () => {\n        const input = document.querySelector(\"#add-todo\");\n        const name = input.value;\n        if (name) {\n            project.setTask((0,_taskObj__WEBPACK_IMPORTED_MODULE_5__.createTask)(project.getSize(), name, \"low\", false, undefined, undefined));\n            defaultView(project);\n        }\n    });\n}\nfunction cencleButton(button, project) {\n    button.addEventListener(\"click\", () => {\n        defaultView(project);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabProjectListner);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/addProject/tabProjectLstner.ts?");

/***/ }),

/***/ "./src/tabs/thisWeek/thisWeekTab.ts":
/*!******************************************!*\
  !*** ./src/tabs/thisWeek/thisWeekTab.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clearSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clearSection */ \"./src/clearSection.ts\");\n/* harmony import */ var _renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renders/singleTaskRender */ \"./src/renders/singleTaskRender.ts\");\n/* harmony import */ var _renders_tabTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renders/tabTitle */ \"./src/renders/tabTitle.ts\");\n/* harmony import */ var _renders_tasksContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renders/tasksContainer */ \"./src/renders/tasksContainer.ts\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../taskList */ \"./src/taskList.ts\");\n\n\n\n\n\nfunction thisWeekTab() {\n    const button = document.querySelector('#week');\n    if (button)\n        thisWeekTabListner(button);\n}\nfunction thisWeekTabListner(button) {\n    button.addEventListener('click', () => {\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionTitle)();\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionContent)();\n        (0,_renders_tabTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('This week');\n        showTasks();\n    });\n}\nfunction showTasks() {\n    const taksContainer = (0,_renders_tasksContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const list = _taskList__WEBPACK_IMPORTED_MODULE_4__.ListOfTasks.getList();\n    list.forEach(task => {\n        if (task.dateStart)\n            if (isDateInCurrentWeek(task.dateStart))\n                (0,_renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task, taksContainer, _taskList__WEBPACK_IMPORTED_MODULE_4__.ListOfTasks);\n    });\n    const contener = document.querySelector(\"#section-content\");\n    if (contener)\n        contener.appendChild(taksContainer);\n}\nfunction isDateInCurrentWeek(dateToCheck) {\n    const toCheck = new Date(dateToCheck);\n    const currentDate = new Date();\n    const startOfWeek = new Date(currentDate);\n    startOfWeek.setHours(0, 0, 0, 0);\n    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());\n    const endOfWeek = new Date(currentDate);\n    endOfWeek.setHours(23, 59, 59, 999);\n    endOfWeek.setDate(currentDate.getDate() + (7 - currentDate.getDay()));\n    return toCheck >= startOfWeek && toCheck <= endOfWeek;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thisWeekTab);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/thisWeek/thisWeekTab.ts?");

/***/ }),

/***/ "./src/tabs/toDo/toDoTab.ts":
/*!**********************************!*\
  !*** ./src/tabs/toDo/toDoTab.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renders_tabTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renders/tabTitle */ \"./src/renders/tabTitle.ts\");\n/* harmony import */ var _renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renders/addTaskButtonAndForm */ \"./src/renders/addTaskButtonAndForm.ts\");\n/* harmony import */ var _clearSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clearSection */ \"./src/clearSection.ts\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../taskList */ \"./src/taskList.ts\");\n/* harmony import */ var _taskObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../taskObj */ \"./src/taskObj.ts\");\n/* harmony import */ var _renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renders/singleTaskRender */ \"./src/renders/singleTaskRender.ts\");\n/* harmony import */ var _renders_tasksContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renders/tasksContainer */ \"./src/renders/tasksContainer.ts\");\n\n\n\n\n\n\n\nfunction todo() {\n    const toDobutton = document.querySelector(\"#to-do\");\n    if (toDobutton) {\n        toDoListner(toDobutton);\n    }\n}\nfunction toDoListner(button) {\n    button.addEventListener('click', () => {\n        todoDefaultView();\n        (0,_renders_tabTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('To Do');\n    });\n}\nfunction todoDefaultView() {\n    (0,_clearSection__WEBPACK_IMPORTED_MODULE_2__.clearSectionContent)();\n    const container = document.querySelector(\"#section-content\");\n    if (container) {\n        const addTask = (0,_renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)();\n        addTaskButtonListner(addTask);\n        const taskContainer = (0,_renders_tasksContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        renderTasks(taskContainer);\n        container.appendChild(addTask);\n        container.appendChild(taskContainer);\n    }\n}\nfunction addTaskButtonListner(button) {\n    button.addEventListener('click', () => {\n        (0,_renders_addTaskButtonAndForm__WEBPACK_IMPORTED_MODULE_1__.renderAddTaskForm)();\n        const add = document.querySelector('#add');\n        const cencle = document.querySelector('#cencle');\n        if (add && cencle) {\n            cencleButton(cencle);\n            addButton(add);\n        }\n    });\n}\nfunction addButton(button) {\n    button.addEventListener('click', () => {\n        const input = document.querySelector(\"#add-todo\");\n        const name = input.value;\n        if (name) {\n            _taskList__WEBPACK_IMPORTED_MODULE_3__.ListOfTasks.setTask((0,_taskObj__WEBPACK_IMPORTED_MODULE_4__.createTask)(_taskList__WEBPACK_IMPORTED_MODULE_3__.ListOfTasks.getSize(), name, 'low', false, undefined, undefined));\n            todoDefaultView();\n        }\n    });\n}\nfunction cencleButton(button) {\n    button.addEventListener('click', () => {\n        todoDefaultView();\n    });\n}\nfunction renderTasks(container) {\n    const list = _taskList__WEBPACK_IMPORTED_MODULE_3__.ListOfTasks.getList();\n    list.forEach(task => {\n        (0,_renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(task, container, _taskList__WEBPACK_IMPORTED_MODULE_3__.ListOfTasks);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/toDo/toDoTab.ts?");

/***/ }),

/***/ "./src/tabs/today/todayTab.ts":
/*!************************************!*\
  !*** ./src/tabs/today/todayTab.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clearSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clearSection */ \"./src/clearSection.ts\");\n/* harmony import */ var _renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renders/singleTaskRender */ \"./src/renders/singleTaskRender.ts\");\n/* harmony import */ var _renders_tabTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renders/tabTitle */ \"./src/renders/tabTitle.ts\");\n/* harmony import */ var _renders_tasksContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renders/tasksContainer */ \"./src/renders/tasksContainer.ts\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../taskList */ \"./src/taskList.ts\");\n\n\n\n\n\nfunction todayTab() {\n    const button = document.querySelector('#today');\n    if (button)\n        todayTabListner(button);\n}\nfunction todayTabListner(button) {\n    button.addEventListener('click', () => {\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionTitle)();\n        (0,_clearSection__WEBPACK_IMPORTED_MODULE_0__.clearSectionContent)();\n        (0,_renders_tabTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Today');\n        showTasks();\n    });\n}\nfunction showTasks() {\n    const date = new Date();\n    const today = `${date.toJSON().slice(0, 10)}`;\n    const list = _taskList__WEBPACK_IMPORTED_MODULE_4__.ListOfTasks.getList();\n    const taksContainer = (0,_renders_tasksContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    list.forEach(task => {\n        console.log(today === task.dateStart);\n        if (today === task.dateStart)\n            (0,_renders_singleTaskRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task, taksContainer, _taskList__WEBPACK_IMPORTED_MODULE_4__.ListOfTasks);\n    });\n    const contener = document.querySelector(\"#section-content\");\n    if (contener)\n        contener.appendChild(taksContainer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayTab);\n\n\n//# sourceURL=webpack://top-todo-list/./src/tabs/today/todayTab.ts?");

/***/ }),

/***/ "./src/taskList.ts":
/*!*************************!*\
  !*** ./src/taskList.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListOfTasks: () => (/* binding */ ListOfTasks)\n/* harmony export */ });\nconst ListOfTasks = {\n    list: [],\n    setTask(task) {\n        this.list.push(task);\n    },\n    remove(id) {\n        if (this.list.length > 1) {\n            for (let i = 0; i < this.list.length; i++) {\n                if (this.list[i].id === id) {\n                    this.list.splice(i, 1);\n                    break;\n                }\n            }\n        }\n        else\n            this.list.pop();\n    },\n    getList() {\n        return this.list;\n    },\n    getSize() {\n        return this.list.length;\n    },\n};\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/taskList.ts?");

/***/ }),

/***/ "./src/taskObj.ts":
/*!************************!*\
  !*** ./src/taskObj.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createTask(id, name, piority, done, dateStart, dateEnd) {\n    const taskObj = {\n        id: id,\n        taskName: name,\n        piority: piority,\n        done: done,\n        dateStart: dateStart,\n        dateEnd: dateEnd,\n        rename(name) {\n            this.taskName = name;\n        },\n        setPiority(piority) {\n            this.piority = piority;\n        },\n        getPiority() {\n            return piority;\n        },\n        getTaskName() {\n            return this.taskName;\n        },\n        setDone(isDone) {\n            this.done = isDone;\n        },\n        getDone() {\n            return this.done;\n        }\n    };\n    return taskObj;\n}\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/taskObj.ts?");

/***/ }),

/***/ "./src/web_init.ts":
/*!*************************!*\
  !*** ./src/web_init.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_HeaderImg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/HeaderImg.png */ \"./src/img/HeaderImg.png\");\n/* harmony import */ var _img_aside_InboxImg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/aside/InboxImg.svg */ \"./src/img/aside/InboxImg.svg\");\n/* harmony import */ var _img_aside_CalendarDate_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/aside/CalendarDate.svg */ \"./src/img/aside/CalendarDate.svg\");\n/* harmony import */ var _img_aside_Calendar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/aside/Calendar.svg */ \"./src/img/aside/Calendar.svg\");\n/* harmony import */ var _img_aside_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/aside/add.svg */ \"./src/img/aside/add.svg\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\nconst createHeader = function () {\n    const header = document.createElement(\"header\");\n    header.innerHTML = `\n    <img src=${_img_HeaderImg_png__WEBPACK_IMPORTED_MODULE_0__} id=\"header-img\">\n    <h1>ToDo List</h1>`;\n    header.classList.add(\"bold\");\n    return header;\n};\nconst createAsideMenu = function () {\n    const aside = document.createElement(\"aside\");\n    aside.innerHTML = `\n    <h1 id=\"menu\" class=\"bold\">Menu</h1>\n    <ul>\n        <li><button class=\"menu-button\" id=\"to-do\"><img class=\"menu-img\" src=\"${_img_aside_InboxImg_svg__WEBPACK_IMPORTED_MODULE_1__}\"><span>To Do</span></button></li>\n        <li><button class=\"menu-button\" id=\"today\"><img class=\"menu-img\" src=\"${_img_aside_CalendarDate_svg__WEBPACK_IMPORTED_MODULE_2__}\"><span>Today</span></button></li>\n        <li><button class=\"menu-button\" id=\"week\"><img class=\"menu-img\" src=\"${_img_aside_Calendar_svg__WEBPACK_IMPORTED_MODULE_3__}\"><span>This week</span></button></li>\n    </ul>\n    <h2 class=\"bold\">Project</h2>\n    <ul id=\"projects-list\">\n        <li id=\"project\"><button class=\"menu-button\" id=\"add-project\"><img class=\"menu-img\" src=\"${_img_aside_add_svg__WEBPACK_IMPORTED_MODULE_4__}\"><span>Add Project</span></button></li>\n        <li id=\"project-container\"></li>\n    </ul>`;\n    return aside;\n};\nconst createSection = function () {\n    const section = document.createElement(\"section\");\n    section.innerHTML = `<h2 id=\"section-title\"></h2>\n    <div id=\"section-content\"></div>`;\n    return section;\n};\nconst asideSectionContainer = function () {\n    const container = document.createElement(\"div\");\n    container.id = \"content-container\";\n    container.appendChild(createAsideMenu());\n    container.appendChild(createSection());\n    return container;\n};\nconst createFooter = function () {\n    const footer = document.createElement(\"footer\");\n    footer.innerHTML = `<p>Created by StaryAlgida</p>`;\n    return footer;\n};\nconst webInit = function () {\n    if (content) {\n        content.appendChild(createHeader());\n        content.appendChild(asideSectionContainer());\n        content.appendChild(createFooter());\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webInit);\n\n\n//# sourceURL=webpack://top-todo-list/./src/web_init.ts?");

/***/ }),

/***/ "./src/img/HeaderImg.png":
/*!*******************************!*\
  !*** ./src/img/HeaderImg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bc44318e2afab2d0d1b.png\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/HeaderImg.png?");

/***/ }),

/***/ "./src/img/aside/Calendar.svg":
/*!************************************!*\
  !*** ./src/img/aside/Calendar.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53c41b800788219c47df.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/aside/Calendar.svg?");

/***/ }),

/***/ "./src/img/aside/CalendarDate.svg":
/*!****************************************!*\
  !*** ./src/img/aside/CalendarDate.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"892f5fb3a09664a5e60a.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/aside/CalendarDate.svg?");

/***/ }),

/***/ "./src/img/aside/InboxImg.svg":
/*!************************************!*\
  !*** ./src/img/aside/InboxImg.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"353bf849d5435cbd257a.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/aside/InboxImg.svg?");

/***/ }),

/***/ "./src/img/aside/add.svg":
/*!*******************************!*\
  !*** ./src/img/aside/add.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9597f8bd83a923f13c82.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/aside/add.svg?");

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cde6cf6920bc0095507.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/delete.svg?");

/***/ }),

/***/ "./src/img/doneFalse.svg":
/*!*******************************!*\
  !*** ./src/img/doneFalse.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ed99a8fec7c7972aa14.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/doneFalse.svg?");

/***/ }),

/***/ "./src/img/doneTrue.svg":
/*!******************************!*\
  !*** ./src/img/doneTrue.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"931ae7a8b1512affb35b.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/img/doneTrue.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;