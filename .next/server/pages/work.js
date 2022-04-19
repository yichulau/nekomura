(function() {
var exports = {};
exports.id = "pages/work";
exports.ids = ["pages/work"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./assets/index.ts":
/*!*************************!*\
  !*** ./assets/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlLogo": function() { return /* reexport safe */ _logos_htmlLogo_png__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "htmlLogoHover": function() { return /* reexport safe */ _logos_htmlLogoHover_png__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "cssLogo": function() { return /* reexport safe */ _logos_cssLogo_png__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "cssLogoHover": function() { return /* reexport safe */ _logos_cssLogoHover_png__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "sassLogo": function() { return /* reexport safe */ _logos_sassLogo_png__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "sassLogoHover": function() { return /* reexport safe */ _logos_sassLogoHover_png__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "jsLogo": function() { return /* reexport safe */ _logos_jsLogo_png__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "jsLogoHover": function() { return /* reexport safe */ _logos_jsLogoHover_png__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "reactLogo": function() { return /* reexport safe */ _logos_reactLogo_png__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "reactLogoHover": function() { return /* reexport safe */ _logos_reactLogoHover_png__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "tsLogo": function() { return /* reexport safe */ _logos_tsLogo_png__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "tsLogoHover": function() { return /* reexport safe */ _logos_tsLogoHover_png__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "angularLogo": function() { return /* reexport safe */ _logos_angularLogo_png__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "angularLogoHover": function() { return /* reexport safe */ _logos_angularLogoHover_png__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "lessLogo": function() { return /* reexport safe */ _logos_lessLogo_png__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "lessLogoHover": function() { return /* reexport safe */ _logos_lessLogoHover_png__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "gmailLogo": function() { return /* reexport safe */ _logos_gmail_svg__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "gmailLogoHover": function() { return /* reexport safe */ _logos_gmailHover_svg__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "npmLogo": function() { return /* reexport safe */ _logos_npmLogo_png__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "npmLogoHover": function() { return /* reexport safe */ _logos_npmLogoHover_png__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "yarnLogo": function() { return /* reexport safe */ _logos_yarnLogo_png__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "yarnLogoHover": function() { return /* reexport safe */ _logos_yarnLogoHover_png__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "gitHubLogo": function() { return /* reexport safe */ _logos_github_svg__WEBPACK_IMPORTED_MODULE_22__.default; },
/* harmony export */   "gitHubLogoHover": function() { return /* reexport safe */ _logos_githubHover_svg__WEBPACK_IMPORTED_MODULE_23__.default; },
/* harmony export */   "gitLogo": function() { return /* reexport safe */ _logos_gitLogo_png__WEBPACK_IMPORTED_MODULE_24__.default; },
/* harmony export */   "gitLogoHover": function() { return /* reexport safe */ _logos_gitLogoHover_png__WEBPACK_IMPORTED_MODULE_25__.default; },
/* harmony export */   "jestLogo": function() { return /* reexport safe */ _logos_jestLogo_png__WEBPACK_IMPORTED_MODULE_26__.default; },
/* harmony export */   "jestLogoHover": function() { return /* reexport safe */ _logos_jestLogoHover_png__WEBPACK_IMPORTED_MODULE_27__.default; },
/* harmony export */   "linkedInLogo": function() { return /* reexport safe */ _logos_linkedin_svg__WEBPACK_IMPORTED_MODULE_28__.default; },
/* harmony export */   "linkedInLogoHover": function() { return /* reexport safe */ _logos_linkedinHover_svg__WEBPACK_IMPORTED_MODULE_29__.default; },
/* harmony export */   "mysqlLogo": function() { return /* reexport safe */ _logos_mysqlLogo_png__WEBPACK_IMPORTED_MODULE_30__.default; },
/* harmony export */   "mysqlLogoHover": function() { return /* reexport safe */ _logos_mysqlLogoHover_png__WEBPACK_IMPORTED_MODULE_31__.default; },
/* harmony export */   "pythonLogo": function() { return /* reexport safe */ _logos_pythonLogo_png__WEBPACK_IMPORTED_MODULE_32__.default; },
/* harmony export */   "pythonLogoHover": function() { return /* reexport safe */ _logos_pythonLogoHover_png__WEBPACK_IMPORTED_MODULE_33__.default; },
/* harmony export */   "vsLogo": function() { return /* reexport safe */ _logos_vsLogo_png__WEBPACK_IMPORTED_MODULE_34__.default; },
/* harmony export */   "vsLogoHover": function() { return /* reexport safe */ _logos_vsLogoHover_png__WEBPACK_IMPORTED_MODULE_35__.default; },
/* harmony export */   "affinityLogo": function() { return /* reexport safe */ _logos_affinityLogo_png__WEBPACK_IMPORTED_MODULE_36__.default; },
/* harmony export */   "affinityLogoHover": function() { return /* reexport safe */ _logos_affinityLogoHover_png__WEBPACK_IMPORTED_MODULE_37__.default; },
/* harmony export */   "davinciLogo": function() { return /* reexport safe */ _logos_davinciLogo_png__WEBPACK_IMPORTED_MODULE_38__.default; },
/* harmony export */   "davinciLogoHover": function() { return /* reexport safe */ _logos_davinciLogoHover_png__WEBPACK_IMPORTED_MODULE_39__.default; },
/* harmony export */   "windowsLogo": function() { return /* reexport safe */ _logos_windowsLogo_png__WEBPACK_IMPORTED_MODULE_40__.default; },
/* harmony export */   "windowsLogoHover": function() { return /* reexport safe */ _logos_windowsLogoHover_png__WEBPACK_IMPORTED_MODULE_41__.default; },
/* harmony export */   "linuxLogo": function() { return /* reexport safe */ _logos_linuxLogo_png__WEBPACK_IMPORTED_MODULE_42__.default; },
/* harmony export */   "linuxLogoHover": function() { return /* reexport safe */ _logos_linuxLogoHover_png__WEBPACK_IMPORTED_MODULE_43__.default; },
/* harmony export */   "nobleLogo": function() { return /* reexport safe */ _logos_nobleLogo_png__WEBPACK_IMPORTED_MODULE_44__.default; },
/* harmony export */   "waskoLogo": function() { return /* reexport safe */ _logos_waskoLogo_png__WEBPACK_IMPORTED_MODULE_45__.default; },
/* harmony export */   "usLogo": function() { return /* reexport safe */ _logos_usLogo_png__WEBPACK_IMPORTED_MODULE_46__.default; },
/* harmony export */   "cssTricksLogo": function() { return /* reexport safe */ _logos_cssTricksLogo_png__WEBPACK_IMPORTED_MODULE_47__.default; },
/* harmony export */   "belayTheCppLogo": function() { return /* reexport safe */ _logos_belayTheCppLogo_png__WEBPACK_IMPORTED_MODULE_48__.default; },
/* harmony export */   "bonoboPressLogo": function() { return /* reexport safe */ _logos_bonoboPressLogo_png__WEBPACK_IMPORTED_MODULE_49__.default; },
/* harmony export */   "dribbbleLogo": function() { return /* reexport safe */ _logos_dribbbleLogo_png__WEBPACK_IMPORTED_MODULE_50__.default; },
/* harmony export */   "freeCodeCampLogo": function() { return /* reexport safe */ _logos_freeCodeCampLogo_png__WEBPACK_IMPORTED_MODULE_51__.default; },
/* harmony export */   "hashnodeLogo": function() { return /* reexport safe */ _logos_hashnodeLogo_png__WEBPACK_IMPORTED_MODULE_52__.default; },
/* harmony export */   "sitePointLogo": function() { return /* reexport safe */ _logos_sitePointLogo_png__WEBPACK_IMPORTED_MODULE_53__.default; },
/* harmony export */   "profilePicture": function() { return /* reexport safe */ _nekomura_png__WEBPACK_IMPORTED_MODULE_54__.default; },
/* harmony export */   "chevronDown": function() { return /* reexport safe */ _chevronDown_svg__WEBPACK_IMPORTED_MODULE_55__.default; },
/* harmony export */   "posterCommission": function() { return /* reexport safe */ _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_56__.default; },
/* harmony export */   "logoCommission": function() { return /* reexport safe */ _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_57__.default; },
/* harmony export */   "comicCommission1": function() { return /* reexport safe */ _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_58__.default; },
/* harmony export */   "comicCommission2": function() { return /* reexport safe */ _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_59__.default; },
/* harmony export */   "schemeCommission": function() { return /* reexport safe */ _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_60__.default; },
/* harmony export */   "barcelonaSagradaPhoto": function() { return /* reexport safe */ _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_61__.default; },
/* harmony export */   "bowlingPhoto": function() { return /* reexport safe */ _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_62__.default; },
/* harmony export */   "climbingTopPhoto": function() { return /* reexport safe */ _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_63__.default; },
/* harmony export */   "cop24Photo": function() { return /* reexport safe */ _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_64__.default; },
/* harmony export */   "franceLaSalttePhoto": function() { return /* reexport safe */ _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_65__.default; },
/* harmony export */   "giewontPhoto": function() { return /* reexport safe */ _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_66__.default; },
/* harmony export */   "icelandWaterfallPhoto": function() { return /* reexport safe */ _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_67__.default; },
/* harmony export */   "londonArsenalPhoto": function() { return /* reexport safe */ _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_68__.default; },
/* harmony export */   "londonChelsea": function() { return /* reexport safe */ _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_69__.default; },
/* harmony export */   "londonTowerBridgePhoto": function() { return /* reexport safe */ _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_70__.default; },
/* harmony export */   "londonVictoryPhoto": function() { return /* reexport safe */ _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_71__.default; },
/* harmony export */   "manchesterUnitedPhoto": function() { return /* reexport safe */ _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_72__.default; },
/* harmony export */   "mazuryDawnPhoto": function() { return /* reexport safe */ _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_73__.default; },
/* harmony export */   "mclarenPhoto": function() { return /* reexport safe */ _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_74__.default; },
/* harmony export */   "notreDamePhoto": function() { return /* reexport safe */ _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_75__.default; },
/* harmony export */   "parisEiffelPhoto": function() { return /* reexport safe */ _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_76__.default; },
/* harmony export */   "playingIEMPhoto": function() { return /* reexport safe */ _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_77__.default; },
/* harmony export */   "rysiankaPhoto": function() { return /* reexport safe */ _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_78__.default; },
/* harmony export */   "skiSwissPhoto": function() { return /* reexport safe */ _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_79__.default; },
/* harmony export */   "sushiPhoto": function() { return /* reexport safe */ _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_80__.default; },
/* harmony export */   "swissMurrenPhoto": function() { return /* reexport safe */ _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_81__.default; },
/* harmony export */   "swissPizGloriaPhoto": function() { return /* reexport safe */ _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_82__.default; },
/* harmony export */   "walesPhoto": function() { return /* reexport safe */ _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_83__.default; },
/* harmony export */   "londonCanaryPhoto": function() { return /* reexport safe */ _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__.default; }
/* harmony export */ });
/* harmony import */ var _logos_htmlLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/htmlLogo.png */ "./assets/logos/htmlLogo.png");
/* harmony import */ var _logos_htmlLogoHover_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos/htmlLogoHover.png */ "./assets/logos/htmlLogoHover.png");
/* harmony import */ var _logos_cssLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/cssLogo.png */ "./assets/logos/cssLogo.png");
/* harmony import */ var _logos_cssLogoHover_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logos/cssLogoHover.png */ "./assets/logos/cssLogoHover.png");
/* harmony import */ var _logos_sassLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logos/sassLogo.png */ "./assets/logos/sassLogo.png");
/* harmony import */ var _logos_sassLogoHover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logos/sassLogoHover.png */ "./assets/logos/sassLogoHover.png");
/* harmony import */ var _logos_jsLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logos/jsLogo.png */ "./assets/logos/jsLogo.png");
/* harmony import */ var _logos_jsLogoHover_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logos/jsLogoHover.png */ "./assets/logos/jsLogoHover.png");
/* harmony import */ var _logos_reactLogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logos/reactLogo.png */ "./assets/logos/reactLogo.png");
/* harmony import */ var _logos_reactLogoHover_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logos/reactLogoHover.png */ "./assets/logos/reactLogoHover.png");
/* harmony import */ var _logos_tsLogo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logos/tsLogo.png */ "./assets/logos/tsLogo.png");
/* harmony import */ var _logos_tsLogoHover_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logos/tsLogoHover.png */ "./assets/logos/tsLogoHover.png");
/* harmony import */ var _logos_angularLogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logos/angularLogo.png */ "./assets/logos/angularLogo.png");
/* harmony import */ var _logos_angularLogoHover_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logos/angularLogoHover.png */ "./assets/logos/angularLogoHover.png");
/* harmony import */ var _logos_lessLogo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logos/lessLogo.png */ "./assets/logos/lessLogo.png");
/* harmony import */ var _logos_lessLogoHover_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logos/lessLogoHover.png */ "./assets/logos/lessLogoHover.png");
/* harmony import */ var _logos_gmail_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logos/gmail.svg */ "./assets/logos/gmail.svg");
/* harmony import */ var _logos_gmailHover_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logos/gmailHover.svg */ "./assets/logos/gmailHover.svg");
/* harmony import */ var _logos_npmLogo_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logos/npmLogo.png */ "./assets/logos/npmLogo.png");
/* harmony import */ var _logos_npmLogoHover_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logos/npmLogoHover.png */ "./assets/logos/npmLogoHover.png");
/* harmony import */ var _logos_yarnLogo_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logos/yarnLogo.png */ "./assets/logos/yarnLogo.png");
/* harmony import */ var _logos_yarnLogoHover_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logos/yarnLogoHover.png */ "./assets/logos/yarnLogoHover.png");
/* harmony import */ var _logos_github_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./logos/github.svg */ "./assets/logos/github.svg");
/* harmony import */ var _logos_githubHover_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./logos/githubHover.svg */ "./assets/logos/githubHover.svg");
/* harmony import */ var _logos_gitLogo_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logos/gitLogo.png */ "./assets/logos/gitLogo.png");
/* harmony import */ var _logos_gitLogoHover_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logos/gitLogoHover.png */ "./assets/logos/gitLogoHover.png");
/* harmony import */ var _logos_jestLogo_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./logos/jestLogo.png */ "./assets/logos/jestLogo.png");
/* harmony import */ var _logos_jestLogoHover_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logos/jestLogoHover.png */ "./assets/logos/jestLogoHover.png");
/* harmony import */ var _logos_linkedin_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./logos/linkedin.svg */ "./assets/logos/linkedin.svg");
/* harmony import */ var _logos_linkedinHover_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./logos/linkedinHover.svg */ "./assets/logos/linkedinHover.svg");
/* harmony import */ var _logos_mysqlLogo_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./logos/mysqlLogo.png */ "./assets/logos/mysqlLogo.png");
/* harmony import */ var _logos_mysqlLogoHover_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./logos/mysqlLogoHover.png */ "./assets/logos/mysqlLogoHover.png");
/* harmony import */ var _logos_pythonLogo_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./logos/pythonLogo.png */ "./assets/logos/pythonLogo.png");
/* harmony import */ var _logos_pythonLogoHover_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logos/pythonLogoHover.png */ "./assets/logos/pythonLogoHover.png");
/* harmony import */ var _logos_vsLogo_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./logos/vsLogo.png */ "./assets/logos/vsLogo.png");
/* harmony import */ var _logos_vsLogoHover_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./logos/vsLogoHover.png */ "./assets/logos/vsLogoHover.png");
/* harmony import */ var _logos_affinityLogo_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./logos/affinityLogo.png */ "./assets/logos/affinityLogo.png");
/* harmony import */ var _logos_affinityLogoHover_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./logos/affinityLogoHover.png */ "./assets/logos/affinityLogoHover.png");
/* harmony import */ var _logos_davinciLogo_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./logos/davinciLogo.png */ "./assets/logos/davinciLogo.png");
/* harmony import */ var _logos_davinciLogoHover_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./logos/davinciLogoHover.png */ "./assets/logos/davinciLogoHover.png");
/* harmony import */ var _logos_windowsLogo_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./logos/windowsLogo.png */ "./assets/logos/windowsLogo.png");
/* harmony import */ var _logos_windowsLogoHover_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./logos/windowsLogoHover.png */ "./assets/logos/windowsLogoHover.png");
/* harmony import */ var _logos_linuxLogo_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./logos/linuxLogo.png */ "./assets/logos/linuxLogo.png");
/* harmony import */ var _logos_linuxLogoHover_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./logos/linuxLogoHover.png */ "./assets/logos/linuxLogoHover.png");
/* harmony import */ var _logos_nobleLogo_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./logos/nobleLogo.png */ "./assets/logos/nobleLogo.png");
/* harmony import */ var _logos_waskoLogo_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./logos/waskoLogo.png */ "./assets/logos/waskoLogo.png");
/* harmony import */ var _logos_usLogo_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./logos/usLogo.png */ "./assets/logos/usLogo.png");
/* harmony import */ var _logos_cssTricksLogo_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./logos/cssTricksLogo.png */ "./assets/logos/cssTricksLogo.png");
/* harmony import */ var _logos_belayTheCppLogo_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./logos/belayTheCppLogo.png */ "./assets/logos/belayTheCppLogo.png");
/* harmony import */ var _logos_bonoboPressLogo_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./logos/bonoboPressLogo.png */ "./assets/logos/bonoboPressLogo.png");
/* harmony import */ var _logos_dribbbleLogo_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./logos/dribbbleLogo.png */ "./assets/logos/dribbbleLogo.png");
/* harmony import */ var _logos_freeCodeCampLogo_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./logos/freeCodeCampLogo.png */ "./assets/logos/freeCodeCampLogo.png");
/* harmony import */ var _logos_hashnodeLogo_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./logos/hashnodeLogo.png */ "./assets/logos/hashnodeLogo.png");
/* harmony import */ var _logos_sitePointLogo_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./logos/sitePointLogo.png */ "./assets/logos/sitePointLogo.png");
/* harmony import */ var _nekomura_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./nekomura.png */ "./assets/nekomura.png");
/* harmony import */ var _chevronDown_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./chevronDown.svg */ "./assets/chevronDown.svg");
/* harmony import */ var _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./graphiccommissions/posterCommison.png */ "./assets/graphiccommissions/posterCommison.png");
/* harmony import */ var _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./graphiccommissions/logoCommission.png */ "./assets/graphiccommissions/logoCommission.png");
/* harmony import */ var _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./graphiccommissions/comicCommission1.png */ "./assets/graphiccommissions/comicCommission1.png");
/* harmony import */ var _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./graphiccommissions/comicCommission2.png */ "./assets/graphiccommissions/comicCommission2.png");
/* harmony import */ var _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./graphiccommissions/schemeCommission.png */ "./assets/graphiccommissions/schemeCommission.png");
/* harmony import */ var _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./photos/barcelonaSagradaPhoto.png */ "./assets/photos/barcelonaSagradaPhoto.png");
/* harmony import */ var _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./photos/bowlingPhoto.png */ "./assets/photos/bowlingPhoto.png");
/* harmony import */ var _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./photos/climbingTopPhoto.png */ "./assets/photos/climbingTopPhoto.png");
/* harmony import */ var _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./photos/cop24Photo.png */ "./assets/photos/cop24Photo.png");
/* harmony import */ var _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./photos/franceLaSalettePhoto.png */ "./assets/photos/franceLaSalettePhoto.png");
/* harmony import */ var _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./photos/giewontPhoto.png */ "./assets/photos/giewontPhoto.png");
/* harmony import */ var _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./photos/icelandWaterfallPhoto.png */ "./assets/photos/icelandWaterfallPhoto.png");
/* harmony import */ var _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./photos/londonArsenalPhoto.png */ "./assets/photos/londonArsenalPhoto.png");
/* harmony import */ var _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./photos/londonChelseaPhoto.png */ "./assets/photos/londonChelseaPhoto.png");
/* harmony import */ var _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./photos/londonTowerBridgePhoto.png */ "./assets/photos/londonTowerBridgePhoto.png");
/* harmony import */ var _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./photos/londonVictoriaPhoto.png */ "./assets/photos/londonVictoriaPhoto.png");
/* harmony import */ var _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./photos/manchesterUnitedPhoto.png */ "./assets/photos/manchesterUnitedPhoto.png");
/* harmony import */ var _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./photos/mazuryDownPhoto.png */ "./assets/photos/mazuryDownPhoto.png");
/* harmony import */ var _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./photos/mclarenPhoto.png */ "./assets/photos/mclarenPhoto.png");
/* harmony import */ var _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./photos/notreDamePhoto.png */ "./assets/photos/notreDamePhoto.png");
/* harmony import */ var _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./photos/parisEiffelPhoto.png */ "./assets/photos/parisEiffelPhoto.png");
/* harmony import */ var _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./photos/playingIEMPhoto.png */ "./assets/photos/playingIEMPhoto.png");
/* harmony import */ var _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./photos/rysiankaPhoto.png */ "./assets/photos/rysiankaPhoto.png");
/* harmony import */ var _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./photos/skiSwissPhoto.png */ "./assets/photos/skiSwissPhoto.png");
/* harmony import */ var _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./photos/sushiPhoto.png */ "./assets/photos/sushiPhoto.png");
/* harmony import */ var _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./photos/swissMurrenPhoto.png */ "./assets/photos/swissMurrenPhoto.png");
/* harmony import */ var _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./photos/swissPizGloriaPhoto.png */ "./assets/photos/swissPizGloriaPhoto.png");
/* harmony import */ var _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./photos/walesPhoto.png */ "./assets/photos/walesPhoto.png");
/* harmony import */ var _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./photos/londonCanaryPhoto.png */ "./assets/photos/londonCanaryPhoto.png");






















































































/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/work/index.ts":
/*!*****************************!*\
  !*** ./pages/work/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _work__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./pages/work/work.tsx");


/***/ }),

/***/ "./pages/work/work.tsx":
/*!*****************************!*\
  !*** ./pages/work/work.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VWork; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work.module.scss */ "./pages/work/work.module.scss");
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_work_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\pages\\work\\work.tsx";




function VWork() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_4___default().workContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Work history"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Karolina Hudziec Portfolio Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "author",
        content: "Karolina Hudziec"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Karolina, Hudziec, Portfolio, Frontend"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico?",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_3__.VFooter, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/about/index.ts":
/*!******************************!*\
  !*** ./utils/about/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPhotoGrid": function() { return /* reexport safe */ _photogrid__WEBPACK_IMPORTED_MODULE_0__.VPhotoGrid; }
/* harmony export */ });
/* harmony import */ var _photogrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photogrid */ "./utils/about/photogrid.tsx");


/***/ }),

/***/ "./utils/about/photogrid.tsx":
/*!***********************************!*\
  !*** ./utils/about/photogrid.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPhotoGrid": function() { return /* binding */ VPhotoGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./utils/index.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photogrid.module.scss */ "./utils/about/photogrid.module.scss");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\about\\photogrid.tsx";





function VPhotoGrid() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoGrid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().barca),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Sagrada Familia, Barcelona', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Sagrada Familia",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.barcelonaSagradaPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bridge),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Tower Bridge, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 09.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Tower Bridge",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonTowerBridgePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().climb),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Comic Con, Warsaw', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 10.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of climbing Karolina",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.climbingTopPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().eiffel),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Eiffel Tower, Paris', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Eiffel Tower",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.parisEiffelPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().murren),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Mürren, Switzerland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Murren",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.swissMurrenPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().church),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Notre-Dame, Paris', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Notre-Dame",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.notreDamePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().alps),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: La Salette-Fallavaux, France', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Alps in La Salette-Fallavaux",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.franceLaSalttePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wales),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Cardiff, Wales', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Cardiff",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.walesPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chelsea),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Stamford Bridge, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Stamford Bridge",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonChelsea,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().arsenal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Emirates Stadium, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Emirates Stadium",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonArsenalPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().manchester),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Old Trafford, Manchester', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Old Trafford",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.manchesterUnitedPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bowling),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Bowling Club, Żywiec', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 07.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina bowling",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.bowlingPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cross),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Giewont 1895 m MSL, Zakopane', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 04.021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of climbing on Giewont in winter",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.giewontPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().waterfall),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Selijalandsfoss, Iceland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2017', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of waterfall in Selijalandsfoss",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.icelandWaterfallPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().boots),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Rysianka 1290 m MSL, Beskid Żywiecki', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 06.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of mountains seen from Rysianka",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.rysiankaPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sushi),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Momo Cafe, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 10.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of sushi",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.sushiPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().monument),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Victoria Memorial, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 07.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Victoria Memorial",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonVictoryPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().lake),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Tajty Lake, Wilkasy', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 05.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of lake",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mazuryDawnPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().skyscrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Canary Wharf, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Canary Wharf",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonCanaryPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().car),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: McLaren, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 06.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Formula One car",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mclarenPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ski),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Eiger, Switzerland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina skiing",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.skiSwissPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Intel Extreme Masters, Katowice', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 03.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina plaing game",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.playingIEMPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
} //TO-DO refactoring of VPhotoGrid

/***/ }),

/***/ "./utils/date.ts":
/*!***********************!*\
  !*** ./utils/date.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": function() { return /* binding */ getDate; }
/* harmony export */ });
function getDate() {
  const date = new Date();
  const year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  if (day.length === 1) day = '0' + day;
  if (month.length === 1) month = '0' + month;
  return `${day}.${month}.${year}`;
}

/***/ }),

/***/ "./utils/footer.tsx":
/*!**************************!*\
  !*** ./utils/footer.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VFooter": function() { return /* binding */ VFooter; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./utils/icon.tsx");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ "./assets/index.ts");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.scss */ "./utils/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\footer.tsx";



function VFooter() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().goUpSquare)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().copyrights),
      children: ["\xA92021", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), "Build with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Next.js/TypeSript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 20
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.linkedInLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.linkedInLogoHover,
        href: "https://www.linkedin.com/in/karolina-hudziec-0b2ba815a",
        height: "30px",
        width: "30px",
        name: "LinkedIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gmailLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gmailLogoHover,
        href: "mailto:khudziec@gmail.com",
        height: "30px",
        width: "30px",
        name: "Gmail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gitHubLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gitHubLogoHover,
        href: "https://github.com/FutureInventor",
        height: "30px",
        width: "30px",
        name: "GitHub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/home/index.ts":
