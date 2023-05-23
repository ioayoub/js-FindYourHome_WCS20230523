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

/***/ "./src/createCard.js":
/*!***************************!*\
  !*** ./src/createCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createCard(houseToRent) {\n  document.querySelector('.cards').innerHTML = '';\n\n  houseToRent.forEach((house) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const cardHeader = document.createElement('div');\n    cardHeader.classList.add('card-header');\n\n    const cardImg = document.createElement('img');\n    cardImg.classList.add('card-img');\n    cardImg.src = house.img;\n\n    const cardBody = document.createElement('div');\n    cardBody.classList.add('card-body');\n\n    const cardTitle = document.createElement('h2');\n    cardTitle.classList.add('card-title');\n    cardTitle.textContent = house.name;\n\n    const cardDescription = document.createElement('p');\n    cardDescription.classList.add('card-description');\n    cardDescription.textContent = house.desc;\n\n    const cardButton = document.createElement('button');\n    cardButton.classList.add('card-button');\n    cardButton.textContent = 'I want it!';\n\n    cardHeader.appendChild(cardImg);\n    card.appendChild(cardHeader);\n\n    cardBody.appendChild(cardTitle);\n    cardBody.appendChild(cardDescription);\n    cardBody.appendChild(cardButton);\n    card.appendChild(cardBody);\n\n    const container = document.querySelector('.cards');\n    container.appendChild(card);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);\n\n\n//# sourceURL=webpack://js-findyourhome/./src/createCard.js?");

/***/ }),

/***/ "./src/houseToRent.js":
/*!****************************!*\
  !*** ./src/houseToRent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst houseToRent = [\n  {\n    name: 'Modern flat',\n    type: 'House',\n    desc: \"This is the perfect house for you, come to visit it you'll love it \",\n    img: 'https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg',\n    available: true,\n  },\n  {\n    name: 'Beautiful design house',\n    type: 'House',\n    desc: \"This is the perfect house for you, come to visit it you'll love it \",\n    img: 'https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037',\n    available: true,\n  },\n  {\n    name: 'Beautiful House',\n    type: 'House',\n    desc: \"This is the perfect house for you, come to visit it you'll love it \",\n    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',\n    available: false,\n  },\n  {\n    name: 'Wonderful house with Garden',\n    type: 'House',\n    desc: \"This is the perfect house for you, come to visit it you'll love it \",\n    img: 'https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',\n    available: true,\n  },\n  {\n    name: 'My super Flat ',\n    type: 'Flat',\n    desc: \"This is the perfect flat for you, come to visit it you'll love it \",\n    img: 'https://r-cf.bstatic.com/images/hotel/max1024x768/843/84330721.jpg',\n    available: false,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (houseToRent);\n\n\n//# sourceURL=webpack://js-findyourhome/./src/houseToRent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard.js */ \"./src/createCard.js\");\n/* harmony import */ var _houseToRent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./houseToRent.js */ \"./src/houseToRent.js\");\n\n\n\n(0,_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_houseToRent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst availableBtn = document.querySelector('.available-checkbox');\nconst select = document.querySelector('.select');\nconst search = document.querySelector('.search-input');\n\nconst updateCard = () => {\n  const checked = availableBtn.checked;\n  const selectedValue = select.value;\n  const searchValue = search.value;\n\n  let filteredHouses = _houseToRent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  if (checked) {\n    filteredHouses = _houseToRent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((h) => h.available);\n  }\n\n  if (selectedValue !== 'All') {\n    filteredHouses = filteredHouses.filter((h) => h.type === selectedValue);\n  }\n\n  if (searchValue !== '') {\n    filteredHouses = filteredHouses.filter((h) =>\n      h.name.toLowerCase().includes(searchValue.toLowerCase())\n    );\n  }\n\n  (0,_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredHouses);\n};\n\navailableBtn.addEventListener('change', updateCard);\nselect.addEventListener('change', updateCard);\nsearch.addEventListener('input', updateCard);\n\n\n//# sourceURL=webpack://js-findyourhome/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;