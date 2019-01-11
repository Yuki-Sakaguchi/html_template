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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/example.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/example.ts":
/*!***************************!*\
  !*** ./src/ts/example.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_util */ "./src/ts/modules/_util.ts");
console.log(exampleConstVariable);
console.log(exampleLetVariable);
exampleFunction();
exampleFunction(1);
exampleFunction('test');
exampleFunction(1, 2, 3, 4, 5);
var exampleInstance = new ExampleClass();
exampleInstance.test();
$(function () {
    $('.test').exampleJQueryFunction('test');
});
var Member = (function () {
    function Member(name) {
        if (name === void 0) { name = 'GEST'; }
        this.id = (Member.sequenceId++).toString();
        this.name = name;
    }
    Member.prototype.getMyData = function () {
        console.log("\u79C1\u306E\u540D\u524D\u306F [" + this.name + "] \u3067\u3059\u3002");
        console.log("\u79C1\u306EID\u306F [" + this.id + "] \u3067\u3059\u3002");
    };
    Member.sequenceId = 1;
    Member.digitId = 5;
    return Member;
}());
var taro = new Member('taro');
taro.getMyData();
var hanako = new Member('hanako');
hanako.getMyData();
var gest = new Member();
gest.getMyData();

console.log(_modules_util__WEBPACK_IMPORTED_MODULE_0__["default"].zeroPadding(123, 5));
console.log(_modules_util__WEBPACK_IMPORTED_MODULE_0__["default"].zeroPadding('１２３', 10, '０'));
console.log(_modules_util__WEBPACK_IMPORTED_MODULE_0__["default"].createRandom(1, 10));


/***/ }),