/*!*****************************!*\
  !*** ./utils/home/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMainHeader": function() { return /* reexport safe */ _mainheader__WEBPACK_IMPORTED_MODULE_0__.VMainHeader; },
/* harmony export */   "VToolsTech": function() { return /* reexport safe */ _toolstech__WEBPACK_IMPORTED_MODULE_1__.VToolsTech; }
/* harmony export */ });
/* harmony import */ var _mainheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainheader */ "./utils/home/mainheader.tsx");
/* harmony import */ var _toolstech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolstech */ "./utils/home/toolstech.tsx");



/***/ }),

/***/ "./utils/home/mainheader.tsx":
/*!***********************************!*\
  !*** ./utils/home/mainheader.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMainHeader": function() { return /* binding */ VMainHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainheader.module.scss */ "./utils/home/mainheader.module.scss");
/* harmony import */ var _mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typingtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typingtext */ "./utils/typingtext.tsx");

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\home\\mainheader.tsx";



function VMainHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aboutInfo),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [(0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("Welcome Everyone!", 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("We are Nekomura", 50, 200)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: (_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().desctxt),
      children: (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("One afternoon, I was helping a Chinese film with artistic creation. I was asked to revise the manuscript again and again. The inner sense of tearing and helplessness flooded into my heart again. It was not the first time I planned to escape from this damned living situation and find a comfortable job to end this spiritual life at the mercy of others.", 30, 350)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/home/toolstech.tsx":
/*!**********************************!*\
  !*** ./utils/home/toolstech.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VToolsTech": function() { return /* binding */ VToolsTech; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./utils/icon.tsx");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolstech.module.scss */ "./utils/home/toolstech.module.scss");
/* harmony import */ var _toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\home\\toolstech.tsx";




function VToolsTech() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIcons),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.htmlLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.htmlLogoHover,
        height: "46px",
        width: "46px",
        name: "HTML",
        tooltipID: "html-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.cssLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.cssLogoHover,
        height: "65px",
        width: "65px",
        name: "CSS",
        tooltipID: "css-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jsLogoHover,
        height: "55px",
        width: "55px",
        name: "JavaScript",
        tooltipID: "js-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactLogoHover,
        height: "55px",
        width: "55px",
        name: "React",
        tooltipID: "react-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.angularLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.angularLogoHover,
        height: "50px",
        width: "50px",
        name: "Angular",
        tooltipID: "angular-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.tsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.tsLogoHover,
        height: "65px",
        width: "65px",
        name: "TypeScript",
        tooltipID: "ts-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.sassLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.sassLogoHover,
        height: "60px",
        width: "60px",
        name: "Sass",
        tooltipID: "sass-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.lessLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.lessLogoHover,
        height: "65px",
        width: "65px",
        name: "Less",
        tooltipID: "less-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.npmLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.npmLogoHover,
        height: "65px",
        width: "65px",
        name: "Node Package Manager",
        tooltipID: "npm-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.yarnLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.yarnLogoHover,
        height: "65px",
        width: "65px",
        name: "yarn",
        tooltipID: "yarn-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.gitLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.gitLogoHover,
        height: "65px",
        width: "65px",
        name: "Git",
        tooltipID: "git-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jestLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jestLogoHover,
        height: "50px",
        width: "50px",
        name: "Jest",
        tooltipID: "jest-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.mysqlLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.mysqlLogoHover,
        height: "70px",
        width: "70px",
        name: "MySQL",
        tooltipID: "mysql-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.pythonLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.pythonLogoHover,
        height: "55px",
        width: "55px",
        name: "Python",
        tooltipID: "python-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.vsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.vsLogoHover,
        height: "50px",
        width: "50px",
        name: "Visual Studio Code",
        tooltipID: "vs-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.affinityLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.affinityLogoHover,
        height: "50px",
        width: "50px",
        name: "Affinity",
        tooltipID: "affinity-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.davinciLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.davinciLogoHover,
        height: "50px",
        width: "50px",
        name: "DaVinci Resolve",
        tooltipID: "davinci-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.windowsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.windowsLogoHover,
        height: "50px",
        width: "50px",
        name: "Windows 10",
        tooltipID: "windows-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.linuxLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.linuxLogoHover,
        height: "50px",
        width: "50px",
        name: "Ubuntu Linx",
        tooltipID: "linux-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/icon.tsx":
/*!************************!*\
  !*** ./utils/icon.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIcon": function() { return /* binding */ VIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.module.scss */ "./utils/icon.module.scss");
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\icon.tsx";




function VIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    "data-tip": props.tooltipID ? true : false,
    "data-for": props.tooltipID,
    href: props.href,
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),
    style: {
      height: props.height,
      width: props.width
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconActive),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        alt: `On hover ${props.name} icon.`,
        src: props.onHoverIcon,
        width: props.width,
        height: props.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), props.tooltipID && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: props.tooltipID,
      type: "light",
      effect: "solid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        alt: `Default ${props.name} icon.`,
        src: props.defaulIcon,
        width: props.width,
        height: props.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./utils/date.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _date__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _date__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./utils/footer.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footer__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _footer__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./utils/icon.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _icon__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menubar */ "./utils/menubar.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menubar__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _menubar__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _typingtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typingtext */ "./utils/typingtext.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _typingtext__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _typingtext__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./utils/about/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _about__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _about__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./utils/home/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _home__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work */ "./utils/work/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _work__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _work__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./utils/menubar.tsx":
/*!***************************!*\
  !*** ./utils/menubar.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMenuBar": function() { return /* binding */ VMenuBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menubar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menubar.module.scss */ "./utils/menubar.module.scss");
/* harmony import */ var _menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\menubar.tsx";


