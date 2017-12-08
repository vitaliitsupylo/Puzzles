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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

;
(() => {
    'use strict';
    /*Variables*/

    /*active list category search*/
    const btnListSearch = document.querySelector('.category_search');
    const activeCatSearch = document.querySelector('.active_category_search');
    const listCatSearch = document.querySelector('.list_category_search');
    const btnCategoryList = document.querySelector('.categories_list');
    /*search hover*/
    const searchInput = document.querySelector('.search_input');
    /*user reviews*/
    const reviewsCard = document.querySelectorAll('.user_reviews_card');


    /*active list category search*/
    btnListSearch.addEventListener('click', () => {
        btnListSearch.classList.toggle('active');
    });
    listCatSearch.addEventListener('click', (el) => {
        if (el.target.nodeName === "LI") {
            activeCatSearch.innerText = el.target.innerText;
        }
    })

    /*active category list */
    btnCategoryList.addEventListener('click', () => {
        btnCategoryList.classList.toggle('active');
    });

    /*search hover*/
    searchInput.addEventListener('input', function () {
        this.parentElement.classList.add('focus');
    });
    searchInput.addEventListener('blur', function () {
        if (this.value.length < 1) {
            this.parentElement.classList.remove('focus');
        }
    });
    /*user reviews*/
    if (reviewsCard.length > 0) {
        for (let i = 0; i < reviewsCard.length; i++) {
            let btn = reviewsCard[i].querySelector('.collapse');
            btn.addEventListener('click', function () {
                this.parentElement.classList.toggle('active');
            })
        }
    }


})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map