"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./add.js":
/*!****************!*\
  !*** ./add.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a = 0, b = 0) {\r\n    return a + b;\r\n}\n\n//# sourceURL=webpack:///./add.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./add.js\");\n/* harmony import */ var _public_assets_img1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/img1.jpg */ \"../public/assets/img1.jpg\");\n/* harmony import */ var _public_assets_Last_Checked_txt_iiiii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/Last Checked.txt?iiiii */ \"../public/assets/Last Checked.txt?iiiii\");\n\r\n\r\n\r\n\r\n\r\nconst rootElement = document.getElementById('root');\r\nlet newDiv = document.createElement('div');\r\nnewDiv.innerHTML = 'Hello World (Index.js) + hotChunkCheck' + ' Add#' + (0,_add__WEBPACK_IMPORTED_MODULE_0__.default)(3,5);\r\nconsole.log(window);\r\n// console.log(texts.split(' ').filter((e) => e.includes('ECS')).length);\r\nconsole.log(_public_assets_Last_Checked_txt_iiiii__WEBPACK_IMPORTED_MODULE_2__);\r\n\r\nlet newImgTag = document.createElement('img');\r\nnewImgTag.src = _public_assets_img1_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nwindow.appLib.default(newImgTag, rootElement);\r\nwindow.appLib.default(newDiv, rootElement);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../public/assets/Last Checked.txt?iiiii":
/*!***********************************************!*\
  !*** ../public/assets/Last Checked.txt?iiiii ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a4ff35031c983fca908.txt?iiiii\";\n\n//# sourceURL=webpack:///../public/assets/Last_Checked.txt?");

/***/ }),

/***/ "../public/assets/img1.jpg":
/*!*********************************!*\
  !*** ../public/assets/img1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac1a92bf4171dc6d917a.jpg\";\n\n//# sourceURL=webpack:///../public/assets/img1.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);