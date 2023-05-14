/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": function() { return /* binding */ content; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; }
/* harmony export */ });
function debounce(f, ms) {
  var isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(function () {
      return isCooldown = false;
    }, ms);
  };
}
var content = [{
  title: 'Lorem ipsum!',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}, {
  title: 'Lorem ipsum!2',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}, {
  title: 'Lorem ipsum!3',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}, {
  title: 'Lorem ipsum!4',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}, {
  title: 'Lorem ipsum!5',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}, {
  title: 'Lorem ipsum!6',
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.']
}];

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");


// import html from "./index.html";

var progressThumb = document.querySelector('.section__scroll__scrollbar_block_scroll-thumb');
var footerNumber = document.querySelector('.section__content__info__footer_number');
var startNumber = document.querySelector('.section__scroll__scrollbar_block__count-start');
var titleText = document.querySelector('.section__content__info__middle_title');
var describeText = document.querySelector('.section__content__info__middle_describe');
var section = document.querySelector('.section');
var scrollBtn = document.querySelector('.section__scroll__image');
var activeIndexElement = 0;

// describeText.addEventListener('scroll', (e) => {
//     console.log('scroll');
// })

window.addEventListener('wheel', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)(onWheel, 1000));
scrollBtn.addEventListener('click', function (e) {
  onWheel(null);
});
function onWheel(e) {
  var isScrollDown = true;
  if (e) {
    if (e.target.className === 'describe_item' && e.target.parentElement.scrollHeight > e.target.parentElement.clientHeight) {
      // console.log(e.target.parentElement.scrollHeight, e.target.parentElement.clientHeight);
      return;
    }
    ;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    isScrollDown = delta > 0;
  }
  if (isScrollDown) {
    if (activeIndexElement >= _utils__WEBPACK_IMPORTED_MODULE_1__.content.length - 1) return;
    activeIndexElement++;
  } else {
    if (activeIndexElement <= 0) return;
    activeIndexElement--;
  }
  progressThumb.style.transform = "translateY(".concat(100 * activeIndexElement, "%)");
  setPageNumber(footerNumber, activeIndexElement + 1);
  setPageNumber(startNumber, activeIndexElement + 1);
  titleText.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_1__.content[activeIndexElement].title;
  var description = _utils__WEBPACK_IMPORTED_MODULE_1__.content[activeIndexElement].description.reduce(function (acc, current) {
    return acc += "<p class=\"describe_item\">".concat(current, "</p>");
  }, "");
  describeText.innerHTML = description;

  // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

function setPageNumber(node, activeIndex) {
  node.innerHTML = "0".concat(activeIndex);
}
}();
/******/ })()
;
//# sourceMappingURL=index.27c852b1ba471316b944.js.map