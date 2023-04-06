/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 398:
/***/ (function() {

const addButton = document.querySelector(".task__button");
const taskInput = document.querySelector(".task__input");
const planList = document.querySelector(".plan__list");
const doneList = document.querySelector(".done__list");
const lists = document.querySelector(".lists");
taskInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addTask();
  }
});
addButton.addEventListener("click", () => {
  addTask();
});
lists.addEventListener("click", function (event) {
  const target = event.target;
  const list = target.parentNode.parentNode;
  if (target.classList.contains("plan__check")) {
    let value = target.previousElementSibling.innerText;
    doneList.prepend(createElement(value, "done"));
    target.parentNode.remove();
  }
  if (target.classList.contains("done__check")) {
    let value = target.previousElementSibling.innerText;
    planList.append(createElement(value, "plan"));
    target.parentNode.remove();
  }
  if (target.classList.contains("plan__cross") || target.classList.contains("done__cross")) {
    target.parentNode.remove();
  }
});
function addTask() {
  const value = taskInput.value.trim();
  if (value) {
    const item = createElement(value, "plan");
    planList.prepend(item);
  }
  taskInput.value = "";
}
function createElement(val, list) {
  let item = document.createElement("div");
  item.className = list + "__item";
  item.innerHTML = `<p class="${list}__text">${val}</p>
  <div class="${list}__check">✔</div>
  <div class="${list}__cross">✘</div>`;
  return item;
}
const observer = new MutationObserver(mutations => {
  // Создаем экземпляр MutationObserver
  mutations.forEach(mutation => {
    const p = document.querySelectorAll(".epmty-paragraph");
    console.log(p);
    if (planList.children.length == 1) {
      p[0].style.display = "block";
    } else {
      p[0].style.display = "none";
    }
    if (doneList.children.length == 1) {
      p[1].style.display = "block";
    } else {
      p[1].style.display = "none";
    }
  });
});
observer.observe(lists, {
  childList: true,
  subtree: true
}); // Запускаем отслеживание изменений в элементе

/* function isListEmpty() {
  let item = document.createElement("p");
  item.className = "epmty-paragraph";
  item.innerText = `Нет запланированных задач`;
  if (
    !planList.querySelector(".epmty-paragraph") &&
    planList.children.length === 0
  ) {
    planList.prepend(item);
  } else {
    if (planList.querySelector(".epmty-paragraph")) {
      planList.removeChild(planList.querySelector(".epmty-paragraph"));
    }
  }
} */

/* planList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("plan__cross")) {
    target.parentNode.remove();
  }
  if (target.classList.contains("plan__check")) {
    target.previousElementSibling.classList.toggle("check");
    console.log(target.parentNode.removeChild(target));
  }
});
 */

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398);
/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main_js__WEBPACK_IMPORTED_MODULE_0__);



}();
/******/ })()
;