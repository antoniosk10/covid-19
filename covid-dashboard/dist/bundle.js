/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CountriesList.js":
/*!******************************!*\
  !*** ./src/CountriesList.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map */ "./src/Map.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}




var CountriesList = /*#__PURE__*/function () {
  function CountriesList() {
    _classCallCheck(this, CountriesList);

    this.arrayCountries = Array.prototype.slice.call(document.querySelectorAll('.countries-cases__list-item'));
    this.search = document.querySelector('[data-search-country]');
    this.innerContainer = document.querySelector('.countries-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.countryList = document.querySelector('.countries-cases__list');
  }

  _createClass(CountriesList, [{
    key: "init",
    value: function init() {
      var _this = this;

      _Utils__WEBPACK_IMPORTED_MODULE_0__.default.getCoordinatesCountries().then(function (data) {
        _this.setCountryList(data);
      })["catch"](function () {
        _this.createMessageError();
      });
      this.setEventSearchCountry();
      this.setEventBtnExpand();
      this.setEventItems();
    }
  }, {
    key: "setEventBtnExpand",
    value: function setEventBtnExpand() {
      var _this2 = this;

      this.btnExpand.addEventListener('click', function () {
        _this2.innerContainer.classList.toggle('expanded');
      });
    }
  }, {
    key: "setEventSearchCountry",
    value: function setEventSearchCountry() {
      var _this3 = this;

      this.search.addEventListener('input', function () {
        _this3.filterCountry(_this3.search.value);
      });
    }
  }, {
    key: "filterCountry",
    value: function filterCountry(value) {
      this.arrayCountries = Array.prototype.slice.call(document.querySelectorAll('.countries-cases__list-item'));
      this.showAllCountry();
      this.arrayCountries.forEach(function (el) {
        var countryItem = el;
        var countryName = countryItem.querySelector('.countries-cases__country-name').textContent.trim();

        if (!countryName.match("^".concat(value))) {
          countryItem.style.display = 'none';
        }
      });
    }
  }, {
    key: "showAllCountry",
    value: function showAllCountry() {
      this.arrayCountries.forEach(function (el) {
        var countryItem = el;
        countryItem.style.display = 'flex';
      });
    }
  }, {
    key: "setCountryList",
    value: function setCountryList(data) {
      this.countryList.innerHTML = CountriesList.createCountryList(data);
    }
  }, {
    key: "createMessageError",
    value: function createMessageError() {
      this.countryList.innerHTML = 'Try Later :(';
    }
  }, {
    key: "setEventItems",
    value: function setEventItems() {
      this.countryList.addEventListener('click', function (e) {
        var item = e.target.closest('.countries-cases__list-item');

        if (item) {
          _Map__WEBPACK_IMPORTED_MODULE_1__.default.map.panTo([+item.dataset.lat, +item.dataset["long"]]);
          _Map__WEBPACK_IMPORTED_MODULE_1__.default.map.setZoom(10);
        }
      });
    }
  }], [{
    key: "createCountryList",
    value: function createCountryList(data) {
      var layout = '';
      data.forEach(function (el) {
        layout += "<li class=\"countries-cases__list-item\" data-lat='".concat(el.countryInfo.lat, "' data-long='").concat(el.countryInfo["long"], "'>\n      <span class=\"countries-cases__quantity\">").concat(el.cases, "</span>\n      <span class=\"countries-cases__country-name\">\n      <img class='countries-cases__img' src='").concat(el.countryInfo.flag, "'>\n      ").concat(el.country, "</span>\n      </li>");
      });
      return layout;
    }
  }]);

  return CountriesList;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountriesList);

/***/ }),

/***/ "./src/GlobalCases.js":
/*!****************************!*\
  !*** ./src/GlobalCases.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var GlobalCases = /*#__PURE__*/function () {
  function GlobalCases() {
    _classCallCheck(this, GlobalCases);

    this.innerContainer = document.querySelector('.global-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.globalQuantity = document.querySelector('.global-cases__quantity');
  }

  _createClass(GlobalCases, [{
    key: "init",
    value: function init() {
      var _this = this;

      _Utils__WEBPACK_IMPORTED_MODULE_0__.default.globalInfo().then(function (data) {
        _this.setGlobalCases(data);
      })["catch"](function () {
        _this.createMessageError();
      });
      this.setEventBtnExpand();
    }
  }, {
    key: "setEventBtnExpand",
    value: function setEventBtnExpand() {
      var _this2 = this;

      this.btnExpand.addEventListener('click', function () {
        _this2.innerContainer.classList.toggle('expanded');
      });
    }
  }, {
    key: "setGlobalCases",
    value: function setGlobalCases(data) {
      this.globalQuantity.textContent = data.Global.TotalConfirmed;
    }
  }, {
    key: "createMessageError",
    value: function createMessageError() {
      this.globalQuantity.textContent = 'Try Later :(';
    }
  }]);

  return GlobalCases;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalCases);

/***/ }),

/***/ "./src/Graph.js":
/*!**********************!*\
  !*** ./src/Graph.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _assets_plugins_ChartJS_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/plugins/ChartJS/Chart */ "./src/assets/plugins/ChartJS/Chart.js");
/* harmony import */ var _assets_plugins_ChartJS_Chart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_ChartJS_Chart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}




var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.innerContainer = document.querySelector('.graph .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.period = Graph.getPeriod();
  }

  _createClass(Graph, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.setEventBtnExpand();
      _Utils__WEBPACK_IMPORTED_MODULE_1__.default.getLastFiveCases(this.period[this.period.length - 1], this.period[0]).then(function (data) {
        _this.period.pop();

        _this.period.reverse();

        _this.setGraph(data.map(function (el) {
          return el.NewConfirmed;
        }));
      });
    }
  }, {
    key: "setEventBtnExpand",
    value: function setEventBtnExpand() {
      var _this2 = this;

      this.btnExpand.addEventListener('click', function () {
        _this2.innerContainer.classList.toggle('expanded');

        _this2.chart.canvas.style.maxHeight = "".concat(_this2.innerContainer.offsetHeight, "px");
      });
    }
  }, {
    key: "setGraph",
    value: function setGraph(arrData) {
      var ctx = document.getElementById('myChart').getContext('2d');
      this.chart = new (_assets_plugins_ChartJS_Chart__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {
        type: 'line',
        data: {
          labels: this.period,
          datasets: [{
            label: 'New Cases in the last 5 days',
            data: arrData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        responsive: true
      });
    }
  }], [{
    key: "getPeriod",
    value: function getPeriod() {
      var arrPeriod = [];
      var DAY_IN_MILLISECONDS = 86400000;

      for (var i = 0; i < 6; i += 1) {
        var today = new Date(Date.now() - DAY_IN_MILLISECONDS * i);
        arrPeriod.push("".concat(today.getFullYear(), "-").concat(today.getMonth() + 1, "-").concat(today.getDate()));
      }

      return arrPeriod;
    }
  }]);

  return Graph;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/plugins/Leaflet/leaflet */ "./src/assets/plugins/Leaflet/leaflet.js");
/* harmony import */ var _assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}




var Map = /*#__PURE__*/function () {
  function Map() {
    _classCallCheck(this, Map);

    this.innerContainer = document.querySelector('.map .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.markerImgSrc = './src/assets/images/marker.png';
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.setEventBtnExpand();
      this.createMap();
      _Utils__WEBPACK_IMPORTED_MODULE_1__.default.getCoordinatesCountries().then(function (data) {
        _this.setMarkersMap(data);
      })["catch"](function () {
        _this.createMessageError();
      });
    }
  }, {
    key: "setEventBtnExpand",
    value: function setEventBtnExpand() {
      var _this2 = this;

      this.btnExpand.addEventListener('click', function () {
        _this2.innerContainer.classList.toggle('expanded');

        _this2.map.invalidateSize();
      });
    }
  }, {
    key: "createMap",
    value: function createMap() {
      // eslint-disable-next-line new-cap
      this.map = new (_assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0___default().map)('map', {
        center: [0, 0],
        zoom: 2
      });
      var layer = new (_assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      this.map.addLayer(layer);
    }
  }, {
    key: "setMarkersMap",
    value: function setMarkersMap(data) {
      var _this3 = this;

      data.forEach(function (el) {
        var marker = _assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0___default().marker([el.countryInfo.lat, el.countryInfo["long"]], {
          title: el.country,
          clickable: false,
          draggable: false,
          icon: _assets_plugins_Leaflet_leaflet__WEBPACK_IMPORTED_MODULE_0___default().icon({
            iconUrl: _this3.markerImgSrc,
            iconSize: [50, 50]
          })
        });
        marker.bindPopup("Cases: ".concat(el.cases, " <br> Deaths: ").concat(el.deaths, " <br> Recovered: ").concat(el.recovered, " <br>"));
        marker.addTo(_this3.map);
      });
    }
  }]);

  return Map;
}();

var map = new Map();
map.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ }),

/***/ "./src/TableForTheEntirePeriod.js":
/*!****************************************!*\
  !*** ./src/TableForTheEntirePeriod.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}


var utils = new _Utils__WEBPACK_IMPORTED_MODULE_0__.default();

var Table = /*#__PURE__*/function () {
  function Table() {
    _classCallCheck(this, Table);

    this.populationEarth = 7827000000;
    this.oneHundredThousand = 100000;
    this.innerContainer = document.querySelector('.table .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
  }

  _createClass(Table, [{
    key: "setEventBtnExpand",
    value: function setEventBtnExpand() {
      var _this = this;

      this.btnExpand.addEventListener('click', function () {
        _this.innerContainer.classList.toggle('expanded');
      });
    }
  }, {
    key: "viewData",
    value: function viewData() {
      var tableList = document.querySelector('.table__list');
      this.data = utils.infoForAllPeriod().then(function (data) {
        data.forEach(function (element) {
          var li = document.createElement('li');
          li.className = 'table__list-item';
          li.innerHTML = "<div class=\"table__item table__item--name\">\n            ".concat(element.country, "\n        </div>\n        <div class=\"table__item table__item--cases\">\n          ").concat(element.cases, "\n        </div>\n        <div class=\"table__item table__item--death\">\n            ").concat(element.deaths, "\n        </div>\n        <div class=\"table__item table__item--recovered\">\n          ").concat(element.recovered, "\n        </div>");
          tableList.append(li);
        });
      });
    }
  }, {
    key: "viewDataLastDay",
    value: function viewDataLastDay() {
      var tableList = document.querySelector('.table__list');
      this.data = utils.infoForAllPeriod().then(function (data) {
        data.forEach(function (element) {
          var li = document.createElement('li');
          li.className = 'table__list-item';
          li.innerHTML = "<div class=\"table__item table__item--name\">\n                ".concat(element.country, "\n            </div>\n            <div class=\"table__item table__item--cases\">\n              ").concat(element.todayCases, "\n            </div>\n            <div class=\"table__item table__item--death\">\n                ").concat(element.todayDeaths, "\n            </div>\n            <div class=\"table__item table__item--recovered\">\n              ").concat(element.todayRecovered, "\n            </div>");
          tableList.append(li);
        });
      });
    }
  }, {
    key: "viewDataFor100ThousandAll",
    value: function viewDataFor100ThousandAll() {
      var _this2 = this;

      var tableList = document.querySelector('.table__list');
      this.data = utils.infoForAllPeriod().then(function (data) {
        data.forEach(function (element) {
          var li = document.createElement('li');
          li.className = 'table__list-item';
          li.innerHTML = "<div class=\"table__item table__item--name\">\n          ".concat(element.country, "\n          </div>\n          <div class=\"table__item table__item--cases\">\n            ").concat(Math.round(element.cases * _this2.oneHundredThousand / element.population), "\n          </div>\n          <div class=\"table__item table__item--death\">\n              ").concat(Math.round(element.deaths * _this2.oneHundredThousand / element.population), "\n          </div>\n          <div class=\"table__item table__item--recovered\">\n            ").concat(Math.round(element.recovered * _this2.oneHundredThousand / element.population), "\n          </div>");
          tableList.append(li);
        });
      });
    }
  }, {
    key: "viewDataFor100ThousandLast",
    value: function viewDataFor100ThousandLast() {
      var _this3 = this;

      var tableList = document.querySelector('.table__list');
      this.data = utils.infoForAllPeriod().then(function (data) {
        data.forEach(function (element) {
          var li = document.createElement('li');
          li.className = 'table__list-item';
          li.innerHTML = "<div class=\"table__item table__item--name\">\n          ".concat(element.country, "\n          </div>\n          <div class=\"table__item table__item--cases\">\n            ").concat(Math.round(element.todayCases * _this3.oneHundredThousand / element.population), "\n          </div>\n          <div class=\"table__item table__item--death\">\n              ").concat(Math.round(element.todayDeaths * _this3.oneHundredThousand / element.population), "\n          </div>\n          <div class=\"table__item table__item--recovered\">\n            ").concat(Math.round(element.todayRecovered * _this3.oneHundredThousand / element.population), "\n          </div>");
          tableList.append(li);
        });
      });
    }
  }]);

  return Table;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "infoForAllPeriod",
    value: function infoForAllPeriod() {
      this.url = 'https://corona.lmao.ninja/v2/countries';
      return fetch(this.url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }], [{
    key: "globalInfo",
    value: function globalInfo() {
      return fetch('https://api.covid19api.com/summary').then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getCoordinatesCountries",
    value: function getCoordinatesCountries() {
      return fetch('https://corona.lmao.ninja/v2/countries').then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getLastFiveCases",
    value: function getLastFiveCases(from, to) {
      return fetch("https://api.covid19api.com/world?from=".concat(from, "T00:00:00Z&to=").concat(to, "T00:00:00Z")).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }]);

  return Utils;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./src/assets/plugins/ChartJS/Chart.js":
/*!*********************************************!*\
  !*** ./src/assets/plugins/ChartJS/Chart.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, top-level-this-exports, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 36:3-7 */
/*! CommonJS bailout: exports is used directly at 25:58-65 */
/*! CommonJS bailout: module.exports is used directly at 25:116-130 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */


(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory(function () {
    try {
      return __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch (e) {}
  }()) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
    return factory(function () {
      try {
        return __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      } catch (e) {}
    }());
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (moment) {
  'use strict';

  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace(n) {
    return n && n['default'] || n;
  }

  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  var conversions = createCommonjsModule(function (module) {
    /* MIT license */
    // NOTE: conversions should only return primitive values (i.e. arrays, or
    //       values that give correct `typeof` results).
    //       do not use box values types (i.e. Number(), String(), etc.)
    var reverseKeywords = {};

    for (var key in colorName) {
      if (colorName.hasOwnProperty(key)) {
        reverseKeywords[colorName[key]] = key;
      }
    }

    var convert = module.exports = {
      rgb: {
        channels: 3,
        labels: 'rgb'
      },
      hsl: {
        channels: 3,
        labels: 'hsl'
      },
      hsv: {
        channels: 3,
        labels: 'hsv'
      },
      hwb: {
        channels: 3,
        labels: 'hwb'
      },
      cmyk: {
        channels: 4,
        labels: 'cmyk'
      },
      xyz: {
        channels: 3,
        labels: 'xyz'
      },
      lab: {
        channels: 3,
        labels: 'lab'
      },
      lch: {
        channels: 3,
        labels: 'lch'
      },
      hex: {
        channels: 1,
        labels: ['hex']
      },
      keyword: {
        channels: 1,
        labels: ['keyword']
      },
      ansi16: {
        channels: 1,
        labels: ['ansi16']
      },
      ansi256: {
        channels: 1,
        labels: ['ansi256']
      },
      hcg: {
        channels: 3,
        labels: ['h', 'c', 'g']
      },
      apple: {
        channels: 3,
        labels: ['r16', 'g16', 'b16']
      },
      gray: {
        channels: 1,
        labels: ['gray']
      }
    }; // hide .channels and .labels properties

    for (var model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!('channels' in convert[model])) {
          throw new Error('missing channels property: ' + model);
        }

        if (!('labels' in convert[model])) {
          throw new Error('missing channel labels property: ' + model);
        }

        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error('channel and label counts mismatch: ' + model);
        }

        var channels = convert[model].channels;
        var labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], 'channels', {
          value: channels
        });
        Object.defineProperty(convert[model], 'labels', {
          value: labels
        });
      }
    }

    convert.rgb.hsl = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;

      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }

      h = Math.min(h * 60, 360);

      if (h < 0) {
        h += 360;
      }

      l = (min + max) / 2;

      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }

      return [h, s * 100, l * 100];
    };

    convert.rgb.hsv = function (rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);

      var diffc = function diffc(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };

      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);

        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }

        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }

      return [h * 360, s * 100, v * 100];
    };

    convert.rgb.hwb = function (rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };

    convert.rgb.cmyk = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    /**
     * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
     * */


    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }

    convert.rgb.keyword = function (rgb) {
      var reversed = reverseKeywords[rgb];

      if (reversed) {
        return reversed;
      }

      var currentClosestDistance = Infinity;
      var currentClosestKeyword;

      for (var keyword in colorName) {
        if (colorName.hasOwnProperty(keyword)) {
          var value = colorName[keyword]; // Compute comparative distance

          var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }

      return currentClosestKeyword;
    };

    convert.keyword.rgb = function (keyword) {
      return colorName[keyword];
    };

    convert.rgb.xyz = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255; // assume sRGB

      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };

    convert.rgb.lab = function (rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };

    convert.hsl.rgb = function (hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;

      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }

      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }

      t1 = 2 * l - t2;
      rgb = [0, 0, 0];

      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);

        if (t3 < 0) {
          t3++;
        }

        if (t3 > 1) {
          t3--;
        }

        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }

        rgb[i] = val * 255;
      }

      return rgb;
    };

    convert.hsl.hsv = function (hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };

    convert.hsv.rgb = function (hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;

      switch (hi) {
        case 0:
          return [v, t, p];

        case 1:
          return [q, v, p];

        case 2:
          return [p, v, t];

        case 3:
          return [p, q, v];

        case 4:
          return [t, p, v];

        case 5:
          return [v, p, q];
      }
    };

    convert.hsv.hsl = function (hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    }; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


    convert.hwb.rgb = function (hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n; // wh + bl cant be > 1

      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }

      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;

      if ((i & 0x01) !== 0) {
        f = 1 - f;
      }

      n = wh + f * (v - wh); // linear interpolation

      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;

        case 1:
          r = n;
          g = v;
          b = wh;
          break;

        case 2:
          r = wh;
          g = v;
          b = n;
          break;

        case 3:
          r = wh;
          g = n;
          b = v;
          break;

        case 4:
          r = n;
          g = wh;
          b = v;
          break;

        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }

      return [r * 255, g * 255, b * 255];
    };

    convert.cmyk.rgb = function (cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.rgb = function (xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

      r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
      g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
      b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.lab = function (xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };

    convert.lab.xyz = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };

    convert.lab.lch = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;

      if (h < 0) {
        h += 360;
      }

      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };

    convert.lch.lab = function (lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };

    convert.rgb.ansi16 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

      value = Math.round(value / 50);

      if (value === 0) {
        return 30;
      }

      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

      if (value === 2) {
        ansi += 60;
      }

      return ansi;
    };

    convert.hsv.ansi16 = function (args) {
      // optimization here; we already know the value and don't need to get
      // it converted for us.
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };

    convert.rgb.ansi256 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2]; // we use the extended greyscale palette here, with the exception of
      // black and white. normal palette only has 4 greyscale shades.

      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }

        if (r > 248) {
          return 231;
        }

        return Math.round((r - 8) / 247 * 24) + 232;
      }

      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };

    convert.ansi16.rgb = function (args) {
      var color = args % 10; // handle greyscale

      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }

        color = color / 10.5 * 255;
        return [color, color, color];
      }

      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };

    convert.ansi256.rgb = function (args) {
      // handle greyscale
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }

      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };

    convert.rgb.hex = function (args) {
      var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
      var string = integer.toString(16).toUpperCase();
      return '000000'.substring(string.length) + string;
    };

    convert.hex.rgb = function (args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

      if (!match) {
        return [0, 0, 0];
      }

      var colorString = match[0];

      if (match[0].length === 3) {
        colorString = colorString.split('').map(function (_char) {
          return _char + _char;
        }).join('');
      }

      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 0xFF;
      var g = integer >> 8 & 0xFF;
      var b = integer & 0xFF;
      return [r, g, b];
    };

    convert.rgb.hcg = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;

      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }

      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }

      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };

    convert.hsl.hcg = function (hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;

      if (l < 0.5) {
        c = 2.0 * s * l;
      } else {
        c = 2.0 * s * (1.0 - l);
      }

      if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
      }

      return [hsl[0], c * 100, f * 100];
    };

    convert.hsv.hcg = function (hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;

      if (c < 1.0) {
        f = (v - c) / (1 - c);
      }

      return [hsv[0], c * 100, f * 100];
    };

    convert.hcg.rgb = function (hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;

      if (c === 0.0) {
        return [g * 255, g * 255, g * 255];
      }

      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;

      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;

        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;

        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;

        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;

        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;

        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }

      mg = (1.0 - c) * g;
      return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
    };

    convert.hcg.hsv = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1.0 - c);
      var f = 0;

      if (v > 0.0) {
        f = c / v;
      }

      return [hcg[0], f * 100, v * 100];
    };

    convert.hcg.hsl = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1.0 - c) + 0.5 * c;
      var s = 0;

      if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
      }

      return [hcg[0], s * 100, l * 100];
    };

    convert.hcg.hwb = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1.0 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };

    convert.hwb.hcg = function (hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;

      if (c < 1) {
        g = (v - c) / (1 - c);
      }

      return [hwb[0], c * 100, g * 100];
    };

    convert.apple.rgb = function (apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };

    convert.rgb.apple = function (rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };

    convert.gray.rgb = function (args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };

    convert.gray.hsl = convert.gray.hsv = function (args) {
      return [0, 0, args[0]];
    };

    convert.gray.hwb = function (gray) {
      return [0, 100, gray[0]];
    };

    convert.gray.cmyk = function (gray) {
      return [0, 0, 0, gray[0]];
    };

    convert.gray.lab = function (gray) {
      return [gray[0], 0, 0];
    };

    convert.gray.hex = function (gray) {
      var val = Math.round(gray[0] / 100 * 255) & 0xFF;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return '000000'.substring(string.length) + string;
    };

    convert.rgb.gray = function (rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  });
  var conversions_1 = conversions.rgb;
  var conversions_2 = conversions.hsl;
  var conversions_3 = conversions.hsv;
  var conversions_4 = conversions.hwb;
  var conversions_5 = conversions.cmyk;
  var conversions_6 = conversions.xyz;
  var conversions_7 = conversions.lab;
  var conversions_8 = conversions.lch;
  var conversions_9 = conversions.hex;
  var conversions_10 = conversions.keyword;
  var conversions_11 = conversions.ansi16;
  var conversions_12 = conversions.ansi256;
  var conversions_13 = conversions.hcg;
  var conversions_14 = conversions.apple;
  var conversions_15 = conversions.gray;
  /*
  	this function routes a model to all other models.
  
  	all functions that are routed have a property `.conversion` attached
  	to the returned synthetic function. This property is an array
  	of strings, each with the steps in between the 'from' and 'to'
  	color models (inclusive).
  
  	conversions that are not possible simply are not included.
  */

  function buildGraph() {
    var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

    var models = Object.keys(conversions);

    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }

    return graph;
  } // https://en.wikipedia.org/wiki/Breadth-first_search


  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel]; // unshift -> queue -> pop

    graph[fromModel].distance = 0;

    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);

      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];

        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }

    return graph;
  }

  function link(from, to) {
    return function (args) {
      return to(from(args));
    };
  }

  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;

    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }

    fn.conversion = path;
    return fn;
  }

  var route = function route(fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);

    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];

      if (node.parent === null) {
        // no possible conversion, or this node is the source model.
        continue;
      }

      conversion[toModel] = wrapConversion(toModel, graph);
    }

    return conversion;
  };

  var convert = {};
  var models = Object.keys(conversions);

  function wrapRaw(fn) {
    var wrappedFn = function wrappedFn(args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      return fn(args);
    }; // preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  function wrapRounded(fn) {
    var wrappedFn = function wrappedFn(args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      var result = fn(args); // we're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.

      if (_typeof(result) === 'object') {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }

      return result;
    }; // preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  models.forEach(function (fromModel) {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
      value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
      value: conversions[fromModel].labels
    });
    var routes = route(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function (toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  var colorConvert = convert;
  var colorName$1 = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  /* MIT license */

  var colorString = {
    getRgba: getRgba,
    getHsla: getHsla,
    getRgb: getRgb,
    getHsl: getHsl,
    getHwb: getHwb,
    getAlpha: getAlpha,
    hexString: hexString,
    rgbString: rgbString,
    rgbaString: rgbaString,
    percentString: percentString,
    percentaString: percentaString,
    hslString: hslString,
    hslaString: hslaString,
    hwbString: hwbString,
    keyword: keyword
  };

  function getRgba(string) {
    if (!string) {
      return;
    }

    var abbr = /^#([a-fA-F0-9]{3,4})$/i,
        hex = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
        rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
        per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
        keyword = /(\w+)/;
    var rgb = [0, 0, 0],
        a = 1,
        match = string.match(abbr),
        hexAlpha = "";

    if (match) {
      match = match[1];
      hexAlpha = match[3];

      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }

      if (hexAlpha) {
        a = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
      }
    } else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];

      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }

      if (hexAlpha) {
        a = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
      }
    } else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i + 1]);
      }

      a = parseFloat(match[4]);
    } else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }

      a = parseFloat(match[4]);
    } else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
        return [0, 0, 0, 0];
      }

      rgb = colorName$1[match[1]];

      if (!rgb) {
        return;
      }
    }

    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
    }

    if (!a && a != 0) {
      a = 1;
    } else {
      a = scale(a, 0, 1);
    }

    rgb[3] = a;
    return rgb;
  }

  function getHsla(string) {
    if (!string) {
      return;
    }

    var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hsl);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
  }

  function getHwb(string) {
    if (!string) {
      return;
    }

    var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hwb);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
  }

  function getRgb(string) {
    var rgba = getRgba(string);
    return rgba && rgba.slice(0, 3);
  }

  function getHsl(string) {
    var hsla = getHsla(string);
    return hsla && hsla.slice(0, 3);
  }

  function getAlpha(string) {
    var vals = getRgba(string);

    if (vals) {
      return vals[3];
    } else if (vals = getHsla(string)) {
      return vals[3];
    } else if (vals = getHwb(string)) {
      return vals[3];
    }
  } // generators


  function hexString(rgba, a) {
    var a = a !== undefined && rgba.length === 3 ? a : rgba[3];
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (a >= 0 && a < 1 ? hexDouble(Math.round(a * 255)) : "");
  }

  function rgbString(rgba, alpha) {
    if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return rgbaString(rgba, alpha);
    }

    return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
  }

  function rgbaString(rgba, alpha) {
    if (alpha === undefined) {
      alpha = rgba[3] !== undefined ? rgba[3] : 1;
    }

    return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
  }

  function percentString(rgba, alpha) {
    if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return percentaString(rgba, alpha);
    }

    var r = Math.round(rgba[0] / 255 * 100),
        g = Math.round(rgba[1] / 255 * 100),
        b = Math.round(rgba[2] / 255 * 100);
    return "rgb(" + r + "%, " + g + "%, " + b + "%)";
  }

  function percentaString(rgba, alpha) {
    var r = Math.round(rgba[0] / 255 * 100),
        g = Math.round(rgba[1] / 255 * 100),
        b = Math.round(rgba[2] / 255 * 100);
    return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
  }

  function hslString(hsla, alpha) {
    if (alpha < 1 || hsla[3] && hsla[3] < 1) {
      return hslaString(hsla, alpha);
    }

    return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
  }

  function hslaString(hsla, alpha) {
    if (alpha === undefined) {
      alpha = hsla[3] !== undefined ? hsla[3] : 1;
    }

    return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
  } // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
  // (hwb have alpha optional & 1 is default value)


  function hwbString(hwb, alpha) {
    if (alpha === undefined) {
      alpha = hwb[3] !== undefined ? hwb[3] : 1;
    }

    return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
  }

  function keyword(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  } // helpers


  function scale(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }

  function hexDouble(num) {
    var str = num.toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  } //create a list of reverse color names


  var reverseNames = {};

  for (var name in colorName$1) {
    reverseNames[colorName$1[name]] = name;
  }
  /* MIT license */


  var Color = function Color(obj) {
    if (obj instanceof Color) {
      return obj;
    }

    if (!(this instanceof Color)) {
      return new Color(obj);
    }

    this.valid = false;
    this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }; // parse Color() argument

    var vals;

    if (typeof obj === 'string') {
      vals = colorString.getRgba(obj);

      if (vals) {
        this.setValues('rgb', vals);
      } else if (vals = colorString.getHsla(obj)) {
        this.setValues('hsl', vals);
      } else if (vals = colorString.getHwb(obj)) {
        this.setValues('hwb', vals);
      }
    } else if (_typeof(obj) === 'object') {
      vals = obj;

      if (vals.r !== undefined || vals.red !== undefined) {
        this.setValues('rgb', vals);
      } else if (vals.l !== undefined || vals.lightness !== undefined) {
        this.setValues('hsl', vals);
      } else if (vals.v !== undefined || vals.value !== undefined) {
        this.setValues('hsv', vals);
      } else if (vals.w !== undefined || vals.whiteness !== undefined) {
        this.setValues('hwb', vals);
      } else if (vals.c !== undefined || vals.cyan !== undefined) {
        this.setValues('cmyk', vals);
      }
    }
  };

  Color.prototype = {
    isValid: function isValid() {
      return this.valid;
    },
    rgb: function rgb() {
      return this.setSpace('rgb', arguments);
    },
    hsl: function hsl() {
      return this.setSpace('hsl', arguments);
    },
    hsv: function hsv() {
      return this.setSpace('hsv', arguments);
    },
    hwb: function hwb() {
      return this.setSpace('hwb', arguments);
    },
    cmyk: function cmyk() {
      return this.setSpace('cmyk', arguments);
    },
    rgbArray: function rgbArray() {
      return this.values.rgb;
    },
    hslArray: function hslArray() {
      return this.values.hsl;
    },
    hsvArray: function hsvArray() {
      return this.values.hsv;
    },
    hwbArray: function hwbArray() {
      var values = this.values;

      if (values.alpha !== 1) {
        return values.hwb.concat([values.alpha]);
      }

      return values.hwb;
    },
    cmykArray: function cmykArray() {
      return this.values.cmyk;
    },
    rgbaArray: function rgbaArray() {
      var values = this.values;
      return values.rgb.concat([values.alpha]);
    },
    hslaArray: function hslaArray() {
      var values = this.values;
      return values.hsl.concat([values.alpha]);
    },
    alpha: function alpha(val) {
      if (val === undefined) {
        return this.values.alpha;
      }

      this.setValues('alpha', val);
      return this;
    },
    red: function red(val) {
      return this.setChannel('rgb', 0, val);
    },
    green: function green(val) {
      return this.setChannel('rgb', 1, val);
    },
    blue: function blue(val) {
      return this.setChannel('rgb', 2, val);
    },
    hue: function hue(val) {
      if (val) {
        val %= 360;
        val = val < 0 ? 360 + val : val;
      }

      return this.setChannel('hsl', 0, val);
    },
    saturation: function saturation(val) {
      return this.setChannel('hsl', 1, val);
    },
    lightness: function lightness(val) {
      return this.setChannel('hsl', 2, val);
    },
    saturationv: function saturationv(val) {
      return this.setChannel('hsv', 1, val);
    },
    whiteness: function whiteness(val) {
      return this.setChannel('hwb', 1, val);
    },
    blackness: function blackness(val) {
      return this.setChannel('hwb', 2, val);
    },
    value: function value(val) {
      return this.setChannel('hsv', 2, val);
    },
    cyan: function cyan(val) {
      return this.setChannel('cmyk', 0, val);
    },
    magenta: function magenta(val) {
      return this.setChannel('cmyk', 1, val);
    },
    yellow: function yellow(val) {
      return this.setChannel('cmyk', 2, val);
    },
    black: function black(val) {
      return this.setChannel('cmyk', 3, val);
    },
    hexString: function hexString() {
      return colorString.hexString(this.values.rgb);
    },
    rgbString: function rgbString() {
      return colorString.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function rgbaString() {
      return colorString.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function percentString() {
      return colorString.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function hslString() {
      return colorString.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function hslaString() {
      return colorString.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function hwbString() {
      return colorString.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function keyword() {
      return colorString.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function rgbNumber() {
      var rgb = this.values.rgb;
      return rgb[0] << 16 | rgb[1] << 8 | rgb[2];
    },
    luminosity: function luminosity() {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      var rgb = this.values.rgb;
      var lum = [];

      for (var i = 0; i < rgb.length; i++) {
        var chan = rgb[i] / 255;
        lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast: function contrast(color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();

      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }

      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level: function level(color2) {
      var contrastRatio = this.contrast(color2);

      if (contrastRatio >= 7.1) {
        return 'AAA';
      }

      return contrastRatio >= 4.5 ? 'AA' : '';
    },
    dark: function dark() {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      var rgb = this.values.rgb;
      var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return yiq < 128;
    },
    light: function light() {
      return !this.dark();
    },
    negate: function negate() {
      var rgb = [];

      for (var i = 0; i < 3; i++) {
        rgb[i] = 255 - this.values.rgb[i];
      }

      this.setValues('rgb', rgb);
      return this;
    },
    lighten: function lighten(ratio) {
      var hsl = this.values.hsl;
      hsl[2] += hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    darken: function darken(ratio) {
      var hsl = this.values.hsl;
      hsl[2] -= hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    saturate: function saturate(ratio) {
      var hsl = this.values.hsl;
      hsl[1] += hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    desaturate: function desaturate(ratio) {
      var hsl = this.values.hsl;
      hsl[1] -= hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    whiten: function whiten(ratio) {
      var hwb = this.values.hwb;
      hwb[1] += hwb[1] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
    blacken: function blacken(ratio) {
      var hwb = this.values.hwb;
      hwb[2] += hwb[2] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
    greyscale: function greyscale() {
      var rgb = this.values.rgb; // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale

      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      this.setValues('rgb', [val, val, val]);
      return this;
    },
    clearer: function clearer(ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha - alpha * ratio);
      return this;
    },
    opaquer: function opaquer(ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha + alpha * ratio);
      return this;
    },
    rotate: function rotate(degrees) {
      var hsl = this.values.hsl;
      var hue = (hsl[0] + degrees) % 360;
      hsl[0] = hue < 0 ? 360 + hue : hue;
      this.setValues('hsl', hsl);
      return this;
    },

    /**
     * Ported from sass implementation in C
     * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
     */
    mix: function mix(mixinColor, weight) {
      var color1 = this;
      var color2 = mixinColor;
      var p = weight === undefined ? 0.5 : weight;
      var w = 2 * p - 1;
      var a = color1.alpha() - color2.alpha();
      var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      var w2 = 1 - w1;
      return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
    },
    toJSON: function toJSON() {
      return this.rgb();
    },
    clone: function clone() {
      // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
      // making the final build way to big to embed in Chart.js. So let's do it manually,
      // assuming that values to clone are 1 dimension arrays containing only numbers,
      // except 'alpha' which is a number.
      var result = new Color();
      var source = this.values;
      var target = result.values;
      var value, type;

      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          value = source[prop];
          type = {}.toString.call(value);

          if (type === '[object Array]') {
            target[prop] = value.slice(0);
          } else if (type === '[object Number]') {
            target[prop] = value;
          } else {
            console.error('unexpected color value:', value);
          }
        }
      }

      return result;
    }
  };
  Color.prototype.spaces = {
    rgb: ['red', 'green', 'blue'],
    hsl: ['hue', 'saturation', 'lightness'],
    hsv: ['hue', 'saturation', 'value'],
    hwb: ['hue', 'whiteness', 'blackness'],
    cmyk: ['cyan', 'magenta', 'yellow', 'black']
  };
  Color.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  };

  Color.prototype.getValues = function (space) {
    var values = this.values;
    var vals = {};

    for (var i = 0; i < space.length; i++) {
      vals[space.charAt(i)] = values[space][i];
    }

    if (values.alpha !== 1) {
      vals.a = values.alpha;
    } // {r: 255, g: 255, b: 255, a: 0.4}


    return vals;
  };

  Color.prototype.setValues = function (space, vals) {
    var values = this.values;
    var spaces = this.spaces;
    var maxes = this.maxes;
    var alpha = 1;
    var i;
    this.valid = true;

    if (space === 'alpha') {
      alpha = vals;
    } else if (vals.length) {
      // [10, 10, 10]
      values[space] = vals.slice(0, space.length);
      alpha = vals[space.length];
    } else if (vals[space.charAt(0)] !== undefined) {
      // {r: 10, g: 10, b: 10}
      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[space.charAt(i)];
      }

      alpha = vals.a;
    } else if (vals[spaces[space][0]] !== undefined) {
      // {red: 10, green: 10, blue: 10}
      var chans = spaces[space];

      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[chans[i]];
      }

      alpha = vals.alpha;
    }

    values.alpha = Math.max(0, Math.min(1, alpha === undefined ? values.alpha : alpha));

    if (space === 'alpha') {
      return false;
    }

    var capped; // cap values of the space prior converting all values

    for (i = 0; i < space.length; i++) {
      capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
      values[space][i] = Math.round(capped);
    } // convert to all the other color spaces


    for (var sname in spaces) {
      if (sname !== space) {
        values[sname] = colorConvert[space][sname](values[space]);
      }
    }

    return true;
  };

  Color.prototype.setSpace = function (space, args) {
    var vals = args[0];

    if (vals === undefined) {
      // color.rgb()
      return this.getValues(space);
    } // color.rgb(10, 10, 10)


    if (typeof vals === 'number') {
      vals = Array.prototype.slice.call(args);
    }

    this.setValues(space, vals);
    return this;
  };

  Color.prototype.setChannel = function (space, index, val) {
    var svalues = this.values[space];

    if (val === undefined) {
      // color.red()
      return svalues[index];
    } else if (val === svalues[index]) {
      // color.red(color.red())
      return this;
    } // color.red(100)


    svalues[index] = val;
    this.setValues(space, svalues);
    return this;
  };

  if (typeof window !== 'undefined') {
    window.Color = Color;
  }

  var chartjsColor = Color;

  function isValidKey(key) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
  }
  /**
   * @namespace Chart.helpers
   */


  var helpers = {
    /**
     * An empty function that can be used, for example, for optional callback.
     */
    noop: function noop() {},

    /**
     * Returns a unique id, sequentially generated from a global variable.
     * @returns {number}
     * @function
     */
    uid: function () {
      var id = 0;
      return function () {
        return id++;
      };
    }(),

    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isNullOrUndef: function isNullOrUndef(value) {
      return value === null || typeof value === 'undefined';
    },

    /**
     * Returns true if `value` is an array (including typed arrays), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @function
     */
    isArray: function isArray(value) {
      if (Array.isArray && Array.isArray(value)) {
        return true;
      }

      var type = Object.prototype.toString.call(value);

      if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
        return true;
      }

      return false;
    },

    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isObject: function isObject(value) {
      return value !== null && Object.prototype.toString.call(value) === '[object Object]';
    },

    /**
     * Returns true if `value` is a finite number, else returns false
     * @param {*} value  - The value to test.
     * @returns {boolean}
     */
    isFinite: function (_isFinite) {
      function isFinite(_x) {
        return _isFinite.apply(this, arguments);
      }

      isFinite.toString = function () {
        return _isFinite.toString();
      };

      return isFinite;
    }(function (value) {
      return (typeof value === 'number' || value instanceof Number) && isFinite(value);
    }),

    /**
     * Returns `value` if defined, else returns `defaultValue`.
     * @param {*} value - The value to return if defined.
     * @param {*} defaultValue - The value to return if `value` is undefined.
     * @returns {*}
     */
    valueOrDefault: function valueOrDefault(value, defaultValue) {
      return typeof value === 'undefined' ? defaultValue : value;
    },

    /**
     * Returns value at the given `index` in array if defined, else returns `defaultValue`.
     * @param {Array} value - The array to lookup for value at `index`.
     * @param {number} index - The index in `value` to lookup for value.
     * @param {*} defaultValue - The value to return if `value[index]` is undefined.
     * @returns {*}
     */
    valueAtIndexOrDefault: function valueAtIndexOrDefault(value, index, defaultValue) {
      return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
    },

    /**
     * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
     * value returned by `fn`. If `fn` is not a function, this method returns undefined.
     * @param {function} fn - The function to call.
     * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @returns {*}
     */
    callback: function callback(fn, args, thisArg) {
      if (fn && typeof fn.call === 'function') {
        return fn.apply(thisArg, args);
      }
    },

    /**
     * Note(SB) for performance sake, this method should only be used when loopable type
     * is unknown or in none intensive code (not called often and small loopable). Else
     * it's preferable to use a regular for() loop and save extra function calls.
     * @param {object|Array} loopable - The object or array to be iterated.
     * @param {function} fn - The function to call for each item.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @param {boolean} [reverse] - If true, iterates backward on the loopable.
     */
    each: function each(loopable, fn, thisArg, reverse) {
      var i, len, keys;

      if (helpers.isArray(loopable)) {
        len = loopable.length;

        if (reverse) {
          for (i = len - 1; i >= 0; i--) {
            fn.call(thisArg, loopable[i], i);
          }
        } else {
          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[i], i);
          }
        }
      } else if (helpers.isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;

        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[keys[i]], keys[i]);
        }
      }
    },

    /**
     * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
     * @see https://stackoverflow.com/a/14853974
     * @param {Array} a0 - The array to compare
     * @param {Array} a1 - The array to compare
     * @returns {boolean}
     */
    arrayEquals: function arrayEquals(a0, a1) {
      var i, ilen, v0, v1;

      if (!a0 || !a1 || a0.length !== a1.length) {
        return false;
      }

      for (i = 0, ilen = a0.length; i < ilen; ++i) {
        v0 = a0[i];
        v1 = a1[i];

        if (v0 instanceof Array && v1 instanceof Array) {
          if (!helpers.arrayEquals(v0, v1)) {
            return false;
          }
        } else if (v0 !== v1) {
          // NOTE: two different object instances will never be equal: {x:20} != {x:20}
          return false;
        }
      }

      return true;
    },

    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {*} source - The value to clone.
     * @returns {*}
     */
    clone: function clone(source) {
      if (helpers.isArray(source)) {
        return source.map(helpers.clone);
      }

      if (helpers.isObject(source)) {
        var target = Object.create(source);
        var keys = Object.keys(source);
        var klen = keys.length;
        var k = 0;

        for (; k < klen; ++k) {
          target[keys[k]] = helpers.clone(source[keys[k]]);
        }

        return target;
      }

      return source;
    },

    /**
     * The default merger when Chart.helpers.merge is called without merger option.
     * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
     * @private
     */
    _merger: function _merger(key, target, source, options) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.merge(tval, sval, options);
      } else {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Merges source[key] in target[key] only if target[key] is undefined.
     * @private
     */
    _mergerIf: function _mergerIf(key, target, source) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.mergeIf(tval, sval);
      } else if (!target.hasOwnProperty(key)) {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Recursively deep copies `source` properties into `target` with the given `options`.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @param {object} [options] - Merging options:
     * @param {function} [options.merger] - The merge method (key, target, source, options)
     * @returns {object} The `target` object.
     */
    merge: function merge(target, source, options) {
      var sources = helpers.isArray(source) ? source : [source];
      var ilen = sources.length;
      var merge, i, keys, klen, k;

      if (!helpers.isObject(target)) {
        return target;
      }

      options = options || {};
      merge = options.merger || helpers._merger;

      for (i = 0; i < ilen; ++i) {
        source = sources[i];

        if (!helpers.isObject(source)) {
          continue;
        }

        keys = Object.keys(source);

        for (k = 0, klen = keys.length; k < klen; ++k) {
          merge(keys[k], target, source, options);
        }
      }

      return target;
    },

    /**
     * Recursively deep copies `source` properties into `target` *only* if not defined in target.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @returns {object} The `target` object.
     */
    mergeIf: function mergeIf(target, source) {
      return helpers.merge(target, source, {
        merger: helpers._mergerIf
      });
    },

    /**
     * Applies the contents of two or more objects together into the first object.
     * @param {object} target - The target object in which all objects are merged into.
     * @param {object} arg1 - Object containing additional properties to merge in target.
     * @param {object} argN - Additional objects containing properties to merge in target.
     * @returns {object} The `target` object.
     */
    extend: Object.assign || function (target) {
      return helpers.merge(target, [].slice.call(arguments, 1), {
        merger: function merger(key, dst, src) {
          dst[key] = src[key];
        }
      });
    },

    /**
     * Basic javascript inheritance based on the model created in Backbone.js
     */
    inherits: function inherits(extensions) {
      var me = this;
      var ChartElement = extensions && extensions.hasOwnProperty('constructor') ? extensions.constructor : function () {
        return me.apply(this, arguments);
      };

      var Surrogate = function Surrogate() {
        this.constructor = ChartElement;
      };

      Surrogate.prototype = me.prototype;
      ChartElement.prototype = new Surrogate();
      ChartElement.extend = helpers.inherits;

      if (extensions) {
        helpers.extend(ChartElement.prototype, extensions);
      }

      ChartElement.__super__ = me.prototype;
      return ChartElement;
    },
    _deprecated: function _deprecated(scope, value, previous, current) {
      if (value !== undefined) {
        console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
      }
    }
  };
  var helpers_core = helpers; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.callback instead.
   * @function Chart.helpers.callCallback
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */

  helpers.callCallback = helpers.callback;
  /**
   * Provided for backward compatibility, use Array.prototype.indexOf instead.
   * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
   * @function Chart.helpers.indexOf
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers.indexOf = function (array, item, fromIndex) {
    return Array.prototype.indexOf.call(array, item, fromIndex);
  };
  /**
   * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
   * @function Chart.helpers.getValueOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */


  helpers.getValueOrDefault = helpers.valueOrDefault;
  /**
   * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
   * @function Chart.helpers.getValueAtIndexOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
  /**
   * Easing functions adapted from Robert Penner's easing equations.
   * @namespace Chart.helpers.easingEffects
   * @see http://www.robertpenner.com/easing/
   */

  var effects = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t;
      }

      return -0.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t = t - 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t;
      }

      return 0.5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t = t - 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t;
      }

      return -0.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t = t - 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t * t;
      }

      return 0.5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return -Math.cos(t * (Math.PI / 2)) + 1;
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    easeInOutExpo: function easeInOutExpo(t) {
      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if ((t /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (t - 1));
      }

      return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function easeInCirc(t) {
      if (t >= 1) {
        return t;
      }

      return -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t = t - 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      if ((t /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if (!p) {
        p = 0.3;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function easeOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if (!p) {
        p = 0.3;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if ((t /= 0.5) === 2) {
        return 1;
      }

      if (!p) {
        p = 0.45;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
      }

      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    easeInBack: function easeInBack(t) {
      var s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
    easeOutBack: function easeOutBack(t) {
      var s = 1.70158;
      return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;

      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }

      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - effects.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      }

      if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
      }

      if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
      }

      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      if (t < 0.5) {
        return effects.easeInBounce(t * 2) * 0.5;
      }

      return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
    }
  };
  var helpers_easing = {
    effects: effects
  }; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
   * @function Chart.helpers.easingEffects
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.easingEffects = effects;
  var PI = Math.PI;
  var RAD_PER_DEG = PI / 180;
  var DOUBLE_PI = PI * 2;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  /**
   * @namespace Chart.helpers.canvas
   */

  var exports$1 = {
    /**
     * Clears the entire canvas associated to the given `chart`.
     * @param {Chart} chart - The chart for which to clear the canvas.
     */
    clear: function clear(chart) {
      chart.ctx.clearRect(0, 0, chart.width, chart.height);
    },

    /**
     * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
     * given size (width, height) and the same `radius` for all corners.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
     * @param {number} x - The x axis of the coordinate for the rectangle starting point.
     * @param {number} y - The y axis of the coordinate for the rectangle starting point.
     * @param {number} width - The rectangle's width.
     * @param {number} height - The rectangle's height.
     * @param {number} radius - The rounded amount (in pixels) for the four corners.
     * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
     */
    roundedRect: function roundedRect(ctx, x, y, width, height, radius) {
      if (radius) {
        var r = Math.min(radius, height / 2, width / 2);
        var left = x + r;
        var top = y + r;
        var right = x + width - r;
        var bottom = y + height - r;
        ctx.moveTo(x, top);

        if (left < right && top < bottom) {
          ctx.arc(left, top, r, -PI, -HALF_PI);
          ctx.arc(right, top, r, -HALF_PI, 0);
          ctx.arc(right, bottom, r, 0, HALF_PI);
          ctx.arc(left, bottom, r, HALF_PI, PI);
        } else if (left < right) {
          ctx.moveTo(left, y);
          ctx.arc(right, top, r, -HALF_PI, HALF_PI);
          ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
        } else if (top < bottom) {
          ctx.arc(left, top, r, -PI, 0);
          ctx.arc(left, bottom, r, 0, PI);
        } else {
          ctx.arc(left, top, r, -PI, PI);
        }

        ctx.closePath();
        ctx.moveTo(x, y);
      } else {
        ctx.rect(x, y, width, height);
      }
    },
    drawPoint: function drawPoint(ctx, style, radius, x, y, rotation) {
      var type, xOffset, yOffset, size, cornerRadius;
      var rad = (rotation || 0) * RAD_PER_DEG;

      if (style && _typeof(style) === 'object') {
        type = style.toString();

        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rad);
          ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
          ctx.restore();
          return;
        }
      }

      if (isNaN(radius) || radius <= 0) {
        return;
      }

      ctx.beginPath();

      switch (style) {
        // Default includes circle
        default:
          ctx.arc(x, y, radius, 0, DOUBLE_PI);
          ctx.closePath();
          break;

        case 'triangle':
          ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          ctx.closePath();
          break;

        case 'rectRounded':
          // NOTE: the rounded rect implementation changed to use `arc` instead of
          // `quadraticCurveTo` since it generates better results when rect is
          // almost a circle. 0.516 (instead of 0.5) produces results with visually
          // closer proportion to the previous impl and it is inscribed in the
          // circle with `radius`. For more details, see the following PRs:
          // https://github.com/chartjs/Chart.js/issues/5597
          // https://github.com/chartjs/Chart.js/issues/5858
          cornerRadius = radius * 0.516;
          size = radius - cornerRadius;
          xOffset = Math.cos(rad + QUARTER_PI) * size;
          yOffset = Math.sin(rad + QUARTER_PI) * size;
          ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
          ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
          ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
          ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
          ctx.closePath();
          break;

        case 'rect':
          if (!rotation) {
            size = Math.SQRT1_2 * radius;
            ctx.rect(x - size, y - size, 2 * size, 2 * size);
            break;
          }

          rad += QUARTER_PI;

        /* falls through */

        case 'rectRot':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + yOffset, y - xOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          ctx.closePath();
          break;

        case 'crossRot':
          rad += QUARTER_PI;

        /* falls through */

        case 'cross':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;

        case 'star':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          rad += QUARTER_PI;
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;

        case 'line':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          break;

        case 'dash':
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
          break;
      }

      ctx.fill();
      ctx.stroke();
    },

    /**
     * Returns true if the point is inside the rectangle
     * @param {object} point - The point to test
     * @param {object} area - The rectangle
     * @returns {boolean}
     * @private
     */
    _isPointInArea: function _isPointInArea(point, area) {
      var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

      return point.x > area.left - epsilon && point.x < area.right + epsilon && point.y > area.top - epsilon && point.y < area.bottom + epsilon;
    },
    clipArea: function clipArea(ctx, area) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
      ctx.clip();
    },
    unclipArea: function unclipArea(ctx) {
      ctx.restore();
    },
    lineTo: function lineTo(ctx, previous, target, flip) {
      var stepped = target.steppedLine;

      if (stepped) {
        if (stepped === 'middle') {
          var midpoint = (previous.x + target.x) / 2.0;
          ctx.lineTo(midpoint, flip ? target.y : previous.y);
          ctx.lineTo(midpoint, flip ? previous.y : target.y);
        } else if (stepped === 'after' && !flip || stepped !== 'after' && flip) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }

        ctx.lineTo(target.x, target.y);
        return;
      }

      if (!target.tension) {
        ctx.lineTo(target.x, target.y);
        return;
      }

      ctx.bezierCurveTo(flip ? previous.controlPointPreviousX : previous.controlPointNextX, flip ? previous.controlPointPreviousY : previous.controlPointNextY, flip ? target.controlPointNextX : target.controlPointPreviousX, flip ? target.controlPointNextY : target.controlPointPreviousY, target.x, target.y);
    }
  };
  var helpers_canvas = exports$1; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
   * @namespace Chart.helpers.clear
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.clear = exports$1.clear;
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
   * @namespace Chart.helpers.drawRoundedRectangle
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.drawRoundedRectangle = function (ctx) {
    ctx.beginPath();
    exports$1.roundedRect.apply(exports$1, arguments);
  };

  var defaults = {
    /**
     * @private
     */
    _set: function _set(scope, values) {
      return helpers_core.merge(this[scope] || (this[scope] = {}), values);
    }
  }; // TODO(v3): remove 'global' from namespace.  all default are global and
  // there's inconsistency around which options are under 'global'

  defaults._set('global', {
    defaultColor: 'rgba(0,0,0,0.1)',
    defaultFontColor: '#666',
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: 'normal',
    defaultLineHeight: 1.2,
    showLines: true
  });

  var core_defaults = defaults;
  var valueOrDefault = helpers_core.valueOrDefault;
  /**
   * Converts the given font object into a CSS font string.
   * @param {object} font - A font object.
   * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
   * @private
   */

  function toFontString(font) {
    if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
      return null;
    }

    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
  }
  /**
   * @alias Chart.helpers.options
   * @namespace
   */


  var helpers_options = {
    /**
     * Converts the given line height `value` in pixels for a specific font `size`.
     * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
     * @param {number} size - The font size (in pixels) used to resolve relative `value`.
     * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @since 2.7.0
     */
    toLineHeight: function toLineHeight(value, size) {
      var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

      if (!matches || matches[1] === 'normal') {
        return size * 1.2;
      }

      value = +matches[2];

      switch (matches[3]) {
        case 'px':
          return value;

        case '%':
          value /= 100;
          break;
      }

      return size * value;
    },

    /**
     * Converts the given value into a padding object with pre-computed width/height.
     * @param {number|object} value - If a number, set the value to all TRBL component,
     *  else, if and object, use defined properties and sets undefined ones to 0.
     * @returns {object} The padding values (top, right, bottom, left, width, height)
     * @since 2.7.0
     */
    toPadding: function toPadding(value) {
      var t, r, b, l;

      if (helpers_core.isObject(value)) {
        t = +value.top || 0;
        r = +value.right || 0;
        b = +value.bottom || 0;
        l = +value.left || 0;
      } else {
        t = r = b = l = +value || 0;
      }

      return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        height: t + b,
        width: l + r
      };
    },

    /**
     * Parses font options and returns the font object.
     * @param {object} options - A object that contains font options to be parsed.
     * @return {object} The font object.
     * @todo Support font.* options and renamed to toFont().
     * @private
     */
    _parseFont: function _parseFont(options) {
      var globalDefaults = core_defaults.global;
      var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
      var font = {
        family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
        lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
        size: size,
        style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
        weight: null,
        string: ''
      };
      font.string = toFontString(font);
      return font;
    },

    /**
     * Evaluates the given `inputs` sequentially and returns the first defined value.
     * @param {Array} inputs - An array of values, falling back to the last value.
     * @param {object} [context] - If defined and the current value is a function, the value
     * is called with `context` as first argument and the result becomes the new input.
     * @param {number} [index] - If defined and the current value is an array, the value
     * at `index` become the new input.
     * @param {object} [info] - object to return information about resolution in
     * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
     * @since 2.7.0
     */
    resolve: function resolve(inputs, context, index, info) {
      var cacheable = true;
      var i, ilen, value;

      for (i = 0, ilen = inputs.length; i < ilen; ++i) {
        value = inputs[i];

        if (value === undefined) {
          continue;
        }

        if (context !== undefined && typeof value === 'function') {
          value = value(context);
          cacheable = false;
        }

        if (index !== undefined && helpers_core.isArray(value)) {
          value = value[index];
          cacheable = false;
        }

        if (value !== undefined) {
          if (info && !cacheable) {
            info.cacheable = false;
          }

          return value;
        }
      }
    }
  };
  /**
   * @alias Chart.helpers.math
   * @namespace
   */

  var exports$2 = {
    /**
     * Returns an array of factors sorted from 1 to sqrt(value)
     * @private
     */
    _factorize: function _factorize(value) {
      var result = [];
      var sqrt = Math.sqrt(value);
      var i;

      for (i = 1; i < sqrt; i++) {
        if (value % i === 0) {
          result.push(i);
          result.push(value / i);
        }
      }

      if (sqrt === (sqrt | 0)) {
        // if value is a square number
        result.push(sqrt);
      }

      result.sort(function (a, b) {
        return a - b;
      }).pop();
      return result;
    },
    log10: Math.log10 || function (x) {
      var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
      // Check for whole powers of 10,
      // which due to floating point rounding error should be corrected.

      var powerOf10 = Math.round(exponent);
      var isPowerOf10 = x === Math.pow(10, powerOf10);
      return isPowerOf10 ? powerOf10 : exponent;
    }
  };
  var helpers_math = exports$2; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
   * @namespace Chart.helpers.log10
   * @deprecated since version 2.9.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.log10 = exports$2.log10;

  var getRtlAdapter = function getRtlAdapter(rectX, width) {
    return {
      x: function x(_x2) {
        return rectX + rectX + width - _x2;
      },
      setWidth: function setWidth(w) {
        width = w;
      },
      textAlign: function textAlign(align) {
        if (align === 'center') {
          return align;
        }

        return align === 'right' ? 'left' : 'right';
      },
      xPlus: function xPlus(x, value) {
        return x - value;
      },
      leftForLtr: function leftForLtr(x, itemWidth) {
        return x - itemWidth;
      }
    };
  };

  var getLtrAdapter = function getLtrAdapter() {
    return {
      x: function x(_x3) {
        return _x3;
      },
      setWidth: function setWidth(w) {// eslint-disable-line no-unused-vars
      },
      textAlign: function textAlign(align) {
        return align;
      },
      xPlus: function xPlus(x, value) {
        return x + value;
      },
      leftForLtr: function leftForLtr(x, _itemWidth) {
        // eslint-disable-line no-unused-vars
        return x;
      }
    };
  };

  var getAdapter = function getAdapter(rtl, rectX, width) {
    return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
  };

  var overrideTextDirection = function overrideTextDirection(ctx, direction) {
    var style, original;

    if (direction === 'ltr' || direction === 'rtl') {
      style = ctx.canvas.style;
      original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
      style.setProperty('direction', direction, 'important');
      ctx.prevTextDirection = original;
    }
  };

  var restoreTextDirection = function restoreTextDirection(ctx) {
    var original = ctx.prevTextDirection;

    if (original !== undefined) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
  };

  var helpers_rtl = {
    getRtlAdapter: getAdapter,
    overrideTextDirection: overrideTextDirection,
    restoreTextDirection: restoreTextDirection
  };
  var helpers$1 = helpers_core;
  var easing = helpers_easing;
  var canvas = helpers_canvas;
  var options = helpers_options;
  var math = helpers_math;
  var rtl = helpers_rtl;
  helpers$1.easing = easing;
  helpers$1.canvas = canvas;
  helpers$1.options = options;
  helpers$1.math = math;
  helpers$1.rtl = rtl;

  function interpolate(start, view, model, ease) {
    var keys = Object.keys(model);
    var i, ilen, key, actual, origin, target, type, c0, c1;

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      target = model[key]; // if a value is added to the model after pivot() has been called, the view
      // doesn't contain it, so let's initialize the view to the target value.

      if (!view.hasOwnProperty(key)) {
        view[key] = target;
      }

      actual = view[key];

      if (actual === target || key[0] === '_') {
        continue;
      }

      if (!start.hasOwnProperty(key)) {
        start[key] = actual;
      }

      origin = start[key];
      type = _typeof(target);

      if (type === _typeof(origin)) {
        if (type === 'string') {
          c0 = chartjsColor(origin);

          if (c0.valid) {
            c1 = chartjsColor(target);

            if (c1.valid) {
              view[key] = c1.mix(c0, ease).rgbString();
              continue;
            }
          }
        } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
          view[key] = origin + (target - origin) * ease;
          continue;
        }
      }

      view[key] = target;
    }
  }

  var Element = function Element(configuration) {
    helpers$1.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };

  helpers$1.extend(Element.prototype, {
    _type: undefined,
    initialize: function initialize() {
      this.hidden = false;
    },
    pivot: function pivot() {
      var me = this;

      if (!me._view) {
        me._view = helpers$1.extend({}, me._model);
      }

      me._start = {};
      return me;
    },
    transition: function transition(ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view; // No animation -> No Transition

      if (!model || ease === 1) {
        me._view = helpers$1.extend({}, model);
        me._start = null;
        return me;
      }

      if (!view) {
        view = me._view = {};
      }

      if (!start) {
        start = me._start = {};
      }

      interpolate(start, view, model, ease);
      return me;
    },
    tooltipPosition: function tooltipPosition() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function hasValue() {
      return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
    }
  });
  Element.extend = helpers$1.inherits;
  var core_element = Element;
  var exports$3 = core_element.extend({
    chart: null,
    // the animation associated chart instance
    currentStep: 0,
    // the current animation step
    numSteps: 60,
    // default number of steps
    easing: '',
    // the easing to use for this animation
    render: null,
    // render function used by the animation service
    onAnimationProgress: null,
    // user specified callback to fire on each step of the animation
    onAnimationComplete: null // user specified callback to fire when the animation finishes

  });
  var core_animation = exports$3; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.Animation instead
   * @prop Chart.Animation#animationObject
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */

  Object.defineProperty(exports$3.prototype, 'animationObject', {
    get: function get() {
      return this;
    }
  });
  /**
   * Provided for backward compatibility, use Chart.Animation#chart instead
   * @prop Chart.Animation#chartInstance
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */

  Object.defineProperty(exports$3.prototype, 'chartInstance', {
    get: function get() {
      return this.chart;
    },
    set: function set(value) {
      this.chart = value;
    }
  });

  core_defaults._set('global', {
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
      onProgress: helpers$1.noop,
      onComplete: helpers$1.noop
    }
  });

  var core_animations = {
    animations: [],
    request: null,

    /**
     * @param {Chart} chart - The chart to animate.
     * @param {Chart.Animation} animation - The animation that we will animate.
     * @param {number} duration - The animation duration in ms.
     * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
     */
    addAnimation: function addAnimation(chart, animation, duration, lazy) {
      var animations = this.animations;
      var i, ilen;
      animation.chart = chart;
      animation.startTime = Date.now();
      animation.duration = duration;

      if (!lazy) {
        chart.animating = true;
      }

      for (i = 0, ilen = animations.length; i < ilen; ++i) {
        if (animations[i].chart === chart) {
          animations[i] = animation;
          return;
        }
      }

      animations.push(animation); // If there are no animations queued, manually kickstart a digest, for lack of a better word

      if (animations.length === 1) {
        this.requestAnimationFrame();
      }
    },
    cancelAnimation: function cancelAnimation(chart) {
      var index = helpers$1.findIndex(this.animations, function (animation) {
        return animation.chart === chart;
      });

      if (index !== -1) {
        this.animations.splice(index, 1);
        chart.animating = false;
      }
    },
    requestAnimationFrame: function requestAnimationFrame() {
      var me = this;

      if (me.request === null) {
        // Skip animation frame requests until the active one is executed.
        // This can happen when processing mouse events, e.g. 'mousemove'
        // and 'mouseout' events will trigger multiple renders.
        me.request = helpers$1.requestAnimFrame.call(window, function () {
          me.request = null;
          me.startDigest();
        });
      }
    },

    /**
     * @private
     */
    startDigest: function startDigest() {
      var me = this;
      me.advance(); // Do we have more stuff to animate?

      if (me.animations.length > 0) {
        me.requestAnimationFrame();
      }
    },

    /**
     * @private
     */
    advance: function advance() {
      var animations = this.animations;
      var animation, chart, numSteps, nextStep;
      var i = 0; // 1 animation per chart, so we are looping charts here

      while (i < animations.length) {
        animation = animations[i];
        chart = animation.chart;
        numSteps = animation.numSteps; // Make sure that currentStep starts at 1
        // https://github.com/chartjs/Chart.js/issues/6104

        nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
        animation.currentStep = Math.min(nextStep, numSteps);
        helpers$1.callback(animation.render, [chart, animation], chart);
        helpers$1.callback(animation.onAnimationProgress, [animation], chart);

        if (animation.currentStep >= numSteps) {
          helpers$1.callback(animation.onAnimationComplete, [animation], chart);
          chart.animating = false;
          animations.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  };
  var resolve = helpers$1.options.resolve;
  var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
  /**
   * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
   * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
   * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
   */

  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);

      return;
    }

    Object.defineProperty(array, '_chartjs', {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });
    arrayEvents.forEach(function (key) {
      var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
      var base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function value() {
          var args = Array.prototype.slice.call(arguments);
          var res = base.apply(this, args);
          helpers$1.each(array._chartjs.listeners, function (object) {
            if (typeof object[method] === 'function') {
              object[method].apply(object, args);
            }
          });
          return res;
        }
      });
    });
  }
  /**
   * Removes the given array event listener and cleanup extra attached properties (such as
   * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
   */


  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;

    if (!stub) {
      return;
    }

    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length > 0) {
      return;
    }

    arrayEvents.forEach(function (key) {
      delete array[key];
    });
    delete array._chartjs;
  } // Base class for all dataset controllers (line, bar, etc)


  var DatasetController = function DatasetController(chart, datasetIndex) {
    this.initialize(chart, datasetIndex);
  };

  helpers$1.extend(DatasetController.prototype, {
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.Line).
     * @type {Chart.core.element}
     */
    datasetElementType: null,

    /**
     * Element type used to generate a meta data (e.g. Chart.element.Point).
     * @type {Chart.core.element}
     */
    dataElementType: null,

    /**
     * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'],

    /**
     * Data element option keys to be resolved in _resolveDataElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
    initialize: function initialize(chart, datasetIndex) {
      var me = this;
      me.chart = chart;
      me.index = datasetIndex;
      me.linkScales();
      me.addElements();
      me._type = me.getMeta().type;
    },
    updateIndex: function updateIndex(datasetIndex) {
      this.index = datasetIndex;
    },
    linkScales: function linkScales() {
      var me = this;
      var meta = me.getMeta();
      var chart = me.chart;
      var scales = chart.scales;
      var dataset = me.getDataset();
      var scalesOpts = chart.options.scales;

      if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
        meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
      }

      if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
        meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
      }
    },
    getDataset: function getDataset() {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    },

    /**
     * @private
     */
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().yAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getValueScale: function _getValueScale() {
      return this.getScaleForId(this._getValueScaleId());
    },

    /**
     * @private
     */
    _getIndexScale: function _getIndexScale() {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function reset() {
      this._update(true);
    },

    /**
     * @private
     */
    destroy: function destroy() {
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
    },
    createMetaDataset: function createMetaDataset() {
      var me = this;
      var type = me.datasetElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index
      });
    },
    createMetaData: function createMetaData(index) {
      var me = this;
      var type = me.dataElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index,
        _index: index
      });
    },
    addElements: function addElements() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data || [];
      var metaData = meta.data;
      var i, ilen;

      for (i = 0, ilen = data.length; i < ilen; ++i) {
        metaData[i] = metaData[i] || me.createMetaData(i);
      }

      meta.dataset = meta.dataset || me.createMetaDataset();
    },
    addElementAndReset: function addElementAndReset(index) {
      var element = this.createMetaData(index);
      this.getMeta().data.splice(index, 0, element);
      this.updateElement(element, index, true);
    },
    buildOrUpdateElements: function buildOrUpdateElements() {
      var me = this;
      var dataset = me.getDataset();
      var data = dataset.data || (dataset.data = []); // In order to correctly handle data addition/deletion animation (an thus simulate
      // real-time charts), we need to monitor these data modifications and synchronize
      // the internal meta data accordingly.

      if (me._data !== data) {
        if (me._data) {
          // This case happens when the user replaced the data array instance.
          unlistenArrayEvents(me._data, me);
        }

        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, me);
        }

        me._data = data;
      } // Re-sync meta data in case the user replaced the data array or if we missed
      // any updates and so make sure that we handle number of datapoints changing.


      me.resyncElements();
    },

    /**
     * Returns the merged user-supplied and default dataset-level options
     * @private
     */
    _configure: function _configure() {
      var me = this;
      me._config = helpers$1.merge(Object.create(null), [me.chart.options.datasets[me._type], me.getDataset()], {
        merger: function merger(key, target, source) {
          if (key !== '_meta' && key !== 'data') {
            helpers$1._merger(key, target, source);
          }
        }
      });
    },
    _update: function _update(reset) {
      var me = this;

      me._configure();

      me._cachedDataOpts = null;
      me.update(reset);
    },
    update: helpers$1.noop,
    transition: function transition(easingValue) {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      for (; i < ilen; ++i) {
        elements[i].transition(easingValue);
      }

      if (meta.dataset) {
        meta.dataset.transition(easingValue);
      }
    },
    draw: function draw() {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      if (meta.dataset) {
        meta.dataset.draw();
      }

      for (; i < ilen; ++i) {
        elements[i].draw();
      }
    },

    /**
     * Returns a set of predefined style properties that should be used to represent the dataset
     * or the data if the index is specified
     * @param {number} index - data index
     * @return {IStyleInterface} style object
     */
    getStyle: function getStyle(index) {
      var me = this;
      var meta = me.getMeta();
      var dataset = meta.dataset;
      var style;

      me._configure();

      if (dataset && index === undefined) {
        style = me._resolveDatasetElementOptions(dataset || {});
      } else {
        index = index || 0;
        style = me._resolveDataElementOptions(meta.data[index] || {}, index);
      }

      if (style.fill === false || style.fill === null) {
        style.backgroundColor = style.borderColor;
      }

      return style;
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions(element, hover) {
      var me = this;
      var chart = me.chart;
      var datasetOpts = me._config;
      var custom = element.custom || {};
      var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
      var elementOptions = me._datasetElementOptions;
      var values = {};
      var i, ilen, key, readKey; // Scriptable options

      var context = {
        chart: chart,
        dataset: me.getDataset(),
        datasetIndex: me.index,
        hover: hover
      };

      for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
        key = elementOptions[i];
        readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
        values[key] = resolve([custom[readKey], datasetOpts[readKey], options[readKey]], context);
      }

      return values;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function _resolveDataElementOptions(element, index) {
      var me = this;
      var custom = element && element.custom;
      var cached = me._cachedDataOpts;

      if (cached && !custom) {
        return cached;
      }

      var chart = me.chart;
      var datasetOpts = me._config;
      var options = chart.options.elements[me.dataElementType.prototype._type] || {};
      var elementOptions = me._dataElementOptions;
      var values = {}; // Scriptable options

      var context = {
        chart: chart,
        dataIndex: index,
        dataset: me.getDataset(),
        datasetIndex: me.index
      }; // `resolve` sets cacheable to `false` if any option is indexed or scripted

      var info = {
        cacheable: !custom
      };
      var keys, i, ilen, key;
      custom = custom || {};

      if (helpers$1.isArray(elementOptions)) {
        for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
          key = elementOptions[i];
          values[key] = resolve([custom[key], datasetOpts[key], options[key]], context, index, info);
        }
      } else {
        keys = Object.keys(elementOptions);

        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          values[key] = resolve([custom[key], datasetOpts[elementOptions[key]], datasetOpts[key], options[key]], context, index, info);
        }
      }

      if (info.cacheable) {
        me._cachedDataOpts = Object.freeze(values);
      }

      return values;
    },
    removeHoverStyle: function removeHoverStyle(element) {
      helpers$1.merge(element._model, element.$previousStyle || {});
      delete element.$previousStyle;
    },
    setHoverStyle: function setHoverStyle(element) {
      var dataset = this.chart.data.datasets[element._datasetIndex];
      var index = element._index;
      var custom = element.custom || {};
      var model = element._model;
      var getHoverColor = helpers$1.getHoverColor;
      element.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
      model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
      model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
    },

    /**
     * @private
     */
    _removeDatasetHoverStyle: function _removeDatasetHoverStyle() {
      var element = this.getMeta().dataset;

      if (element) {
        this.removeHoverStyle(element);
      }
    },

    /**
     * @private
     */
    _setDatasetHoverStyle: function _setDatasetHoverStyle() {
      var element = this.getMeta().dataset;
      var prev = {};
      var i, ilen, key, keys, hoverOptions, model;

      if (!element) {
        return;
      }

      model = element._model;
      hoverOptions = this._resolveDatasetElementOptions(element, true);
      keys = Object.keys(hoverOptions);

      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        prev[key] = model[key];
        model[key] = hoverOptions[key];
      }

      element.$previousStyle = prev;
    },

    /**
     * @private
     */
    resyncElements: function resyncElements() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data;
      var numMeta = meta.data.length;
      var numData = data.length;

      if (numData < numMeta) {
        meta.data.splice(numData, numMeta - numData);
      } else if (numData > numMeta) {
        me.insertElements(numMeta, numData - numMeta);
      }
    },

    /**
     * @private
     */
    insertElements: function insertElements(start, count) {
      for (var i = 0; i < count; ++i) {
        this.addElementAndReset(start + i);
      }
    },

    /**
     * @private
     */
    onDataPush: function onDataPush() {
      var count = arguments.length;
      this.insertElements(this.getDataset().data.length - count, count);
    },

    /**
     * @private
     */
    onDataPop: function onDataPop() {
      this.getMeta().data.pop();
    },

    /**
     * @private
     */
    onDataShift: function onDataShift() {
      this.getMeta().data.shift();
    },

    /**
     * @private
     */
    onDataSplice: function onDataSplice(start, count) {
      this.getMeta().data.splice(start, count);
      this.insertElements(start, arguments.length - 2);
    },

    /**
     * @private
     */
    onDataUnshift: function onDataUnshift() {
      this.insertElements(0, arguments.length);
    }
  });
  DatasetController.extend = helpers$1.inherits;
  var core_datasetController = DatasetController;
  var TAU = Math.PI * 2;

  core_defaults._set('global', {
    elements: {
      arc: {
        backgroundColor: core_defaults.global.defaultColor,
        borderColor: '#fff',
        borderWidth: 2,
        borderAlign: 'center'
      }
    }
  });

  function clipArc(ctx, arc) {
    var startAngle = arc.startAngle;
    var endAngle = arc.endAngle;
    var pixelMargin = arc.pixelMargin;
    var angleMargin = pixelMargin / arc.outerRadius;
    var x = arc.x;
    var y = arc.y; // Draw an inner border by cliping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders

    ctx.beginPath();
    ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);

    if (arc.innerRadius > pixelMargin) {
      angleMargin = pixelMargin / arc.innerRadius;
      ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
    }

    ctx.closePath();
    ctx.clip();
  }

  function drawFullCircleBorders(ctx, vm, arc, inner) {
    var endAngle = arc.endAngle;
    var i;

    if (inner) {
      arc.endAngle = arc.startAngle + TAU;
      clipArc(ctx, arc);
      arc.endAngle = endAngle;

      if (arc.endAngle === arc.startAngle && arc.fullCircles) {
        arc.endAngle += TAU;
        arc.fullCircles--;
      }
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);

    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);

    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }
  }

  function drawBorder(ctx, vm, arc) {
    var inner = vm.borderAlign === 'inner';

    if (inner) {
      ctx.lineWidth = vm.borderWidth * 2;
      ctx.lineJoin = 'round';
    } else {
      ctx.lineWidth = vm.borderWidth;
      ctx.lineJoin = 'bevel';
    }

    if (arc.fullCircles) {
      drawFullCircleBorders(ctx, vm, arc, inner);
    }

    if (inner) {
      clipArc(ctx, arc);
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
    ctx.closePath();
    ctx.stroke();
  }

  var element_arc = core_element.extend({
    _type: 'arc',
    inLabelRange: function inLabelRange(mouseX) {
      var vm = this._view;

      if (vm) {
        return Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2);
      }

      return false;
    },
    inRange: function inRange(chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {
          x: chartX,
          y: chartY
        });
        var angle = pointRelativePosition.angle;
        var distance = pointRelativePosition.distance; // Sanitise angle range

        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;

        while (endAngle < startAngle) {
          endAngle += TAU;
        }

        while (angle > endAngle) {
          angle -= TAU;
        }

        while (angle < startAngle) {
          angle += TAU;
        } // Check if within the range of the open/close angle


        var betweenAngles = angle >= startAngle && angle <= endAngle;
        var withinRadius = distance >= vm.innerRadius && distance <= vm.outerRadius;
        return betweenAngles && withinRadius;
      }

      return false;
    },
    getCenterPoint: function getCenterPoint() {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius
      };
    },
    getArea: function getArea() {
      var vm = this._view;
      return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
    },
    tooltipPosition: function tooltipPosition() {
      var vm = this._view;
      var centreAngle = vm.startAngle + (vm.endAngle - vm.startAngle) / 2;
      var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + Math.cos(centreAngle) * rangeFromCentre,
        y: vm.y + Math.sin(centreAngle) * rangeFromCentre
      };
    },
    draw: function draw() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var pixelMargin = vm.borderAlign === 'inner' ? 0.33 : 0;
      var arc = {
        x: vm.x,
        y: vm.y,
        innerRadius: vm.innerRadius,
        outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
        pixelMargin: pixelMargin,
        startAngle: vm.startAngle,
        endAngle: vm.endAngle,
        fullCircles: Math.floor(vm.circumference / TAU)
      };
      var i;
      ctx.save();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;

      if (arc.fullCircles) {
        arc.endAngle = arc.startAngle + TAU;
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
        ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
        ctx.closePath();

        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.fill();
        }

        arc.endAngle = arc.startAngle + vm.circumference % TAU;
      }

      ctx.beginPath();
      ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
      ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth) {
        drawBorder(ctx, vm, arc);
      }

      ctx.restore();
    }
  });
  var valueOrDefault$1 = helpers$1.valueOrDefault;
  var defaultColor = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      line: {
        tension: 0.4,
        backgroundColor: defaultColor,
        borderWidth: 3,
        borderColor: defaultColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        capBezierPoints: true,
        fill: true // do we fill in the area between the line and its base axis

      }
    }
  });

  var element_line = core_element.extend({
    _type: 'line',
    draw: function draw() {
      var me = this;
      var vm = me._view;
      var ctx = me._chart.ctx;
      var spanGaps = vm.spanGaps;

      var points = me._children.slice(); // clone array


      var globalDefaults = core_defaults.global;
      var globalOptionLineElements = globalDefaults.elements.line;
      var lastDrawnIndex = -1;
      var closePath = me._loop;
      var index, previous, currentVM;

      if (!points.length) {
        return;
      }

      if (me._loop) {
        for (index = 0; index < points.length; ++index) {
          previous = helpers$1.previousItem(points, index); // If the line has an open path, shift the point array

          if (!points[index]._view.skip && previous._view.skip) {
            points = points.slice(index).concat(points.slice(0, index));
            closePath = spanGaps;
            break;
          }
        } // If the line has a close path, add the first point again


        if (closePath) {
          points.push(points[0]);
        }
      }

      ctx.save(); // Stroke Line Options

      ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle; // IE 9 and 10 do not support line dash

      if (ctx.setLineDash) {
        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
      }

      ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
      ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
      ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor; // Stroke Line

      ctx.beginPath(); // First point moves to it's starting position no matter what

      currentVM = points[0]._view;

      if (!currentVM.skip) {
        ctx.moveTo(currentVM.x, currentVM.y);
        lastDrawnIndex = 0;
      }

      for (index = 1; index < points.length; ++index) {
        currentVM = points[index]._view;
        previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

        if (!currentVM.skip) {
          if (lastDrawnIndex !== index - 1 && !spanGaps || lastDrawnIndex === -1) {
            // There was a gap and this is the first point after the gap
            ctx.moveTo(currentVM.x, currentVM.y);
          } else {
            // Line to next point
            helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
          }

          lastDrawnIndex = index;
        }
      }

      if (closePath) {
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    }
  });
  var valueOrDefault$2 = helpers$1.valueOrDefault;
  var defaultColor$1 = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      point: {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: defaultColor$1,
        borderColor: defaultColor$1,
        borderWidth: 1,
        // Hover
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });

  function xRange(mouseX) {
    var vm = this._view;
    return vm ? Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius : false;
  }

  function yRange(mouseY) {
    var vm = this._view;
    return vm ? Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius : false;
  }

  var element_point = core_element.extend({
    _type: 'point',
    inRange: function inRange(mouseX, mouseY) {
      var vm = this._view;
      return vm ? Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2) < Math.pow(vm.hitRadius + vm.radius, 2) : false;
    },
    inLabelRange: xRange,
    inXRange: xRange,
    inYRange: yRange,
    getCenterPoint: function getCenterPoint() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    },
    getArea: function getArea() {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function tooltipPosition() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth
      };
    },
    draw: function draw(chartArea) {
      var vm = this._view;
      var ctx = this._chart.ctx;
      var pointStyle = vm.pointStyle;
      var rotation = vm.rotation;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

      if (vm.skip) {
        return;
      } // Clipping for Points.


      if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
        ctx.strokeStyle = vm.borderColor || defaultColor;
        ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
        ctx.fillStyle = vm.backgroundColor || defaultColor;
        helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
      }
    }
  });
  var defaultColor$2 = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      rectangle: {
        backgroundColor: defaultColor$2,
        borderColor: defaultColor$2,
        borderSkipped: 'bottom',
        borderWidth: 0
      }
    }
  });

  function isVertical(vm) {
    return vm && vm.width !== undefined;
  }
  /**
   * Helper function to get the bounds of the bar regardless of the orientation
   * @param bar {Chart.Element.Rectangle} the bar
   * @return {Bounds} bounds of the bar
   * @private
   */


  function getBarBounds(vm) {
    var x1, x2, y1, y2, half;

    if (isVertical(vm)) {
      half = vm.width / 2;
      x1 = vm.x - half;
      x2 = vm.x + half;
      y1 = Math.min(vm.y, vm.base);
      y2 = Math.max(vm.y, vm.base);
    } else {
      half = vm.height / 2;
      x1 = Math.min(vm.x, vm.base);
      x2 = Math.max(vm.x, vm.base);
      y1 = vm.y - half;
      y2 = vm.y + half;
    }

    return {
      left: x1,
      top: y1,
      right: x2,
      bottom: y2
    };
  }

  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }

  function parseBorderSkipped(vm) {
    var edge = vm.borderSkipped;
    var res = {};

    if (!edge) {
      return res;
    }

    if (vm.horizontal) {
      if (vm.base > vm.x) {
        edge = swap(edge, 'left', 'right');
      }
    } else if (vm.base < vm.y) {
      edge = swap(edge, 'bottom', 'top');
    }

    res[edge] = true;
    return res;
  }

  function parseBorderWidth(vm, maxW, maxH) {
    var value = vm.borderWidth;
    var skip = parseBorderSkipped(vm);
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = +value.top || 0;
      r = +value.right || 0;
      b = +value.bottom || 0;
      l = +value.left || 0;
    } else {
      t = r = b = l = +value || 0;
    }

    return {
      t: skip.top || t < 0 ? 0 : t > maxH ? maxH : t,
      r: skip.right || r < 0 ? 0 : r > maxW ? maxW : r,
      b: skip.bottom || b < 0 ? 0 : b > maxH ? maxH : b,
      l: skip.left || l < 0 ? 0 : l > maxW ? maxW : l
    };
  }

  function boundingRects(vm) {
    var bounds = getBarBounds(vm);
    var width = bounds.right - bounds.left;
    var height = bounds.bottom - bounds.top;
    var border = parseBorderWidth(vm, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b
      }
    };
  }

  function _inRange(vm, x, y) {
    var skipX = x === null;
    var skipY = y === null;
    var bounds = !vm || skipX && skipY ? false : getBarBounds(vm);
    return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
  }

  var element_rectangle = core_element.extend({
    _type: 'rectangle',
    draw: function draw() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var rects = boundingRects(vm);
      var outer = rects.outer;
      var inner = rects.inner;
      ctx.fillStyle = vm.backgroundColor;
      ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

      if (outer.w === inner.w && outer.h === inner.h) {
        return;
      }

      ctx.save();
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.fillStyle = vm.borderColor;
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fill('evenodd');
      ctx.restore();
    },
    height: function height() {
      var vm = this._view;
      return vm.base - vm.y;
    },
    inRange: function inRange(mouseX, mouseY) {
      return _inRange(this._view, mouseX, mouseY);
    },
    inLabelRange: function inLabelRange(mouseX, mouseY) {
      var vm = this._view;
      return isVertical(vm) ? _inRange(vm, mouseX, null) : _inRange(vm, null, mouseY);
    },
    inXRange: function inXRange(mouseX) {
      return _inRange(this._view, mouseX, null);
    },
    inYRange: function inYRange(mouseY) {
      return _inRange(this._view, null, mouseY);
    },
    getCenterPoint: function getCenterPoint() {
      var vm = this._view;
      var x, y;

      if (isVertical(vm)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }

      return {
        x: x,
        y: y
      };
    },
    getArea: function getArea() {
      var vm = this._view;
      return isVertical(vm) ? vm.width * Math.abs(vm.y - vm.base) : vm.height * Math.abs(vm.x - vm.base);
    },
    tooltipPosition: function tooltipPosition() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  });
  var elements = {};
  var Arc = element_arc;
  var Line = element_line;
  var Point = element_point;
  var Rectangle = element_rectangle;
  elements.Arc = Arc;
  elements.Line = Line;
  elements.Point = Point;
  elements.Rectangle = Rectangle;
  var deprecated = helpers$1._deprecated;
  var valueOrDefault$3 = helpers$1.valueOrDefault;

  core_defaults._set('bar', {
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        type: 'linear'
      }]
    }
  });

  core_defaults._set('global', {
    datasets: {
      bar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9
      }
    }
  });
  /**
   * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
   * @private
   */


  function computeMinSampleSize(scale, pixels) {
    var min = scale._length;
    var prev, curr, i, ilen;

    for (i = 1, ilen = pixels.length; i < ilen; ++i) {
      min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
    }

    for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
      prev = curr;
    }

    return min;
  }
  /**
   * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
   * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
   * mode currently always generates bars equally sized (until we introduce scriptable options?).
   * @private
   */


  function computeFitCategoryTraits(index, ruler, options) {
    var thickness = options.barThickness;
    var count = ruler.stackCount;
    var curr = ruler.pixels[index];
    var min = helpers$1.isNullOrUndef(thickness) ? computeMinSampleSize(ruler.scale, ruler.pixels) : -1;
    var size, ratio;

    if (helpers$1.isNullOrUndef(thickness)) {
      size = min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      // When bar thickness is enforced, category and bar percentages are ignored.
      // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
      // and deprecate barPercentage since this value is ignored when thickness is absolute.
      size = thickness * count;
      ratio = 1;
    }

    return {
      chunk: size / count,
      ratio: ratio,
      start: curr - size / 2
    };
  }
  /**
   * Computes an "optimal" category that globally arranges bars side by side (no gap when
   * percentage options are 1), based on the previous and following categories. This mode
   * generates bars with different widths when data are not evenly spaced.
   * @private
   */


  function computeFlexCategoryTraits(index, ruler, options) {
    var pixels = ruler.pixels;
    var curr = pixels[index];
    var prev = index > 0 ? pixels[index - 1] : null;
    var next = index < pixels.length - 1 ? pixels[index + 1] : null;
    var percent = options.categoryPercentage;
    var start, size;

    if (prev === null) {
      // first data: its size is double based on the next point or,
      // if it's also the last data, we use the scale size.
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }

    if (next === null) {
      // last data: its size is also double based on the previous point.
      next = curr + curr - prev;
    }

    start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / ruler.stackCount,
      ratio: options.barPercentage,
      start: start
    };
  }

  var controller_bar = core_datasetController.extend({
    dataElementType: elements.Rectangle,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'],
    initialize: function initialize() {
      var me = this;
      var meta, scaleOpts;
      core_datasetController.prototype.initialize.apply(me, arguments);
      meta = me.getMeta();
      meta.stack = me.getDataset().stack;
      meta.bar = true;
      scaleOpts = me._getIndexScale().options;
      deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
      deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
      deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
      deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
      deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
    },
    update: function update(reset) {
      var me = this;
      var rects = me.getMeta().data;
      var i, ilen;
      me._ruler = me.getRuler();

      for (i = 0, ilen = rects.length; i < ilen; ++i) {
        me.updateElement(rects[i], i, reset);
      }
    },
    updateElement: function updateElement(rectangle, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();

      var options = me._resolveDataElementOptions(rectangle, index);

      rectangle._xScale = me.getScaleForId(meta.xAxisID);
      rectangle._yScale = me.getScaleForId(meta.yAxisID);
      rectangle._datasetIndex = me.index;
      rectangle._index = index;
      rectangle._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderSkipped: options.borderSkipped,
        borderWidth: options.borderWidth,
        datasetLabel: dataset.label,
        label: me.chart.data.labels[index]
      };

      if (helpers$1.isArray(dataset.data[index])) {
        rectangle._model.borderSkipped = null;
      }

      me._updateElementGeometry(rectangle, index, reset, options);

      rectangle.pivot();
    },

    /**
     * @private
     */
    _updateElementGeometry: function _updateElementGeometry(rectangle, index, reset, options) {
      var me = this;
      var model = rectangle._model;

      var vscale = me._getValueScale();

      var base = vscale.getBasePixel();
      var horizontal = vscale.isHorizontal();
      var ruler = me._ruler || me.getRuler();
      var vpixels = me.calculateBarValuePixels(me.index, index, options);
      var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);
      model.horizontal = horizontal;
      model.base = reset ? base : vpixels.base;
      model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
      model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
      model.height = horizontal ? ipixels.size : undefined;
      model.width = horizontal ? undefined : ipixels.size;
    },

    /**
     * Returns the stacks based on groups and bar visibility.
     * @param {number} [last] - The dataset index
     * @returns {string[]} The list of stack IDs
     * @private
     */
    _getStacks: function _getStacks(last) {
      var me = this;

      var scale = me._getIndexScale();

      var metasets = scale._getMatchingVisibleMetas(me._type);

      var stacked = scale.options.stacked;
      var ilen = metasets.length;
      var stacks = [];
      var i, meta;

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i]; // stacked   | meta.stack
        //           | found | not found | undefined
        // false     |   x   |     x     |     x
        // true      |       |     x     |
        // undefined |       |     x     |     x

        if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
          stacks.push(meta.stack);
        }

        if (meta.index === last) {
          break;
        }
      }

      return stacks;
    },

    /**
     * Returns the effective number of stacks based on groups and bar visibility.
     * @private
     */
    getStackCount: function getStackCount() {
      return this._getStacks().length;
    },

    /**
     * Returns the stack index for the given dataset based on groups and bar visibility.
     * @param {number} [datasetIndex] - The dataset index
     * @param {string} [name] - The stack name to find
     * @returns {number} The stack index
     * @private
     */
    getStackIndex: function getStackIndex(datasetIndex, name) {
      var stacks = this._getStacks(datasetIndex);

      var index = name !== undefined ? stacks.indexOf(name) : -1; // indexOf returns -1 if element is not present

      return index === -1 ? stacks.length - 1 : index;
    },

    /**
     * @private
     */
    getRuler: function getRuler() {
      var me = this;

      var scale = me._getIndexScale();

      var pixels = [];
      var i, ilen;

      for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
        pixels.push(scale.getPixelForValue(null, i, me.index));
      }

      return {
        pixels: pixels,
        start: scale._startPixel,
        end: scale._endPixel,
        stackCount: me.getStackCount(),
        scale: scale
      };
    },

    /**
     * Note: pixel values are not clamped to the scale area.
     * @private
     */
    calculateBarValuePixels: function calculateBarValuePixels(datasetIndex, index, options) {
      var me = this;
      var chart = me.chart;

      var scale = me._getValueScale();

      var isHorizontal = scale.isHorizontal();
      var datasets = chart.data.datasets;

      var metasets = scale._getMatchingVisibleMetas(me._type);

      var value = scale._parseValue(datasets[datasetIndex].data[index]);

      var minBarLength = options.minBarLength;
      var stacked = scale.options.stacked;
      var stack = me.getMeta().stack;
      var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
      var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
      var ilen = metasets.length;
      var i, imeta, ivalue, base, head, size, stackLength;

      if (stacked || stacked === undefined && stack !== undefined) {
        for (i = 0; i < ilen; ++i) {
          imeta = metasets[i];

          if (imeta.index === datasetIndex) {
            break;
          }

          if (imeta.stack === stack) {
            stackLength = scale._parseValue(datasets[imeta.index].data[index]);
            ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

            if (value.min < 0 && ivalue < 0 || value.max >= 0 && ivalue > 0) {
              start += ivalue;
            }
          }
        }
      }

      base = scale.getPixelForValue(start);
      head = scale.getPixelForValue(start + length);
      size = head - base;

      if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
        size = minBarLength;

        if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
          head = base - minBarLength;
        } else {
          head = base + minBarLength;
        }
      }

      return {
        size: size,
        base: base,
        head: head,
        center: head + size / 2
      };
    },

    /**
     * @private
     */
    calculateBarIndexPixels: function calculateBarIndexPixels(datasetIndex, index, ruler, options) {
      var me = this;
      var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options) : computeFitCategoryTraits(index, ruler, options);
      var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
      var center = range.start + range.chunk * stackIndex + range.chunk / 2;
      var size = Math.min(valueOrDefault$3(options.maxBarThickness, Infinity), range.chunk * range.ratio);
      return {
        base: center - size / 2,
        head: center + size / 2,
        center: center,
        size: size
      };
    },
    draw: function draw() {
      var me = this;
      var chart = me.chart;

      var scale = me._getValueScale();

      var rects = me.getMeta().data;
      var dataset = me.getDataset();
      var ilen = rects.length;
      var i = 0;
      helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

      for (; i < ilen; ++i) {
        var val = scale._parseValue(dataset.data[i]);

        if (!isNaN(val.min) && !isNaN(val.max)) {
          rects[i].draw();
        }
      }

      helpers$1.canvas.unclipArea(chart.ctx);
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function _resolveDataElementOptions() {
      var me = this;
      var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));

      var indexOpts = me._getIndexScale().options;

      var valueOpts = me._getValueScale().options;

      values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
      values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
      values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
      values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
      values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);
      return values;
    }
  });
  var valueOrDefault$4 = helpers$1.valueOrDefault;
  var resolve$1 = helpers$1.options.resolve;

  core_defaults._set('bubble', {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        // bubble should probably use a linear scale by default
        position: 'bottom',
        id: 'x-axis-0' // need an ID so datasets can reference the scale

      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y-axis-0'
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          // Title doesn't make sense for scatter since we format the data as a point
          return '';
        },
        label: function label(item, data) {
          var datasetLabel = data.datasets[item.datasetIndex].label || '';
          var dataPoint = data.datasets[item.datasetIndex].data[item.index];
          return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
        }
      }
    }
  });

  var controller_bubble = core_datasetController.extend({
    /**
     * @protected
     */
    dataElementType: elements.Point,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle', 'rotation'],

    /**
     * @protected
     */
    update: function update(reset) {
      var me = this;
      var meta = me.getMeta();
      var points = meta.data; // Update Points

      helpers$1.each(points, function (point, index) {
        me.updateElement(point, index, reset);
      });
    },

    /**
     * @protected
     */
    updateElement: function updateElement(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var xScale = me.getScaleForId(meta.xAxisID);
      var yScale = me.getScaleForId(meta.yAxisID);

      var options = me._resolveDataElementOptions(point, index);

      var data = me.getDataset().data[index];
      var dsIndex = me.index;
      var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(_typeof(data) === 'object' ? data : NaN, index, dsIndex);
      var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);
      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = dsIndex;
      point._index = index;
      point._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        hitRadius: options.hitRadius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        radius: reset ? 0 : options.radius,
        skip: custom.skip || isNaN(x) || isNaN(y),
        x: x,
        y: y
      };
      point.pivot();
    },

    /**
     * @protected
     */
    setHoverStyle: function setHoverStyle(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
      model.radius = options.radius + options.hoverRadius;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function _resolveDataElementOptions(point, index) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var custom = point.custom || {};
      var data = dataset.data[index] || {};

      var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments); // Scriptable options


      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      }; // In case values were cached (and thus frozen), we need to clone the values

      if (me._cachedDataOpts === values) {
        values = helpers$1.extend({}, values);
      } // Custom radius resolution


      values.radius = resolve$1([custom.radius, data.r, me._config.radius, chart.options.elements.point.radius], context, index);
      return values;
    }
  });
  var valueOrDefault$5 = helpers$1.valueOrDefault;
  var PI$1 = Math.PI;
  var DOUBLE_PI$1 = PI$1 * 2;
  var HALF_PI$1 = PI$1 / 2;

  core_defaults._set('doughnut', {
    animation: {
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false
    },
    hover: {
      mode: 'single'
    },
    legendCallback: function legendCallback(chart) {
      var list = document.createElement('ul');
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement('li'));
          listItemSpan = listItem.appendChild(document.createElement('span'));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(chart) {
          var data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }

          return [];
        }
      },
      onClick: function onClick(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i); // toggle visibility of index if exists

          if (meta.data[index]) {
            meta.data[index].hidden = !meta.data[index].hidden;
          }
        }

        chart.update();
      }
    },
    // The percentage of the chart that we cut out of the middle.
    cutoutPercentage: 50,
    // The rotation of the chart, where the first data arc begins.
    rotation: -HALF_PI$1,
    // The total circumference of the chart.
    circumference: DOUBLE_PI$1,
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function title() {
          return '';
        },
        label: function label(tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          if (helpers$1.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return dataLabel;
        }
      }
    }
  });

  var controller_doughnut = core_datasetController.extend({
    dataElementType: elements.Arc,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],
    // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
    getRingIndex: function getRingIndex(datasetIndex) {
      var ringIndex = 0;

      for (var j = 0; j < datasetIndex; ++j) {
        if (this.chart.isDatasetVisible(j)) {
          ++ringIndex;
        }
      }

      return ringIndex;
    },
    update: function update(reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var ratioX = 1;
      var ratioY = 1;
      var offsetX = 0;
      var offsetY = 0;
      var meta = me.getMeta();
      var arcs = meta.data;
      var cutout = opts.cutoutPercentage / 100 || 0;
      var circumference = opts.circumference;

      var chartWeight = me._getRingWeight(me.index);

      var maxWidth, maxHeight, i, ilen; // If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc

      if (circumference < DOUBLE_PI$1) {
        var startAngle = opts.rotation % DOUBLE_PI$1;
        startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
        var endAngle = startAngle + circumference;
        var startX = Math.cos(startAngle);
        var startY = Math.sin(startAngle);
        var endX = Math.cos(endAngle);
        var endY = Math.sin(endAngle);
        var contains0 = startAngle <= 0 && endAngle >= 0 || endAngle >= DOUBLE_PI$1;
        var contains90 = startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1 || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
        var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
        var contains270 = startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1 || endAngle >= PI$1 + HALF_PI$1;
        var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
        var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
        var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
        var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
      }

      chart.borderWidth = me.getMaxBorderWidth();
      maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
      maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
      chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
      chart.offsetX = offsetX * chart.outerRadius;
      chart.offsetY = offsetY * chart.outerRadius;
      meta.total = me.calculateTotal();
      me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
      me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        me.updateElement(arcs[i], i, reset);
      }
    },
    updateElement: function updateElement(arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var animationOpts = opts.animation;
      var centerX = (chartArea.left + chartArea.right) / 2;
      var centerY = (chartArea.top + chartArea.bottom) / 2;
      var startAngle = opts.rotation; // non reset case handled later

      var endAngle = opts.rotation; // non reset case handled later

      var dataset = me.getDataset();
      var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
      var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
      var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
      var options = arc._options || {};
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX + chart.offsetX,
          y: centerY + chart.offsetY,
          startAngle: startAngle,
          endAngle: endAngle,
          circumference: circumference,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
        }
      });
      var model = arc._model; // Set correct angles if not resetting

      if (!reset || !animationOpts.animateRotate) {
        if (index === 0) {
          model.startAngle = opts.rotation;
        } else {
          model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }

        model.endAngle = model.startAngle + model.circumference;
      }

      arc.pivot();
    },
    calculateTotal: function calculateTotal() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var total = 0;
      var value;
      helpers$1.each(meta.data, function (element, index) {
        value = dataset.data[index];

        if (!isNaN(value) && !element.hidden) {
          total += Math.abs(value);
        }
      });
      /* if (total === 0) {
      	total = NaN;
      }*/

      return total;
    },
    calculateCircumference: function calculateCircumference(value) {
      var total = this.getMeta().total;

      if (total > 0 && !isNaN(value)) {
        return DOUBLE_PI$1 * (Math.abs(value) / total);
      }

      return 0;
    },
    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function getMaxBorderWidth(arcs) {
      var me = this;
      var max = 0;
      var chart = me.chart;
      var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

      if (!arcs) {
        // Find the outmost visible dataset
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;

            if (i !== me.index) {
              controller = meta.controller;
            }

            break;
          }
        }
      }

      if (!arcs) {
        return 0;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arc = arcs[i];

        if (controller) {
          controller._configure();

          options = controller._resolveDataElementOptions(arc, i);
        } else {
          options = arc._options;
        }

        if (options.borderAlign !== 'inner') {
          borderWidth = options.borderWidth;
          hoverWidth = options.hoverBorderWidth;
          max = borderWidth > max ? borderWidth : max;
          max = hoverWidth > max ? hoverWidth : max;
        }
      }

      return max;
    },

    /**
     * @protected
     */
    setHoverStyle: function setHoverStyle(arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
    },

    /**
     * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
     * @private
     */
    _getRingWeightOffset: function _getRingWeightOffset(datasetIndex) {
      var ringWeightOffset = 0;

      for (var i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }

      return ringWeightOffset;
    },

    /**
     * @private
     */
    _getRingWeight: function _getRingWeight(dataSetIndex) {
      return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
    },

    /**
     * Returns the sum of all visibile data set weights.  This value can be 0.
     * @private
     */
    _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });

  core_defaults._set('horizontalBar', {
    hover: {
      mode: 'index',
      axis: 'y'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        type: 'category',
        position: 'left',
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left'
      }
    },
    tooltips: {
      mode: 'index',
      axis: 'y'
    }
  });

  core_defaults._set('global', {
    datasets: {
      horizontalBar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9
      }
    }
  });

  var controller_horizontalBar = controller_bar.extend({
    /**
     * @private
     */
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().yAxisID;
    }
  });
  var valueOrDefault$6 = helpers$1.valueOrDefault;
  var resolve$2 = helpers$1.options.resolve;
  var isPointInArea = helpers$1.canvas._isPointInArea;

  core_defaults._set('line', {
    showLines: true,
    spanGaps: false,
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        id: 'x-axis-0'
      }],
      yAxes: [{
        type: 'linear',
        id: 'y-axis-0'
      }]
    }
  });

  function scaleClip(scale, halfBorderWidth) {
    var tickOpts = scale && scale.options.ticks || {};
    var reverse = tickOpts.reverse;
    var min = tickOpts.min === undefined ? halfBorderWidth : 0;
    var max = tickOpts.max === undefined ? halfBorderWidth : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }

  function defaultClip(xScale, yScale, borderWidth) {
    var halfBorderWidth = borderWidth / 2;
    var x = scaleClip(xScale, halfBorderWidth);
    var y = scaleClip(yScale, halfBorderWidth);
    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start
    };
  }

  function toClip(value) {
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }

    return {
      top: t,
      right: r,
      bottom: b,
      left: l
    };
  }

  var controller_line = core_datasetController.extend({
    datasetElementType: elements.Line,
    dataElementType: elements.Point,

    /**
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'cubicInterpolationMode', 'fill'],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: 'pointBackgroundColor',
      borderColor: 'pointBorderColor',
      borderWidth: 'pointBorderWidth',
      hitRadius: 'pointHitRadius',
      hoverBackgroundColor: 'pointHoverBackgroundColor',
      hoverBorderColor: 'pointHoverBorderColor',
      hoverBorderWidth: 'pointHoverBorderWidth',
      hoverRadius: 'pointHoverRadius',
      pointStyle: 'pointStyle',
      radius: 'pointRadius',
      rotation: 'pointRotation'
    },
    update: function update(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var options = me.chart.options;
      var config = me._config;
      var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
      var i, ilen;
      me._xScale = me.getScaleForId(meta.xAxisID);
      me._yScale = me.getScaleForId(meta.yAxisID); // Update Line

      if (showLine) {
        // Compatibility: If the properties are defined with only the old name, use those values
        if (config.tension !== undefined && config.lineTension === undefined) {
          config.lineTension = config.tension;
        } // Utility


        line._scale = me._yScale;
        line._datasetIndex = me.index; // Data

        line._children = points; // Model

        line._model = me._resolveDatasetElementOptions(line);
        line.pivot();
      } // Update Points


      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }

      if (showLine && line._model.tension !== 0) {
        me.updateBezierControlPoints();
      } // Now pivot the point for animation


      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
    updateElement: function updateElement(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var datasetIndex = me.index;
      var value = dataset.data[index];
      var xScale = me._xScale;
      var yScale = me._yScale;
      var lineModel = meta.dataset._model;
      var x, y;

      var options = me._resolveDataElementOptions(point, index);

      x = xScale.getPixelForValue(_typeof(value) === 'object' ? value : NaN, index, datasetIndex);
      y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex); // Utility

      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = datasetIndex;
      point._index = index; // Desired view properties

      point._model = {
        x: x,
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
        steppedLine: lineModel ? lineModel.steppedLine : false,
        // Tooltip
        hitRadius: options.hitRadius
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions(element) {
      var me = this;
      var config = me._config;
      var custom = element.custom || {};
      var options = me.chart.options;
      var lineOptions = options.elements.line;

      var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments); // The default behavior of lines is to break at null values, according
      // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
      // This option gives lines the ability to span gaps


      values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
      values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
      values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));
      return values;
    },
    calculatePointY: function calculatePointY(value, index, datasetIndex) {
      var me = this;
      var chart = me.chart;
      var yScale = me._yScale;
      var sumPos = 0;
      var sumNeg = 0;
      var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

      if (yScale.options.stacked) {
        rightValue = +yScale.getRightValue(value);
        metasets = chart._getSortedVisibleDatasetMetas();
        ilen = metasets.length;

        for (i = 0; i < ilen; ++i) {
          dsMeta = metasets[i];

          if (dsMeta.index === datasetIndex) {
            break;
          }

          ds = chart.data.datasets[dsMeta.index];

          if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
            stackedRightValue = +yScale.getRightValue(ds.data[index]);

            if (stackedRightValue < 0) {
              sumNeg += stackedRightValue || 0;
            } else {
              sumPos += stackedRightValue || 0;
            }
          }
        }

        if (rightValue < 0) {
          return yScale.getPixelForValue(sumNeg + rightValue);
        }

        return yScale.getPixelForValue(sumPos + rightValue);
      }

      return yScale.getPixelForValue(value);
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var lineModel = meta.dataset._model;
      var area = chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

      if (lineModel.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      if (lineModel.cubicInterpolationMode === 'monotone') {
        helpers$1.splineCurveMonotone(points);
      } else {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i)._model, model, helpers$1.nextItem(points, i)._model, lineModel.tension);
          model.controlPointPreviousX = controlPoints.previous.x;
          model.controlPointPreviousY = controlPoints.previous.y;
          model.controlPointNextX = controlPoints.next.x;
          model.controlPointNextY = controlPoints.next.y;
        }
      }

      if (chart.options.elements.line.capBezierPoints) {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;

          if (isPointInArea(model, area)) {
            if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
              model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
              model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
            }

            if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
              model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
              model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
            }
          }
        }
      }
    },
    draw: function draw() {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var points = meta.data || [];
      var area = chart.chartArea;
      var canvas = chart.canvas;
      var i = 0;
      var ilen = points.length;
      var clip;

      if (me._showLine) {
        clip = meta.dataset._model.clip;
        helpers$1.canvas.clipArea(chart.ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? canvas.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
        });
        meta.dataset.draw();
        helpers$1.canvas.unclipArea(chart.ctx);
      } // Draw the points


      for (; i < ilen; ++i) {
        points[i].draw(area);
      }
    },

    /**
     * @protected
     */
    setHoverStyle: function setHoverStyle(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
    }
  });
  var resolve$3 = helpers$1.options.resolve;

  core_defaults._set('polarArea', {
    scale: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },
    // Boolean - Whether to animate the rotation of the chart
    animation: {
      animateRotate: true,
      animateScale: true
    },
    startAngle: -0.5 * Math.PI,
    legendCallback: function legendCallback(chart) {
      var list = document.createElement('ul');
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement('li'));
          listItemSpan = listItem.appendChild(document.createElement('span'));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(chart) {
          var data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }

          return [];
        }
      },
      onClick: function onClick(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          meta.data[index].hidden = !meta.data[index].hidden;
        }

        chart.update();
      }
    },
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function title() {
          return '';
        },
        label: function label(item, data) {
          return data.labels[item.index] + ': ' + item.yLabel;
        }
      }
    }
  });

  var controller_polarArea = core_datasetController.extend({
    dataElementType: elements.Arc,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],

    /**
     * @private
     */
    _getIndexScaleId: function _getIndexScaleId() {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function _getValueScaleId() {
      return this.chart.scale.id;
    },
    update: function update(reset) {
      var me = this;
      var dataset = me.getDataset();
      var meta = me.getMeta();
      var start = me.chart.options.startAngle || 0;
      var starts = me._starts = [];
      var angles = me._angles = [];
      var arcs = meta.data;
      var i, ilen, angle;

      me._updateRadius();

      meta.count = me.countVisibleElements();

      for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
        starts[i] = start;
        angle = me._computeAngle(i);
        angles[i] = angle;
        start += angle;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
        me.updateElement(arcs[i], i, reset);
      }
    },

    /**
     * @private
     */
    _updateRadius: function _updateRadius() {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      chart.outerRadius = Math.max(minSize / 2, 0);
      chart.innerRadius = Math.max(opts.cutoutPercentage ? chart.outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
      me.outerRadius = chart.outerRadius - chart.radiusLength * me.index;
      me.innerRadius = me.outerRadius - chart.radiusLength;
    },
    updateElement: function updateElement(arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var opts = chart.options;
      var animationOpts = opts.animation;
      var scale = chart.scale;
      var labels = chart.data.labels;
      var centerX = scale.xCenter;
      var centerY = scale.yCenter; // var negHalfPI = -0.5 * Math.PI;

      var datasetStartAngle = opts.startAngle;
      var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var startAngle = me._starts[index];
      var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);
      var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var options = arc._options || {};
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius: reset ? resetRadius : distance,
          startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
          endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
          label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
        }
      });
      arc.pivot();
    },
    countVisibleElements: function countVisibleElements() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var count = 0;
      helpers$1.each(meta.data, function (element, index) {
        if (!isNaN(dataset.data[index]) && !element.hidden) {
          count++;
        }
      });
      return count;
    },

    /**
     * @protected
     */
    setHoverStyle: function setHoverStyle(arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      var valueOrDefault = helpers$1.valueOrDefault;
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
    },

    /**
     * @private
     */
    _computeAngle: function _computeAngle(index) {
      var me = this;
      var count = this.getMeta().count;
      var dataset = me.getDataset();
      var meta = me.getMeta();

      if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
        return 0;
      } // Scriptable options


      var context = {
        chart: me.chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
      return resolve$3([me.chart.options.elements.arc.angle, 2 * Math.PI / count], context, index);
    }
  });

  core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));

  core_defaults._set('pie', {
    cutoutPercentage: 0
  }); // Pie charts are Doughnut chart with different defaults


  var controller_pie = controller_doughnut;
  var valueOrDefault$7 = helpers$1.valueOrDefault;

  core_defaults._set('radar', {
    spanGaps: false,
    scale: {
      type: 'radialLinear'
    },
    elements: {
      line: {
        fill: 'start',
        tension: 0 // no bezier in radar

      }
    }
  });

  var controller_radar = core_datasetController.extend({
    datasetElementType: elements.Line,
    dataElementType: elements.Point,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderWidth', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'fill'],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: 'pointBackgroundColor',
      borderColor: 'pointBorderColor',
      borderWidth: 'pointBorderWidth',
      hitRadius: 'pointHitRadius',
      hoverBackgroundColor: 'pointHoverBackgroundColor',
      hoverBorderColor: 'pointHoverBorderColor',
      hoverBorderWidth: 'pointHoverBorderWidth',
      hoverRadius: 'pointHoverRadius',
      pointStyle: 'pointStyle',
      radius: 'pointRadius',
      rotation: 'pointRotation'
    },

    /**
     * @private
     */
    _getIndexScaleId: function _getIndexScaleId() {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function _getValueScaleId() {
      return this.chart.scale.id;
    },
    update: function update(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var scale = me.chart.scale;
      var config = me._config;
      var i, ilen; // Compatibility: If the properties are defined with only the old name, use those values

      if (config.tension !== undefined && config.lineTension === undefined) {
        config.lineTension = config.tension;
      } // Utility


      line._scale = scale;
      line._datasetIndex = me.index; // Data

      line._children = points;
      line._loop = true; // Model

      line._model = me._resolveDatasetElementOptions(line);
      line.pivot(); // Update Points

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      } // Update bezier control points


      me.updateBezierControlPoints(); // Now pivot the point for animation

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
    updateElement: function updateElement(point, index, reset) {
      var me = this;
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var scale = me.chart.scale;
      var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

      var options = me._resolveDataElementOptions(point, index);

      var lineModel = me.getMeta().dataset._model;

      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y; // Utility

      point._scale = scale;
      point._options = options;
      point._datasetIndex = me.index;
      point._index = index; // Desired view properties

      point._model = {
        x: x,
        // value not used in dataset scale, but we want a consistent API between scales
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),
        // Tooltip
        hitRadius: options.hitRadius
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
      var me = this;
      var config = me._config;
      var options = me.chart.options;

      var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

      values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);
      return values;
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var me = this;
      var meta = me.getMeta();
      var area = me.chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

      if (meta.dataset._model.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;
        controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i, true)._model, model, helpers$1.nextItem(points, i, true)._model, model.tension); // Prevent the bezier going outside of the bounds of the graph

        model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
        model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
        model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
        model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
      }
    },
    setHoverStyle: function setHoverStyle(point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
    }
  });

  core_defaults._set('scatter', {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        id: 'x-axis-1',
        // need an ID so datasets can reference the scale
        type: 'linear',
        // scatter should not use a category axis
        position: 'bottom'
      }],
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        position: 'left'
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return ''; // doesn't make sense for scatter since data are formatted as a point
        },
        label: function label(item) {
          return '(' + item.xLabel + ', ' + item.yLabel + ')';
        }
      }
    }
  });

  core_defaults._set('global', {
    datasets: {
      scatter: {
        showLine: false
      }
    }
  }); // Scatter charts use line controllers


  var controller_scatter = controller_line; // NOTE export a map in which the key represents the controller type, not
  // the class, and so must be CamelCase in order to be correctly retrieved
  // by the controller in core.controller.js (`controllers[meta.type]`).

  var controllers = {
    bar: controller_bar,
    bubble: controller_bubble,
    doughnut: controller_doughnut,
    horizontalBar: controller_horizontalBar,
    line: controller_line,
    polarArea: controller_polarArea,
    pie: controller_pie,
    radar: controller_radar,
    scatter: controller_scatter
  };
  /**
   * Helper function to get relative position for an event
   * @param {Event|IEvent} event - The event to get the position for
   * @param {Chart} chart - The chart
   * @returns {object} the event position
   */

  function getRelativePosition(e, chart) {
    if (e["native"]) {
      return {
        x: e.x,
        y: e.y
      };
    }

    return helpers$1.getRelativePosition(e, chart);
  }
  /**
   * Helper function to traverse all of the visible elements in the chart
   * @param {Chart} chart - the chart
   * @param {function} handler - the callback to execute for each visible item
   */


  function parseVisibleItems(chart, handler) {
    var metasets = chart._getSortedVisibleDatasetMetas();

    var metadata, i, j, ilen, jlen, element;

    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      metadata = metasets[i].data;

      for (j = 0, jlen = metadata.length; j < jlen; ++j) {
        element = metadata[j];

        if (!element._view.skip) {
          handler(element);
        }
      }
    }
  }
  /**
   * Helper function to get the items that intersect the event position
   * @param {ChartElement[]} items - elements to filter
   * @param {object} position - the point to be nearest to
   * @return {ChartElement[]} the nearest items
   */


  function getIntersectItems(chart, position) {
    var elements = [];
    parseVisibleItems(chart, function (element) {
      if (element.inRange(position.x, position.y)) {
        elements.push(element);
      }
    });
    return elements;
  }
  /**
   * Helper function to get the items nearest to the event position considering all visible items in teh chart
   * @param {Chart} chart - the chart to look at elements from
   * @param {object} position - the point to be nearest to
   * @param {boolean} intersect - if true, only consider items that intersect the position
   * @param {function} distanceMetric - function to provide the distance between points
   * @return {ChartElement[]} the nearest items
   */


  function getNearestItems(chart, position, intersect, distanceMetric) {
    var minDistance = Number.POSITIVE_INFINITY;
    var nearestItems = [];
    parseVisibleItems(chart, function (element) {
      if (intersect && !element.inRange(position.x, position.y)) {
        return;
      }

      var center = element.getCenterPoint();
      var distance = distanceMetric(position, center);

      if (distance < minDistance) {
        nearestItems = [element];
        minDistance = distance;
      } else if (distance === minDistance) {
        // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
      }
    });
    return nearestItems;
  }
  /**
   * Get a distance metric function for two points based on the
   * axis mode setting
   * @param {string} axis - the axis mode. x|y|xy
   */


  function getDistanceMetricForAxis(axis) {
    var useX = axis.indexOf('x') !== -1;
    var useY = axis.indexOf('y') !== -1;
    return function (pt1, pt2) {
      var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }

  function indexMode(chart, e, options) {
    var position = getRelativePosition(e, chart); // Default axis for index mode is 'x' to match old behaviour

    options.axis = options.axis || 'x';
    var distanceMetric = getDistanceMetricForAxis(options.axis);
    var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
    var elements = [];

    if (!items.length) {
      return [];
    }

    chart._getSortedVisibleDatasetMetas().forEach(function (meta) {
      var element = meta.data[items[0]._index]; // don't count items that are skipped (null data)

      if (element && !element._view.skip) {
        elements.push(element);
      }
    });

    return elements;
  }
  /**
   * @interface IInteractionOptions
   */

  /**
   * If true, only consider items that intersect the point
   * @name IInterfaceOptions#boolean
   * @type Boolean
   */

  /**
   * Contains interaction related functions
   * @namespace Chart.Interaction
   */


  var core_interaction = {
    // Helper function for different modes
    modes: {
      single: function single(chart, e) {
        var position = getRelativePosition(e, chart);
        var elements = [];
        parseVisibleItems(chart, function (element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
            return elements;
          }
        });
        return elements.slice(0, 1);
      },

      /**
       * @function Chart.Interaction.modes.label
       * @deprecated since version 2.4.0
       * @todo remove at version 3
       * @private
       */
      label: indexMode,

      /**
       * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
       * @function Chart.Interaction.modes.index
       * @since v2.4.0
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      index: indexMode,

      /**
       * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect is false, we find the nearest item and return the items in that dataset
       * @function Chart.Interaction.modes.dataset
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      dataset: function dataset(chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

        if (items.length > 0) {
          items = chart.getDatasetMeta(items[0]._datasetIndex).data;
        }

        return items;
      },

      /**
       * @function Chart.Interaction.modes.x-axis
       * @deprecated since version 2.4.0. Use index mode and intersect == true
       * @todo remove at version 3
       * @private
       */
      'x-axis': function xAxis(chart, e) {
        return indexMode(chart, e, {
          intersect: false
        });
      },

      /**
       * Point mode returns all elements that hit test based on the event position
       * of the event
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      point: function point(chart, e) {
        var position = getRelativePosition(e, chart);
        return getIntersectItems(chart, position);
      },

      /**
       * nearest mode returns the element closest to the point
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      nearest: function nearest(chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        return getNearestItems(chart, position, options.intersect, distanceMetric);
      },

      /**
       * x mode returns the elements that hit-test at the current x coordinate
       * @function Chart.Interaction.modes.x
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      x: function x(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
        parseVisibleItems(chart, function (element) {
          if (element.inXRange(position.x)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        }); // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing

        if (options.intersect && !intersectsItem) {
          items = [];
        }

        return items;
      },

      /**
       * y mode returns the elements that hit-test at the current y coordinate
       * @function Chart.Interaction.modes.y
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      y: function y(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
        parseVisibleItems(chart, function (element) {
          if (element.inYRange(position.y)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        }); // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing

        if (options.intersect && !intersectsItem) {
          items = [];
        }

        return items;
      }
    }
  };
  var extend = helpers$1.extend;

  function filterByPosition(array, position) {
    return helpers$1.where(array, function (v) {
      return v.pos === position;
    });
  }

  function sortByWeight(array, reverse) {
    return array.sort(function (a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }

  function wrapBoxes(boxes) {
    var layoutBoxes = [];
    var i, ilen, box;

    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      layoutBoxes.push({
        index: i,
        box: box,
        pos: box.position,
        horizontal: box.isHorizontal(),
        weight: box.weight
      });
    }

    return layoutBoxes;
  }

  function setLayoutDims(layouts, params) {
    var i, ilen, layout;

    for (i = 0, ilen = layouts.length; i < ilen; ++i) {
      layout = layouts[i]; // store width used instead of chartArea.w in fitBoxes

      layout.width = layout.horizontal ? layout.box.fullWidth && params.availableWidth : params.vBoxMaxWidth; // store height used instead of chartArea.h in fitBoxes

      layout.height = layout.horizontal && params.hBoxMaxHeight;
    }
  }

  function buildLayoutBoxes(boxes) {
    var layoutBoxes = wrapBoxes(boxes);
    var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    return {
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(bottom),
      chartArea: filterByPosition(layoutBoxes, 'chartArea'),
      vertical: left.concat(right),
      horizontal: top.concat(bottom)
    };
  }

  function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
  }

  function updateDims(chartArea, params, layout) {
    var box = layout.box;
    var maxPadding = chartArea.maxPadding;
    var newWidth, newHeight;

    if (layout.size) {
      // this layout was already counted for, lets first reduce old size
      chartArea[layout.pos] -= layout.size;
    }

    layout.size = layout.horizontal ? box.height : box.width;
    chartArea[layout.pos] += layout.size;

    if (box.getPadding) {
      var boxPadding = box.getPadding();
      maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
      maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
      maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
      maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
    }

    newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
    newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

    if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
      chartArea.w = newWidth;
      chartArea.h = newHeight; // return true if chart area changed in layout's direction

      var sizes = layout.horizontal ? [newWidth, chartArea.w] : [newHeight, chartArea.h];
      return sizes[0] !== sizes[1] && (!isNaN(sizes[0]) || !isNaN(sizes[1]));
    }
  }

  function handleMaxPadding(chartArea) {
    var maxPadding = chartArea.maxPadding;

    function updatePos(pos) {
      var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }

    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
  }

  function getMargins(horizontal, chartArea) {
    var maxPadding = chartArea.maxPadding;

    function marginForPositions(positions) {
      var margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions.forEach(function (pos) {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }

    return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
  }

  function fitBoxes(boxes, chartArea, params) {
    var refitBoxes = [];
    var i, ilen, layout, box, refit, changed;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

      if (updateDims(chartArea, params, layout)) {
        changed = true;

        if (refitBoxes.length) {
          // Dimensions changed and there were non full width boxes before this
          // -> we have to refit those
          refit = true;
        }
      }

      if (!box.fullWidth) {
        // fullWidth boxes don't need to be re-fitted in any case
        refitBoxes.push(layout);
      }
    }

    return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
  }

  function placeBoxes(boxes, chartArea, params) {
    var userPadding = params.padding;
    var x = chartArea.x;
    var y = chartArea.y;
    var i, ilen, layout, box;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;

      if (layout.horizontal) {
        box.left = box.fullWidth ? userPadding.left : chartArea.left;
        box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
        box.top = y;
        box.bottom = y + box.height;
        box.width = box.right - box.left;
        y = box.bottom;
      } else {
        box.left = x;
        box.right = x + box.width;
        box.top = chartArea.top;
        box.bottom = chartArea.top + chartArea.h;
        box.height = box.bottom - box.top;
        x = box.right;
      }
    }

    chartArea.x = x;
    chartArea.y = y;
  }

  core_defaults._set('global', {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });
  /**
   * @interface ILayoutItem
   * @prop {string} position - The position of the item in the chart layout. Possible values are
   * 'left', 'top', 'right', 'bottom', and 'chartArea'
   * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
   * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
   * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
   * @prop {function} update - Takes two parameters: width and height. Returns size of item
   * @prop {function} getPadding -  Returns an object with padding on the edges
   * @prop {number} width - Width of item. Must be valid after update()
   * @prop {number} height - Height of item. Must be valid after update()
   * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
   * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
   * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
   * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
   */
  // The layout service is very self explanatory.  It's responsible for the layout within a chart.
  // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
  // It is this service's responsibility of carrying out that layout.


  var core_layouts = {
    defaults: {},

    /**
     * Register a box to a chart.
     * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
     * @param {Chart} chart - the chart to use
     * @param {ILayoutItem} item - the item to add to be layed out
     */
    addBox: function addBox(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      } // initialize item with default values


      item.fullWidth = item.fullWidth || false;
      item.position = item.position || 'top';
      item.weight = item.weight || 0;

      item._layers = item._layers || function () {
        return [{
          z: 0,
          draw: function draw() {
            item.draw.apply(item, arguments);
          }
        }];
      };

      chart.boxes.push(item);
    },

    /**
     * Remove a layoutItem from a chart
     * @param {Chart} chart - the chart to remove the box from
     * @param {ILayoutItem} layoutItem - the item to remove from the layout
     */
    removeBox: function removeBox(chart, layoutItem) {
      var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },

    /**
     * Sets (or updates) options on the given `item`.
     * @param {Chart} chart - the chart in which the item lives (or will be added to)
     * @param {ILayoutItem} item - the item to configure with the given options
     * @param {object} options - the new item options.
     */
    configure: function configure(chart, item, options) {
      var props = ['fullWidth', 'position', 'weight'];
      var ilen = props.length;
      var i = 0;
      var prop;

      for (; i < ilen; ++i) {
        prop = props[i];

        if (options.hasOwnProperty(prop)) {
          item[prop] = options[prop];
        }
      }
    },

    /**
     * Fits boxes of the given chart into the given size by having each box measure itself
     * then running a fitting algorithm
     * @param {Chart} chart - the chart
     * @param {number} width - the width to fit into
     * @param {number} height - the height to fit into
     */
    update: function update(chart, width, height) {
      if (!chart) {
        return;
      }

      var layoutOptions = chart.options.layout || {};
      var padding = helpers$1.options.toPadding(layoutOptions.padding);
      var availableWidth = width - padding.width;
      var availableHeight = height - padding.height;
      var boxes = buildLayoutBoxes(chart.boxes);
      var verticalBoxes = boxes.vertical;
      var horizontalBoxes = boxes.horizontal; // Essentially we now have any number of boxes on each of the 4 sides.
      // Our canvas looks like the following.
      // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
      // B1 is the bottom axis
      // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
      // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
      // an error will be thrown.
      //
      // |----------------------------------------------------|
      // |                  T1 (Full Width)                   |
      // |----------------------------------------------------|
      // |    |    |                 T2                  |    |
      // |    |----|-------------------------------------|----|
      // |    |    | C1 |                           | C2 |    |
      // |    |    |----|                           |----|    |
      // |    |    |                                     |    |
      // | L1 | L2 |           ChartArea (C0)            | R1 |
      // |    |    |                                     |    |
      // |    |    |----|                           |----|    |
      // |    |    | C3 |                           | C4 |    |
      // |    |----|-------------------------------------|----|
      // |    |    |                 B1                  |    |
      // |----------------------------------------------------|
      // |                  B2 (Full Width)                   |
      // |----------------------------------------------------|
      //

      var params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding: padding,
        availableWidth: availableWidth,
        vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
        hBoxMaxHeight: availableHeight / 2
      });
      var chartArea = extend({
        maxPadding: extend({}, padding),
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      setLayoutDims(verticalBoxes.concat(horizontalBoxes), params); // First fit vertical boxes

      fitBoxes(verticalBoxes, chartArea, params); // Then fit horizontal boxes

      if (fitBoxes(horizontalBoxes, chartArea, params)) {
        // if the area changed, re-fit vertical boxes
        fitBoxes(verticalBoxes, chartArea, params);
      }

      handleMaxPadding(chartArea); // Finally place the boxes to correct coordinates

      placeBoxes(boxes.leftAndTop, chartArea, params); // Move to opposite side of chart

      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h
      }; // Finally update boxes in chartArea (radial scale for example)

      helpers$1.each(boxes.chartArea, function (layout) {
        var box = layout.box;
        extend(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h);
      });
    }
  };
  /**
   * Platform fallback implementation (minimal).
   * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
   */

  var platform_basic = {
    acquireContext: function acquireContext(item) {
      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }

      return item && item.getContext('2d') || null;
    }
  };
  var platform_dom = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n";
  var platform_dom$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': platform_dom
  });
  var stylesheet = getCjsExportFromNamespace(platform_dom$1);
  var EXPANDO_KEY = '$chartjs';
  var CSS_PREFIX = 'chartjs-';
  var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
  var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
  var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
  var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
  /**
   * DOM event types -> Chart.js event types.
   * Note: only events with different types are mapped.
   * @see https://developer.mozilla.org/en-US/docs/Web/Events
   */

  var EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  };
  /**
   * The "used" size is the final value of a dimension property after all calculations have
   * been performed. This method uses the computed style of `element` but returns undefined
   * if the computed style is not expressed in pixels. That can happen in some cases where
   * `element` has a size relative to its parent and this last one is not yet displayed,
   * for example because of `display: none` on a parent node.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
   * @returns {number} Size in pixels or undefined if unknown.
   */

  function readUsedSize(element, property) {
    var value = helpers$1.getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? Number(matches[1]) : undefined;
  }
  /**
   * Initializes the canvas style and render size without modifying the canvas display size,
   * since responsiveness is handled by the controller.resize() method. The config is used
   * to determine the aspect ratio to apply in case no explicit height has been specified.
   */


  function initCanvas(canvas, config) {
    var style = canvas.style; // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
    // returns null or '' if no explicit value has been set to the canvas attribute.

    var renderHeight = canvas.getAttribute('height');
    var renderWidth = canvas.getAttribute('width'); // Chart.js modifies some canvas values that we want to restore on destroy

    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    }; // Force canvas to display as block to avoid extra space caused by inline
    // elements, which would interfere with the responsive resize process.
    // https://github.com/chartjs/Chart.js/issues/2538

    style.display = style.display || 'block';

    if (renderWidth === null || renderWidth === '') {
      var displayWidth = readUsedSize(canvas, 'width');

      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }

    if (renderHeight === null || renderHeight === '') {
      if (canvas.style.height === '') {
        // If no explicit render height and style height, let's apply the aspect ratio,
        // which one can be specified by the user but also by charts as default option
        // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
        canvas.height = canvas.width / (config.options.aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, 'height');

        if (displayWidth !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }

    return canvas;
  }
  /**
   * Detects support for options object argument in addEventListener.
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
   * @private
   */


  var supportsEventListenerOptions = function () {
    var supports = false;

    try {
      var options = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get: function get() {
          supports = true;
        }
      });
      window.addEventListener('e', null, options);
    } catch (e) {// continue regardless of error
    }

    return supports;
  }(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
  // https://github.com/chartjs/Chart.js/issues/4287


  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;

  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }

  function removeListener(node, type, listener) {
    node.removeEventListener(type, listener, eventListenerOptions);
  }

  function createEvent(type, chart, x, y, nativeEvent) {
    return {
      type: type,
      chart: chart,
      "native": nativeEvent || null,
      x: x !== undefined ? x : null,
      y: y !== undefined ? y : null
    };
  }

  function fromNativeEvent(event, chart) {
    var type = EVENT_TYPES[event.type] || event.type;
    var pos = helpers$1.getRelativePosition(event, chart);
    return createEvent(type, chart, pos.x, pos.y, event);
  }

  function throttled(fn, thisArg) {
    var ticking = false;
    var args = [];
    return function () {
      args = Array.prototype.slice.call(arguments);
      thisArg = thisArg || this;

      if (!ticking) {
        ticking = true;
        helpers$1.requestAnimFrame.call(window, function () {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }

  function createDiv(cls) {
    var el = document.createElement('div');
    el.className = cls || '';
    return el;
  } // Implementation based on https://github.com/marcj/css-element-queries


  function createResizer(handler) {
    var maxSize = 1000000; // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
    // https://github.com/chartjs/Chart.js/issues/5902

    var resizer = createDiv(CSS_SIZE_MONITOR);
    var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
    var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');
    expand.appendChild(createDiv());
    shrink.appendChild(createDiv());
    resizer.appendChild(expand);
    resizer.appendChild(shrink);

    resizer._reset = function () {
      expand.scrollLeft = maxSize;
      expand.scrollTop = maxSize;
      shrink.scrollLeft = maxSize;
      shrink.scrollTop = maxSize;
    };

    var onScroll = function onScroll() {
      resizer._reset();

      handler();
    };

    addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
    addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
    return resizer;
  } // https://davidwalsh.name/detect-node-insertion


  function watchForRender(node, handler) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

    var proxy = expando.renderProxy = function (e) {
      if (e.animationName === CSS_RENDER_ANIMATION) {
        handler();
      }
    };

    helpers$1.each(ANIMATION_START_EVENTS, function (type) {
      addListener(node, type, proxy);
    }); // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
    // is removed then added back immediately (same animation frame?). Accessing the
    // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
    // https://github.com/chartjs/Chart.js/issues/4737

    expando.reflow = !!node.offsetParent;
    node.classList.add(CSS_RENDER_MONITOR);
  }

  function unwatchForRender(node) {
    var expando = node[EXPANDO_KEY] || {};
    var proxy = expando.renderProxy;

    if (proxy) {
      helpers$1.each(ANIMATION_START_EVENTS, function (type) {
        removeListener(node, type, proxy);
      });
      delete expando.renderProxy;
    }

    node.classList.remove(CSS_RENDER_MONITOR);
  }

  function addResizeListener(node, listener, chart) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {}); // Let's keep track of this added resizer and thus avoid DOM query when removing it.

    var resizer = expando.resizer = createResizer(throttled(function () {
      if (expando.resizer) {
        var container = chart.options.maintainAspectRatio && node.parentNode;
        var w = container ? container.clientWidth : 0;
        listener(createEvent('resize', chart));

        if (container && container.clientWidth < w && chart.canvas) {
          // If the container size shrank during chart resize, let's assume
          // scrollbar appeared. So we resize again with the scrollbar visible -
          // effectively making chart smaller and the scrollbar hidden again.
          // Because we are inside `throttled`, and currently `ticking`, scroll
          // events are ignored during this whole 2 resize process.
          // If we assumed wrong and something else happened, we are resizing
          // twice in a frame (potential performance issue)
          listener(createEvent('resize', chart));
        }
      }
    })); // The resizer needs to be attached to the node parent, so we first need to be
    // sure that `node` is attached to the DOM before injecting the resizer element.

    watchForRender(node, function () {
      if (expando.resizer) {
        var container = node.parentNode;

        if (container && container !== resizer.parentNode) {
          container.insertBefore(resizer, container.firstChild);
        } // The container size might have changed, let's reset the resizer state.


        resizer._reset();
      }
    });
  }

  function removeResizeListener(node) {
    var expando = node[EXPANDO_KEY] || {};
    var resizer = expando.resizer;
    delete expando.resizer;
    unwatchForRender(node);

    if (resizer && resizer.parentNode) {
      resizer.parentNode.removeChild(resizer);
    }
  }
  /**
   * Injects CSS styles inline if the styles are not already present.
   * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
   * @param {string} css - the CSS to be injected.
   */


  function injectCSS(rootNode, css) {
    // https://stackoverflow.com/q/3922139
    var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});

    if (!expando.containsStyles) {
      expando.containsStyles = true;
      css = '/* Chart.js */\n' + css;
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.appendChild(document.createTextNode(css));
      rootNode.appendChild(style);
    }
  }

  var platform_dom$2 = {
    /**
     * When `true`, prevents the automatic injection of the stylesheet required to
     * correctly detect when the chart is added to the DOM and then resized. This
     * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
     * to be manually imported to make this library compatible with any CSP.
     * See https://github.com/chartjs/Chart.js/issues/5208
     */
    disableCSSInjection: false,

    /**
     * This property holds whether this platform is enabled for the current environment.
     * Currently used by platform.js to select the proper implementation.
     * @private
     */
    _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

    /**
     * Initializes resources that depend on platform options.
     * @param {HTMLCanvasElement} canvas - The Canvas element.
     * @private
     */
    _ensureLoaded: function _ensureLoaded(canvas) {
      if (!this.disableCSSInjection) {
        // If the canvas is in a shadow DOM, then the styles must also be inserted
        // into the same shadow DOM.
        // https://github.com/chartjs/Chart.js/issues/5763
        var root = canvas.getRootNode ? canvas.getRootNode() : document;
        var targetNode = root.host ? root : document.head;
        injectCSS(targetNode, stylesheet);
      }
    },
    acquireContext: function acquireContext(item, config) {
      if (typeof item === 'string') {
        item = document.getElementById(item);
      } else if (item.length) {
        // Support for array based queries (such as jQuery)
        item = item[0];
      }

      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      } // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807


      var context = item && item.getContext && item.getContext('2d'); // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
      // inside an iframe or when running in a protected environment. We could guess the
      // types from their toString() value but let's keep things flexible and assume it's
      // a sufficient condition if the item has a context2D which has item as `canvas`.
      // https://github.com/chartjs/Chart.js/issues/3887
      // https://github.com/chartjs/Chart.js/issues/4102
      // https://github.com/chartjs/Chart.js/issues/4152

      if (context && context.canvas === item) {
        // Load platform resources on first chart creation, to make it possible to
        // import the library before setting platform options.
        this._ensureLoaded(item);

        initCanvas(item, config);
        return context;
      }

      return null;
    },
    releaseContext: function releaseContext(context) {
      var canvas = context.canvas;

      if (!canvas[EXPANDO_KEY]) {
        return;
      }

      var initial = canvas[EXPANDO_KEY].initial;
      ['height', 'width'].forEach(function (prop) {
        var value = initial[prop];

        if (helpers$1.isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      helpers$1.each(initial.style || {}, function (value, key) {
        canvas.style[key] = value;
      }); // The canvas render size might have been changed (and thus the state stack discarded),
      // we can't use save() and restore() to restore the initial state. So make sure that at
      // least the canvas context is reset to the default state by setting the canvas width.
      // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
      // eslint-disable-next-line no-self-assign

      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
    },
    addEventListener: function addEventListener(chart, type, listener) {
      var canvas = chart.canvas;

      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        addResizeListener(canvas, listener, chart);
        return;
      }

      var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
      var proxies = expando.proxies || (expando.proxies = {});

      var proxy = proxies[chart.id + '_' + type] = function (event) {
        listener(fromNativeEvent(event, chart));
      };

      addListener(canvas, type, proxy);
    },
    removeEventListener: function removeEventListener(chart, type, listener) {
      var canvas = chart.canvas;

      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        removeResizeListener(canvas);
        return;
      }

      var expando = listener[EXPANDO_KEY] || {};
      var proxies = expando.proxies || {};
      var proxy = proxies[chart.id + '_' + type];

      if (!proxy) {
        return;
      }

      removeListener(canvas, type, proxy);
    }
  }; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use EventTarget.addEventListener instead.
   * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @function Chart.helpers.addEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.addEvent = addListener;
  /**
   * Provided for backward compatibility, use EventTarget.removeEventListener instead.
   * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @function Chart.helpers.removeEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.removeEvent = removeListener; // @TODO Make possible to select another platform at build time.

  var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
  /**
   * @namespace Chart.platform
   * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
   * @since 2.4.0
   */

  var platform = helpers$1.extend({
    /**
     * @since 2.7.0
     */
    initialize: function initialize() {},

    /**
     * Called at chart construction time, returns a context2d instance implementing
     * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
     * @param {*} item - The native item from which to acquire context (platform specific)
     * @param {object} options - The chart options
     * @returns {CanvasRenderingContext2D} context2d instance
     */
    acquireContext: function acquireContext() {},

    /**
     * Called at chart destruction time, releases any resources associated to the context
     * previously returned by the acquireContext() method.
     * @param {CanvasRenderingContext2D} context - The context2d instance
     * @returns {boolean} true if the method succeeded, else false
     */
    releaseContext: function releaseContext() {},

    /**
     * Registers the specified listener on the given chart.
     * @param {Chart} chart - Chart from which to listen for event
     * @param {string} type - The ({@link IEvent}) type to listen for
     * @param {function} listener - Receives a notification (an object that implements
     * the {@link IEvent} interface) when an event of the specified type occurs.
     */
    addEventListener: function addEventListener() {},

    /**
     * Removes the specified listener previously registered with addEventListener.
     * @param {Chart} chart - Chart from which to remove the listener
     * @param {string} type - The ({@link IEvent}) type to remove
     * @param {function} listener - The listener function to remove from the event target.
     */
    removeEventListener: function removeEventListener() {}
  }, implementation);

  core_defaults._set('global', {
    plugins: {}
  });
  /**
   * The plugin service singleton
   * @namespace Chart.plugins
   * @since 2.1.0
   */


  var core_plugins = {
    /**
     * Globally registered plugins.
     * @private
     */
    _plugins: [],

    /**
     * This identifier is used to invalidate the descriptors cache attached to each chart
     * when a global plugin is registered or unregistered. In this case, the cache ID is
     * incremented and descriptors are regenerated during following API calls.
     * @private
     */
    _cacheId: 0,

    /**
     * Registers the given plugin(s) if not already registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    register: function register(plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        if (p.indexOf(plugin) === -1) {
          p.push(plugin);
        }
      });
      this._cacheId++;
    },

    /**
     * Unregisters the given plugin(s) only if registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    unregister: function unregister(plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        var idx = p.indexOf(plugin);

        if (idx !== -1) {
          p.splice(idx, 1);
        }
      });
      this._cacheId++;
    },

    /**
     * Remove all registered plugins.
     * @since 2.1.5
     */
    clear: function clear() {
      this._plugins = [];
      this._cacheId++;
    },

    /**
     * Returns the number of registered plugins?
     * @returns {number}
     * @since 2.1.5
     */
    count: function count() {
      return this._plugins.length;
    },

    /**
     * Returns all registered plugin instances.
     * @returns {IPlugin[]} array of plugin objects.
     * @since 2.1.5
     */
    getAll: function getAll() {
      return this._plugins;
    },

    /**
     * Calls enabled plugins for `chart` on the specified hook and with the given args.
     * This method immediately returns as soon as a plugin explicitly returns false. The
     * returned value can be used, for instance, to interrupt the current action.
     * @param {Chart} chart - The chart instance for which plugins should be called.
     * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
     * @param {Array} [args] - Extra arguments to apply to the hook call.
     * @returns {boolean} false if any of the plugins return false, else returns true.
     */
    notify: function notify(chart, hook, args) {
      var descriptors = this.descriptors(chart);
      var ilen = descriptors.length;
      var i, descriptor, plugin, params, method;

      for (i = 0; i < ilen; ++i) {
        descriptor = descriptors[i];
        plugin = descriptor.plugin;
        method = plugin[hook];

        if (typeof method === 'function') {
          params = [chart].concat(args || []);
          params.push(descriptor.options);

          if (method.apply(plugin, params) === false) {
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Returns descriptors of enabled plugins for the given chart.
     * @returns {object[]} [{ plugin, options }]
     * @private
     */
    descriptors: function descriptors(chart) {
      var cache = chart.$plugins || (chart.$plugins = {});

      if (cache.id === this._cacheId) {
        return cache.descriptors;
      }

      var plugins = [];
      var descriptors = [];
      var config = chart && chart.config || {};
      var options = config.options && config.options.plugins || {};

      this._plugins.concat(config.plugins || []).forEach(function (plugin) {
        var idx = plugins.indexOf(plugin);

        if (idx !== -1) {
          return;
        }

        var id = plugin.id;
        var opts = options[id];

        if (opts === false) {
          return;
        }

        if (opts === true) {
          opts = helpers$1.clone(core_defaults.global.plugins[id]);
        }

        plugins.push(plugin);
        descriptors.push({
          plugin: plugin,
          options: opts || {}
        });
      });

      cache.descriptors = descriptors;
      cache.id = this._cacheId;
      return descriptors;
    },

    /**
     * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
     * but in some cases, this reference can be changed by the user when updating options.
     * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
     * @private
     */
    _invalidate: function _invalidate(chart) {
      delete chart.$plugins;
    }
  };
  var core_scaleService = {
    // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
    // use the new chart options to grab the correct scale
    constructors: {},
    // Use a registration function so that we can move to an ES6 map when we no longer need to support
    // old browsers
    // Scale config defaults
    defaults: {},
    registerScaleType: function registerScaleType(type, scaleConstructor, scaleDefaults) {
      this.constructors[type] = scaleConstructor;
      this.defaults[type] = helpers$1.clone(scaleDefaults);
    },
    getScaleConstructor: function getScaleConstructor(type) {
      return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
    },
    getScaleDefaults: function getScaleDefaults(type) {
      // Return the scale defaults merged with the global settings so that we always use the latest ones
      return this.defaults.hasOwnProperty(type) ? helpers$1.merge(Object.create(null), [core_defaults.scale, this.defaults[type]]) : {};
    },
    updateScaleDefaults: function updateScaleDefaults(type, additions) {
      var me = this;

      if (me.defaults.hasOwnProperty(type)) {
        me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
      }
    },
    addScalesToLayout: function addScalesToLayout(chart) {
      // Adds each scale to the chart.boxes array to be sized accordingly
      helpers$1.each(chart.scales, function (scale) {
        // Set ILayoutItem parameters for backwards compatibility
        scale.fullWidth = scale.options.fullWidth;
        scale.position = scale.options.position;
        scale.weight = scale.options.weight;
        core_layouts.addBox(chart, scale);
      });
    }
  };
  var valueOrDefault$8 = helpers$1.valueOrDefault;
  var getRtlHelper = helpers$1.rtl.getRtlAdapter;

  core_defaults._set('global', {
    tooltips: {
      enabled: true,
      custom: null,
      mode: 'nearest',
      position: 'average',
      intersect: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleFontStyle: 'bold',
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: '#fff',
      titleAlign: 'left',
      bodySpacing: 2,
      bodyFontColor: '#fff',
      bodyAlign: 'left',
      footerFontStyle: 'bold',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: '#fff',
      footerAlign: 'left',
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: '#fff',
      displayColors: true,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      callbacks: {
        // Args are: (tooltipItems, data)
        beforeTitle: helpers$1.noop,
        title: function title(tooltipItems, data) {
          var title = '';
          var labels = data.labels;
          var labelCount = labels ? labels.length : 0;

          if (tooltipItems.length > 0) {
            var item = tooltipItems[0];

            if (item.label) {
              title = item.label;
            } else if (item.xLabel) {
              title = item.xLabel;
            } else if (labelCount > 0 && item.index < labelCount) {
              title = labels[item.index];
            }
          }

          return title;
        },
        afterTitle: helpers$1.noop,
        // Args are: (tooltipItems, data)
        beforeBody: helpers$1.noop,
        // Args are: (tooltipItem, data)
        beforeLabel: helpers$1.noop,
        label: function label(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }

          if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
            label += tooltipItem.value;
          } else {
            label += tooltipItem.yLabel;
          }

          return label;
        },
        labelColor: function labelColor(tooltipItem, chart) {
          var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
          var activeElement = meta.data[tooltipItem.index];
          var view = activeElement._view;
          return {
            borderColor: view.borderColor,
            backgroundColor: view.backgroundColor
          };
        },
        labelTextColor: function labelTextColor() {
          return this._options.bodyFontColor;
        },
        afterLabel: helpers$1.noop,
        // Args are: (tooltipItems, data)
        afterBody: helpers$1.noop,
        // Args are: (tooltipItems, data)
        beforeFooter: helpers$1.noop,
        footer: helpers$1.noop,
        afterFooter: helpers$1.noop
      }
    }
  });

  var positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {object} tooltip position
     */
    average: function average(elements) {
      if (!elements.length) {
        return false;
      }

      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];

        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }

      return {
        x: x / count,
        y: y / count
      };
    },

    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {object} the position of the event in canvas coordinates
     * @returns {object} the tooltip position
     */
    nearest: function nearest(elements, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len, nearestElement;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];

        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = helpers$1.distanceBetweenPoints(eventPosition, center);

          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }

      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }

      return {
        x: x,
        y: y
      };
    }
  }; // Helper to push or concat based on if the 2nd parameter is an array or not

  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (helpers$1.isArray(toPush)) {
        // base = base.concat(toPush);
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }

    return base;
  }
  /**
   * Returns array of strings split by newline
   * @param {string} value - The value to split by newline.
   * @returns {string[]} value if newline present - Returned from String split() method
   * @function
   */


  function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
      return str.split('\n');
    }

    return str;
  }
  /**
   * Private helper to create a tooltip item model
   * @param element - the chart element (point, arc, bar) to create the tooltip item for
   * @return new tooltip item
   */


  function createTooltipItem(element) {
    var xScale = element._xScale;
    var yScale = element._yScale || element._scale; // handle radar || polarArea charts

    var index = element._index;
    var datasetIndex = element._datasetIndex;

    var controller = element._chart.getDatasetMeta(datasetIndex).controller;

    var indexScale = controller._getIndexScale();

    var valueScale = controller._getValueScale();

    return {
      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
      label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
      value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
      index: index,
      datasetIndex: datasetIndex,
      x: element._model.x,
      y: element._model.y
    };
  }
  /**
   * Helper to get the reset model for the tooltip
   * @param tooltipOpts {object} the tooltip options
   */


  function getBaseModel(tooltipOpts) {
    var globalDefaults = core_defaults.global;
    return {
      // Positioning
      xPadding: tooltipOpts.xPadding,
      yPadding: tooltipOpts.yPadding,
      xAlign: tooltipOpts.xAlign,
      yAlign: tooltipOpts.yAlign,
      // Drawing direction and text direction
      rtl: tooltipOpts.rtl,
      textDirection: tooltipOpts.textDirection,
      // Body
      bodyFontColor: tooltipOpts.bodyFontColor,
      _bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
      _bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
      _bodyAlign: tooltipOpts.bodyAlign,
      bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
      bodySpacing: tooltipOpts.bodySpacing,
      // Title
      titleFontColor: tooltipOpts.titleFontColor,
      _titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
      _titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
      titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
      _titleAlign: tooltipOpts.titleAlign,
      titleSpacing: tooltipOpts.titleSpacing,
      titleMarginBottom: tooltipOpts.titleMarginBottom,
      // Footer
      footerFontColor: tooltipOpts.footerFontColor,
      _footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
      _footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
      footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
      _footerAlign: tooltipOpts.footerAlign,
      footerSpacing: tooltipOpts.footerSpacing,
      footerMarginTop: tooltipOpts.footerMarginTop,
      // Appearance
      caretSize: tooltipOpts.caretSize,
      cornerRadius: tooltipOpts.cornerRadius,
      backgroundColor: tooltipOpts.backgroundColor,
      opacity: 0,
      legendColorBackground: tooltipOpts.multiKeyBackground,
      displayColors: tooltipOpts.displayColors,
      borderColor: tooltipOpts.borderColor,
      borderWidth: tooltipOpts.borderWidth
    };
  }
  /**
   * Get the size of the tooltip
   */


  function getTooltipSize(tooltip, model) {
    var ctx = tooltip._chart.ctx;
    var height = model.yPadding * 2; // Tooltip Padding

    var width = 0; // Count of all lines in the body

    var body = model.body;
    var combinedBodyLength = body.reduce(function (count, bodyItem) {
      return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
    }, 0);
    combinedBodyLength += model.beforeBody.length + model.afterBody.length;
    var titleLineCount = model.title.length;
    var footerLineCount = model.footer.length;
    var titleFontSize = model.titleFontSize;
    var bodyFontSize = model.bodyFontSize;
    var footerFontSize = model.footerFontSize;
    height += titleLineCount * titleFontSize; // Title Lines

    height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing

    height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin

    height += combinedBodyLength * bodyFontSize; // Body Lines

    height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing

    height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin

    height += footerLineCount * footerFontSize; // Footer Lines

    height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
    // Title width

    var widthPadding = 0;

    var maxLineWidth = function maxLineWidth(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };

    ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
    helpers$1.each(model.title, maxLineWidth); // Body width

    ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
    helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth); // Body lines may include some extra width due to the color box

    widthPadding = model.displayColors ? bodyFontSize + 2 : 0;
    helpers$1.each(body, function (bodyItem) {
      helpers$1.each(bodyItem.before, maxLineWidth);
      helpers$1.each(bodyItem.lines, maxLineWidth);
      helpers$1.each(bodyItem.after, maxLineWidth);
    }); // Reset back to 0

    widthPadding = 0; // Footer width

    ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
    helpers$1.each(model.footer, maxLineWidth); // Add padding

    width += 2 * model.xPadding;
    return {
      width: width,
      height: height
    };
  }
  /**
   * Helper to get the alignment of a tooltip given the size
   */


  function determineAlignment(tooltip, size) {
    var model = tooltip._model;
    var chart = tooltip._chart;
    var chartArea = tooltip._chart.chartArea;
    var xAlign = 'center';
    var yAlign = 'center';

    if (model.y < size.height) {
      yAlign = 'top';
    } else if (model.y > chart.height - size.height) {
      yAlign = 'bottom';
    }

    var lf, rf; // functions to determine left, right alignment

    var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart

    var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges

    var midX = (chartArea.left + chartArea.right) / 2;
    var midY = (chartArea.top + chartArea.bottom) / 2;

    if (yAlign === 'center') {
      lf = function lf(x) {
        return x <= midX;
      };

      rf = function rf(x) {
        return x > midX;
      };
    } else {
      lf = function lf(x) {
        return x <= size.width / 2;
      };

      rf = function rf(x) {
        return x >= chart.width - size.width / 2;
      };
    }

    olf = function olf(x) {
      return x + size.width + model.caretSize + model.caretPadding > chart.width;
    };

    orf = function orf(x) {
      return x - size.width - model.caretSize - model.caretPadding < 0;
    };

    yf = function yf(y) {
      return y <= midY ? 'top' : 'bottom';
    };

    if (lf(model.x)) {
      xAlign = 'left'; // Is tooltip too wide and goes over the right side of the chart.?

      if (olf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    } else if (rf(model.x)) {
      xAlign = 'right'; // Is tooltip too wide and goes outside left edge of canvas?

      if (orf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    }

    var opts = tooltip._options;
    return {
      xAlign: opts.xAlign ? opts.xAlign : xAlign,
      yAlign: opts.yAlign ? opts.yAlign : yAlign
    };
  }
  /**
   * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
   */


  function getBackgroundPoint(vm, size, alignment, chart) {
    // Background Position
    var x = vm.x;
    var y = vm.y;
    var caretSize = vm.caretSize;
    var caretPadding = vm.caretPadding;
    var cornerRadius = vm.cornerRadius;
    var xAlign = alignment.xAlign;
    var yAlign = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;

    if (xAlign === 'right') {
      x -= size.width;
    } else if (xAlign === 'center') {
      x -= size.width / 2;

      if (x + size.width > chart.width) {
        x = chart.width - size.width;
      }

      if (x < 0) {
        x = 0;
      }
    }

    if (yAlign === 'top') {
      y += paddingAndSize;
    } else if (yAlign === 'bottom') {
      y -= size.height + paddingAndSize;
    } else {
      y -= size.height / 2;
    }

    if (yAlign === 'center') {
      if (xAlign === 'left') {
        x += paddingAndSize;
      } else if (xAlign === 'right') {
        x -= paddingAndSize;
      }
    } else if (xAlign === 'left') {
      x -= radiusAndPadding;
    } else if (xAlign === 'right') {
      x += radiusAndPadding;
    }

    return {
      x: x,
      y: y
    };
  }

  function getAlignedX(vm, align) {
    return align === 'center' ? vm.x + vm.width / 2 : align === 'right' ? vm.x + vm.width - vm.xPadding : vm.x + vm.xPadding;
  }
  /**
   * Helper to build before and after body lines
   */


  function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
  }

  var exports$4 = core_element.extend({
    initialize: function initialize() {
      this._model = getBaseModel(this._options);
      this._lastActive = [];
    },
    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function getTitle() {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;
      var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
      var title = callbacks.title.apply(me, arguments);
      var afterTitle = callbacks.afterTitle.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    },
    // Args are: (tooltipItem, data)
    getBeforeBody: function getBeforeBody() {
      return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
    },
    // Args are: (tooltipItem, data)
    getBody: function getBody(tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];
      helpers$1.each(tooltipItems, function (tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    },
    // Args are: (tooltipItem, data)
    getAfterBody: function getAfterBody() {
      return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
    },
    // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)
    getFooter: function getFooter() {
      var me = this;
      var callbacks = me._options.callbacks;
      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    },
    update: function update(changed) {
      var me = this;
      var opts = me._options; // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.

      var existingModel = me._model;
      var model = me._model = getBaseModel(opts);
      var active = me._active;
      var data = me._data; // In the case where active.length === 0 we need to keep these at existing values for good animations

      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY
      };
      var i, len;

      if (active.length) {
        model.opacity = 1;
        var labelColors = [];
        var labelTextColors = [];
        tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
        var tooltipItems = [];

        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(active[i]));
        } // If the user provided a filter function, use it to modify the tooltip items


        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function (a) {
            return opts.filter(a, data);
          });
        } // If the user provided a sorting function, use it to modify the tooltip items


        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function (a, b) {
            return opts.itemSort(a, b, data);
          });
        } // Determine colors for boxes


        helpers$1.each(tooltipItems, function (tooltipItem) {
          labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
          labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
        }); // Build the Text Lines

        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data); // Initial positioning and colors

        model.x = tooltipPosition.x;
        model.y = tooltipPosition.y;
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;
        model.labelTextColors = labelTextColors; // data points

        model.dataPoints = tooltipItems; // We need to determine alignment of the tooltip

        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize); // Final Size and Position

        backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
      } else {
        model.opacity = 0;
      }

      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height; // Point where the caret on the tooltip points to

      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;
      me._model = model;

      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }

      return me;
    },
    drawCaret: function drawCaret(tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    },
    getCaretPosition: function getCaretPosition(tooltipPoint, size, vm) {
      var x1, x2, x3, y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var ptX = tooltipPoint.x;
      var ptY = tooltipPoint.y;
      var width = size.width;
      var height = size.height;

      if (yAlign === 'center') {
        y2 = ptY + height / 2;

        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === 'left') {
          x2 = ptX + cornerRadius + caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = vm.caretX;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }

        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1; // invert drawing order

          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }

      return {
        x1: x1,
        x2: x2,
        x3: x3,
        y1: y1,
        y2: y2,
        y3: y3
      };
    },
    drawTitle: function drawTitle(pt, vm, ctx) {
      var title = vm.title;
      var length = title.length;
      var titleFontSize, titleSpacing, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._titleAlign);
        ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
        ctx.textBaseline = 'middle';
        titleFontSize = vm.titleFontSize;
        titleSpacing = vm.titleSpacing;
        ctx.fillStyle = vm.titleFontColor;
        ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing

          if (i + 1 === length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    },
    drawBody: function drawBody(pt, vm, ctx) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var bodyAlign = vm._bodyAlign;
      var body = vm.body;
      var drawColorBoxes = vm.displayColors;
      var xLinePadding = 0;
      var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
      var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

      var fillLineOfText = function fillLineOfText(line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
        pt.y += bodyFontSize + bodySpacing;
      };

      var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
      var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = 'middle';
      ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
      pt.x = getAlignedX(vm, bodyAlignForCalculation); // Before body lines

      ctx.fillStyle = vm.bodyFontColor;
      helpers$1.each(vm.beforeBody, fillLineOfText);
      xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? bodyFontSize / 2 + 1 : bodyFontSize + 2 : 0; // Draw body lines now

      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = vm.labelTextColors[i];
        labelColors = vm.labelColors[i];
        ctx.fillStyle = textColor;
        helpers$1.each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;

        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            var rtlColorX = rtlHelper.x(colorX); // Fill a white rect so that colours merge nicely if the opacity is < 1

            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Border

            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Inner square

            ctx.fillStyle = labelColors.backgroundColor;
            ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
            ctx.fillStyle = textColor;
          }

          fillLineOfText(lines[j]);
        }

        helpers$1.each(bodyItem.after, fillLineOfText);
      } // Reset back to 0 for after body


      xLinePadding = 0; // After body lines

      helpers$1.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    },
    drawFooter: function drawFooter(pt, vm, ctx) {
      var footer = vm.footer;
      var length = footer.length;
      var footerFontSize, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._footerAlign);
        pt.y += vm.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
        ctx.textBaseline = 'middle';
        footerFontSize = vm.footerFontSize;
        ctx.fillStyle = vm.footerFontColor;
        ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
          pt.y += footerFontSize + vm.footerSpacing;
        }
      }
    },
    drawBackground: function drawBackground(pt, vm, ctx, tooltipSize) {
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);

      if (yAlign === 'top') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      if (yAlign === 'bottom') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    },
    draw: function draw() {
      var ctx = this._chart.ctx;
      var vm = this._view;

      if (vm.opacity === 0) {
        return;
      }

      var tooltipSize = {
        width: vm.width,
        height: vm.height
      };
      var pt = {
        x: vm.x,
        y: vm.y
      }; // IE11/Edge does not like very small opacities, so snap to 0

      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity; // Truthy/falsey value for empty tooltip

      var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

      if (this._options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity; // Draw Background

        this.drawBackground(pt, vm, ctx, tooltipSize); // Draw Title, Body, and Footer

        pt.y += vm.yPadding;
        helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection); // Titles

        this.drawTitle(pt, vm, ctx); // Body

        this.drawBody(pt, vm, ctx); // Footer

        this.drawFooter(pt, vm, ctx);
        helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);
        ctx.restore();
      }
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {boolean} true if the tooltip changed
     */
    handleEvent: function handleEvent(e) {
      var me = this;
      var options = me._options;
      var changed = false;
      me._lastActive = me._lastActive || []; // Find Active Elements for tooltips

      if (e.type === 'mouseout') {
        me._active = [];
      } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);

        if (options.reverse) {
          me._active.reverse();
        }
      } // Remember Last Actives


      changed = !helpers$1.arrayEquals(me._active, me._lastActive); // Only handle target event on tooltip change

      if (changed) {
        me._lastActive = me._active;

        if (options.enabled || options.custom) {
          me._eventPosition = {
            x: e.x,
            y: e.y
          };
          me.update(true);
          me.pivot();
        }
      }

      return changed;
    }
  });
  /**
   * @namespace Chart.Tooltip.positioners
   */

  var positioners_1 = positioners;
  var core_tooltip = exports$4;
  core_tooltip.positioners = positioners_1;
  var valueOrDefault$9 = helpers$1.valueOrDefault;

  core_defaults._set('global', {
    elements: {},
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    hover: {
      onHover: null,
      mode: 'nearest',
      intersect: true,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: true,
    responsive: true,
    responsiveAnimationDuration: 0
  });
  /**
   * Recursively merge the given config objects representing the `scales` option
   * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
   * returns a deep copy of the result, thus doesn't alter inputs.
   */


  function mergeScaleConfig()
  /* config objects ... */
  {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function merger(key, target, source, options) {
        if (key === 'xAxes' || key === 'yAxes') {
          var slen = source[key].length;
          var i, type, scale;

          if (!target[key]) {
            target[key] = [];
          }

          for (i = 0; i < slen; ++i) {
            scale = source[key][i];
            type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

            if (i >= target[key].length) {
              target[key].push({});
            }

            if (!target[key][i].type || scale.type && scale.type !== target[key][i].type) {
              // new/untyped scale or type changed: let's apply the new defaults
              // then merge source scale to correctly overwrite the defaults.
              helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
            } else {
              // scales type are the same
              helpers$1.merge(target[key][i], scale);
            }
          }
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }
  /**
   * Recursively merge the given config objects as the root options by handling
   * default scale options for the `scales` and `scale` properties, then returns
   * a deep copy of the result, thus doesn't alter inputs.
   */


  function mergeConfig()
  /* config objects ... */
  {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function merger(key, target, source, options) {
        var tval = target[key] || Object.create(null);
        var sval = source[key];

        if (key === 'scales') {
          // scale config merging is complex. Add our own function here for that
          target[key] = mergeScaleConfig(tval, sval);
        } else if (key === 'scale') {
          // used in polar area & radar charts since there is only one scale
          target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }

  function initConfig(config) {
    config = config || Object.create(null); // Do NOT use mergeConfig for the data object because this method merges arrays
    // and so would change references to labels and datasets, preventing data updates.

    var data = config.data = config.data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    config.options = mergeConfig(core_defaults.global, core_defaults[config.type], config.options || {});
    return config;
  }

  function updateConfig(chart) {
    var newOptions = chart.options;
    helpers$1.each(chart.scales, function (scale) {
      core_layouts.removeBox(chart, scale);
    });
    newOptions = mergeConfig(core_defaults.global, core_defaults[chart.config.type], newOptions);
    chart.options = chart.config.options = newOptions;
    chart.ensureScalesHaveIDs();
    chart.buildOrUpdateScales(); // Tooltip

    chart.tooltip._options = newOptions.tooltips;
    chart.tooltip.initialize();
  }

  function nextAvailableScaleId(axesOpts, prefix, index) {
    var id;

    var hasId = function hasId(obj) {
      return obj.id === id;
    };

    do {
      id = prefix + index++;
    } while (helpers$1.findIndex(axesOpts, hasId) >= 0);

    return id;
  }

  function positionIsHorizontal(position) {
    return position === 'top' || position === 'bottom';
  }

  function compare2Level(l1, l2) {
    return function (a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }

  var Chart = function Chart(item, config) {
    this.construct(item, config);
    return this;
  };

  helpers$1.extend(Chart.prototype,
  /** @lends Chart */
  {
    /**
     * @private
     */
    construct: function construct(item, config) {
      var me = this;
      config = initConfig(config);
      var context = platform.acquireContext(item, config);
      var canvas = context && context.canvas;
      var height = canvas && canvas.height;
      var width = canvas && canvas.width;
      me.id = helpers$1.uid();
      me.ctx = context;
      me.canvas = canvas;
      me.config = config;
      me.width = width;
      me.height = height;
      me.aspectRatio = height ? width / height : null;
      me.options = config.options;
      me._bufferedRender = false;
      me._layers = [];
      /**
       * Provided for backward compatibility, Chart and Chart.Controller have been merged,
       * the "instance" still need to be defined since it might be called from plugins.
       * @prop Chart#chart
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */

      me.chart = me;
      me.controller = me; // chart.chart.controller #inception
      // Add the chart instance to the global namespace

      Chart.instances[me.id] = me; // Define alias to the config data: `chart.data === chart.config.data`

      Object.defineProperty(me, 'data', {
        get: function get() {
          return me.config.data;
        },
        set: function set(value) {
          me.config.data = value;
        }
      });

      if (!context || !canvas) {
        // The given item is not a compatible context2d element, let's return before finalizing
        // the chart initialization but after setting basic chart / controller properties that
        // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
        // https://github.com/chartjs/Chart.js/issues/2807
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }

      me.initialize();
      me.update();
    },

    /**
     * @private
     */
    initialize: function initialize() {
      var me = this; // Before init plugin notification

      core_plugins.notify(me, 'beforeInit');
      helpers$1.retinaScale(me, me.options.devicePixelRatio);
      me.bindEvents();

      if (me.options.responsive) {
        // Initial resize before chart draws (must be silent to preserve initial animations).
        me.resize(true);
      }

      me.initToolTip(); // After init plugin notification

      core_plugins.notify(me, 'afterInit');
      return me;
    },
    clear: function clear() {
      helpers$1.canvas.clear(this);
      return this;
    },
    stop: function stop() {
      // Stops any current animation loop occurring
      core_animations.cancelAnimation(this);
      return this;
    },
    resize: function resize(silent) {
      var me = this;
      var options = me.options;
      var canvas = me.canvas;
      var aspectRatio = options.maintainAspectRatio && me.aspectRatio || null; // the canvas render width and height will be casted to integers so make sure that
      // the canvas display style uses the same integer values to avoid blurring effect.
      // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed

      var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
      var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

      if (me.width === newWidth && me.height === newHeight) {
        return;
      }

      canvas.width = me.width = newWidth;
      canvas.height = me.height = newHeight;
      canvas.style.width = newWidth + 'px';
      canvas.style.height = newHeight + 'px';
      helpers$1.retinaScale(me, options.devicePixelRatio);

      if (!silent) {
        // Notify any plugins about the resize
        var newSize = {
          width: newWidth,
          height: newHeight
        };
        core_plugins.notify(me, 'resize', [newSize]); // Notify of resize

        if (options.onResize) {
          options.onResize(me, newSize);
        }

        me.stop();
        me.update({
          duration: options.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function ensureScalesHaveIDs() {
      var options = this.options;
      var scalesOptions = options.scales || {};
      var scaleOptions = options.scale;
      helpers$1.each(scalesOptions.xAxes, function (xAxisOptions, index) {
        if (!xAxisOptions.id) {
          xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
        }
      });
      helpers$1.each(scalesOptions.yAxes, function (yAxisOptions, index) {
        if (!yAxisOptions.id) {
          yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
        }
      });

      if (scaleOptions) {
        scaleOptions.id = scaleOptions.id || 'scale';
      }
    },

    /**
     * Builds a map of scale ID to scale object for future lookup.
     */
    buildOrUpdateScales: function buildOrUpdateScales() {
      var me = this;
      var options = me.options;
      var scales = me.scales || {};
      var items = [];
      var updated = Object.keys(scales).reduce(function (obj, id) {
        obj[id] = false;
        return obj;
      }, {});

      if (options.scales) {
        items = items.concat((options.scales.xAxes || []).map(function (xAxisOptions) {
          return {
            options: xAxisOptions,
            dtype: 'category',
            dposition: 'bottom'
          };
        }), (options.scales.yAxes || []).map(function (yAxisOptions) {
          return {
            options: yAxisOptions,
            dtype: 'linear',
            dposition: 'left'
          };
        }));
      }

      if (options.scale) {
        items.push({
          options: options.scale,
          dtype: 'radialLinear',
          isDefault: true,
          dposition: 'chartArea'
        });
      }

      helpers$1.each(items, function (item) {
        var scaleOptions = item.options;
        var id = scaleOptions.id;
        var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

        if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }

        updated[id] = true;
        var scale = null;

        if (id in scales && scales[id].type === scaleType) {
          scale = scales[id];
          scale.options = scaleOptions;
          scale.ctx = me.ctx;
          scale.chart = me;
        } else {
          var scaleClass = core_scaleService.getScaleConstructor(scaleType);

          if (!scaleClass) {
            return;
          }

          scale = new scaleClass({
            id: id,
            type: scaleType,
            options: scaleOptions,
            ctx: me.ctx,
            chart: me
          });
          scales[scale.id] = scale;
        }

        scale.mergeTicksOptions(); // TODO(SB): I think we should be able to remove this custom case (options.scale)
        // and consider it as a regular scale part of the "scales"" map only! This would
        // make the logic easier and remove some useless? custom code.

        if (item.isDefault) {
          me.scale = scale;
        }
      }); // clear up discarded scales

      helpers$1.each(updated, function (hasUpdated, id) {
        if (!hasUpdated) {
          delete scales[id];
        }
      });
      me.scales = scales;
      core_scaleService.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function buildOrUpdateControllers() {
      var me = this;
      var newControllers = [];
      var datasets = me.data.datasets;
      var i, ilen;

      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        var dataset = datasets[i];
        var meta = me.getDatasetMeta(i);
        var type = dataset.type || me.config.type;

        if (meta.type && meta.type !== type) {
          me.destroyDatasetMeta(i);
          meta = me.getDatasetMeta(i);
        }

        meta.type = type;
        meta.order = dataset.order || 0;
        meta.index = i;

        if (meta.controller) {
          meta.controller.updateIndex(i);
          meta.controller.linkScales();
        } else {
          var ControllerClass = controllers[meta.type];

          if (ControllerClass === undefined) {
            throw new Error('"' + meta.type + '" is not a chart type.');
          }

          meta.controller = new ControllerClass(me, i);
          newControllers.push(meta.controller);
        }
      }

      return newControllers;
    },

    /**
     * Reset the elements of all datasets
     * @private
     */
    resetElements: function resetElements() {
      var me = this;
      helpers$1.each(me.data.datasets, function (dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.reset();
      }, me);
    },

    /**
    * Resets the chart back to it's state before the initial animation
    */
    reset: function reset() {
      this.resetElements();
      this.tooltip.initialize();
    },
    update: function update(config) {
      var me = this;
      var i, ilen;

      if (!config || _typeof(config) !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }

      updateConfig(me); // plugins options references might have change, let's invalidate the cache
      // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167

      core_plugins._invalidate(me);

      if (core_plugins.notify(me, 'beforeUpdate') === false) {
        return;
      } // In case the entire data object changed


      me.tooltip._data = me.data; // Make sure dataset controllers are updated and new controllers are reset

      var newControllers = me.buildOrUpdateControllers(); // Make sure all dataset controllers have correct meta data counts

      for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
        me.getDatasetMeta(i).controller.buildOrUpdateElements();
      }

      me.updateLayout(); // Can only reset the new controllers after the scales have been updated

      if (me.options.animation && me.options.animation.duration) {
        helpers$1.each(newControllers, function (controller) {
          controller.reset();
        });
      }

      me.updateDatasets(); // Need to reset tooltip in case it is displayed with elements that are removed
      // after update.

      me.tooltip.initialize(); // Last active contains items that were previously in the tooltip.
      // When we reset the tooltip, we need to clear it

      me.lastActive = []; // Do this before render so that any plugins that need final scale updates can use it

      core_plugins.notify(me, 'afterUpdate');

      me._layers.sort(compare2Level('z', '_idx'));

      if (me._bufferedRender) {
        me._bufferedRequest = {
          duration: config.duration,
          easing: config.easing,
          lazy: config.lazy
        };
      } else {
        me.render(config);
      }
    },

    /**
     * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
     * hook, in which case, plugins will not be called on `afterLayout`.
     * @private
     */
    updateLayout: function updateLayout() {
      var me = this;

      if (core_plugins.notify(me, 'beforeLayout') === false) {
        return;
      }

      core_layouts.update(this, this.width, this.height);
      me._layers = [];
      helpers$1.each(me.boxes, function (box) {
        // _configure is called twice, once in core.scale.update and once here.
        // Here the boxes are fully updated and at their final positions.
        if (box._configure) {
          box._configure();
        }

        me._layers.push.apply(me._layers, box._layers());
      }, me);

      me._layers.forEach(function (item, index) {
        item._idx = index;
      });
      /**
       * Provided for backward compatibility, use `afterLayout` instead.
       * @method IPlugin#afterScaleUpdate
       * @deprecated since version 2.5.0
       * @todo remove at version 3
       * @private
       */


      core_plugins.notify(me, 'afterScaleUpdate');
      core_plugins.notify(me, 'afterLayout');
    },

    /**
     * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
     * @private
     */
    updateDatasets: function updateDatasets() {
      var me = this;

      if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
        return;
      }

      for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.updateDataset(i);
      }

      core_plugins.notify(me, 'afterDatasetsUpdate');
    },

    /**
     * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
     * @private
     */
    updateDataset: function updateDataset(index) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index
      };

      if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
        return;
      }

      meta.controller._update();

      core_plugins.notify(me, 'afterDatasetUpdate', [args]);
    },
    render: function render(config) {
      var me = this;

      if (!config || _typeof(config) !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }

      var animationOptions = me.options.animation;
      var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
      var lazy = config.lazy;

      if (core_plugins.notify(me, 'beforeRender') === false) {
        return;
      }

      var onComplete = function onComplete(animation) {
        core_plugins.notify(me, 'afterRender');
        helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
      };

      if (animationOptions && duration) {
        var animation = new core_animation({
          numSteps: duration / 16.66,
          // 60 fps
          easing: config.easing || animationOptions.easing,
          render: function render(chart, animationObject) {
            var easingFunction = helpers$1.easing.effects[animationObject.easing];
            var currentStep = animationObject.currentStep;
            var stepDecimal = currentStep / animationObject.numSteps;
            chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
          },
          onAnimationProgress: animationOptions.onProgress,
          onAnimationComplete: onComplete
        });
        core_animations.addAnimation(me, animation, duration, lazy);
      } else {
        me.draw(); // See https://github.com/chartjs/Chart.js/issues/3781

        onComplete(new core_animation({
          numSteps: 0,
          chart: me
        }));
      }

      return me;
    },
    draw: function draw(easingValue) {
      var me = this;
      var i, layers;
      me.clear();

      if (helpers$1.isNullOrUndef(easingValue)) {
        easingValue = 1;
      }

      me.transition(easingValue);

      if (me.width <= 0 || me.height <= 0) {
        return;
      }

      if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
        return;
      } // Because of plugin hooks (before/afterDatasetsDraw), datasets can't
      // currently be part of layers. Instead, we draw
      // layers <= 0 before(default, backward compat), and the rest after


      layers = me._layers;

      for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
        layers[i].draw(me.chartArea);
      }

      me.drawDatasets(easingValue); // Rest of layers

      for (; i < layers.length; ++i) {
        layers[i].draw(me.chartArea);
      }

      me._drawTooltip(easingValue);

      core_plugins.notify(me, 'afterDraw', [easingValue]);
    },

    /**
     * @private
     */
    transition: function transition(easingValue) {
      var me = this;

      for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
        if (me.isDatasetVisible(i)) {
          me.getDatasetMeta(i).controller.transition(easingValue);
        }
      }

      me.tooltip.transition(easingValue);
    },

    /**
     * @private
     */
    _getSortedDatasetMetas: function _getSortedDatasetMetas(filterVisible) {
      var me = this;
      var datasets = me.data.datasets || [];
      var result = [];
      var i, ilen;

      for (i = 0, ilen = datasets.length; i < ilen; ++i) {
        if (!filterVisible || me.isDatasetVisible(i)) {
          result.push(me.getDatasetMeta(i));
        }
      }

      result.sort(compare2Level('order', 'index'));
      return result;
    },

    /**
     * @private
     */
    _getSortedVisibleDatasetMetas: function _getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    },

    /**
     * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
     * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
     * @private
     */
    drawDatasets: function drawDatasets(easingValue) {
      var me = this;
      var metasets, i;

      if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
        return;
      }

      metasets = me._getSortedVisibleDatasetMetas();

      for (i = metasets.length - 1; i >= 0; --i) {
        me.drawDataset(metasets[i], easingValue);
      }

      core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
    },

    /**
     * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
     * hook, in which case, plugins will not be called on `afterDatasetDraw`.
     * @private
     */
    drawDataset: function drawDataset(meta, easingValue) {
      var me = this;
      var args = {
        meta: meta,
        index: meta.index,
        easingValue: easingValue
      };

      if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
        return;
      }

      meta.controller.draw(easingValue);
      core_plugins.notify(me, 'afterDatasetDraw', [args]);
    },

    /**
     * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
     * hook, in which case, plugins will not be called on `afterTooltipDraw`.
     * @private
     */
    _drawTooltip: function _drawTooltip(easingValue) {
      var me = this;
      var tooltip = me.tooltip;
      var args = {
        tooltip: tooltip,
        easingValue: easingValue
      };

      if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
        return;
      }

      tooltip.draw();
      core_plugins.notify(me, 'afterTooltipDraw', [args]);
    },

    /**
     * Get the single element that was clicked on
     * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
     */
    getElementAtEvent: function getElementAtEvent(e) {
      return core_interaction.modes.single(this, e);
    },
    getElementsAtEvent: function getElementsAtEvent(e) {
      return core_interaction.modes.label(this, e, {
        intersect: true
      });
    },
    getElementsAtXAxis: function getElementsAtXAxis(e) {
      return core_interaction.modes['x-axis'](this, e, {
        intersect: true
      });
    },
    getElementsAtEventForMode: function getElementsAtEventForMode(e, mode, options) {
      var method = core_interaction.modes[mode];

      if (typeof method === 'function') {
        return method(this, e, options);
      }

      return [];
    },
    getDatasetAtEvent: function getDatasetAtEvent(e) {
      return core_interaction.modes.dataset(this, e, {
        intersect: true
      });
    },
    getDatasetMeta: function getDatasetMeta(datasetIndex) {
      var me = this;
      var dataset = me.data.datasets[datasetIndex];

      if (!dataset._meta) {
        dataset._meta = {};
      }

      var meta = dataset._meta[me.id];

      if (!meta) {
        meta = dataset._meta[me.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          // See isDatasetVisible() comment
          xAxisID: null,
          yAxisID: null,
          order: dataset.order || 0,
          index: datasetIndex
        };
      }

      return meta;
    },
    getVisibleDatasetCount: function getVisibleDatasetCount() {
      var count = 0;

      for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        if (this.isDatasetVisible(i)) {
          count++;
        }
      }

      return count;
    },
    isDatasetVisible: function isDatasetVisible(datasetIndex) {
      var meta = this.getDatasetMeta(datasetIndex); // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
      // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.

      return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
    },
    generateLegend: function generateLegend() {
      return this.options.legendCallback(this);
    },

    /**
     * @private
     */
    destroyDatasetMeta: function destroyDatasetMeta(datasetIndex) {
      var id = this.id;
      var dataset = this.data.datasets[datasetIndex];
      var meta = dataset._meta && dataset._meta[id];

      if (meta) {
        meta.controller.destroy();
        delete dataset._meta[id];
      }
    },
    destroy: function destroy() {
      var me = this;
      var canvas = me.canvas;
      var i, ilen;
      me.stop(); // dataset controllers need to cleanup associated data

      for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.destroyDatasetMeta(i);
      }

      if (canvas) {
        me.unbindEvents();
        helpers$1.canvas.clear(me);
        platform.releaseContext(me.ctx);
        me.canvas = null;
        me.ctx = null;
      }

      core_plugins.notify(me, 'destroy');
      delete Chart.instances[me.id];
    },
    toBase64Image: function toBase64Image() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function initToolTip() {
      var me = this;
      me.tooltip = new core_tooltip({
        _chart: me,
        _chartInstance: me,
        // deprecated, backward compatibility
        _data: me.data,
        _options: me.options.tooltips
      }, me);
    },

    /**
     * @private
     */
    bindEvents: function bindEvents() {
      var me = this;
      var listeners = me._listeners = {};

      var listener = function listener() {
        me.eventHandler.apply(me, arguments);
      };

      helpers$1.each(me.options.events, function (type) {
        platform.addEventListener(me, type, listener);
        listeners[type] = listener;
      }); // Elements used to detect size change should not be injected for non responsive charts.
      // See https://github.com/chartjs/Chart.js/issues/2210

      if (me.options.responsive) {
        listener = function listener() {
          me.resize();
        };

        platform.addEventListener(me, 'resize', listener);
        listeners.resize = listener;
      }
    },

    /**
     * @private
     */
    unbindEvents: function unbindEvents() {
      var me = this;
      var listeners = me._listeners;

      if (!listeners) {
        return;
      }

      delete me._listeners;
      helpers$1.each(listeners, function (listener, type) {
        platform.removeEventListener(me, type, listener);
      });
    },
    updateHoverStyle: function updateHoverStyle(elements, mode, enabled) {
      var prefix = enabled ? 'set' : 'remove';
      var element, i, ilen;

      for (i = 0, ilen = elements.length; i < ilen; ++i) {
        element = elements[i];

        if (element) {
          this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
        }
      }

      if (mode === 'dataset') {
        this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
      }
    },

    /**
     * @private
     */
    eventHandler: function eventHandler(e) {
      var me = this;
      var tooltip = me.tooltip;

      if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
        return;
      } // Buffer any update calls so that renders do not occur


      me._bufferedRender = true;
      me._bufferedRequest = null;
      var changed = me.handleEvent(e); // for smooth tooltip animations issue #4989
      // the tooltip should be the source of change
      // Animation check workaround:
      // tooltip._start will be null when tooltip isn't animating

      if (tooltip) {
        changed = tooltip._start ? tooltip.handleEvent(e) : changed | tooltip.handleEvent(e);
      }

      core_plugins.notify(me, 'afterEvent', [e]);
      var bufferedRequest = me._bufferedRequest;

      if (bufferedRequest) {
        // If we have an update that was triggered, we need to do a normal render
        me.render(bufferedRequest);
      } else if (changed && !me.animating) {
        // If entering, leaving, or changing elements, animate the change via pivot
        me.stop(); // We only need to render at this point. Updating will cause scales to be
        // recomputed generating flicker & using more memory than necessary.

        me.render({
          duration: me.options.hover.animationDuration,
          lazy: true
        });
      }

      me._bufferedRender = false;
      me._bufferedRequest = null;
      return me;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event the event to handle
     * @return {boolean} true if the chart needs to re-render
     */
    handleEvent: function handleEvent(e) {
      var me = this;
      var options = me.options || {};
      var hoverOptions = options.hover;
      var changed = false;
      me.lastActive = me.lastActive || []; // Find Active Elements for hover and tooltips

      if (e.type === 'mouseout') {
        me.active = [];
      } else {
        me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
      } // Invoke onHover hook
      // Need to call with native event here to not break backwards compatibility


      helpers$1.callback(options.onHover || options.hover.onHover, [e["native"], me.active], me);

      if (e.type === 'mouseup' || e.type === 'click') {
        if (options.onClick) {
          // Use e.native here for backwards compatibility
          options.onClick.call(me, e["native"], me.active);
        }
      } // Remove styling for last active (even if it may still be active)


      if (me.lastActive.length) {
        me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
      } // Built in hover styling


      if (me.active.length && hoverOptions.mode) {
        me.updateHoverStyle(me.active, hoverOptions.mode, true);
      }

      changed = !helpers$1.arrayEquals(me.active, me.lastActive); // Remember Last Actives

      me.lastActive = me.active;
      return changed;
    }
  });
  /**
   * NOTE(SB) We actually don't use this container anymore but we need to keep it
   * for backward compatibility. Though, it can still be useful for plugins that
   * would need to work on multiple charts?!
   */

  Chart.instances = {};
  var core_controller = Chart; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart instead.
   * @class Chart.Controller
   * @deprecated since version 2.6
   * @todo remove at version 3
   * @private
   */

  Chart.Controller = Chart;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */

  Chart.types = {};
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.configMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.configMerge = mergeConfig;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.scaleMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.scaleMerge = mergeScaleConfig;

  var core_helpers = function core_helpers() {
    // -- Basic js utility methods
    helpers$1.where = function (collection, filterCallback) {
      if (helpers$1.isArray(collection) && Array.prototype.filter) {
        return collection.filter(filterCallback);
      }

      var filtered = [];
      helpers$1.each(collection, function (item) {
        if (filterCallback(item)) {
          filtered.push(item);
        }
      });
      return filtered;
    };

    helpers$1.findIndex = Array.prototype.findIndex ? function (array, callback, scope) {
      return array.findIndex(callback, scope);
    } : function (array, callback, scope) {
      scope = scope === undefined ? array : scope;

      for (var i = 0, ilen = array.length; i < ilen; ++i) {
        if (callback.call(scope, array[i], i, array)) {
          return i;
        }
      }

      return -1;
    };

    helpers$1.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
      // Default to start of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = -1;
      }

      for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
        var currentItem = arrayToSearch[i];

        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };

    helpers$1.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
      // Default to end of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = arrayToSearch.length;
      }

      for (var i = startIndex - 1; i >= 0; i--) {
        var currentItem = arrayToSearch[i];

        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    }; // -- Math methods


    helpers$1.isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    helpers$1.almostEquals = function (x, y, epsilon) {
      return Math.abs(x - y) < epsilon;
    };

    helpers$1.almostWhole = function (x, epsilon) {
      var rounded = Math.round(x);
      return rounded - epsilon <= x && rounded + epsilon >= x;
    };

    helpers$1.max = function (array) {
      return array.reduce(function (max, value) {
        if (!isNaN(value)) {
          return Math.max(max, value);
        }

        return max;
      }, Number.NEGATIVE_INFINITY);
    };

    helpers$1.min = function (array) {
      return array.reduce(function (min, value) {
        if (!isNaN(value)) {
          return Math.min(min, value);
        }

        return min;
      }, Number.POSITIVE_INFINITY);
    };

    helpers$1.sign = Math.sign ? function (x) {
      return Math.sign(x);
    } : function (x) {
      x = +x; // convert to a number

      if (x === 0 || isNaN(x)) {
        return x;
      }

      return x > 0 ? 1 : -1;
    };

    helpers$1.toRadians = function (degrees) {
      return degrees * (Math.PI / 180);
    };

    helpers$1.toDegrees = function (radians) {
      return radians * (180 / Math.PI);
    };
    /**
     * Returns the number of decimal places
     * i.e. the number of digits after the decimal point, of the value of this Number.
     * @param {number} x - A number.
     * @returns {number} The number of decimal places.
     * @private
     */


    helpers$1._decimalPlaces = function (x) {
      if (!helpers$1.isFinite(x)) {
        return;
      }

      var e = 1;
      var p = 0;

      while (Math.round(x * e) / e !== x) {
        e *= 10;
        p++;
      }

      return p;
    }; // Gets the angle from vertical upright to the point about a centre.


    helpers$1.getAngleFromPoint = function (centrePoint, anglePoint) {
      var distanceFromXCenter = anglePoint.x - centrePoint.x;
      var distanceFromYCenter = anglePoint.y - centrePoint.y;
      var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
      var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

      if (angle < -0.5 * Math.PI) {
        angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
      }

      return {
        angle: angle,
        distance: radialDistanceFromCenter
      };
    };

    helpers$1.distanceBetweenPoints = function (pt1, pt2) {
      return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    };
    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.helpers.aliasPixel
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */


    helpers$1.aliasPixel = function (pixelWidth) {
      return pixelWidth % 2 === 0 ? 0 : 0.5;
    };
    /**
     * Returns the aligned pixel value to avoid anti-aliasing blur
     * @param {Chart} chart - The chart instance.
     * @param {number} pixel - A pixel value.
     * @param {number} width - The width of the element.
     * @returns {number} The aligned pixel value.
     * @private
     */


    helpers$1._alignPixel = function (chart, pixel, width) {
      var devicePixelRatio = chart.currentDevicePixelRatio;
      var halfWidth = width / 2;
      return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    };

    helpers$1.splineCurve = function (firstPoint, middlePoint, afterPoint, t) {
      // Props to Rob Spencer at scaled innovation for his post on splining between points
      // http://scaledinnovation.com/analytics/splines/aboutSplines.html
      // This function must also respect "skipped" points
      var previous = firstPoint.skip ? middlePoint : firstPoint;
      var current = middlePoint;
      var next = afterPoint.skip ? middlePoint : afterPoint;
      var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
      var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
      var s01 = d01 / (d01 + d12);
      var s12 = d12 / (d01 + d12); // If all points are the same, s01 & s02 will be inf

      s01 = isNaN(s01) ? 0 : s01;
      s12 = isNaN(s12) ? 0 : s12;
      var fa = t * s01; // scaling factor for triangle Ta

      var fb = t * s12;
      return {
        previous: {
          x: current.x - fa * (next.x - previous.x),
          y: current.y - fa * (next.y - previous.y)
        },
        next: {
          x: current.x + fb * (next.x - previous.x),
          y: current.y + fb * (next.y - previous.y)
        }
      };
    };

    helpers$1.EPSILON = Number.EPSILON || 1e-14;

    helpers$1.splineCurveMonotone = function (points) {
      // This function calculates Bézier control points in a similar way than |splineCurve|,
      // but preserves monotonicity of the provided data and ensures no local extremums are added
      // between the dataset discrete points due to the interpolation.
      // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
      var pointsWithTangents = (points || []).map(function (point) {
        return {
          model: point._model,
          deltaK: 0,
          mK: 0
        };
      }); // Calculate slopes (deltaK) and initialize tangents (mK)

      var pointsLen = pointsWithTangents.length;
      var i, pointBefore, pointCurrent, pointAfter;

      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];

        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

        if (pointAfter && !pointAfter.model.skip) {
          var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x; // In the case of two points that appear at the same x pixel, slopeDeltaX is 0

          pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
        }

        if (!pointBefore || pointBefore.model.skip) {
          pointCurrent.mK = pointCurrent.deltaK;
        } else if (!pointAfter || pointAfter.model.skip) {
          pointCurrent.mK = pointBefore.deltaK;
        } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
          pointCurrent.mK = 0;
        } else {
          pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
        }
      } // Adjust tangents to ensure monotonic properties


      var alphaK, betaK, tauK, squaredMagnitude;

      for (i = 0; i < pointsLen - 1; ++i) {
        pointCurrent = pointsWithTangents[i];
        pointAfter = pointsWithTangents[i + 1];

        if (pointCurrent.model.skip || pointAfter.model.skip) {
          continue;
        }

        if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
          pointCurrent.mK = pointAfter.mK = 0;
          continue;
        }

        alphaK = pointCurrent.mK / pointCurrent.deltaK;
        betaK = pointAfter.mK / pointCurrent.deltaK;
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

        if (squaredMagnitude <= 9) {
          continue;
        }

        tauK = 3 / Math.sqrt(squaredMagnitude);
        pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
        pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
      } // Compute control points


      var deltaX;

      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];

        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

        if (pointBefore && !pointBefore.model.skip) {
          deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
          pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
          pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
        }

        if (pointAfter && !pointAfter.model.skip) {
          deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
          pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
          pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
        }
      }
    };

    helpers$1.nextItem = function (collection, index, loop) {
      if (loop) {
        return index >= collection.length - 1 ? collection[0] : collection[index + 1];
      }

      return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
    };

    helpers$1.previousItem = function (collection, index, loop) {
      if (loop) {
        return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
      }

      return index <= 0 ? collection[0] : collection[index - 1];
    }; // Implementation of the nice number algorithm used in determining where axis labels will go


    helpers$1.niceNum = function (range, round) {
      var exponent = Math.floor(helpers$1.log10(range));
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;

      if (round) {
        if (fraction < 1.5) {
          niceFraction = 1;
        } else if (fraction < 3) {
          niceFraction = 2;
        } else if (fraction < 7) {
          niceFraction = 5;
        } else {
          niceFraction = 10;
        }
      } else if (fraction <= 1.0) {
        niceFraction = 1;
      } else if (fraction <= 2) {
        niceFraction = 2;
      } else if (fraction <= 5) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }

      return niceFraction * Math.pow(10, exponent);
    }; // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


    helpers$1.requestAnimFrame = function () {
      if (typeof window === 'undefined') {
        return function (callback) {
          callback();
        };
      }

      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    }(); // -- DOM methods


    helpers$1.getRelativePosition = function (evt, chart) {
      var mouseX, mouseY;
      var e = evt.originalEvent || evt;
      var canvas = evt.target || evt.srcElement;
      var boundingRect = canvas.getBoundingClientRect();
      var touches = e.touches;

      if (touches && touches.length > 0) {
        mouseX = touches[0].clientX;
        mouseY = touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      } // Scale mouse coordinates into canvas coordinates
      // by following the pattern laid out by 'jerryj' in the comments of
      // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/


      var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
      var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
      var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
      var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
      var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
      var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom; // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
      // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here

      mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / width * canvas.width / chart.currentDevicePixelRatio);
      mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / height * canvas.height / chart.currentDevicePixelRatio);
      return {
        x: mouseX,
        y: mouseY
      };
    }; // Private helper function to convert max-width/max-height values that may be percentages into a number


    function parseMaxStyle(styleValue, node, parentProperty) {
      var valueInPixels;

      if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);

        if (styleValue.indexOf('%') !== -1) {
          // percentage * size in dimension
          valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
        }
      } else {
        valueInPixels = styleValue;
      }

      return valueInPixels;
    }
    /**
     * Returns if the given value contains an effective constraint.
     * @private
     */


    function isConstrainedValue(value) {
      return value !== undefined && value !== null && value !== 'none';
    }
    /**
     * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
     * @param {HTMLElement} domNode - the node to check the constraint on
     * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
     * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
     * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
     */


    function getConstraintDimension(domNode, maxStyle, percentageProperty) {
      var view = document.defaultView;

      var parentNode = helpers$1._getParentNode(domNode);

      var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
      var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
      var hasCNode = isConstrainedValue(constrainedNode);
      var hasCContainer = isConstrainedValue(constrainedContainer);
      var infinity = Number.POSITIVE_INFINITY;

      if (hasCNode || hasCContainer) {
        return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
      }

      return 'none';
    } // returns Number or undefined if no constraint


    helpers$1.getConstraintWidth = function (domNode) {
      return getConstraintDimension(domNode, 'max-width', 'clientWidth');
    }; // returns Number or undefined if no constraint


    helpers$1.getConstraintHeight = function (domNode) {
      return getConstraintDimension(domNode, 'max-height', 'clientHeight');
    };
    /**
     * @private
    	 */


    helpers$1._calculatePadding = function (container, padding, parentDimension) {
      padding = helpers$1.getStyle(container, padding);
      return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
    };
    /**
     * @private
     */


    helpers$1._getParentNode = function (domNode) {
      var parent = domNode.parentNode;

      if (parent && parent.toString() === '[object ShadowRoot]') {
        parent = parent.host;
      }

      return parent;
    };

    helpers$1.getMaximumWidth = function (domNode) {
      var container = helpers$1._getParentNode(domNode);

      if (!container) {
        return domNode.clientWidth;
      }

      var clientWidth = container.clientWidth;

      var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);

      var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

      var w = clientWidth - paddingLeft - paddingRight;
      var cw = helpers$1.getConstraintWidth(domNode);
      return isNaN(cw) ? w : Math.min(w, cw);
    };

    helpers$1.getMaximumHeight = function (domNode) {
      var container = helpers$1._getParentNode(domNode);

      if (!container) {
        return domNode.clientHeight;
      }

      var clientHeight = container.clientHeight;

      var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);

      var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

      var h = clientHeight - paddingTop - paddingBottom;
      var ch = helpers$1.getConstraintHeight(domNode);
      return isNaN(ch) ? h : Math.min(h, ch);
    };

    helpers$1.getStyle = function (el, property) {
      return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
    };

    helpers$1.retinaScale = function (chart, forceRatio) {
      var pixelRatio = chart.currentDevicePixelRatio = forceRatio || typeof window !== 'undefined' && window.devicePixelRatio || 1;

      if (pixelRatio === 1) {
        return;
      }

      var canvas = chart.canvas;
      var height = chart.height;
      var width = chart.width;
      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;
      chart.ctx.scale(pixelRatio, pixelRatio); // If no style has been set on the canvas, the render size is used as display size,
      // making the chart visually bigger, so let's enforce it to the "correct" values.
      // See https://github.com/chartjs/Chart.js/issues/3575

      if (!canvas.style.height && !canvas.style.width) {
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
      }
    }; // -- Canvas methods


    helpers$1.fontString = function (pixelSize, fontStyle, fontFamily) {
      return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
    };

    helpers$1.longestText = function (ctx, font, arrayOfThings, cache) {
      cache = cache || {};
      var data = cache.data = cache.data || {};
      var gc = cache.garbageCollect = cache.garbageCollect || [];

      if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
      }

      ctx.font = font;
      var longest = 0;
      var ilen = arrayOfThings.length;
      var i, j, jlen, thing, nestedThing;

      for (i = 0; i < ilen; i++) {
        thing = arrayOfThings[i]; // Undefined strings and arrays should not be measured

        if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
          longest = helpers$1.measureText(ctx, data, gc, longest, thing);
        } else if (helpers$1.isArray(thing)) {
          // if it is an array lets measure each element
          // to do maybe simplify this function a bit so we can do this more recursively?
          for (j = 0, jlen = thing.length; j < jlen; j++) {
            nestedThing = thing[j]; // Undefined strings and arrays should not be measured

            if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
              longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
            }
          }
        }
      }

      var gcLen = gc.length / 2;

      if (gcLen > arrayOfThings.length) {
        for (i = 0; i < gcLen; i++) {
          delete data[gc[i]];
        }

        gc.splice(0, gcLen);
      }

      return longest;
    };

    helpers$1.measureText = function (ctx, data, gc, longest, string) {
      var textWidth = data[string];

      if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
      }

      if (textWidth > longest) {
        longest = textWidth;
      }

      return longest;
    };
    /**
     * @deprecated
     */


    helpers$1.numberOfLabelLines = function (arrayOfThings) {
      var numberOfLines = 1;
      helpers$1.each(arrayOfThings, function (thing) {
        if (helpers$1.isArray(thing)) {
          if (thing.length > numberOfLines) {
            numberOfLines = thing.length;
          }
        }
      });
      return numberOfLines;
    };

    helpers$1.color = !chartjsColor ? function (value) {
      console.error('Color.js not found!');
      return value;
    } : function (value) {
      /* global CanvasGradient */
      if (value instanceof CanvasGradient) {
        value = core_defaults.global.defaultColor;
      }

      return chartjsColor(value);
    };

    helpers$1.getHoverColor = function (colorValue) {
      /* global CanvasPattern */
      return colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient ? colorValue : helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
    };
  };

  function _abstract() {
    throw new Error('This method is not implemented: either no adapter can ' + 'be found or an incomplete integration was provided.');
  }
  /**
   * Date adapter (current used by the time scale)
   * @namespace Chart._adapters._date
   * @memberof Chart._adapters
   * @private
   */

  /**
   * Currently supported unit string values.
   * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
   * @memberof Chart._adapters._date
   * @name Unit
   */

  /**
   * @class
   */


  function DateAdapter(options) {
    this.options = options || {};
  }

  helpers$1.extend(DateAdapter.prototype,
  /** @lends DateAdapter */
  {
    /**
     * Returns a map of time formats for the supported formatting units defined
     * in Unit as well as 'datetime' representing a detailed date/time string.
     * @returns {{string: string}}
     */
    formats: _abstract,

    /**
     * Parses the given `value` and return the associated timestamp.
     * @param {any} value - the value to parse (usually comes from the data)
     * @param {string} [format] - the expected data format
     * @returns {(number|null)}
     * @function
     */
    parse: _abstract,

    /**
     * Returns the formatted date in the specified `format` for a given `timestamp`.
     * @param {number} timestamp - the timestamp to format
     * @param {string} format - the date/time token
     * @return {string}
     * @function
     */
    format: _abstract,

    /**
     * Adds the specified `amount` of `unit` to the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {number} amount - the amount to add
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    add: _abstract,

    /**
     * Returns the number of `unit` between the given timestamps.
     * @param {number} max - the input timestamp (reference)
     * @param {number} min - the timestamp to substract
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    diff: _abstract,

    /**
     * Returns start of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @param {number} [weekday] - the ISO day of the week with 1 being Monday
     * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
     * @function
     */
    startOf: _abstract,

    /**
     * Returns end of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @function
     */
    endOf: _abstract,
    // DEPRECATIONS

    /**
     * Provided for backward compatibility for scale.getValueForPixel(),
     * this method should be overridden only by the moment adapter.
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function _create(value) {
      return value;
    }
  });

  DateAdapter.override = function (members) {
    helpers$1.extend(DateAdapter.prototype, members);
  };

  var _date = DateAdapter;
  var core_adapters = {
    _date: _date
  };
  /**
   * Namespace to hold static tick generation functions
   * @namespace Chart.Ticks
   */

  var core_ticks = {
    /**
     * Namespace to hold formatters for different types of ticks
     * @namespace Chart.Ticks.formatters
     */
    formatters: {
      /**
       * Formatter for value labels
       * @method Chart.Ticks.formatters.values
       * @param value the value to display
       * @return {string|string[]} the label to display
       */
      values: function values(value) {
        return helpers$1.isArray(value) ? value : '' + value;
      },

      /**
       * Formatter for linear numeric ticks
       * @method Chart.Ticks.formatters.linear
       * @param tickValue {number} the value to be formatted
       * @param index {number} the position of the tickValue parameter in the ticks array
       * @param ticks {number[]} the list of ticks being converted
       * @return {string} string representation of the tickValue parameter
       */
      linear: function linear(tickValue, index, ticks) {
        // If we have lots of ticks, don't use the ones
        var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0]; // If we have a number like 2.5 as the delta, figure out how many decimal places we need

        if (Math.abs(delta) > 1) {
          if (tickValue !== Math.floor(tickValue)) {
            // not an integer
            delta = tickValue - Math.floor(tickValue);
          }
        }

        var logDelta = helpers$1.log10(Math.abs(delta));
        var tickString = '';

        if (tickValue !== 0) {
          var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));

          if (maxTick < 1e-4) {
            // all ticks are small numbers; use scientific notation
            var logTick = helpers$1.log10(Math.abs(tickValue));
            var numExponential = Math.floor(logTick) - Math.floor(logDelta);
            numExponential = Math.max(Math.min(numExponential, 20), 0);
            tickString = tickValue.toExponential(numExponential);
          } else {
            var numDecimal = -1 * Math.floor(logDelta);
            numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places

            tickString = tickValue.toFixed(numDecimal);
          }
        } else {
          tickString = '0'; // never show decimal places for 0
        }

        return tickString;
      },
      logarithmic: function logarithmic(tickValue, index, ticks) {
        var remain = tickValue / Math.pow(10, Math.floor(helpers$1.log10(tickValue)));

        if (tickValue === 0) {
          return '0';
        } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
          return tickValue.toExponential();
        }

        return '';
      }
    }
  };
  var isArray = helpers$1.isArray;
  var isNullOrUndef = helpers$1.isNullOrUndef;
  var valueOrDefault$a = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

  core_defaults._set('scale', {
    display: true,
    position: 'left',
    offset: false,
    // grid line settings
    gridLines: {
      display: true,
      color: 'rgba(0,0,0,0.1)',
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: 'rgba(0,0,0,0.25)',
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0.0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0.0
    },
    // scale label
    scaleLabel: {
      // display property
      display: false,
      // actual label
      labelString: '',
      // top/bottom padding
      padding: {
        top: 4,
        bottom: 4
      }
    },
    // label settings
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
      callback: core_ticks.formatters.values,
      minor: {},
      major: {}
    }
  });
  /** Returns a new array containing numItems from arr */


  function sample(arr, numItems) {
    var result = [];
    var increment = arr.length / numItems;
    var i = 0;
    var len = arr.length;

    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }

    return result;
  }

  function getPixelForGridLine(scale, index, offsetGridLines) {
    var length = scale.getTicks().length;
    var validIndex = Math.min(index, length - 1);
    var lineValue = scale.getPixelForTick(validIndex);
    var start = scale._startPixel;
    var end = scale._endPixel;
    var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

    var offset;

    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
      }

      lineValue += validIndex < index ? offset : -offset; // Return undefined if the pixel is out of the range

      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }

    return lineValue;
  }

  function garbageCollect(caches, length) {
    helpers$1.each(caches, function (cache) {
      var gc = cache.gc;
      var gcLen = gc.length / 2;
      var i;

      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }

        gc.splice(0, gcLen);
      }
    });
  }
  /**
   * Returns {width, height, offset} objects for the first, last, widest, highest tick
   * labels where offset indicates the anchor point offset from the top in pixels.
   */


  function computeLabelSizes(ctx, tickFonts, ticks, caches) {
    var length = ticks.length;
    var widths = [];
    var heights = [];
    var offsets = [];
    var widestLabelSize = 0;
    var highestLabelSize = 0;
    var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0; // Undefined labels and arrays should not be measured

      if (!isNullOrUndef(label) && !isArray(label)) {
        width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (isArray(label)) {
        // if it is an array let's measure each element
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j]; // Undefined labels and arrays should not be measured

          if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
            width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }

      widths.push(width);
      heights.push(height);
      offsets.push(lineHeight / 2);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }

    garbageCollect(caches, length);
    widest = widths.indexOf(widestLabelSize);
    highest = heights.indexOf(highestLabelSize);

    function valueAt(idx) {
      return {
        width: widths[idx] || 0,
        height: heights[idx] || 0,
        offset: offsets[idx] || 0
      };
    }

    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest)
    };
  }

  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickMarkLength : 0;
  }

  function getScaleLabelHeight(options) {
    var font, padding;

    if (!options.display) {
      return 0;
    }

    font = helpers$1.options._parseFont(options);
    padding = helpers$1.options.toPadding(options.padding);
    return font.lineHeight + padding.height;
  }

  function parseFontOptions(options, nestedOpts) {
    return helpers$1.extend(helpers$1.options._parseFont({
      fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
      fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
      fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
      lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
    }), {
      color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
    });
  }

  function parseTickFontOptions(options) {
    var minor = parseFontOptions(options, options.minor);
    var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;
    return {
      minor: minor,
      major: major
    };
  }

  function nonSkipped(ticksToFilter) {
    var filtered = [];
    var item, index, len;

    for (index = 0, len = ticksToFilter.length; index < len; ++index) {
      item = ticksToFilter[index];

      if (typeof item._index !== 'undefined') {
        filtered.push(item);
      }
    }

    return filtered;
  }

  function getEvenSpacing(arr) {
    var len = arr.length;
    var i, diff;

    if (len < 2) {
      return false;
    }

    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }

    return diff;
  }

  function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
    var evenMajorSpacing = getEvenSpacing(majorIndices);
    var spacing = (ticks.length - 1) / ticksLimit;
    var factors, factor, i, ilen; // If the major ticks are evenly spaced apart, place the minor ticks
    // so that they divide the major ticks into even chunks

    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }

    factors = helpers$1.math._factorize(evenMajorSpacing);

    for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
      factor = factors[i];

      if (factor > spacing) {
        return factor;
      }
    }

    return Math.max(spacing, 1);
  }

  function getMajorIndices(ticks) {
    var result = [];
    var i, ilen;

    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }

    return result;
  }

  function skipMajors(ticks, majorIndices, spacing) {
    var count = 0;
    var next = majorIndices[0];
    var i, tick;
    spacing = Math.ceil(spacing);

    for (i = 0; i < ticks.length; i++) {
      tick = ticks[i];

      if (i === next) {
        tick._index = i;
        count++;
        next = majorIndices[count * spacing];
      } else {
        delete tick.label;
      }
    }
  }

  function skip(ticks, spacing, majorStart, majorEnd) {
    var start = valueOrDefault$a(majorStart, 0);
    var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
    var count = 0;
    var length, i, tick, next;
    spacing = Math.ceil(spacing);

    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }

    next = start;

    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }

    for (i = Math.max(start, 0); i < end; i++) {
      tick = ticks[i];

      if (i === next) {
        tick._index = i;
        count++;
        next = Math.round(start + count * spacing);
      } else {
        delete tick.label;
      }
    }
  }

  var Scale = core_element.extend({
    zeroLineIndex: 0,

    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */
    getPadding: function getPadding() {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0
      };
    },

    /**
     * Returns the scale tick objects ({label, major})
     * @since 2.7
     */
    getTicks: function getTicks() {
      return this._ticks;
    },

    /**
    * @private
    */
    _getLabels: function _getLabels() {
      var data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    },
    // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type

    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.Scale.mergeTicksOptions
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */
    mergeTicksOptions: function mergeTicksOptions() {// noop
    },
    beforeUpdate: function beforeUpdate() {
      helpers$1.callback(this.options.beforeUpdate, [this]);
    },

    /**
     * @param {number} maxWidth - the max width in pixels
     * @param {number} maxHeight - the max height in pixels
     * @param {object} margins - the space between the edge of the other scales and edge of the chart
     *   This space comes from two sources:
     *     - padding - space that's required to show the labels at the edges of the scale
     *     - thickness of scales or legends in another orientation
     */
    update: function update(maxWidth, maxHeight, margins) {
      var me = this;
      var tickOpts = me.options.ticks;
      var sampleSize = tickOpts.sampleSize;
      var i, ilen, labels, ticks, samplingEnabled; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers$1.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      me._ticks = null;
      me.ticks = null;
      me._labelSizes = null;
      me._maxLabelLines = 0;
      me.longestLabelWidth = 0;
      me.longestTextCache = me.longestTextCache || {};
      me._gridLineItems = null;
      me._labelItems = null; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Data min/max

      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits(); // Ticks - `this.ticks` is now DEPRECATED!
      // Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
      // and must not be accessed directly from outside this class. `this.ticks` being
      // around for long time and not marked as private, we can't change its structure
      // without unexpected breaking changes. If you need to access the scale ticks,
      // use scale.getTicks() instead.

      me.beforeBuildTicks(); // New implementations should return an array of objects but for BACKWARD COMPAT,
      // we still support no return (`this.ticks` internally set by calling this method).

      ticks = me.buildTicks() || []; // Allow modification of ticks in callback.

      ticks = me.afterBuildTicks(ticks) || ticks; // Ensure ticks contains ticks in new tick format

      if ((!ticks || !ticks.length) && me.ticks) {
        ticks = [];

        for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
          ticks.push({
            value: me.ticks[i],
            major: false
          });
        }
      }

      me._ticks = ticks; // Compute tick rotation and fit using a sampled subset of labels
      // We generally don't need to compute the size of every single label for determining scale size

      samplingEnabled = sampleSize < ticks.length;
      labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks); // _configure is called twice, once here, once from core.controller.updateLayout.
      // Here we haven't been positioned yet, but dimensions are correct.
      // Variables set in _configure are needed for calculateTickRotation, and
      // it's ok that coordinates are not correct there, only dimensions matter.

      me._configure(); // Tick Rotation


      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();
      me.beforeFit();
      me.fit();
      me.afterFit(); // Auto-skip

      me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

      if (samplingEnabled) {
        // Generate labels using all non-skipped ticks
        labels = me._convertTicksToLabels(me._ticksToDraw);
      }

      me.ticks = labels; // BACKWARD COMPATIBILITY
      // IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

      me.afterUpdate(); // TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
      // make maxWidth and maxHeight private

      return me.minSize;
    },

    /**
     * @private
     */
    _configure: function _configure() {
      var me = this;
      var reversePixels = me.options.ticks.reverse;
      var startPixel, endPixel;

      if (me.isHorizontal()) {
        startPixel = me.left;
        endPixel = me.right;
      } else {
        startPixel = me.top;
        endPixel = me.bottom; // by default vertical scales are from bottom to top, so pixels are reversed

        reversePixels = !reversePixels;
      }

      me._startPixel = startPixel;
      me._endPixel = endPixel;
      me._reversePixels = reversePixels;
      me._length = endPixel - startPixel;
    },
    afterUpdate: function afterUpdate() {
      helpers$1.callback(this.options.afterUpdate, [this]);
    },
    //
    beforeSetDimensions: function beforeSetDimensions() {
      helpers$1.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    },
    afterSetDimensions: function afterSetDimensions() {
      helpers$1.callback(this.options.afterSetDimensions, [this]);
    },
    // Data limits
    beforeDataLimits: function beforeDataLimits() {
      helpers$1.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: helpers$1.noop,
    afterDataLimits: function afterDataLimits() {
      helpers$1.callback(this.options.afterDataLimits, [this]);
    },
    //
    beforeBuildTicks: function beforeBuildTicks() {
      helpers$1.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: helpers$1.noop,
    afterBuildTicks: function afterBuildTicks(ticks) {
      var me = this; // ticks is empty for old axis implementations here

      if (isArray(ticks) && ticks.length) {
        return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
      } // Support old implementations (that modified `this.ticks` directly in buildTicks)


      me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
      return ticks;
    },
    beforeTickToLabelConversion: function beforeTickToLabelConversion() {
      helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var me = this; // Convert ticks to strings

      var tickOpts = me.options.ticks;
      me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
    },
    afterTickToLabelConversion: function afterTickToLabelConversion() {
      helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
    },
    //
    beforeCalculateTickRotation: function beforeCalculateTickRotation() {
      helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function calculateTickRotation() {
      var me = this;
      var options = me.options;
      var tickOpts = options.ticks;
      var numTicks = me.getTicks().length;
      var minRotation = tickOpts.minRotation || 0;
      var maxRotation = tickOpts.maxRotation;
      var labelRotation = minRotation;
      var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

      if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
        me.labelRotation = minRotation;
        return;
      }

      labelSizes = me._getLabelSizes();
      maxLabelWidth = labelSizes.widest.width;
      maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset; // Estimate the width of each grid based on the canvas width, the maximum
      // label width and the number of tick intervals

      maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
      tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1); // Allow 3 pixels x2 padding either side for label readability

      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = me.maxHeight - getTickMarkLength(options.gridLines) - tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = helpers$1.toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }

      me.labelRotation = labelRotation;
    },
    afterCalculateTickRotation: function afterCalculateTickRotation() {
      helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
    },
    //
    beforeFit: function beforeFit() {
      helpers$1.callback(this.options.beforeFit, [this]);
    },
    fit: function fit() {
      var me = this; // Reset

      var minSize = me.minSize = {
        width: 0,
        height: 0
      };
      var chart = me.chart;
      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;

      var display = me._isVisible();

      var isBottom = opts.position === 'bottom';
      var isHorizontal = me.isHorizontal(); // Width

      if (isHorizontal) {
        minSize.width = me.maxWidth;
      } else if (display) {
        minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // height


      if (!isHorizontal) {
        minSize.height = me.maxHeight; // fill all the height
      } else if (display) {
        minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // Don't bother fitting the ticks if we are not showing the labels


      if (tickOpts.display && display) {
        var tickFonts = parseTickFontOptions(tickOpts);

        var labelSizes = me._getLabelSizes();

        var firstLabelSize = labelSizes.first;
        var lastLabelSize = labelSizes.last;
        var widestLabelSize = labelSizes.widest;
        var highestLabelSize = labelSizes.highest;
        var lineSpace = tickFonts.minor.lineHeight * 0.4;
        var tickPadding = tickOpts.padding;

        if (isHorizontal) {
          // A horizontal axis is more constrained by the height.
          var isRotated = me.labelRotation !== 0;
          var angleRadians = helpers$1.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);
          var labelHeight = sinRotation * widestLabelSize.width + cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0)) + (isRotated ? 0 : lineSpace); // padding

          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
          var paddingLeft, paddingRight; // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
          // which means that the right padding is dominated by the font height

          if (isRotated) {
            paddingLeft = isBottom ? cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
            paddingRight = isBottom ? sinRotation * (lastLabelSize.height - lastLabelSize.offset) : cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
          } else {
            paddingLeft = firstLabelSize.width / 2;
            paddingRight = lastLabelSize.width / 2;
          } // Adjust padding taking into account changes in offsets
          // and add 3 px to move away from canvas edges


          me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
          me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
        } else {
          // A vertical axis is more constrained by the width. Labels are the
          // dominant factor here, so get that length first and account for padding
          var labelWidth = tickOpts.mirror ? 0 : // use lineSpace for consistency with horizontal axis
          // tickPadding is not implemented for horizontal
          widestLabelSize.width + tickPadding + lineSpace;
          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
          me.paddingTop = firstLabelSize.height / 2;
          me.paddingBottom = lastLabelSize.height / 2;
        }
      }

      me.handleMargins();

      if (isHorizontal) {
        me.width = me._length = chart.width - me.margins.left - me.margins.right;
        me.height = minSize.height;
      } else {
        me.width = minSize.width;
        me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
      }
    },

    /**
     * Handle margins and padding interactions
     * @private
     */
    handleMargins: function handleMargins() {
      var me = this;

      if (me.margins) {
        me.margins.left = Math.max(me.paddingLeft, me.margins.left);
        me.margins.top = Math.max(me.paddingTop, me.margins.top);
        me.margins.right = Math.max(me.paddingRight, me.margins.right);
        me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
      }
    },
    afterFit: function afterFit() {
      helpers$1.callback(this.options.afterFit, [this]);
    },
    // Shared Methods
    isHorizontal: function isHorizontal() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },
    isFullWidth: function isFullWidth() {
      return this.options.fullWidth;
    },
    // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
    getRightValue: function getRightValue(rawValue) {
      // Null and undefined values first
      if (isNullOrUndef(rawValue)) {
        return NaN;
      } // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values


      if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
        return NaN;
      } // If it is in fact an object, dive in one more level


      if (rawValue) {
        if (this.isHorizontal()) {
          if (rawValue.x !== undefined) {
            return this.getRightValue(rawValue.x);
          }
        } else if (rawValue.y !== undefined) {
          return this.getRightValue(rawValue.y);
        }
      } // Value is good, return it


      return rawValue;
    },
    _convertTicksToLabels: function _convertTicksToLabels(ticks) {
      var me = this;
      var labels, i, ilen;
      me.ticks = ticks.map(function (tick) {
        return tick.value;
      });
      me.beforeTickToLabelConversion(); // New implementations should return the formatted tick labels but for BACKWARD
      // COMPAT, we still support no return (`this.ticks` internally changed by calling
      // this method and supposed to contain only string values).

      labels = me.convertTicksToLabels(ticks) || me.ticks;
      me.afterTickToLabelConversion(); // BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        ticks[i].label = labels[i];
      }

      return labels;
    },

    /**
     * @private
     */
    _getLabelSizes: function _getLabelSizes() {
      var me = this;
      var labelSizes = me._labelSizes;

      if (!labelSizes) {
        me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
        me.longestLabelWidth = labelSizes.widest.width;
      }

      return labelSizes;
    },

    /**
     * @private
     */
    _parseValue: function _parseValue(value) {
      var start, end, min, max;

      if (isArray(value)) {
        start = +this.getRightValue(value[0]);
        end = +this.getRightValue(value[1]);
        min = Math.min(start, end);
        max = Math.max(start, end);
      } else {
        value = +this.getRightValue(value);
        start = undefined;
        end = value;
        min = value;
        max = value;
      }

      return {
        min: min,
        max: max,
        start: start,
        end: end
      };
    },

    /**
    * @private
    */
    _getScaleLabel: function _getScaleLabel(rawValue) {
      var v = this._parseValue(rawValue);

      if (v.start !== undefined) {
        return '[' + v.start + ', ' + v.end + ']';
      }

      return +this.getRightValue(rawValue);
    },

    /**
     * Used to get the value to display in the tooltip for the data at the given index
     * @param index
     * @param datasetIndex
     */
    getLabelForIndex: helpers$1.noop,

    /**
     * Returns the location of the given data point. Value can either be an index or a numerical value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param value
     * @param index
     * @param datasetIndex
     */
    getPixelForValue: helpers$1.noop,

    /**
     * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param pixel
     */
    getValueForPixel: helpers$1.noop,

    /**
     * Returns the location of the tick at the given index
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForTick: function getPixelForTick(index) {
      var me = this;
      var offset = me.options.offset;
      var numTicks = me._ticks.length;
      var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
      return index < 0 || index > numTicks - 1 ? null : me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
    },

    /**
     * Utility for getting the pixel location of a percentage of scale
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForDecimal: function getPixelForDecimal(decimal) {
      var me = this;

      if (me._reversePixels) {
        decimal = 1 - decimal;
      }

      return me._startPixel + decimal * me._length;
    },
    getDecimalForPixel: function getDecimalForPixel(pixel) {
      var decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    },

    /**
     * Returns the pixel for the minimum chart value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getBasePixel: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function getBaseValue() {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    },

    /**
     * Returns a subset of ticks to be plotted to avoid overlapping labels.
     * @private
     */
    _autoSkip: function _autoSkip(ticks) {
      var me = this;
      var tickOpts = me.options.ticks;
      var axisLength = me._length;
      var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
      var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
      var numMajorIndices = majorIndices.length;
      var first = majorIndices[0];
      var last = majorIndices[numMajorIndices - 1];
      var i, ilen, spacing, avgMajorSpacing; // If there are too many major ticks to display them all

      if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
        return nonSkipped(ticks);
      }

      spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

      if (numMajorIndices > 0) {
        for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
          skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
        }

        avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
        skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return nonSkipped(ticks);
      }

      skip(ticks, spacing);
      return nonSkipped(ticks);
    },

    /**
     * @private
     */
    _tickSize: function _tickSize() {
      var me = this;
      var optionTicks = me.options.ticks; // Calculate space needed by label in axis direction.

      var rot = helpers$1.toRadians(me.labelRotation);
      var cos = Math.abs(Math.cos(rot));
      var sin = Math.abs(Math.sin(rot));

      var labelSizes = me._getLabelSizes();

      var padding = optionTicks.autoSkipPadding || 0;
      var w = labelSizes ? labelSizes.widest.width + padding : 0;
      var h = labelSizes ? labelSizes.highest.height + padding : 0; // Calculate space needed for 1 tick in axis direction.

      return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    },

    /**
     * @private
     */
    _isVisible: function _isVisible() {
      var me = this;
      var chart = me.chart;
      var display = me.options.display;
      var i, ilen, meta;

      if (display !== 'auto') {
        return !!display;
      } // When 'auto', the scale is visible if at least one associated dataset is visible.


      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);

          if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
            return true;
          }
        }
      }

      return false;
    },

    /**
     * @private
     */
    _computeGridLineItems: function _computeGridLineItems(chartArea) {
      var me = this;
      var chart = me.chart;
      var options = me.options;
      var gridLines = options.gridLines;
      var position = options.position;
      var offsetGridLines = gridLines.offsetGridLines;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
      var tl = getTickMarkLength(gridLines);
      var items = [];
      var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
      var axisHalfWidth = axisWidth / 2;
      var alignPixel = helpers$1._alignPixel;

      var alignBorderValue = function alignBorderValue(pixel) {
        return alignPixel(chart, pixel, axisWidth);
      };

      var borderValue, i, tick, lineValue, alignedLineValue;
      var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

      if (position === 'top') {
        borderValue = alignBorderValue(me.bottom);
        ty1 = me.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === 'bottom') {
        borderValue = alignBorderValue(me.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = me.top + tl;
      } else if (position === 'left') {
        borderValue = alignBorderValue(me.right);
        tx1 = me.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else {
        borderValue = alignBorderValue(me.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = me.left + tl;
      }

      for (i = 0; i < ticksLength; ++i) {
        tick = ticks[i] || {}; // autoskipper skipped this tick (#4635)

        if (isNullOrUndef(tick.label) && i < ticks.length) {
          continue;
        }

        if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
          // Draw the first index specially
          lineWidth = gridLines.zeroLineWidth;
          lineColor = gridLines.zeroLineColor;
          borderDash = gridLines.zeroLineBorderDash || [];
          borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
        } else {
          lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
          lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
          borderDash = gridLines.borderDash || [];
          borderDashOffset = gridLines.borderDashOffset || 0.0;
        }

        lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines); // Skip if the pixel is out of the range

        if (lineValue === undefined) {
          continue;
        }

        alignedLineValue = alignPixel(chart, lineValue, lineWidth);

        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }

        items.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          width: lineWidth,
          color: lineColor,
          borderDash: borderDash,
          borderDashOffset: borderDashOffset
        });
      }

      items.ticksLength = ticksLength;
      items.borderValue = borderValue;
      return items;
    },

    /**
     * @private
     */
    _computeLabelItems: function _computeLabelItems() {
      var me = this;
      var options = me.options;
      var optionTicks = options.ticks;
      var position = options.position;
      var isMirrored = optionTicks.mirror;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var fonts = parseTickFontOptions(optionTicks);
      var tickPadding = optionTicks.padding;
      var tl = getTickMarkLength(options.gridLines);
      var rotation = -helpers$1.toRadians(me.labelRotation);
      var items = [];
      var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

      if (position === 'top') {
        y = me.bottom - tl - tickPadding;
        textAlign = !rotation ? 'center' : 'left';
      } else if (position === 'bottom') {
        y = me.top + tl + tickPadding;
        textAlign = !rotation ? 'center' : 'right';
      } else if (position === 'left') {
        x = me.right - (isMirrored ? 0 : tl) - tickPadding;
        textAlign = isMirrored ? 'left' : 'right';
      } else {
        x = me.left + (isMirrored ? 0 : tl) + tickPadding;
        textAlign = isMirrored ? 'right' : 'left';
      }

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label; // autoskipper skipped this tick (#4635)

        if (isNullOrUndef(label)) {
          continue;
        }

        pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
        font = tick.major ? fonts.major : fonts.minor;
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;

        if (isHorizontal) {
          x = pixel;
          textOffset = position === 'top' ? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight : (!rotation ? 0.5 : 0) * lineHeight;
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }

        items.push({
          x: x,
          y: y,
          rotation: rotation,
          label: label,
          font: font,
          textOffset: textOffset,
          textAlign: textAlign
        });
      }

      return items;
    },

    /**
     * @private
     */
    _drawGrid: function _drawGrid(chartArea) {
      var me = this;
      var gridLines = me.options.gridLines;

      if (!gridLines.display) {
        return;
      }

      var ctx = me.ctx;
      var chart = me.chart;
      var alignPixel = helpers$1._alignPixel;
      var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;

      var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

      var width, color, i, ilen, item;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        width = item.width;
        color = item.color;

        if (width && color) {
          ctx.save();
          ctx.lineWidth = width;
          ctx.strokeStyle = color;

          if (ctx.setLineDash) {
            ctx.setLineDash(item.borderDash);
            ctx.lineDashOffset = item.borderDashOffset;
          }

          ctx.beginPath();

          if (gridLines.drawTicks) {
            ctx.moveTo(item.tx1, item.ty1);
            ctx.lineTo(item.tx2, item.ty2);
          }

          if (gridLines.drawOnChartArea) {
            ctx.moveTo(item.x1, item.y1);
            ctx.lineTo(item.x2, item.y2);
          }

          ctx.stroke();
          ctx.restore();
        }
      }

      if (axisWidth) {
        // Draw the line at the edge of the axis
        var firstLineWidth = axisWidth;
        var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
        var borderValue = items.borderValue;
        var x1, x2, y1, y2;

        if (me.isHorizontal()) {
          x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
          x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
          y1 = y2 = borderValue;
        } else {
          y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
          y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
          x1 = x2 = borderValue;
        }

        ctx.lineWidth = axisWidth;
        ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    },

    /**
     * @private
     */
    _drawLabels: function _drawLabels() {
      var me = this;
      var optionTicks = me.options.ticks;

      if (!optionTicks.display) {
        return;
      }

      var ctx = me.ctx;

      var items = me._labelItems || (me._labelItems = me._computeLabelItems());

      var i, j, ilen, jlen, item, tickFont, label, y;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        tickFont = item.font; // Make sure we draw text in the correct color and font

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = tickFont.string;
        ctx.fillStyle = tickFont.color;
        ctx.textBaseline = 'middle';
        ctx.textAlign = item.textAlign;
        label = item.label;
        y = item.textOffset;

        if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            // We just make sure the multiline element is a string here..
            ctx.fillText('' + label[j], 0, y);
            y += tickFont.lineHeight;
          }
        } else {
          ctx.fillText(label, 0, y);
        }

        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawTitle: function _drawTitle() {
      var me = this;
      var ctx = me.ctx;
      var options = me.options;
      var scaleLabel = options.scaleLabel;

      if (!scaleLabel.display) {
        return;
      }

      var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);

      var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);

      var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
      var halfLineHeight = scaleLabelFont.lineHeight / 2;
      var position = options.position;
      var rotation = 0;
      var scaleLabelX, scaleLabelY;

      if (me.isHorizontal()) {
        scaleLabelX = me.left + me.width / 2; // midpoint of the width

        scaleLabelY = position === 'bottom' ? me.bottom - halfLineHeight - scaleLabelPadding.bottom : me.top + halfLineHeight + scaleLabelPadding.top;
      } else {
        var isLeft = position === 'left';
        scaleLabelX = isLeft ? me.left + halfLineHeight + scaleLabelPadding.top : me.right - halfLineHeight - scaleLabelPadding.top;
        scaleLabelY = me.top + me.height / 2;
        rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
      }

      ctx.save();
      ctx.translate(scaleLabelX, scaleLabelY);
      ctx.rotate(rotation);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = scaleLabelFontColor; // render in correct colour

      ctx.font = scaleLabelFont.string;
      ctx.fillText(scaleLabel.labelString, 0, 0);
      ctx.restore();
    },
    draw: function draw(chartArea) {
      var me = this;

      if (!me._isVisible()) {
        return;
      }

      me._drawGrid(chartArea);

      me._drawTitle();

      me._drawLabels();
    },

    /**
     * @private
     */
    _layers: function _layers() {
      var me = this;
      var opts = me.options;
      var tz = opts.ticks && opts.ticks.z || 0;
      var gz = opts.gridLines && opts.gridLines.z || 0;

      if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
        // backward compatibility: draw has been overridden by custom scale
        return [{
          z: tz,
          draw: function draw() {
            me.draw.apply(me, arguments);
          }
        }];
      }

      return [{
        z: gz,
        draw: function draw() {
          me._drawGrid.apply(me, arguments);

          me._drawTitle.apply(me, arguments);
        }
      }, {
        z: tz,
        draw: function draw() {
          me._drawLabels.apply(me, arguments);
        }
      }];
    },

    /**
     * @private
     */
    _getMatchingVisibleMetas: function _getMatchingVisibleMetas(type) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      return me.chart._getSortedVisibleDatasetMetas().filter(function (meta) {
        return (!type || meta.type === type) && (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
      });
    }
  });
  Scale.prototype._draw = Scale.prototype.draw;
  var core_scale = Scale;
  var isNullOrUndef$1 = helpers$1.isNullOrUndef;
  var defaultConfig = {
    position: 'bottom'
  };
  var scale_category = core_scale.extend({
    determineDataLimits: function determineDataLimits() {
      var me = this;

      var labels = me._getLabels();

      var ticksOpts = me.options.ticks;
      var min = ticksOpts.min;
      var max = ticksOpts.max;
      var minIndex = 0;
      var maxIndex = labels.length - 1;
      var findIndex;

      if (min !== undefined) {
        // user specified min value
        findIndex = labels.indexOf(min);

        if (findIndex >= 0) {
          minIndex = findIndex;
        }
      }

      if (max !== undefined) {
        // user specified max value
        findIndex = labels.indexOf(max);

        if (findIndex >= 0) {
          maxIndex = findIndex;
        }
      }

      me.minIndex = minIndex;
      me.maxIndex = maxIndex;
      me.min = labels[minIndex];
      me.max = labels[maxIndex];
    },
    buildTicks: function buildTicks() {
      var me = this;

      var labels = me._getLabels();

      var minIndex = me.minIndex;
      var maxIndex = me.maxIndex; // If we are viewing some subset of labels, slice the original array

      me.ticks = minIndex === 0 && maxIndex === labels.length - 1 ? labels : labels.slice(minIndex, maxIndex + 1);
    },
    getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
      var me = this;
      var chart = me.chart;

      if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
        return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
      }

      return me._getLabels()[index];
    },
    _configure: function _configure() {
      var me = this;
      var offset = me.options.offset;
      var ticks = me.ticks;

      core_scale.prototype._configure.call(me);

      if (!me.isHorizontal()) {
        // For backward compatibility, vertical category scale reverse is inverted.
        me._reversePixels = !me._reversePixels;
      }

      if (!ticks) {
        return;
      }

      me._startValue = me.minIndex - (offset ? 0.5 : 0);
      me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
    },
    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: function getPixelForValue(value, index, datasetIndex) {
      var me = this;
      var valueCategory, labels, idx;

      if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
        value = me.chart.data.datasets[datasetIndex].data[index];
      } // If value is a data object, then index is the index in the data array,
      // not the index of the scale. We need to change that.


      if (!isNullOrUndef$1(value)) {
        valueCategory = me.isHorizontal() ? value.x : value.y;
      }

      if (valueCategory !== undefined || value !== undefined && isNaN(index)) {
        labels = me._getLabels();
        value = helpers$1.valueOrDefault(valueCategory, value);
        idx = labels.indexOf(value);
        index = idx !== -1 ? idx : index;

        if (isNaN(index)) {
          index = value;
        }
      }

      return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
    },
    getPixelForTick: function getPixelForTick(index) {
      var ticks = this.ticks;
      return index < 0 || index > ticks.length - 1 ? null : this.getPixelForValue(ticks[index], index + this.minIndex);
    },
    getValueForPixel: function getValueForPixel(pixel) {
      var me = this;
      var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
      return Math.min(Math.max(value, 0), me.ticks.length - 1);
    },
    getBasePixel: function getBasePixel() {
      return this.bottom;
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults = defaultConfig;
  scale_category._defaults = _defaults;
  var noop = helpers$1.noop;
  var isNullOrUndef$2 = helpers$1.isNullOrUndef;
  /**
   * Generate a set of linear ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */

  function generateTicks(generationOptions, dataRange) {
    var ticks = []; // To get a "nice" value for the tick spacing, we will use the appropriately named
    // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
    // for details.

    var MIN_SPACING = 1e-14;
    var stepSize = generationOptions.stepSize;
    var unit = stepSize || 1;
    var maxNumSpaces = generationOptions.maxTicks - 1;
    var min = generationOptions.min;
    var max = generationOptions.max;
    var precision = generationOptions.precision;
    var rmin = dataRange.min;
    var rmax = dataRange.max;
    var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
    var factor, niceMin, niceMax, numSpaces; // Beyond MIN_SPACING floating point numbers being to lose precision
    // such that we can't do the math necessary to generate ticks

    if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
      return [rmin, rmax];
    }

    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

    if (numSpaces > maxNumSpaces) {
      // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
      spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
    }

    if (stepSize || isNullOrUndef$2(precision)) {
      // If a precision is not specified, calculate factor based on spacing
      factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
    } else {
      // If the user specified a precision, round to that number of decimal places
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }

    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing; // If min, max and stepSize is set and they make an evenly spaced scale use it.

    if (stepSize) {
      // If very close to our whole number, use it.
      if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
        niceMin = min;
      }

      if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
        niceMax = max;
      }
    }

    numSpaces = (niceMax - niceMin) / spacing; // If very close to our rounded value, use it.

    if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }

    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    ticks.push(isNullOrUndef$2(min) ? niceMin : min);

    for (var j = 1; j < numSpaces; ++j) {
      ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
    }

    ticks.push(isNullOrUndef$2(max) ? niceMax : max);
    return ticks;
  }

  var scale_linearbase = core_scale.extend({
    getRightValue: function getRightValue(value) {
      if (typeof value === 'string') {
        return +value;
      }

      return core_scale.prototype.getRightValue.call(this, value);
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks; // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it

      if (tickOpts.beginAtZero) {
        var minSign = helpers$1.sign(me.min);
        var maxSign = helpers$1.sign(me.max);

        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }

      var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
      var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

      if (tickOpts.min !== undefined) {
        me.min = tickOpts.min;
      } else if (tickOpts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = tickOpts.suggestedMin;
        } else {
          me.min = Math.min(me.min, tickOpts.suggestedMin);
        }
      }

      if (tickOpts.max !== undefined) {
        me.max = tickOpts.max;
      } else if (tickOpts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = tickOpts.suggestedMax;
        } else {
          me.max = Math.max(me.max, tickOpts.suggestedMax);
        }
      }

      if (setMin !== setMax) {
        // We set the min or the max but not both.
        // So ensure that our range is good
        // Inverted or 0 length range can happen when
        // ticks.min is set, and no datasets are visible
        if (me.min >= me.max) {
          if (setMin) {
            me.max = me.min + 1;
          } else {
            me.min = me.max - 1;
          }
        }
      }

      if (me.min === me.max) {
        me.max++;

        if (!tickOpts.beginAtZero) {
          me.min--;
        }
      }
    },
    getTickLimit: function getTickLimit() {
      var me = this;
      var tickOpts = me.options.ticks;
      var stepSize = tickOpts.stepSize;
      var maxTicksLimit = tickOpts.maxTicksLimit;
      var maxTicks;

      if (stepSize) {
        maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
      } else {
        maxTicks = me._computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }

      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }

      return maxTicks;
    },
    _computeTickLimit: function _computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    },
    handleDirectionalChanges: noop,
    buildTicks: function buildTicks() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks; // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks

      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: tickOpts.min,
        max: tickOpts.max,
        precision: tickOpts.precision,
        stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
      };
      var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);
      me.handleDirectionalChanges(); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        ticks.reverse();
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var me = this;
      me.ticksAsNumbers = me.ticks.slice();
      me.zeroLineIndex = me.ticks.indexOf(0);
      core_scale.prototype.convertTicksToLabels.call(me);
    },
    _configure: function _configure() {
      var me = this;
      var ticks = me.getTicks();
      var start = me.min;
      var end = me.max;
      var offset;

      core_scale.prototype._configure.call(me);

      if (me.options.offset && ticks.length) {
        offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }

      me._startValue = start;
      me._endValue = end;
      me._valueRange = end - start;
    }
  });
  var defaultConfig$1 = {
    position: 'left',
    ticks: {
      callback: core_ticks.formatters.linear
    }
  };
  var DEFAULT_MIN = 0;
  var DEFAULT_MAX = 1;

  function getOrCreateStack(stacks, stacked, meta) {
    var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
    stacked === undefined && meta.stack === undefined ? meta.index : '', meta.stack].join('.');

    if (stacks[key] === undefined) {
      stacks[key] = {
        pos: [],
        neg: []
      };
    }

    return stacks[key];
  }

  function stackData(scale, stacks, meta, data) {
    var opts = scale.options;
    var stacked = opts.stacked;
    var stack = getOrCreateStack(stacks, stacked, meta);
    var pos = stack.pos;
    var neg = stack.neg;
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);

      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      pos[i] = pos[i] || 0;
      neg[i] = neg[i] || 0;

      if (opts.relativePoints) {
        pos[i] = 100;
      } else if (value.min < 0 || value.max < 0) {
        neg[i] += value.min;
      } else {
        pos[i] += value.max;
      }
    }
  }

  function updateMinMax(scale, meta, data) {
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);

      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      scale.min = Math.min(scale.min, value.min);
      scale.max = Math.max(scale.max, value.max);
    }
  }

  var scale_linear = scale_linearbase.extend({
    determineDataLimits: function determineDataLimits() {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;

      var metasets = me._getMatchingVisibleMetas();

      var hasStacks = opts.stacked;
      var stacks = {};
      var ilen = metasets.length;
      var i, meta, data, values;
      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;

      if (hasStacks === undefined) {
        for (i = 0; !hasStacks && i < ilen; ++i) {
          meta = metasets[i];
          hasStacks = meta.stack !== undefined;
        }
      }

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i];
        data = datasets[meta.index].data;

        if (hasStacks) {
          stackData(me, stacks, meta, data);
        } else {
          updateMinMax(me, meta, data);
        }
      }

      helpers$1.each(stacks, function (stackValues) {
        values = stackValues.pos.concat(stackValues.neg);
        me.min = Math.min(me.min, helpers$1.min(values));
        me.max = Math.max(me.max, helpers$1.max(values));
      });
      me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
      me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

      me.handleTickRangeOptions();
    },
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function _computeTickLimit() {
      var me = this;
      var tickFont;

      if (me.isHorizontal()) {
        return Math.ceil(me.width / 40);
      }

      tickFont = helpers$1.options._parseFont(me.options.ticks);
      return Math.ceil(me.height / tickFont.lineHeight);
    },
    // Called after the ticks are built. We need
    handleDirectionalChanges: function handleDirectionalChanges() {
      if (!this.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        this.ticks.reverse();
      }
    },
    getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
      return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
    },
    // Utils
    getPixelForValue: function getPixelForValue(value) {
      var me = this;
      return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
    },
    getValueForPixel: function getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    },
    getPixelForTick: function getPixelForTick(index) {
      var ticks = this.ticksAsNumbers;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$1 = defaultConfig$1;
  scale_linear._defaults = _defaults$1;
  var valueOrDefault$b = helpers$1.valueOrDefault;
  var log10 = helpers$1.math.log10;
  /**
   * Generate a set of logarithmic ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */

  function generateTicks$1(generationOptions, dataRange) {
    var ticks = [];
    var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
    var endExp = Math.floor(log10(dataRange.max));
    var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    var exp, significand;

    if (tickVal === 0) {
      exp = Math.floor(log10(dataRange.minNotZero));
      significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
      ticks.push(tickVal);
      tickVal = significand * Math.pow(10, exp);
    } else {
      exp = Math.floor(log10(tickVal));
      significand = Math.floor(tickVal / Math.pow(10, exp));
    }

    var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

    do {
      ticks.push(tickVal);
      ++significand;

      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }

      tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || exp === endExp && significand < endSignificand);

    var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
    ticks.push(lastTick);
    return ticks;
  }

  var defaultConfig$2 = {
    position: 'left',
    // label settings
    ticks: {
      callback: core_ticks.formatters.logarithmic
    }
  }; // TODO(v3): change this to positiveOrDefault

  function nonNegativeOrDefault(value, defaultValue) {
    return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
  }

  var scale_logarithmic = core_scale.extend({
    determineDataLimits: function determineDataLimits() {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var isHorizontal = me.isHorizontal();

      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }

      var datasetIndex, meta, value, data, i, ilen; // Calculate Range

      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;
      me.minNotZero = Number.POSITIVE_INFINITY;
      var hasStacks = opts.stacked;

      if (hasStacks === undefined) {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) && meta.stack !== undefined) {
            hasStacks = true;
            break;
          }
        }
      }

      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};

        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);
          var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
          opts.stacked === undefined && meta.stack === undefined ? datasetIndex : '', meta.stack].join('.');

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            if (valuesPerStack[key] === undefined) {
              valuesPerStack[key] = [];
            }

            data = datasets[datasetIndex].data;

            for (i = 0, ilen = data.length; i < ilen; i++) {
              var values = valuesPerStack[key];
              value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

              if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                continue;
              }

              values[i] = values[i] || 0;
              values[i] += value.max;
            }
          }
        }

        helpers$1.each(valuesPerStack, function (valuesForType) {
          if (valuesForType.length > 0) {
            var minVal = helpers$1.min(valuesForType);
            var maxVal = helpers$1.max(valuesForType);
            me.min = Math.min(me.min, minVal);
            me.max = Math.max(me.max, maxVal);
          }
        });
      } else {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            data = datasets[datasetIndex].data;

            for (i = 0, ilen = data.length; i < ilen; i++) {
              value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

              if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                continue;
              }

              me.min = Math.min(value.min, me.min);
              me.max = Math.max(value.max, me.max);

              if (value.min !== 0) {
                me.minNotZero = Math.min(value.min, me.minNotZero);
              }
            }
          }
        }
      }

      me.min = helpers$1.isFinite(me.min) ? me.min : null;
      me.max = helpers$1.isFinite(me.max) ? me.max : null;
      me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null; // Common base implementation to handle ticks.min, ticks.max

      this.handleTickRangeOptions();
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var me = this;
      var tickOpts = me.options.ticks;
      var DEFAULT_MIN = 1;
      var DEFAULT_MAX = 10;
      me.min = nonNegativeOrDefault(tickOpts.min, me.min);
      me.max = nonNegativeOrDefault(tickOpts.max, me.max);

      if (me.min === me.max) {
        if (me.min !== 0 && me.min !== null) {
          me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
          me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
        } else {
          me.min = DEFAULT_MIN;
          me.max = DEFAULT_MAX;
        }
      }

      if (me.min === null) {
        me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
      }

      if (me.max === null) {
        me.max = me.min !== 0 ? Math.pow(10, Math.floor(log10(me.min)) + 1) : DEFAULT_MAX;
      }

      if (me.minNotZero === null) {
        if (me.min > 0) {
          me.minNotZero = me.min;
        } else if (me.max < 1) {
          me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
        } else {
          me.minNotZero = DEFAULT_MIN;
        }
      }
    },
    buildTicks: function buildTicks() {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = !me.isHorizontal();
      var generationOptions = {
        min: nonNegativeOrDefault(tickOpts.min),
        max: nonNegativeOrDefault(tickOpts.max)
      };
      var ticks = me.ticks = generateTicks$1(generationOptions, me); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        reverse = !reverse;
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }

      if (reverse) {
        ticks.reverse();
      }
    },
    convertTicksToLabels: function convertTicksToLabels() {
      this.tickValues = this.ticks.slice();
      core_scale.prototype.convertTicksToLabels.call(this);
    },
    // Get the correct tooltip label
    getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
      return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
    },
    getPixelForTick: function getPixelForTick(index) {
      var ticks = this.tickValues;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    },

    /**
     * Returns the value of the first tick.
     * @param {number} value - The minimum not zero value.
     * @return {number} The first tick value.
     * @private
     */
    _getFirstTickValue: function _getFirstTickValue(value) {
      var exp = Math.floor(log10(value));
      var significand = Math.floor(value / Math.pow(10, exp));
      return significand * Math.pow(10, exp);
    },
    _configure: function _configure() {
      var me = this;
      var start = me.min;
      var offset = 0;

      core_scale.prototype._configure.call(me);

      if (start === 0) {
        start = me._getFirstTickValue(me.minNotZero);
        offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
      }

      me._startValue = log10(start);
      me._valueOffset = offset;
      me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
    },
    getPixelForValue: function getPixelForValue(value) {
      var me = this;
      var decimal = 0;
      value = +me.getRightValue(value);

      if (value > me.min && value > 0) {
        decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
      }

      return me.getPixelForDecimal(decimal);
    },
    getValueForPixel: function getValueForPixel(pixel) {
      var me = this;
      var decimal = me.getDecimalForPixel(pixel);
      return decimal === 0 && me.min === 0 ? 0 : Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$2 = defaultConfig$2;
  scale_logarithmic._defaults = _defaults$2;
  var valueOrDefault$c = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
  var resolve$4 = helpers$1.options.resolve;
  var defaultConfig$3 = {
    display: true,
    // Boolean - Whether to animate scaling the chart from the centre
    animate: true,
    position: 'chartArea',
    angleLines: {
      display: true,
      color: 'rgba(0,0,0,0.1)',
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0
    },
    gridLines: {
      circular: false
    },
    // label settings
    ticks: {
      // Boolean - Show a backdrop to the scale label
      showLabelBackdrop: true,
      // String - The colour of the label backdrop
      backdropColor: 'rgba(255,255,255,0.75)',
      // Number - The backdrop padding above & below the label in pixels
      backdropPaddingY: 2,
      // Number - The backdrop padding to the side of the label in pixels
      backdropPaddingX: 2,
      callback: core_ticks.formatters.linear
    },
    pointLabels: {
      // Boolean - if true, show point labels
      display: true,
      // Number - Point label font size in pixels
      fontSize: 10,
      // Function - Used to convert point labels
      callback: function callback(label) {
        return label;
      }
    }
  };

  function getTickBackdropHeight(opts) {
    var tickOpts = opts.ticks;

    if (tickOpts.display && opts.display) {
      return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
    }

    return 0;
  }

  function measureLabelSize(ctx, lineHeight, label) {
    if (helpers$1.isArray(label)) {
      return {
        w: helpers$1.longestText(ctx, ctx.font, label),
        h: label.length * lineHeight
      };
    }

    return {
      w: ctx.measureText(label).width,
      h: lineHeight
    };
  }

  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }

    return {
      start: pos,
      end: pos + size
    };
  }
  /**
   * Helper function to fit a radial linear scale with point labels
   */


  function fitWithPointLabels(scale) {
    // Right, this is really confusing and there is a lot of maths going on here
    // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
    //
    // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
    //
    // Solution:
    //
    // We assume the radius of the polygon is half the size of the canvas at first
    // at each index we check if the text overlaps.
    //
    // Where it does, we store that angle and that index.
    //
    // After finding the largest index and angle we calculate how much we need to remove
    // from the shape radius to move the point inwards by that x.
    //
    // We average the left and right distances to get the maximum shape radius that can fit in the box
    // along with labels.
    //
    // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
    // on each side, removing that from the size, halving it and adding the left x protrusion width.
    //
    // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
    // and position it in the most space efficient manner
    //
    // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
    var plFont = helpers$1.options._parseFont(scale.options.pointLabels); // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points


    var furthestLimits = {
      l: 0,
      r: scale.width,
      t: 0,
      b: scale.height - scale.paddingTop
    };
    var furthestAngles = {};
    var i, textSize, pointPosition;
    scale.ctx.font = plFont.string;
    scale._pointLabelSizes = [];
    var valueCount = scale.chart.data.labels.length;

    for (i = 0; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
      textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
      scale._pointLabelSizes[i] = textSize; // Add quarter circle to make degree 0 mean top of circle

      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians) % 360;
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }

      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }

      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }

      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }

    scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  }

  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return 'center';
    } else if (angle < 180) {
      return 'left';
    }

    return 'right';
  }

  function fillText(ctx, text, position, lineHeight) {
    var y = position.y + lineHeight / 2;
    var i, ilen;

    if (helpers$1.isArray(text)) {
      for (i = 0, ilen = text.length; i < ilen; ++i) {
        ctx.fillText(text[i], position.x, y);
        y += lineHeight;
      }
    } else {
      ctx.fillText(text, position.x, y);
    }
  }

  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= textSize.h / 2;
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }

  function drawPointLabels(scale) {
    var ctx = scale.ctx;
    var opts = scale.options;
    var pointLabelOpts = opts.pointLabels;
    var tickBackdropHeight = getTickBackdropHeight(opts);
    var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

    var plFont = helpers$1.options._parseFont(pointLabelOpts);

    ctx.save();
    ctx.font = plFont.string;
    ctx.textBaseline = 'middle';

    for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
      // Extra pixels out for some label spacing
      var extra = i === 0 ? tickBackdropHeight / 2 : 0;
      var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5); // Keep this in loop since we may support array properties here

      var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
      ctx.fillStyle = pointLabelFontColor;
      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians);
      ctx.textAlign = getTextAlignForAngle(angle);
      adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
      fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
    }

    ctx.restore();
  }

  function drawRadiusLine(scale, gridLineOpts, radius, index) {
    var ctx = scale.ctx;
    var circular = gridLineOpts.circular;
    var valueCount = scale.chart.data.labels.length;
    var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
    var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
    var pointPosition;

    if (!circular && !valueCount || !lineColor || !lineWidth) {
      return;
    }

    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    if (ctx.setLineDash) {
      ctx.setLineDash(gridLineOpts.borderDash || []);
      ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
    }

    ctx.beginPath();

    if (circular) {
      // Draw circular arcs between the points
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
    } else {
      // Draw straight lines connecting each index
      pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);

      for (var i = 1; i < valueCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function numberOrZero(param) {
    return helpers$1.isNumber(param) ? param : 0;
  }

  var scale_radialLinear = scale_linearbase.extend({
    setDimensions: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.paddingTop = getTickBackdropHeight(me.options) / 2;
      me.xCenter = Math.floor(me.width / 2);
      me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
      me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
    },
    determineDataLimits: function determineDataLimits() {
      var me = this;
      var chart = me.chart;
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;
      helpers$1.each(chart.data.datasets, function (dataset, datasetIndex) {
        if (chart.isDatasetVisible(datasetIndex)) {
          var meta = chart.getDatasetMeta(datasetIndex);
          helpers$1.each(dataset.data, function (rawValue, index) {
            var value = +me.getRightValue(rawValue);

            if (isNaN(value) || meta.data[index].hidden) {
              return;
            }

            min = Math.min(value, min);
            max = Math.max(value, max);
          });
        }
      });
      me.min = min === Number.POSITIVE_INFINITY ? 0 : min;
      me.max = max === Number.NEGATIVE_INFINITY ? 0 : max; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

      me.handleTickRangeOptions();
    },
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function _computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var me = this;
      scale_linearbase.prototype.convertTicksToLabels.call(me); // Point labels

      me.pointLabels = me.chart.data.labels.map(function () {
        var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
        return label || label === 0 ? label : '';
      });
    },
    getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
    fit: function fit() {
      var me = this;
      var opts = me.options;

      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(me);
      } else {
        me.setCenterPoint(0, 0, 0, 0);
      }
    },

    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */
    setReductions: function setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);
      me.drawingArea = Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
      me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
    },
    setCenterPoint: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea;
      var maxLeft = leftMovement + me.drawingArea;
      var maxTop = topMovement + me.drawingArea;
      var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
      me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
      me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
    },
    getIndexAngle: function getIndexAngle(index) {
      var chart = this.chart;
      var angleMultiplier = 360 / chart.data.labels.length;
      var options = chart.options || {};
      var startAngle = options.startAngle || 0; // Start from the top instead of right, so remove a quarter of the circle

      var angle = (index * angleMultiplier + startAngle) % 360;
      return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
    },
    getDistanceFromCenterForValue: function getDistanceFromCenterForValue(value) {
      var me = this;

      if (helpers$1.isNullOrUndef(value)) {
        return NaN;
      } // Take into account half font size + the yPadding of the top value


      var scalingFactor = me.drawingArea / (me.max - me.min);

      if (me.options.ticks.reverse) {
        return (me.max - value) * scalingFactor;
      }

      return (value - me.min) * scalingFactor;
    },
    getPointPosition: function getPointPosition(index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - Math.PI / 2;
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
      };
    },
    getPointPositionForValue: function getPointPositionForValue(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    },
    getBasePosition: function getBasePosition(index) {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.getPointPositionForValue(index || 0, me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
    },

    /**
     * @private
     */
    _drawGrid: function _drawGrid() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var angleLineOpts = opts.angleLines;
      var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
      var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
      var i, offset, position;

      if (opts.pointLabels.display) {
        drawPointLabels(me);
      }

      if (gridLineOpts.display) {
        helpers$1.each(me.ticks, function (label, index) {
          if (index !== 0) {
            offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
            drawRadiusLine(me, gridLineOpts, offset, index);
          }
        });
      }

      if (angleLineOpts.display && lineWidth && lineColor) {
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;

        if (ctx.setLineDash) {
          ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
          ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
        }

        for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
          offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
          position = me.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(me.xCenter, me.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }

        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawLabels: function _drawLabels() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var tickOpts = opts.ticks;

      if (!tickOpts.display) {
        return;
      }

      var startAngle = me.getIndexAngle(0);

      var tickFont = helpers$1.options._parseFont(tickOpts);

      var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
      var offset, width;
      ctx.save();
      ctx.font = tickFont.string;
      ctx.translate(me.xCenter, me.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      helpers$1.each(me.ticks, function (label, index) {
        if (index === 0 && !tickOpts.reverse) {
          return;
        }

        offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

        if (tickOpts.showLabelBackdrop) {
          width = ctx.measureText(label).width;
          ctx.fillStyle = tickOpts.backdropColor;
          ctx.fillRect(-width / 2 - tickOpts.backdropPaddingX, -offset - tickFont.size / 2 - tickOpts.backdropPaddingY, width + tickOpts.backdropPaddingX * 2, tickFont.size + tickOpts.backdropPaddingY * 2);
        }

        ctx.fillStyle = tickFontColor;
        ctx.fillText(label, 0, -offset);
      });
      ctx.restore();
    },

    /**
     * @private
     */
    _drawTitle: helpers$1.noop
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$3 = defaultConfig$3;
  scale_radialLinear._defaults = _defaults$3;
  var deprecated$1 = helpers$1._deprecated;
  var resolve$5 = helpers$1.options.resolve;
  var valueOrDefault$d = helpers$1.valueOrDefault; // Integer constants are from the ES6 spec.

  var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
  var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1000
    },
    second: {
      common: true,
      size: 1000,
      steps: 60
    },
    minute: {
      common: true,
      size: 60000,
      steps: 60
    },
    hour: {
      common: true,
      size: 3600000,
      steps: 24
    },
    day: {
      common: true,
      size: 86400000,
      steps: 30
    },
    week: {
      common: false,
      size: 604800000,
      steps: 4
    },
    month: {
      common: true,
      size: 2.628e9,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7.884e9,
      steps: 4
    },
    year: {
      common: true,
      size: 3.154e10
    }
  };
  var UNITS = Object.keys(INTERVALS);

  function sorter(a, b) {
    return a - b;
  }

  function arrayUnique(items) {
    var hash = {};
    var out = [];
    var i, ilen, item;

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];

      if (!hash[item]) {
        hash[item] = true;
        out.push(item);
      }
    }

    return out;
  }

  function getMin(options) {
    return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
  }

  function getMax(options) {
    return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
  }
  /**
   * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
   * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
   * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
   * extremity (left + width or top + height). Note that it would be more optimized to directly
   * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
   * to create the lookup table. The table ALWAYS contains at least two items: min and max.
   *
   * @param {number[]} timestamps - timestamps sorted from lowest to highest.
   * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
   * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
   * If 'series', timestamps will be positioned at the same distance from each other. In this
   * case, only timestamps that break the time linearity are registered, meaning that in the
   * best case, all timestamps are linear, the table contains only min and max.
   */


  function buildLookupTable(timestamps, min, max, distribution) {
    if (distribution === 'linear' || !timestamps.length) {
      return [{
        time: min,
        pos: 0
      }, {
        time: max,
        pos: 1
      }];
    }

    var table = [];
    var items = [min];
    var i, ilen, prev, curr, next;

    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];

      if (curr > min && curr < max) {
        items.push(curr);
      }
    }

    items.push(max);

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i]; // only add points that breaks the scale linearity

      if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
        table.push({
          time: curr,
          pos: i / (ilen - 1)
        });
      }
    }

    return table;
  } // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/


  function lookup(table, key, value) {
    var lo = 0;
    var hi = table.length - 1;
    var mid, i0, i1;

    while (lo >= 0 && lo <= hi) {
      mid = lo + hi >> 1;
      i0 = table[mid - 1] || null;
      i1 = table[mid];

      if (!i0) {
        // given value is outside table (before first item)
        return {
          lo: null,
          hi: i1
        };
      } else if (i1[key] < value) {
        lo = mid + 1;
      } else if (i0[key] > value) {
        hi = mid - 1;
      } else {
        return {
          lo: i0,
          hi: i1
        };
      }
    } // given value is outside table (after last item)


    return {
      lo: i1,
      hi: null
    };
  }
  /**
   * Linearly interpolates the given source `value` using the table items `skey` values and
   * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
   * returns the position for a timestamp equal to 42. If value is out of bounds, values at
   * index [0, 1] or [n - 1, n] are used for the interpolation.
   */


  function interpolate$1(table, skey, sval, tkey) {
    var range = lookup(table, skey, sval); // Note: the lookup table ALWAYS contains at least 2 items (min and max)

    var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
    var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
    var span = next[skey] - prev[skey];
    var ratio = span ? (sval - prev[skey]) / span : 0;
    var offset = (next[tkey] - prev[tkey]) * ratio;
    return prev[tkey] + offset;
  }

  function toTimestamp(scale, input) {
    var adapter = scale._adapter;
    var options = scale.options.time;
    var parser = options.parser;
    var format = parser || options.format;
    var value = input;

    if (typeof parser === 'function') {
      value = parser(value);
    } // Only parse if its not a timestamp already


    if (!helpers$1.isFinite(value)) {
      value = typeof format === 'string' ? adapter.parse(value, format) : adapter.parse(value);
    }

    if (value !== null) {
      return +value;
    } // Labels are in an incompatible format and no `parser` has been provided.
    // The user might still use the deprecated `format` option for parsing.


    if (!parser && typeof format === 'function') {
      value = format(input); // `format` could return something else than a timestamp, if so, parse it

      if (!helpers$1.isFinite(value)) {
        value = adapter.parse(value);
      }
    }

    return value;
  }

  function parse(scale, input) {
    if (helpers$1.isNullOrUndef(input)) {
      return null;
    }

    var options = scale.options.time;
    var value = toTimestamp(scale, scale.getRightValue(input));

    if (value === null) {
      return value;
    }

    if (options.round) {
      value = +scale._adapter.startOf(value, options.round);
    }

    return value;
  }
  /**
   * Figures out what unit results in an appropriate number of auto-generated ticks
   */


  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    var ilen = UNITS.length;
    var i, interval, factor;

    for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      interval = INTERVALS[UNITS[i]];
      factor = interval.steps ? interval.steps : MAX_INTEGER;

      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }

    return UNITS[ilen - 1];
  }
  /**
   * Figures out what unit to format a set of ticks with
   */


  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    var i, unit;

    for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      unit = UNITS[i];

      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }

    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }

  function determineMajorUnit(unit) {
    for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }
  /**
   * Generates a maximum of `capacity` timestamps between min and max, rounded to the
   * `minor` unit using the given scale time `options`.
   * Important: this method can return ticks outside the min and max range, it's the
   * responsibility of the calling code to clamp values if needed.
   */


  function generate(scale, min, max, capacity) {
    var adapter = scale._adapter;
    var options = scale.options;
    var timeOpts = options.time;
    var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
    var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
    var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    var first = min;
    var ticks = [];
    var time; // For 'week' unit, handle the first day of week option

    if (weekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    } // Align first ticks on unit


    first = +adapter.startOf(first, weekday ? 'day' : minor); // Prevent browser from freezing in case user options request millions of milliseconds

    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
    }

    for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
      ticks.push(time);
    }

    if (time === max || options.bounds === 'ticks') {
      ticks.push(time);
    }

    return ticks;
  }
  /**
   * Returns the start and end offsets from edges in the form of {start, end}
   * where each value is a relative width to the scale and ranges between 0 and 1.
   * They add extra margins on the both sides by scaling down the original scale.
   * Offsets are added when the `offset` option is true.
   */


  function computeOffsets(table, ticks, min, max, options) {
    var start = 0;
    var end = 0;
    var first, last;

    if (options.offset && ticks.length) {
      first = interpolate$1(table, 'time', ticks[0], 'pos');

      if (ticks.length === 1) {
        start = 1 - first;
      } else {
        start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
      }

      last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');

      if (ticks.length === 1) {
        end = last;
      } else {
        end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
      }
    }

    return {
      start: start,
      end: end,
      factor: 1 / (start + 1 + end)
    };
  }

  function setMajorTicks(scale, ticks, map, majorUnit) {
    var adapter = scale._adapter;
    var first = +adapter.startOf(ticks[0].value, majorUnit);
    var last = ticks[ticks.length - 1].value;
    var major, index;

    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index = map[major];

      if (index >= 0) {
        ticks[index].major = true;
      }
    }

    return ticks;
  }

  function ticksFromTimestamps(scale, values, majorUnit) {
    var ticks = [];
    var map = {};
    var ilen = values.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map[value] = i;
      ticks.push({
        value: value,
        major: false
      });
    } // We set the major ticks separately from the above loop because calling startOf for every tick
    // is expensive when there is a large number of ticks


    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
  }

  var defaultConfig$4 = {
    position: 'bottom',

    /**
     * Data distribution along the scale:
     * - 'linear': data are spread according to their time (distances can vary),
     * - 'series': data are spread at the same distance from each other.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     */
    distribution: 'linear',

    /**
     * Scale boundary strategy (bypassed by min/max time options)
     * - `data`: make sure data are fully visible, ticks outside are removed
     * - `ticks`: make sure ticks are fully visible, data outside are truncated
     * @see https://github.com/chartjs/Chart.js/pull/4556
     * @since 2.7.0
     */
    bounds: 'data',
    adapters: {},
    time: {
      parser: false,
      // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
      unit: false,
      // false == automatic or override with week, month, year, etc.
      round: false,
      // none, or override with week, month, year, etc.
      displayFormat: false,
      // DEPRECATED
      isoWeekday: false,
      // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: {
      autoSkip: false,

      /**
       * Ticks generation input values:
       * - 'auto': generates "optimal" ticks based on scale size and time options.
       * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
       * - 'labels': generates ticks from user given `data.labels` values ONLY.
       * @see https://github.com/chartjs/Chart.js/pull/4507
       * @since 2.7.0
       */
      source: 'auto',
      major: {
        enabled: false
      }
    }
  };
  var scale_time = core_scale.extend({
    initialize: function initialize() {
      this.mergeTicksOptions();
      core_scale.prototype.initialize.call(this);
    },
    update: function update() {
      var me = this;
      var options = me.options;
      var time = options.time || (options.time = {});
      var adapter = me._adapter = new core_adapters._date(options.adapters.date); // DEPRECATIONS: output a message only one time per update

      deprecated$1('time scale', time.format, 'time.format', 'time.parser');
      deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
      deprecated$1('time scale', time.max, 'time.max', 'ticks.max'); // Backward compatibility: before introducing adapter, `displayFormats` was
      // supposed to contain *all* unit/string pairs but this can't be resolved
      // when loading the scale (adapters are loaded afterward), so let's populate
      // missing formats on update

      helpers$1.mergeIf(time.displayFormats, adapter.formats());
      return core_scale.prototype.update.apply(me, arguments);
    },

    /**
     * Allows data to be referenced via 't' attribute
     */
    getRightValue: function getRightValue(rawValue) {
      if (rawValue && rawValue.t !== undefined) {
        rawValue = rawValue.t;
      }

      return core_scale.prototype.getRightValue.call(this, rawValue);
    },
    determineDataLimits: function determineDataLimits() {
      var me = this;
      var chart = me.chart;
      var adapter = me._adapter;
      var options = me.options;
      var unit = options.time.unit || 'day';
      var min = MAX_INTEGER;
      var max = MIN_INTEGER;
      var timestamps = [];
      var datasets = [];
      var labels = [];
      var i, j, ilen, jlen, data, timestamp, labelsAdded;

      var dataLabels = me._getLabels();

      for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
        labels.push(parse(me, dataLabels[i]));
      }

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          data = chart.data.datasets[i].data; // Let's consider that all data have the same format.

          if (helpers$1.isObject(data[0])) {
            datasets[i] = [];

            for (j = 0, jlen = data.length; j < jlen; ++j) {
              timestamp = parse(me, data[j]);
              timestamps.push(timestamp);
              datasets[i][j] = timestamp;
            }
          } else {
            datasets[i] = labels.slice(0);

            if (!labelsAdded) {
              timestamps = timestamps.concat(labels);
              labelsAdded = true;
            }
          }
        } else {
          datasets[i] = [];
        }
      }

      if (labels.length) {
        min = Math.min(min, labels[0]);
        max = Math.max(max, labels[labels.length - 1]);
      }

      if (timestamps.length) {
        timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
        min = Math.min(min, timestamps[0]);
        max = Math.max(max, timestamps[timestamps.length - 1]);
      }

      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max; // In case there is no valid min/max, set limits based on unit time option

      min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
      max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max; // Make sure that max is strictly higher than min (required by the lookup table)

      me.min = Math.min(min, max);
      me.max = Math.max(min + 1, max); // PRIVATE

      me._table = [];
      me._timestamps = {
        data: timestamps,
        datasets: datasets,
        labels: labels
      };
    },
    buildTicks: function buildTicks() {
      var me = this;
      var min = me.min;
      var max = me.max;
      var options = me.options;
      var tickOpts = options.ticks;
      var timeOpts = options.time;
      var timestamps = me._timestamps;
      var ticks = [];
      var capacity = me.getLabelCapacity(min);
      var source = tickOpts.source;
      var distribution = options.distribution;
      var i, ilen, timestamp;

      if (source === 'data' || source === 'auto' && distribution === 'series') {
        timestamps = timestamps.data;
      } else if (source === 'labels') {
        timestamps = timestamps.labels;
      } else {
        timestamps = generate(me, min, max, capacity);
      }

      if (options.bounds === 'ticks' && timestamps.length) {
        min = timestamps[0];
        max = timestamps[timestamps.length - 1];
      } // Enforce limits with user min/max options


      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max; // Remove ticks outside the min/max range

      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        timestamp = timestamps[i];

        if (timestamp >= min && timestamp <= max) {
          ticks.push(timestamp);
        }
      }

      me.min = min;
      me.max = max; // PRIVATE
      // determineUnitForFormatting relies on the number of ticks so we don't use it when
      // autoSkip is enabled because we don't yet know what the final number of ticks will be

      me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
      me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
      me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
      me._offsets = computeOffsets(me._table, ticks, min, max, options);

      if (tickOpts.reverse) {
        ticks.reverse();
      }

      return ticksFromTimestamps(me, ticks, me._majorUnit);
    },
    getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
      var me = this;
      var adapter = me._adapter;
      var data = me.chart.data;
      var timeOpts = me.options.time;
      var label = data.labels && index < data.labels.length ? data.labels[index] : '';
      var value = data.datasets[datasetIndex].data[index];

      if (helpers$1.isObject(value)) {
        label = me.getRightValue(value);
      }

      if (timeOpts.tooltipFormat) {
        return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
      }

      if (typeof label === 'string') {
        return label;
      }

      return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
    },

    /**
     * Function to format an individual tick mark
     * @private
     */
    tickFormatFunction: function tickFormatFunction(time, index, ticks, format) {
      var me = this;
      var adapter = me._adapter;
      var options = me.options;
      var formats = options.time.displayFormats;
      var minorFormat = formats[me._unit];
      var majorUnit = me._majorUnit;
      var majorFormat = formats[majorUnit];
      var tick = ticks[index];
      var tickOpts = options.ticks;
      var major = majorUnit && majorFormat && tick && tick.major;
      var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
      var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
      var formatter = resolve$5([nestedTickOpts.callback, nestedTickOpts.userCallback, tickOpts.callback, tickOpts.userCallback]);
      return formatter ? formatter(label, index, ticks) : label;
    },
    convertTicksToLabels: function convertTicksToLabels(ticks) {
      var labels = [];
      var i, ilen;

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
      }

      return labels;
    },

    /**
     * @private
     */
    getPixelForOffset: function getPixelForOffset(time) {
      var me = this;
      var offsets = me._offsets;
      var pos = interpolate$1(me._table, 'time', time, 'pos');
      return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    },
    getPixelForValue: function getPixelForValue(value, index, datasetIndex) {
      var me = this;
      var time = null;

      if (index !== undefined && datasetIndex !== undefined) {
        time = me._timestamps.datasets[datasetIndex][index];
      }

      if (time === null) {
        time = parse(me, value);
      }

      if (time !== null) {
        return me.getPixelForOffset(time);
      }
    },
    getPixelForTick: function getPixelForTick(index) {
      var ticks = this.getTicks();
      return index >= 0 && index < ticks.length ? this.getPixelForOffset(ticks[index].value) : null;
    },
    getValueForPixel: function getValueForPixel(pixel) {
      var me = this;
      var offsets = me._offsets;
      var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      var time = interpolate$1(me._table, 'pos', pos, 'time'); // DEPRECATION, we should return time directly

      return me._adapter._create(time);
    },

    /**
     * @private
     */
    _getLabelSize: function _getLabelSize(label) {
      var me = this;
      var ticksOpts = me.options.ticks;
      var tickLabelWidth = me.ctx.measureText(label).width;
      var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      var cosRotation = Math.cos(angle);
      var sinRotation = Math.sin(angle);
      var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    },

    /**
     * Crude approximation of what the label width might be
     * @private
     */
    getLabelWidth: function getLabelWidth(label) {
      return this._getLabelSize(label).w;
    },

    /**
     * @private
     */
    getLabelCapacity: function getLabelCapacity(exampleTime) {
      var me = this;
      var timeOpts = me.options.time;
      var displayFormats = timeOpts.displayFormats; // pick the longest format (milliseconds) for guestimation

      var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

      var size = me._getLabelSize(exampleLabel);

      var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

      if (me.options.offset) {
        capacity--;
      }

      return capacity > 0 ? capacity : 1;
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$4 = defaultConfig$4;
  scale_time._defaults = _defaults$4;
  var scales = {
    category: scale_category,
    linear: scale_linear,
    logarithmic: scale_logarithmic,
    radialLinear: scale_radialLinear,
    time: scale_time
  };
  var FORMATS = {
    datetime: 'MMM D, YYYY, h:mm:ss a',
    millisecond: 'h:mm:ss.SSS a',
    second: 'h:mm:ss a',
    minute: 'h:mm a',
    hour: 'hA',
    day: 'MMM D',
    week: 'll',
    month: 'MMM YYYY',
    quarter: '[Q]Q - YYYY',
    year: 'YYYY'
  };

  core_adapters._date.override(typeof moment === 'function' ? {
    _id: 'moment',
    // DEBUG ONLY
    formats: function formats() {
      return FORMATS;
    },
    parse: function parse(value, format) {
      if (typeof value === 'string' && typeof format === 'string') {
        value = moment(value, format);
      } else if (!(value instanceof moment)) {
        value = moment(value);
      }

      return value.isValid() ? value.valueOf() : null;
    },
    format: function format(time, _format) {
      return moment(time).format(_format);
    },
    add: function add(time, amount, unit) {
      return moment(time).add(amount, unit).valueOf();
    },
    diff: function diff(max, min, unit) {
      return moment(max).diff(moment(min), unit);
    },
    startOf: function startOf(time, unit, weekday) {
      time = moment(time);

      if (unit === 'isoWeek') {
        return time.isoWeekday(weekday).valueOf();
      }

      return time.startOf(unit).valueOf();
    },
    endOf: function endOf(time, unit) {
      return moment(time).endOf(unit).valueOf();
    },
    // DEPRECATIONS

    /**
     * Provided for backward compatibility with scale.getValueForPixel().
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function _create(time) {
      return moment(time);
    }
  } : {});

  core_defaults._set('global', {
    plugins: {
      filler: {
        propagate: true
      }
    }
  });

  var mappers = {
    dataset: function dataset(source) {
      var index = source.fill;
      var chart = source.chart;
      var meta = chart.getDatasetMeta(index);
      var visible = meta && chart.isDatasetVisible(index);
      var points = visible && meta.dataset._children || [];
      var length = points.length || 0;
      return !length ? null : function (point, i) {
        return i < length && points[i]._view || null;
      };
    },
    boundary: function boundary(source) {
      var boundary = source.boundary;
      var x = boundary ? boundary.x : null;
      var y = boundary ? boundary.y : null;

      if (helpers$1.isArray(boundary)) {
        return function (point, i) {
          return boundary[i];
        };
      }

      return function (point) {
        return {
          x: x === null ? point.x : x,
          y: y === null ? point.y : y
        };
      };
    }
  }; // @todo if (fill[0] === '#')

  function decodeFill(el, index, count) {
    var model = el._model || {};
    var fill = model.fill;
    var target;

    if (fill === undefined) {
      fill = !!model.backgroundColor;
    }

    if (fill === false || fill === null) {
      return false;
    }

    if (fill === true) {
      return 'origin';
    }

    target = parseFloat(fill, 10);

    if (isFinite(target) && Math.floor(target) === target) {
      if (fill[0] === '-' || fill[0] === '+') {
        target = index + target;
      }

      if (target === index || target < 0 || target >= count) {
        return false;
      }

      return target;
    }

    switch (fill) {
      // compatibility
      case 'bottom':
        return 'start';

      case 'top':
        return 'end';

      case 'zero':
        return 'origin';
      // supported boundaries

      case 'origin':
      case 'start':
      case 'end':
        return fill;
      // invalid fill values

      default:
        return false;
    }
  }

  function computeLinearBoundary(source) {
    var model = source.el._model || {};
    var scale = source.el._scale || {};
    var fill = source.fill;
    var target = null;
    var horizontal;

    if (isFinite(fill)) {
      return null;
    } // Backward compatibility: until v3, we still need to support boundary values set on
    // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
    // controllers might still use it (e.g. the Smith chart).


    if (fill === 'start') {
      target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
    } else if (fill === 'end') {
      target = model.scaleTop === undefined ? scale.top : model.scaleTop;
    } else if (model.scaleZero !== undefined) {
      target = model.scaleZero;
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }

    if (target !== undefined && target !== null) {
      if (target.x !== undefined && target.y !== undefined) {
        return target;
      }

      if (helpers$1.isFinite(target)) {
        horizontal = scale.isHorizontal();
        return {
          x: horizontal ? target : null,
          y: horizontal ? null : target
        };
      }
    }

    return null;
  }

  function computeCircularBoundary(source) {
    var scale = source.el._scale;
    var options = scale.options;
    var length = scale.chart.data.labels.length;
    var fill = source.fill;
    var target = [];
    var start, end, center, i, point;

    if (!length) {
      return null;
    }

    start = options.ticks.reverse ? scale.max : scale.min;
    end = options.ticks.reverse ? scale.min : scale.max;
    center = scale.getPointPositionForValue(0, start);

    for (i = 0; i < length; ++i) {
      point = fill === 'start' || fill === 'end' ? scale.getPointPositionForValue(i, fill === 'start' ? start : end) : scale.getBasePosition(i);

      if (options.gridLines.circular) {
        point.cx = center.x;
        point.cy = center.y;
        point.angle = scale.getIndexAngle(i) - Math.PI / 2;
      }

      target.push(point);
    }

    return target;
  }

  function computeBoundary(source) {
    var scale = source.el._scale || {};

    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }

    return computeLinearBoundary(source);
  }

  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;

    if (!propagate) {
      return fill;
    }

    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isFinite(fill)) {
        return fill;
      }

      target = sources[fill];

      if (!target) {
        return false;
      }

      if (target.visible) {
        return fill;
      }

      visited.push(fill);
      fill = target.fill;
    }

    return false;
  }

  function createMapper(source) {
    var fill = source.fill;
    var type = 'dataset';

    if (fill === false) {
      return null;
    }

    if (!isFinite(fill)) {
      type = 'boundary';
    }

    return mappers[type](source);
  }

  function isDrawable(point) {
    return point && !point.skip;
  }

  function drawArea(ctx, curve0, curve1, len0, len1) {
    var i, cx, cy, r;

    if (!len0 || !len1) {
      return;
    } // building first area curve (normal)


    ctx.moveTo(curve0[0].x, curve0[0].y);

    for (i = 1; i < len0; ++i) {
      helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
    }

    if (curve1[0].angle !== undefined) {
      cx = curve1[0].cx;
      cy = curve1[0].cy;
      r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));

      for (i = len1 - 1; i > 0; --i) {
        ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
      }

      return;
    } // joining the two area curves


    ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y); // building opposite area curve (reverse)

    for (i = len1 - 1; i > 0; --i) {
      helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
    }
  }

  function doFill(ctx, points, mapper, view, color, loop) {
    var count = points.length;
    var span = view.spanGaps;
    var curve0 = [];
    var curve1 = [];
    var len0 = 0;
    var len1 = 0;
    var i, ilen, index, p0, p1, d0, d1, loopOffset;
    ctx.beginPath();

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i % count;
      p0 = points[index]._view;
      p1 = mapper(p0, index, view);
      d0 = isDrawable(p0);
      d1 = isDrawable(p1);

      if (loop && loopOffset === undefined && d0) {
        loopOffset = i + 1;
        ilen = count + loopOffset;
      }

      if (d0 && d1) {
        len0 = curve0.push(p0);
        len1 = curve1.push(p1);
      } else if (len0 && len1) {
        if (!span) {
          drawArea(ctx, curve0, curve1, len0, len1);
          len0 = len1 = 0;
          curve0 = [];
          curve1 = [];
        } else {
          if (d0) {
            curve0.push(p0);
          }

          if (d1) {
            curve1.push(p1);
          }
        }
      }
    }

    drawArea(ctx, curve0, curve1, len0, len1);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  var plugin_filler = {
    id: 'filler',
    afterDatasetsUpdate: function afterDatasetsUpdate(chart, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, el, source;

      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        el = meta.dataset;
        source = null;

        if (el && el._model && el instanceof elements.Line) {
          source = {
            visible: chart.isDatasetVisible(i),
            fill: decodeFill(el, i, count),
            chart: chart,
            el: el
          };
        }

        meta.$filler = source;
        sources.push(source);
      }

      for (i = 0; i < count; ++i) {
        source = sources[i];

        if (!source) {
          continue;
        }

        source.fill = resolveTarget(sources, i, propagate);
        source.boundary = computeBoundary(source);
        source.mapper = createMapper(source);
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
      var metasets = chart._getSortedVisibleDatasetMetas();

      var ctx = chart.ctx;
      var meta, i, el, view, points, mapper, color;

      for (i = metasets.length - 1; i >= 0; --i) {
        meta = metasets[i].$filler;

        if (!meta || !meta.visible) {
          continue;
        }

        el = meta.el;
        view = el._view;
        points = el._children || [];
        mapper = meta.mapper;
        color = view.backgroundColor || core_defaults.global.defaultColor;

        if (mapper && color && points.length) {
          helpers$1.canvas.clipArea(ctx, chart.chartArea);
          doFill(ctx, points, mapper, view, color, el._loop);
          helpers$1.canvas.unclipArea(ctx);
        }
      }
    }
  };
  var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
  var noop$1 = helpers$1.noop;
  var valueOrDefault$e = helpers$1.valueOrDefault;

  core_defaults._set('global', {
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      fullWidth: true,
      reverse: false,
      weight: 1000,
      // a callback that will handle
      onClick: function onClick(e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var meta = ci.getDatasetMeta(index); // See controller.isDatasetVisible comment

        meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null; // We hid a dataset ... rerender the chart

        ci.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        // Generates labels shown in the legend
        // Valid properties to return:
        // text : text to display
        // fillStyle : fill of coloured box
        // strokeStyle: stroke of coloured box
        // hidden : if this legend item refers to a hidden item
        // lineCap : cap style for line
        // lineDash
        // lineDashOffset :
        // lineJoin :
        // lineWidth :
        generateLabels: function generateLabels(chart) {
          var datasets = chart.data.datasets;
          var options = chart.options.legend || {};
          var usePointStyle = options.labels && options.labels.usePointStyle;
          return chart._getSortedDatasetMetas().map(function (meta) {
            var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              hidden: !chart.isDatasetVisible(meta.index),
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: style.borderWidth,
              strokeStyle: style.borderColor,
              pointStyle: style.pointStyle,
              rotation: style.rotation,
              // Below is extra data used for toggling the datasets
              datasetIndex: meta.index
            };
          }, this);
        }
      }
    },
    legendCallback: function legendCallback(chart) {
      var list = document.createElement('ul');
      var datasets = chart.data.datasets;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        listItem = list.appendChild(document.createElement('li'));
        listItemSpan = listItem.appendChild(document.createElement('span'));
        listItemSpan.style.backgroundColor = datasets[i].backgroundColor;

        if (datasets[i].label) {
          listItem.appendChild(document.createTextNode(datasets[i].label));
        }
      }

      return list.outerHTML;
    }
  });
  /**
   * Helper function to get the box width based on the usePointStyle option
   * @param {object} labelopts - the label options on the legend
   * @param {number} fontSize - the label font size
   * @return {number} width of the color box area
   */


  function getBoxWidth(labelOpts, fontSize) {
    return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
  }
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */


  var Legend = core_element.extend({
    initialize: function initialize(config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
      /**
      	 * @private
      	 */

      me._hoveredItem = null; // Are we in doughnut mode which has a different data type

      me.doughnutMode = false;
    },
    // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type
    beforeUpdate: noop$1,
    update: function update(maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    },
    afterUpdate: noop$1,
    //
    beforeSetDimensions: noop$1,
    setDimensions: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$1,
    //
    beforeBuildLabels: noop$1,
    buildLabels: function buildLabels() {
      var me = this;
      var labelOpts = me.options.labels || {};
      var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

      if (labelOpts.filter) {
        legendItems = legendItems.filter(function (item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }

      if (me.options.reverse) {
        legendItems.reverse();
      }

      me.legendItems = legendItems;
    },
    afterBuildLabels: noop$1,
    //
    beforeFit: noop$1,
    fit: function fit() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;
      var ctx = me.ctx;

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size; // Reset hit boxes

      var hitboxes = me.legendHitBoxes = [];
      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width

        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      } // Increase sizes here


      if (!display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      ctx.font = labelFont.string;

      if (isHorizontal) {
        // Labels
        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
        var lineWidths = me.lineWidths = [0];
        var totalHeight = 0;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var width = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
            totalHeight += fontSize + labelOpts.padding;
            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          } // Store the hitbox width and height here. Final position will be updated in `draw`


          hitboxes[i] = {
            left: 0,
            top: 0,
            width: width,
            height: fontSize
          };
          lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
        });
        minSize.height += totalHeight;
      } else {
        var vPadding = labelOpts.padding;
        var columnWidths = me.columnWidths = [];
        var columnHeights = me.columnHeights = [];
        var totalWidth = labelOpts.padding;
        var currentColWidth = 0;
        var currentColHeight = 0;
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width; // If too tall, go to new column

          if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
            totalWidth += currentColWidth + labelOpts.padding;
            columnWidths.push(currentColWidth); // previous column width

            columnHeights.push(currentColHeight);
            currentColWidth = 0;
            currentColHeight = 0;
          } // Get max width


          currentColWidth = Math.max(currentColWidth, itemWidth);
          currentColHeight += fontSize + vPadding; // Store the hitbox width and height here. Final position will be updated in `draw`

          hitboxes[i] = {
            left: 0,
            top: 0,
            width: itemWidth,
            height: fontSize
          };
        });
        totalWidth += currentColWidth;
        columnWidths.push(currentColWidth);
        columnHeights.push(currentColHeight);
        minSize.width += totalWidth;
      }

      me.width = minSize.width;
      me.height = minSize.height;
    },
    afterFit: noop$1,
    // Shared Methods
    isHorizontal: function isHorizontal() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },
    // Actually draw the legend on the canvas
    draw: function draw() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor;
      var lineDefault = globalDefaults.elements.line;
      var legendHeight = me.height;
      var columnHeights = me.columnHeights;
      var legendWidth = me.width;
      var lineWidths = me.lineWidths;

      if (!opts.display) {
        return;
      }

      var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
      var ctx = me.ctx;
      var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size;
      var cursor; // Canvas setup

      ctx.textAlign = rtlHelper.textAlign('left');
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = fontColor; // for strikethrough effect

      ctx.fillStyle = fontColor; // render in correct colour

      ctx.font = labelFont.string;
      var boxWidth = getBoxWidth(labelOpts, fontSize);
      var hitboxes = me.legendHitBoxes; // current position

      var drawLegendBox = function drawLegendBox(x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0) {
          return;
        } // Set the ctx for the box


        ctx.save();
        var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
        ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
        ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
        ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

        if (ctx.setLineDash) {
          // IE 9 and 10 do not support line dash
          ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
        }

        if (labelOpts && labelOpts.usePointStyle) {
          // Recalculate x and y for drawPoint() because its expecting
          // x and y to be center of figure (instead of top left)
          var radius = boxWidth * Math.SQRT2 / 2;
          var centerX = rtlHelper.xPlus(x, boxWidth / 2);
          var centerY = y + fontSize / 2; // Draw pointStyle as legend symbol

          helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
        } else {
          // Draw box as legend symbol
          ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);

          if (lineWidth !== 0) {
            ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
          }
        }

        ctx.restore();
      };

      var fillText = function fillText(x, y, legendItem, textWidth) {
        var halfFontSize = fontSize / 2;
        var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
        var yMiddle = y + halfFontSize;
        ctx.fillText(legendItem.text, xLeft, yMiddle);

        if (legendItem.hidden) {
          // Strikethrough the text if hidden
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(xLeft, yMiddle);
          ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
          ctx.stroke();
        }
      };

      var alignmentOffset = function alignmentOffset(dimension, blockSize) {
        switch (opts.align) {
          case 'start':
            return labelOpts.padding;

          case 'end':
            return dimension - blockSize;

          default:
            // center
            return (dimension - blockSize + labelOpts.padding) / 2;
        }
      }; // Horizontal


      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        cursor = {
          x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
          y: me.top + labelOpts.padding,
          line: 0
        };
      } else {
        cursor = {
          x: me.left + labelOpts.padding,
          y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
          line: 0
        };
      }

      helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);
      var itemHeight = fontSize + labelOpts.padding;
      helpers$1.each(me.legendItems, function (legendItem, i) {
        var textWidth = ctx.measureText(legendItem.text).width;
        var width = boxWidth + fontSize / 2 + textWidth;
        var x = cursor.x;
        var y = cursor.y;
        rtlHelper.setWidth(me.minSize.width); // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
        // instead of me.right and me.bottom because me.width and me.height
        // may have been changed since me.minSize was calculated

        if (isHorizontal) {
          if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
            y = cursor.y += itemHeight;
            cursor.line++;
            x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
          x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
          cursor.line++;
          y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
        }

        var realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
        hitboxes[i].top = y; // Fill the actual label

        fillText(realX, y, legendItem, textWidth);

        if (isHorizontal) {
          cursor.x += width + labelOpts.padding;
        } else {
          cursor.y += itemHeight;
        }
      });
      helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
    },

    /**
     * @private
     */
    _getLegendItemAt: function _getLegendItemAt(x, y) {
      var me = this;
      var i, hitBox, lh;

      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        lh = me.legendHitBoxes;

        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];

          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
            // Touching an element
            return me.legendItems[i];
          }
        }
      }

      return null;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     */
    handleEvent: function handleEvent(e) {
      var me = this;
      var opts = me.options;
      var type = e.type === 'mouseup' ? 'click' : e.type;
      var hoveredItem;

      if (type === 'mousemove') {
        if (!opts.onHover && !opts.onLeave) {
          return;
        }
      } else if (type === 'click') {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      } // Chart event already has relative position in it


      hoveredItem = me._getLegendItemAt(e.x, e.y);

      if (type === 'click') {
        if (hoveredItem && opts.onClick) {
          // use e.native for backwards compatibility
          opts.onClick.call(me, e["native"], hoveredItem);
        }
      } else {
        if (opts.onLeave && hoveredItem !== me._hoveredItem) {
          if (me._hoveredItem) {
            opts.onLeave.call(me, e["native"], me._hoveredItem);
          }

          me._hoveredItem = hoveredItem;
        }

        if (opts.onHover && hoveredItem) {
          // use e.native for backwards compatibility
          opts.onHover.call(me, e["native"], hoveredItem);
        }
      }
    }
  });

  function createNewLegendAndAttach(chart, legendOpts) {
    var legend = new Legend({
      ctx: chart.ctx,
      options: legendOpts,
      chart: chart
    });
    core_layouts.configure(chart, legend, legendOpts);
    core_layouts.addBox(chart, legend);
    chart.legend = legend;
  }

  var plugin_legend = {
    id: 'legend',

    /**
     * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
     * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Legend,
    beforeInit: function beforeInit(chart) {
      var legendOpts = chart.options.legend;

      if (legendOpts) {
        createNewLegendAndAttach(chart, legendOpts);
      }
    },
    beforeUpdate: function beforeUpdate(chart) {
      var legendOpts = chart.options.legend;
      var legend = chart.legend;

      if (legendOpts) {
        helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

        if (legend) {
          core_layouts.configure(chart, legend, legendOpts);
          legend.options = legendOpts;
        } else {
          createNewLegendAndAttach(chart, legendOpts);
        }
      } else if (legend) {
        core_layouts.removeBox(chart, legend);
        delete chart.legend;
      }
    },
    afterEvent: function afterEvent(chart, e) {
      var legend = chart.legend;

      if (legend) {
        legend.handleEvent(e);
      }
    }
  };
  var noop$2 = helpers$1.noop;

  core_defaults._set('global', {
    title: {
      display: false,
      fontStyle: 'bold',
      fullWidth: true,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2000 // by default greater than legend (1000) to be above

    }
  });
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */


  var Title = core_element.extend({
    initialize: function initialize(config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
    },
    // These methods are ordered by lifecycle. Utilities then follow.
    beforeUpdate: noop$2,
    update: function update(maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    },
    afterUpdate: noop$2,
    //
    beforeSetDimensions: noop$2,
    setDimensions: function setDimensions() {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$2,
    //
    beforeBuildLabels: noop$2,
    buildLabels: noop$2,
    afterBuildLabels: noop$2,
    //
    beforeFit: noop$2,
    fit: function fit() {
      var me = this;
      var opts = me.options;
      var minSize = me.minSize = {};
      var isHorizontal = me.isHorizontal();
      var lineCount, textSize;

      if (!opts.display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
      textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;
      me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
      me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
    },
    afterFit: noop$2,
    // Shared Methods
    isHorizontal: function isHorizontal() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },
    // Actually draw the title block on the canvas
    draw: function draw() {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;

      if (!opts.display) {
        return;
      }

      var fontOpts = helpers$1.options._parseFont(opts);

      var lineHeight = fontOpts.lineHeight;
      var offset = lineHeight / 2 + opts.padding;
      var rotation = 0;
      var top = me.top;
      var left = me.left;
      var bottom = me.bottom;
      var right = me.right;
      var maxWidth, titleX, titleY;
      ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour

      ctx.font = fontOpts.string; // Horizontal

      if (me.isHorizontal()) {
        titleX = left + (right - left) / 2; // midpoint of the width

        titleY = top + offset;
        maxWidth = right - left;
      } else {
        titleX = opts.position === 'left' ? left + offset : right - offset;
        titleY = top + (bottom - top) / 2;
        maxWidth = bottom - top;
        rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
      }

      ctx.save();
      ctx.translate(titleX, titleY);
      ctx.rotate(rotation);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var text = opts.text;

      if (helpers$1.isArray(text)) {
        var y = 0;

        for (var i = 0; i < text.length; ++i) {
          ctx.fillText(text[i], 0, y, maxWidth);
          y += lineHeight;
        }
      } else {
        ctx.fillText(text, 0, 0, maxWidth);
      }

      ctx.restore();
    }
  });

  function createNewTitleBlockAndAttach(chart, titleOpts) {
    var title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart
    });
    core_layouts.configure(chart, title, titleOpts);
    core_layouts.addBox(chart, title);
    chart.titleBlock = title;
  }

  var plugin_title = {
    id: 'title',

    /**
     * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
     * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Title,
    beforeInit: function beforeInit(chart) {
      var titleOpts = chart.options.title;

      if (titleOpts) {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    },
    beforeUpdate: function beforeUpdate(chart) {
      var titleOpts = chart.options.title;
      var titleBlock = chart.titleBlock;

      if (titleOpts) {
        helpers$1.mergeIf(titleOpts, core_defaults.global.title);

        if (titleBlock) {
          core_layouts.configure(chart, titleBlock, titleOpts);
          titleBlock.options = titleOpts;
        } else {
          createNewTitleBlockAndAttach(chart, titleOpts);
        }
      } else if (titleBlock) {
        core_layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
      }
    }
  };
  var plugins = {};
  var filler = plugin_filler;
  var legend = plugin_legend;
  var title = plugin_title;
  plugins.filler = filler;
  plugins.legend = legend;
  plugins.title = title;
  /**
   * @namespace Chart
   */

  core_controller.helpers = helpers$1; // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!

  core_helpers();
  core_controller._adapters = core_adapters;
  core_controller.Animation = core_animation;
  core_controller.animationService = core_animations;
  core_controller.controllers = controllers;
  core_controller.DatasetController = core_datasetController;
  core_controller.defaults = core_defaults;
  core_controller.Element = core_element;
  core_controller.elements = elements;
  core_controller.Interaction = core_interaction;
  core_controller.layouts = core_layouts;
  core_controller.platform = platform;
  core_controller.plugins = core_plugins;
  core_controller.Scale = core_scale;
  core_controller.scaleService = core_scaleService;
  core_controller.Ticks = core_ticks;
  core_controller.Tooltip = core_tooltip; // Register built-in scales

  core_controller.helpers.each(scales, function (scale, type) {
    core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
  }); // Load to register built-in adapters (as side effects)
  // Loading built-in plugins

  for (var k in plugins) {
    if (plugins.hasOwnProperty(k)) {
      core_controller.plugins.register(plugins[k]);
    }
  }

  core_controller.platform.initialize();
  var src = core_controller;

  if (typeof window !== 'undefined') {
    window.Chart = core_controller;
  } // DEPRECATIONS

  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Chart
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */


  core_controller.Chart = core_controller;
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Legend
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.Legend = plugins.legend._element;
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Title
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.Title = plugins.title._element;
  /**
   * Provided for backward compatibility, use Chart.plugins instead
   * @namespace Chart.pluginService
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.pluginService = core_controller.plugins;
  /**
   * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
   * effect, instead simply create/register plugins via plain JavaScript objects.
   * @interface Chart.PluginBase
   * @deprecated since version 2.5.0
   * @todo remove at version 3
   * @private
   */

  core_controller.PluginBase = core_controller.Element.extend({});
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas instead.
   * @namespace Chart.canvasHelpers
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */

  core_controller.canvasHelpers = core_controller.helpers.canvas;
  /**
   * Provided for backward compatibility, use Chart.layouts instead.
   * @namespace Chart.layoutService
   * @deprecated since version 2.7.3
   * @todo remove at version 3
   * @private
   */

  core_controller.layoutService = core_controller.layouts;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.LinearScaleBase
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */

  core_controller.LinearScaleBase = scale_linearbase;
  /**
   * Provided for backward compatibility, instead we should create a new Chart
   * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   */

  core_controller.helpers.each(['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'], function (klass) {
    core_controller[klass] = function (ctx, cfg) {
      return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
        type: klass.charAt(0).toLowerCase() + klass.slice(1)
      }));
    };
  });
  return src;
});

/***/ }),

/***/ "./src/assets/plugins/Leaflet/leaflet.js":
/*!***********************************************!*\
  !*** ./src/assets/plugins/Leaflet/leaflet.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, top-level-this-exports, module */
/*! CommonJS bailout: this is used directly at 24:2-6 */
/*! CommonJS bailout: exports is used directly at 23:70-77 */
/*! CommonJS bailout: exports is used directly at 23:116-123 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* @preserve
 * Leaflet 1.7.1+Detached: 7db94fd1ec23f0967dd8b07a5e2e2b1554b6d8db.7db94fd, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */


!function (t, i) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? i(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function h(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++) {
      for (i in e = arguments[n]) {
        t[i] = e[i];
      }
    }

    return t;
  }

  var s = Object.create || function (t) {
    return i.prototype = t, new i();
  };

  function i() {}

  function _(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }

  var e = 0;

  function m(t) {
    return t._leaflet_id = t._leaflet_id || ++e, t._leaflet_id;
  }

  function n(t, i, e) {
    var n,
        o,
        s = function s() {
      n = !1, o && (r.apply(e, o), o = !1);
    },
        r = function r() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(s, i), n = !0);
    };

    return r;
  }

  function o(t, i, e) {
    var n = i[1],
        o = i[0],
        i = n - o;
    return t === n && e ? t : ((t - o) % i + i) % i + o;
  }

  function a() {
    return !1;
  }

  function r(t, i) {
    i = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * i) / i;
  }

  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }

  function l(t) {
    return u(t).split(/\s+/);
  }

  function c(t, i) {
    for (var e in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? s(t.options) : {}), i) {
      t.options[e] = i[e];
    }

    return t.options;
  }

  function d(t, i, e) {
    var n,
        o = [];

    for (n in t) {
      o.push(encodeURIComponent(e ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
    }

    return (i && -1 !== i.indexOf("?") ? "&" : "?") + o.join("&");
  }

  var p = /\{ *([\w_ -]+) *\}/g;

  function f(t, e) {
    return t.replace(p, function (t, i) {
      i = e[i];
      if (void 0 === i) throw new Error("No value provided for variable " + t);
      return "function" == typeof i && (i = i(e)), i;
    });
  }

  var g = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };

  function v(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }

    return -1;
  }

  var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  function x(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }

  var w = 0;

  function P(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - w));
    return w = i + e, window.setTimeout(t, e);
  }

  var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P,
      T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  };

  function M(t, i, e) {
    if (!e || b !== P) return b.call(window, _(t, i));
    t.call(i);
  }

  function z(t) {
    t && T.call(window, t);
  }

  var C = {
    extend: h,
    create: s,
    bind: _,
    lastId: e,
    stamp: m,
    throttle: n,
    wrapNum: o,
    falseFn: a,
    formatNum: r,
    trim: u,
    splitWords: l,
    setOptions: c,
    getParamString: d,
    template: f,
    isArray: g,
    indexOf: v,
    emptyImageUrl: y,
    requestFn: b,
    cancelFn: T,
    requestAnimFrame: M,
    cancelAnimFrame: z
  };

  function S() {}

  S.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }

    var e,
        n = i.__super__ = this.prototype,
        o = s(n);

    for (e in (o.constructor = i).prototype = o, this) {
      Object.prototype.hasOwnProperty.call(this, e) && "prototype" !== e && "__super__" !== e && (i[e] = this[e]);
    }

    return t.statics && (h(i, t.statics), delete t.statics), t.includes && (function (t) {
      if ("undefined" != typeof L && L && L.Mixin) {
        t = g(t) ? t : [t];

        for (var i = 0; i < t.length; i++) {
          t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
    }(t.includes), h.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = h(s(o.options), t.options)), h(o, t), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;

        for (var t = 0, i = o._initHooks.length; t < i; t++) {
          o._initHooks[t].call(this);
        }
      }
    }, i;
  }, S.include = function (t) {
    return h(this.prototype, t), this;
  }, S.mergeOptions = function (t) {
    return h(this.prototype.options, t), this;
  }, S.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };
  var Z = {
    on: function on(t, i, e) {
      if ("object" == _typeof(t)) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = l(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }
      return this;
    },
    off: function off(t, i, e) {
      if (t) {
        if ("object" == _typeof(t)) for (var n in t) {
          this._off(n, t[n], i);
        } else for (var o = 0, s = (t = l(t)).length; o < s; o++) {
          this._off(t[o], i, e);
        }
      } else delete this._events;

      return this;
    },
    _on: function _on(t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || (n = [], this._events[t] = n), e === this && (e = void 0);

      for (var t = {
        fn: i,
        ctx: e
      }, o = n, s = 0, r = o.length; s < r; s++) {
        if (o[s].fn === i && o[s].ctx === e) return;
      }

      o.push(t);
    },
    _off: function _off(t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t])) if (i) {
        if (e === this && (e = void 0), n) for (o = 0, s = n.length; o < s; o++) {
          var r = n[o];
          if (r.ctx === e && r.fn === i) return r.fn = a, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
        }
      } else {
        for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = a;
        }

        delete this._events[t];
      }
    },
    fire: function fire(t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: i && i.sourceTarget || this
      });

      if (this._events) {
        var o = this._events[t];

        if (o) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }

          this._firingCount--;
        }
      }

      return e && this._propagateEvent(n), this;
    },
    listens: function listens(t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }
      return !1;
    },
    once: function once(t, i, e) {
      if ("object" == _typeof(t)) {
        for (var n in t) {
          this.once(n, t[n], i);
        }

        return this;
      }

      var o = _(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);

      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[m(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[m(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var i in this._eventParents) {
        this._eventParents[i].fire(t.type, h({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    }
  };
  Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
  var E = S.extend(Z);

  function k(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }

  var B = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };

  function A(t, i, e) {
    return t instanceof k ? t : g(t) ? new k(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, i, e);
  }

  function I(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function O(t, i) {
    return !t || t instanceof I ? t : new I(t, i);
  }

  function R(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function N(t, i) {
    return t instanceof R ? t : new R(t, i);
  }

  function D(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }

  function j(t, i, e) {
    return t instanceof D ? t : g(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new D(t[0], t[1], t[2]) : 2 === t.length ? new D(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new D(t, i, e);
  }

  k.prototype = {
    clone: function clone() {
      return new k(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(A(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(A(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new k(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new k(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = B(this.x), this.y = B(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var i = (t = A(t)).x - this.x,
          t = t.y - this.y;
      return Math.sqrt(i * i + t * t);
    },
    equals: function equals(t) {
      return (t = A(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = A(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + r(this.x) + ", " + r(this.y) + ")";
    }
  }, I.prototype = {
    extend: function extend(t) {
      return t = A(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new k(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new k(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var i, e;
      return (t = ("number" == typeof t[0] || t instanceof k ? A : O)(t)) instanceof I ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = O(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          t = o.x >= i.x && n.x <= e.x,
          e = o.y >= i.y && n.y <= e.y;
      return t && e;
    },
    overlaps: function overlaps(t) {
      t = O(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          t = o.x > i.x && n.x < e.x,
          e = o.y > i.y && n.y < e.y;
      return t && e;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, R.prototype = {
    extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      if (t instanceof D) e = i = t;else {
        if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
        if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }
      return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new D(i.lat, i.lng), this._northEast = new D(e.lat, e.lng)), this;
    },
    pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          t = Math.abs(i.lng - e.lng) * t;
      return new R(new D(i.lat - n, i.lng - t), new D(e.lat + n, e.lng + t));
    },
    getCenter: function getCenter() {
      return new D((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new D(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new D(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = ("number" == typeof t[0] || t instanceof D || "lat" in t ? j : N)(t);
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      return t instanceof R ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = N(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          t = o.lat >= i.lat && n.lat <= e.lat,
          e = o.lng >= i.lng && n.lng <= e.lng;
      return t && e;
    },
    overlaps: function overlaps(t) {
      t = N(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          t = o.lat > i.lat && n.lat < e.lat,
          e = o.lng > i.lng && n.lng < e.lng;
      return t && e;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, i) {
      return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var W = {
    latLngToPoint: function latLngToPoint(t, i) {
      t = this.projection.project(t), i = this.scale(i);
      return this.transformation._transform(t, i);
    },
    pointToLatLng: function pointToLatLng(t, i) {
      i = this.scale(i), i = this.transformation.untransform(t, i);
      return this.projection.unproject(i);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var i = this.projection.bounds,
          t = this.scale(t);
      return new I(this.transformation.transform(i.min, t), this.transformation.transform(i.max, t));
    },
    infinite: !(D.prototype = {
      equals: function equals(t, i) {
        return !!t && (t = j(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
      },
      toString: function toString(t) {
        return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")";
      },
      distanceTo: function distanceTo(t) {
        return H.distance(this, j(t));
      },
      wrap: function wrap() {
        return H.wrapLatLng(this);
      },
      toBounds: function toBounds(t) {
        var i = 180 * t / 40075017,
            t = i / Math.cos(Math.PI / 180 * this.lat);
        return N([this.lat - i, this.lng - t], [this.lat + i, this.lng + t]);
      },
      clone: function clone() {
        return new D(this.lat, this.lng, this.alt);
      }
    }),
    wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
      return new D(this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          i = i.lng - e.lng;
      if (0 == n && 0 == i) return t;
      e = t.getSouthWest(), t = t.getNorthEast();
      return new R(new D(e.lat - n, e.lng - i), new D(t.lat - n, t.lng - i));
    }
  },
      H = h({}, W, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin((i.lat - t.lat) * e / 2),
          e = Math.sin((i.lng - t.lng) * e / 2),
          e = s * s + Math.cos(n) * Math.cos(o) * e * e,
          e = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1 - e));
      return this.R * e;
    }
  }),
      F = 6378137,
      U = {
    R: F,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          e = Math.max(Math.min(e, t.lat), -e),
          e = Math.sin(e * i);
      return new k(this.R * t.lng * i, this.R * Math.log((1 + e) / (1 - e)) / 2);
    },
    unproject: function unproject(t) {
      var i = 180 / Math.PI;
      return new D((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    },
    bounds: new I([-(gt = F * Math.PI), -gt], [gt, gt])
  };

  function V(t, i, e, n) {
    if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
    this._a = t, this._b = i, this._c = e, this._d = n;
  }

  function q(t, i, e, n) {
    return new V(t, i, e, n);
  }

  V.prototype = {
    transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function _transform(t, i) {
      return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, i) {
      return i = i || 1, new k((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
    }
  };
  var G = h({}, H, {
    code: "EPSG:3857",
    projection: U,
    transformation: q(vt = .5 / (Math.PI * U.R), .5, -vt, .5)
  }),
      K = h({}, G, {
    code: "EPSG:900913"
  });

  function Y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }

  function X(t, i) {
    for (var e, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++) {
        r += (e ? "L" : "M") + (s = o[e]).x + " " + s.y;
      }

      r += i ? Tt ? "z" : "x" : "";
    }

    return r || "M0 0";
  }

  var J = document.documentElement.style,
      $ = ("ActiveXObject" in window),
      Q = $ && !document.addEventListener,
      tt = "msLaunchUri" in navigator && !("documentMode" in document),
      it = zt("webkit"),
      et = zt("android"),
      nt = zt("android 2") || zt("android 3"),
      ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      st = et && zt("Google") && ot < 537 && !("AudioNode" in window),
      rt = !!window.opera,
      at = !tt && zt("chrome"),
      ht = zt("gecko") && !it && !rt && !$,
      ut = !at && zt("safari"),
      lt = zt("phantom"),
      ct = ("OTransition" in J),
      _t = 0 === navigator.platform.indexOf("Win"),
      dt = $ && "transition" in J,
      pt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !nt,
      mt = ("MozPerspective" in J),
      ft = !window.L_DISABLE_3D && (dt || pt || mt) && !ct && !lt,
      F = "undefined" != typeof orientation || zt("mobile"),
      gt = F && it,
      vt = F && pt,
      ot = !window.PointerEvent && window.MSPointerEvent,
      yt = !(!window.PointerEvent && !ot),
      xt = !window.L_NO_TOUCH && (yt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      wt = F && rt,
      J = F && ht,
      Pt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
      Lt = function () {
    var t = !1;

    try {
      var i = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("testPassiveEventSupport", a, i), window.removeEventListener("testPassiveEventSupport", a, i);
    } catch (t) {}

    return t;
  }(),
      bt = !!document.createElement("canvas").getContext,
      Tt = !(!document.createElementNS || !Y("svg").createSVGRect),
      Mt = !Tt && function () {
    try {
      var t = document.createElement("div");
      t.innerHTML = '<v:shape adj="1"/>';
      t = t.firstChild;
      return t.style.behavior = "url(#default#VML)", t && "object" == _typeof(t.adj);
    } catch (t) {
      return !1;
    }
  }();

  function zt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }

  var rt = {
    ie: $,
    ielt9: Q,
    edge: tt,
    webkit: it,
    android: et,
    android23: nt,
    androidStock: st,
    opera: rt,
    chrome: at,
    gecko: ht,
    safari: ut,
    phantom: lt,
    opera12: ct,
    win: _t,
    ie3d: dt,
    webkit3d: pt,
    gecko3d: mt,
    any3d: ft,
    mobile: F,
    mobileWebkit: gt,
    mobileWebkit3d: vt,
    msPointer: ot,
    pointer: yt,
    touch: xt,
    mobileOpera: wt,
    mobileGecko: J,
    retina: Pt,
    passiveEvents: Lt,
    canvas: bt,
    svg: Tt,
    vml: Mt
  },
      Ct = ot ? "MSPointerDown" : "pointerdown",
      St = ot ? "MSPointerMove" : "pointermove",
      Zt = ot ? "MSPointerUp" : "pointerup",
      Et = ot ? "MSPointerCancel" : "pointercancel",
      kt = {},
      Bt = !1;

  function At(t, i, e, n) {
    function o(t) {
      Nt(t, s);
    }

    var s, r, a, h, u, l;

    function c(t) {
      t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Nt(t, r);
    }

    return "touchstart" === i ? (a = t, h = e, u = n, l = _(function (t) {
      t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Zi(t), Nt(t, h);
    }), a["_leaflet_touchstart" + u] = l, a.addEventListener(Ct, l, !1), Bt || (document.addEventListener(Ct, It, !0), document.addEventListener(St, Ot, !0), document.addEventListener(Zt, Rt, !0), document.addEventListener(Et, Rt, !0), Bt = !0)) : "touchmove" === i ? (r = e, (l = t)["_leaflet_touchmove" + n] = c, l.addEventListener(St, c, !1)) : "touchend" === i && (s = e, (t = t)["_leaflet_touchend" + n] = o, t.addEventListener(Zt, o, !1), t.addEventListener(Et, o, !1)), this;
  }

  function It(t) {
    kt[t.pointerId] = t;
  }

  function Ot(t) {
    kt[t.pointerId] && (kt[t.pointerId] = t);
  }

  function Rt(t) {
    delete kt[t.pointerId];
  }

  function Nt(t, i) {
    for (var e in t.touches = [], kt) {
      t.touches.push(kt[e]);
    }

    t.changedTouches = [t], i(t);
  }

  var Dt = ot ? "MSPointerDown" : yt ? "pointerdown" : "touchstart",
      jt = ot ? "MSPointerUp" : yt ? "pointerup" : "touchend",
      Wt = "_leaflet_";
  var Ht,
      Ft,
      Ut,
      Vt,
      qt,
      Gt,
      Kt = li(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
      Yt = li(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      Xt = "webkitTransition" === Yt || "OTransition" === Yt ? Yt + "End" : "transitionend";

  function Jt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }

  function $t(t, i) {
    var e = t.style[i] || t.currentStyle && t.currentStyle[i];
    return e && "auto" !== e || !document.defaultView || (e = (t = document.defaultView.getComputedStyle(t, null)) ? t[i] : null), "auto" === e ? null : e;
  }

  function Qt(t, i, e) {
    t = document.createElement(t);
    return t.className = i || "", e && e.appendChild(t), t;
  }

  function ti(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }

  function ii(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }

  function ei(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }

  function ni(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }

  function oi(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    t = hi(t);
    return 0 < t.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(t);
  }

  function si(t, i) {
    var e;
    if (void 0 !== t.classList) for (var n = l(i), o = 0, s = n.length; o < s; o++) {
      t.classList.add(n[o]);
    } else oi(t, i) || ai(t, ((e = hi(t)) ? e + " " : "") + i);
  }

  function ri(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : ai(t, u((" " + hi(t) + " ").replace(" " + i + " ", " ")));
  }

  function ai(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }

  function hi(t) {
    return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }

  function ui(t, i) {
    "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function (t, i) {
      var e = !1,
          n = "DXImageTransform.Microsoft.Alpha";

      try {
        e = t.filters.item(n);
      } catch (t) {
        if (1 === i) return;
      }

      i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
    }(t, i);
  }

  function li(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }

    return !1;
  }

  function ci(t, i, e) {
    i = i || new k(0, 0);
    t.style[Kt] = (dt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }

  function _i(t, i) {
    t._leaflet_pos = i, ft ? ci(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }

  function di(t) {
    return t._leaflet_pos || new k(0, 0);
  }

  function pi() {
    xi(window, "dragstart", Zi);
  }

  function mi() {
    Pi(window, "dragstart", Zi);
  }

  function fi(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }

    t.style && (gi(), Gt = (qt = t).style.outline, t.style.outline = "none", xi(window, "keydown", gi));
  }

  function gi() {
    qt && (qt.style.outline = Gt, Gt = qt = void 0, Pi(window, "keydown", gi));
  }

  function vi(t) {
    for (; t = t.parentNode, !(t.offsetWidth && t.offsetHeight || t === document.body);) {
      ;
    }

    return t;
  }

  function yi(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i
    };
  }

  Vt = "onselectstart" in document ? (Ut = function Ut() {
    xi(window, "selectstart", Zi);
  }, function () {
    Pi(window, "selectstart", Zi);
  }) : (Ft = li(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), Ut = function Ut() {
    var t;
    Ft && (t = document.documentElement.style, Ht = t[Ft], t[Ft] = "none");
  }, function () {
    Ft && (document.documentElement.style[Ft] = Ht, Ht = void 0);
  });
  lt = {
    TRANSFORM: Kt,
    TRANSITION: Yt,
    TRANSITION_END: Xt,
    get: Jt,
    getStyle: $t,
    create: Qt,
    remove: ti,
    empty: ii,
    toFront: ei,
    toBack: ni,
    hasClass: oi,
    addClass: si,
    removeClass: ri,
    setClass: ai,
    getClass: hi,
    setOpacity: ui,
    testProp: li,
    setTransform: ci,
    setPosition: _i,
    getPosition: di,
    disableTextSelection: Ut,
    enableTextSelection: Vt,
    disableImageDrag: pi,
    enableImageDrag: mi,
    preventOutline: fi,
    restoreOutline: gi,
    getSizedParentNode: vi,
    getScale: yi
  };

  function xi(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      Ti(t, o, i[o], e);
    } else for (var s = 0, r = (i = l(i)).length; s < r; s++) {
      Ti(t, i[s], e, n);
    }
    return this;
  }

  var wi = "_leaflet_events";

  function Pi(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      Mi(t, o, i[o], e);
    } else if (i) for (var s = 0, r = (i = l(i)).length; s < r; s++) {
      Mi(t, i[s], e, n);
    } else {
      for (var a in t[wi]) {
        Mi(t, a, t[wi][a]);
      }

      delete t[wi];
    }
    return this;
  }

  function Li() {
    return yt && !tt && !ut;
  }

  var bi = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };

  function Ti(i, t, e, n) {
    var o = t + m(e) + (n ? "_" + m(n) : "");
    if (i[wi] && i[wi][o]) return this;

    var s,
        r,
        a,
        h,
        u,
        l,
        c = function c(t) {
      return e.call(n || i, t || window.event);
    },
        _ = c;

    function d(t) {
      if (yt) {
        if (!t.isPrimary) return;
        if ("mouse" === t.pointerType) return;
      } else if (1 < t.touches.length) return;

      var i = Date.now(),
          e = i - (h || i);
      u = t.touches ? t.touches[0] : t, l = 0 < e && e <= 250, h = i;
    }

    function p(t) {
      if (l && !u.cancelBubble) {
        if (yt) {
          if ("mouse" === t.pointerType) return;
          var i,
              e,
              n = {};

          for (e in u) {
            i = u[e], n[e] = i && i.bind ? i.bind(u) : i;
          }

          u = n;
        }

        u.type = "dblclick", u.button = 0, r(u), h = null;
      }
    }

    yt && 0 === t.indexOf("touch") ? At(i, t, c, o) : xt && "dblclick" === t && !Li() ? (r = c, l = !1, (s = i)[Wt + Dt + (a = o)] = d, s[Wt + jt + a] = p, s[Wt + "dblclick" + a] = r, s.addEventListener(Dt, d, !!Lt && {
      passive: !1
    }), s.addEventListener(jt, p, !!Lt && {
      passive: !1
    }), s.addEventListener("dblclick", r, !1)) : "addEventListener" in i ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? i.addEventListener(bi[t] || t, c, !!Lt && {
      passive: !1
    }) : "mouseenter" === t || "mouseleave" === t ? (c = function c(t) {
      t = t || window.event, Ni(i, t) && _(t);
    }, i.addEventListener(bi[t], c, !1)) : i.addEventListener(t, _, !1) : "attachEvent" in i && i.attachEvent("on" + t, c), i[wi] = i[wi] || {}, i[wi][o] = c;
  }

  function Mi(t, i, e, n) {
    var o,
        s,
        r,
        a = i + m(e) + (n ? "_" + m(n) : ""),
        e = t[wi] && t[wi][a];
    if (!e) return this;
    yt && 0 === i.indexOf("touch") ? (r = (o = t)["_leaflet_" + (s = i) + (r = a)], "touchstart" === s ? o.removeEventListener(Ct, r, !1) : "touchmove" === s ? o.removeEventListener(St, r, !1) : "touchend" === s && (o.removeEventListener(Zt, r, !1), o.removeEventListener(Et, r, !1))) : xt && "dblclick" === i && !Li() ? (o = (n = t)[Wt + Dt + (s = a)], r = n[Wt + jt + s], s = n[Wt + "dblclick" + s], n.removeEventListener(Dt, o, !!Lt && {
      passive: !1
    }), n.removeEventListener(jt, r, !!Lt && {
      passive: !1
    }), n.removeEventListener("dblclick", s, !1)) : "removeEventListener" in t ? t.removeEventListener(bi[i] || i, e, !1) : "detachEvent" in t && t.detachEvent("on" + i, e), t[wi][a] = null;
  }

  function zi(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Ri(t), this;
  }

  function Ci(t) {
    return Ti(t, "wheel", zi), this;
  }

  function Si(t) {
    return xi(t, "mousedown touchstart dblclick", zi), Ti(t, "click", Oi), this;
  }

  function Zi(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }

  function Ei(t) {
    return Zi(t), zi(t), this;
  }

  function ki(t, i) {
    if (!i) return new k(t.clientX, t.clientY);
    var e = yi(i),
        n = e.boundingClientRect;
    return new k((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop);
  }

  var Bi = _t && at ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;

  function Ai(t) {
    return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Bi : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }

  var Ii = {};

  function Oi(t) {
    Ii[t.type] = !0;
  }

  function Ri(t) {
    var i = Ii[t.type];
    return Ii[t.type] = !1, i;
  }

  function Ni(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;

    try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }

    return e !== t;
  }

  var ct = {
    on: xi,
    off: Pi,
    stopPropagation: zi,
    disableScrollPropagation: Ci,
    disableClickPropagation: Si,
    preventDefault: Zi,
    stop: Ei,
    getMousePosition: ki,
    getWheelDelta: Ai,
    fakeStop: Oi,
    skipped: Ri,
    isExternalTarget: Ni,
    addListener: xi,
    removeListener: Pi
  },
      Di = E.extend({
    run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = di(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = M(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
      i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, i) {
      t = this._startPos.add(this._offset.multiplyBy(t));
      i && t._round(), _i(this._el, t), this.fire("step");
    },
    _complete: function _complete() {
      z(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }),
      ji = E.extend({
    options: {
      crs: G,
      center: void 0,
      zoom: void 0,
      minZoom: void 0,
      maxZoom: void 0,
      layers: [],
      maxBounds: void 0,
      renderer: void 0,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, i) {
      i = c(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = _(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(j(i.center), i.zoom, {
        reset: !0
      }), this.callInitHooks(), this._zoomAnimated = Yt && ft && !wt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), xi(this._proxy, Xt, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, i, e) {
      if ((i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(j(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = h({
        animate: e.animate
      }, e.zoom), e.pan = h({
        animate: e.animate,
        duration: e.duration
      }, e.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan))) return clearTimeout(this._sizeTimer), this;
      return this._resetView(t, i), this;
    },
    setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: i
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, i) {
      return t = t || (ft ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    },
    zoomOut: function zoomOut(t, i) {
      return t = t || (ft ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    },
    setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          n = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          n = this.containerPointToLatLng(o.add(n));
      return this.setView(n, i, {
        zoom: e
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : N(t);
      var e = A(i.paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
      if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
        center: t.getCenter(),
        zoom: o
      };
      n = n.subtract(e).divideBy(2), e = this.project(t.getSouthWest(), o), t = this.project(t.getNorthEast(), o);
      return {
        center: this.unproject(e.add(t).divideBy(2).add(n), o),
        zoom: o
      };
    },
    fitBounds: function fitBounds(t, i) {
      if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
      t = this._getBoundsCenterZoom(t, i);
      return this.setView(t.center, t.zoom, i);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, {
        pan: i
      });
    },
    panBy: function panBy(t, i) {
      return i = i || {}, (t = A(t).round()).x || t.y ? (!0 === i.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Di(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate ? (si(this._mapPane, "leaflet-pan-anim"), e = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      var e;
    },
    flyTo: function flyTo(n, o, t) {
      if (!1 === (t = t || {}).animate || !ft) return this.setView(n, o, t);

      this._stop();

      var s = this.project(this.getCenter()),
          r = this.project(n),
          i = this.getSize(),
          a = this._zoom;
      n = j(n), o = void 0 === o ? a : o;
      var h = Math.max(i.x, i.y),
          e = h * this.getZoomScale(a, o),
          u = r.distanceTo(s) || 1,
          l = 1.42,
          c = l * l;

      function _(t) {
        t = (e * e - h * h + (t ? -1 : 1) * c * c * u * u) / (2 * (t ? e : h) * c * u), t = Math.sqrt(t * t + 1) - t;
        return t < 1e-9 ? -18 : Math.log(t);
      }

      function d(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function p(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      var m = _(0);

      function f(t) {
        return h * (p(m) * (d(t = m + l * t) / p(t)) - d(m)) / c;
      }

      var g = Date.now(),
          v = (_(1) - m) / l,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
      return this._moveStart(!0, t.noMoveStart), function t() {
        var i = (Date.now() - g) / y,
            e = (e = i, (1 - Math.pow(1 - e, 1.5)) * v);
        i <= 1 ? (this._flyToFrame = M(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e) / u)), a), this.getScaleZoom(h / (h * (p(m) / p(m + l * e))), a), {
          flyTo: !0
        })) : this._move(n, o)._moveEnd(!0);
      }.call(this), this;
    },
    flyToBounds: function flyToBounds(t, i) {
      t = this._getBoundsCenterZoom(t, i);
      return this.flyTo(t.center, t.zoom, i);
    },
    setMaxBounds: function setMaxBounds(t) {
      return (t = N(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      var i = this.options.minZoom;
      return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      var i = this.options.maxZoom;
      return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;

      var e = this.getCenter(),
          t = this._limitCenter(e, this._zoom, N(t));

      return e.equals(t) || this.panTo(t, i), this._enforcingBounds = !1, this;
    },
    panInside: function panInside(t, i) {
      var e = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getCenter(),
          s = this.project(o),
          r = this.project(t),
          a = this.getPixelBounds(),
          h = a.getSize().divideBy(2),
          o = O([a.min.add(e), a.max.subtract(n)]);
      return o.contains(r) || (this._enforcingBounds = !0, t = s.subtract(r), a = A(r.x + t.x, r.y + t.y), (r.x < o.min.x || r.x > o.max.x) && (a.x = s.x - t.x, 0 < t.x ? a.x += h.x - e.x : a.x -= h.x - n.x), (r.y < o.min.y || r.y > o.max.y) && (a.y = s.y - t.y, 0 < t.y ? a.y += h.y - e.y : a.y -= h.y - n.y), this.panTo(this.unproject(a), i), this._enforcingBounds = !1), this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = h({
        animate: !1,
        pan: !0
      }, !0 === t ? {
        animate: !0
      } : t);
      var i = this.getSize();
      this._sizeChanged = !0, this._lastCenter = null;
      var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          o = n.subtract(o);
      return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(_(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: i,
        newSize: e
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = h({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;

      var i = _(this._handleGeolocationResponse, this),
          e = _(this._handleGeolocationError, this);

      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var i = t.code,
          t = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: i,
        message: "Geolocation error: " + t + "."
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var i,
          e = new D(t.coords.latitude, t.coords.longitude),
          n = e.toBounds(2 * t.coords.accuracy),
          o = this._locateOptions;
      o.setView && (i = this.getBoundsZoom(n), this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
      var s,
          r = {
        latlng: e,
        bounds: n,
        timestamp: t.timestamp
      };

      for (s in t.coords) {
        "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
      }

      this.fire("locationfound", r);
    },
    addHandler: function addHandler(t, i) {
      if (!i) return this;
      i = this[t] = new i(this);
      return this._handlers.push(i), this.options[t] && i.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }

      for (var t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ti(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) {
        this._layers[t].remove();
      }

      for (t in this._panes) {
        ti(this._panes[t]);
      }

      return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    },
    createPane: function createPane(t, i) {
      i = Qt("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
      return t && (this._panes[t] = i), i;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds();
      return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    },
    getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = N(t), e = A(e || [0, 0]);
      var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          t = this.getSize().subtract(e),
          e = O(this.project(a, n), this.project(r, n)).getSize(),
          a = ft ? this.options.zoomSnap : 1,
          r = t.x / e.x,
          e = t.y / e.y,
          e = i ? Math.max(r, e) : Math.min(r, e),
          n = this.getScaleZoom(e, n);
      return a && (n = Math.round(n / (a / 100)) * (a / 100), n = i ? Math.ceil(n / a) * a : Math.floor(n / a) * a), Math.max(o, Math.min(s, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, i) {
      i = this._getTopLeftPoint(t, i);
      return new I(i, i.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;
      return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    },
    getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs;
      i = void 0 === i ? this._zoom : i;
      i = e.zoom(t * e.scale(i));
      return isNaN(i) ? 1 / 0 : i;
    },
    project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(j(t), i);
    },
    unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(A(t), i);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      t = A(t).add(this.getPixelOrigin());
      return this.unproject(t);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(j(t))._round()._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(j(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(N(t));
    },
    distance: function distance(t, i) {
      return this.options.crs.distance(j(t), j(i));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return A(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return A(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      t = this.containerPointToLayerPoint(A(t));
      return this.layerPointToLatLng(t);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return ki(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      t = this._container = Jt(t);
      if (!t) throw new Error("Map container not found.");
      if (t._leaflet_id) throw new Error("Map container is already initialized.");
      xi(t, "scroll", this._onScroll, this), this._containerId = m(t);
    },
    _initLayout: function _initLayout() {
      var t = this._container;
      this._fadeAnimated = this.options.fadeAnimation && ft, si(t, "leaflet-container" + (xt ? " leaflet-touch" : "") + (Pt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (ut ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
      var i = $t(t, "position");
      "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), _i(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (si(t.markerPane, "leaflet-zoom-hide"), si(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, i) {
      _i(this._mapPane, new k(0, 0));

      var e = !this._loaded;
      this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
      var n = this._zoom !== i;
      this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    },
    _moveStart: function _moveStart(t, i) {
      return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
    },
    _move: function _move(t, i, e) {
      void 0 === i && (i = this._zoom);
      var n = this._zoom !== i;
      return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e);
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      _i(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(t) {
      this._targets = {};
      var i = t ? Pi : xi;
      i((this._targets[m(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ft && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    },
    _onResize: function _onResize() {
      z(this._resizeRequest), this._resizeRequest = M(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();

      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, i) {
      for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
        if ((e = this._targets[m(s)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
          r = !0;
          break;
        }

        if (e && e.listens(i, !0)) {
          if (o && !Ni(s, t)) break;
          if (n.push(e), o) break;
        }

        if (s === this._container) break;
        s = s.parentNode;
      }

      return n.length || r || o || !Ni(s, t) || (n = [this]), n;
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      var i;
      this._loaded && !Ri(t) && ("mousedown" === (i = t.type) && fi(t.target || t.srcElement), this._fireDOMEvent(t, i));
    },
    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
    _fireDOMEvent: function _fireDOMEvent(t, i, e) {
      if ("click" === t.type && ((o = h({}, t)).type = "preclick", this._fireDOMEvent(o, o.type, e)), !t._stopped && (e = (e || []).concat(this._findEventTargets(t, i))).length) {
        var n = e[0];
        "contextmenu" === i && n.listens(i, !0) && Zi(t);
        var o,
            s = {
          originalEvent: t
        };
        "keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (o = n.getLatLng && (!n._radius || n._radius <= 10), s.containerPoint = o ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = o ? n.getLatLng() : this.layerPointToLatLng(s.layerPoint));

        for (var r = 0; r < e.length; r++) {
          if (e[r].fire(i, s, !0), s.originalEvent._stopped || !1 === e[r].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, {
        target: this
      }) : this.on("load", t, i), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return di(this._mapPane) || new k(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();

      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);

      return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      e = this._getNewPixelOrigin(e, i);
      return this.project(t, i)._subtract(e);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      e = this._getNewPixelOrigin(e, i);
      return O([this.project(t.getSouthWest(), i)._subtract(e), this.project(t.getNorthWest(), i)._subtract(e), this.project(t.getSouthEast(), i)._subtract(e), this.project(t.getNorthEast(), i)._subtract(e)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;

      var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          o = new I(n.subtract(o), n.add(o)),
          e = this._getBoundsOffset(o, e, i);

      return e.round().equals([0, 0]) ? t : this.unproject(n.add(e), i);
    },
    _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;
      var e = this.getPixelBounds(),
          e = new I(e.min.add(t), e.max.add(t));
      return t.add(this._getBoundsOffset(e, i));
    },
    _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      i = O(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)), e = i.min.subtract(t.min), t = i.max.subtract(t.max);
      return new k(this._rebound(e.x, -t.x), this._rebound(e.y, -t.y));
    },
    _rebound: function _rebound(t, i) {
      return 0 < t + i ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    },
    _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = ft ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      ri(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      t = this._getCenterOffset(t)._trunc();
      return !(!0 !== (i && i.animate) && !this.getSize().contains(t)) && (this.panBy(t, i), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = Qt("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = Kt,
            e = this._proxy.style[i];
        ci(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      ti(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
    },
    _animMoveEnd: function _animMoveEnd() {
      var t = this.getCenter(),
          i = this.getZoom();
      ci(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;
      if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;

      var n = this.getZoomScale(i),
          n = this._getCenterOffset(t)._divideBy(1 - 1 / n);

      return !(!0 !== e.animate && !this.getSize().contains(n)) && (M(function () {
        this._moveStart(!0, !1)._animateZoom(t, i, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, i, e, n) {
      this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, si(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: i,
        noUpdate: n
      }), setTimeout(_(this._onZoomTransitionEnd, this), 250));
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (this._mapPane && ri(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), M(function () {
        this._moveEnd(!0);
      }, this));
    }
  });

  var Wi = S.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var i = this._map;
      return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          t = t._controlCorners[e];
      return si(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? t.insertBefore(i, t.firstChild) : t.appendChild(i), this._map.on("unload", this.remove, this), this;
    },
    remove: function remove() {
      return this._map && (ti(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
    }
  }),
      pt = function pt(t) {
    return new Wi(t);
  };

  ji.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      var n = this._controlCorners = {},
          o = "leaflet-",
          s = this._controlContainer = Qt("div", o + "control-container", this._container);

      function t(t, i) {
        var e = o + t + " " + o + i;
        n[t + i] = Qt("div", e, s);
      }

      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        ti(this._controlCorners[t]);
      }

      ti(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    }
  });
  var Hi = Wi.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      }
    },
    initialize: function initialize(t, i, e) {
      for (var n in c(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) {
        this._addLayer(t[n], n);
      }

      for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function addTo(t) {
      return Wi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);

      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);
      t = this._getLayer(m(t));
      return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      si(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._section.clientHeight ? (si(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : ri(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return ri(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = Qt("div", t),
          e = this.options.collapsed;
      i.setAttribute("aria-haspopup", !0), Si(i), Ci(i);
      var n = this._section = Qt("section", t + "-list");
      e && (this._map.on("click", this.collapse, this), et || xi(i, {
        mouseenter: this.expand,
        mouseleave: this.collapse
      }, this));
      var o = this._layersLink = Qt("a", t + "-toggle", i);
      o.href = "#", o.title = "Layers", xt ? (xi(o, "click", Ei), xi(o, "click", this.expand, this)) : xi(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = Qt("div", t + "-base", n), this._separator = Qt("div", t + "-separator", n), this._overlaysList = Qt("div", t + "-overlays", n), i.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && m(this._layers[i].layer) === t) return this._layers[i];
      }
    },
    _addLayer: function _addLayer(t, i, e) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: i,
        overlay: e
      }), this.options.sortLayers && this._layers.sort(_(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) return this;
      ii(this._baseLayersList), ii(this._overlaysList), this._layerControlInputs = [];

      for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++) {
        e = this._layers[o], this._addItem(e), i = i || e.overlay, t = t || !e.overlay, n += e.overlay ? 0 : 1;
      }

      return this.options.hideSingleBase && (t = t && 1 < n, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();

      var i = this._getLayer(m(t.target)),
          t = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

      t && this._map.fire(t, i);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>", i = document.createElement("div");
      return i.innerHTML = t, i.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer);

      t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + m(this), n), this._layerControlInputs.push(i), i.layerId = m(t.layer), xi(i, "click", this._onInputClick, this);
      var o = document.createElement("span");
      o.innerHTML = " " + t.name;
      n = document.createElement("div");
      return e.appendChild(n), n.appendChild(i), n.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    },
    _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
      this._handlingClick = !0;

      for (var s = e.length - 1; 0 <= s; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }

      for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }

      for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }

      this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; 0 <= o; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    },
    _expand: function _expand() {
      return this.expand();
    },
    _collapse: function _collapse() {
      return this.collapse();
    }
  }),
      Fi = Wi.extend({
    options: {
      position: "topleft",
      zoomInText: "+",
      zoomInTitle: "Zoom in",
      zoomOutText: "&#x2212;",
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = Qt("div", i + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, i, e, n, o) {
      n = Qt("a", e, n);
      return n.innerHTML = t, n.href = "#", n.title = i, n.setAttribute("role", "button"), n.setAttribute("aria-label", i), Si(n), xi(n, "click", Ei), xi(n, "click", o, this), xi(n, "click", this._refocusOnMap, this), n;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";
      ri(this._zoomInButton, i), ri(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (si(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (si(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"));
    }
  });
  ji.mergeOptions({
    zoomControl: !0
  }), ji.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new Fi(), this.addControl(this.zoomControl));
  });
  var Ui = Wi.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-scale",
          e = Qt("div", i),
          n = this.options;
      return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = Qt("div", i, e)), t.imperial && (this._iScale = Qt("div", i, e));
    },
    _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          i = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));

      this._updateScales(i);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";

      this._updateScale(this._mScale, e, i / t);
    },
    _updateImperial: function _updateImperial(t) {
      var i,
          e = 3.2808399 * t;
      5280 < e ? (i = e / 5280, t = this._getRoundNum(i), this._updateScale(this._iScale, t + " mi", t / i)) : (i = this._getRoundNum(e), this._updateScale(this._iScale, i + " ft", i / e));
    },
    _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    },
    _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          t = t / i;
      return i * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
    }
  }),
      Vi = Wi.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(t) {
      c(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      for (var i in (t.attributionControl = this)._container = Qt("div", "leaflet-control-attribution"), Si(this._container), t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }

      return this._update(), this._container;
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
    },
    removeAttribution: function removeAttribution(t) {
      return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
    },
    _update: function _update() {
      if (this._map) {
        var t,
            i = [];

        for (t in this._attributions) {
          this._attributions[t] && i.push(t);
        }

        var e = [];
        this.options.prefix && e.push(this.options.prefix), i.length && e.push(i.join(", ")), this._container.innerHTML = e.join(" | ");
      }
    }
  });
  ji.mergeOptions({
    attributionControl: !0
  }), ji.addInitHook(function () {
    this.options.attributionControl && new Vi().addTo(this);
  });
  Wi.Layers = Hi, Wi.Zoom = Fi, Wi.Scale = Ui, Wi.Attribution = Vi, pt.layers = function (t, i, e) {
    return new Hi(t, i, e);
  }, pt.zoom = function (t) {
    return new Fi(t);
  }, pt.scale = function (t) {
    return new Ui(t);
  }, pt.attribution = function (t) {
    return new Vi(t);
  };
  mt = S.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled || (this._enabled = !0, this.addHooks()), this;
    },
    disable: function disable() {
      return this._enabled && (this._enabled = !1, this.removeHooks()), this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  });

  mt.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };

  var qi,
      gt = {
    Events: Z
  },
      Gi = xt ? "touchstart mousedown" : "mousedown",
      Ki = {
    mousedown: "mouseup",
    touchstart: "touchend",
    pointerdown: "touchend",
    MSPointerDown: "touchend"
  },
      Yi = {
    mousedown: "mousemove",
    touchstart: "touchmove",
    pointerdown: "touchmove",
    MSPointerDown: "touchmove"
  },
      Xi = E.extend({
    options: {
      clickTolerance: 3
    },
    initialize: function initialize(t, i, e, n) {
      c(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    },
    enable: function enable() {
      this._enabled || (xi(this._dragStartTarget, Gi, this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (Xi._dragging === this && this.finishDrag(), Pi(this._dragStartTarget, Gi, this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      var i, e;
      !t._simulated && this._enabled && (this._moved = !1, oi(this._element, "leaflet-zoom-anim") || Xi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xi._dragging = this)._preventOutline && fi(this._element), pi(), Ut(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, e = vi(this._element), this._startPoint = new k(i.clientX, i.clientY), this._parentScale = yi(e), xi(document, Yi[t.type], this._onMove, this), xi(document, Ki[t.type], this._onUp, this))));
    },
    _onMove: function _onMove(t) {
      var i;
      !t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : ((i = new k((i = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, i.clientY)._subtract(this._startPoint)).x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Zi(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = di(this._element).subtract(i), si(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), si(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, z(this._animRequest), this._lastEvent = t, this._animRequest = M(this._updatePosition, this, !0))));
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), _i(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag() {
      for (var t in ri(document.body, "leaflet-dragging"), this._lastTarget && (ri(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Yi) {
        Pi(document, Yi[t], this._onMove, this), Pi(document, Ki[t], this._onUp, this);
      }

      mi(), Vt(), this._moved && this._moving && (z(this._animRequest), this.fire("dragend", {
        distance: this._newPos.distanceTo(this._startPos)
      })), this._moving = !1, Xi._dragging = !1;
    }
  });

  function Ji(t, i) {
    if (!i || !t.length) return t.slice();
    i *= i;
    return t = function (t, i) {
      var e = t.length,
          n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);
      n[0] = n[e - 1] = 1, function t(i, e, n, o, s) {
        var r,
            a,
            h,
            u = 0;

        for (a = o + 1; a <= s - 1; a++) {
          h = ee(i[a], i[o], i[s], !0), u < h && (r = a, u = h);
        }

        n < u && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s));
      }(t, n, i, 0, e - 1);
      var o,
          s = [];

      for (o = 0; o < e; o++) {
        n[o] && s.push(t[o]);
      }

      return s;
    }(t = function (t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        (function (t, i) {
          var e = i.x - t.x,
              t = i.y - t.y;
          return e * e + t * t;
        })(t[n], t[o]) > i && (e.push(t[n]), o = n);
      }

      o < s - 1 && e.push(t[s - 1]);
      return e;
    }(t, i), i);
  }

  function $i(t, i, e) {
    return Math.sqrt(ee(t, i, e, !0));
  }

  function Qi(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? qi : ie(t, e),
        u = ie(i, e);

    for (qi = u;;) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      a = ie(r = te(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a);
    }
  }

  function te(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        h = i.y - t.y,
        i = n.min,
        n = n.max;
    return 8 & e ? (s = t.x + a * (n.y - t.y) / h, r = n.y) : 4 & e ? (s = t.x + a * (i.y - t.y) / h, r = i.y) : 2 & e ? (s = n.x, r = t.y + h * (n.x - t.x) / a) : 1 & e && (s = i.x, r = t.y + h * (i.x - t.x) / a), new k(s, r, o);
  }

  function ie(t, i) {
    var e = 0;
    return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }

  function ee(t, i, e, n) {
    var o = i.x,
        s = i.y,
        r = e.x - o,
        a = e.y - s,
        i = r * r + a * a;
    return 0 < i && (1 < (i = ((t.x - o) * r + (t.y - s) * a) / i) ? (o = e.x, s = e.y) : 0 < i && (o += r * i, s += a * i)), r = t.x - o, a = t.y - s, n ? r * r + a * a : new k(o, s);
  }

  function ne(t) {
    return !g(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }

  function oe(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ne(t);
  }

  vt = {
    simplify: Ji,
    pointToSegmentDistance: $i,
    closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return ee(t, i, e);
    },
    clipSegment: Qi,
    _getEdgeIntersection: te,
    _getBitCode: ie,
    _sqClosestPointOnSegment: ee,
    isFlat: ne,
    _flat: oe
  };

  function se(t, i, e) {
    for (var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length; c < _; c++) {
      t[c]._code = ie(t[c], i);
    }

    for (s = 0; s < 4; s++) {
      for (h = l[s], n = [], c = 0, o = (_ = t.length) - 1; c < _; o = c++) {
        r = t[c], a = t[o], r._code & h ? a._code & h || ((u = te(a, r, h, i, e))._code = ie(u, i), n.push(u)) : (a._code & h && ((u = te(a, r, h, i, e))._code = ie(u, i), n.push(u)), n.push(r));
      }

      t = n;
    }

    return t;
  }

  var J = {
    clipPolygon: se
  },
      ot = {
    project: function project(t) {
      return new k(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new D(t.y, t.x);
    },
    bounds: new I([-180, -90], [180, 90])
  },
      _t = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new I([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          o = s * Math.sin(n),
          s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - o) / (1 + o), s / 2),
          n = -e * Math.log(Math.max(s, 1e-10));
      return new k(t.lng * i * e, n);
    },
    unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && 1e-7 < Math.abs(u); h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }

      return new D(a * e, t.x * e / n);
    }
  },
      at = {
    LonLat: ot,
    Mercator: _t,
    SphericalMercator: U
  },
      Z = h({}, H, {
    code: "EPSG:3395",
    projection: _t,
    transformation: q(ht = .5 / (Math.PI * _t.R), .5, -ht, .5)
  }),
      re = h({}, H, {
    code: "EPSG:4326",
    projection: ot,
    transformation: q(1 / 180, 1, -1 / 180, .5)
  }),
      U = h({}, W, {
    projection: ot,
    transformation: q(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, i) {
      var e = i.lng - t.lng,
          t = i.lat - t.lat;
      return Math.sqrt(e * e + t * t);
    },
    infinite: !0
  });
  W.Earth = H, W.EPSG3395 = Z, W.EPSG3857 = G, W.EPSG900913 = K, W.EPSG4326 = re, W.Simple = U;
  var ae = E.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[m(t)] = this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[m(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var i,
          e = t.target;
      e.hasLayer(this) && (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents && (i = this.getEvents(), e.on(i, this), this.once("remove", function () {
        e.off(i, this);
      }, this)), this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
        layer: this
      }));
    }
  });
  ji.include({
    addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = m(t);
      return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
    },
    removeLayer: function removeLayer(t) {
      var i = m(t);
      return this._layers[i] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null), this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && m(t) in this._layers;
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? g(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[m(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      t = m(t);
      this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t,
          i = 1 / 0,
          e = -1 / 0,
          n = this._getZoomSpan();

      for (t in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[t].options,
            i = void 0 === o.minZoom ? i : Math.min(i, o.minZoom),
            e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom);
      }

      this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = i === 1 / 0 ? void 0 : i, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  });
  var he = ae.extend({
    initialize: function initialize(t, i) {
      var e, n;
      if (c(this, i), this._layers = {}, t) for (e = 0, n = t.length; e < n; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var i = this.getLayerId(t);
      return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      t = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
    },
    clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    },
    invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);

      for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }

      return this;
    },
    onAdd: function onAdd(t) {
      this.eachLayer(t.addLayer, t);
    },
    onRemove: function onRemove(t) {
      this.eachLayer(t.removeLayer, t);
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];
      return this.eachLayer(t.push, t), t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: m
  }),
      ue = he.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), he.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), he.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t,
          i = new R();

      for (t in this._layers) {
        var e = this._layers[t];
        i.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }

      return i;
    }
  }),
      le = S.extend({
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0],
      crossOrigin: !1
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);

      if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }

      i = this._createImg(e, i && "IMG" === i.tagName ? i : null);
      return this._setIconStyles(i, t), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i;
    },
    _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"];
      "number" == typeof n && (n = [n, n]);
      var o = A(n),
          n = A("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
      t.className = "leaflet-marker-" + i + " " + (e.className || ""), n && (t.style.marginLeft = -n.x + "px", t.style.marginTop = -n.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return (i = i || document.createElement("img")).src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return Pt && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  });

  var ce = le.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return ce.imagePath || (ce.imagePath = this._detectIconPath()), (this.options.imagePath || ce.imagePath) + le.prototype._getIconUrl.call(this, t);
    },
    _detectIconPath: function _detectIconPath() {
      var t = Qt("div", "leaflet-default-icon-path", document.body),
          i = $t(t, "background-image") || $t(t, "backgroundImage");
      return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
    }
  }),
      _e = mt.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new Xi(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), si(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && ri(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function _adjustPan(t) {
      var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = di(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          o = O(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
      o.contains(s) || (n = A((Math.max(o.max.x, s.x) - o.max.x) / (r.max.x - o.max.x) - (Math.min(o.min.x, s.x) - o.min.x) / (r.min.x - o.min.x), (Math.max(o.max.y, s.y) - o.max.y) / (r.max.y - o.max.y) - (Math.min(o.min.y, s.y) - o.min.y) / (r.min.y - o.min.y)).multiplyBy(n), e.panBy(n, {
        animate: !1
      }), this._draggable._newPos._add(n), this._draggable._startPos._add(n), _i(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t)));
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
    },
    _onPreDrag: function _onPreDrag(t) {
      this._marker.options.autoPan && (z(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)));
    },
    _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = di(i._icon),
          o = i._map.layerPointToLatLng(n);

      e && _i(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }),
      de = ae.extend({
    options: {
      icon: new ce(),
      interactive: !0,
      keyboard: !0,
      title: "",
      alt: "",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      shadowPane: "shadowPane",
      bubblingMouseEvents: !1,
      draggable: !1,
      autoPan: !1,
      autoPanPadding: [50, 50],
      autoPanSpeed: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = j(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = j(t), this.update(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    getIcon: function getIcon() {
      return this.options.icon;
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      var t;
      return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
      e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), si(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
      var o = t.icon.createShadow(this._shadow),
          e = !1;
      o !== this._shadow && (this._removeShadow(), e = !0), o && (si(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && e && this.getPane(t.shadowPane).appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), ti(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && ti(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      this._icon && _i(this._icon, t), this._shadow && _i(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon && (this._icon.style.zIndex = this._zIndex + t);
    },
    _animateZoom: function _animateZoom(t) {
      t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

      this._setPos(t);
    },
    _initInteraction: function _initInteraction() {
      var t;
      this.options.interactive && (si(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), _e && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new _e(this), t && this.dragging.enable()));
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      this._icon && ui(this._icon, t), this._shadow && ui(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    }
  });

  var pe = ae.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0,
      bubblingMouseEvents: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    }
  }),
      me = pe.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = j(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = j(t), this.redraw(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;
      return pe.prototype.setStyle.call(this, t), this.setRadius(i), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          e = [t + e, i + e];

      this._pxBounds = new I(this._point.subtract(e), this._point.add(e));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  });
  var fe = me.extend({
    initialize: function initialize(t, i, e) {
      if ("number" == typeof i && (i = h({}, e, {
        radius: i
      })), c(this, i), this._latlng = j(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: pe.prototype.setStyle,
    _project: function _project() {
      var t,
          i,
          e,
          n,
          o,
          s = this._latlng.lng,
          r = this._latlng.lat,
          a = this._map,
          h = a.options.crs;
      h.distance === H.distance ? (o = Math.PI / 180, t = this._mRadius / H.R / o, i = a.project([r + t, s]), n = a.project([r - t, s]), e = i.add(n).divideBy(2), n = a.unproject(e).lat, o = Math.acos((Math.cos(t * o) - Math.sin(r * o) * Math.sin(n * o)) / (Math.cos(r * o) * Math.cos(n * o))) / o, !isNaN(o) && 0 !== o || (o = t / Math.cos(Math.PI / 180 * r)), this._point = e.subtract(a.getPixelOrigin()), this._radius = isNaN(o) ? 0 : e.x - a.project([n, s - o]).x, this._radiusY = e.y - i.y) : (h = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])), this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(h).x), this._updateBounds();
    }
  });
  var ge = pe.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var i, e, n = 1 / 0, o = null, s = ee, r = 0, a = this._parts.length; r < a; r++) {
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, i = h[u - 1], e = h[u], !0);
          c < n && (n = c, o = s(t, i, e));
        }
      }

      return o && (o.distance = Math.sqrt(n)), o;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r = this._rings[0],
          a = r.length;
      if (!a) return null;

      for (i = t = 0; t < a - 1; t++) {
        i += r[t].distanceTo(r[t + 1]) / 2;
      }

      if (0 === i) return this._map.layerPointToLatLng(r[0]);

      for (e = t = 0; t < a - 1; t++) {
        if (n = r[t], o = r[t + 1], i < (e += s = n.distanceTo(o))) return s = (e - i) / s, this._map.layerPointToLatLng([o.x - s * (o.x - n.x), o.y - s * (o.y - n.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = j(t), i.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new R(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return ne(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = ne(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = j(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }

      return i;
    },
    _project: function _project() {
      var t = new I();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
          t = new k(t, t);

      this._pxBounds = new I([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]);
    },
    _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof D,
          r = t.length;

      if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }

        i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, e, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) {
        for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++) {
          (n = Qi(o[i], o[i + 1], t, i, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[i + 1] && i !== e - 2 || (s[a].push(n[1]), a++));
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = Ji(t[e], i);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && $i(t, a[o], a[n]) <= h) return !0;
        }
      }

      return !1;
    }
  });
  ge._flat = oe;
  var ve = ge.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
      if (!l) return null;

      for (t = s = r = a = 0, i = l - 1; t < l; i = t++) {
        e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }

      return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var i = ge.prototype._convertLatLngs.call(this, t),
          t = i.length;

      return 2 <= t && i[0] instanceof D && i[0].equals(i[t - 1]) && i.pop(), i;
    },
    _setLatLngs: function _setLatLngs(t) {
      ge.prototype._setLatLngs.call(this, t), ne(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return (ne(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          i = new k(i, i),
          t = new I(t.min.subtract(i), t.max.add(i));
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var e, n = 0, o = this._rings.length; n < o; n++) {
        (e = se(this._rings[n], t, !0)).length && this._parts.push(e);
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
        }
      }

      return u || ge.prototype._containsPoint.call(this, t, !0);
    }
  });
  var ye = ue.extend({
    initialize: function initialize(t, i) {
      c(this, i), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var i,
          e,
          n,
          o = g(t) ? t : t.features;

      if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }

        return this;
      }

      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = xe(t, s);
      return r ? (r.feature = ze(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    },
    resetStyle: function resetStyle(t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = h({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
    },
    setStyle: function setStyle(i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, i) {
      t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    }
  });

  function xe(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        u = i && i.pointToLayer,
        l = i && i.coordsToLatLng || Pe;
    if (!a && !r) return null;

    switch (r.type) {
      case "Point":
        return we(u, t, e = l(a), i);

      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = l(a[o]), h.push(we(u, t, e, i));
        }

        return new ue(h);

      case "LineString":
      case "MultiLineString":
        return n = Le(a, "LineString" === r.type ? 0 : 1, l), new ge(n, i);

      case "Polygon":
      case "MultiPolygon":
        return n = Le(a, "Polygon" === r.type ? 1 : 2, l), new ve(n, i);

      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = xe({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, i);
          c && h.push(c);
        }

        return new ue(h);

      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }

  function we(t, i, e, n) {
    return t ? t(i, e) : new de(e, n && n.markersInheritOptions && n);
  }

  function Pe(t) {
    return new D(t[1], t[0], t[2]);
  }

  function Le(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? Le(t[s], i - 1, e) : (e || Pe)(t[s]), o.push(n);
    }

    return o;
  }

  function be(t, i) {
    return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)] : [r(t.lng, i), r(t.lat, i)];
  }

  function Te(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? Te(t[s], i - 1, e, n) : be(t[s], n));
    }

    return !i && e && o.push(o[0]), o;
  }

  function Me(t, i) {
    return t.feature ? h({}, t.feature, {
      geometry: i
    }) : ze(i);
  }

  function ze(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }

  _t = {
    toGeoJSON: function toGeoJSON(t) {
      return Me(this, {
        type: "Point",
        coordinates: be(this.getLatLng(), t)
      });
    }
  };

  function Ce(t, i) {
    return new ye(t, i);
  }

  de.include(_t), fe.include(_t), me.include(_t), ge.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ne(this._latlngs);
      return Me(this, {
        type: (i ? "Multi" : "") + "LineString",
        coordinates: Te(this._latlngs, i ? 1 : 0, !1, t)
      });
    }
  }), ve.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ne(this._latlngs),
          e = i && !ne(this._latlngs[0]),
          t = Te(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
      return i || (t = [t]), Me(this, {
        type: (e ? "Multi" : "") + "Polygon",
        coordinates: t
      });
    }
  }), he.include({
    toMultiPoint: function toMultiPoint(i) {
      var e = [];
      return this.eachLayer(function (t) {
        e.push(t.toGeoJSON(i).geometry.coordinates);
      }), Me(this, {
        type: "MultiPoint",
        coordinates: e
      });
    },
    toGeoJSON: function toGeoJSON(i) {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint(i);
      var e = "GeometryCollection" === t,
          n = [];
      return this.eachLayer(function (t) {
        t.toGeoJSON && (t = t.toGeoJSON(i), e ? n.push(t.geometry) : "FeatureCollection" === (t = ze(t)).type ? n.push.apply(n, t.features) : n.push(t));
      }), e ? Me(this, {
        geometries: n,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: n
      };
    }
  });
  var ht = Ce,
      Se = ae.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1,
      errorOverlayUrl: "",
      zIndex: 1,
      className: ""
    },
    initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = N(i), c(this, e);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (si(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      ti(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && ei(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && ni(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = N(t), this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = "IMG" === this._url.tagName,
          i = this._image = t ? this._url : Qt("img");
      si(i, "leaflet-image-layer"), this._zoomAnimated && si(i, "leaflet-zoom-animated"), this.options.className && si(i, this.options.className), i.onselectstart = a, i.onmousemove = a, i.onload = _(this.fire, this, "load"), i.onerror = _(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

      ci(this._image, t, i);
    },
    _reset: function _reset() {
      var t = this._image,
          i = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();
      _i(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      ui(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    },
    _overlayOnError: function _overlayOnError() {
      this.fire("error");
      var t = this.options.errorOverlayUrl;
      t && this._url !== t && (this._url = t, this._image.src = t);
    }
  }),
      Ze = Se.extend({
    options: {
      autoplay: !0,
      loop: !0,
      keepAspectRatio: !0,
      muted: !1
    },
    _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : Qt("video");

      if (si(i, "leaflet-image-layer"), this._zoomAnimated && si(i, "leaflet-zoom-animated"), this.options.className && si(i, this.options.className), i.onselectstart = a, i.onmousemove = a, i.onloadeddata = _(this.fire, this, "load"), t) {
        for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++) {
          n.push(e[o].src);
        }

        this._url = 0 < e.length ? n : [i.src];
      } else {
        g(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted;

        for (var s = 0; s < this._url.length; s++) {
          var r = Qt("source");
          r.src = this._url[s], i.appendChild(r);
        }
      }
    }
  });
  var Ee = Se.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      si(t, "leaflet-image-layer"), this._zoomAnimated && si(t, "leaflet-zoom-animated"), this.options.className && si(t, this.options.className), t.onselectstart = a, t.onmousemove = a;
    }
  });
  var ke = ae.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function initialize(t, i) {
      c(this, t), this._source = i;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ui(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ui(this._container, 1), this.bringToFront();
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (ui(this._container, 0), this._removeTimeout = setTimeout(_(ti, void 0, this._container), 200)) : ti(this._container);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = j(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && ei(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && ni(this._container), this;
    },
    _prepareOpen: function _prepareOpen(t, i, e) {
      if (i instanceof ae || (e = i, i = t), i instanceof ue) for (var n in t._layers) {
        i = t._layers[n];
        break;
      }
      if (!e) if (i.getCenter) e = i.getCenter();else if (i.getLatLng) e = i.getLatLng();else {
        if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
        e = i.getBounds().getCenter();
      }
      return this._source = i, this.update(), e;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(i);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      var t, i, e;
      this._map && (t = this._map.latLngToLayerPoint(this._latlng), e = A(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? _i(this._container, t.add(i)) : e = e.add(t).add(i), i = this._containerBottom = -e.y, e = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x, this._container.style.bottom = i + "px", this._container.style.left = e + "px");
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }),
      Be = ke.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      closeOnEscapeKey: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return t.openPopup(this), this;
    },
    onAdd: function onAdd(t) {
      ke.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof pe || this._source.on("preclick", zi));
    },
    onRemove: function onRemove(t) {
      ke.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof pe || this._source.off("preclick", zi));
    },
    getEvents: function getEvents() {
      var t = ke.prototype.getEvents.call(this);
      return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _close: function _close() {
      this._map && this._map.closePopup(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          i = this._container = Qt("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          e = this._wrapper = Qt("div", t + "-content-wrapper", i);
      this._contentNode = Qt("div", t + "-content", e), Si(i), Ci(this._contentNode), xi(i, "contextmenu", zi), this._tipContainer = Qt("div", t + "-tip-container", i), this._tip = Qt("div", t + "-tip", this._tipContainer), this.options.closeButton && ((i = this._closeButton = Qt("a", t + "-close-button", i)).href = "#close", i.innerHTML = "&#215;", xi(i, "click", this._onCloseButtonClick, this));
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style;
      i.width = "", i.whiteSpace = "nowrap";
      var e = t.offsetWidth,
          e = Math.min(e, this.options.maxWidth);
      e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
      var n = t.offsetHeight,
          o = this.options.maxHeight,
          e = "leaflet-popup-scrolled";
      o && o < n ? (i.height = o + "px", si(t, e)) : ri(t, e), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          t = this._getAnchor();

      _i(this._container, i.add(t));
    },
    _adjustPan: function _adjustPan() {
      var t, i, e, n, o, s, r, a, h;
      this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t = this._map, r = parseInt($t(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + r, e = this._containerWidth, (a = new k(this._containerLeft, -i - this._containerBottom))._add(di(this._container)), n = t.layerPointToContainerPoint(a), h = A(this.options.autoPanPadding), o = A(this.options.autoPanPaddingTopLeft || h), s = A(this.options.autoPanPaddingBottomRight || h), r = t.getSize(), h = a = 0, n.x + e + s.x > r.x && (a = n.x + e - r.x + s.x), n.x - a - o.x < 0 && (a = n.x - o.x), n.y + i + s.y > r.y && (h = n.y + i - r.y + s.y), n.y - h - o.y < 0 && (h = n.y - o.y), (a || h) && t.fire("autopanstart").panBy([a, h]));
    },
    _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), Ei(t);
    },
    _getAnchor: function _getAnchor() {
      return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  });
  ji.mergeOptions({
    closePopupOnClick: !0
  }), ji.include({
    openPopup: function openPopup(t, i, e) {
      return t instanceof Be || (t = new Be(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    },
    closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    }
  }), ae.include({
    bindPopup: function bindPopup(t, i) {
      return t instanceof Be ? (c(t, i), (this._popup = t)._source = this) : (this._popup && !i || (this._popup = new Be(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t, i) {
      return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i), this._map.openPopup(this._popup, i)), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    },
    togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var i = t.layer || t.target;
      this._popup && this._map && (Ei(t), i instanceof pe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    },
    _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    }
  });
  var Ae = ke.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      ke.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && this._source.fire("tooltipopen", {
        tooltip: this
      }, !0);
    },
    onRemove: function onRemove(t) {
      ke.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && this._source.fire("tooltipclose", {
        tooltip: this
      }, !0);
    },
    getEvents: function getEvents() {
      var t = ke.prototype.getEvents.call(this);
      return xt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function _close() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = Qt("div", t);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var i,
          e = this._map,
          n = this._container,
          o = e.latLngToContainerPoint(e.getCenter()),
          s = e.layerPointToContainerPoint(t),
          r = this.options.direction,
          a = n.offsetWidth,
          h = n.offsetHeight,
          u = A(this.options.offset),
          e = this._getAnchor(),
          h = "top" === r ? (i = a / 2, h) : "bottom" === r ? (i = a / 2, 0) : (i = "center" === r ? a / 2 : "right" === r ? 0 : "left" === r ? a : s.x < o.x ? (r = "right", 0) : (r = "left", a + 2 * (u.x + e.x)), h / 2);

      t = t.subtract(A(i, h, !0)).add(u).add(e), ri(n, "leaflet-tooltip-right"), ri(n, "leaflet-tooltip-left"), ri(n, "leaflet-tooltip-top"), ri(n, "leaflet-tooltip-bottom"), si(n, "leaflet-tooltip-" + r), _i(n, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && ui(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

      this._setPosition(t);
    },
    _getAnchor: function _getAnchor() {
      return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  });
  ji.include({
    openTooltip: function openTooltip(t, i, e) {
      return t instanceof Ae || (t = new Ae(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
    },
    closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    }
  }), ae.include({
    bindTooltip: function bindTooltip(t, i) {
      return t instanceof Ae ? (c(t, i), (this._tooltip = t)._source = this) : (this._tooltip && !i || (this._tooltip = new Ae(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      var i, e;
      !t && this._tooltipHandlersAdded || (i = t ? "off" : "on", e = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      }, this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), xt && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t);
    },
    openTooltip: function openTooltip(t, i) {
      return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (si(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    },
    closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (ri(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    },
    toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      var i = t.layer || t.target;
      this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
    },
    _moveTooltip: function _moveTooltip(t) {
      var i = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), t = this._map.containerPointToLayerPoint(t), i = this._map.layerPointToLatLng(t)), this._tooltip.setLatLng(i);
    }
  });
  var Ie = le.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
          t = this.options;
      return t.html instanceof Element ? (ii(i), i.appendChild(t.html)) : i.innerHTML = !1 !== t.html ? t.html : "", t.bgPos && (t = A(t.bgPos), i.style.backgroundPosition = -t.x + "px " + -t.y + "px"), this._setIconStyles(i, "icon"), i;
    },
    createShadow: function createShadow() {
      return null;
    }
  });
  le.Default = ce;
  var Oe = ae.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: F,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), ti(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (ei(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (ni(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof k ? t : new k(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }

      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !Q) {
        ui(this._container, this.options.opacity);
        var t,
            i = +new Date(),
            e = !1,
            n = !1;

        for (t in this._tiles) {
          var o,
              s = this._tiles[t];
          s.current && s.loaded && (o = Math.min(1, (i - s.loaded) / 200), ui(s.el, o), o < 1 ? e = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), s.active = !0));
        }

        n && !this._noPrune && this._pruneTiles(), e && (z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: a,
    _initContainer: function _initContainer() {
      this._container || (this._container = Qt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;

      if (void 0 !== t) {
        for (var e in this._levels) {
          e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ti(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }

        var n = this._levels[t],
            o = this._map;
        return n || ((n = this._levels[t] = {}).el = Qt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), a(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: a,
    _onRemoveLevel: a,
    _onCreateLevel: a,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e,
            n = this._map.getZoom();

        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (e = this._tiles[t]).retain = e.current;
          }

          for (t in this._tiles) {
            (e = this._tiles[t]).current && !e.active && (i = e.coords, this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2));
          }

          for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        ti(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
      }

      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, i, e, n) {
      var o = Math.floor(t / 2),
          t = Math.floor(i / 2),
          i = e - 1,
          e = new k(+o, +t);
      e.z = +i;
      e = this._tileCoordsToKey(e), e = this._tiles[e];
      return e && e.active ? e.retain = !0 : (e && e.loaded && (e.retain = !0), n < i && this._retainParent(o, t, i, n));
    },
    _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new k(o, s);
          r.z = e + 1;
          r = this._tileCoordsToKey(r), r = this._tiles[r];
          r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      t = t && (t.pinch || t.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    },
    _setView: function _setView(t, i, e, n) {
      var o = Math.round(i),
          o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o),
          s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();

      ft ? ci(t.el, e, n) : _i(t.el, e);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);

      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          e = i.getZoomScale(e, this._tileZoom),
          t = i.project(t, this._tileZoom).floor(),
          e = i.getSize().divideBy(2 * e);
      return new I(t.subtract(e), t.add(e));
    },
    _update: function _update(t) {
      var i = this._map;

      if (i) {
        var e = this._clampZoom(i.getZoom());

        if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n,
              i = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(i),
              s = o.getCenter(),
              r = [],
              i = this.options.keepBuffer,
              a = new I(o.getBottomLeft().subtract([i, -i]), o.getTopRight().add([i, -i]));

          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");

          for (n in this._tiles) {
            var h = this._tiles[n].coords;
            h.z === this._tileZoom && a.contains(new k(h.x, h.y)) || (this._tiles[n].current = !1);
          }

          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);else {
            for (var u = o.min.y; u <= o.max.y; u++) {
              for (var l = o.min.x; l <= o.max.x; l++) {
                var c,
                    _ = new k(l, u);

                _.z = this._tileZoom, this._isValidTile(_) && ((c = this._tiles[this._tileCoordsToKey(_)]) ? c.current = !0 : r.push(_));
              }
            }

            if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));

              for (var d = document.createDocumentFragment(), l = 0; l < r.length; l++) {
                this._addTile(r[l], d);
              }

              this._level.el.appendChild(d);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;

      if (!i.infinite) {
        var e = this._globalTileRange;
        if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }

      if (!this.options.bounds) return !0;
      t = this._tileCoordsToBounds(t);
      return N(this.options.bounds).overlaps(t);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          e = n.add(e);
      return [i.unproject(n, t.z), i.unproject(e, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      t = this._tileCoordsToNwSe(t), t = new R(t[0], t[1]);
      return this.options.noWrap || (t = this._map.wrapLatLngBounds(t)), t;
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var i = t.split(":"),
          t = new k(+i[0], +i[1]);
      return t.z = +i[2], t;
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      i && (ti(i.el), delete this._tiles[t], this.fire("tileunload", {
        tile: i.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      si(t, "leaflet-tile");
      var i = this.getTileSize();
      t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = a, t.onmousemove = a, Q && this.options.opacity < 1 && ui(t, this.options.opacity), et && !nt && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function _addTile(t, i) {
      var e = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), _(this._tileReady, this, t));

      this._initTile(o), this.createTile.length < 2 && M(_(this._tileReady, this, t, null, o)), _i(o, e), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, i.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, i, e) {
      i && this.fire("tileerror", {
        error: i,
        tile: e,
        coords: t
      });

      var n = this._tileCoordsToKey(t);

      (e = this._tiles[n]) && (e.loaded = +new Date(), this._map._fadeAnimated ? (ui(e.el, 0), z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (si(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: e.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Q || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(_(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var i = new k(this._wrapX ? o(t.x, this._wrapX) : t.x, this._wrapY ? o(t.y, this._wrapY) : t.y);
      return i.z = t.z, i;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();
      return new I(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }

      return !0;
    }
  });
  var Re = Oe.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, i) {
      this._url = t, (i = c(this, i)).detectRetina && Pt && 0 < i.maxZoom && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), et || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, i) {
      return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var e = document.createElement("img");
      return xi(e, "load", _(this._tileOnLoad, this, i, e)), xi(e, "error", _(this._tileOnError, this, i, e)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e;
    },
    getTileUrl: function getTileUrl(t) {
      var i = {
        r: Pt ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, this.options.tms && (i.y = t), i["-y"] = t), f(this._url, h(i, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, i) {
      Q ? setTimeout(_(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom;
      return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      t = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function _abortLoading() {
      var t, i;

      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = a, i.onerror = a, i.complete || (i.src = y, ti(i), delete this._tiles[t]));
      }
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      if (i) return st || i.el.setAttribute("src", y), Oe.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== y)) return Oe.prototype._tileReady.call(this, t, i, e);
    }
  });

  function Ne(t, i) {
    return new Re(t, i);
  }

  var De = Re.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, i) {
      this._url = t;
      var e,
          n = h({}, this.defaultWmsParams);

      for (e in i) {
        e in this.options || (n[e] = i[e]);
      }

      var o = (i = c(this, i)).detectRetina && Pt ? 2 : 1,
          t = this.getTileSize();
      n.width = t.x * o, n.height = t.y * o, this.wmsParams = n;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[i] = this._crs.code, Re.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          e = O(e.project(i[0]), e.project(i[1])),
          i = e.min,
          e = e.max,
          e = (1.3 <= this._wmsVersion && this._crs === re ? [i.y, i.x, e.y, e.x] : [i.x, i.y, e.x, e.y]).join(","),
          t = Re.prototype.getTileUrl.call(this, t);

      return t + d(this.wmsParams, t, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
    },
    setParams: function setParams(t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    }
  });
  Re.WMS = De, Ne.wms = function (t, i) {
    return new De(t, i);
  };
  var je = ae.extend({
    options: {
      padding: .1,
      tolerance: 0
    },
    initialize: function initialize(t) {
      c(this, t), m(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && si(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = di(this._container),
          o = this._map.getSize().multiplyBy(.5 + this.options.padding),
          s = this._map.project(this._center, i),
          s = this._map.project(t, i).subtract(s),
          s = o.multiplyBy(-e).add(n).add(o).subtract(s);

      ft ? ci(this._container, s, e) : _i(this._container, s);
    },
    _reset: function _reset() {
      for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();

      this._bounds = new I(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }),
      We = je.extend({
    getEvents: function getEvents() {
      var t = je.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      je.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");
      xi(t, "mousemove", this._onMouseMove, this), xi(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), xi(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    },
    _destroyContainer: function _destroyContainer() {
      z(this._redrawRequest), delete this._ctx, ti(this._container), Pi(this._container), delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        for (var t in this._redrawBounds = null, this._layers) {
          this._layers[t]._update();
        }

        this._redraw();
      }
    },
    _update: function _update() {
      var t, i, e, n;
      this._map._animatingZoom && this._bounds || (je.prototype._update.call(this), t = this._bounds, i = this._container, e = t.getSize(), n = Pt ? 2 : 1, _i(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Pt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
    },
    _reset: function _reset() {
      je.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t);

      t = (this._layers[m(t)] = t)._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          i = i.prev;
      e ? e.prev = i : this._drawLast = i, i ? i.next = e : this._drawFirst = e, delete t._order, delete this._layers[m(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if ("string" == typeof t.options.dashArray) {
        for (var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < e.length; o++) {
          if (i = Number(e[o]), isNaN(i)) return;
          n.push(i);
        }

        t.options._dashArray = n;
      } else t.options._dashArray = t.options.dashArray;
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      var i;
      t._pxBounds && (i = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new I(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t,
          i = this._redrawBounds;
      i ? (t = i.getSize(), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
    },
    _draw: function _draw() {
      var t,
          i,
          e = this._redrawBounds;
      this._ctx.save(), e && (i = e.getSize(), this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()), this._drawing = !0;

      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
      }

      this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;

        if (a) {
          for (h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }

            i && h.closePath();
          }

          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      var i, e, n, o;
      this._drawing && !t._empty() && (i = t._point, e = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 != o && e.restore(), this._fillStroke(e, t));
    },
    _fillStroke: function _fillStroke(t, i) {
      var e = i.options;
      e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && (("click" === t.type || "preclick" !== t.type) && this._map._draggableMoved(i) || (e = i));
      }

      e && (Oi(t), this._fireEvent([e], t));
    },
    _onMouseMove: function _onMouseMove(t) {
      var i;
      !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, i));
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;
      i && (ri(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
    },
    _handleMouseHover: function _handleMouseHover(t, i) {
      if (!this._mouseHoverThrottled) {
        for (var e, n, o = this._drawFirst; o; o = o.next) {
          (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
        }

        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (si(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(_(function () {
          this._mouseHoverThrottled = !1;
        }, this), 32);
      }
    },
    _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, e = n.prev, i && ((i.prev = e) ? e.next = i : i && (this._drawFirst = i), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
    },
    _bringToBack: function _bringToBack(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, (e = n.prev) && ((e.next = i) ? i.prev = e : e && (this._drawLast = e), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
    }
  });

  function He(t) {
    return bt ? new We(t) : null;
  }

  var Fe = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {}

    return function (t) {
      return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
    };
  }(),
      ot = {
    _initContainer: function _initContainer() {
      this._container = Qt("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (je.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._container = Fe("shape");
      si(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = Fe("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[m(t)] = t;
    },
    _addPath: function _addPath(t) {
      var i = t._container;
      this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    },
    _removePath: function _removePath(t) {
      var i = t._container;
      ti(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
      o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i = i || (t._stroke = Fe("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e = e || (t._fill = Fe("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);

      this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, i) {
      t._path.v = i;
    },
    _bringToFront: function _bringToFront(t) {
      ei(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      ni(t._container);
    }
  },
      Ue = Mt ? Fe : Y,
      Ve = je.extend({
    getEvents: function getEvents() {
      var t = je.prototype.getEvents.call(this);
      return t.zoomstart = this._onZoomStart, t;
    },
    _initContainer: function _initContainer() {
      this._container = Ue("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ue("g"), this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      ti(this._container), Pi(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
    },
    _onZoomStart: function _onZoomStart() {
      this._update();
    },
    _update: function _update() {
      var t, i, e;
      this._map._animatingZoom && this._bounds || (je.prototype._update.call(this), i = (t = this._bounds).getSize(), e = this._container, this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), _i(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._path = Ue("path");
      t.options.className && si(i, t.options.className), t.options.interactive && si(i, "leaflet-interactive"), this._updateStyle(t), this._layers[m(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      ti(t._path), t.removeInteractiveTarget(t._path), delete this._layers[m(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._path,
          t = t.options;
      i && (t.stroke ? (i.setAttribute("stroke", t.color), i.setAttribute("stroke-opacity", t.opacity), i.setAttribute("stroke-width", t.weight), i.setAttribute("stroke-linecap", t.lineCap), i.setAttribute("stroke-linejoin", t.lineJoin), t.dashArray ? i.setAttribute("stroke-dasharray", t.dashArray) : i.removeAttribute("stroke-dasharray"), t.dashOffset ? i.setAttribute("stroke-dashoffset", t.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), t.fill ? (i.setAttribute("fill", t.fillColor || t.color), i.setAttribute("fill-opacity", t.fillOpacity), i.setAttribute("fill-rule", t.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, X(t._parts, i));
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
          e = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";

      this._setPath(t, e);
    },
    _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    },
    _bringToFront: function _bringToFront(t) {
      ei(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      ni(t._path);
    }
  });

  function qe(t) {
    return Tt || Mt ? new Ve(t) : null;
  }

  Mt && Ve.include(ot), ji.include({
    getRenderer: function getRenderer(t) {
      t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
      return this.hasLayer(t) || this.addLayer(t), t;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;
      var i = this._paneRenderers[t];
      return void 0 === i && (i = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = i), i;
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && He(t) || qe(t);
    }
  });
  var Ge = ve.extend({
    initialize: function initialize(t, i) {
      ve.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  Ve.create = Ue, Ve.pointsToPath = X, ye.geometryToLayer = xe, ye.coordsToLatLng = Pe, ye.coordsToLatLngs = Le, ye.latLngToCoords = be, ye.latLngsToCoords = Te, ye.getFeature = Me, ye.asFeature = ze, ji.mergeOptions({
    boxZoom: !0
  });
  Z = mt.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    },
    addHooks: function addHooks() {
      xi(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      Pi(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      ti(this._pane), delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    },
    _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
      this._clearDeferredResetState(), this._resetState(), Ut(), pi(), this._startPoint = this._map.mouseEventToContainerPoint(t), xi(document, {
        contextmenu: Ei,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = Qt("div", "leaflet-zoom-box", this._container), si(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var i = new I(this._point, this._startPoint),
          t = i.getSize();
      _i(this._box, i.min), this._box.style.width = t.x + "px", this._box.style.height = t.y + "px";
    },
    _finish: function _finish() {
      this._moved && (ti(this._box), ri(this._container, "leaflet-crosshair")), Vt(), mi(), Pi(document, {
        contextmenu: Ei,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(_(this._resetState, this), 0), t = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t).fire("boxzoomend", {
        boxZoomBounds: t
      })));
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    }
  });
  ji.addInitHook("addHandler", "boxZoom", Z), ji.mergeOptions({
    doubleClickZoom: !0
  });
  G = mt.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          n = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom ? i.setZoom(n) : i.setZoomAround(t.containerPoint, n);
    }
  });
  ji.addInitHook("addHandler", "doubleClickZoom", G), ji.mergeOptions({
    dragging: !0,
    inertia: !nt,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  });
  K = mt.extend({
    addHooks: function addHooks() {
      var t;
      this._draggable || (t = this._map, this._draggable = new Xi(t._mapPane, t._container), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), si(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      ri(this._map._container, "leaflet-grab"), ri(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var t,
          i = this._map;
      i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = N(this._map.options.maxBounds), this._offsetLimit = O(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      var i, e;
      this._map.options.inertia && (i = this._lastTime = +new Date(), e = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(e), this._times.push(i), this._prunePositions(i)), this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function _prunePositions(t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0];) {
        this._positions.shift(), this._times.shift();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      var t, i;
      this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit, t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          i = (n + i + e) % t - i - e,
          i = Math.abs(o + e) < Math.abs(i + e) ? o : i;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = i;
    },
    _onDragEnd: function _onDragEnd(t) {
      var i,
          e,
          n,
          o,
          s = this._map,
          r = s.options,
          a = !r.inertia || this._times.length < 2;
      s.fire("dragend", t), a ? s.fire("moveend") : (this._prunePositions(+new Date()), e = this._lastPos.subtract(this._positions[0]), t = (this._lastTime - this._times[0]) / 1e3, i = r.easeLinearity, e = (a = e.multiplyBy(i / t)).distanceTo([0, 0]), t = Math.min(r.inertiaMaxSpeed, e), e = a.multiplyBy(t / e), n = t / (r.inertiaDeceleration * i), (o = e.multiplyBy(-n / 2).round()).x || o.y ? (o = s._limitOffset(o, s.options.maxBounds), M(function () {
        s.panBy(o, {
          duration: n,
          easeLinearity: i,
          noMoveStart: !0,
          animate: !0
        });
      })) : s.fire("moveend"));
    }
  });
  ji.addInitHook("addHandler", "dragging", K), ji.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  });
  U = mt.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), xi(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), Pi(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      var t, i, e;
      this._focused || (t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, e = t.scrollLeft || e.scrollLeft, this._map._container.focus(), window.scrollTo(e, i));
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      for (var i = this._panKeys = {}, e = this.keyCodes, n = 0, o = e.left.length; n < o; n++) {
        i[e.left[n]] = [-1 * t, 0];
      }

      for (n = 0, o = e.right.length; n < o; n++) {
        i[e.right[n]] = [t, 0];
      }

      for (n = 0, o = e.down.length; n < o; n++) {
        i[e.down[n]] = [0, t];
      }

      for (n = 0, o = e.up.length; n < o; n++) {
        i[e.up[n]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      for (var i = this._zoomKeys = {}, e = this.keyCodes, n = 0, o = e.zoomIn.length; n < o; n++) {
        i[e.zoomIn[n]] = t;
      }

      for (n = 0, o = e.zoomOut.length; n < o; n++) {
        i[e.zoomOut[n]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      xi(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      Pi(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;
        if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = A(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
          n.closePopup();
        }
        Ei(t);
      }
    }
  });
  ji.addInitHook("addHandler", "keyboard", U), ji.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  });
  _t = mt.extend({
    addHooks: function addHooks() {
      xi(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      Pi(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var i = Ai(t),
          e = this._map.options.wheelDebounceTime;
      this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
      e = Math.max(e - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer), this._timer = setTimeout(_(this._performZoom, this), e), Ei(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;

      t._stop();

      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          n = e ? Math.ceil(n / e) * e : n,
          n = t._limitZoom(i + (0 < this._delta ? n : -n)) - i;
      this._delta = 0, this._startTime = null, n && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + n) : t.setZoomAround(this._lastMousePos, i + n));
    }
  });
  ji.addInitHook("addHandler", "scrollWheelZoom", _t), ji.mergeOptions({
    tap: ut && F,
    tapTolerance: 15
  });
  ot = mt.extend({
    addHooks: function addHooks() {
      xi(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      Pi(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      if (t.touches) {
        if (Zi(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
            t = i.target;
        this._startPos = this._newPos = new k(i.clientX, i.clientY), t.tagName && "a" === t.tagName.toLowerCase() && si(t, "leaflet-active"), this._holdTimeout = setTimeout(_(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), xi(document, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this);
      }
    },
    _onUp: function _onUp(t) {
      var i;
      clearTimeout(this._holdTimeout), Pi(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this), this._fireClick && t && t.changedTouches && ((t = (i = t.changedTouches[0]).target) && t.tagName && "a" === t.tagName.toLowerCase() && ri(t, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i));
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(t) {
      t = t.touches[0];
      this._newPos = new k(t.clientX, t.clientY), this._simulateEvent("mousemove", t);
    },
    _simulateEvent: function _simulateEvent(t, i) {
      var e = document.createEvent("MouseEvents");
      e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
    }
  });
  ji.addInitHook("addHandler", "tap", ot), ji.mergeOptions({
    touchZoom: xt && !nt,
    bounceAtZoomLimits: !0
  });
  F = mt.extend({
    addHooks: function addHooks() {
      si(this._map._container, "leaflet-touch-zoom"), xi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      ri(this._map._container, "leaflet-touch-zoom"), Pi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i,
          e,
          n = this._map;
      !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (i = n.mouseEventToContainerPoint(t.touches[0]), e = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(i.add(e)._divideBy(2))), this._startDist = i.distanceTo(e), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), xi(document, "touchmove", this._onTouchMove, this), xi(document, "touchend", this._onTouchEnd, this), Zi(t));
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]),
            o = e.distanceTo(n) / this._startDist;

        if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && 1 < o) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 == o) return;
        } else {
          n = e._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 == o && 0 === n.x && 0 === n.y) return;
          this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(n), this._zoom);
        }

        this._moved || (i._moveStart(!0, !1), this._moved = !0), z(this._animRequest);
        i = _(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = M(i, this, !0), Zi(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, z(this._animRequest), Pi(document, "touchmove", this._onTouchMove, this), Pi(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    }
  });
  ji.addInitHook("addHandler", "touchZoom", F), ji.BoxZoom = Z, ji.DoubleClickZoom = G, ji.Drag = K, ji.Keyboard = U, ji.ScrollWheelZoom = _t, ji.Tap = ot, ji.TouchZoom = F, t.version = "1.7.1", t.Control = Wi, t.control = pt, t.Browser = rt, t.Evented = E, t.Mixin = gt, t.Util = C, t.Class = S, t.Handler = mt, t.extend = h, t.bind = _, t.stamp = m, t.setOptions = c, t.DomEvent = ct, t.DomUtil = lt, t.PosAnimation = Di, t.Draggable = Xi, t.LineUtil = vt, t.PolyUtil = J, t.Point = k, t.point = A, t.Bounds = I, t.bounds = O, t.Transformation = V, t.transformation = q, t.Projection = at, t.LatLng = D, t.latLng = j, t.LatLngBounds = R, t.latLngBounds = N, t.CRS = W, t.GeoJSON = ye, t.geoJSON = Ce, t.geoJson = ht, t.Layer = ae, t.LayerGroup = he, t.layerGroup = function (t, i) {
    return new he(t, i);
  }, t.FeatureGroup = ue, t.featureGroup = function (t, i) {
    return new ue(t, i);
  }, t.ImageOverlay = Se, t.imageOverlay = function (t, i, e) {
    return new Se(t, i, e);
  }, t.VideoOverlay = Ze, t.videoOverlay = function (t, i, e) {
    return new Ze(t, i, e);
  }, t.SVGOverlay = Ee, t.svgOverlay = function (t, i, e) {
    return new Ee(t, i, e);
  }, t.DivOverlay = ke, t.Popup = Be, t.popup = function (t, i) {
    return new Be(t, i);
  }, t.Tooltip = Ae, t.tooltip = function (t, i) {
    return new Ae(t, i);
  }, t.Icon = le, t.icon = function (t) {
    return new le(t);
  }, t.DivIcon = Ie, t.divIcon = function (t) {
    return new Ie(t);
  }, t.Marker = de, t.marker = function (t, i) {
    return new de(t, i);
  }, t.TileLayer = Re, t.tileLayer = Ne, t.GridLayer = Oe, t.gridLayer = function (t) {
    return new Oe(t);
  }, t.SVG = Ve, t.svg = qe, t.Renderer = je, t.Canvas = We, t.canvas = He, t.Path = pe, t.CircleMarker = me, t.circleMarker = function (t, i) {
    return new me(t, i);
  }, t.Circle = fe, t.circle = function (t, i, e) {
    return new fe(t, i, e);
  }, t.Polyline = ge, t.polyline = function (t, i) {
    return new ge(t, i);
  }, t.Polygon = ve, t.polygon = function (t, i) {
    return new ve(t, i);
  }, t.Rectangle = Ge, t.rectangle = function (t, i) {
    return new Ge(t, i);
  }, t.Map = ji, t.map = function (t, i) {
    return new ji(t, i);
  };
  var Ke = window.L;
  t.noConflict = function () {
    return window.L = Ke, this;
  }, window.L = t;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableForTheEntirePeriod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableForTheEntirePeriod */ "./src/TableForTheEntirePeriod.js");
/* harmony import */ var _CountriesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountriesList */ "./src/CountriesList.js");
/* harmony import */ var _GlobalCases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalCases */ "./src/GlobalCases.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Graph */ "./src/Graph.js");
;





var tableListAll = document.querySelector('.tabs__item-all');
var tableList = document.querySelector('.table__list');
var tableItemLast = document.querySelector('.tabs__item-last');
var tableItem100Thousand = document.querySelector('.tabs__item-100');
var tableItemAbsolute = document.querySelector('.tabs__item-absolute');
var absolute = document.querySelector('.tabs__item-active-absolute');
var for100Thousand = document.querySelector('.tabs__item-active-100');
var countiesList = new _CountriesList__WEBPACK_IMPORTED_MODULE_3__.default();
var globalCases = new _GlobalCases__WEBPACK_IMPORTED_MODULE_4__.default();
var graph = new _Graph__WEBPACK_IMPORTED_MODULE_5__.default();
var table = new _TableForTheEntirePeriod__WEBPACK_IMPORTED_MODULE_2__.default();
countiesList.init();
globalCases.init();
graph.init();
table.viewData();
table.setEventBtnExpand();
tableListAll.addEventListener('click', function () {
  tableList.innerHTML = '';
  table.viewData();
  tableItemLast.classList.remove('active');
  tableListAll.classList.add('active');
});
tableItemLast.addEventListener('click', function () {
  tableList.innerHTML = '';
  table.viewDataLastDay();
  tableItemLast.classList.add('active');
  tableListAll.classList.remove('active');
  tableItem100Thousand.addEventListener('click', function () {
    tableList.innerHTML = '';
    table.viewDataFor100ThousandLast();
  });
});
tableItem100Thousand.addEventListener('click', function () {
  tableList.innerHTML = '';
  table.viewDataFor100ThousandAll();
  absolute.classList.remove('active');
  for100Thousand.classList.add('active');
});
tableItemAbsolute.addEventListener('click', function () {
  tableList.innerHTML = '';
  table.viewData();
  tableItemLast.classList.remove('active');
  tableListAll.classList.add('active');
  absolute.classList.add('active');
  for100Thousand.classList.remove('active');
});

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map