/***/ "./src/ts/modules/_util.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/_util.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    zeroPadding: function (target, digit, strZero) {
        if (strZero === void 0) { strZero = '0'; }
        var zero = (function () {
            var tmp = '';
            for (var i = 0; i < digit; i++) {
                tmp += strZero;
            }
            return tmp;
        })();
        return (zero + target.toString()).slice(-digit);
    },
    createRandom: function (min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVoQyxlQUFlLEVBQUUsQ0FBQztBQUNsQixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFL0IsSUFBTSxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMzQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFdkIsQ0FBQyxDQUFDO0lBQ0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBVUg7SUFVSSxnQkFBYSxJQUFtQjtRQUFuQixvQ0FBbUI7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFHRCwwQkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBVSxJQUFJLENBQUMsSUFBSSx5QkFBTyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBVSxJQUFJLENBQUMsRUFBRSx5QkFBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWpCTSxpQkFBVSxHQUFXLENBQUMsQ0FBQztJQUN2QixjQUFPLEdBQVcsQ0FBQyxDQUFDO0lBaUIvQixhQUFDO0NBQUE7QUFHRCxJQUFNLElBQUksR0FBVyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFakIsSUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRW5CLElBQU0sSUFBSSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7QUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBU2tCO0FBR25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFGdEM7QUFBZTtJQVFYLFdBQVcsRUFBRSxVQUFDLE1BQXFCLEVBQUUsS0FBYSxFQUFFLE9BQXFCO1FBQXJCLHVDQUFxQjtRQUNyRSxJQUFNLElBQUksR0FBVyxDQUFDO1lBQ2xCLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QixHQUFHLElBQUksT0FBTyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBUUQsWUFBWSxFQUFFLFVBQUMsR0FBVyxFQUFFLEdBQVc7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0QsQ0FBQztDQUNKIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9leGFtcGxlLnRzXCIpO1xuIiwiLyoqXG4gKiBUeXBlU2NyaXB044Gu55Kw5aKD44KS6Kqs5piO44GZ44KL44Gf44KB44Gu44K144Oz44OX44Or44OV44Kh44Kk44Or44Gn44GZXG4gKiDlrp/pmpvjga7mp4vnr4nmmYLjgavjga/liYrpmaTjgZfjgabjgY/jgaDjgZXjgYRcbiAqIFxuICogICAgICBJTkRFWFxuICogICAgICAgICAgKDEpIGpRdWVyeeOBq+OBpOOBhOOBplxuICogICAgICAgICAgKDIpIOWei+Wumue+qeOBq+OBpOOBhOOBplxuICogICAgICAgICAgKDMpIEVTNuOBq+OBpOOBhOOBplxuICogICAgICAgICAgKDQpIOWklumDqOODouOCuOODpeODvOODq+OBq+OBpOOBhOOBplxuICovXG5cbi8qKlxuICogKDEpIGpRdWVyeeOBq+OBpOOBhOOBplxuICogICAgICB0c+S4iuOBp+OCqOODqeODvOOCkuWHuuOBleOBquOBhOOCiOOBhuOBq+Wei+Wumue+qe+8iG5vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ577yJ44Gv6Kqt44G/6L6844KT44Gn44GE44G+44GZ44CCXG4gKiAgICAgIOWun+ihjOaZguOBq+OBr2pRdWVyeeOCkuWIpemAlOiqreOBv+i+vOOBvuOBquOBhOOBqOODqeODs+OCv+OCpOODoOOCqOODqeODvOOBq+OBquOCiuOBvuOBmeOAglxuICovXG5cblxuLyoqXG4gKiAoMikg5Z6L5a6a576p44Gr44Gk44GE44GmXG4gKiAgICAgIOWei+Wumue+qeOBruOBquOBhOWklumDqOODqeOCpOODluODqeODquOCkuS9v+OBhOOBn+OBhOWgtOWQiOOBquOBqeOBr3Rz5LiK44Gn44Ko44Op44O844GM5Ye644Gq44GP44Gq44KL44KI44GG44Gr5Z6L44KS5a6a576p44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gKiAgICAgIEB0eXBlcy9faW5kZXgudHPjgavni6zoh6rjgaflrprnvqnjgZnjgozjgbDjgqjjg6njg7zjga/lh7rjgarjgY/jgarjgorjgb7jgZnjgIJcbiAqICAgICAgXG4gKiAgICAgIOOBguOBj+OBvuOBp3Rz5LiK44Gu44Ko44Op44O85Zue6YG/44Gn44GX44GL44Gq44GE44Gu44Gn44CB44Op44Oz44K/44Kk44Og44Ko44Op44O844Gr44Gv5rOo5oSP44Gn44GZ44CCXG4gKiAgICAgIOS7peS4i+OBruS+i+OBr+WFqOOBpuODqeODs+OCv+OCpOODoOOBp+OCqOODqeODvOOBjOWHuuOBvuOBmeOAglxuICovXG5jb25zb2xlLmxvZyhleGFtcGxlQ29uc3RWYXJpYWJsZSk7XG5jb25zb2xlLmxvZyhleGFtcGxlTGV0VmFyaWFibGUpO1xuXG5leGFtcGxlRnVuY3Rpb24oKTtcbmV4YW1wbGVGdW5jdGlvbigxKTtcbmV4YW1wbGVGdW5jdGlvbigndGVzdCcpO1xuZXhhbXBsZUZ1bmN0aW9uKDEsIDIsIDMsIDQsIDUpO1xuXG5jb25zdCBleGFtcGxlSW5zdGFuY2UgPSBuZXcgRXhhbXBsZUNsYXNzKCk7XG5leGFtcGxlSW5zdGFuY2UudGVzdCgpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy50ZXN0JykuZXhhbXBsZUpRdWVyeUZ1bmN0aW9uKCd0ZXN0Jyk7XG59KTtcblxuXG4vKipcbiAqICgzKSBFUzbjgavjgaTjgYTjgaZcbiAqICAgICAgRVM244KC5pu444GR44G+44GZ77yIbGV0LCBjb25zdCwgY2xhc3MsIOOCouODreODvOmWouaVsOOBquOBqe+8iVxuICogICAgICDjgrPjg7Pjg5HjgqTjg6vlvozjga9FUzXlkJHjgZHjgavlpInmj5vjgZXjgozjgb7jgZnjgIJcbiAqICAgICAgYXN5bmMsIGF3YWl044Gq44Gp44GvRVM15ZCR44GR44Gr5pu444GL44KM44Gf44Go44GX44Gm44KC5YuV44GL44Gq44GE5aC05ZCI44GM44GC44KL44Gu44Gn44CBXG4gKiAgICAgIOaWsOOBl+OBhOapn+iDveOCkuS9v+OBhuWgtOWQiOOBq+OBr+OAgeODluODqeOCpuOCtuOBruWvvuW/nOeKtuaFi+OCkueiuuOBi+OCgeOBvuOBl+OCh+OBhuOAglxuICovXG5jbGFzcyBNZW1iZXIge1xuICAgIC8vIOOCr+ODqeOCueWkieaVsFxuICAgIHN0YXRpYyBzZXF1ZW5jZUlkOiBudW1iZXIgPSAxO1xuICAgIHN0YXRpYyBkaWdpdElkOiBudW1iZXIgPSA1O1xuXG4gICAgLy8g44Oh44Oz44OQ5aSJ5pWwXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgLy8g44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgY29uc3RydWN0b3IgKG5hbWU6IHN0cmluZz0nR0VTVCcpIHtcbiAgICAgICAgdGhpcy5pZCA9IChNZW1iZXIuc2VxdWVuY2VJZCsrKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8vIOiHquW3see0ueS7i+ODoeOCveODg+ODiVxuICAgIGdldE15RGF0YSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDnp4Hjga7lkI3liY3jga8gWyR7dGhpcy5uYW1lfV0g44Gn44GZ44CCYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGDnp4Hjga5JROOBryBbJHt0aGlzLmlkfV0g44Gn44GZ44CCYCk7XG4gICAgfVxufVxuXG4vLyDjgqTjg7Pjgrnjgr/jg7PjgrnnlJ/miJBcbmNvbnN0IHRhcm86IE1lbWJlciA9IG5ldyBNZW1iZXIoJ3Rhcm8nKTtcbnRhcm8uZ2V0TXlEYXRhKCk7XG5cbmNvbnN0IGhhbmFrbzogTWVtYmVyID0gbmV3IE1lbWJlcignaGFuYWtvJyk7XG5oYW5ha28uZ2V0TXlEYXRhKCk7XG5cbmNvbnN0IGdlc3Q6IE1lbWJlciA9IG5ldyBNZW1iZXIoKTtcbmdlc3QuZ2V0TXlEYXRhKCk7XG5cblxuLyoqXG4gKiAoNCkg5aSW6YOo44Oi44K444Ol44O844Or44Gr44Gk44GE44GmXG4gKiAgICAgIOODouOCuOODpeODvOODq+OCguS9v+OBiOOBvuOBmeOAglxuICogICAgICDku4rlvozjga7jgZPjgajjgoLogIPjgYjjgaZKYXZhU2NyaXB05qiZ5rqW44Gr44Gq44KK44Gd44GG44GqXCJFUzbjg6Ljgrjjg6Xjg7zjg6tcIuOCkuS9v+OBhOOBvuOBme+8iGltcG9ydCwgZXhwb3J0KVxuICovXG4vLyDoqq3jgb/ovrzjgoBcbmltcG9ydCB1dGlsIGZyb20gJy4vbW9kdWxlcy9fdXRpbCc7IC8vIOacrOW9k+OBr+ODmuODvOOCuOOBruacgOS4iumDqOOBp+OBvuOBqOOCgeOBpmltcG9ydOOBl+OBn+aWueOBjOOBhOOBhOOBqOaAneOBhlxuXG4vLyDkvb/jgYZcbmNvbnNvbGUubG9nKHV0aWwuemVyb1BhZGRpbmcoMTIzLCA1KSk7IC8vLT4gXCIwMDEyM1wiXG5jb25zb2xlLmxvZyh1dGlsLnplcm9QYWRkaW5nKCfvvJHvvJLvvJMnLCAxMCwgJ++8kCcpKTsgLy8tPiBcIu+8kO+8kO+8kO+8kO+8kO+8kO+8kO+8ke+8ku+8k1wiXG5jb25zb2xlLmxvZyh1dGlsLmNyZWF0ZVJhbmRvbSgxLCAxMCkpOyAvLy0+IDHjgJwxMOOBruODqeODs+ODgOODoOOBruaVsOWApFxuIiwiLyoqXG4gKiBVdGls6Zai5pWwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiDjgrzjg63oqbDjgoFcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRhcmdldCDlr77osaFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGlnaXQg44K844Ot6Kmw44KB44GZ44KL5qGB5pWwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clplcm8g5Z+L44KB44KL5paH5a2X44CB44OH44OV44Kp44Or44OI44GvJzDvvIjljYrop5LmlbDlrZfjga7jgrzjg63vvIknXG4gICAgICogQHJldHVybiB7c3RyaW5nfSDjgrzjg63oqbDjgoHjgZfjgZ/mloflrZfliJdcbiAgICAgKi9cbiAgICB6ZXJvUGFkZGluZzogKHRhcmdldDogbnVtYmVyfHN0cmluZywgZGlnaXQ6IG51bWJlciwgc3RyWmVybzogc3RyaW5nID0gJzAnKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgemVybzogc3RyaW5nID0gKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0bXA6IHN0cmluZyA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdG1wICs9IHN0clplcm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG1wO1xuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4gKHplcm8gKyB0YXJnZXQudG9TdHJpbmcoKSkuc2xpY2UoLWRpZ2l0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog44Op44Oz44OA44Og44Gu5YCk44KS55Sf5oiQXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiDmnIDlsI/lgKRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4IOacgOWkp+WApFxuICAgICAqIEByZXR1cm4ge251bWJlcn0g5pyA5bCP5YCk44GL44KJ5pyA5aSn5YCk44G+44Gn6ZaT44Gu44Op44Oz44OA44Og44Gu5pWw5YCkXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG9tOiAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSkgKyBtaW47XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=