function VMenuBar(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menuBar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().squareInitials),
          children: "Neko"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: "Nekomura"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tab),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          style: props.activeTab === "Home" ? {
            color: "#E76161"
          } : {
            color: "#D5D5D5"
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/about`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tab),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          style: props.activeTab === "About" ? {
            color: "#E76161"
          } : {
            color: "#D5D5D5"
          },
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/typingtext.tsx":
/*!******************************!*\
  !*** ./utils/typingtext.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTypedText": function() { return /* binding */ useTypedText; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTypedText(text, speed, delayTime) {
  const [textState, setTextState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const chars = text.split("");
  let interval = speed;
  if (textState.length === 0 && delayTime) interval = speed + delayTime;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const timer = setTimeout(() => {
      setTextState(prevText => {
        if (prevText.length !== chars.length) {
          const newText = prevText.concat(chars[prevText.length]);
          return newText;
        }

        return prevText;
      });
    }, interval);
    return () => clearTimeout(timer);
  });
  return textState;
}

/***/ }),

/***/ "./utils/work/index.ts":
/*!*****************************!*\
  !*** ./utils/work/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VTimelineGrid": function() { return /* reexport safe */ _timelinegrid__WEBPACK_IMPORTED_MODULE_0__.VTimelineGrid; }
/* harmony export */ });
/* harmony import */ var _timelinegrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timelinegrid */ "./utils/work/timelinegrid.tsx");


/***/ }),

/***/ "./utils/work/timelinegrid.tsx":
/*!*************************************!*\
  !*** ./utils/work/timelinegrid.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VTimelineGrid": function() { return /* binding */ VTimelineGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date */ "./utils/date.ts");
/* harmony import */ var _timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timelinegrid.module.scss */ "./utils/work/timelinegrid.module.scss");
/* harmony import */ var _timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\work\\timelinegrid.tsx";




function VTimelineGrid() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGrid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "2016"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelinePoint)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hoverTip),
        children: "Hover to zoom."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "University of Silesia logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.usLogo,
              height: 50,
              width: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Uniwersytet \u015Al\u0105ski"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Katowice"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "10.2015 - 03.2019"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Modules included:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 30
          }, this), "1st Year: Mathematical Analysis, Basic Course of C++ Programming Language.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 87
          }, this), "2nd Year: Operating Systems, Computer Networks.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 60
          }, this), "3rd Year: Advanced Course of C++ Programming Language, Using C# to Design Graphic Applications, The Basics of Building of Neural Network.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 89
          }, this), "4th Year: Computer Simulation Methods, Oracle Databases.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 69
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "03.2019 - 03.2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Working & learning Web Development in London"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "Wasko company logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.waskoLogo,
              height: 13,
              width: 55
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Wasko"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Gliwice"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "08.2020 - 10.2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Building on my own a responsive web application, which had a catalogue of all company's servers, displayed in the tree structure. Server's data was taken and parsed from XML file to JSON. Anyone logged could browse through lists of servers. Search and sort by name function were applied. App had system of accounts as well. Admins, technical and user ones. Admins could manage accounts by editing them, deleting and authorize (every new user had to be authorized by admin). Admins could also see what user is logged at the moment.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 51
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), "Main responsibilities:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 35
          }, this), "- designing both frontend and backend side of the app,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 67
          }, this), "- creating an asynchronous communication between client and server via ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "REST API"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 84
          }, this), ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 100
          }, this), "- setting up server with database.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 47
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), "Languages: JavaScript, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 36
          }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "PHP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 50
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 61
          }, this), "Database: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "MySQL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 23
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 36
          }, this), "Styling: Ant Design UI, CSS.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 41
          }, this), "Version Control System: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "GitHub."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 37
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 51
          }, this), "Issue trancing: Trello."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            style: {
              backgroundColor: "#0E2245"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "Noble Systems company logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.nobleLogo,
              height: 50,
              width: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Noble Systems"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Krak\xF3w"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "10.2020 - 09.2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 123
          }, this), "- making new, answering, and holding calls (conferences as well),", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 78
          }, this), "- contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 131
          }, this), "- history of calls with summarized data,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 53
          }, this), "- voicemail and DTMF sending,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 42
          }, this), "- account and phone input/output audio settings.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 61
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), "My main responsibilities on the front-end side of the project:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 75
          }, this), "-working collaboratively in team environment, resolving conflicts,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 79
          }, this), "-writing a clean and high-quality codebase,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 56
          }, this), "-refactoring of codebase,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 38
          }, this), "-writing the documentation,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 40
          }, this), "-implementation of the functionalities from the documentation, given previously by PM,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 99
          }, this), "-creating responsive, accessible and efficient web views, based on previously given mockups,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 105
          }, this), "-reviewing pull requests of my less experienced peers, and helping them with styling/creating components,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 118
          }, this), "-writing efficient unit tests.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 43
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), "Achievements I am most proud of:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 45
          }, this), "-building a 'light' version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 160
          }, this), "-helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 118
          }, this), "-creating documentation with code standards of codebase of our project,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 84
          }, this), "-implementing CSS modules into our main project, which improved team workflow noticeably,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 102
          }, this), "-constructing complete translation system which let the user to change language of application (if not chosen, language was detected automatically).", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), "Agile management: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Scrum, Agile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 31
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 51
          }, this), "Version control system: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Azure DevOps, Bitbucket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 37
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 68
          }, this), "Issue tracking tool: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Jira, Trelllo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 34
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 55
          }, this), "Knowledge repository: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Confluence"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 35
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 53
          }, this), "Styling: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "SCSS, LESS, Semantic UI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 22
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 53
          }, this), "Testing: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "React Testing Library, JEST"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 22
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 57
          }, this), "Communication tool: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Microsoft Teams, Zoom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 33
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelinePoint)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./assets/chevronDown.svg":
/*!********************************!*\
  !*** ./assets/chevronDown.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/chevronDown.ddade2f1de63bb6b2de521901ae318fc.svg","height":1440,"width":2560});

/***/ }),

/***/ "./assets/graphiccommissions/comicCommission1.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/comicCommission1.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/comicCommission1.c12af260b4864f9b8bb8d8a929be2ec2.png","height":500,"width":688,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAApklEQVR42mP4BwX/IeAfGEMBSJgBKvnvxd2r/y8e2PjvwNYN/66dPw1XzABifXj76t+e9Yv/L+kv/b9jRvX/5e3Z/7esmvMfBBjevHjyb1qF17/e1vL/01rT/82tTv03qyL+/4op5f//gqx4+fTBv5mNcf96gRILu7L/LZva8G9afdy/7cunQKz4+/fvv2/fvv37+vXL/+9A+vu3r/++fvkMYoOtAAD5CKP/BfeuwQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/graphiccommissions/comicCommission2.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/comicCommission2.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/comicCommission2.5a7de9ba4e9223f3cc27ebb594a9c5dc.png","height":500,"width":680,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42m2KTwsBYRjEnw/h8/garm5Krg6OrlIu5CApxSonF8W2ByQHHNi0Ww7rsrKb1b7b61/aZ3hrj341M8005HsXDFtNyEjgH7RczLmdIUQiVJ3fzxfbWwuBf8ND3pmCwwrjbArCsSDFFebaQjWdQ69Ug67poM9vDI87yLMDxaQ7QqOQx8aYYVDRQABYiZM8mXvu1+vcKZbZ0KZMrIjj5KIMDI7h2jY818MXBWGou7wdTyAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/logoCommission.png":
/*!******************************************************!*\
  !*** ./assets/graphiccommissions/logoCommission.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/logoCommission.b9ee736e17568c3871c3ff3dd147d2df.png","height":500,"width":889,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfUlEQVR42mNgYGT8z8LA8J9BTfW/l1vkv0jvtH8aZm7/GRgY/jOzcvxjYGJkBnPUXYL+Zala/0u3cP3H5ur5jwmkiZnlHwMDBydYQUpWwb/s5tZ/RfXt/7ITi/6BxNi4+P4xMLCygRU4ewb8145P+OekbP8vWCMAooCR/R8Ap0Euuplr2ZcAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/posterCommison.png":
/*!******************************************************!*\
  !*** ./assets/graphiccommissions/posterCommison.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/posterCommison.cb239c457d6fa3cb371b05a35dd59fd0.png","height":500,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyElEQVR42hXKv0pCYRjA4d/7eeykHiinDlIIFZRjY4PQVbR0Nd1BW2s1uBQ06aqDODiI4xnUUQQV8e/Hdzz6qvPzyO/fv/qZLC4GVHDOoihe6aGo69mM6aROrAZnE3Jph8d8QL7Xkptii1TwqFH6i8Qh5vriQ3LZkHwYEhR88d2rLBMw/UVZ36YvtKMnzHiht5eBPt+dINpLo9blvWIYRVeiw41kVuCdrZtKtSmdkvDpHXewpXBfFqn8fKtNDLttjPjnpIC9tRwA3WZPtOknY+YAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/schemeCommission.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/schemeCommission.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/schemeCommission.8b38fe5a3f756bb9316dd95d3580e57b.png","height":500,"width":846,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAgklEQVR42iWNSwrCQBBE5/6HcaErQQW3gkt/4MKNkhAxMJ+eztBTbTpTUFAUD57TFpRSwMywbUfOBBGBqyIKAGPXI4WIBWbW7/sDqRWOYlRKEd3tgefhCEoJFLzet3v4YWiA9XU+4bpeIfqAMP70stvMQK/OfKZhSqhVmmKalDOZWf+GRpiwoi8hQQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/affinityLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/affinityLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/affinityLogo.1a5b4d86a2a2ddb4c13fe7dd52f124b6.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAgUlEQVR42g3HIQ8BcQDG4fc/Np9BFCXVx1AExSewmyAoEttVRDfVFMEmUJhRJMHvzb7C3S7drtw97ZEDou07O1qIIDctxpScvKGe3LC48fCVl3tIFkP/veBDwsESfResCcz4cfFAzvgSe8nEW895ioQpR86snJL7LYsOESP2xER0K60EUVEf3jeTAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/affinityLogoHover.png":
/*!********************************************!*\
  !*** ./assets/logos/affinityLogoHover.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/affinityLogoHover.4bd7c306503126cb7aa7d8624a3277e5.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42jWNoQoCURBF5+GC32A0mqx+hsVgkXldxGCwmBSsanSxisUgGLQoosVk8ANsu1UxiWXPLG8fHO7MnTtvJPXeJaoCFeoTukxVy8FzQhOFpgN/2BKcJ94LRDYoERI4Up/hQH1F62IvbLfYeqEjuEMM6yLQYPhDZ+DYHqBPdI/ftMCH5oFOMcbc7VIvYIh/sdsx9DE2DHfoBN54X7gJW0YVs0egDav8N+tVaxlhSoKjXYCOigAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/angularLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/angularLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/angularLogo.ac9c31b485bfec368258dc46558c6143.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcElEQVR42g3Guw2DUBAF0VsDVdADsmRnboCY3M7cAantFmiDTw2kc0sgI3jkSMvqSKOR5ZqeLfXUljxwEoxMhE8P8kLk3v3IBov4Ecx80uzwV7wJWm6pJfwSHbufHJTsTicq/hQilbxKJBpWr26QdQGnq1pGr4FGCwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/angularLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/angularLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/angularLogoHover.0060a73c27fd4d7aec1cff7767467517.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR4nBWPMQrCQBBFZ/AAgpVH8A5WNtETiIKQDdilEbTyADZBsLCMhSCIXkCSws47eAJj6wFk8/7Ay/w/+3c3600IRg2i2dzdl2izGEv81dzfCpwwKeMOPMBhAn82nBWoolnCQCsjNfzTEVTtnxAKxAYqqEGVEBjTC52Qs+OImXLkF61/6PO9E8oVSDF7WESzGz2yMENf6Gtd0UNsGegFXVD9oISdN1nGnmgEhgwOXCO/wr9Q1gIbajr+fLEYLgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/belayTheCppLogo.png":
/*!******************************************!*\
  !*** ./assets/logos/belayTheCppLogo.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/belayTheCppLogo.00bc7af51070ab4848446c523a5046cf.png","height":245,"width":540,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiElEQVR4nGM0MNT5zyJu+N/OQInx+OEd/z98/sHAwc7GwAgE////Z2C08Y7+b+4Y9J+D6R8j88cr/799/87w9etXBi4uLsYP798zMFZU1fz/xSj0f/a+m4whWn/+c7CzM1y4fJmBhYWF4f+/fwyMkdGR/7l4RP4fPnaMkYsdaCYDE8h4BiAAEwB6ejMbEcMQSAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/bonoboPressLogo.png":
/*!******************************************!*\
  !*** ./assets/logos/bonoboPressLogo.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/bonoboPressLogo.71c8803aa8a801194570cf81f78e4d43.png","height":90,"width":485,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGklEQVR42mNw+xf7v/Vf3b/6/8X/Gv/F/QcAXa4La+AF30gAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/cssLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/cssLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssLogo.01cdfcf1a8b686cc276eb7d2bd5d3b4b.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42m3NsQ1AUBRGYbGMORQ6UdLTibwNRNSi1JlBTSQKM5yfxA5iBcVt3ym/5gSeKICDU49yg5qLTo4dZ5Byq1XGRGEQs6hXw0xiEPEyMOojMgip2FhVKvQ8fxhXMB9Ty7GNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/cssLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/cssLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssLogoHover.7a497b7c230be08b2dae84287ecc5c0c.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqUlEQVR4nEWMMQ4BURCG/9k4hBtolVqVhpZ2n1K4ASfQOYCoJLutUqfQi8oFbELhBsY3T8Qk8+bNNzOfNSkpwt15/2FkELuXZTQTmpXMHrCWubepS1htDQsMZhjm1ErSC92IowP/TTYwGALXkvbkhRywcMJQZQOfPnBBXk16UruwsB2zAdgBnDFtgQW2KawHu+UFoiATcEyFq+bZcfD+LXzDLGwIGEfQfwBPdD0+3ph26wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/cssTricksLogo.png":
/*!****************************************!*\
  !*** ./assets/logos/cssTricksLogo.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssTricksLogo.6bfdf0d30faf2b1732670be2b92ed34f.png","height":64,"width":374,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGElEQVR42mOo/1fxv+l/0f/6/w1AOvMfAGKfC8ygt849AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/davinciLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/davinciLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/davinciLogo.b988a4089825ceedbfecdc94857a1cea.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3HsQ2DQBAF0S9Ouj5I3QUBGcIOCI0IsXtwDwSkphlq+FPPsiJ5mpHk6qcHD7yo3LvwYGNLF6o80VIJR9p6Em/k4t07hTx55Ofw4b8jaxQdJ+EP3/SkEw2rZ8tKVxpJLu5zZnoX6wILUUhF6jUwGQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/davinciLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/davinciLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/davinciLogoHover.016450629e35cefdcbb37001c023e314.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvElEQVR4nBWNMQrCUAyGE5UKnkDwDi7i6KCbi5OLUOEV6eDmBUTECzi5FFwUvIGji6O4eAdbTyAolPRL4CN5//+/RIsQxEQiFRnTS6GYG6Z6VbO/ByK0GTwgBa8M+nDRPIQpP56i+hazH1t8Q5PWYe75hhjzjFA3sz2dp66YS4KxByYoXYQd3hH4KAvMNf2lRZIMMbcIA4QlMMqB1J1NGw/UuJ0ifDFO4DUn1aJnmofABfX7I4Q2eH3gBmUFeAJDiFeeis0AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/dribbbleLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/dribbbleLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/dribbbleLogo.842ea519d64368ec4238d8a8568a7aac.png","height":94,"width":251,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR4nB3KsQ3AIBAEwTveIiWlBMv9t2PXQECA4OGMyFbaoaQ154JZgLtzt0ggxoj9cMD7fiilcIyB3rvcJ5/nVs75ANVa0VpDCIbrsg2cZqaUEn80UDTzUkRJdgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/freeCodeCampLogo.png":
/*!*******************************************!*\
  !*** ./assets/logos/freeCodeCampLogo.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/freeCodeCampLogo.31df15002b4d3c4bd78d9a22367b8587.png","height":82,"width":504,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nAVAsQ0AMAiCxbV+59T/nxAwnPnufthdVBWTgGRsQxIP20cPMjwQJUUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/gitLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/gitLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gitLogo.fd7bec1d86f01f442e3ea1bb2f19ac71.png","height":367,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42jWMQQoBYQBGvyIbMyVKKY7gAk7iMG7gEDaSrQOwtmPx3nZKFo4gpUbTn937Xn0vCf3EFctCoZdYceLtLLFTTvmwYWvrOAkTG1vurNn5dBSGXm05s/fCzSrdzxdHDn4d/KO1DQ/qsmKn5iwK/QAHGDwSfXf7wwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/gitLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/gitLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gitLogoHover.d8f817705b656fce96889a1c7398aa66.png","height":367,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlUlEQVR42mMAgecJCSxgOjHRCsjWBbGfAcVgksxQSR4g3giU+A4Uk4QrgkqKATk/gbgGKNkN5P8HYiEGqCphIOcekP4PlLwApCOeJSbOB9KPgViAASjIDVRwAqQAiPcC8RIgfx+QPg+keWBWsAAVPgcKrgDiZUD8ByjGBrMC5kheoKJ7QPwQKMYL9wAyAyghA8SyyGIAjdhjkPxOwHAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/github.svg":
/*!*********************************!*\
  !*** ./assets/logos/github.svg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/github.838637adb764cb43bf7ed69abefed9bc.svg","height":512,"width":512});

/***/ }),

/***/ "./assets/logos/githubHover.svg":
/*!**************************************!*\
  !*** ./assets/logos/githubHover.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/githubHover.9054f79c4d0a06372ecb001d3342b65b.svg","height":512,"width":512});

/***/ }),

/***/ "./assets/logos/gmail.svg":
/*!********************************!*\
  !*** ./assets/logos/gmail.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gmail.90119edd85e7f9803d92669dd25436cb.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/gmailHover.svg":
/*!*************************************!*\
  !*** ./assets/logos/gmailHover.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gmailHover.728ba27b745cf33e92651ec41d5217f3.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/hashnodeLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/hashnodeLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/hashnodeLogo.d40ced78157df3c243275e8f9e265a86.png","height":89,"width":307,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nAWAKw6AMAxAX0mZHEEg2P3PgwOF4gwL2Ye1RI5zmE4v25ppHURAVam1EOOCXPdwt4y1x/sHIcy4Qy2FPSV+qmAcg5W8iSwAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/htmlLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/htmlLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/htmlLogo.9bb4d01353889182be1a41bf9d781a6f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42jXGoQ5BYQCG4a/rFDKqQxfNTCPobsAd0LgC4cx1iDbTBOH9gp1gJmk2w85m+89fzp7yiDWh5MBGXpLRphe1yLwSC840eXLz1cFzMeNOhTGjuLencp8/Rw7sXePhgdzh6yEpW1f9oivX+XBiEl34uSHLCTtycqdOrAJ1MFkT9O+1DQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/htmlLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/htmlLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/htmlLogoHover.3b11002cdd1602e2a12d961a7cec47bb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42kXMoQrCYBTF8dPtWjSr1Wk3iohNg2lf8AV8A236BIbhcxgFsRmssiAiOGyCqAwG2/+OwQY/7j1nd9PT99dIc84B5b4RYYkQ7ci5HtO0EJJXYlngjCZfvHDjxTXiL5jbwYzlzqzwcoyRdfjQT8V1n5DgiAP2dDXmg4OBWDoUP8KQPWBuyVXmm9y1gzrhyzxhUrjQ/dGQPSwe5Q5xIYAnSRl4tYpj2wz5HQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jestLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/jestLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jestLogo.8bb1378d414651c6208e1d3664120476.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42hXBsQoBAQDG8S8WMZIH8ACyKINJMXkB6TJc5FKyWOhCXcyklO6Gm267p/l/73Pd7yc3LI8p2RDw8V3UO+zoMfLUMyGGiCMFP6c05SUXYp948+fJXF6REfAl5uyESA7JfWONEJG38sN9BnQd+sqetrzg5QMJE7eQVAGY9EjUESoX/AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jestLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/jestLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jestLogoHover.1571adec481f28f98f57a2035a1b8337.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArElEQVR42mN4npDAxAAEQNr0eWLiumcJCfFAHAvkTwLiBgYYAApyAwXSgLQIEBsAsQ1QgxNMUg9K5wHxciCeDpScA6SZQYI+QJ1VzxITa4F0AZA/EYhnAdltQNqVAagyEsiZC8SxQPYUoGAtEJcC2S1AOhNkQjJQciGQrgfiaCQ3ZQLFU0GubwSqFgPSSkBBYaiGaiDOALK5QCrdgJx2IJ0NxC1AbAHUwAEzCQAcgm9oJJoMHAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/jsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jsLogo.c182b7e3746519169bbca8e84ed32104.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42jWLIQ6DQBRE/7V6lJ5gVQ26orKirmnStKIbUkEW8AgcR+DNAVBcAQcfCHkZMW8ypkAikjuRRDAl5h2tKU3Ry7QJh58p3/aBkY6e4hAfrpxcVX7ZhZ76k/E2Cq8NZ1oeyvQ1BWpe3Cm5EXVZAA3NYyvlUCfuAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/jsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/jsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jsLogoHover.f3d669e642739682459eb04226127759.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR4nF2PMQrCQBBF/1goWOkNBEHwHII3ECtxg0Xu4hXSRCsRL2CRIyg26axSJFoLQhrHt6UuzMyf///O7FodQippZtLbzTpgmfvHpT6wsCZJju6+wCDIn2NmJ2tCyBHW9C3Rg5QDmEKyPBr29CvaSFTkrtzv1AFTy39DhliBCsQt3DMacsAaMp6MaFkzxHgFT+IvDriXLp0Rdjx4g3CDq6nTOCFFnNM8WPGijrldUkeYLl8FXEboULJCcQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/lessLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/lessLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/lessLogo.2e78b4a7325f0fb2b1307645180c3da4.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42mXGsQ1AUBhF4f81hhBRsoB9sIBERalQCa1GJdFYwA76c/fxopDI+05xr8nh7ON/gEbdu5GZYtWmlZODyTfQazTNXNy0nGzsWoySnEQxmVIKKgvI8esB7kstkoWCxwAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/lessLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/lessLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/lessLogoHover.fce30751f14cb2d652932a858f6b5f18.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnklEQVR4nDWPwQmDQBBFdy5CwJuQQ0oIKSAdpIysDaSPQM6pIaWkEr14EhRRcHx/0A87/8/Mn9lda3M2TwE3BY44GdHdZEgCkuDUYeDSsAwv+MTkm646BfmMusAPGb40KiYWCg1HGDkT20oZPiRXNlTwj8k7ukcX6M6anJ+IP8WBTStXlOQT+Rm+WVvXujdejyG0gCJYPDJ0/ELYDQc2A1M7GJRYa8oAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/linkedin.svg":
/*!***********************************!*\
  !*** ./assets/logos/linkedin.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linkedin.83bc2d966c2fff4443ad593fca91eb0b.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/linkedinHover.svg":
/*!****************************************!*\
  !*** ./assets/logos/linkedinHover.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linkedinHover.cf2525f8c32ab079d955e856b2493505.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/linuxLogo.png":
/*!************************************!*\
  !*** ./assets/logos/linuxLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linuxLogo.c1d57cb8fab484006119f20b56286ac7.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42h3IOw4BYQBG0e9Hq5BINGQ6jyimmcQWZPqpxC6oRGUJopbQWYcl3LsWLXHKE4pxwgcZGUroERoevm0J/fgLa/ZcPBkGMYQjFWNxbkJsPfz7ztPE2NERw9UXCSsLWzesaZw5DRVLa87c2LFg+AX94UNr6W/99AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/linuxLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/linuxLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linuxLogoHover.35b90e39657c33dab5bc6d037bf7007b.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmUlEQVR42mN4npjIyAAEzxISxIH4OxBffZ6QIAgSA8sBOUxQBSZAvAiIjwDFvEBiQJoZrgBI6wMlY4G4GYiroWIsDDAA5JQCJeSBWATIvgI0Xg0uCeR4AQVLYHygovlAvBhZQShQQSiSgslA/iqY0ZpAzAjEHkCF5kBJbSDbBIhlgVgGpFoeyNCAOrIWiKcCcTQQqz9LSOAFALedW/H64SR/AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/mysqlLogo.png":
/*!************************************!*\
  !*** ./assets/logos/mysqlLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/mysqlLogo.b8f22682024b1d2da1ab85a70123fe28.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42mPAAFcZGRiugLDwFYsrvCgSV9SuKF9hZbgqdFUAyGW7InHF4Yr+VVuGK9OvTLuScyX+Sg2QnHHVheGq1hXVK1FXvK8oXjG54nBFEZstVxiBmOkKCDNdZQQARaooMug0uNsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/mysqlLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/mysqlLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/mysqlLogoHover.aa9841bf37b028115940582ef31821de.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR4nG3OMQ7CQAwEwHNDhShITRkJIVr+k7yKT/Ad0kNBSkApERxjhZJVNmuf13sX5Yex60qlJaJEVdFCwyC0NaCC40bfas90irHvrc0wL2HXoKVves2EtbiP4YNngWvc4l3KKg1HTl8ZcMINpnkv5ZSGnebFcaBPHAwaunR2iZvX/4P4+U0SLMx3QNZZpuavfgF8WTvpPu+c3gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/nobleLogo.png":
/*!************************************!*\
  !*** ./assets/logos/nobleLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/nobleLogo.f7f476403e08faf56da35471c350e003.png","height":223,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42g2G20rDQBQA52w3G2NNShVR8QLxH/RNwYd+ueAPiAVFEVpEbLW0sU1jkt1jYIYZIbtd0u8NYme8MyKuZ/CqdFAHDfbm+tTMFmtWZWOKqpWf1w0cRRAZjvsRdnR3pednJ8y/F1TbSvP8gun0g7pu5OVtgnl6fpev+ZLh/gFl7aXxSNxPcZ1tEOxlGPN5/8DEpCRJzOP4F2N3yfYcYabY1cbr4TCjKBXjt5okESJ/xJRktnuXj4p6TUqMEhAsUAEI7GiwMYRBprQqwYhKV1yqgNKohH+aq2JiFtIS6wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/npmLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/npmLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/npmLogo.f7509b5e9b295a6a82466325c8c95adc.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42m2NsQ1AYBgFv/zmEZRKGq0RFLTUgqjoVGzADCa5t4+IqHgv196ZPBwvTp59pp5KAxUdNQWt0SjXqJSJRKU208rOQsbBzMlpigipaYkJ8PF/pO5O3tHnF1WjNWBK6BhBAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/npmLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/npmLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/npmLogoHover.a2c0786ec5a22062b6d215e77be470ab.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoElEQVR4nEWPuw0CQQxEPRCSECGIKYCjARLqQNqrgAbogm4QARKVQMAvBIkQ8+YQd6Md2WPPer26ltKPiMwIhZRksoaGbGiVIdHH/q/ZsEHcycfwBkfwBZ9YJ7qUsubWKTNnxCNxSXNPc8q4yhO2TBhSfFDcka/Iz7CCPFHXc255swV6gOEQEW/0h9gY2Cn5wg8YGlg7t6FnA/D+LnI6fAEaPj4z3q7ESwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/pythonLogo.png":
/*!*************************************!*\
  !*** ./assets/logos/pythonLogo.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/pythonLogo.b8f4ed91339f5650cc7f58f1ec5bb5cb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42iWMsQmDABQFH+gMDqFDuI37WCWd4ASmELdImnsQbGwEsbC1Er6o190VJ6cSpQdaZxKJLmjA4eqRnDdfFge9axfyh+BgY+HvoJM7wiMTMztXoKCmJ1j58XL+fCrC0NziRHJG64FSIj0BOKZMBPozK9QAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/pythonLogoHover.png":
/*!******************************************!*\
  !*** ./assets/logos/pythonLogoHover.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/pythonLogoHover.38a40eecb5cd1d9e9f51edc91e511e38.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR4nB2OoQ7CQBBEd9NWYEkg4ElIqAaLR8AvXE1xKASfgMChqOEXOIPHkaBRoNukKCyhOd5yyWRuZudmT0vnYlH9SghTEdmAF1jj1XiRVlkmXPDkiDmGU/QSLtBiDSPECkww+irSCyGc4Se60Mo5z/s5gQbjDX9oMB4CbytOvFggHgQSOCHQhlu0eFuRcslpGRCYMawZluCKv7cVwtBODg6Yd/hGOKP5/8kIowFdsAMdsFXVC4H4B8EQRf1uk0IyAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/reactLogo.png":
/*!************************************!*\
  !*** ./assets/logos/reactLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/reactLogo.2ff78cc39b4ac81f8b6e6187a9f6ae15.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAd0lEQVR42iWMMQ6CUBiD//XthnsYTNQ4sRsZ0EncYTAmEliBCzCzwkrCab7eBx60SYevac0MR6IDgV5y5qWzQgr+nLhsgEwlLTUVme9TIjoNjGtGSk0xD3omZnrdFfvJh5xajXK999MbIT++Ouq6ARxPgtUJzmwBRTg8+iSvfxsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/reactLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/reactLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/reactLogoHover.f6dc304cc458dc127c3ce9bd5bc4a65e.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR42k3OsQqDMBDG8VuzF9+jWGhLJ/dSB9upFpKtHYqg6Kq+gLOrroKPpa/hPxLBwI+7fJ5HxJ5JazUZE81aH+DNxryoCrIegjMXHxlS7ifqBbJt+CJnS00tUbhs/TumCdAw0FF7NOQBYmFNSPBAiwEjWj7eEQrHDn0IfwQlfWV76huyDdzgI8EfR1z3j1R4wnMil8kCVVFxqeycpdMAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sassLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/sassLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sassLogo.e8351b219b0da5b4c1010075e33fd2dc.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoUlEQVR4nB2OMQ4BURRF76OSqDQiUVJS2IFYgehtwyYUKolO1OzGV6gFO1BMxptz5/+c/+/7c/LmRbmXrqQalJGcUrDlyGXBH4aRseGpR36Rr+Q6sSzMKbZwlvSAHdKeu0IMCweKI3xhDW/4IBWEtDDiYQV9mIDnmcIFioUxwb+YQQVPcJcbDQYWlhQLOMEP3KFdCO2QzEpgt8tXqsP5t9AAoH9HPL49GfIAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sassLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/sassLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sassLogoHover.233f970c6280e87e6a7eb5e7da27efa9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoUlEQVR4nC2PMQ4BURRF76OSqDQiUVJS2IFYgeiFVdiEQiXRiZrljEItxg4Uk/Gci5c58+/7c/Lm/yhX66akGpSR4vlXAD0CObt8XbDTQrpHxplc27UwZl3CUdIVNkhb1goxLOxo9vCEOTygRCoQ0kKPjRm0YQA+zxBOUFjoE/yLEVRwA0+5MKBjYUozgQO8wBN+xZUscBkyfMsh1eD9ZoI+18Y9jHiSW40AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sitePointLogo.png":
/*!****************************************!*\
  !*** ./assets/logos/sitePointLogo.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sitePointLogo.707841c9ccb5c58cff7e558f02d9a48d.png","height":86,"width":269,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR4nBXLwQ1AMBQG4P8d6aUcWABxZw826mIdQUzQAUibHivV5D0xwEf7tnNKiWKM0jYtee+lqisopXBfN5ExRsZhhHMOXd+hvAU5ZzAzrLWgeZp5WRc6jxO/1FojhCBPeiAQ+gAFiC2+uVxVowAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/tsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/tsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/tsLogo.8be8b48cc0f47c6774ef3b30ea3080a5.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42iWNMQrCQBQFf47w94uIpd5KsPMeHsBDWOYYiqW287QUQWziBnKCTZYw7QxjNDhBIilwGsN5kvnyo5NwU5ApFRUGpWr0fDhz5cZLS5Pzn9hx4sCbhRFkFY502qtlWxORufCg1Z0wzds1KzYENgKbzVP5BiTybAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/tsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/tsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/tsLogoHover.88ef19c52189bbe82ba7b4cda6d8523f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR42kXPQQrCMBCF4ckRbETEpd5KEBrwHh7AQ7j0GIpLXVeXUiiZRZtCT9D+Q1u6+MjLmzAQiXnusIKPIWRGydaRnVjQEL6ciaJCJNd0hTITgickyp5hb6cCHTKxV2gZlLjhiRd+9BuJ44PGkI+44sz9j7Vt8EjT+gtq7ifccZg3FJwJD3ym4RteKJwu39xhS97DvioDIL6In7gCdlsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/usLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/usLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/usLogo.91f8ef51b018c8b96320f6ba5788ab5d.png","height":750,"width":750,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR4nGP8BwT///9nYGJiYgDRjIyMDMiAESj4D0gz/Pr1h4GNjYXhw8evDI+fvWWQlhBiYGFhYmD88PHLvxlLDjFwsLMw5ie7Mhw5eYPh2csP/7cfucfAwgw07/CJ6/9sLaYzHDqewailJsOw69AVhqjuE//5hFkZ1pc5MDK2T9n6r3LdbYZIPSHGUDcNhtW7bjAs3/r8/6MDSQyyUiKMjG2Tt/6ryj3C4JWuwhDpqs4QG7KJoaLDgqG9PJAB6H4Gxo+fvv67cuMxg7K8OMOpC3cZLt96wRDuY8ygrCABVAD0FcwXQIDsP6AwUBIIAFq4ZpA7FHV5AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/vsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/vsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/vsLogo.de5d7ba8c216c0b69b646f94b5a23a3a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42k2NsQnCYBhEr3AFN8goOoDWBhQrK8EB7G1sFCE7CAopkgX+Dd4tk+bLR9Kkecc7OE6SxYokJ9dOXVNN+qQQbuRLxo462RIU8eXDQOHB3uFedNz5EbzYJrO4Ej77RvCfJxUbhHhTHDRa3B59sEaFUlGyBCO5eQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/vsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/vsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/vsLogoHover.6a5afac2e3f99b34579359953682dc2c.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR4nCWPMQrCQBBFZ8BSSGVv4QVSCZ5BUDzBLqSx8iSKhVikVEstFEEUS4mIV7CO4BkC45tk4edn/7yd3dEyBFFVMbOWilQmIngk9P+tAx2yhPBD4GuB+mjAwVzLGKdqtqY4IWyjDfAZH5IV3mEP+eOKjLZvCg8OvPAD+6t+Q7hAPglSgjG+4kEn/EanGpixWQJleILm6IhGqHCgR7ErInfECOodUuWR7HIHxBdQMyYjAwS+FfHuD1xRRHDfwfHBAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/waskoLogo.png":
/*!************************************!*\
  !*** ./assets/logos/waskoLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/waskoLogo.8a8e5c67f482522f459c49add2f51896.png","height":252,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPUlEQVR4nGOUmHQ6k4GR4SUDA8MXhv//uYA0MwMjIyuQZmJg+P8JqODUNaDAFaDkP6DgNyAWAvJBNAisAgBCmBCKKPQsgwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/windowsLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/windowsLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/windowsLogo.c810bf810099e1cc32be824faef9ea09.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42mNAgCt8VzSv8DFcEb6SfaXzSsSVU1ceXflxxZrhqvOV/1f/X5kAJEG0PcMV9Strriy5EnplNZBed1WD4SpY4CpU4IoGwxWgliv/rwK1gGl7hqsgQztghl61xrAWAH3uSdUHF8nHAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/windowsLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/windowsLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/windowsLogoHover.99ee48712ac4c5e18f3a413d679918c9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAn0lEQVR4nGWPsQ2DMBBF/zFAmkgRUpS0rBHJO0QpzQRIlOkzAKOkZ4dkCZiB7niHgAZLh/3/PR/fNta1zF1uJrEbu7ufJF1xBhtzPiNe1B3jB9hClOgLOsWEhNGvNzsaDY1tPWJChfFBTNSXCU9IcBXod0yoyHAAOBd8AHJOiJ50EbYDaACwJIDlF1vIG8afVsu5pPaQcVM0lrWG3Z85A5FMQqG8TxKoAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/yarnLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/yarnLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/yarnLogo.6434508ed51a906a7584c992c570801a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42g3JsQnCUAAG4YO3gMYd3CAOEDCQxhgDgsPYijYWERzDae6fJz4OrvlICW6cneqxALZZ7B1c0oaqLpIhXfDjhkwZQ1YfkpsjznaZXf2K15zJrtrJX+7ufbsFPORp7zEvW8EiNl5qjaT8Ae59Q8BVSu4qAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/yarnLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/yarnLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/yarnLogoHover.dd5578731762001a8cb4ee54237556d8.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR4nCWPrQoCURCFZ7gv4M+zaBa0GFUQDMLdJgaLTbBo8AEMPoBJsAjm1Shs8C3cpiZBwR2/wQvDOXe+c8+ymscYRORrIiW0yRTMSVWfYhY0TxLB1AgMAUcVCfg2uuWe6S3GEukFywnBNv4NSPFrUZ37JzqYwswOvDKCKwIzggN2L2/oAR6mWgbvgRvgGNhHP95QZTnl5YVgRK/cd8yIWXqDcOrALjDFG76F97bMGwLGf7OCNuR/zoTuaPgBTN9LCJ3ltEYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/nekomura.png":
/*!*****************************!*\
  !*** ./assets/nekomura.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/nekomura.bb4c55bf86902adf56d19c569f86c41d.png","height":592,"width":790,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvElEQVR42gVASQ7BUBj+/vapDop0IZGIEmIpNjYW1nYO5xCuIQ4gEbYiCGKooaY2fX2/0GgwVEaiIFJJbrkKp9tiCInreArpWSTwjsjudWA3fRDncD5uqWgJ5Ptt/u4OEJFj8vz7grfeUFbF0EzFwT6C22xBPQJooZ7QZ7Oi53IBJ/ihWKiR0jK0ulxwcnMQpu9zI2tBv90oKXuIWbL2ieDdD7BDhgjrVUrCNyqlGozJDGwacGJJesbglIA/jZZPJUjQpeQAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/barcelonaSagradaPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/barcelonaSagradaPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/barcelonaSagradaPhoto.58864fc67a4b83eea0416f98128194b1.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AU9sXP4oOmIBEx00APn7+gAQAfsA+gMI//7+/gAGBP8BAVyHl/4eDhwAENLTAAVFTwAOCfYACv/1APMOJQDv/QcAAWmq2f8L594A+W9JAC6RnAD4DgsACfHXAB0pM//v/w8BAafG3/7GwccBJ+G4AA84VAAIBe4A7PPz/zIqIgDs8fIBAbOpnP7m5/IA6gIiAAodKgAm8sIA5QMLACUZDQDx7eYAAZCMjv5NU1QB4Ob0/8TrAAEN2bMACQX5//kFCQAoIBcBOHxRovKgGo0AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/bowlingPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/bowlingPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/bowlingPhoto.4afb3e88d9a37c8e93a86ddaa7c0f93e.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAx0lEQVR42gVAb4vBcBz/fH9+dxs7s3jgXFiTugfXrru6ujySeAVKPPBylaR4ppRWJJGymf+2+YpKhcrj09RQsZKYDVQ4MoATz0Po6pG8/QJGbEtFrU+nO4Mii8Rhs2XlkYIbaphnkhin89C1EVO702X2QrwKC365AVf94L27I2HaNWR/qzwZ9uCnsjCKJVziBYjLNeBzREj8/SDhrZGRB3y/g6WZE3CmS7SadZaKDl+5IUzHIPkOKn/9s23naDV3EAXEL28GPQG+OEmqQBCw3wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/climbingTopPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/climbingTopPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/climbingTopPhoto.4a512acde3af0768a71df58b70c7c4d9.png","height":889,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AXyGi//u4dD/3OLnASIcGQABc3l///Xl0AD5AgkAEg8OAAGAak//AP8GAO8BDQAAAP8AAaOKa/738fEA0eb7AOzz9AABqIpo/gwD/ADF2ewA4vD+AAGsiGH+CgX9AO4OMgDj6/IAAaqDW/8HAO0ADUeOAB0iIgABpHlO/hMN9wAIOoYAGiYqALJHOZ6zesJNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/cop24Photo.png":
/*!**************************************!*\
  !*** ./assets/photos/cop24Photo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/cop24Photo.08e03b178b8b7c7808f5a0bb4f15ed6e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42gVAS07CQBj+/mYslTb4SnRDookR4gFcuHbjDbyIN/ACnsYDuCO6cmE01AfvlFdgmDBDW+Yj8vz06KOoIkoluLxq4KNjcXbe5MP9NcaDoag4SRBWqqxGB3ALg9+uxnydot+MYZ2lCkIlECDcC/H91oI2R1i5LdKff8b7gSiQ9N6L0wa9vx5aozZO6rfMsgy1JEBQ5iWKvOQobfPr9YWf72Tj2AJbg+lkRuWsA/1GllIwq1/I3c0hTms5jdbYFIXsALEHYWYBEll4AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/franceLaSalettePhoto.png":
/*!************************************************!*\
  !*** ./assets/photos/franceLaSalettePhoto.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/franceLaSalettePhoto.2f8a629a6ea1b81354173ac5f292fbd4.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwklEQVR42gVAvWrCQAD+vpqfQZIqpVSwHQpdKv6gbuIijq7i4/kALoL4AiI4Kjg4BwQhIKK5JMacdyecLvfasm02fnyQQHjL8JTK5I8cRklav2VCqdzEIkLBcZCmKS6xhEgeuIvIWNP5mn5+xudfDY5XQpJmECLBLQzMNdiTpdZE++GB1XYXtnsHmSE4Lky1+A6vUCdH4762kcFFDG2dUPkaotscYLvbYLWe4a3oRtBKUtGDlN8c9MZs/Hfw4VdQ9jRf/GRTWeEmVFQAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/giewontPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/giewontPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/giewontPhoto.492cf8c232b8922e997553cce8223df9.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAiElEQVR42hXNQY4CMQxE0V+O0yPg/oeZ7RxgDoOgoZ2ODVl+qZ5Kv3//WYgYyf15cMRgjIk3dyGVNXQmpFRwys2sendiTFDhzWiXn3ITWvy57/QVHY74itc7aO61bV0GXK4b9tgxyWrEsc4ojCq43a7l4zxZtQbNjZyTiIGTKWtLhWYmJpUq9QEd/EsJPMh9hgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/icelandWaterfallPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/icelandWaterfallPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/icelandWaterfallPhoto.520c9fefefdb4b2aea089af836b78330.png","height":500,"width":889,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AZuMhP9IUkYAFRkWAP39/f/e2+AAwbjCAQUF/gASFxX/Aa2hl/8WGBMACQoI//Hx9ADFv8gA5d3ZAAEE/gHh3Of/AbKmnP8MDgoA8e/y/+fm6wAE9O4A1NrWAPL26QH7/Qb/AaSVjP8ICwkA6ubrAM7k8P8U+vEA5ePdAP//+AH/Avj//LJHLko/oZ4AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/londonArsenalPhoto.png":
/*!**********************************************!*\
  !*** ./assets/photos/londonArsenalPhoto.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonArsenalPhoto.2f4954742b8fc4c287560d3eb4adb4ba.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjklEQVR4nAVAsQnCQBR9P4cECYegCIoDqNgp4gIipLSwsbG0cIgULuQGTpARAqYQMYF4GgnnkfBEoujMyhjkSYrK+tCatOULg/EEjQBy3IXsdPtsw8pirnB7BMwzD8XnCecayP60ZekMxV7lsAbcb8pLPMK3dijeCWQTrgh4VL6WoQRYzu6M0xayugcF4g9zDjvw/6paVgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/londonCanaryPhoto.png":
/*!*********************************************!*\
  !*** ./assets/photos/londonCanaryPhoto.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonCanaryPhoto.47bee99ebc8d7f43d5e3890b3e058ce0.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjUlEQVR4nAVAMQ7BUBj+/mie0KqnpTroUEsraSMhYjOYmBxCHMD5bC5gthlMhlaVkNB8IsvVlnnVwUVPMXENzAZfHs8f5MpD1HhBhmFCp6dpzPeyiWvQ6s7DqQD6Y6ROCbH9mL71Y7reyWLkQlUFH+UTNR0iewukabWp6oqeF0gSBbBbJkGiaxq43jL8AaiVK8WVwAEtAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/londonChelseaPhoto.png":
/*!**********************************************!*\
  !*** ./assets/photos/londonChelseaPhoto.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonChelseaPhoto.3441bc191121f3950a2b02a2bb93fc41.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AXVhMv8MGT0AJz9bABUWFQAVExL//Pj2AN7UyQDz59EAAWpcPP/39hT/DxYaAQUNEwA3Pj3/7ebfAL+5vADW4vcAAS5AY//+/eL/AAf8Aff79wDd28j/ABUtADEbKgAFAQMAAWJfXf/U6t3/8vnGAQgJCgAFAh7/+vnxAPr55wAD/wMATLg5qI3HUbEAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/londonTowerBridgePhoto.png":
/*!**************************************************!*\
  !*** ./assets/photos/londonTowerBridgePhoto.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonTowerBridgePhoto.b7815eb448a82dbaabee3d0676bf71d9.png","height":500,"width":755,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42g3MSQ7BUACA4f81r8RQ0YqFhTNIuAj3tHICK8LS3qy0tDqrDkn5DvAJy3Yr7+1UslYnjkKajQZtTUMIRZRFjtxu1riOxWg84WGa6HqXVqfN/Xpif7kiF4s5se8QRvF/8OkbOq/bgd1qSagayNl0SuAH1NUa6nBAhSLcp10VZYHR05BpkpBnGZfzkShK+OQQeC5KYJI6X37L201As5fbMQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/londonVictoriaPhoto.png":
/*!***********************************************!*\
  !*** ./assets/photos/londonVictoriaPhoto.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonVictoriaPhoto.a0fcb8bfe8794f89a836e20b2e6b49be.png","height":799,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAqElEQVR42gVAQQvBUAD+3jystWykyKLIwmFxc3P0U/w0/8J1NaVZHBQuS2IzWjHby9sTmS2W+S9lmGgBnLiFguCg02GdSCxGdDyLuTUgltkE1TUFMk+gGCoZjyow+w1IVk8DT5/gWYoouMA+vCCd/Kso5ZHIiSw8bytqMhMSu7vIvgk03cDnzbCxV6B7d42bH0Ct6niEIdk5GShBCe1uB5xzFClFsazgD5XyRyxtDfRLAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/manchesterUnitedPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/manchesterUnitedPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/manchesterUnitedPhoto.6feed334fd096bbc4f58b83d7b547f5b.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42hXMQQ7BQBQG4P9lXqdoNQgVNm7hsk4gDmDhGhYScQAhQtNWOzN9T+2/fHQ67MU6IXEtiscdnKYYz+aajBKEKCbeXR6om0adCt73CqAKw+wFqh3G1ipP85wS6dAI4E0JMgb5MoXvRIMwsfpW1QsNbYTNzGA6UFhTaxk62PYNXoUn4gGrANCywL8ykxEmTGi+N+Xr8QTn236O1GVbirtPj84aECNbrOkHtFJUUKZtQpMAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/mazuryDownPhoto.png":
/*!*******************************************!*\
  !*** ./assets/photos/mazuryDownPhoto.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/mazuryDownPhoto.094fa25867b3faaa2c789daf44f1398a.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42g3MO04CURSA4f8Ml5kLM8PDCPGZ2PhgDcaCRCutrd2GCzCxdxkuwcaSSnsrbdSgNhIY4D4OfAv45O7hMfq0IWLq5M2UMrdsFFb3O5ZWLYjZrlXMDVpsWnaLlG4G7WbgafTM+ONNZXBypMz/GJ6dMzw+pNdp8D7x3Nze6/XpgcjVxWV0ItLf6jPoluyUdV6+Zvr6z3pLxLR6e7ioWvmE0XeF/V0i3tFG8NOlms+fMZlJJc8yNSFISBIWzmlE8VFlBXL+RU0aCdzzAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/mclarenPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/mclarenPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/mclarenPhoto.ec4f610d5c1ea2eedc554d25e233eb67.png","height":890,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AXp7cf4PDQ4ABgcHAN7g5AABjpaU/gUFBgAEAgIAzs3MAAHQw67/5fD2APb08wDT1dcAAa+Yf//3BRT/Bg0JAOPo8QEBjIJ7/9vJzwAXFg4A2/H1AAFdV1D+4NzhAO3c4gD+FA4AAT45Mv/3/QD//f7/Afn4+gABMi8s/v39/gD5+/wA/P7/AA3EQuR1B2o5AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/notreDamePhoto.png":
/*!******************************************!*\
  !*** ./assets/photos/notreDamePhoto.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/notreDamePhoto.caac0d7991c224abe904d440ab731a49.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAw0lEQVR42gVAzUoCQRz//WbGbWzdUSK6dSgQ6lQP0Bt06QG79ghePEV0LwqkCBJ0/YBB3fUD19XZv/D5pVMxbECpYE9jXLVvcd5yUBo7ZqMefPrLSJORTbDallQXrROJVIFyOYDVBzRsDdO0L8b/fzMUBVDukPsB/nofeHvt0vjhFLPDTBrJGfP5BOM0Q1x3MNu6k7ube9Q0ESmi033H1+ePmMvrNjQ1lnMviyyHNcDT4wNUYjVlv0YV9pQQ2ExiuKbjEYixT7GcvvwXAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/parisEiffelPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/parisEiffelPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/parisEiffelPhoto.f5df52c2fb5d78cffbdb8e658c9719e3.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAw0lEQVR42gWAvy8DURzAP9/X93rXa694J3WDAYmERNhtBvE/2mxGi9UqEhGEWAwWaYgLPb3r9cfdt5HDo4Pm+elFLi6v2d/d4vzqlY8f1Xk1YVxOxa50YlLQm9t7cpdiehHeWH4zQ9SyagdhKO9AYGtMqyFZdaSbA4ZDp3k+Edvf2dbjJBbfC+jWGfXXG3tedM1XfJoKOTs9aaKgjTPCeuIpyyl3D4+kGzGz2Ryb/S0Yt5FO4PS/+BZQwm5fs1FFUYxkCWuVR/kQoOnZAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/playingIEMPhoto.png":
/*!*******************************************!*\
  !*** ./assets/photos/playingIEMPhoto.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/playingIEMPhoto.2f5f4fc5f41266e34dbf5d79b0d45c74.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwUlEQVR42gVA32sBcQD/fMw2t+t7NyPWbrub3HabFE+KPIryVysvyoNS6vyMuBAd3YtOua/Y+C1FVe1GEZ7RFT8QiTekUkkZJIDrxxfjzGTxGKxkWlFhbAPozTzKlQIWmoMw68hYbTbgw3DMk/rOzb9J0zb4XXQo/TnihznZs/6ijufSrTfhWSawHOPTeJU7PwQVnWzl7EjIC5LaM3KKwDmmYjJz4R189AEwDURHgG0rI62XJ/q6jXzBltf9GsF0xDsrP0GeKUZ37AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/rysiankaPhoto.png":
/*!*****************************************!*\
  !*** ./assets/photos/rysiankaPhoto.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/rysiankaPhoto.b8b5036140573423913a703bf8d99b67.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAzklEQVR4nA3KvUpCYRjA8f9zztv7mlYSdCpBm2qIbIhuokuIhugOatGlubto7DraoiCiD3KQkjTFbzhy0EGU99Hpt/zk7v7NS2gktAaXtqytO+agu1nHOIlFHh5/vbEW41ZIZxyppTO/HF4JBeS6fKt7+Tz9acBOFJHLRaRWM1jrNEBFCtv44tGBZDc2SSYBle93GgOj+8UTmr1EpHRz4Z+ePzg9PGarYGj3hry+/DGKBygWKZfOfKcey+X5lVYrn1KvVal1Z9potfn6+ZcFFc5HwlpC1ygAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/skiSwissPhoto.png":
/*!*****************************************!*\
  !*** ./assets/photos/skiSwissPhoto.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/skiSwissPhoto.d5f3bb9c96ef3ec1276ffe3e208362f2.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAo0lEQVR4nA2Ouw4BQRiFz5kZWSJB4eElOhGljmhEpdQpPIJqs5NdZs3l/017rh+3h5NMZw1Jg5gyYgGQkzpLTJwhj+ebDCGCVVfX4N390OiI9WqOrhvAx/OlORe0bYeUE0oR+D6gCNX7vi5c7uImjtYaGK0X44hUqH1IUFFyd7wKSKgCn2+A9wOWqwU0Sw1Ua7M/S21TRNVY0lmLGLOGMaEi8g/zU2GCw6Y/tAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/sushiPhoto.png":
/*!**************************************!*\
  !*** ./assets/photos/sushiPhoto.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/sushiPhoto.f9950c487e8454e24eb3712dd23dc34e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwklEQVR42g3KTasBURwH4N9/zpnRmRv3jjsKIYS8lLLBykeQlW+sFLEiC+VlgRJGXpqGcw6LZ/dQt5VWdvyH+JFDSgv/ThjETC39AAYx4uF0CfLp68NygJAdg/IjSGaLUNWvb+TG9krmUyJ4WdjsjqhGXeSbHZyciH6EBFEvASX/XOo3C7AhYDbamE4W+p4q4LdSJ+4ZUQipNBI1OLky4MaQ8W6YjcZIibfm70DhbDEazte6YTLKsytsTtq47OGtBH0AYZJDr9QjiLAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/swissMurrenPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/swissMurrenPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/swissMurrenPhoto.652d8e3310a96391e89d7cc9ba2fa034.png","height":500,"width":1057,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AWGb2f8UCwP/CQL9AAQC/gD26uMB/vr3/xMMBAAwLigBAWSJu/8CBgj/+ffzAAjw2AALDhIB9vPv//8BBQAFDBQAAcPHzP+Lmr3/5AgWAEX/1gD7CBEB7gsX/wL7+QD28/AAAbWuq//M0dv/9w4XAByyqAD8NkABCzo//wb9+QD3+fwBLrs9Msbtd5AAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/swissPizGloriaPhoto.png":
/*!***********************************************!*\
  !*** ./assets/photos/swissPizGloriaPhoto.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/swissPizGloriaPhoto.6d4d98a86bcbb0a091febd5e09949063.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxElEQVR4nB3OvQ7BUBgG4PdrtdRfIylSkdDBJnZGkwuwugexMdvF7AbEbjNYJFyCwWjCQf+0pecQN/DkoWJvxoXrkxT4iMMXZB4h5hBvLkMkU0St4ZrfmIvz1QbCAPAjIKNCN3JIqwqoPVqJQlpD1cj+BUNP4eM8YZ+OIt9qEnX7Ez7od0jVNLDbBYxdEXiS0BUJZqNCtFiueeB7cGwP7P6AVa+hZJrYbHeQIwc0ns55uWSQnEgKIoksy4KqQBz2Bzx/+S9+eFFnOXQ3AAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/walesPhoto.png":
/*!**************************************!*\
  !*** ./assets/photos/walesPhoto.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/walesPhoto.273b2181abe6cc761e299e73dac41e5e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AczR3P4DBgUBAQMCAAkGCAD6+fkA/v////7//wACAAEBAc7V3/788fEA57u9ABE9OwAOGhkA9fP1AP4BAADf3twAAcLIz//hxMMA3HRuABd1ZAArVGsA8/DwAOns6//W1s8BAYiGif71u7kBz+3AABomSAAdLzoA9ejg/wQLEAAA/PoBAWZxev4N19gA8rvIAPQ3KgAVHhAAIhINAAkZIADu4doAAT5UYP457uoBL+fp//sFCAHYMCUAGw4C/wIJDgADBAMBNltUFiN1kYYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./pages/work/work.module.scss":
/*!*************************************!*\
  !*** ./pages/work/work.module.scss ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"workContainer": "work_workContainer__3fujx",
	"content": "work_content__1sYki",
	"summary": "work_summary__333DE",
	"timelineGridCotainer": "work_timelineGridCotainer__32YaN"
};


/***/ }),

/***/ "./utils/about/photogrid.module.scss":
/*!*******************************************!*\
  !*** ./utils/about/photogrid.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"photoGrid": "photogrid_photoGrid__36m2N",
	"game": "photogrid_game__2hy1_",
	"ski": "photogrid_ski__37w0j",
	"car": "photogrid_car__4LVa5",
	"skyscrapper": "photogrid_skyscrapper__3yaXj",
	"lake": "photogrid_lake__1PJ4H",
	"monument": "photogrid_monument__3rz-0",
	"sushi": "photogrid_sushi___XISc",
	"boots": "photogrid_boots__2es8w",
	"waterfall": "photogrid_waterfall__1tVOg",
	"cross": "photogrid_cross__2mR6P",
	"bowling": "photogrid_bowling__oZj6V",
	"manchester": "photogrid_manchester__H-noc",
	"arsenal": "photogrid_arsenal__3TdGE",
	"chelsea": "photogrid_chelsea__125Bd",
	"wales": "photogrid_wales__187eH",
	"alps": "photogrid_alps__IorrL",
	"church": "photogrid_church__1gXMk",
	"murren": "photogrid_murren__1R0mi",
	"eiffel": "photogrid_eiffel__V62Sq",
	"bridge": "photogrid_bridge__3LWJh",
	"climb": "photogrid_climb__-Am9D",
	"barca": "photogrid_barca__26pP2",
	"colorUp": "photogrid_colorUp__3wZ-D",
	"photoInfo": "photogrid_photoInfo__1AiVz",
	"fadeIn": "photogrid_fadeIn__35jtp"
};


/***/ }),

/***/ "./utils/footer.module.scss":
/*!**********************************!*\
  !*** ./utils/footer.module.scss ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "footer_footer__xKIqH",
	"goUpSquare": "footer_goUpSquare__2PcKR",
	"copyrights": "footer_copyrights__2-imo",
	"icons": "footer_icons__2Ux__"
};


/***/ }),

/***/ "./utils/home/mainheader.module.scss":
/*!*******************************************!*\
  !*** ./utils/home/mainheader.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"aboutInfo": "mainheader_aboutInfo__1w6u-",
	"header": "mainheader_header__2dw81",
	"desctxt": "mainheader_desctxt__2MLEO"
};


/***/ }),

/***/ "./utils/home/toolstech.module.scss":
/*!******************************************!*\
  !*** ./utils/home/toolstech.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"technologiesIcons": "toolstech_technologiesIcons__3nd1s",
	"technologiesIconsRow": "toolstech_technologiesIconsRow__1qmSM"
};


/***/ }),

/***/ "./utils/icon.module.scss":
/*!********************************!*\
  !*** ./utils/icon.module.scss ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"iconContainer": "icon_iconContainer__3jUI4",
	"icon": "icon_icon__17TqY",
	"iconActive": "icon_iconActive__1F462",
	"fadeIn": "icon_fadeIn__epWss"
};


/***/ }),

/***/ "./utils/menubar.module.scss":
/*!***********************************!*\
  !*** ./utils/menubar.module.scss ***!
  \***********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"menuBar": "menubar_menuBar__2XW6k",
	"title": "menubar_title__3yKQj",
	"squareInitials": "menubar_squareInitials__2fIc3",
	"name": "menubar_name__3Yewu",
	"tab": "menubar_tab__mHo0l"
};


/***/ }),

/***/ "./utils/work/timelinegrid.module.scss":
/*!*********************************************!*\
  !*** ./utils/work/timelinegrid.module.scss ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"timelineGrid": "timelinegrid_timelineGrid__FNCNI",
	"timelineGridItem": "timelinegrid_timelineGridItem__3Bq9q",
	"timelineGridItemCard": "timelinegrid_timelineGridItemCard__3jwSb",
	"timelineGridItemAdjoiningCard": "timelinegrid_timelineGridItemAdjoiningCard__3PbMr",
	"timelineGridItemWide": "timelinegrid_timelineGridItemWide__1Lt0J",
	"timelinePoint": "timelinegrid_timelinePoint__19Oc0",
	"hoverTip": "timelinegrid_hoverTip__Eu51E",
	"pulse": "timelinegrid_pulse__1CzPq",
	"cardContent": "timelinegrid_cardContent__3RCRy",
	"cardContentHeader": "timelinegrid_cardContentHeader__1NGK5",
	"companyInfo": "timelinegrid_companyInfo__M7LIf",
	"companyTitle": "timelinegrid_companyTitle__2HJUM",
	"companyLogo": "timelinegrid_companyLogo__35q4j",
	"cardContentDetails": "timelinegrid_cardContentDetails__3Vwrb",
	"cardContentDescription": "timelinegrid_cardContentDescription__2BiKT"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/work/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3BhZ2VzL3dvcmsvd29yay50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2Fib3V0L3Bob3RvZ3JpZC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2RhdGUudHMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2hvbWUvbWFpbmhlYWRlci50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2hvbWUvdG9vbHN0ZWNoLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9tZW51YmFyLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvdHlwaW5ndGV4dC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3dvcmsvdGltZWxpbmVncmlkLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2NoZXZyb25Eb3duLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24xLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24yLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9sb2dvQ29tbWlzc2lvbi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvcG9zdGVyQ29tbWlzb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3NjaGVtZUNvbW1pc3Npb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FmZmluaXR5TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYmVsYXlUaGVDcHBMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2Jvbm9ib1ByZXNzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9jc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2Nzc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9jc3NUcmlja3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2RhdmluY2lMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2RhdmluY2lMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZHJpYmJibGVMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2ZyZWVDb2RlQ2FtcExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdGh1YkhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dtYWlsLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dtYWlsSG92ZXIuc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvaGFzaG5vZGVMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2h0bWxMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2h0bWxMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvamVzdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvamVzdExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9qc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvanNMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGVzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGVzc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW5rZWRpbi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW5rZWRpbkhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xpbnV4TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW51eExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9teXNxbExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbXlzcWxMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvbm9ibGVMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25wbUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbnBtTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3B5dGhvbkxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcHl0aG9uTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3JlYWN0TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9zYXNzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9zYXNzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3NpdGVQb2ludExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdHNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3RzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3VzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy92c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdnNMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvd2Fza29Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3dpbmRvd3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3dpbmRvd3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MveWFybkxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MveWFybkxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9uZWtvbXVyYS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvYmFyY2Vsb25hU2FncmFkYVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9ib3dsaW5nUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2NsaW1iaW5nVG9wUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2NvcDI0UGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9naWV3b250UGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2ljZWxhbmRXYXRlcmZhbGxQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uQ2hlbHNlYVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25Ub3dlckJyaWRnZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9tYW5jaGVzdGVyVW5pdGVkUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL21henVyeURvd25QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbWNsYXJlblBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9ub3RyZURhbWVQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvcGFyaXNFaWZmZWxQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvcGxheWluZ0lFTVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9yeXNpYW5rYVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9za2lTd2lzc1Bob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9zdXNoaVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9zd2lzc011cnJlblBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy93YWxlc1Bob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vcGFnZXMvd29yay93b3JrLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS9tYWluaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvd29yay90aW1lbGluZWdyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdC10b29sdGlwXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2ZpcnN0X25leHQvaWdub3JlZHxDOlxcVXNlcnNcXHlpY2h1XFxEZXNrdG9wXFxuZWtvbXVyYS1jb21wZXRpdG9uXFxQb3J0Zm9saW8tUGFnZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIlZXb3JrIiwiVlBob3RvR3JpZCIsInVzZVR5cGVkVGV4dCIsImJhcmNlbG9uYVNhZ3JhZGFQaG90byIsImxvbmRvblRvd2VyQnJpZGdlUGhvdG8iLCJjbGltYmluZ1RvcFBob3RvIiwicGFyaXNFaWZmZWxQaG90byIsInN3aXNzTXVycmVuUGhvdG8iLCJub3RyZURhbWVQaG90byIsImZyYW5jZUxhU2FsdHRlUGhvdG8iLCJ3YWxlc1Bob3RvIiwibG9uZG9uQ2hlbHNlYSIsImxvbmRvbkFyc2VuYWxQaG90byIsIm1hbmNoZXN0ZXJVbml0ZWRQaG90byIsImJvd2xpbmdQaG90byIsImdpZXdvbnRQaG90byIsImljZWxhbmRXYXRlcmZhbGxQaG90byIsInJ5c2lhbmthUGhvdG8iLCJzdXNoaVBob3RvIiwibG9uZG9uVmljdG9yeVBob3RvIiwibWF6dXJ5RGF3blBob3RvIiwibG9uZG9uQ2FuYXJ5UGhvdG8iLCJtY2xhcmVuUGhvdG8iLCJza2lTd2lzc1Bob3RvIiwicGxheWluZ0lFTVBob3RvIiwiZ2V0RGF0ZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiVkZvb3RlciIsImdvVXBTcXVhcmUiLCJsaW5rZWRJbkxvZ28iLCJsaW5rZWRJbkxvZ29Ib3ZlciIsImdtYWlsTG9nbyIsImdtYWlsTG9nb0hvdmVyIiwiZ2l0SHViTG9nbyIsImdpdEh1YkxvZ29Ib3ZlciIsIlZNYWluSGVhZGVyIiwiVlRvb2xzVGVjaCIsImh0bWxMb2dvIiwiaHRtbExvZ29Ib3ZlciIsImNzc0xvZ28iLCJjc3NMb2dvSG92ZXIiLCJqc0xvZ28iLCJqc0xvZ29Ib3ZlciIsInJlYWN0TG9nbyIsInJlYWN0TG9nb0hvdmVyIiwiYW5ndWxhckxvZ28iLCJhbmd1bGFyTG9nb0hvdmVyIiwidHNMb2dvIiwidHNMb2dvSG92ZXIiLCJzYXNzTG9nbyIsInNhc3NMb2dvSG92ZXIiLCJsZXNzTG9nbyIsImxlc3NMb2dvSG92ZXIiLCJucG1Mb2dvIiwibnBtTG9nb0hvdmVyIiwieWFybkxvZ28iLCJ5YXJuTG9nb0hvdmVyIiwiZ2l0TG9nbyIsImdpdExvZ29Ib3ZlciIsImplc3RMb2dvIiwiamVzdExvZ29Ib3ZlciIsIm15c3FsTG9nbyIsIm15c3FsTG9nb0hvdmVyIiwicHl0aG9uTG9nbyIsInB5dGhvbkxvZ29Ib3ZlciIsInZzTG9nbyIsInZzTG9nb0hvdmVyIiwiYWZmaW5pdHlMb2dvIiwiYWZmaW5pdHlMb2dvSG92ZXIiLCJkYXZpbmNpTG9nbyIsImRhdmluY2lMb2dvSG92ZXIiLCJ3aW5kb3dzTG9nbyIsIndpbmRvd3NMb2dvSG92ZXIiLCJsaW51eExvZ28iLCJsaW51eExvZ29Ib3ZlciIsIlZJY29uIiwidG9vbHRpcElEIiwib25Ib3Zlckljb24iLCJkZWZhdWxJY29uIiwiVk1lbnVCYXIiLCJhY3RpdmVUYWIiLCJjb2xvciIsInNwZWVkIiwiZGVsYXlUaW1lIiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiUmVhY3QiLCJjaGFycyIsImludGVydmFsIiwidGltZXIiLCJwcmV2VGV4dCIsIm5ld1RleHQiLCJjb25jYXQiLCJWVGltZWxpbmVHcmlkIiwidGltZWxpbmVQb2ludCIsInVzTG9nbyIsInRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkIiwidGltZWxpbmVHcmlkSXRlbSIsIndhc2tvTG9nbyIsImJhY2tn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dGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBodG1sTG9nbyB9IGZyb20gJy4vbG9nb3MvaHRtbExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0bWxMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2h0bWxMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzc0xvZ28gfSBmcm9tICcuL2xvZ29zL2Nzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvY3NzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYXNzTG9nbyB9IGZyb20gJy4vbG9nb3Mvc2Fzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhc3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3Nhc3NMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzTG9nbyB9IGZyb20gJy4vbG9nb3MvanNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvanNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlYWN0TG9nbyB9IGZyb20gJy4vbG9nb3MvcmVhY3RMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWFjdExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvcmVhY3RMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRzTG9nbyB9IGZyb20gJy4vbG9nb3MvdHNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvdHNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZ3VsYXJMb2dvIH0gZnJvbSAnLi9sb2dvcy9hbmd1bGFyTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5ndWxhckxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvYW5ndWxhckxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGVzc0xvZ28gfSBmcm9tICcuL2xvZ29zL2xlc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXNzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9sZXNzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnbWFpbExvZ28gfSBmcm9tICcuL2xvZ29zL2dtYWlsLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnbWFpbExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZ21haWxIb3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbnBtTG9nbyB9IGZyb20gJy4vbG9nb3MvbnBtTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbnBtTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9ucG1Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHlhcm5Mb2dvIH0gZnJvbSAnLi9sb2dvcy95YXJuTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeWFybkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MveWFybkxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0SHViTG9nbyB9IGZyb20gJy4vbG9nb3MvZ2l0aHViLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRIdWJMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dpdGh1YkhvdmVyLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRMb2dvIH0gZnJvbSAnLi9sb2dvcy9naXRMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dpdExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgamVzdExvZ28gfSBmcm9tICcuL2xvZ29zL2plc3RMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqZXN0TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9qZXN0TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5rZWRJbkxvZ28gfSBmcm9tICcuL2xvZ29zL2xpbmtlZGluLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5rZWRJbkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbGlua2VkaW5Ib3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXlzcWxMb2dvIH0gZnJvbSAnLi9sb2dvcy9teXNxbExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG15c3FsTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9teXNxbExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHl0aG9uTG9nbyB9IGZyb20gJy4vbG9nb3MvcHl0aG9uTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHl0aG9uTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9weXRob25Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZzTG9nbyB9IGZyb20gJy4vbG9nb3MvdnNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvdnNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFmZmluaXR5TG9nbyB9IGZyb20gJy4vbG9nb3MvYWZmaW5pdHlMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZmZpbml0eUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdmluY2lMb2dvIH0gZnJvbSAnLi9sb2dvcy9kYXZpbmNpTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF2aW5jaUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93c0xvZ28gfSBmcm9tICcuL2xvZ29zL3dpbmRvd3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3dzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW51eExvZ28gfSBmcm9tICcuL2xvZ29zL2xpbnV4TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGludXhMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2xpbnV4TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub2JsZUxvZ28gfSBmcm9tICcuL2xvZ29zL25vYmxlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2Fza29Mb2dvIH0gZnJvbSAnLi9sb2dvcy93YXNrb0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzTG9nbyB9IGZyb20gJy4vbG9nb3MvdXNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NUcmlja3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9jc3NUcmlja3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZWxheVRoZUNwcExvZ28gfSBmcm9tICcuL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9ub2JvUHJlc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9ib25vYm9QcmVzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRyaWJiYmxlTG9nbyB9IGZyb20gJy4vbG9nb3MvZHJpYmJibGVMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmcmVlQ29kZUNhbXBMb2dvIH0gZnJvbSAnLi9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNobm9kZUxvZ28gfSBmcm9tICcuL2xvZ29zL2hhc2hub2RlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2l0ZVBvaW50TG9nbyB9IGZyb20gJy4vbG9nb3Mvc2l0ZVBvaW50TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvZmlsZVBpY3R1cmUgfSBmcm9tICcuL25la29tdXJhLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGV2cm9uRG93biB9IGZyb20gJy4vY2hldnJvbkRvd24uc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvc3RlckNvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9wb3N0ZXJDb21taXNvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9nb0NvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9sb2dvQ29tbWlzc2lvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29taWNDb21taXNzaW9uMSB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjEucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWljQ29tbWlzc2lvbjIgfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24yLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY2hlbWVDb21taXNzaW9uIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvc2NoZW1lQ29tbWlzc2lvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmFyY2Vsb25hU2FncmFkYVBob3RvIH0gZnJvbSAnLi9waG90b3MvYmFyY2Vsb25hU2FncmFkYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3dsaW5nUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9ib3dsaW5nUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaW1iaW5nVG9wUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3AyNFBob3RvIH0gZnJvbSAnLi9waG90b3MvY29wMjRQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZnJhbmNlTGFTYWx0dGVQaG90byB9IGZyb20gJy4vcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaWV3b250UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9naWV3b250UGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGljZWxhbmRXYXRlcmZhbGxQaG90byB9IGZyb20gJy4vcGhvdG9zL2ljZWxhbmRXYXRlcmZhbGxQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uQXJzZW5hbFBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25DaGVsc2VhIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uQ2hlbHNlYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25Ub3dlckJyaWRnZVBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uVG93ZXJCcmlkZ2VQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uVmljdG9yeVBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uVmljdG9yaWFQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFuY2hlc3RlclVuaXRlZFBob3RvIH0gZnJvbSAnLi9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXp1cnlEYXduUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1jbGFyZW5QaG90byB9IGZyb20gJy4vcGhvdG9zL21jbGFyZW5QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90cmVEYW1lUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9ub3RyZURhbWVQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyaXNFaWZmZWxQaG90byB9IGZyb20gJy4vcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBsYXlpbmdJRU1QaG90byB9IGZyb20gJy4vcGhvdG9zL3BsYXlpbmdJRU1QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcnlzaWFua2FQaG90byB9IGZyb20gJy4vcGhvdG9zL3J5c2lhbmthUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNraVN3aXNzUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9za2lTd2lzc1Bob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdXNoaVBob3RvIH0gZnJvbSAnLi9waG90b3Mvc3VzaGlQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3dpc3NNdXJyZW5QaG90byB9IGZyb20gJy4vcGhvdG9zL3N3aXNzTXVycmVuUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN3aXNzUGl6R2xvcmlhUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3YWxlc1Bob3RvIH0gZnJvbSAnLi9waG90b3Mvd2FsZXNQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uQ2FuYXJ5UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by5wbmcnXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYoKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7c3JjOnNyYyxkZWNvZGluZzpcImFzeW5jXCIsc2l6ZXM6c2l6ZXMsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbiddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7aWYocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpe2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJ1xyXG5pbXBvcnQge1xyXG4gIFZGb290ZXIsXHJcbiAgVk1lbnVCYXIsXHJcbiAgVlRpbWVsaW5lR3JpZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd29yay5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZXb3JrKCkge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya0NvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Xb3JrIGhpc3Rvcnk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJLYXJvbGluYSBIdWR6aWVjIFBvcnRmb2xpbyBQYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkthcm9saW5hIEh1ZHppZWNcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkthcm9saW5hLCBIdWR6aWVjLCBQb3J0Zm9saW8sIEZyb250ZW5kXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvP1wiIHR5cGU9XCJpbWFnZS94LWljb25cIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFZGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHlwZWRUZXh0IH0gZnJvbSAnLi4nXHJcbmltcG9ydCB7XHJcbiAgYmFyY2Vsb25hU2FncmFkYVBob3RvLFxyXG4gIGJvd2xpbmdQaG90byxcclxuICBjbGltYmluZ1RvcFBob3RvLFxyXG4gIGZyYW5jZUxhU2FsdHRlUGhvdG8sXHJcbiAgZ2lld29udFBob3RvLFxyXG4gIGljZWxhbmRXYXRlcmZhbGxQaG90byxcclxuICBsb25kb25BcnNlbmFsUGhvdG8sXHJcbiAgbG9uZG9uQ2FuYXJ5UGhvdG8sXHJcbiAgbG9uZG9uQ2hlbHNlYSxcclxuICBsb25kb25Ub3dlckJyaWRnZVBob3RvLFxyXG4gIGxvbmRvblZpY3RvcnlQaG90byxcclxuICBtYW5jaGVzdGVyVW5pdGVkUGhvdG8sXHJcbiAgbWF6dXJ5RGF3blBob3RvLFxyXG4gIG1jbGFyZW5QaG90byxcclxuICBub3RyZURhbWVQaG90byxcclxuICBwYXJpc0VpZmZlbFBob3RvLFxyXG4gIHBsYXlpbmdJRU1QaG90byxcclxuICByeXNpYW5rYVBob3RvLFxyXG4gIHNraVN3aXNzUGhvdG8sXHJcbiAgc3VzaGlQaG90byxcclxuICBzd2lzc011cnJlblBob3RvLFxyXG4gIHdhbGVzUGhvdG9cclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9waG90b2dyaWQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlBob3RvR3JpZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0dyaWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcmNhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTYWdyYWRhIEZhbWlsaWEsIEJhcmNlbG9uYScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFNhZ3JhZGEgRmFtaWxpYVwiIHNyYz17YmFyY2Vsb25hU2FncmFkYVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmlkZ2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFRvd2VyIEJyaWRnZSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA5LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgVG93ZXIgQnJpZGdlXCIgc3JjPXtsb25kb25Ub3dlckJyaWRnZVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGltYn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQ29taWMgQ29uLCBXYXJzYXcnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMTAuMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBjbGltYmluZyBLYXJvbGluYVwiIHNyYz17Y2xpbWJpbmdUb3BQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWlmZmVsfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBFaWZmZWwgVG93ZXIsIFBhcmlzJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgRWlmZmVsIFRvd2VyXCIgc3JjPXtwYXJpc0VpZmZlbFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdXJyZW59PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE3DvHJyZW4sIFN3aXR6ZXJsYW5kJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAyLjIwMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgTXVycmVuXCIgc3JjPXtzd2lzc011cnJlblBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaHVyY2h9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE5vdHJlLURhbWUsIFBhcmlzJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgTm90cmUtRGFtZVwiIHNyYz17bm90cmVEYW1lUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFscHN9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IExhIFNhbGV0dGUtRmFsbGF2YXV4LCBGcmFuY2UnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBBbHBzIGluIExhIFNhbGV0dGUtRmFsbGF2YXV4XCIgc3JjPXtmcmFuY2VMYVNhbHR0ZVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YWxlc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQ2FyZGlmZiwgV2FsZXMnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDIuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBDYXJkaWZmXCIgc3JjPXt3YWxlc1Bob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVsc2VhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTdGFtZm9yZCBCcmlkZ2UsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMS4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFN0YW1mb3JkIEJyaWRnZVwiIHNyYz17bG9uZG9uQ2hlbHNlYX0gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJzZW5hbH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogRW1pcmF0ZXMgU3RhZGl1bSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgRW1pcmF0ZXMgU3RhZGl1bVwiIHNyYz17bG9uZG9uQXJzZW5hbFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYW5jaGVzdGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBPbGQgVHJhZmZvcmQsIE1hbmNoZXN0ZXInLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDEuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBPbGQgVHJhZmZvcmRcIiBzcmM9e21hbmNoZXN0ZXJVbml0ZWRQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm93bGluZ30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQm93bGluZyBDbHViLCDFu3l3aWVjJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA3LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgS2Fyb2xpbmEgYm93bGluZ1wiIHNyYz17Ym93bGluZ1Bob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcm9zc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogR2lld29udCAxODk1IG0gTVNMLCBaYWtvcGFuZScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNC4wMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgY2xpbWJpbmcgb24gR2lld29udCBpbiB3aW50ZXJcIiBzcmM9e2dpZXdvbnRQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2F0ZXJmYWxsfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTZWxpamFsYW5kc2Zvc3MsIEljZWxhbmQnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxNycsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiB3YXRlcmZhbGwgaW4gU2VsaWphbGFuZHNmb3NzXCIgc3JjPXtpY2VsYW5kV2F0ZXJmYWxsUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb3RzfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBSeXNpYW5rYSAxMjkwIG0gTVNMLCBCZXNraWQgxbt5d2llY2tpJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA2LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgbW91bnRhaW5zIHNlZW4gZnJvbSBSeXNpYW5rYVwiIHNyYz17cnlzaWFua2FQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VzaGl9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE1vbW8gQ2FmZSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDEwLjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2Ygc3VzaGlcIiBzcmM9e3N1c2hpUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vbnVtZW50fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBWaWN0b3JpYSBNZW1vcmlhbCwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA3LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgVmljdG9yaWEgTWVtb3JpYWxcIiBzcmM9e2xvbmRvblZpY3RvcnlQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFrZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogVGFqdHkgTGFrZSwgV2lsa2FzeScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNS4yMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIGxha2VcIiBzcmM9e21henVyeURhd25QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2t5c2NyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IENhbmFyeSBXaGFyZiwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgQ2FuYXJ5IFdoYXJmXCIgc3JjPXtsb25kb25DYW5hcnlQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBNY0xhcmVuLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDYuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBGb3JtdWxhIE9uZSBjYXJcIiBzcmM9e21jbGFyZW5QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBFaWdlciwgU3dpdHplcmxhbmQnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDIuMjAyMScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBLYXJvbGluYSBza2lpbmdcIiBzcmM9e3NraVN3aXNzUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEludGVsIEV4dHJlbWUgTWFzdGVycywgS2F0b3dpY2UnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDMuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBLYXJvbGluYSBwbGFpbmcgZ2FtZVwiIHNyYz17cGxheWluZ0lFTVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy9UTy1ETyByZWZhY3RvcmluZyBvZiBWUGhvdG9HcmlkIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICBjb25zdCB5ZWFyID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICBsZXQgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcclxuICBsZXQgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKVxyXG5cclxuICBpZihkYXkubGVuZ3RoID09PSAxKVxyXG4gICAgZGF5ID0gJzAnKyBkYXlcclxuXHJcbiAgaWYobW9udGgubGVuZ3RoID09PSAxKVxyXG4gICAgbW9udGggPSAnMCcrIG1vbnRoXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gXHJcbn0iLCJpbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4vaWNvbidcclxuaW1wb3J0IHtcclxuICBnbWFpbExvZ28sXHJcbiAgZ21haWxMb2dvSG92ZXIsXHJcbiAgbGlua2VkSW5Mb2dvLFxyXG4gIGxpbmtlZEluTG9nb0hvdmVyLFxyXG4gIGdpdEh1YkxvZ28sXHJcbiAgZ2l0SHViTG9nb0hvdmVyXHJcbn0gZnJvbSAnLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nb1VwU3F1YXJlfS8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHRzfT5cclxuICAgICAgICDCqTIwMjFcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIEJ1aWxkIHdpdGggPHNwYW4+TmV4dC5qcy9UeXBlU3JpcHQ8L3NwYW4+XHJcbiAgICAgIDwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bGlua2VkSW5Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xpbmtlZEluTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rYXJvbGluYS1odWR6aWVjLTBiMmJhODE1YVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTGlua2VkSW5cIi8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtnbWFpbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z21haWxMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBocmVmPVwibWFpbHRvOmtodWR6aWVjQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR21haWxcIi8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtnaXRIdWJMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2dpdEh1YkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRnV0dXJlSW52ZW50b3JcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkdpdEh1YlwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn0iLCJleHBvcnQgeyBWTWFpbkhlYWRlciB9IGZyb20gJy4vbWFpbmhlYWRlcidcclxuZXhwb3J0IHsgVlRvb2xzVGVjaCB9IGZyb20gJy4vdG9vbHN0ZWNoJyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW5oZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVR5cGVkVGV4dCB9IGZyb20gJy4uL3R5cGluZ3RleHQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVk1haW5IZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRJbmZvfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAge3VzZVR5cGVkVGV4dChcIldlbGNvbWUgRXZlcnlvbmUhXCIsIDUwKX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJXZSBhcmUgTmVrb211cmFcIiwgNTAsIDIwMCl9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjdHh0fT5cclxuICAgICAgICB7dXNlVHlwZWRUZXh0KFwiT25lIGFmdGVybm9vbiwgSSB3YXMgaGVscGluZyBhIENoaW5lc2UgZmlsbSB3aXRoIGFydGlzdGljIGNyZWF0aW9uLiBJIHdhcyBhc2tlZCB0byByZXZpc2UgdGhlIG1hbnVzY3JpcHQgYWdhaW4gYW5kIGFnYWluLiBUaGUgaW5uZXIgc2Vuc2Ugb2YgdGVhcmluZyBhbmQgaGVscGxlc3NuZXNzIGZsb29kZWQgaW50byBteSBoZWFydCBhZ2Fpbi4gSXQgd2FzIG5vdCB0aGUgZmlyc3QgdGltZSBJIHBsYW5uZWQgdG8gZXNjYXBlIGZyb20gdGhpcyBkYW1uZWQgbGl2aW5nIHNpdHVhdGlvbiBhbmQgZmluZCBhIGNvbWZvcnRhYmxlIGpvYiB0byBlbmQgdGhpcyBzcGlyaXR1YWwgbGlmZSBhdCB0aGUgbWVyY3kgb2Ygb3RoZXJzLlwiLCAzMCwgMzUwKX1cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVkljb24gfSBmcm9tICcuLi9pY29uJ1xyXG5pbXBvcnQge1xyXG4gIGFmZmluaXR5TG9nbyxcclxuICBhZmZpbml0eUxvZ29Ib3ZlcixcclxuICBhbmd1bGFyTG9nbyxcclxuICBhbmd1bGFyTG9nb0hvdmVyLFxyXG4gIGNzc0xvZ28sXHJcbiAgY3NzTG9nb0hvdmVyLFxyXG4gIGRhdmluY2lMb2dvLFxyXG4gIGRhdmluY2lMb2dvSG92ZXIsXHJcbiAgZ2l0TG9nbyxcclxuICBnaXRMb2dvSG92ZXIsXHJcbiAgaHRtbExvZ28sXHJcbiAgaHRtbExvZ29Ib3ZlcixcclxuICBqZXN0TG9nbyxcclxuICBqZXN0TG9nb0hvdmVyLFxyXG4gIGpzTG9nbyxcclxuICBqc0xvZ29Ib3ZlcixcclxuICBsZXNzTG9nbyxcclxuICBsZXNzTG9nb0hvdmVyLFxyXG4gIGxpbnV4TG9nbyxcclxuICBsaW51eExvZ29Ib3ZlcixcclxuICBteXNxbExvZ28sXHJcbiAgbXlzcWxMb2dvSG92ZXIsXHJcbiAgbnBtTG9nbyxcclxuICBucG1Mb2dvSG92ZXIsXHJcbiAgcHl0aG9uTG9nbyxcclxuICBweXRob25Mb2dvSG92ZXIsXHJcbiAgcmVhY3RMb2dvLFxyXG4gIHJlYWN0TG9nb0hvdmVyLFxyXG4gIHNhc3NMb2dvLFxyXG4gIHNhc3NMb2dvSG92ZXIsXHJcbiAgdHNMb2dvLFxyXG4gIHRzTG9nb0hvdmVyLFxyXG4gIHZzTG9nbyxcclxuICB2c0xvZ29Ib3ZlcixcclxuICB3aW5kb3dzTG9nbyxcclxuICB3aW5kb3dzTG9nb0hvdmVyLFxyXG4gIHlhcm5Mb2dvLFxyXG4gIHlhcm5Mb2dvSG92ZXJcclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b29sc3RlY2gubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlRvb2xzVGVjaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17aHRtbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17aHRtbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjQ2cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0NnB4XCJcclxuICAgICAgICAgIG5hbWU9XCJIVE1MXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImh0bWwtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtjc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2Nzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJDU1NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiY3NzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17anNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2pzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkphdmFTY3JpcHRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwianMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtyZWFjdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17cmVhY3RMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiUmVhY3RcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwicmVhY3QtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXthbmd1bGFyTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXthbmd1bGFyTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkFuZ3VsYXJcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiYW5ndWxhci10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3RzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt0c0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJUeXBlU2NyaXB0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInRzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17c2Fzc0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17c2Fzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJTYXNzXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInNhc3MtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtsZXNzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtsZXNzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkxlc3NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibGVzcy10b29sdGlwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bnBtTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtucG1Mb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTm9kZSBQYWNrYWdlIE1hbmFnZXJcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibnBtLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17eWFybkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17eWFybkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJ5YXJuXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInlhcm4tdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtnaXRMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2dpdExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHaXRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiZ2l0LXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17amVzdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17amVzdExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJKZXN0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImplc3QtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtteXNxbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bXlzcWxMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTXlTUUxcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibXlzcWwtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtweXRob25Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3B5dGhvbkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjU1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJQeXRob25cIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwicHl0aG9uLXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc1Jvd30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt2c0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17dnNMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiVmlzdWFsIFN0dWRpbyBDb2RlXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInZzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17YWZmaW5pdHlMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2FmZmluaXR5TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkFmZmluaXR5XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImFmZmluaXR5LXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17ZGF2aW5jaUxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17ZGF2aW5jaUxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJEYVZpbmNpIFJlc29sdmVcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiZGF2aW5jaS10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3dpbmRvd3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3dpbmRvd3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiV2luZG93cyAxMFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ3aW5kb3dzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bGludXhMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xpbnV4TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlVidW50dSBMaW54XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImxpbnV4LXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaWNvbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJ1xyXG5cclxudHlwZSBJY29uUHJvcHMgPSB7XHJcbiAgZGVmYXVsSWNvbjogU3RhdGljSW1hZ2VEYXRhXHJcbiAgb25Ib3Zlckljb246IFN0YXRpY0ltYWdlRGF0YVxyXG4gIGhyZWY/OiBzdHJpbmdcclxuICBoZWlnaHQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHRvb2x0aXBJRD86IHN0cmluZ1xyXG4gIHdpZHRoOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZJY29uKHByb3BzOiBJY29uUHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGRhdGEtdGlwPXtwcm9wcy50b29sdGlwSUQgPyB0cnVlIDogZmFsc2V9IGRhdGEtZm9yPXtwcm9wcy50b29sdGlwSUR9IGhyZWY9e3Byb3BzLmhyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmljb25Db250YWluZXJ9IHN0eWxlPXt7aGVpZ2h0OiBwcm9wcy5oZWlnaHQsIHdpZHRoOiBwcm9wcy53aWR0aH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25BY3RpdmV9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtgT24gaG92ZXIgJHtwcm9wcy5uYW1lfSBpY29uLmB9XHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm9uSG92ZXJJY29ufVxyXG4gICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy50b29sdGlwSUQgJiZcclxuICAgICAgICA8UmVhY3RUb29sdGlwIGlkPXtwcm9wcy50b29sdGlwSUR9IHR5cGU9XCJsaWdodFwiIGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9SZWFjdFRvb2x0aXA+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGFsdD17YERlZmF1bHQgJHtwcm9wcy5uYW1lfSBpY29uLmB9XHJcbiAgICAgICAgICBzcmM9e3Byb3BzLmRlZmF1bEljb259XHJcbiAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2RhdGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL2ljb24nXHJcbmV4cG9ydCAqIGZyb20gJy4vbWVudWJhcidcclxuZXhwb3J0ICogZnJvbSAnLi90eXBpbmd0ZXh0J1xyXG5leHBvcnQgKiBmcm9tICcuL2Fib3V0J1xyXG5leHBvcnQgKiBmcm9tICcuL2hvbWUnXHJcbmV4cG9ydCAqIGZyb20gJy4vd29yayciLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51YmFyLm1vZHVsZS5zY3NzJ1xyXG5cclxudHlwZSBNZW51QmFyUHJvcHMgPSB7XHJcbiAgYWN0aXZlVGFiOiBcIkhvbWVcIiB8IFwiQWJvdXRcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVk1lbnVCYXIocHJvcHM6IE1lbnVCYXJQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCYXJ9PlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlSW5pdGlhbHN9PlxyXG4gICAgICAgICAgICBOZWtvXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgTmVrb211cmFcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkhvbWVcIiA/IHtjb2xvcjogXCIjRTc2MTYxXCJ9IDoge2NvbG9yOiBcIiNENUQ1RDVcIn19PlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2Fib3V0YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkFib3V0XCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlZFRleHQodGV4dDogc3RyaW5nLCBzcGVlZDogbnVtYmVyLCBkZWxheVRpbWU/OiBudW1iZXIpIHtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBjaGFycyA9IHRleHQuc3BsaXQoXCJcIilcclxuICBsZXQgaW50ZXJ2YWwgPSBzcGVlZFxyXG5cclxuICBpZih0ZXh0U3RhdGUubGVuZ3RoID09PSAwICYmIGRlbGF5VGltZSlcclxuICAgIGludGVydmFsID0gc3BlZWQgKyBkZWxheVRpbWVcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRleHRTdGF0ZSgocHJldlRleHQpID0+IHtcclxuICAgICAgICBpZiAocHJldlRleHQubGVuZ3RoICE9PSBjaGFycy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RleHQgPSBwcmV2VGV4dC5jb25jYXQoY2hhcnNbcHJldlRleHQubGVuZ3RoXSlcclxuICAgICAgICAgIHJldHVybiBuZXdUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2VGV4dFxyXG4gICAgICB9KVxyXG4gICAgfSwgaW50ZXJ2YWwpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB0ZXh0U3RhdGVcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge1xyXG4gIG5vYmxlTG9nbyxcclxuICB1c0xvZ28sXHJcbiAgd2Fza29Mb2dvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vZGF0ZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpbWVsaW5lZ3JpZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWVGltZWxpbmVHcmlkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxoMT4yMDE2PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lUG9pbnR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUNhcmR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlclRpcH0+XHJcbiAgICAgICAgICBIb3ZlciB0byB6b29tLlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbml2ZXJzaXR5IG9mIFNpbGVzaWEgbG9nby5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt1c0xvZ299XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlJbmZvfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueVRpdGxlfT5Vbml3ZXJzeXRldCDFmmzEhXNraTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+S2F0b3dpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMTUgLSAwMy4yMDE5PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBNb2R1bGVzIGluY2x1ZGVkOjxici8+XHJcbiAgICAgICAgICAgIDFzdCBZZWFyOiBNYXRoZW1hdGljYWwgQW5hbHlzaXMsIEJhc2ljIENvdXJzZSBvZiBDKysgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UuPGJyLz5cclxuICAgICAgICAgICAgMm5kIFllYXI6IE9wZXJhdGluZyBTeXN0ZW1zLCBDb21wdXRlciBOZXR3b3Jrcy48YnIvPlxyXG4gICAgICAgICAgICAzcmQgWWVhcjogQWR2YW5jZWQgQ291cnNlIG9mIEMrKyBQcm9ncmFtbWluZyBMYW5ndWFnZSwgVXNpbmdcclxuICAgICAgICAgICAgQyMgdG8gRGVzaWduIEdyYXBoaWMgQXBwbGljYXRpb25zLCBUaGUgQmFzaWNzIG9mIEJ1aWxkaW5nIG9mIE5ldXJhbCBOZXR3b3JrLjxici8+XHJcbiAgICAgICAgICAgIDR0aCBZZWFyOiBDb21wdXRlciBTaW11bGF0aW9uIE1ldGhvZHMsIE9yYWNsZSBEYXRhYmFzZXMuPGJyLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmR9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1XaWRlfT5cclxuICAgICAgICA8aDE+MDMuMjAxOSAtIDAzLjIwMjA8L2gxPlxyXG4gICAgICAgIDxoMj5Xb3JraW5nICYgbGVhcm5pbmcgV2ViIERldmVsb3BtZW50IGluIExvbmRvbjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQ2FyZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJXYXNrbyBjb21wYW55IGxvZ28uXCJcclxuICAgICAgICAgICAgICAgIHNyYz17d2Fza29Mb2dvfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxM31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1NX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55SW5mb30+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlUaXRsZX0+V2Fza288L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PkdsaXdpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjA4LjIwMjAgLSAxMC4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBvbiBteSBvd24gYSByZXNwb25zaXZlIHdlYiBhcHBsaWNhdGlvbixcclxuICAgICAgICAgICAgd2hpY2ggaGFkIGEgY2F0YWxvZ3VlIG9mIGFsbCBjb21wYW55J3Mgc2VydmVycywgZGlzcGxheWVkIGluIHRoZVxyXG4gICAgICAgICAgICB0cmVlIHN0cnVjdHVyZS4gU2VydmVyJ3MgZGF0YSB3YXMgdGFrZW4gYW5kIHBhcnNlZCBmcm9tIFhNTCBmaWxlIHRvIEpTT04uXHJcbiAgICAgICAgICAgIEFueW9uZSBsb2dnZWQgY291bGQgYnJvd3NlIHRocm91Z2ggbGlzdHMgb2Ygc2VydmVycy5cclxuICAgICAgICAgICAgU2VhcmNoIGFuZCBzb3J0IGJ5IG5hbWUgZnVuY3Rpb24gd2VyZSBhcHBsaWVkLlxyXG4gICAgICAgICAgICBBcHAgaGFkIHN5c3RlbSBvZiBhY2NvdW50cyBhcyB3ZWxsLiBBZG1pbnMsIHRlY2huaWNhbCBhbmQgdXNlciBvbmVzLlxyXG4gICAgICAgICAgICBBZG1pbnMgY291bGQgbWFuYWdlIGFjY291bnRzIGJ5IGVkaXRpbmcgdGhlbSwgZGVsZXRpbmcgYW5kIGF1dGhvcml6ZVxyXG4gICAgICAgICAgICAoZXZlcnkgbmV3IHVzZXIgaGFkIHRvIGJlIGF1dGhvcml6ZWQgYnkgYWRtaW4pLiBBZG1pbnMgY291bGQgYWxzb1xyXG4gICAgICAgICAgICBzZWUgd2hhdCB1c2VyIGlzIGxvZ2dlZCBhdCB0aGUgbW9tZW50Ljxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE1haW4gcmVzcG9uc2liaWxpdGllczo8YnIvPlxyXG4gICAgICAgICAgICAtIGRlc2lnbmluZyBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kIHNpZGUgb2YgdGhlIGFwcCw8YnIvPlxyXG4gICAgICAgICAgICAtIGNyZWF0aW5nIGFuIGFzeW5jaHJvbm91cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgdmlhIDxiPlJFU1QgQVBJPC9iPiw8YnIvPlxyXG4gICAgICAgICAgICAtIHNldHRpbmcgdXAgc2VydmVyIHdpdGggZGF0YWJhc2UuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTGFuZ3VhZ2VzOiBKYXZhU2NyaXB0LCA8Yj5SZWFjdDwvYj4sIDxiPlBIUDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgRGF0YWJhc2U6IDxiPk15U1FMPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBTdHlsaW5nOiBBbnQgRGVzaWduIFVJLCBDU1MuPGJyLz5cclxuICAgICAgICAgICAgVmVyc2lvbiBDb250cm9sIFN5c3RlbTogPGI+R2l0SHViLjwvYj48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFuY2luZzogVHJlbGxvLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1DYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMEUyMjQ1XCJ9fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vYmxlIFN5c3RlbXMgY29tcGFueSBsb2dvLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e25vYmxlTG9nb31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUluZm99PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55VGl0bGV9Pk5vYmxlIFN5c3RlbXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PktyYWvDs3c8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMjAgLSAwOS4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBmcm9tIHNjcmF0Y2ggYSBjb21wbGV0ZSBXZWJSVEMgUGhvbmUgd2ViIGFwcGxpY2F0aW9uLCBiYXNlZCBvbiBTSVAuanMgbGlicmFyeS4gTWFqb3IgZnVuY3Rpb25hbGl0aWVzOjxici8+XHJcbiAgICAgICAgICAgIC0gbWFraW5nIG5ldywgYW5zd2VyaW5nLCBhbmQgaG9sZGluZyBjYWxscyAoY29uZmVyZW5jZXMgYXMgd2VsbCksPGJyLz5cclxuICAgICAgICAgICAgLSBjb250YWN0cyBsaXN0IHdpdGggZnVuY3Rpb25hbGl0eSBvZiBhZGRpbmcsIGRlbGV0aW5nLCBhbmQgZWRpdGluZyBjb250YWN0cy4gU2VhcmNoIGFuZCBzb3J0IG9wdGlvbnMgYXBwbGllZCBhcyB3ZWxsLDxici8+XHJcbiAgICAgICAgICAgIC0gaGlzdG9yeSBvZiBjYWxscyB3aXRoIHN1bW1hcml6ZWQgZGF0YSw8YnIvPlxyXG4gICAgICAgICAgICAtIHZvaWNlbWFpbCBhbmQgRFRNRiBzZW5kaW5nLDxici8+XHJcbiAgICAgICAgICAgIC0gYWNjb3VudCBhbmQgcGhvbmUgaW5wdXQvb3V0cHV0IGF1ZGlvIHNldHRpbmdzLjxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE15IG1haW4gcmVzcG9uc2liaWxpdGllcyBvbiB0aGUgZnJvbnQtZW5kIHNpZGUgb2YgdGhlIHByb2plY3Q6PGJyLz5cclxuICAgICAgICAgICAgLXdvcmtpbmcgY29sbGFib3JhdGl2ZWx5IGluIHRlYW0gZW52aXJvbm1lbnQsIHJlc29sdmluZyBjb25mbGljdHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgYSBjbGVhbiBhbmQgaGlnaC1xdWFsaXR5IGNvZGViYXNlLDxici8+XHJcbiAgICAgICAgICAgIC1yZWZhY3RvcmluZyBvZiBjb2RlYmFzZSw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyB0aGUgZG9jdW1lbnRhdGlvbiw8YnIvPlxyXG4gICAgICAgICAgICAtaW1wbGVtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBmcm9tIHRoZSBkb2N1bWVudGF0aW9uLCBnaXZlbiBwcmV2aW91c2x5IGJ5IFBNLDxici8+XHJcbiAgICAgICAgICAgIC1jcmVhdGluZyByZXNwb25zaXZlLCBhY2Nlc3NpYmxlIGFuZCBlZmZpY2llbnQgd2ViIHZpZXdzLCBiYXNlZCBvbiBwcmV2aW91c2x5IGdpdmVuIG1vY2t1cHMsPGJyLz5cclxuICAgICAgICAgICAgLXJldmlld2luZyBwdWxsIHJlcXVlc3RzIG9mIG15IGxlc3MgZXhwZXJpZW5jZWQgcGVlcnMsIGFuZCBoZWxwaW5nIHRoZW0gd2l0aCBzdHlsaW5nL2NyZWF0aW5nIGNvbXBvbmVudHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgZWZmaWNpZW50IHVuaXQgdGVzdHMuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQWNoaWV2ZW1lbnRzIEkgYW0gbW9zdCBwcm91ZCBvZjo8YnIvPlxyXG4gICAgICAgICAgICAtYnVpbGRpbmcgYSAnbGlnaHQnIHZlcnNpb24gb2YgbWFpbiBhcHBsaWNhdGlvbiB0aGF0IGNvdWxkIGJlIGluc2VydGVkIGludG8gYW4gaWZyYW1lIGFuZCBjcmVhdGluZyBhbiBBUEkgdmlhIHRob3NlIHR3byBlbGVtZW50cyBjb3VsZCBjb21tdW5pY2F0ZSw8YnIvPlxyXG4gICAgICAgICAgICAtaGVscGluZyBteSBwZWVyIHdpdGggZml4aW5nIHVwIGNvbW1pdCBoaXN0b3J5IG9uIG1haW4gYnJhbmNoIGluIG91dCBwcm9qZWN0LCBhZnRlciBoaXMgbWlzdGFrZW4gbWVyZ2luZyw8YnIvPlxyXG4gICAgICAgICAgICAtY3JlYXRpbmcgZG9jdW1lbnRhdGlvbiB3aXRoIGNvZGUgc3RhbmRhcmRzIG9mIGNvZGViYXNlIG9mIG91ciBwcm9qZWN0LDxici8+XHJcbiAgICAgICAgICAgIC1pbXBsZW1lbnRpbmcgQ1NTIG1vZHVsZXMgaW50byBvdXIgbWFpbiBwcm9qZWN0LCB3aGljaCBpbXByb3ZlZCB0ZWFtIHdvcmtmbG93IG5vdGljZWFibHksPGJyLz5cclxuICAgICAgICAgICAgLWNvbnN0cnVjdGluZyBjb21wbGV0ZSB0cmFuc2xhdGlvbiBzeXN0ZW0gd2hpY2ggbGV0IHRoZSB1c2VyIHRvIGNoYW5nZSBsYW5ndWFnZSBvZiBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAoaWYgbm90IGNob3NlbiwgbGFuZ3VhZ2Ugd2FzIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkpLlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBBZ2lsZSBtYW5hZ2VtZW50OiA8Yj5TY3J1bSwgQWdpbGU8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFZlcnNpb24gY29udHJvbCBzeXN0ZW06IDxiPkF6dXJlIERldk9wcywgQml0YnVja2V0PC9iPi48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFja2luZyB0b29sOiA8Yj5KaXJhLCBUcmVsbGxvPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBLbm93bGVkZ2UgcmVwb3NpdG9yeTogPGI+Q29uZmx1ZW5jZTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgU3R5bGluZzogPGI+U0NTUywgTEVTUywgU2VtYW50aWMgVUk8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFRlc3Rpbmc6IDxiPlJlYWN0IFRlc3RpbmcgTGlicmFyeSwgSkVTVDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgQ29tbXVuaWNhdGlvbiB0b29sOiA8Yj5NaWNyb3NvZnQgVGVhbXMsIFpvb208L2I+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVQb2ludH0vPlxyXG4gICAgICAgIDxoMT57Z2V0RGF0ZSgpfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvY2hldnJvbkRvd24uZGRhZGUyZjFkZTYzYmI2YjJkZTUyMTkwMWFlMzE4ZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNDQwLFwid2lkdGhcIjoyNTYwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5jMTJhZjI2MGI0ODY0ZjliOGJiOGQ4YTkyOWJlMmVjMi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6Njg4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFwa2xFUVZSNDJtUDRCd1gvSWVBZkdFTUJTSmdCS3ZudnhkMnIveThlMlBqdndOWU4vNjZkUHcxWHpBQmlmWGo3NnQrZTlZdi9MK2t2L2I5alJ2WC81ZTNaLzdlc212TWZCQmpldkhqeWIxcUYxNy9lMXZMLzAxclQvODJ0VHYwM3F5TCsvNG9wNWYvL2dxeDQrZlRCdjVtTmNmOTZnUklMdTdML0xadmE4RzlhZmR5LzdjdW5RS3o0Ky9mdnYyL2Z2djM3K3ZYTC8rOUErdnUzci8rK2Z2a01Zb090QUFENUNLUC9CZmV1d1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIuNWE3ZGU5YmE0ZTkyMjNmM2NjMjdlYmI1OTRhOWM1ZGMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY4MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBclVsRVFWUjQybTJLVHdzQllSakVudy9oOC9nYXJtNUtyZzZPcmxJdTVDQXB4U29uRjhXMkJ5UUhITmkwV3c3cnNyS2IxYjdiNjEvYVozaHJqMzQxTTgwMDVIc1hERnROeUVqZ0g3UmN6TG1kSVVRaVZKM2Z6eGZiV3d1QmY4TkQzcG1Dd3dyamJBckNzU0RGRmViYVFqV2RRNjlVZzY3cG9NOXZESTg3eUxNRHhhUTdRcU9ReDhhWVlWRFJRQUJZaVpNOG1YdnUxK3ZjS1piWjBLWk1ySWpqNUtJTURJN2gyalk4MThNWEJXR291N3dkVHlBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLmI5ZWU3MzZlMTc1NjhjMzg3MWMzZmYzZGQxNDdkMmRmLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4ODksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWZVbEVRVlI0Mm1OZ1lHVDh6OExBOEo5QlRmVy9sMXZrdjBqdnRIOGFabTcvR1JnWS9qT3pjdnhqWUdKa0JuUFVYWUwrWmFsYS8wdTNjUDNINXVyNWp3bWtpWm5sSHdNREJ5ZFlRVXBXd2IvczV0Wi9SZlh0LzdJVGkvNkJ4Tmk0K1A0eE1MQ3lnUlU0ZXdiODE0NVArT2VrYlA4dldDTUFvb0NSL1I4QXAwRXV1cGxyMlpjQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLmNiMjM5YzQ1N2Q2ZmEzY2IzNzFiMDVhMzVkZDU5ZmQwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXlFbEVRVlI0MmhYS3YwcENZUmpBNGQvN2VleWtIaWluRGxJSUZaUmpZNFBRVmJSME5kMUJXMnMxdUJRMDZhcURPRGlJNHhuVVVRUVY4ZS9IZHp6NnF2UHp5Ty9mdi9xWkxDNEdWSERPb2loZTZhR282OW1NNmFST3JBWm5FM0pwaDhkOFFMN1hrcHRpaTFUd3FGSDZpOFFoNXZyaVEzTFprSHdZRWhSODhkMnJMQk13L1VWWjM2WXZ0S01uekhpaHQ1ZUJQdCtkSU5wTG85Ymx2V0lZUlZlaXc0MWtWdUNkclp0S3RTbWRrdkRwSFhld3BYQmZGcW44Zkt0TkRMdHRqUGpucElDOXRSd0EzV1pQdE9rblkrWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLjhiMzhmZTVhM2Y3NTZiYjkzMTZkZDk1ZDM1ODBlNTdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4NDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQWdrbEVRVlI0MmlXTlN3ckNRQkJFNS82SGNhRXJRUVczZ2t0LzRNS05raEF4TUorZXp0QlRiVHBUVUZBVUQ1N1RGcFJTd015d2JVZk9CQkdCcXlJS0FHUFhJNFdJQldiVzcvc0RxUldPWWxSS0VkM3RnZWZoQ0VvSkZMemV0M3Y0WVdpQTlYVSs0YnBlSWZxQU1QNzBzdHZNUUsvT2ZLWmhTcWhWbW1LYWxET1pXZitHUnBpd29pOGhRUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ28uMWE1YjRkODZhMmEyZGRiNGMxM2ZlN2RkNTJmMTI0YjYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZ1VsRVFWUjQyZzNISVE4QmNRREc0ZmMvTnA5QkZDWFZ4MUFFeFNld215QW9FdHRWUkRmVkZNRW1VSmhSSk1IdnpiN0MzUzdkcnR3OTdaRURvdTA3TzFxSUlEY3R4cFNjdktHZTNMQzQ4ZkNWbDN0SUZrUC92ZUJEd3NFU2ZSZXNDY3o0Y2ZGQXp2Z1NlOG5FVzg5NWlvUXBSODZzbkpMN0xZc09FU1AyeEVSMEs2MEVVVkVmM2plVEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIuNGJkN2MzMDY1MDMxMjZjYjdhYTdkODYyNGEzMjc3ZTUucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldOb1FvQ1VSQkY1K0dDMzJBMG1xeCtoc1Zna1hsZHhHQ3dtQlNzYW5TeGlzVWdHTFFvb3NWazhBTnN1MVV4aVdYUExHOGZITzdNblR0dkpQWGVKYW9DRmVvVHVreFZ5OEZ6UWhPRnBnTi8yQktjSjk0TFJEWW9FUkk0VXAvaFFIMUY2Mkl2YkxmWWVxRWp1RU1NNnlMUVlQaERaK0RZSHFCUGRJL2Z0TUNINW9GT01jYmM3Vkl2WUloL3Nkc3g5REUyREhmb0JONTRYN2dKVzBZVnMwZWdEYXY4Tit0VmF4bGhTb0tqWFlDT2lnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvLmFjOWMzMWI0ODViZmVjMzY4MjU4ZGM0NjU1OGM2MTQzLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNFbEVRVlI0MmczR3V3MkRVQkFGMFZzRFZkQURzbVJuYm9DWTNNN2NBYW50Rm1pRFR3MmtjMHNnSTNqa1NNdnFTS09SNVpxZUxmWFVsanh3RW94TWhFOFA4a0xrM3YzSUJvdjRFY3g4MHV6d1Y3d0pXbTZwSmZ3U0hidWZISlRzVGljcS9oUWlsYnhLSkJwV3IyNlFkUUducTFwR3I0RkdDd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLjAwNjBhNzNjMjdmZDRkN2FlYzFjZmY3NzY3NDY3NTE3LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVFbEVRVlI0bkJXUE1RckNRQkJGWi9BQWdwVkg4QTVXTnRFVGlJS1FEZGlsRWJUeUFEWkJzTENNaFNDSVhrQ1N3czQ3ZUFKajZ3Rms4LzdBeS93LyszYzM2MDBJUmcyaTJkemRsMml6R0V2ODFkemZDcHd3S2VNT1BNQmhBbjgybkJXb29sbkNRQ3NqTmZ6VEVWVHRueEFLeEFZcXFFR1ZFQmpUQzUyUXMrT0ltWExrRjYxLzZQTzlFOG9WU0RGN1dFU3pHejJ5TUVOZjZHdGQwVU5zR2VnRlhWRDlvSVNkTjFuR25tZ0VoZ3dPWENPL3dyOVExZ0liYWpyK2ZMRVlMZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9iZWxheVRoZUNwcExvZ28uMDBiYzdhZjUxMDcwYWI0ODQ4NDQ2YzUyM2E1MDQ2Y2YucG5nXCIsXCJoZWlnaHRcIjoyNDUsXCJ3aWR0aFwiOjU0MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBaUVsRVFWUjRuR00wTU5UNXp5SnUrTi9PUUlueCtPRWQvejk4L3NIQXdjN0d3QWdFLy8vL1oyQzA4WTcrYis0WTlKK0Q2UjhqODhjci83OTkvODd3OWV0WEJpNHVMc1lQNzk4ek1GWlUxZnoveFNqMGYvYSttNHdoV24vK2M3Q3pNMXk0ZkptQmhZV0Y0ZisvZnd5TWtkR1IvN2w0UlA0ZlBuYU1rWXNkYUNZREU4aDRCaUFBRXdCNmVqTWJFY01RU0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYm9ub2JvUHJlc3NMb2dvLjcxYzg4MDNhYThhODAxMTk0NTcwY2Y4MWY3OGU0ZDQzLnBuZ1wiLFwiaGVpZ2h0XCI6OTAsXCJ3aWR0aFwiOjQ4NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVFBQUFCSkNTZklBQUFBR2tsRVFWUjQybU53K3hmN3YvVmYzYi82LzhYL0d2L0YvUWNBWGE0TGErQUYzMGdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9jc3NMb2dvLjAxY2RmY2YxYThiNjg2Y2MyNzZlYjdkMmJkNWQzYjRiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVhVbEVRVlI0Mm0zTnNRMUFVQlJHWWJHTU9SUTZVZExUaWJ3TlJOU2kxSmxCVFNRS001eWZ4QTVpQmNWdDN5bS81Z1NlS0lDRFU0OXlnNXFMVG80ZFo1QnlxMVhHUkdFUXM2aFh3MHhpRVBFeU1Pb2pNZ2lwMkZoVkt2UThmeGhYTUI5VHk3R05BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc0xvZ29Ib3Zlci43YTQ5N2I3YzIzMGJlMDhiMmRhZTg0Mjg3ZWNjNWMwYy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFxVWxFUVZSNG5FV01NUTRCVVJDRy85azRoQnRvbFZxVmhwWjJuMUs0QVNmUU9ZQ29KTHV0VXFmUWk4b0ZiRUxoQnNZM1Q4UWs4K2JOTnpPZk5Ta3B3dDE1LzJGa0VMdVhaVFFUbXBYTUhyQ1d1YmVwUzFodERRc01aaGptMUVyU0M5Mklvd1AvVFRZd0dBTFhrdmJraFJ5d2NNSlFaUU9mUG5CQlhrMTZVcnV3c0IyekFkZ0JuREZ0Z1FXMkthd0h1K1VGb2lBVGNFeUZxK2JaY2ZEK0xYekRMR3dJR0VmUWZ3QlBkRDArM3BoMjZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc1RyaWNrc0xvZ28uNmJmZGYwZDMwZmFmMmIxNzMyNjcwYmUyYjkyZWQzNGYucG5nXCIsXCJoZWlnaHRcIjo2NCxcIndpZHRoXCI6Mzc0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBUUFBQUJKQ1NmSUFBQUFHRWxFUVZSNDJtT28vMWZ4ditsLzBmLzYvdzFBT3ZNZkFHS2ZDOHlndDg0OUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ28uYjk4OGE0MDg5ODI1Y2VlZGJmZWNkYzk0ODU3YTFjZWEucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyaDNIc1EyRFFCQUYwUzlPdWo1STNRVUJHY0lPQ0kwSXNYdHdEd1NrcGhscStGUFBzaUo1bXBIazZxY0hEN3lvM0x2d1lHTkxGNm84MFZJSlI5cDZFbS9rNHQwN2hUeDU1T2Z3NGI4amF4UWRKK0VQMy9Ta0V3MnJaOHRLVnhwSkx1NXpabm9YNndJTFVVaEY2alV3R1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci4wMTY0NTA2MjllMzVjZWZkY2JiMzcwMDFjMDIzZTMxNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF2RWxFUVZSNG5CV05NUXJDVUF5R0U1VUtua0R3RGk3aTZLQ2JpNU9MVU9FVjZlRG1CVVRFQ3ppNUZGd1V2SUdqaTZPNGVBZGJUeUFvbFBSTDRDTjUvLysvUklzUXhFUWlGUm5UUzZHWUc2WjZWYk8vQnlLMEdUd2dCYThNK25EUlBJUXBQNTZpK2hhekgxdDhRNVBXWWU3NWhoanpqRkEzc3oyZHA2NllTNEt4QnlZb1hZUWQzaEg0S0F2TU5mMmxSWklNTWJjSUE0UWxNTXFCMUoxTkd3L1V1SjBpZkRGTzREVW4xYUpubW9mQUJmWDdJNFEyZUgzZ0JtVUZlQUpEaUZlZWlzMEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby44NDJlYTUxOWQ2NDM2OGVjNDIzOGQ4YTg1NjhhN2FhYy5wbmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjoyNTEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQVZVbEVRVlI0bkIzS3NRM0FJQkFFd1R2ZUlpV2xCTXY5dDJQWFFFQ0E0T0dNeUZiYW9hUTE1NEpaZ0x0enQwZ2d4b2o5Y01EN2ZpaWxjSXlCM3J2Y0o1L25Wczc1QU5WYTBWcERDSWJyc2cyY1pxYVVFbjgwVURUelVrUkpkZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLjMxZGYxNTAwMmI0ZDNjNGJkNzhkOWEyMjM2N2I4NTg3LnBuZ1wiLFwiaGVpZ2h0XCI6ODIsXCJ3aWR0aFwiOjUwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVlBQUFEakFPOURBQUFBSmtsRVFWUjRuQVZBc1EwQU1BaUN4YlYrNTlUL254QXduUG51ZnRoZFZCV1RnR1JzUXhJUDIwY1BNandRSlVVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0TG9nby5mZDdiZWMxZDg2ZjAxZjQ0MmUzZWExYmIyZjE5YWM3MS5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJqV01RUW9CWVFCR3Z5SWJNeVZLS1k3Z0FrN2lNRzdnRURhU3JRT3d0bVB4M25aS0ZvNGdwVWJUbjkzN1huMHZDZjNFRmN0Q29aZFljZUx0TExGVFR2bXdZV3ZyT0FrVEcxdnVyTm41ZEJTR1htMDVzL2ZDelNyZHp4ZEhEbjRkL0tPMURRL3FzbUtuNWl3Sy9RQUhHRHdTZlhmN3d3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdExvZ29Ib3Zlci5kOGY4MTc3MDViNjU2ZmNlOTY4ODlhMWM3Mzk4YWE2Ni5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsVWxFUVZSNDJtTUFnZWNKQ1N4Z09qSFJDc2pXQmJHZkFjVmdrc3hRU1I0ZzNnaVUrQTRVazRRcmdrcUtBVGsvZ2JnR0tOa041UDhIWWlFR3FDcGhJT2Nla1A0UGxMd0FwQ09lSlNiT0I5S1BnVmlBQVNqSURWUndBcVFBaVBjQzhSSWdmeCtRUGcra2VXQldzQUFWUGdjS3JnRGlaVUQ4QnlqR0JyTUM1a2hlb0tKN1FQd1FLTVlMOXdBeUF5Z2hBOFN5eUdJQWpkaGprUHhPd0hBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0aHViLjgzODYzN2FkYjc2NGNiNDNiZjdlZDY5YWJlZmVkOWJjLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdGh1YkhvdmVyLjkwNTRmNzljNGQwYTA2MzcyZWNiMDAxZDMzNDJiNjViLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsLjkwMTE5ZWRkODVlN2Y5ODAzZDkyNjY5ZGQyNTQzNmNiLnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsSG92ZXIuNzI4YmEyN2I3NDVjZjMzZTkyNjUxZWM0MWQ1MjE3ZjMuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaGFzaG5vZGVMb2dvLmQ0MGNlZDc4MTU3ZGYzYzI0MzI3NWU4ZjllMjY1YTg2LnBuZ1wiLFwiaGVpZ2h0XCI6ODksXCJ3aWR0aFwiOjMwNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUkVsRVFWUjRuQVdBS3c2QU1BeEFYMG1aSEVFZzJQM1Bnd09GNGd3TDJZZTFSSTV6bUU0djI1cHBIVVJBVmFtMUVPT0NYUGR3dDR5MXgvc0hJY3k0UXkyRlBTVitxbUFjZzVXOGlTd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvLjliYjRkMDEzNTM4ODkxODJiZTFhNDFiZjlkNzgxYTZmLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmpYR29RNUJZUUNHNGEvckZES3FReGZOVENQb2JzQWQwTGdDNGN4MWlEYlRCT0g5Z3AxZ0ptazJ3ODVtKzg5ZnpwN3lpRFdoNU1CR1hwTFJwaGUxeUx3U0M4NDBlWEx6MWNGek1lTk9oVEdqdUxlbmNwOC9SdzdzWGVQaGdkemg2eUVwVzFmOW9pdlgrWEJpRWwzNHVTSExDVHR5Y3FkT3JBSjFNRmtUOU8rMURRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvSG92ZXIuM2IxMTAwMmNkZDE2MDJlMmExMmQ5NjFhN2NlYzQ3YmIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcGtsRVFWUjQya1hNb1FyQ1lCVEY4ZFB0V2pTcjFXazNpb2hOZzJsZjhBVjhBMjM2QkliaGN4Z0ZzUm1zc2lBaU9HeUNxQXdHMi8rT3dRWS83ajFuZDlQVDk5ZEljODRCNWI0UllZa1E3Y2k1SHRPMEVKSlhZbG5nakNaZnZIRGp4VFhpTDVqYndZemx6cXp3Y295UmRmalFUOFYxbjVEZ2lBUDJkRFhtZzRPQldEb1VQOEtRUFdCdXlWWG1tOXkxZ3pyaHl6eGhVcmpRL2RHUVBTd2U1UTV4SVlBblNSbDR0WXBqMnd6NUhRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvLjhiYjEzNzhkNDE0NjUxYzYyMDhlMWQzNjY0MTIwNDc2LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmhYQnNRb0JBUURHOFM4V01aSUg4QUN5S0lOSk1Ya0I2VEpjNUZLeVdPaENYY3lrbE82R20yNjdwL2wvNzNQZDd5YzNMSThwMlJEdzhWM1VPK3pvTWZMVU15R0dpQ01GUDZjMDVTVVhZcDk0OCtmSlhGNlJFZkFsNXV5RVNBN0pmV09ORUpHMzhzTjlCblFkK3NxZXRyemc1UU1KRTdlUVZBR1k5RWpVRVNvWC9BQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIuMTU3MWFkZWM0ODFmMjhmOThmNTdhMjAzNWExYjgzMzcucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBckVsRVFWUjQybU40bnBEQXhBQUVRTnIwZVdMaXVtY0pDZkZBSEF2a1R3TGlCZ1lZQUFweUF3WFNnTFFJRUJzQXNRMVFneE5NVWc5SzV3SHhjaUNlRHBTY0E2U1pRWUkrUUoxVnp4SVRhNEYwQVpBL0VZaG5BZGx0UU5xVkFhZ3lFc2laQzhTeFFQWVVvR0F0RUpjQzJTMUFPaE5rUWpKUWNpR1FyZ2ZpYUNRM1pRTEZVMEd1YndTcUZnUFNTa0JCWWFpR2FpRE9BTEs1UUNyZGdKeDJJSjBOeEMxQWJBSFV3QUV6Q1FBY2dtOW9KSm9NSEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvanNMb2dvLmMxODJiN2UzNzQ2NTE5MTY5YmJjYThlODRlZDMyMTA0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNrbEVRVlI0MmpXTElRNkRRQlJFLzdWNmxKNWdWUTI2b3JLaXJtblN0S0liVWtFVzhBZ2NSK0ROQVZCY0FRY2ZDSGtaTVc4eXBrQWlranVSUkRBbDVoMnRLVTNSeTdRSmg1OHAzL2FCa1k2ZTRoQWZycHhjVlg3WmhaNzZrL0UyQ3E4Tloxb2V5dlExQldwZTNDbTVFWFZaQUEzTll5dmxVQ2Z1QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9qc0xvZ29Ib3Zlci5mM2Q2NjllNjQyNzM5NjgyNDU5ZWIwNDIyNjEyNzc1OS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF0VWxFUVZSNG5GMlBNUXJDUUJCRi8xZ29XT2tOQkVId0hJSTNFQ3R4ZzBYdTRoWFNSQ3NSTDJDUkl5ZzI2YXhTSkZvTFFockh0NlV1ek15Zi8vL083Rm9kUWlwcFp0TGJ6VHBnbWZ2SHBUNndzQ1pKanU2K3dDREluMk5tSjJ0Q3lCSFc5QzNSZzVRRG1FS3lQQnIyOUN2YVNGVGtydHp2MUFGVHkzOURobGlCQ3NRdDNETWFjc0FhTXA2TWFGa3p4SGdGVCtJdkRyaVhMcDBSZGp4NGczQ0RxNm5UT0NGRm5OTThXUEdpanJsZFVrZVlMbDhGWEVib1VMSkNjUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nby4yZTc4YjRhNzMyNWYwZmIyYjEzMDc2NDUxODBjM2RhNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFYRWxFUVZSNDJtWEdzUTFBVUJoRjRmODFoaEJSc29COXNJQkVSYWxRQ2ExR0pkRll3QTc2Yy9meG9wREkrMDV4cjhuaDdPTi9nRWJkdTVHWll0V21sWk9EeVRmUWF6VE5YTnkwbkd6c1dveVNuRVF4bVZJS0tndkk4ZXNCN2tzdGtvV0N4d0FBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nb0hvdmVyLmZjZTMwNzUxZjE0Y2IyZDY1MjkzMmE4NThmNmI1ZjE4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW5rbEVRVlI0bkRXUHdRbURRQkJGZHk1Q3dKdVFRMG9JS1NBZHBJeXNEYVNQUU02cElhV2tFcjE0RWhSUmNIeC8wQTg3LzgvTW45bGRhM00yVHdFM0JZNDRHZEhkWkVnQ2t1RFVZZURTc0F3ditNVGttNjQ2QmZtTXVzQVBHYjQwS2lZV0NnMUhHRGtUMjBvWlBpUlhObFR3ajhrN3VrY1g2TTZhbkorSVA4V0JUU3RYbE9RVCtSbStXVnZYdWpkZWp5RzBnQ0pZUERKMC9FTFlEUWMyQTFNN0dKUllhOG9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbi44M2JjMmQ5NjZjMmZmZjQ0NDNhZDU5M2ZjYTkxZWIwYi5zdmdcIixcImhlaWdodFwiOjUxMCxcIndpZHRoXCI6NTEwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbkhvdmVyLmNmMjUyNWY4YzMyYWIwNzlkOTU1ZTg1NmIyNDkzNTA1LnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nby5jMWQ1N2NiOGZhYjQ4NDAwNjExOWYyMGI1NjI4NmFjNy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJoM0lPdzRCWVFCRzBlOUhxNUJJTkdRNmp5aW1tY1FXWlBxcHhDNm9SR1VKb3BiUVdZY2wzTHNXTFhIS0U0cHh3Z2NaR1Vyb0VSb2V2bTBKL2ZnTGEvWmNQQmtHTVlRakZXTnhia0pzUGZ6N3p0UEUyTkVSdzlVWENTc0xXemVzYVp3NURSVkxhODdjMkxGZytBWDk0VU5yNlcvOTlBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nb0hvdmVyLjM1YjkwZTM5NjU3YzMzZGFiNWJjNmQwMzdiZjcwMDdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW1VbEVRVlI0Mm1ONG5wakl5QUFFenhJU3hJSDRPeEJmZlo2UUlBZ1NBOHNCT1V4UUJTWkF2QWlJandERnZFQmlRSm9acmdCSTZ3TWxZNEc0R1lpcm9XSXNEREFBNUpRQ0plU0JXQVRJdmdJMFhnMHVDZVI0QVFWTFlIeWdvdmxBdkJoWlFTaFFRU2lTZ3NsQS9pcVkwWnBBekFqRUhrQ0Y1a0JKYlNEYkJJaGxnVmdHcEZvZXlOQ0FPcklXaUtjQ2NUUVFxejlMU09BRkFMZWRXL0g2NFNSL0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLmI4ZjIyNjgyMDI0YjFkMmRhMWFiODVhNzAxMjNmZTI4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVgwbEVRVlI0Mm1QQUFGY1pHUml1Z0xEd0ZZc3J2Q2dTVjlTdUtGOWhaYmdxZEZVQXlHVzdJbkhGNFlyK1ZWdUdLOU92VEx1U2N5WCtTZzJRbkhIVmhlR3ExaFhWSzFGWHZLOG9Yakc1NG5CRkVac3RWeGlCbU9rS0NETmRaUVFBUmFvb011ZzB1TnNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9teXNxbExvZ29Ib3Zlci5hYTk4NDFiZjM3YjAyODExNTk0MDU4MmVmMzE4MjFkZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsRWxFUVZSNG5HM09NUTdDUUF3RXdITkRoU2hJVFJrSklWcitrN3lLVC9BZDBrTkJTa0FwRVJ4amhaSlZObXVmMTNzWDVZZXg2MHFsSmFKRVZkRkN3eUMwTmFDQzQwYmZhczkwaXJIdnJjMHdMMkhYb0tWdmVzMkV0YmlQNFlObmdXdmM0bDNLS2cxSFRsOFpjTUlOcG5rdjVaU0duZWJGY2FCUEhBd2F1blIyaVp2WC80UDQrVTBTTE14M1FOWlpwdWF2ZmdGOFdUdnBQdStjM2dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvbm9ibGVMb2dvLmY3ZjQ3NjQwM2UwOGZhZjU2ZGEzNTQ3MWMzNTBlMDAzLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMjUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTJVbEVRVlI0MmcyRzIwckRRQlFBNTJ3M0cyTk5TaFZSOFFMeEgvUk53WWQrdWVBUGlBVkZFVnBFYkxXMHNVMWprdDFqWUlZWklidGQwdThOWW1lOE15S3VaL0NxZEZBSERmYm0rdFRNRm10V1pXT0txcFdmMXcwY1JSQVpqdnNSZG5SM3BlZG5KOHkvRjFUYlN2UDhndW4wZzdwdTVPVnRnbmw2ZnBlditaTGgvZ0ZsN2FYeFNOeFBjWjF0RU94bEdQTjUvOERFcENSSnpPUDRGMk4zeWZZY1lhYlkxY2JyNFRDaktCWGp0NW9rRVNKL3hKUmt0bnVYajRwNlRVcU1FaEFzVUFFSTdHaXdNWVJCcHJRcXdZaEtWMXlxZ05Lb2hIK2FxMkppRnRJUzZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL25wbUxvZ28uZjc1MDliNWU5YjI5NWE2YTgyNDY2MzI1YzhjOTVhZGMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWFVsRVFWUjQybTJOc1ExQVlCZ0Z2L3ptRVpSS0dxMFJGTFRVZ3Fqb1ZHekFEQ2E1dDQrSXFIZ3YxOTZaUEJ3dlRwNTlwcDVLQXhVZE5RV3QwU2pYcUpTSlJLVTIwOHJPUXNiQnpNbHBpZ2lwYVlrSjhQRi9wTzVPM3RIbkYxV2pOV0JLNkJoQkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbnBtTG9nb0hvdmVyLmEyYzA3ODZlYzVhMjIwNjJiNmQyMTVlNzdiZTQ3MGFiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9FbEVRVlI0bkVXUHV3MENRUXhFUFJDU0VDR0lLWUNqQVJMcVFOcXJnQWJvZ200UUFSS1ZRTUF2QklrUTgrWVFkNk1kMldQUGVyMjZsdEtQaU13SWhaUmtzb2FHYkdpVklkSEgvcS9ac0VIY3ljZndCa2Z3Qlo5WUo3cVVzdWJXS1RObnhDTnhTWE5QYzhxNHloTzJUQmhTZkZEY2thL0l6N0NDUEZIWGMyNTVzd1Y2Z09FUUVXLzBoOWdZMkNuNXdnOFlHbGc3dDZGbkEvRCtMbkk2ZkFFYVBqNHozcTdFU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvcHl0aG9uTG9nby5iOGY0ZWQ5MTMzOWY1NjUwY2M3ZjU4ZjFlYzViYjVjYi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFia2xFUVZSNDJpV01zUW1EQUJRRkgrZ01EcUZEdUkzN1dDV2Q0QVNtRUxkSW1uc1FiR3dFc2JDMUVyNm8xOTBWSjZjU3BRZGFaeEtKTG1qQTRlcVJuRGRmRmdlOWF4ZnloK0JnWStIdm9KTTd3aU1UTXp0WG9LQ21KMWo1OFhMK2ZDckMwTnppUkhKRzY0RlNJajBCT0taTUJQb3pLOVFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvSG92ZXIuMzhhNDBlZWNiNWNkMWQ5ZTlmNTFlZGM5MWU1MTFlMzgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdWtsRVFWUjRuQjJPb1E3Q1FCQkVkOU5XWUVrZzRFbElxQWFMUjhBdlhFMXhLQVNmZ01DaHFPRVhPSVBIa2FCUm9OdWtLQ3loT2Q1eXlXUnVadWRtVDB2bllsSDlTZ2hURWRtQUYxamoxWGlSVmxrbVhQRGtpRG1HVS9RU0x0QmlEU1BFQ2t3dytpclNDeUdjNFNlNjBNbzV6L3M1Z1FiakRYOW9NQjRDYnl0T3ZGZ2dIZ1FTT0NIUWhsdTBlRnVSY3NscEdSQ1lNYXdabHVDS3Y3Y1Z3dEJPRGc2WWQvaEdPS1A1LzhrSW93RmRzQU1kc0ZYVkM0SDRCOEVRUmYxdWswSXlBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3JlYWN0TG9nby4yZmY3OGNjMzliNGFjODFmOGI2ZTYxODdhOWY2YWUxNS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFkMGxFUVZSNDJpV01NUTZDVUJpRC8vWHRobnNZVE5RNHNSc1owRW5jWVRBbUVsaUJDekN6d2tyQ2FiN2VCeDYwU1lldmFjME1SNklEZ1Y1eTVxV3pRZ3Irbkxoc2dFd2xMVFVWbWU5VElqb05qR3RHU2sweEQzb21abnJkRmZ2Smg1eGFqWEs5OTlNYklUKytPdXE2QVJ4UGd0VUp6bXdCUlRnOCtpU3ZmeHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ29Ib3Zlci5mNmRjMzA0Y2M0NThkYzEyN2MzY2U5YmQ1YmM0YTY1ZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFtRWxFUVZSNDJrM09zUXFETUJERzhWdXpGOStqV0doTEovZFNCOXVwRnBLdEhZcWc2S3ErZ0xPcnJvS1BwYS9oUHhMQndJKzdmSjVIeEo1SmF6VVpFODFhSCtETnhyeW9DckllZ2pNWEh4bFM3aWZxQmJKdCtDSm5TMDB0VWJocy9UdW1DZEF3MEZGN05PUUJZbUZOU1BCQWl3RWpXajdlRVFySERuMElmd1FsZldWNzZodXlEZHpnSThFZlIxejNqMVI0d25NaWw4a0NWVkZ4cWV5Y3BkTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3Nhc3NMb2dvLmU4MzUxYjIxOWIwZGE1YjRjMTAxMDA3NWUzM2ZkMmRjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9VbEVRVlI0bkIyT01RNEJVUlJGNzZPU3FEUWlVVkpTMklGWWdlaHR3eVlVS29sTzFPekdWNmdGTzFCTXhwdHo1LytjLysvN2MvTG1SYm1YcnFRYWxKR2NVckRseUdYQkg0YVJzZUdwUjM2UnIrUTZzU3pNS2Jad2x2U0FIZEtldTBJTUN3ZUtJM3hoRFcvNElCV0V0RERpWVFWOW1JRG5tY0lGaW9VeHdiK1lRUVZQY0pjYkRRWVdsaFFMT01FUDNLRmRDTzJRekVwZ3Q4dFhxc1A1dDlBQW9IOUhQTDQ5R2ZJQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci4yMzNmOTcwYzYyODBlODdlNmE3ZWI1ZTdkYTI3ZWZhOS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFvVWxFUVZSNG5DMlBNUTRCVVJSRjc2T1NxRFFpVVZKUzJJRllnZWlGVmRpRVFpWFJpWnJsakVJdHhnNFVrL0djaTVjNTgrLzdjL0xtL3loWDY2YWtHcFNSNHZsWEFEMENPYnQ4WGJEVFFycEh4cGxjMjdVd1psM0NVZElWTmtoYjFnb3hMT3hvOXZDRU9UeWdSQ29RMGtLUGpSbTBZUUErenhCT1VGam9FL3lMRVZSd0EwKzVNS0JqWVVvemdRTzh3Qk4reFpVc2NCa3lmTXNoMWVEOVpvSSsxOFk5akhpU1c0MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3NpdGVQb2ludExvZ28uNzA3ODQxYzljY2I1YzU4Y2ZmN2U1NThmMDJkOWE0OGQucG5nXCIsXCJoZWlnaHRcIjo4NixcIndpZHRoXCI6MjY5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFaMGxFUVZSNG5CWEx3UTFBTUJRRzRQOGQ2YVVjV0FCeFp3ODI2bUlkUVV6UUFVaWJIaXZWNUQweHdFZjd0bk5LaVdLTTBqWXRlZStscWlzb3BYQmZONUV4UnNaaGhITU9YZCtodkFVNVp6QXpyTFdnZVpwNVdSYzZqeE8vMUZvamhDQlBlaUFRK2dBRmlDMit1VnhWb3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvLjhiZThiNDhjYzBmNDdjNjc3NGVmM2IzMGVhMzA4MGE1LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmlXTk1RckNRQlFGZjQ3dzk0dUlwZDVLc1BNZUhzQkRXT1lZaXFXMjg3UVVRV3ppQm5LQ1RaWXc3UXhqTkRoQklpbHdHc041a3ZueW81TndVNUFwRlJVR3BXcjBmRGh6NWNaTFM1UHpuOWh4NHNDYmhSRmtGWTUwMnF0bFd4T1J1ZkNnMVowd3pkczFLellFTmdLYnpWUDVCaVR5YkFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvSG92ZXIuODhlZjE5YzUyMTg5YmJlODJiYTdiNGNkYTZkODUyM2YucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbUVsRVFWUjQya1hQUVFyQ01CQ0Y0Y2tSYkVURXBkNUtFQnJ3SGg3QVE3ajBHSXBMWFZlWFVpaVpSWnRDVDlEK1ExdTYrTWpMbXpBUWlYbnVzSUtQSVdSR3lkYVJuVmpRRUw2Y2lhSkNKTmQwaFRJVGdpY2t5cDVoYjZjQ0hUS3hWMmdabExqaGlSZCs5QnVKNDRQR2tJKzQ0c3o5ajdWdDhFalQrZ3RxN2lmY2NaZzNGSndKRDN5bTRSdGVLSnd1Mzl4aFM5N0R2aW9ESUw2SW43Z0NkbHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy91c0xvZ28uOTFmOGVmNTFiMDE4YzhiOTYzMjBmNmJhNTc4OGFiNWQucG5nXCIsXCJoZWlnaHRcIjo3NTAsXCJ3aWR0aFwiOjc1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBOEVsRVFWUjRuR1A4QndULy8vOW5ZR0ppWWdEUmpJeU1ETWlBRVNqNEQwZ3ovUHIxaDRHTmpZWGh3OGV2REkrZnZXV1FsaEJpWUdGaFltRDg4UEhMdnhsTERqRndzTE13NWllN01odzVlWVBoMmNzUC83Y2Z1Y2ZBd2d3MDcvQ0o2LzlzTGFZekhEcWV3YWlsSnNPdzY5QVZocWp1RS8vNWhGa1oxcGM1TURLMlQ5bjZyM0xkYllaSVBTSEdVRGNOaHRXN2JqQXMzL3I4LzZNRFNReXlVaUtNakcyVHQvNnJ5ajNDNEpXdXdoRHBxczRRRzdLSm9hTERncUc5UEpBQjZINEd4bytmdnY2N2N1TXhnN0s4T01PcEMzY1pMdDk2d1JEdVk4eWdyQ0FCVkFEMEZjd1hRSURzUDZBd1VCSUlBRnE0WnBBN0ZIVjVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nby5kZTVkN2JhOGMyMTZjMGI2OWI2NDZmOTRiNWEyM2EzYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJrMk5zUW5DWUJoRXIzQUZOOGdvT29EV0JoUXJLOEVCN0cxc0ZDRTdDQW9wa2dYK0RkNHRrK2JMUjlLa2VjYzdPRTZTeFlva0o5ZE9YVk5OK3FRUWJ1Ukx4bzQ2MlJJVThlWERRT0hCM3VGZWROejVFYnpZSnJPNEVqNzdSdkNmSnhVYmhIaFRIRFJhM0I1OXNFYUZVbEd5QkNPNWVRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLjZhNWFmYWMyZTNmOTliMzQ1NzkzNTk5NTM2ODJkYzJjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVrbEVRVlI0bkNXUE1RckNRQkJGWjhCU1NHVnY0UVZTQ1o1QlVEekJMcVN4OGlTS2hWaWtWRXN0RkVFVVM0bUlWN0NPNEJrQzQ1dGs0ZWRuLzd5ZDNkRXlCRkZWTWJPV2lsUW1JbmdrOVArdEF4MnloUEJENEd1QittakF3VnpMR0tkcXRxWTRJV3lqRGZBWkg1SVYzbUVQK2VPS2pMWnZDZzhPdlBBRCs2dCtRN2hBUGdsU2dqRys0a0VuL0VhbkdwaXhXUUpsZUlMbTZJaEdxSENnUjdFckluZkVDT29kVXVXUjdISUh4QmRRTXlZakF3UytGZkh1RDF4UlJIRGZ3ZkhCQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93YXNrb0xvZ28uOGE4ZTVjNjdmNDgyNTIyZjQ1OWM0OWFkZDJmNTE4OTYucG5nXCIsXCJoZWlnaHRcIjoyNTIsXCJ3aWR0aFwiOjEwMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVBVbEVRVlI0bkdPVW1IUTZrNEdSNFNVREE4TVhodi8vdVlBME13TWpJeXVRWm1KZytQOEpxT0RVTmFEQUZhRGtQNkRnTnlBV0F2SkJOQWlzQWdCQ21CQ0tLUFFzZ3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ28uYzgxMGJmODEwMDk5ZTFjYzMyYmU4MjRmYWVmOWVhMDkucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWTBsRVFWUjQybU5BZ0N0OFZ6U3Y4REZjRWI2U2ZhWHpTc1NWVTFjZVhmbHh4WnJocXZPVi8xZi9YNWtBSkVHMFBjTVY5U3Rycml5NUVucGxOWkJlZDFXRDRTcFk0Q3BVNElvR3d4V2dsaXYvcndLMWdHbDdocXNnUXp0Z2hsNjF4ckFXQUgzdVNkVUhGOG5IQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLjk5ZWU0ODcxMmFjNGM1ZTE4ZjNhNDEzZDY3OTkxOGM5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW4wbEVRVlI0bkdXUHNRMkRNQkJGL3pGQW1rZ1JVcFMwckJISk8wUXB6UVJJbE9rekFLT2taNGRrQ1ppQjduaUhnQVpMaC8zL1BSL2ZOdGExekYxdUpyRWJ1N3VmSkYxeEJodHpQaU5lMUIzakI5aENsT2dMT3NXRWhOR3ZOenNhRFkxdFBXSkNoZkZCVE5TWENVOUljQlhvZDB5b3lIQUFPQmQ4QUhKT2lKNTBFYllEYUFDd0pJRGxGMXZJRzhhZlZzdTVwUGFRY1ZNMGxyV0czWjg1QTVGTVFxRzhUeEtvQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nby42NDM0NTA4ZWQ1MWE5MDZhNzU4NGM5OTJjNTcwODAxYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiMGxFUVZSNDJnM0pzUW5DVUFBRzRZTzNnTVlkM0NBT0VEQ1F4aGdEZ3NQWWlqWVdFUnpEYWU2Zkp6NE9ydmxJQ1c2Y25lcXhBTFpaN0IxYzBvYXFMcEloWGZEamhrd1pRMVlma3BzanpuYVpYZjJLMTV6SnJ0ckpYKzd1ZmJzRlBPUnA3ekV2VzhFaU5sNXFqYVQ4QWU1OVE4QlZTdTRxQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nb0hvdmVyLmRkNTU3ODczMTc2MjAwMWE4Y2I0ZWU1NDIzNzU1NmQ4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXYwbEVRVlI0bkNXUHJRb0NVUkNGWjdndjRNK3phQmEwR0ZVUURNTGRKZ2FMVGJCbzhBRU1Qb0JKc0FqbTFTaHM4QzNjcGlaQndSMi93UXZET1hlK2M4K3ltc2NZUk9ScklpVzB5UlRNU1ZXZlloWTBUeExCMUFnTUFVY1ZDZmcydXVXZTZTM0dFdWtGeXduQk52NE5TUEZyVVozN0p6cVl3c3dPdkRLQ0t3SXpnZ04yTDIvb0FSNm1XZ2J2Z1J2Z0dOaEhQOTVRWlRubDVZVmdSSy9jZDh5SVdYcURjT3JBTGpERkc3NkY5N2JNR3dMR2Y3T0NOdVIvem9UdWFQZ0JUTjlMQ0ozbHRFWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL25la29tdXJhLmJiNGM1NWJmODY5MDJhZGY1NmQxOWM1NjlmODZjNDFkLnBuZ1wiLFwiaGVpZ2h0XCI6NTkyLFwid2lkdGhcIjo3OTAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXZFbEVRVlI0MmdWQVNRN0JVQmorL3ZhcERvcDBJWkdJRW1JcE5qWVcxbllPNXhDdUlRNGdFYllpQ0dLb29hWTJmWDIvMEdnd1ZFYWlJRkpKYnJrS3A5dGlDSW5yZUFycFdTVHdqc2p1ZFdBM2ZSRG5jRDV1cVdnSjVQdHQvdTRPRUpGajh2ejdncmZlVUZiRjBFekZ3VDZDMjJ4QlBRSm9vWjdRWjdPaTUzSUJKL2loV0tpUjBqSzB1bHh3Y25NUXB1OXpJMnRCdjkwb0tYdUlXYkwyaWVEZEQ3QkRoZ2pyVlVyQ055cWxHb3pKREd3YWNHSkplc2JnbElBL2paWlBKVWpRcGVRQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by41ODg2NGZjNjdhNGI4M2VlYTA0MTZmOTgxMjgxOTRiMS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUEwVWxFUVZSNG5BSEdBRG4vQVU5c1hQNG9PbUlCRXgwMEFQbjcrZ0FRQWZzQStnTUkvLzcrL2dBR0JQOEJBVnlIbC80ZURod0FFTkxUQUFWRlR3QU9DZllBQ3YvMUFQTU9KUUR2L1FjQUFXbXEyZjhMNTk0QStXOUpBQzZSbkFENERnc0FDZkhYQUIwcE0vL3YvdzhCQWFmRzMvN0d3Y2NCSitHNEFBODRWQUFJQmU0QTdQUHoveklxSWdEczhmSUJBYk9wblA3bTUvSUE2Z0lpQUFvZEtnQW04c0lBNVFNTEFDVVpEUUR4N2VZQUFaQ01qdjVOVTFRQjRPYjAvOFRyQUFFTjJiTUFDUVg1Ly9rRkNRQW9JQmNCT0h4Um92S2dHbzBBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvYm93bGluZ1Bob3RvLjRhZmIzZTg4ZDlhMzdjOGU5M2E4NmRkYWE3YzBmOTNlLnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXgwbEVRVlI0MmdWQWI0dkJjQnovZkg5K2R4czdzM2pnWEZpVHVnZlhycnU2dWp5U2VBVktQUEJ5bGFSNHBwUldKSkd5bWYrMitZcEtoY3JqMDlSUXNaS1lEVlE0TW9BVHowUG82cEc4L1FKR2JFdEZyVStuTzRNaWk4UmhzMlhsa1lJYmFwaG5raGluODlDMUVWTzcwMlgyUXJ3S0MzNjVBVmY5NEwyN0kySGFOV1IvcXp3Wjl1Q25zakNLSlZ6aUJZakxOZUJ6UkVqOC9TRGhyWkdSQjN5L2c2V1pFM0NtUzdTYWRaYUtEbCs1SVV6SElQa09Lbi85czIzbmFEVjNFQVhFTDI4R1BRRytPRW1xUUJDdzN3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLjRhNTEyYWNkZTNhZjA3NjhhNzFkZjU4YjcwYzdjNGQ5LnBuZ1wiLFwiaGVpZ2h0XCI6ODg5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHlHaS8vdTRkRC8zT0xuQVNJY0dRQUJjM2wvLy9YbDBBRDVBZ2tBRWc4T0FBR0Fhay8vQVA4R0FPOEJEUUFBQVA4QUFhT0thLzczOGZFQTBlYjdBT3p6OUFBQnFJcG8vZ3dEL0FERjJld0E0dkQrQUFHc2lHSCtDZ1g5QU80T01nRGo2L0lBQWFxRFcvOEhBTzBBRFVlT0FCMGlJZ0FCcEhsTy9oTU45d0FJT29ZQUdpWXFBTEpIT1o2emVzSk5BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jb3AyNFBob3RvLjA4ZTAzYjE3OGI4YjdjNzgwOGY1YTBiYjRmMTVlZDZlLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhrbEVRVlI0MmdWQVMwN0NRQmorL21Zc2xUYjRTblJEb29rUjRnRmN1SGJqRGJ5SU4vQUNuc1lEdUNPNmNtRTAxQWZ2bEZkZ21EQkRXK1lqOHZ6MDZLT29Ja29sdUx4cTRLTmpjWGJlNU1QOU5jYURvYWc0U1JCV3FxeEdCM0FMZzkrdXhueWRvdCtNWVoybENrSWxFQ0RjQy9IOTFvSTJSMWk1TGRLZmY4YjdnU2lROU42TDB3YTl2eDVhb3paTzZyZk1zZ3kxSkVCUTVpV0t2T1FvYmZQcjlZV2Y3MlRqMkFKYmcrbGtSdVdzQS8xR2xsSXdxMS9JM2MwaFRtczVqZGJZRklYc0FMRUhZV1lCRWxsNEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLjJmOGE2MjlhNmVhMWI4MTM1NDE3M2FjNWYyOTJmYmQ0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXdrbEVRVlI0MmdWQXZXckNRQUQrdnBxZlFaSXFwVlN3SFFwZEt2NmdidUlpanE3aTQva0FMb0w0QWlJNEtqZzRCd1FoSUtLNUpNYWNkeWVjTHZmYXNtMDJmbnlRUUhqTDhKVEs1SThjUmtsYXYyVkNxZHpFSWtMQmNaQ21LUzZ4aEVnZXVJdklXTlA1bW41K3h1ZGZEWTVYUXBKbUVDTEJMUXpNTmRpVHBkWkUrK0dCMVhZWHRuc0htU0U0TGt5MStBNnZVQ2RINDc2MmtjRkZERzJkVVBrYW90c2NZTHZiWUxXZTRhM29SdEJLVXRHRGxOOGM5TVpzL0hmdzRWZFE5alJmL0dSVFdlRW1WRlFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvZ2lld29udFBob3RvLjQ5MmNmOGMyMzJiODkyMmU5OTc1NTNjY2U4MjIzZGY5LnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQWlFbEVRVlI0MmhYTlFZNENNUXhFMFYrTzB5UGcvb2VaN1J4Z0RvT2dvWjJPRFZsK3FaNUt2My8vV1lnWXlmMTVjTVJnaklrM2R5R1ZOWFFtcEZSd3lzMnNlbmRpVEZEaHpXaVhuM0lUV3Z5NTcvUVZIWTc0aXRjN2FPNjFiVjBHWEs0Yjl0Z3h5V3JFc2M0b2pDcTQzYTdsNHp4WnRRYk5qWnlUaUlHVEtXdExoV1ltSnBVcTlRRWQvRXNKUE1oOWhnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8uNTIwYzlmZWZlZmRiNGIyYWVhMDg5YWY4MzZiNzgzMzAucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjg4OSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBajBsRVFWUjRuQUdFQUh2L0FadU1oUDlJVWtZQUZSa1dBUDM5L2YvZTIrQUF3YmpDQVFVRi9nQVNGeFgvQWEyaGwvOFdHQk1BQ1FvSS8vSHg5QURGdjhnQTVkM1pBQUVFL2dIaDNPZi9BYkttblA4TURnb0E4ZS95LytmbTZ3QUU5TzRBMU5yV0FQTDI2UUg3L1FiL0FhU1ZqUDhJQ3drQTZ1YnJBTTdrOFA4VSt2RUE1ZVBkQVAvLytBSC9BdmovL0xKSExrby9vWjRBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLjJmNDk1NDc0MmI4ZmM0YzI4NzU2MGQzZWI0YWRiNGJhLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqa2xFUVZSNG5BVkFzUW5DUUJSOVA0Y0VDWWVnQ0lvRHFOZ3A0Z0lpcExTd3NiRzBjSWdVTHVRR1RwQVJBcVlRTVlGNEdnbm5rZkJFb3VqTXloamtTWXJLK3RDYXRPVUxnL0VFalFCeTNJWHNkUHRzdzhwaXJuQjdCTXd6RDhYbkNlY2F5UDYwWmVrTXhWN2xzQWJjYjhwTFBNSzNkaWplQ1dRVHJnaDRWTDZXb1FSWXp1Nk0weGF5dWdjRjRnOXpEanZ3LzZwYVZnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by40N2JlZTk5ZWJjOGQ3ZjQzZDVlMzg5MGIzZTA1OGNlMC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTAyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBalVsRVFWUjRuQVZBTVE3QlVCaisvbWllMEtxbnBUcm9VRXNyYVNNaFlqT1ltQnhDSE1ENWJDNWd0aGxNaGxhVmtOQjhJc3ZWbG5uVndVVlBNWEVOekFaZkhzOGY1TXBEMUhoQmhtRkNwNmRwelBleWlXdlE2czdEcVFENlk2Uk9DYkg5bUw3MVk3cmV5V0xrUWxVRkgrVVROUjBpZXd1a2FiV3A2b3FlRjBnU0JiQmJKa0dpYXhxNDNqTDhBYWlWSzhXVndBRXRBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8uMzQ0MWJjMTkxMTIxZjM5NTBhMmIwMmEyYmI5M2ZjNDEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWowbEVRVlI0bkFHRUFIdi9BWFZoTXY4TUdUMEFKejliQUJVV0ZRQVZFeEwvL1BqMkFON1V5UUR6NTlFQUFXcGNQUC8zOWhUL0R4WWFBUVVORXdBM1BqMy83ZWJmQUwrNXZBRFc0dmNBQVM1QVkvLysvZUwvQUFmOEFmZjc5d0RkMjhqL0FCVXRBREViS2dBRkFRTUFBV0pmWGYvVTZ0My84dm5HQVFnSkNnQUZBaDcvK3ZueEFQcjU1d0FEL3dNQVRMZzVxSTNIVWJFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8uYjc4MTVlYjQ0OGE4MmRiYWFiZWUzZDA2NzZiZjcxZDkucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjc1NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBblVsRVFWUjQyZzNNU1E3QlVBQ0E0ZjgxcjhSUTBZcUZoVE5JdUFqM3RISUNLOExTM3F5MHREcXJEa241RHZBSnkzWXI3KzFVc2xZbmprS2FqUVp0VFVNSVJaUkZqdHh1MXJpT3hXZzg0V0dhNkhxWFZxZk4vWHBpZjdraUY0czVzZThRUnZGLzhPa2JPcS9iZ2QxcVNhZ2F5TmwwU3VBSDFOVWE2bkJBaFNMY3AxMFZaWUhSMDVCcGtwQm5HWmZ6a1NoSytPUVFlQzVLWUpJNlgzN0wyMDFBczVmYk1RQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLmEwZmNiOGJmZTg3OTRmODlhODM2ZTIwYjJlNmI0OWJlLnBuZ1wiLFwiaGVpZ2h0XCI6Nzk5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFJQ0FZQUFBQXg4VFU3QUFBQXFFbEVRVlI0MmdWQVFRdkJVQUQrM2p5c3RXeWt5S0xJd21GeGMzUDBVL3cwLzhKMU5hVlpIQlF1UzJJeldqSGJ5OXNUbVMyVytTOWxtR2dCbkxpRmd1Q2cwMkdkU0N4R2REeUx1VFVnbHRrRTFUVUZNaytnR0NvWmp5b3crdzFJVms4RFQ1L2dXWW9vdU1BK3ZDQ2QvS3NvNVpISWlTdzhieXRxTWhNU3U3dkl2Z2swM2NEbnpiQ3hWNkI3ZDQyYkgwQ3Q2bmlFSWRrNUdTaEJDZTF1QjV4ekZDbEZzYXpnRDVYeVJ5eHREZlJMQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLjZmZWVkMzM0ZmQwOTZiYmM0ZjU4YjgzZDdiNTQ3ZjViLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXJVbEVRVlI0MmhYTVFRN0JRQlFHNFA5bFhxZG9OUWdWTm03aHNrNGdEbURoR2hZU2NRQWhRdE5XT3pOOVQrMi9mSFE2N01VNklYRXRpc2NkbktZWXorYWFqQktFS0NiZVhSNm9tMGFkQ3Q3M0NxQUt3K3dGcWgzRzFpcFA4NXdTNmRBSTRFMEpNZ2I1TW9YdlJJTXdzZnBXMVFzTmJZVE56R0E2VUZoVGF4azYyUFlOWG9VbjRnR3JBTkN5d0w4eWt4RW1UR2krTitYcjhRVG4yMzZPMUdWYmlydFBqODRhRUNOYnJPa0h0RkpVVUtadFFwTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8uMDk0ZmEyNTg2N2IzZmFhYTJjNzg5ZGFmNDRmMTM5OGEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBeGtsRVFWUjQyZzNNTzA0Q1VSU0E0ZjhNbDVrTE04UERDUEdaMlBoZ0RjYUNSQ3V0cmQyR0N6Q3hkeGt1d2NhU1Nuc3JiZFNnTmhJWTRENE9mQXY0NU83aE1mcTBJV0xxNU0yVU1yZHNGRmIzTzVaV0xZalpybFhNRFZwc1duYUxsRzRHN1diZ2FmVE0rT05OWlhCeXBNei9HSjZkTXp3K3BOZHA4RDd4M056ZTYvWHBnY2pWeFdWMEl0TGY2alBvbHV5VWRWNitadnI2ejNwTHhMUjZlN2lvV3ZtRTBYZUYvVjBpM3RGRzhOT2xtcytmTVpsSkpjOHlOU0ZJU0JJV3ptbEU4VkZsQlhMK1JVMGFDZHp6QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWNsYXJlblBob3RvLmVjNGY2MTBkNWMxZWEyZWVkYzU1NGQyNWUyMzNlYjY3LnBuZ1wiLFwiaGVpZ2h0XCI6ODkwLFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHA3Y2Y0UERRNEFCZ2NIQU43ZzVBQUJqcGFVL2dVRkJnQUVBZ0lBenMzTUFBSFF3NjcvNWZEMkFQYjA4d0RUMWRjQUFhK1lmLy8zQlJUL0JnMEpBT1BvOFFFQmpJSjcvOXZKendBWEZnNEEyL0gxQUFGZFYxRCs0TnpoQU8zYzRnRCtGQTRBQVQ0NU12LzMvUUQvL2Y3L0FmbjQrZ0FCTWk4cy92MzkvZ0Q1Ky93QS9QNy9BQTNFUXVSMUIybzVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9ub3RyZURhbWVQaG90by5jYWFjMGQ3OTkxYzIyNGFiZTkwNGQ0NDBhYjczMWE0OS5wbmdcIixcImhlaWdodFwiOjY2NyxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF3MGxFUVZSNDJnVkF6VW9DUVJ6Ly9XYkdiV3pkVVNLNmRTZ1E2bFFQMEJ0MDZRRzc5Z2hlUEVWMEx3cWtDQkowL1lCQjNmVUQxOVhadi9ENXBWTXhiRUNwWUU5alhMVnZjZDV5VUJvN1pxTWVmUHJMU0pPUlRiRGFsbFFYclJPSlZJRnlPWURWQnpSc0RkTzBMOGIvZnpNVUJWRHVrUHNCL25vZmVIdnQwdmpoRkxQRFRCckpHZlA1Qk9NMFExeDNNTnU2azd1YmU5UTBFU21pMDMzSDErZVBtTXZyTmpRMWxuTXZpeXlITmNEVDR3TlVZalZsdjBZVjlwUVEyRXhpdUtiakVZaXhUN0djdnZ3WEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8uZjVkZjUyYzJmYjVkNzhjZmZiZGI4ZTY1OGM5NzE5ZTMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBdzBsRVFWUjQyZ1dBdnk4RFVSekFQOS9YOTNyWGE2OTRKM1dEQVltRVJOaHRCdkUvMm14R2k5VXFFaEdFV0F3V2FZZ0xQYjNyOWNmZHQ1SERvNFBtK2VsRkxpNnYyZC9kNHZ6cWxZOGYxWGsxWVZ4T3hhNTBZbExRbTl0N2NwZGllaEhlV0g0elE5U3lhZ2RoS085QVlHdE1xeUZaZGFTYkE0WkRwM2srRWR2ZjJkYmpKQmJmQytqV0dmWFhHM3RlZE0xWGZKb0tPVHM5YWFLZ2pUUENldUlweXlsM0Q0K2tHekd6MlJ5Yi9TMFl0NUZPNFBTLytCWlF3bTVmczFGRlVZeGtDV3VWUi9rUW9PblpBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8uMmY1ZjRmYzVmNDEyNjZlMzRkYmY1ZDc5YjBkNDVjNzQucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd1VsRVFWUjQyZ1ZBMzJzQmNRRC9mTXcydCt0N055UFdicnViM0hhYkZFK0tQSXJ5VnlzdnlvTlM2dnlNdUJBZDNZdE91YS9ZK0MxRlZlMUdFWjdSRlQ4UWlUZWtVa2taSklEcnh4Zmp6R1R4R0t4a1dsRmhiQVBvelR6S2xRSVdtb013NjhoWWJUYmd3M0RNay9yT3piOUowemI0WFhRby9Ubmloem5acy82aWp1ZlNyVGZoV1Nhd0hPUFRlSlU3UHdRVm5Xemw3RWpJQzVMYU0zS0t3RG1tWWpKejRSMTg5QUV3RFVSSGdHMHJJNjJYSi9xNmpYekJsdGY5R3NGMHhEc3JQMEdlS1VaMzdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9yeXNpYW5rYVBob3RvLmI4YjUwMzYxNDA1NzM0MjM5MTNhNzAzYmY4ZDk5YjY3LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXprbEVRVlI0bkEzS3ZVcENZUmpBOGY5enp0djdtbFlTZENwQm0ycUliSWh1b2t1SWh1Z09hdEdsdWJ0bzdEcmFvaUNpRDNLUWtqVEZiemh5MEVHVTk5SHB0L3prN3Y3TlMyZ2t0QWFYdHF5dE8rYWd1MW5IT0lsRkhoNS92YkVXNDFaSVp4eXBwVE8vSEY0SkJlUzZmS3Q3K1R6OWFjQk9GSkhMUmFSV00xanJORUJGQ3R2NDR0R0JaRGMyU1NZQmxlOTNHZ09qKzhVVG1yMUVwSFJ6NForZVB6ZzlQR2FyWUdqM2hyeSsvREdLQnlnV0taZk9mS2NleStYNWxWWXJuMUt2VmFsMVo5cG90Zm42K1pjRkZjNUh3bHBDMXlnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3NraVN3aXNzUGhvdG8uZDVmM2JiOWM5NmVmM2VjMTI3NmZmZTNlMjA4MzYyZjIucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBbzBsRVFWUjRuQTJPdXc0QlFSaUZ6NWtaV1NKQjRlRWxPaEdsam1oRXBkUXBQSUpxczVOZFpzM2wvMDE3cmgrM2g1Tk1adzFKZzVneVlnR1FrenBMVEp3aGorZWJEQ0dDVlZmWDROMzkwT2lJOVdxT3JodkF4L09sT1JlMGJZZVVFMG9SK0Q2Z0NOWDd2aTVjN3VJbWp0WWFHSzBYNDRoVXFIMUlVRkZ5ZDd3S1NLZ0NuMitBOXdPV3F3VTBTdzFVYTdNL1MyMVRSTlZZMGxtTEdMT0dNYUVpOGcvelUyR0N3NlkvdEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3N1c2hpUGhvdG8uZjk5NTBjNDg3ZTg0NTRlMjRlYjM3MTJkZDIzZGMzNGUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd2tsRVFWUjQyZzNLVGFzQlVSd0g0TjkvenBuUm1SdjNqanNLSVlTOGxMTEJ5a2VRbFcrc0ZMRWlDK1ZsZ1JKR1hwcUdjdzZMWi9kUXQ1VldkdnlIK0pGRFNndi9UaGpFVEMzOUFBWXg0dUYwQ2ZMcDY4TnlnSkFkZy9JalNHYUxVTld2YitURzlrcm1VeUo0V2Rqc2pxaEdYZVNiSFp5Y2lINkVCRkV2QVNYL1hPbzNDN0FoWURiYW1FNFcrcDRxNExkU0orNFpVUWlwTkJJMU9Ma3k0TWFROFc2WWpjWklpYmZtNzBEaGJERWF6dGU2WVRMS3N5dHNUdHE0N09HdEJIMEFZWkpEcjlRamlMQUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc011cnJlblBob3RvLjY1MmQ4ZTMzMTBhOTYzOTFlODlkN2NjOWJhMmZhMDM0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDU3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqMGxFUVZSNG5BR0VBSHYvQVdHYjJmOFVDd1AvQ1FMOUFBUUMvZ0QyNnVNQi92cjMveE1NQkFBd0xpZ0JBV1NKdS84Q0Jnai8rZmZ6QUFqdzJBQUxEaElCOXZQdi8vOEJCUUFGREJRQUFjUEh6UCtMbXIzLzVBZ1dBRVgvMWdEN0NCRUI3Z3NYL3dMNytRRDI4L0FBQWJXdXEvL00wZHYvOXc0WEFCeXlxQUQ4TmtBQkN6by8vd2I5K1FEMytmd0JMcnM5TXNidGQ1QUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLjZkNGQ5OGE4NmJjYmIwYTA5MWZlYmQ1ZTA5OTQ5MDYzLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhFbEVRVlI0bkIzT3ZRN0JVQmdHNFBkcnRkUmZJeWxTa2REQkpuWkdrd3V3dWdleE1kdkY3QWJFYmpOWUpGeUN3V2pDUWYrMHBlY1FOL0Rrb1dKdnhvWHJreFQ0aU1NWFpCNGg1aEJ2TGtNa1UwU3Q0WnJmbUl2ejFRYkNBUEFqSUtOQ04zSklxd3FvUFZxSlFscEQxY2orQlVOUDRlTThZWitPSXQ5cUVuWDdFejdvZDBqVk5MRGJCWXhkRVhpUzBCVUpacU5DdEZpdWVlQjdjR3dQN1A2QVZhK2haSnJZYkhlUUl3YzBuczU1dVdTUW5FZ0tJb2tzeTRLcVFCejJCengvK1M5K2VGRm5PWFEzQUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3dhbGVzUGhvdG8uMjczYjIxODFhYmU2Y2M3NjFlMjk5ZTczZGFjNDFlNWUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBMFVsRVFWUjRuQUhHQURuL0FjelIzUDREQmdVQkFRTUNBQWtHQ0FENitma0Evdi8vLy83Ly93QUNBQUVCQWM3VjMvNzg4ZkVBNTd1OUFCRTlPd0FPR2hrQTlmUDFBUDRCQUFEZjN0d0FBY0xJei8vaHhNTUEzSFJ1QUJkMVpBQXJWR3NBOC9Ed0FPbnM2Ly9XMXM4QkFZaUdpZjcxdTdrQnorM0FBQm9tU0FBZEx6b0E5ZWpnL3dRTEVBQUEvUG9CQVdaeGV2NE4xOWdBOHJ2SUFQUTNLZ0FWSGhBQUloSU5BQWtaSUFEdTRkb0FBVDVVWVA0NTd1b0JMK2ZwLy9zRkNBSFlNQ1VBR3c0Qy93SUpEZ0FEQkFNQk5sdFVGaU4xa1lZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid29ya0NvbnRhaW5lclwiOiBcIndvcmtfd29ya0NvbnRhaW5lcl9fM2Z1anhcIixcblx0XCJjb250ZW50XCI6IFwid29ya19jb250ZW50X18xc1lraVwiLFxuXHRcInN1bW1hcnlcIjogXCJ3b3JrX3N1bW1hcnlfXzMzM0RFXCIsXG5cdFwidGltZWxpbmVHcmlkQ290YWluZXJcIjogXCJ3b3JrX3RpbWVsaW5lR3JpZENvdGFpbmVyX18zMllhTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGhvdG9HcmlkXCI6IFwicGhvdG9ncmlkX3Bob3RvR3JpZF9fMzZtMk5cIixcblx0XCJnYW1lXCI6IFwicGhvdG9ncmlkX2dhbWVfXzJoeTFfXCIsXG5cdFwic2tpXCI6IFwicGhvdG9ncmlkX3NraV9fMzd3MGpcIixcblx0XCJjYXJcIjogXCJwaG90b2dyaWRfY2FyX180TFZhNVwiLFxuXHRcInNreXNjcmFwcGVyXCI6IFwicGhvdG9ncmlkX3NreXNjcmFwcGVyX18zeWFYalwiLFxuXHRcImxha2VcIjogXCJwaG90b2dyaWRfbGFrZV9fMVBKNEhcIixcblx0XCJtb251bWVudFwiOiBcInBob3RvZ3JpZF9tb251bWVudF9fM3J6LTBcIixcblx0XCJzdXNoaVwiOiBcInBob3RvZ3JpZF9zdXNoaV9fX1hJU2NcIixcblx0XCJib290c1wiOiBcInBob3RvZ3JpZF9ib290c19fMmVzOHdcIixcblx0XCJ3YXRlcmZhbGxcIjogXCJwaG90b2dyaWRfd2F0ZXJmYWxsX18xdFZPZ1wiLFxuXHRcImNyb3NzXCI6IFwicGhvdG9ncmlkX2Nyb3NzX18ybVI2UFwiLFxuXHRcImJvd2xpbmdcIjogXCJwaG90b2dyaWRfYm93bGluZ19fb1pqNlZcIixcblx0XCJtYW5jaGVzdGVyXCI6IFwicGhvdG9ncmlkX21hbmNoZXN0ZXJfX0gtbm9jXCIsXG5cdFwiYXJzZW5hbFwiOiBcInBob3RvZ3JpZF9hcnNlbmFsX18zVGRHRVwiLFxuXHRcImNoZWxzZWFcIjogXCJwaG90b2dyaWRfY2hlbHNlYV9fMTI1QmRcIixcblx0XCJ3YWxlc1wiOiBcInBob3RvZ3JpZF93YWxlc19fMTg3ZUhcIixcblx0XCJhbHBzXCI6IFwicGhvdG9ncmlkX2FscHNfX0lvcnJMXCIsXG5cdFwiY2h1cmNoXCI6IFwicGhvdG9ncmlkX2NodXJjaF9fMWdYTWtcIixcblx0XCJtdXJyZW5cIjogXCJwaG90b2dyaWRfbXVycmVuX18xUjBtaVwiLFxuXHRcImVpZmZlbFwiOiBcInBob3RvZ3JpZF9laWZmZWxfX1Y2MlNxXCIsXG5cdFwiYnJpZGdlXCI6IFwicGhvdG9ncmlkX2JyaWRnZV9fM0xXSmhcIixcblx0XCJjbGltYlwiOiBcInBob3RvZ3JpZF9jbGltYl9fLUFtOURcIixcblx0XCJiYXJjYVwiOiBcInBob3RvZ3JpZF9iYXJjYV9fMjZwUDJcIixcblx0XCJjb2xvclVwXCI6IFwicGhvdG9ncmlkX2NvbG9yVXBfXzN3Wi1EXCIsXG5cdFwicGhvdG9JbmZvXCI6IFwicGhvdG9ncmlkX3Bob3RvSW5mb19fMUFpVnpcIixcblx0XCJmYWRlSW5cIjogXCJwaG90b2dyaWRfZmFkZUluX18zNWp0cFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9feEtJcUhcIixcblx0XCJnb1VwU3F1YXJlXCI6IFwiZm9vdGVyX2dvVXBTcXVhcmVfXzJQY0tSXCIsXG5cdFwiY29weXJpZ2h0c1wiOiBcImZvb3Rlcl9jb3B5cmlnaHRzX18yLWltb1wiLFxuXHRcImljb25zXCI6IFwiZm9vdGVyX2ljb25zX18yVXhfX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRJbmZvXCI6IFwibWFpbmhlYWRlcl9hYm91dEluZm9fXzF3NnUtXCIsXG5cdFwiaGVhZGVyXCI6IFwibWFpbmhlYWRlcl9oZWFkZXJfXzJkdzgxXCIsXG5cdFwiZGVzY3R4dFwiOiBcIm1haW5oZWFkZXJfZGVzY3R4dF9fMk1MRU9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlY2hub2xvZ2llc0ljb25zXCI6IFwidG9vbHN0ZWNoX3RlY2hub2xvZ2llc0ljb25zX18zbmQxc1wiLFxuXHRcInRlY2hub2xvZ2llc0ljb25zUm93XCI6IFwidG9vbHN0ZWNoX3RlY2hub2xvZ2llc0ljb25zUm93X18xcW1TTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcImljb25faWNvbkNvbnRhaW5lcl9fM2pVSTRcIixcblx0XCJpY29uXCI6IFwiaWNvbl9pY29uX18xN1RxWVwiLFxuXHRcImljb25BY3RpdmVcIjogXCJpY29uX2ljb25BY3RpdmVfXzFGNDYyXCIsXG5cdFwiZmFkZUluXCI6IFwiaWNvbl9mYWRlSW5fX2VwV3NzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51QmFyXCI6IFwibWVudWJhcl9tZW51QmFyX18yWFc2a1wiLFxuXHRcInRpdGxlXCI6IFwibWVudWJhcl90aXRsZV9fM3lLUWpcIixcblx0XCJzcXVhcmVJbml0aWFsc1wiOiBcIm1lbnViYXJfc3F1YXJlSW5pdGlhbHNfXzJmSWMzXCIsXG5cdFwibmFtZVwiOiBcIm1lbnViYXJfbmFtZV9fM1lld3VcIixcblx0XCJ0YWJcIjogXCJtZW51YmFyX3RhYl9fbUhvMGxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbWVsaW5lR3JpZFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRfX0ZOQ05JXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbVwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRJdGVtX18zQnE5cVwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1DYXJkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1DYXJkX18zandTYlwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkX18zUGJNclwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1XaWRlXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1XaWRlX18xTHQwSlwiLFxuXHRcInRpbWVsaW5lUG9pbnRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVQb2ludF9fMTlPYzBcIixcblx0XCJob3ZlclRpcFwiOiBcInRpbWVsaW5lZ3JpZF9ob3ZlclRpcF9fRXU1MUVcIixcblx0XCJwdWxzZVwiOiBcInRpbWVsaW5lZ3JpZF9wdWxzZV9fMUN6UHFcIixcblx0XCJjYXJkQ29udGVudFwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudF9fM1JDUnlcIixcblx0XCJjYXJkQ29udGVudEhlYWRlclwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudEhlYWRlcl9fMU5HSzVcIixcblx0XCJjb21wYW55SW5mb1wiOiBcInRpbWVsaW5lZ3JpZF9jb21wYW55SW5mb19fTTdMSWZcIixcblx0XCJjb21wYW55VGl0bGVcIjogXCJ0aW1lbGluZWdyaWRfY29tcGFueVRpdGxlX18ySEpVTVwiLFxuXHRcImNvbXBhbnlMb2dvXCI6IFwidGltZWxpbmVncmlkX2NvbXBhbnlMb2dvX18zNXE0alwiLFxuXHRcImNhcmRDb250ZW50RGV0YWlsc1wiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudERldGFpbHNfXzNWd3JiXCIsXG5cdFwiY2FyZENvbnRlbnREZXNjcmlwdGlvblwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudERlc2NyaXB0aW9uX18yQmlLVFwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvb2x0aXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==