(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
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
/* harmony export */   "mainpic": function() { return /* reexport safe */ _123123_jpg__WEBPACK_IMPORTED_MODULE_55__.default; },
/* harmony export */   "image1": function() { return /* reexport safe */ _image1_jpg__WEBPACK_IMPORTED_MODULE_56__.default; },
/* harmony export */   "image2": function() { return /* reexport safe */ _image2_png__WEBPACK_IMPORTED_MODULE_57__.default; },
/* harmony export */   "image3": function() { return /* reexport safe */ _image3_png__WEBPACK_IMPORTED_MODULE_58__.default; },
/* harmony export */   "image4": function() { return /* reexport safe */ _image4_png__WEBPACK_IMPORTED_MODULE_59__.default; },
/* harmony export */   "image5": function() { return /* reexport safe */ _image5_png__WEBPACK_IMPORTED_MODULE_60__.default; },
/* harmony export */   "chevronDown": function() { return /* reexport safe */ _chevronDown_svg__WEBPACK_IMPORTED_MODULE_61__.default; },
/* harmony export */   "posterCommission": function() { return /* reexport safe */ _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_62__.default; },
/* harmony export */   "logoCommission": function() { return /* reexport safe */ _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_63__.default; },
/* harmony export */   "comicCommission1": function() { return /* reexport safe */ _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_64__.default; },
/* harmony export */   "comicCommission2": function() { return /* reexport safe */ _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_65__.default; },
/* harmony export */   "schemeCommission": function() { return /* reexport safe */ _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_66__.default; },
/* harmony export */   "barcelonaSagradaPhoto": function() { return /* reexport safe */ _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_67__.default; },
/* harmony export */   "bowlingPhoto": function() { return /* reexport safe */ _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_68__.default; },
/* harmony export */   "climbingTopPhoto": function() { return /* reexport safe */ _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_69__.default; },
/* harmony export */   "cop24Photo": function() { return /* reexport safe */ _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_70__.default; },
/* harmony export */   "franceLaSalttePhoto": function() { return /* reexport safe */ _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_71__.default; },
/* harmony export */   "giewontPhoto": function() { return /* reexport safe */ _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_72__.default; },
/* harmony export */   "icelandWaterfallPhoto": function() { return /* reexport safe */ _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_73__.default; },
/* harmony export */   "londonArsenalPhoto": function() { return /* reexport safe */ _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_74__.default; },
/* harmony export */   "londonChelsea": function() { return /* reexport safe */ _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_75__.default; },
/* harmony export */   "londonTowerBridgePhoto": function() { return /* reexport safe */ _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_76__.default; },
/* harmony export */   "londonVictoryPhoto": function() { return /* reexport safe */ _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_77__.default; },
/* harmony export */   "manchesterUnitedPhoto": function() { return /* reexport safe */ _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_78__.default; },
/* harmony export */   "mazuryDawnPhoto": function() { return /* reexport safe */ _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_79__.default; },
/* harmony export */   "mclarenPhoto": function() { return /* reexport safe */ _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_80__.default; },
/* harmony export */   "notreDamePhoto": function() { return /* reexport safe */ _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_81__.default; },
/* harmony export */   "parisEiffelPhoto": function() { return /* reexport safe */ _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_82__.default; },
/* harmony export */   "playingIEMPhoto": function() { return /* reexport safe */ _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_83__.default; },
/* harmony export */   "rysiankaPhoto": function() { return /* reexport safe */ _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_84__.default; },
/* harmony export */   "skiSwissPhoto": function() { return /* reexport safe */ _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_85__.default; },
/* harmony export */   "sushiPhoto": function() { return /* reexport safe */ _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_86__.default; },
/* harmony export */   "swissMurrenPhoto": function() { return /* reexport safe */ _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_87__.default; },
/* harmony export */   "swissPizGloriaPhoto": function() { return /* reexport safe */ _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_88__.default; },
/* harmony export */   "walesPhoto": function() { return /* reexport safe */ _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_89__.default; },
/* harmony export */   "londonCanaryPhoto": function() { return /* reexport safe */ _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_90__.default; }
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
/* harmony import */ var _123123_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./123123.jpg */ "./assets/123123.jpg");
/* harmony import */ var _image1_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./image1.jpg */ "./assets/image1.jpg");
/* harmony import */ var _image2_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./image2.png */ "./assets/image2.png");
/* harmony import */ var _image3_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./image3.png */ "./assets/image3.png");
/* harmony import */ var _image4_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./image4.png */ "./assets/image4.png");
/* harmony import */ var _image5_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./image5.png */ "./assets/image5.png");
/* harmony import */ var _chevronDown_svg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./chevronDown.svg */ "./assets/chevronDown.svg");
/* harmony import */ var _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./graphiccommissions/posterCommison.png */ "./assets/graphiccommissions/posterCommison.png");
/* harmony import */ var _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./graphiccommissions/logoCommission.png */ "./assets/graphiccommissions/logoCommission.png");
/* harmony import */ var _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./graphiccommissions/comicCommission1.png */ "./assets/graphiccommissions/comicCommission1.png");
/* harmony import */ var _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./graphiccommissions/comicCommission2.png */ "./assets/graphiccommissions/comicCommission2.png");
/* harmony import */ var _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./graphiccommissions/schemeCommission.png */ "./assets/graphiccommissions/schemeCommission.png");
/* harmony import */ var _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./photos/barcelonaSagradaPhoto.png */ "./assets/photos/barcelonaSagradaPhoto.png");
/* harmony import */ var _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./photos/bowlingPhoto.png */ "./assets/photos/bowlingPhoto.png");
/* harmony import */ var _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./photos/climbingTopPhoto.png */ "./assets/photos/climbingTopPhoto.png");
/* harmony import */ var _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./photos/cop24Photo.png */ "./assets/photos/cop24Photo.png");
/* harmony import */ var _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./photos/franceLaSalettePhoto.png */ "./assets/photos/franceLaSalettePhoto.png");
/* harmony import */ var _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./photos/giewontPhoto.png */ "./assets/photos/giewontPhoto.png");
/* harmony import */ var _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./photos/icelandWaterfallPhoto.png */ "./assets/photos/icelandWaterfallPhoto.png");
/* harmony import */ var _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./photos/londonArsenalPhoto.png */ "./assets/photos/londonArsenalPhoto.png");
/* harmony import */ var _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./photos/londonChelseaPhoto.png */ "./assets/photos/londonChelseaPhoto.png");
/* harmony import */ var _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./photos/londonTowerBridgePhoto.png */ "./assets/photos/londonTowerBridgePhoto.png");
/* harmony import */ var _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./photos/londonVictoriaPhoto.png */ "./assets/photos/londonVictoriaPhoto.png");
/* harmony import */ var _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./photos/manchesterUnitedPhoto.png */ "./assets/photos/manchesterUnitedPhoto.png");
/* harmony import */ var _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./photos/mazuryDownPhoto.png */ "./assets/photos/mazuryDownPhoto.png");
/* harmony import */ var _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./photos/mclarenPhoto.png */ "./assets/photos/mclarenPhoto.png");
/* harmony import */ var _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./photos/notreDamePhoto.png */ "./assets/photos/notreDamePhoto.png");
/* harmony import */ var _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./photos/parisEiffelPhoto.png */ "./assets/photos/parisEiffelPhoto.png");
/* harmony import */ var _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./photos/playingIEMPhoto.png */ "./assets/photos/playingIEMPhoto.png");
/* harmony import */ var _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./photos/rysiankaPhoto.png */ "./assets/photos/rysiankaPhoto.png");
/* harmony import */ var _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./photos/skiSwissPhoto.png */ "./assets/photos/skiSwissPhoto.png");
/* harmony import */ var _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./photos/sushiPhoto.png */ "./assets/photos/sushiPhoto.png");
/* harmony import */ var _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./photos/swissMurrenPhoto.png */ "./assets/photos/swissMurrenPhoto.png");
/* harmony import */ var _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./photos/swissPizGloriaPhoto.png */ "./assets/photos/swissPizGloriaPhoto.png");
/* harmony import */ var _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./photos/walesPhoto.png */ "./assets/photos/walesPhoto.png");
/* harmony import */ var _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./photos/londonCanaryPhoto.png */ "./assets/photos/londonCanaryPhoto.png");




























































































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

/***/ "./pages/about/about.tsx":
/*!*******************************!*\
  !*** ./pages/about/about.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VAbout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.module.scss */ "./pages/about/about.module.scss");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\pages\\about\\about.tsx";





function VAbout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "About Nekomura"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Nekomura sample website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "author",
        content: "Nekomura"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Nekomura"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "#"
      }, "ogimage", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico?",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_4__.VMenuBar, {
      activeTab: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().summary),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "March 13, 2022, Cat Village Memories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "One afternoon, I was helping a Chinese film with artistic creation. I was asked to revise the manuscript again and again. The inner sense of tearing and helplessness flooded into my heart again. It was not the first time I planned to escape from this damned living situation and find a comfortable job to end this spiritual life at the mercy of others. I learned about NFTs through an up-and-coming director, Adolph. Since then I have fallen into another tangled cycle. I read a lot on the open sea, tried a lot of themes, but I was not satisfied in the end. Because simple PFP works cannot fully demonstrate my artistic style. I hope to create works that, at a glance, can make people calm and relax, as if going through a wormhole to another bad environment. Finally, when I drove to my friend's house about 38 kilometers away after a heavy snowfall, I accidentally glanced at the rearview mirror. I found that such a beautiful picture was presented in a rectangular frame. I think that I can create landscapes, and I can create themes other than PFP that people can use in social scenarios! Yes, I'm going to create a 3:1 banner for people! Immediately put the idea to Adolph! Adolph found his friends in the crypto circle to discuss the feasibility of this matter. When his friends in the encryption circle got to know my idea, everyone was so excited that they stayed up all night, and I thought it was time to show it. Will people like me!?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoGallery),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Our Sneakpeak"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: ["I do believe that nekomura is the best project out there. If u dont belive it..... ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 98
            }, this), "NGMI", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this), "Hover on photo in order to get more details."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_4__.VPhotoGrid, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_4__.VFooter, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/about/index.ts":
/*!******************************!*\
  !*** ./pages/about/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _about__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./pages/about/about.tsx");


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
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chelsea),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Pagoda, Nekomura', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Rating: 10/10', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Stamford Bridge",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.image1,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().arsenal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Sydney, Nekomura', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Rating: 10/10', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Emirates Stadium",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.image2,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().skyscrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Wildwest, Nekomura', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Rating: 10/10', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Canary Wharf",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.image3,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().murren),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Tibet, Nekomura', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Rating: 10/10', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Murren",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mainpic,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./utils/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\footer.tsx";

function VFooter() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().goUpSquare)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().copyrights),
      children: ["\xA92022", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), "Just a simple website build for ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Nekomura Fam"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 41
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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

/***/ "./assets/123123.jpg":
/*!***************************!*\
  !*** ./assets/123123.jpg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/123123.f405736b874258979013cb1c344b7164.jpg","height":340,"width":1022,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAFf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAbEAACAQUAAAAAAAAAAAAAAAABAiEAAwQFEv/aAAgBAQABPwC8zrq85w7dB4k1/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AIj/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

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

/***/ "./assets/image1.jpg":
/*!***************************!*\
  !*** ./assets/image1.jpg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/image1.b44800607109a8fc66b7b18a2c787b71.jpg","height":337,"width":1022,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAG//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIEAwUiMZL/2gAIAQEAAT8AnNEawy3UcSA48aX/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMh/9oACAECAQE/AJ6j/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z"});

/***/ }),

/***/ "./assets/image2.png":
/*!***************************!*\
  !*** ./assets/image2.png ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/image2.03a8c3805e31c8fd67a51254d8fc530c.png","height":339,"width":1022,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/ASwpJv8cEA//+/8PAOkJDwH8+/4A6v38ACoPCgAmEQIAAT4zMv/09O7/KychAP7+AgEKBgIA3d/h/xAdLAHs6OgAAVIwNP4bDQYAFSoWANrf4wAKDQYBBgME//D0/gDI0+YAcOkmJKUL7EMAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/image3.png":
/*!***************************!*\
  !*** ./assets/image3.png ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/image3.cf6ec1a6bdebb28c5cd2f8a1a4fcfa65.png","height":337,"width":1022,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/ATArKf/g4df/GCAlAFtWXAH19vYANzU5AKKfowANCgMAAT0yL/72/g4AAQoTABIRFQAtKR4B6uDZ//j6/ADo5t4AAVQzMv4SBxkA9iEoAAAE/ADl2uEBCg0U//4A/QDf16oBLPwmARbS3yQAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/image4.png":
/*!***************************!*\
  !*** ./assets/image4.png ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/image4.07432c21a8ff1596e778ee706e22f3b4.png","height":340,"width":1022,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbUlEQVR4nAVAsQqCQAB9ry2is7ClbxEaWhojhLbGIvrjoCAo0YhEQe9OUZ/wcr4q3m11/+V4ZV+GJsCkrpXbik1pweP+oGgT6Z+l8M7BzAMiSfVRD9uLjE83hauF1mYG5z2nXYvlID3fCR9lgREzPTU0IvJbgQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/image5.png":
/*!***************************!*\
  !*** ./assets/image5.png ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/image5.bd2b39ad36a9297c2a9af7c798d47d4a.png","height":341,"width":1022,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AcCEl/7P6+IAiszMADcCFQAC/AIBBhkD/+7t7AAiIhgAAcOKnv7GB98A8wPxAA0MFAAVFhMA5NLjAM/R0wDr2u8AAX1WZv/8KhH/JTIYAPkCCQH7+/AA9fH6/+TR3AHe1e0AQ0UtrhqLevgAAAAASUVORK5CYII="});

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

/***/ "./pages/about/about.module.scss":
/*!***************************************!*\
  !*** ./pages/about/about.module.scss ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"aboutContainer": "about_aboutContainer__1yo-I",
	"content": "about_content__1sWDL",
	"summary": "about_summary__j3ku1",
	"hobbies": "about_hobbies__10aNK",
	"newsletters": "about_newsletters__1Xe4N",
	"commissions": "about_commissions__10oCB",
	"scrollGallery": "about_scrollGallery__ZQC2e",
	"hint": "about_hint__1O8Ru",
	"pulse": "about_pulse__1xHnF",
	"photoGallery": "about_photoGallery__nekjM"
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

/***/ "react-awesome-reveal":
/*!***************************************!*\
  !*** external "react-awesome-reveal" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/about/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3BhZ2VzL2Fib3V0L2Fib3V0LnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvYWJvdXQvcGhvdG9ncmlkLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS9tYWluaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS90b29sc3RlY2gudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9pY29uLnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL21lbnViYXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy90eXBpbmd0ZXh0LnRzeCIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvd29yay90aW1lbGluZWdyaWQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvMTIzMTIzLmpwZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2NoZXZyb25Eb3duLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24xLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24yLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9sb2dvQ29tbWlzc2lvbi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvcG9zdGVyQ29tbWlzb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3NjaGVtZUNvbW1pc3Npb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvaW1hZ2UxLmpwZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2ltYWdlMi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9pbWFnZTMucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvaW1hZ2U0LnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2ltYWdlNS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYW5ndWxhckxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYW5ndWxhckxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9iZWxheVRoZUNwcExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvYm9ub2JvUHJlc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2Nzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2Nzc1RyaWNrc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kcmliYmJsZUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZnJlZUNvZGVDYW1wTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRodWIuc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0aHViSG92ZXIuc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ21haWwuc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ21haWxIb3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9oYXNobm9kZUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvaHRtbExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvaHRtbExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9qZXN0TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9qZXN0TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2pzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9qc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9sZXNzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9sZXNzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xpbmtlZGluLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xpbmtlZGluSG92ZXIuc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGludXhMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xpbnV4TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL215c3FsTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9teXNxbExvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ub2JsZUxvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbnBtTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ucG1Mb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcHl0aG9uTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcmVhY3RMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3JlYWN0TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3Nhc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3Nhc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2l0ZVBvaW50TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy90c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdHNMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdXNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3ZzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy92c0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93YXNrb0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy95YXJuTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy95YXJuTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL25la29tdXJhLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9iYXJjZWxvbmFTYWdyYWRhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2Jvd2xpbmdQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvY2xpbWJpbmdUb3BQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvY29wMjRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvZnJhbmNlTGFTYWxldHRlUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2dpZXdvbnRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvaWNlbGFuZFdhdGVyZmFsbFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25BcnNlbmFsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkNhbmFyeVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvblZpY3RvcmlhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL21hbmNoZXN0ZXJVbml0ZWRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbWF6dXJ5RG93blBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9tY2xhcmVuUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL25vdHJlRGFtZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9wYXJpc0VpZmZlbFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3J5c2lhbmthUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3NraVN3aXNzUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N1c2hpUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N3aXNzTXVycmVuUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N3aXNzUGl6R2xvcmlhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3dhbGVzUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9wYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvYWJvdXQvcGhvdG9ncmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2hvbWUvbWFpbmhlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS90b29sc3RlY2gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL21lbnViYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3dvcmsvdGltZWxpbmVncmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2lnbm9yZWR8QzpcXFVzZXJzXFx5aWNodVxcRGVza3RvcFxcbmVrb211cmEtY29tcGV0aXRvblxcUG9ydGZvbGlvLVBhZ2VcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJWQWJvdXQiLCJWUGhvdG9HcmlkIiwidXNlVHlwZWRUZXh0IiwiaW1hZ2UxIiwiaW1hZ2UyIiwiaW1hZ2UzIiwibWFpbnBpYyIsImdldERhdGUiLCJkYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsIlZGb290ZXIiLCJnb1VwU3F1YXJlIiwiVk1haW5IZWFkZXIiLCJWVG9vbHNUZWNoIiwiaHRtbExvZ28iLCJodG1sTG9nb0hvdmVyIiwiY3NzTG9nbyIsImNzc0xvZ29Ib3ZlciIsImpzTG9nbyIsImpzTG9nb0hvdmVyIiwicmVhY3RMb2dvIiwicmVhY3RMb2dvSG92ZXIiLCJhbmd1bGFyTG9nbyIsImFuZ3VsYXJMb2dvSG92ZXIiLCJ0c0xvZ28iLCJ0c0xvZ29Ib3ZlciIsInNhc3NMb2dvIiwic2Fzc0xvZ29Ib3ZlciIsImxlc3NMb2dvIiwibGVzc0xvZ29Ib3ZlciIsIm5wbUxvZ28iLCJucG1Mb2dvSG92ZXIiLCJ5YXJuTG9nbyIsInlhcm5Mb2dvSG92ZXIiLCJnaXRMb2dvIiwiZ2l0TG9nb0hvdmVyIiwiamVzdExvZ28iLCJqZXN0TG9nb0hvdmVyIiwibXlzcWxMb2dvIiwibXlzcWxMb2dvSG92ZXIiLCJweXRob25Mb2dvIiwicHl0aG9uTG9nb0hvdmVyIiwidnNMb2dvIiwidnNMb2dvSG92ZXIiLCJhZmZpbml0eUxvZ28iLCJhZmZpbml0eUxvZ29Ib3ZlciIsImRhdmluY2lMb2dvIiwiZGF2aW5jaUxvZ29Ib3ZlciIsIndpbmRvd3NMb2dvIiwid2luZG93c0xvZ29Ib3ZlciIsImxpbnV4TG9nbyIsImxpbnV4TG9nb0hvdmVyIiwiVkljb24iLCJ0b29sdGlwSUQiLCJvbkhvdmVySWNvbiIsImRlZmF1bEljb24iLCJWTWVudUJhciIsImFjdGl2ZVRhYiIsImNvbG9yIiwic3BlZWQiLCJkZWxheVRpbWUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJSZWFjdCIsImNoYXJzIiwiaW50ZXJ2YWwiLCJ0aW1lciIsInByZXZUZXh0IiwibmV3VGV4dCIsImNvbmNhdCIsIlZUaW1lbGluZUdyaWQiLCJ0aW1lbGluZVBvaW50IiwidXNMb2dvIiwidGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmQiLCJ0aW1lbGluZUdyaWRJdGVtIiwid2Fza29Mb2dvIiwiYmFja2dyb3VuZENvbG9yIiwibm9ibGVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7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Z0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLDJHQUErQzs7Ozs7Ozs7Ozs7QUNBL0MseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaHRtbExvZ28gfSBmcm9tICcuL2xvZ29zL2h0bWxMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBodG1sTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9odG1sTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9jc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2Nzc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Fzc0xvZ28gfSBmcm9tICcuL2xvZ29zL3Nhc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYXNzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9zYXNzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc0xvZ28gfSBmcm9tICcuL2xvZ29zL2pzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2pzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWFjdExvZ28gfSBmcm9tICcuL2xvZ29zL3JlYWN0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVhY3RMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3JlYWN0TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0c0xvZ28gfSBmcm9tICcuL2xvZ29zL3RzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3RzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmd1bGFyTG9nbyB9IGZyb20gJy4vbG9nb3MvYW5ndWxhckxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZ3VsYXJMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2FuZ3VsYXJMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxlc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9sZXNzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGVzc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbGVzc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ21haWxMb2dvIH0gZnJvbSAnLi9sb2dvcy9nbWFpbC5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ21haWxMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dtYWlsSG92ZXIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5wbUxvZ28gfSBmcm9tICcuL2xvZ29zL25wbUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5wbUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbnBtTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB5YXJuTG9nbyB9IGZyb20gJy4vbG9nb3MveWFybkxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHlhcm5Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3lhcm5Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpdEh1YkxvZ28gfSBmcm9tICcuL2xvZ29zL2dpdGh1Yi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0SHViTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9naXRodWJIb3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0TG9nbyB9IGZyb20gJy4vbG9nb3MvZ2l0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9naXRMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGplc3RMb2dvIH0gZnJvbSAnLi9sb2dvcy9qZXN0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgamVzdExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvamVzdExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlua2VkSW5Mb2dvIH0gZnJvbSAnLi9sb2dvcy9saW5rZWRpbi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlua2VkSW5Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2xpbmtlZGluSG92ZXIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG15c3FsTG9nbyB9IGZyb20gJy4vbG9nb3MvbXlzcWxMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBteXNxbExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbXlzcWxMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHB5dGhvbkxvZ28gfSBmcm9tICcuL2xvZ29zL3B5dGhvbkxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHB5dGhvbkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvcHl0aG9uTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2c0xvZ28gfSBmcm9tICcuL2xvZ29zL3ZzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdnNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3ZzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZmZpbml0eUxvZ28gfSBmcm9tICcuL2xvZ29zL2FmZmluaXR5TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZmaW5pdHlMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2FmZmluaXR5TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXZpbmNpTG9nbyB9IGZyb20gJy4vbG9nb3MvZGF2aW5jaUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdmluY2lMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2RhdmluY2lMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvd3NMb2dvIH0gZnJvbSAnLi9sb2dvcy93aW5kb3dzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3Mvd2luZG93c0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGludXhMb2dvIH0gZnJvbSAnLi9sb2dvcy9saW51eExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbnV4TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9saW51eExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm9ibGVMb2dvIH0gZnJvbSAnLi9sb2dvcy9ub2JsZUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdhc2tvTG9nbyB9IGZyb20gJy4vbG9nb3Mvd2Fza29Mb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c0xvZ28gfSBmcm9tICcuL2xvZ29zL3VzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzVHJpY2tzTG9nbyB9IGZyb20gJy4vbG9nb3MvY3NzVHJpY2tzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmVsYXlUaGVDcHBMb2dvIH0gZnJvbSAnLi9sb2dvcy9iZWxheVRoZUNwcExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvbm9ib1ByZXNzTG9nbyB9IGZyb20gJy4vbG9nb3MvYm9ub2JvUHJlc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkcmliYmJsZUxvZ28gfSBmcm9tICcuL2xvZ29zL2RyaWJiYmxlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZnJlZUNvZGVDYW1wTG9nbyB9IGZyb20gJy4vbG9nb3MvZnJlZUNvZGVDYW1wTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzaG5vZGVMb2dvIH0gZnJvbSAnLi9sb2dvcy9oYXNobm9kZUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpdGVQb2ludExvZ28gfSBmcm9tICcuL2xvZ29zL3NpdGVQb2ludExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb2ZpbGVQaWN0dXJlIH0gZnJvbSAnLi9uZWtvbXVyYS5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFpbnBpYyB9IGZyb20gJy4vMTIzMTIzLmpwZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbWFnZTEgfSBmcm9tICcuL2ltYWdlMS5qcGcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2UyIH0gZnJvbSAnLi9pbWFnZTIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGltYWdlMyB9IGZyb20gJy4vaW1hZ2UzLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbWFnZTQgfSBmcm9tICcuL2ltYWdlNC5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2U1IH0gZnJvbSAnLi9pbWFnZTUucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoZXZyb25Eb3duIH0gZnJvbSAnLi9jaGV2cm9uRG93bi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9zdGVyQ29tbWlzc2lvbiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2dvQ29tbWlzc2lvbiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21pY0NvbW1pc3Npb24xIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29taWNDb21taXNzaW9uMiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjaGVtZUNvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiYXJjZWxvbmFTYWdyYWRhUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9iYXJjZWxvbmFTYWdyYWRhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvd2xpbmdQaG90byB9IGZyb20gJy4vcGhvdG9zL2Jvd2xpbmdQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpbWJpbmdUb3BQaG90byB9IGZyb20gJy4vcGhvdG9zL2NsaW1iaW5nVG9wUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvcDI0UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9jb3AyNFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmcmFuY2VMYVNhbHR0ZVBob3RvIH0gZnJvbSAnLi9waG90b3MvZnJhbmNlTGFTYWxldHRlUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpZXdvbnRQaG90byB9IGZyb20gJy4vcGhvdG9zL2dpZXdvbnRQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWNlbGFuZFdhdGVyZmFsbFBob3RvIH0gZnJvbSAnLi9waG90b3MvaWNlbGFuZFdhdGVyZmFsbFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25BcnNlbmFsUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25BcnNlbmFsUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvbkNoZWxzZWEgfSBmcm9tICcuL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvblRvd2VyQnJpZGdlUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25Ub3dlckJyaWRnZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25WaWN0b3J5UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYW5jaGVzdGVyVW5pdGVkUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9tYW5jaGVzdGVyVW5pdGVkUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1henVyeURhd25QaG90byB9IGZyb20gJy4vcGhvdG9zL21henVyeURvd25QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWNsYXJlblBob3RvIH0gZnJvbSAnLi9waG90b3MvbWNsYXJlblBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RyZURhbWVQaG90byB9IGZyb20gJy4vcGhvdG9zL25vdHJlRGFtZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJpc0VpZmZlbFBob3RvIH0gZnJvbSAnLi9waG90b3MvcGFyaXNFaWZmZWxQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGxheWluZ0lFTVBob3RvIH0gZnJvbSAnLi9waG90b3MvcGxheWluZ0lFTVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByeXNpYW5rYVBob3RvIH0gZnJvbSAnLi9waG90b3MvcnlzaWFua2FQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2tpU3dpc3NQaG90byB9IGZyb20gJy4vcGhvdG9zL3NraVN3aXNzUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1c2hpUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9zdXNoaVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzd2lzc011cnJlblBob3RvIH0gZnJvbSAnLi9waG90b3Mvc3dpc3NNdXJyZW5QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3dpc3NQaXpHbG9yaWFQaG90byB9IGZyb20gJy4vcGhvdG9zL3N3aXNzUGl6R2xvcmlhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdhbGVzUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy93YWxlc1Bob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25DYW5hcnlQaG90byB9IGZyb20gJy4vcGhvdG9zL2xvbmRvbkNhbmFyeVBob3RvLnBuZydcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZigod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtzcmM6c3JjLGRlY29kaW5nOlwiYXN5bmNcIixzaXplczpzaXplcyxzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJ1xyXG5pbXBvcnQge1xyXG4gIFZNZW51QmFyLFxyXG4gIFZQaG90b0dyaWQsXHJcbiAgVkZvb3RlclxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIGJlbGF5VGhlQ3BwTG9nbyxcclxuICBib25vYm9QcmVzc0xvZ28sXHJcbiAgY29taWNDb21taXNzaW9uMSxcclxuICBjb21pY0NvbW1pc3Npb24yLFxyXG4gIGNzc1RyaWNrc0xvZ28sXHJcbiAgZHJpYmJibGVMb2dvLFxyXG4gIGZyZWVDb2RlQ2FtcExvZ28sXHJcbiAgaGFzaG5vZGVMb2dvLFxyXG4gIGxvZ29Db21taXNzaW9uLFxyXG4gIHBvc3RlckNvbW1pc3Npb24sXHJcbiAgc2NoZW1lQ29tbWlzc2lvbixcclxuICBzaXRlUG9pbnRMb2dvLFxyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Fib3V0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVkFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFib3V0IE5la29tdXJhPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmVrb211cmEgc2FtcGxlIHdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiTmVrb211cmFcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk5la29tdXJhXCIvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiI1wiIGtleT1cIm9naW1hZ2VcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY28/XCIgdHlwZT1cImltYWdlL3gtaWNvblwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Vk1lbnVCYXIgYWN0aXZlVGFiPVwiQWJvdXRcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIE1hcmNoIDEzLCAyMDIyLCBDYXQgVmlsbGFnZSBNZW1vcmllc1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIE9uZSBhZnRlcm5vb24sIEkgd2FzIGhlbHBpbmcgYSBDaGluZXNlIGZpbG0gd2l0aCBhcnRpc3RpYyBjcmVhdGlvbi4gSSB3YXMgYXNrZWQgdG8gcmV2aXNlIHRoZSBtYW51c2NyaXB0IGFnYWluIGFuZCBhZ2Fpbi4gVGhlIGlubmVyIHNlbnNlIG9mIHRlYXJpbmcgYW5kIGhlbHBsZXNzbmVzcyBmbG9vZGVkIGludG8gbXkgaGVhcnQgYWdhaW4uIEl0IHdhcyBub3QgdGhlIGZpcnN0IHRpbWUgSSBwbGFubmVkIHRvIGVzY2FwZSBmcm9tIHRoaXMgZGFtbmVkIGxpdmluZyBzaXR1YXRpb24gYW5kIGZpbmQgYSBjb21mb3J0YWJsZSBqb2IgdG8gZW5kIHRoaXMgc3Bpcml0dWFsIGxpZmUgYXQgdGhlIG1lcmN5IG9mIG90aGVycy5cclxuXHJcbkkgbGVhcm5lZCBhYm91dCBORlRzIHRocm91Z2ggYW4gdXAtYW5kLWNvbWluZyBkaXJlY3RvciwgQWRvbHBoLiBTaW5jZSB0aGVuIEkgaGF2ZSBmYWxsZW4gaW50byBhbm90aGVyIHRhbmdsZWQgY3ljbGUuXHJcblxyXG5JIHJlYWQgYSBsb3Qgb24gdGhlIG9wZW4gc2VhLCB0cmllZCBhIGxvdCBvZiB0aGVtZXMsIGJ1dCBJIHdhcyBub3Qgc2F0aXNmaWVkIGluIHRoZSBlbmQuIEJlY2F1c2Ugc2ltcGxlIFBGUCB3b3JrcyBjYW5ub3QgZnVsbHkgZGVtb25zdHJhdGUgbXkgYXJ0aXN0aWMgc3R5bGUuIEkgaG9wZSB0byBjcmVhdGUgd29ya3MgdGhhdCwgYXQgYSBnbGFuY2UsIGNhbiBtYWtlIHBlb3BsZSBjYWxtIGFuZCByZWxheCwgYXMgaWYgZ29pbmcgdGhyb3VnaCBhIHdvcm1ob2xlIHRvIGFub3RoZXIgYmFkIGVudmlyb25tZW50LlxyXG5cclxuRmluYWxseSwgd2hlbiBJIGRyb3ZlIHRvIG15IGZyaWVuZCdzIGhvdXNlIGFib3V0IDM4IGtpbG9tZXRlcnMgYXdheSBhZnRlciBhIGhlYXZ5IHNub3dmYWxsLCBJIGFjY2lkZW50YWxseSBnbGFuY2VkIGF0IHRoZSByZWFydmlldyBtaXJyb3IuIEkgZm91bmQgdGhhdCBzdWNoIGEgYmVhdXRpZnVsIHBpY3R1cmUgd2FzIHByZXNlbnRlZCBpbiBhIHJlY3Rhbmd1bGFyIGZyYW1lLiBJIHRoaW5rIHRoYXQgSSBjYW4gY3JlYXRlIGxhbmRzY2FwZXMsIGFuZCBJIGNhbiBjcmVhdGUgdGhlbWVzIG90aGVyIHRoYW4gUEZQIHRoYXQgcGVvcGxlIGNhbiB1c2UgaW4gc29jaWFsIHNjZW5hcmlvcyEgWWVzLCBJJ20gZ29pbmcgdG8gY3JlYXRlIGEgMzoxIGJhbm5lciBmb3IgcGVvcGxlISBJbW1lZGlhdGVseSBwdXQgdGhlIGlkZWEgdG8gQWRvbHBoIVxyXG5cclxuQWRvbHBoIGZvdW5kIGhpcyBmcmllbmRzIGluIHRoZSBjcnlwdG8gY2lyY2xlIHRvIGRpc2N1c3MgdGhlIGZlYXNpYmlsaXR5IG9mIHRoaXMgbWF0dGVyLiBXaGVuIGhpcyBmcmllbmRzIGluIHRoZSBlbmNyeXB0aW9uIGNpcmNsZSBnb3QgdG8ga25vdyBteSBpZGVhLCBldmVyeW9uZSB3YXMgc28gZXhjaXRlZCB0aGF0IHRoZXkgc3RheWVkIHVwIGFsbCBuaWdodCwgYW5kIEkgdGhvdWdodCBpdCB3YXMgdGltZSB0byBzaG93IGl0LiBXaWxsIHBlb3BsZSBsaWtlIG1lIT9cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPEZhZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvYmJpZXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NsZXR0ZXJzfT5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICBOZXdzbGV0dGVycyBJIHN1YnNjcmliZSB0bzpcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Nzcy10cmlja3MuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkNTUy1Ucmlja3MgbG9nb1wiIHNyYz17Y3NzVHJpY2tzTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9iZWxheWNwcC5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQmVsYXkgdGhlIENQUCBsb2dvXCIgc3JjPXtiZWxheVRoZUNwcExvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkRyaWJiYmxlIGxvZ29cIiBzcmM9e2RyaWJiYmxlTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9oYXNobm9kZS5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PSdIYXNobm9kZSBsb2dvJyBzcmM9e2hhc2hub2RlTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib25vYm9wcmVzcy5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQm9ub2JvcHJlc3MgbG9nb1wiIHNyYz17Ym9ub2JvUHJlc3NMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIlNpdGUgUG9pbnQgbG9nb1wiIHNyYz17c2l0ZVBvaW50TG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJGcmVlQ29kZUNhbXAgbG9nb1wiIHNyYz17ZnJlZUNvZGVDYW1wTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvbnN9PlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIEdyYXBoaWMgY29tbWlzaW9uc1xyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgQmVzaWRlcyBjb21wdXRlciBwcm9ncmFtbWluZyBJIGxvdmUgdG8gY3JlYXRlIGdyYXBoaWNzLlxyXG4gICAgICAgICAgICAgICAgRHJhd2luZyBoYXMgYmVlbiBteSBwYXNzaW9uIHNpbmNlIEkgY2FuIHJlbWVtYmVyLiBXaGVuIEkgd2FzIHlvdW5nZXIsXHJcbiAgICAgICAgICAgICAgICBJIHVzZWQgdG8gaGF2ZSBodW5kcmVkcyBvZiBub3RlYm9va3MsIGFsbCBvZiB0aGVtIGZpbGxlZCB3aXRoIG15IHNrZXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgTGF0ZXIgb24gSSBtb3ZlZCBtb3JlIGludG8gZGlnaXRhbCBhcnQgd29yayBhbmQgbm93IEkgdHJlYXQgaXQgYXMgbXlcclxuICAgICAgICAgICAgICAgIGhvYmJ5LCB0YWtpbmcgIHNtYWxsIGdyYXBoaWNhbCBwcm9qZWN0IGZyb20gdGltZSB0byB0aW1lLlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGxHYWxsZXJ5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGludH0+XHJcbiAgICAgICAgICAgICAgICAgIFNyb2xsIHJpZ2h0IHRvIHNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDYW1lcmEgbG9nbyBjb21taXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ29Db21taXNzaW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQnJlYXRoaW5nIHNjaGVtZSBjb21taXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NjaGVtZUNvbW1pc3Npb259Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJXb21hbiBwb3N0ZXIgY29tbWlzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bvc3RlckNvbW1pc3Npb259Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDb21pYyBjb21taXNzaW9uIDFcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Y29taWNDb21taXNzaW9uMX0vPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbWljIGNvbW1pc3Npb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtjb21pY0NvbW1pc3Npb24yfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPiAqL31cclxuICAgICAgICA8RmFkZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9HYWxsZXJ5fT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIE91ciBTbmVha3BlYWtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIEkgZG8gYmVsaWV2ZSB0aGF0IG5la29tdXJhIGlzIHRoZSBiZXN0IHByb2plY3Qgb3V0IHRoZXJlLiBJZiB1IGRvbnQgYmVsaXZlIGl0Li4uLi4gPGJyLz5cclxuICAgICAgICAgICAgICBOR01JXHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIEhvdmVyIG9uIHBob3RvIGluIG9yZGVyIHRvIGdldCBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxWUGhvdG9HcmlkLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxWRm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVR5cGVkVGV4dCB9IGZyb20gJy4uJ1xyXG5pbXBvcnQge1xyXG4gIGJhcmNlbG9uYVNhZ3JhZGFQaG90byxcclxuICBib3dsaW5nUGhvdG8sXHJcbiAgY2xpbWJpbmdUb3BQaG90byxcclxuICBmcmFuY2VMYVNhbHR0ZVBob3RvLFxyXG4gIGdpZXdvbnRQaG90byxcclxuICBpY2VsYW5kV2F0ZXJmYWxsUGhvdG8sXHJcbiAgaW1hZ2UxLFxyXG4gIGltYWdlMixcclxuICBpbWFnZTMsXHJcbiAgbG9uZG9uQXJzZW5hbFBob3RvLFxyXG4gIGxvbmRvbkNhbmFyeVBob3RvLFxyXG4gIGxvbmRvbkNoZWxzZWEsXHJcbiAgbG9uZG9uVG93ZXJCcmlkZ2VQaG90byxcclxuICBsb25kb25WaWN0b3J5UGhvdG8sXHJcbiAgbWFpbnBpYyxcclxuICBtYW5jaGVzdGVyVW5pdGVkUGhvdG8sXHJcbiAgbWF6dXJ5RGF3blBob3RvLFxyXG4gIG1jbGFyZW5QaG90byxcclxuICBub3RyZURhbWVQaG90byxcclxuICBwYXJpc0VpZmZlbFBob3RvLFxyXG4gIHBsYXlpbmdJRU1QaG90byxcclxuICByeXNpYW5rYVBob3RvLFxyXG4gIHNraVN3aXNzUGhvdG8sXHJcbiAgc3VzaGlQaG90byxcclxuICBzd2lzc011cnJlblBob3RvLFxyXG4gIHdhbGVzUGhvdG9cclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9waG90b2dyaWQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlBob3RvR3JpZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0dyaWR9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVsc2VhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBQYWdvZGEsIE5la29tdXJhJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1JhdGluZzogMTAvMTAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgU3RhbWZvcmQgQnJpZGdlXCIgc3JjPXtpbWFnZTF9IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFyc2VuYWx9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFN5ZG5leSwgTmVrb211cmEnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUmF0aW5nOiAxMC8xMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBFbWlyYXRlcyBTdGFkaXVtXCIgc3JjPXtpbWFnZTJ9IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNreXNjcmFwcGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBXaWxkd2VzdCwgTmVrb211cmEnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUmF0aW5nOiAxMC8xMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBDYW5hcnkgV2hhcmZcIiBzcmM9e2ltYWdlM30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11cnJlbn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogVGliZXQsIE5la29tdXJhJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1JhdGluZzogMTAvMTAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgTXVycmVuXCIgc3JjPXttYWlucGljfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy9UTy1ETyByZWZhY3RvcmluZyBvZiBWUGhvdG9HcmlkIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICBjb25zdCB5ZWFyID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICBsZXQgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcclxuICBsZXQgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKVxyXG5cclxuICBpZihkYXkubGVuZ3RoID09PSAxKVxyXG4gICAgZGF5ID0gJzAnKyBkYXlcclxuXHJcbiAgaWYobW9udGgubGVuZ3RoID09PSAxKVxyXG4gICAgbW9udGggPSAnMCcrIG1vbnRoXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gXHJcbn0iLCJpbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4vaWNvbidcclxuaW1wb3J0IHtcclxuICBnbWFpbExvZ28sXHJcbiAgZ21haWxMb2dvSG92ZXIsXHJcbiAgbGlua2VkSW5Mb2dvLFxyXG4gIGxpbmtlZEluTG9nb0hvdmVyLFxyXG4gIGdpdEh1YkxvZ28sXHJcbiAgZ2l0SHViTG9nb0hvdmVyXHJcbn0gZnJvbSAnLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nb1VwU3F1YXJlfS8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHRzfT5cclxuICAgICAgICDCqTIwMjJcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIEp1c3QgYSBzaW1wbGUgd2Vic2l0ZSBidWlsZCBmb3IgPHNwYW4+TmVrb211cmEgRmFtPC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtsaW5rZWRJbkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bGlua2VkSW5Mb2dvSG92ZXJ9XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2thcm9saW5hLWh1ZHppZWMtMGIyYmE4MTVhXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJMaW5rZWRJblwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dtYWlsTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtnbWFpbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJtYWlsdG86a2h1ZHppZWNAZ21haWwuY29tXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHbWFpbFwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dpdEh1YkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z2l0SHViTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9GdXR1cmVJbnZlbnRvclwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR2l0SHViXCIvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn0iLCJleHBvcnQgeyBWTWFpbkhlYWRlciB9IGZyb20gJy4vbWFpbmhlYWRlcidcclxuZXhwb3J0IHsgVlRvb2xzVGVjaCB9IGZyb20gJy4vdG9vbHN0ZWNoJyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW5oZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVR5cGVkVGV4dCB9IGZyb20gJy4uL3R5cGluZ3RleHQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVk1haW5IZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRJbmZvfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAge3VzZVR5cGVkVGV4dChcIldlbGNvbWUgRXZlcnlvbmUhXCIsIDUwKX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJXZSBhcmUgTmVrb211cmFcIiwgNTAsIDIwMCl9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjdHh0fT5cclxuICAgICAgICB7dXNlVHlwZWRUZXh0KFwiT25lIGFmdGVybm9vbiwgSSB3YXMgaGVscGluZyBhIENoaW5lc2UgZmlsbSB3aXRoIGFydGlzdGljIGNyZWF0aW9uLiBJIHdhcyBhc2tlZCB0byByZXZpc2UgdGhlIG1hbnVzY3JpcHQgYWdhaW4gYW5kIGFnYWluLiBUaGUgaW5uZXIgc2Vuc2Ugb2YgdGVhcmluZyBhbmQgaGVscGxlc3NuZXNzIGZsb29kZWQgaW50byBteSBoZWFydCBhZ2Fpbi4gSXQgd2FzIG5vdCB0aGUgZmlyc3QgdGltZSBJIHBsYW5uZWQgdG8gZXNjYXBlIGZyb20gdGhpcyBkYW1uZWQgbGl2aW5nIHNpdHVhdGlvbiBhbmQgZmluZCBhIGNvbWZvcnRhYmxlIGpvYiB0byBlbmQgdGhpcyBzcGlyaXR1YWwgbGlmZSBhdCB0aGUgbWVyY3kgb2Ygb3RoZXJzLlwiLCAzMCwgMzUwKX1cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVkljb24gfSBmcm9tICcuLi9pY29uJ1xyXG5pbXBvcnQge1xyXG4gIGFmZmluaXR5TG9nbyxcclxuICBhZmZpbml0eUxvZ29Ib3ZlcixcclxuICBhbmd1bGFyTG9nbyxcclxuICBhbmd1bGFyTG9nb0hvdmVyLFxyXG4gIGNzc0xvZ28sXHJcbiAgY3NzTG9nb0hvdmVyLFxyXG4gIGRhdmluY2lMb2dvLFxyXG4gIGRhdmluY2lMb2dvSG92ZXIsXHJcbiAgZ2l0TG9nbyxcclxuICBnaXRMb2dvSG92ZXIsXHJcbiAgaHRtbExvZ28sXHJcbiAgaHRtbExvZ29Ib3ZlcixcclxuICBqZXN0TG9nbyxcclxuICBqZXN0TG9nb0hvdmVyLFxyXG4gIGpzTG9nbyxcclxuICBqc0xvZ29Ib3ZlcixcclxuICBsZXNzTG9nbyxcclxuICBsZXNzTG9nb0hvdmVyLFxyXG4gIGxpbnV4TG9nbyxcclxuICBsaW51eExvZ29Ib3ZlcixcclxuICBteXNxbExvZ28sXHJcbiAgbXlzcWxMb2dvSG92ZXIsXHJcbiAgbnBtTG9nbyxcclxuICBucG1Mb2dvSG92ZXIsXHJcbiAgcHl0aG9uTG9nbyxcclxuICBweXRob25Mb2dvSG92ZXIsXHJcbiAgcmVhY3RMb2dvLFxyXG4gIHJlYWN0TG9nb0hvdmVyLFxyXG4gIHNhc3NMb2dvLFxyXG4gIHNhc3NMb2dvSG92ZXIsXHJcbiAgdHNMb2dvLFxyXG4gIHRzTG9nb0hvdmVyLFxyXG4gIHZzTG9nbyxcclxuICB2c0xvZ29Ib3ZlcixcclxuICB3aW5kb3dzTG9nbyxcclxuICB3aW5kb3dzTG9nb0hvdmVyLFxyXG4gIHlhcm5Mb2dvLFxyXG4gIHlhcm5Mb2dvSG92ZXJcclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b29sc3RlY2gubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlRvb2xzVGVjaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17aHRtbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17aHRtbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjQ2cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0NnB4XCJcclxuICAgICAgICAgIG5hbWU9XCJIVE1MXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImh0bWwtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtjc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2Nzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJDU1NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiY3NzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17anNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2pzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkphdmFTY3JpcHRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwianMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtyZWFjdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17cmVhY3RMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiUmVhY3RcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwicmVhY3QtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXthbmd1bGFyTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXthbmd1bGFyTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkFuZ3VsYXJcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiYW5ndWxhci10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3RzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt0c0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJUeXBlU2NyaXB0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInRzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17c2Fzc0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17c2Fzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJTYXNzXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInNhc3MtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtsZXNzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtsZXNzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkxlc3NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibGVzcy10b29sdGlwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bnBtTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtucG1Mb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTm9kZSBQYWNrYWdlIE1hbmFnZXJcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibnBtLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17eWFybkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17eWFybkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJ5YXJuXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInlhcm4tdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtnaXRMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2dpdExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHaXRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiZ2l0LXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17amVzdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17amVzdExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJKZXN0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImplc3QtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtteXNxbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bXlzcWxMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTXlTUUxcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibXlzcWwtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtweXRob25Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3B5dGhvbkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjU1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJQeXRob25cIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwicHl0aG9uLXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc1Jvd30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt2c0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17dnNMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiVmlzdWFsIFN0dWRpbyBDb2RlXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInZzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17YWZmaW5pdHlMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2FmZmluaXR5TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkFmZmluaXR5XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImFmZmluaXR5LXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17ZGF2aW5jaUxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17ZGF2aW5jaUxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJEYVZpbmNpIFJlc29sdmVcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiZGF2aW5jaS10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3dpbmRvd3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3dpbmRvd3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiV2luZG93cyAxMFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ3aW5kb3dzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bGludXhMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xpbnV4TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlVidW50dSBMaW54XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImxpbnV4LXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaWNvbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJ1xyXG5cclxudHlwZSBJY29uUHJvcHMgPSB7XHJcbiAgZGVmYXVsSWNvbjogU3RhdGljSW1hZ2VEYXRhXHJcbiAgb25Ib3Zlckljb246IFN0YXRpY0ltYWdlRGF0YVxyXG4gIGhyZWY/OiBzdHJpbmdcclxuICBoZWlnaHQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHRvb2x0aXBJRD86IHN0cmluZ1xyXG4gIHdpZHRoOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZJY29uKHByb3BzOiBJY29uUHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGRhdGEtdGlwPXtwcm9wcy50b29sdGlwSUQgPyB0cnVlIDogZmFsc2V9IGRhdGEtZm9yPXtwcm9wcy50b29sdGlwSUR9IGhyZWY9e3Byb3BzLmhyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmljb25Db250YWluZXJ9IHN0eWxlPXt7aGVpZ2h0OiBwcm9wcy5oZWlnaHQsIHdpZHRoOiBwcm9wcy53aWR0aH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25BY3RpdmV9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtgT24gaG92ZXIgJHtwcm9wcy5uYW1lfSBpY29uLmB9XHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm9uSG92ZXJJY29ufVxyXG4gICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy50b29sdGlwSUQgJiZcclxuICAgICAgICA8UmVhY3RUb29sdGlwIGlkPXtwcm9wcy50b29sdGlwSUR9IHR5cGU9XCJsaWdodFwiIGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9SZWFjdFRvb2x0aXA+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGFsdD17YERlZmF1bHQgJHtwcm9wcy5uYW1lfSBpY29uLmB9XHJcbiAgICAgICAgICBzcmM9e3Byb3BzLmRlZmF1bEljb259XHJcbiAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2RhdGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL2ljb24nXHJcbmV4cG9ydCAqIGZyb20gJy4vbWVudWJhcidcclxuZXhwb3J0ICogZnJvbSAnLi90eXBpbmd0ZXh0J1xyXG5leHBvcnQgKiBmcm9tICcuL2Fib3V0J1xyXG5leHBvcnQgKiBmcm9tICcuL2hvbWUnXHJcbmV4cG9ydCAqIGZyb20gJy4vd29yayciLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51YmFyLm1vZHVsZS5zY3NzJ1xyXG5cclxudHlwZSBNZW51QmFyUHJvcHMgPSB7XHJcbiAgYWN0aXZlVGFiOiBcIkhvbWVcIiB8IFwiQWJvdXRcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVk1lbnVCYXIocHJvcHM6IE1lbnVCYXJQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCYXJ9PlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlSW5pdGlhbHN9PlxyXG4gICAgICAgICAgICBOZWtvXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgTmVrb211cmFcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkhvbWVcIiA/IHtjb2xvcjogXCIjRTc2MTYxXCJ9IDoge2NvbG9yOiBcIiNENUQ1RDVcIn19PlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2Fib3V0YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkFib3V0XCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlZFRleHQodGV4dDogc3RyaW5nLCBzcGVlZDogbnVtYmVyLCBkZWxheVRpbWU/OiBudW1iZXIpIHtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBjaGFycyA9IHRleHQuc3BsaXQoXCJcIilcclxuICBsZXQgaW50ZXJ2YWwgPSBzcGVlZFxyXG5cclxuICBpZih0ZXh0U3RhdGUubGVuZ3RoID09PSAwICYmIGRlbGF5VGltZSlcclxuICAgIGludGVydmFsID0gc3BlZWQgKyBkZWxheVRpbWVcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRleHRTdGF0ZSgocHJldlRleHQpID0+IHtcclxuICAgICAgICBpZiAocHJldlRleHQubGVuZ3RoICE9PSBjaGFycy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RleHQgPSBwcmV2VGV4dC5jb25jYXQoY2hhcnNbcHJldlRleHQubGVuZ3RoXSlcclxuICAgICAgICAgIHJldHVybiBuZXdUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2VGV4dFxyXG4gICAgICB9KVxyXG4gICAgfSwgaW50ZXJ2YWwpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB0ZXh0U3RhdGVcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge1xyXG4gIG5vYmxlTG9nbyxcclxuICB1c0xvZ28sXHJcbiAgd2Fza29Mb2dvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vZGF0ZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpbWVsaW5lZ3JpZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWVGltZWxpbmVHcmlkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxoMT4yMDE2PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lUG9pbnR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUNhcmR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlclRpcH0+XHJcbiAgICAgICAgICBIb3ZlciB0byB6b29tLlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbml2ZXJzaXR5IG9mIFNpbGVzaWEgbG9nby5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt1c0xvZ299XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlJbmZvfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueVRpdGxlfT5Vbml3ZXJzeXRldCDFmmzEhXNraTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+S2F0b3dpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMTUgLSAwMy4yMDE5PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBNb2R1bGVzIGluY2x1ZGVkOjxici8+XHJcbiAgICAgICAgICAgIDFzdCBZZWFyOiBNYXRoZW1hdGljYWwgQW5hbHlzaXMsIEJhc2ljIENvdXJzZSBvZiBDKysgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UuPGJyLz5cclxuICAgICAgICAgICAgMm5kIFllYXI6IE9wZXJhdGluZyBTeXN0ZW1zLCBDb21wdXRlciBOZXR3b3Jrcy48YnIvPlxyXG4gICAgICAgICAgICAzcmQgWWVhcjogQWR2YW5jZWQgQ291cnNlIG9mIEMrKyBQcm9ncmFtbWluZyBMYW5ndWFnZSwgVXNpbmdcclxuICAgICAgICAgICAgQyMgdG8gRGVzaWduIEdyYXBoaWMgQXBwbGljYXRpb25zLCBUaGUgQmFzaWNzIG9mIEJ1aWxkaW5nIG9mIE5ldXJhbCBOZXR3b3JrLjxici8+XHJcbiAgICAgICAgICAgIDR0aCBZZWFyOiBDb21wdXRlciBTaW11bGF0aW9uIE1ldGhvZHMsIE9yYWNsZSBEYXRhYmFzZXMuPGJyLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmR9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1XaWRlfT5cclxuICAgICAgICA8aDE+MDMuMjAxOSAtIDAzLjIwMjA8L2gxPlxyXG4gICAgICAgIDxoMj5Xb3JraW5nICYgbGVhcm5pbmcgV2ViIERldmVsb3BtZW50IGluIExvbmRvbjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQ2FyZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJXYXNrbyBjb21wYW55IGxvZ28uXCJcclxuICAgICAgICAgICAgICAgIHNyYz17d2Fza29Mb2dvfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxM31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1NX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55SW5mb30+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlUaXRsZX0+V2Fza288L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PkdsaXdpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjA4LjIwMjAgLSAxMC4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBvbiBteSBvd24gYSByZXNwb25zaXZlIHdlYiBhcHBsaWNhdGlvbixcclxuICAgICAgICAgICAgd2hpY2ggaGFkIGEgY2F0YWxvZ3VlIG9mIGFsbCBjb21wYW55J3Mgc2VydmVycywgZGlzcGxheWVkIGluIHRoZVxyXG4gICAgICAgICAgICB0cmVlIHN0cnVjdHVyZS4gU2VydmVyJ3MgZGF0YSB3YXMgdGFrZW4gYW5kIHBhcnNlZCBmcm9tIFhNTCBmaWxlIHRvIEpTT04uXHJcbiAgICAgICAgICAgIEFueW9uZSBsb2dnZWQgY291bGQgYnJvd3NlIHRocm91Z2ggbGlzdHMgb2Ygc2VydmVycy5cclxuICAgICAgICAgICAgU2VhcmNoIGFuZCBzb3J0IGJ5IG5hbWUgZnVuY3Rpb24gd2VyZSBhcHBsaWVkLlxyXG4gICAgICAgICAgICBBcHAgaGFkIHN5c3RlbSBvZiBhY2NvdW50cyBhcyB3ZWxsLiBBZG1pbnMsIHRlY2huaWNhbCBhbmQgdXNlciBvbmVzLlxyXG4gICAgICAgICAgICBBZG1pbnMgY291bGQgbWFuYWdlIGFjY291bnRzIGJ5IGVkaXRpbmcgdGhlbSwgZGVsZXRpbmcgYW5kIGF1dGhvcml6ZVxyXG4gICAgICAgICAgICAoZXZlcnkgbmV3IHVzZXIgaGFkIHRvIGJlIGF1dGhvcml6ZWQgYnkgYWRtaW4pLiBBZG1pbnMgY291bGQgYWxzb1xyXG4gICAgICAgICAgICBzZWUgd2hhdCB1c2VyIGlzIGxvZ2dlZCBhdCB0aGUgbW9tZW50Ljxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE1haW4gcmVzcG9uc2liaWxpdGllczo8YnIvPlxyXG4gICAgICAgICAgICAtIGRlc2lnbmluZyBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kIHNpZGUgb2YgdGhlIGFwcCw8YnIvPlxyXG4gICAgICAgICAgICAtIGNyZWF0aW5nIGFuIGFzeW5jaHJvbm91cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgdmlhIDxiPlJFU1QgQVBJPC9iPiw8YnIvPlxyXG4gICAgICAgICAgICAtIHNldHRpbmcgdXAgc2VydmVyIHdpdGggZGF0YWJhc2UuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTGFuZ3VhZ2VzOiBKYXZhU2NyaXB0LCA8Yj5SZWFjdDwvYj4sIDxiPlBIUDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgRGF0YWJhc2U6IDxiPk15U1FMPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBTdHlsaW5nOiBBbnQgRGVzaWduIFVJLCBDU1MuPGJyLz5cclxuICAgICAgICAgICAgVmVyc2lvbiBDb250cm9sIFN5c3RlbTogPGI+R2l0SHViLjwvYj48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFuY2luZzogVHJlbGxvLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1DYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMEUyMjQ1XCJ9fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vYmxlIFN5c3RlbXMgY29tcGFueSBsb2dvLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e25vYmxlTG9nb31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUluZm99PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55VGl0bGV9Pk5vYmxlIFN5c3RlbXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PktyYWvDs3c8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMjAgLSAwOS4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBmcm9tIHNjcmF0Y2ggYSBjb21wbGV0ZSBXZWJSVEMgUGhvbmUgd2ViIGFwcGxpY2F0aW9uLCBiYXNlZCBvbiBTSVAuanMgbGlicmFyeS4gTWFqb3IgZnVuY3Rpb25hbGl0aWVzOjxici8+XHJcbiAgICAgICAgICAgIC0gbWFraW5nIG5ldywgYW5zd2VyaW5nLCBhbmQgaG9sZGluZyBjYWxscyAoY29uZmVyZW5jZXMgYXMgd2VsbCksPGJyLz5cclxuICAgICAgICAgICAgLSBjb250YWN0cyBsaXN0IHdpdGggZnVuY3Rpb25hbGl0eSBvZiBhZGRpbmcsIGRlbGV0aW5nLCBhbmQgZWRpdGluZyBjb250YWN0cy4gU2VhcmNoIGFuZCBzb3J0IG9wdGlvbnMgYXBwbGllZCBhcyB3ZWxsLDxici8+XHJcbiAgICAgICAgICAgIC0gaGlzdG9yeSBvZiBjYWxscyB3aXRoIHN1bW1hcml6ZWQgZGF0YSw8YnIvPlxyXG4gICAgICAgICAgICAtIHZvaWNlbWFpbCBhbmQgRFRNRiBzZW5kaW5nLDxici8+XHJcbiAgICAgICAgICAgIC0gYWNjb3VudCBhbmQgcGhvbmUgaW5wdXQvb3V0cHV0IGF1ZGlvIHNldHRpbmdzLjxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE15IG1haW4gcmVzcG9uc2liaWxpdGllcyBvbiB0aGUgZnJvbnQtZW5kIHNpZGUgb2YgdGhlIHByb2plY3Q6PGJyLz5cclxuICAgICAgICAgICAgLXdvcmtpbmcgY29sbGFib3JhdGl2ZWx5IGluIHRlYW0gZW52aXJvbm1lbnQsIHJlc29sdmluZyBjb25mbGljdHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgYSBjbGVhbiBhbmQgaGlnaC1xdWFsaXR5IGNvZGViYXNlLDxici8+XHJcbiAgICAgICAgICAgIC1yZWZhY3RvcmluZyBvZiBjb2RlYmFzZSw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyB0aGUgZG9jdW1lbnRhdGlvbiw8YnIvPlxyXG4gICAgICAgICAgICAtaW1wbGVtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBmcm9tIHRoZSBkb2N1bWVudGF0aW9uLCBnaXZlbiBwcmV2aW91c2x5IGJ5IFBNLDxici8+XHJcbiAgICAgICAgICAgIC1jcmVhdGluZyByZXNwb25zaXZlLCBhY2Nlc3NpYmxlIGFuZCBlZmZpY2llbnQgd2ViIHZpZXdzLCBiYXNlZCBvbiBwcmV2aW91c2x5IGdpdmVuIG1vY2t1cHMsPGJyLz5cclxuICAgICAgICAgICAgLXJldmlld2luZyBwdWxsIHJlcXVlc3RzIG9mIG15IGxlc3MgZXhwZXJpZW5jZWQgcGVlcnMsIGFuZCBoZWxwaW5nIHRoZW0gd2l0aCBzdHlsaW5nL2NyZWF0aW5nIGNvbXBvbmVudHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgZWZmaWNpZW50IHVuaXQgdGVzdHMuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQWNoaWV2ZW1lbnRzIEkgYW0gbW9zdCBwcm91ZCBvZjo8YnIvPlxyXG4gICAgICAgICAgICAtYnVpbGRpbmcgYSAnbGlnaHQnIHZlcnNpb24gb2YgbWFpbiBhcHBsaWNhdGlvbiB0aGF0IGNvdWxkIGJlIGluc2VydGVkIGludG8gYW4gaWZyYW1lIGFuZCBjcmVhdGluZyBhbiBBUEkgdmlhIHRob3NlIHR3byBlbGVtZW50cyBjb3VsZCBjb21tdW5pY2F0ZSw8YnIvPlxyXG4gICAgICAgICAgICAtaGVscGluZyBteSBwZWVyIHdpdGggZml4aW5nIHVwIGNvbW1pdCBoaXN0b3J5IG9uIG1haW4gYnJhbmNoIGluIG91dCBwcm9qZWN0LCBhZnRlciBoaXMgbWlzdGFrZW4gbWVyZ2luZyw8YnIvPlxyXG4gICAgICAgICAgICAtY3JlYXRpbmcgZG9jdW1lbnRhdGlvbiB3aXRoIGNvZGUgc3RhbmRhcmRzIG9mIGNvZGViYXNlIG9mIG91ciBwcm9qZWN0LDxici8+XHJcbiAgICAgICAgICAgIC1pbXBsZW1lbnRpbmcgQ1NTIG1vZHVsZXMgaW50byBvdXIgbWFpbiBwcm9qZWN0LCB3aGljaCBpbXByb3ZlZCB0ZWFtIHdvcmtmbG93IG5vdGljZWFibHksPGJyLz5cclxuICAgICAgICAgICAgLWNvbnN0cnVjdGluZyBjb21wbGV0ZSB0cmFuc2xhdGlvbiBzeXN0ZW0gd2hpY2ggbGV0IHRoZSB1c2VyIHRvIGNoYW5nZSBsYW5ndWFnZSBvZiBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAoaWYgbm90IGNob3NlbiwgbGFuZ3VhZ2Ugd2FzIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkpLlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBBZ2lsZSBtYW5hZ2VtZW50OiA8Yj5TY3J1bSwgQWdpbGU8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFZlcnNpb24gY29udHJvbCBzeXN0ZW06IDxiPkF6dXJlIERldk9wcywgQml0YnVja2V0PC9iPi48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFja2luZyB0b29sOiA8Yj5KaXJhLCBUcmVsbGxvPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBLbm93bGVkZ2UgcmVwb3NpdG9yeTogPGI+Q29uZmx1ZW5jZTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgU3R5bGluZzogPGI+U0NTUywgTEVTUywgU2VtYW50aWMgVUk8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFRlc3Rpbmc6IDxiPlJlYWN0IFRlc3RpbmcgTGlicmFyeSwgSkVTVDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgQ29tbXVuaWNhdGlvbiB0b29sOiA8Yj5NaWNyb3NvZnQgVGVhbXMsIFpvb208L2I+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVQb2ludH0vPlxyXG4gICAgICAgIDxoMT57Z2V0RGF0ZSgpfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvMTIzMTIzLmY0MDU3MzZiODc0MjU4OTc5MDEzY2IxYzM0NGI3MTY0LmpwZ1wiLFwiaGVpZ2h0XCI6MzQwLFwid2lkdGhcIjoxMDIyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQU1BQ0FNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUYvOW9BQ0FFQkFBQUFBRmYveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBRC85b0FDQUVDRUFBQUFGLy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFCLzlvQUNBRURFQUFBQUQvL3hBQWJFQUFDQVFVQUFBQUFBQUFBQUFBQUFBQUJBaUVBQXdRRkV2L2FBQWdCQVFBQlB3Qzh6cnE4NXc3ZEI0azEvOFFBRmhFQUF3QUFBQUFBQUFBQUFBQUFBQUFBQUFFUi85b0FDQUVDQVFFL0FJai94QUFVRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURBUUUvQUgvLzJRPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvY2hldnJvbkRvd24uZGRhZGUyZjFkZTYzYmI2YjJkZTUyMTkwMWFlMzE4ZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNDQwLFwid2lkdGhcIjoyNTYwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5jMTJhZjI2MGI0ODY0ZjliOGJiOGQ4YTkyOWJlMmVjMi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6Njg4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFwa2xFUVZSNDJtUDRCd1gvSWVBZkdFTUJTSmdCS3ZudnhkMnIveThlMlBqdndOWU4vNjZkUHcxWHpBQmlmWGo3NnQrZTlZdi9MK2t2L2I5alJ2WC81ZTNaLzdlc212TWZCQmpldkhqeWIxcUYxNy9lMXZMLzAxclQvODJ0VHYwM3F5TCsvNG9wNWYvL2dxeDQrZlRCdjVtTmNmOTZnUklMdTdML0xadmE4RzlhZmR5LzdjdW5RS3o0Ky9mdnYyL2Z2djM3K3ZYTC8rOUErdnUzci8rK2Z2a01Zb090QUFENUNLUC9CZmV1d1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIuNWE3ZGU5YmE0ZTkyMjNmM2NjMjdlYmI1OTRhOWM1ZGMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY4MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBclVsRVFWUjQybTJLVHdzQllSakVudy9oOC9nYXJtNUtyZzZPcmxJdTVDQXB4U29uRjhXMkJ5UUhITmkwV3c3cnNyS2IxYjdiNjEvYVozaHJqMzQxTTgwMDVIc1hERnROeUVqZ0g3UmN6TG1kSVVRaVZKM2Z6eGZiV3d1QmY4TkQzcG1Dd3dyamJBckNzU0RGRmViYVFqV2RRNjlVZzY3cG9NOXZESTg3eUxNRHhhUTdRcU9ReDhhWVlWRFJRQUJZaVpNOG1YdnUxK3ZjS1piWjBLWk1ySWpqNUtJTURJN2gyalk4MThNWEJXR291N3dkVHlBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLmI5ZWU3MzZlMTc1NjhjMzg3MWMzZmYzZGQxNDdkMmRmLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4ODksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWZVbEVRVlI0Mm1OZ1lHVDh6OExBOEo5QlRmVy9sMXZrdjBqdnRIOGFabTcvR1JnWS9qT3pjdnhqWUdKa0JuUFVYWUwrWmFsYS8wdTNjUDNINXVyNWp3bWtpWm5sSHdNREJ5ZFlRVXBXd2IvczV0Wi9SZlh0LzdJVGkvNkJ4Tmk0K1A0eE1MQ3lnUlU0ZXdiODE0NVArT2VrYlA4dldDTUFvb0NSL1I4QXAwRXV1cGxyMlpjQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLmNiMjM5YzQ1N2Q2ZmEzY2IzNzFiMDVhMzVkZDU5ZmQwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXlFbEVRVlI0MmhYS3YwcENZUmpBNGQvN2VleWtIaWluRGxJSUZaUmpZNFBRVmJSME5kMUJXMnMxdUJRMDZhcURPRGlJNHhuVVVRUVY4ZS9IZHp6NnF2UHp5Ty9mdi9xWkxDNEdWSERPb2loZTZhR282OW1NNmFST3JBWm5FM0pwaDhkOFFMN1hrcHRpaTFUd3FGSDZpOFFoNXZyaVEzTFprSHdZRWhSODhkMnJMQk13L1VWWjM2WXZ0S01uekhpaHQ1ZUJQdCtkSU5wTG85Ymx2V0lZUlZlaXc0MWtWdUNkclp0S3RTbWRrdkRwSFhld3BYQmZGcW44Zkt0TkRMdHRqUGpucElDOXRSd0EzV1pQdE9rblkrWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLjhiMzhmZTVhM2Y3NTZiYjkzMTZkZDk1ZDM1ODBlNTdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4NDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQWdrbEVRVlI0MmlXTlN3ckNRQkJFNS82SGNhRXJRUVczZ2t0LzRNS05raEF4TUorZXp0QlRiVHBUVUZBVUQ1N1RGcFJTd015d2JVZk9CQkdCcXlJS0FHUFhJNFdJQldiVzcvc0RxUldPWWxSS0VkM3RnZWZoQ0VvSkZMemV0M3Y0WVdpQTlYVSs0YnBlSWZxQU1QNzBzdHZNUUsvT2ZLWmhTcWhWbW1LYWxET1pXZitHUnBpd29pOGhRUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZTEuYjQ0ODAwNjA3MTA5YThmYzY2YjdiMThhMmM3ODdiNzEuanBnXCIsXCJoZWlnaHRcIjozMzcsXCJ3aWR0aFwiOjEwMjIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0tDZ29LQ2dzTURBc1BFQTRRRHhZVUV4TVVGaUlZR2hnYUdDSXpJQ1VnSUNVZ015MDNMQ2tzTnkxUlFEZzRRRkZlVDBwUFhuRmxaWEdQaUkrN3Uvc0JDZ29LQ2dvS0N3d01DdzhRRGhBUEZoUVRFeFFXSWhnYUdCb1lJak1nSlNBZ0pTQXpMVGNzS1N3M0xWRkFPRGhBVVY1UFNrOWVjV1ZsY1krSWo3dTcrLy9DQUJFSUFBTUFDQU1CSWdBQ0VRRURFUUgveEFBVUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQy85b0FDQUVCQUFBQUFILy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRUNFQUFBQUgvL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUQvOW9BQ0FFREVBQUFBRy8veEFBY0VBQUJBd1VBQUFBQUFBQUFBQUFBQUFBQkFBSUVBd1VpTVpMLzJnQUlBUUVBQVQ4QW5ORWF3eTNVY1NBNDhhWC94QUFYRVFBREFRQUFBQUFBQUFBQUFBQUFBQUFBQVFNaC85b0FDQUVDQVFFL0FKNmovOFFBRlJFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQUFILzJnQUlBUU1CQVQ4QWovL1pcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2UyLjAzYThjMzgwNWUzMWM4ZmQ2N2E1MTI1NGQ4ZmM1MzBjLnBuZ1wiLFwiaGVpZ2h0XCI6MzM5LFwid2lkdGhcIjoxMDIyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFia2xFUVZSNG5BRmpBSnovQVN3cEp2OGNFQS8vKy84UEFPa0pEd0g4Ky80QTZ2MzhBQ29QQ2dBbUVRSUFBVDR6TXYvMDlPNy9LeWNoQVA3K0FnRUtCZ0lBM2QvaC94QWRMQUhzNk9nQUFWSXdOUDRiRFFZQUZTb1dBTnJmNHdBS0RRWUJCZ01FLy9EMC9nREkwK1lBY09rbUpLVUw3RU1BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZTMuY2Y2ZWMxYTZiZGViYjI4YzVjZDJmOGExYTRmY2ZhNjUucG5nXCIsXCJoZWlnaHRcIjozMzcsXCJ3aWR0aFwiOjEwMjIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQWJrbEVRVlI0bkFGakFKei9BVEFyS2YvZzRkZi9HQ0FsQUZ0V1hBSDE5dllBTnpVNUFLS2Zvd0FOQ2dNQUFUMHlMLzcyL2c0QUFRb1RBQklSRlFBdEtSNEI2dURaLy9qNi9BRG81dDRBQVZRek12NFNCeGtBOWlFb0FBQUUvQURsMnVFQkNnMFUvLzRBL1FEZjE2b0JMUHdtQVJiUzN5UUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlNC4wNzQzMmMyMWE4ZmYxNTk2ZTc3OGVlNzA2ZTIyZjNiNC5wbmdcIixcImhlaWdodFwiOjM0MCxcIndpZHRoXCI6MTAyMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBYlVsRVFWUjRuQVZBc1FxQ1FBQjlyeTJpczdDbGJ4RWFXaG9qaExiR0l2cmpvQ0FvMFloRVFlOU9VWi93Y3I0cTNtMTEvK1Y0WlYrR0pzQ2tycFhiaWsxcHdlUCtvR2dUNlorbDhNN0J6QU1pU2ZWUkQ5dUxqRTgzaGF1RjFtWUc1ejJuWFl2bElEM2ZDUjlsZ1JFelBUVTBJdkpiZ1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2U1LmJkMmIzOWFkMzZhOTI5N2MyYTlhZjdjNzk4ZDQ3ZDRhLnBuZ1wiLFwiaGVpZ2h0XCI6MzQxLFwid2lkdGhcIjoxMDIyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFia2xFUVZSNG5BRmpBSnovQWNDRWwvN1A2K0lBaXN6TUFEY0NGUUFDL0FJQkJoa0QvKzd0N0FBaUloZ0FBY09LbnY3R0I5OEE4d1B4QUEwTUZBQVZGaE1BNU5MakFNL1Iwd0RyMnU4QUFYMVdadi84S2hIL0pUSVlBUGtDQ1FINysvQUE5Zkg2LytUUjNBSGUxZTBBUTBVdHJocUxldmdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ28uMWE1YjRkODZhMmEyZGRiNGMxM2ZlN2RkNTJmMTI0YjYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZ1VsRVFWUjQyZzNISVE4QmNRREc0ZmMvTnA5QkZDWFZ4MUFFeFNld215QW9FdHRWUkRmVkZNRW1VSmhSSk1IdnpiN0MzUzdkcnR3OTdaRURvdTA3TzFxSUlEY3R4cFNjdktHZTNMQzQ4ZkNWbDN0SUZrUC92ZUJEd3NFU2ZSZXNDY3o0Y2ZGQXp2Z1NlOG5FVzg5NWlvUXBSODZzbkpMN0xZc09FU1AyeEVSMEs2MEVVVkVmM2plVEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIuNGJkN2MzMDY1MDMxMjZjYjdhYTdkODYyNGEzMjc3ZTUucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldOb1FvQ1VSQkY1K0dDMzJBMG1xeCtoc1Zna1hsZHhHQ3dtQlNzYW5TeGlzVWdHTFFvb3NWazhBTnN1MVV4aVdYUExHOGZITzdNblR0dkpQWGVKYW9DRmVvVHVreFZ5OEZ6UWhPRnBnTi8yQktjSjk0TFJEWW9FUkk0VXAvaFFIMUY2Mkl2YkxmWWVxRWp1RU1NNnlMUVlQaERaK0RZSHFCUGRJL2Z0TUNINW9GT01jYmM3Vkl2WUloL3Nkc3g5REUyREhmb0JONTRYN2dKVzBZVnMwZWdEYXY4Tit0VmF4bGhTb0tqWFlDT2lnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvLmFjOWMzMWI0ODViZmVjMzY4MjU4ZGM0NjU1OGM2MTQzLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNFbEVRVlI0MmczR3V3MkRVQkFGMFZzRFZkQURzbVJuYm9DWTNNN2NBYW50Rm1pRFR3MmtjMHNnSTNqa1NNdnFTS09SNVpxZUxmWFVsanh3RW94TWhFOFA4a0xrM3YzSUJvdjRFY3g4MHV6d1Y3d0pXbTZwSmZ3U0hidWZISlRzVGljcS9oUWlsYnhLSkJwV3IyNlFkUUducTFwR3I0RkdDd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLjAwNjBhNzNjMjdmZDRkN2FlYzFjZmY3NzY3NDY3NTE3LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVFbEVRVlI0bkJXUE1RckNRQkJGWi9BQWdwVkg4QTVXTnRFVGlJS1FEZGlsRWJUeUFEWkJzTENNaFNDSVhrQ1N3czQ3ZUFKajZ3Rms4LzdBeS93LyszYzM2MDBJUmcyaTJkemRsMml6R0V2ODFkemZDcHd3S2VNT1BNQmhBbjgybkJXb29sbkNRQ3NqTmZ6VEVWVHRueEFLeEFZcXFFR1ZFQmpUQzUyUXMrT0ltWExrRjYxLzZQTzlFOG9WU0RGN1dFU3pHejJ5TUVOZjZHdGQwVU5zR2VnRlhWRDlvSVNkTjFuR25tZ0VoZ3dPWENPL3dyOVExZ0liYWpyK2ZMRVlMZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9iZWxheVRoZUNwcExvZ28uMDBiYzdhZjUxMDcwYWI0ODQ4NDQ2YzUyM2E1MDQ2Y2YucG5nXCIsXCJoZWlnaHRcIjoyNDUsXCJ3aWR0aFwiOjU0MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBaUVsRVFWUjRuR00wTU5UNXp5SnUrTi9PUUlueCtPRWQvejk4L3NIQXdjN0d3QWdFLy8vL1oyQzA4WTcrYis0WTlKK0Q2UjhqODhjci83OTkvODd3OWV0WEJpNHVMc1lQNzk4ek1GWlUxZnoveFNqMGYvYSttNHdoV24vK2M3Q3pNMXk0ZkptQmhZV0Y0ZisvZnd5TWtkR1IvN2w0UlA0ZlBuYU1rWXNkYUNZREU4aDRCaUFBRXdCNmVqTWJFY01RU0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYm9ub2JvUHJlc3NMb2dvLjcxYzg4MDNhYThhODAxMTk0NTcwY2Y4MWY3OGU0ZDQzLnBuZ1wiLFwiaGVpZ2h0XCI6OTAsXCJ3aWR0aFwiOjQ4NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVFBQUFCSkNTZklBQUFBR2tsRVFWUjQybU53K3hmN3YvVmYzYi82LzhYL0d2L0YvUWNBWGE0TGErQUYzMGdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9jc3NMb2dvLjAxY2RmY2YxYThiNjg2Y2MyNzZlYjdkMmJkNWQzYjRiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVhVbEVRVlI0Mm0zTnNRMUFVQlJHWWJHTU9SUTZVZExUaWJ3TlJOU2kxSmxCVFNRS001eWZ4QTVpQmNWdDN5bS81Z1NlS0lDRFU0OXlnNXFMVG80ZFo1QnlxMVhHUkdFUXM2aFh3MHhpRVBFeU1Pb2pNZ2lwMkZoVkt2UThmeGhYTUI5VHk3R05BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc0xvZ29Ib3Zlci43YTQ5N2I3YzIzMGJlMDhiMmRhZTg0Mjg3ZWNjNWMwYy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFxVWxFUVZSNG5FV01NUTRCVVJDRy85azRoQnRvbFZxVmhwWjJuMUs0QVNmUU9ZQ29KTHV0VXFmUWk4b0ZiRUxoQnNZM1Q4UWs4K2JOTnpPZk5Ta3B3dDE1LzJGa0VMdVhaVFFUbXBYTUhyQ1d1YmVwUzFodERRc01aaGptMUVyU0M5Mklvd1AvVFRZd0dBTFhrdmJraFJ5d2NNSlFaUU9mUG5CQlhrMTZVcnV3c0IyekFkZ0JuREZ0Z1FXMkthd0h1K1VGb2lBVGNFeUZxK2JaY2ZEK0xYekRMR3dJR0VmUWZ3QlBkRDArM3BoMjZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc1RyaWNrc0xvZ28uNmJmZGYwZDMwZmFmMmIxNzMyNjcwYmUyYjkyZWQzNGYucG5nXCIsXCJoZWlnaHRcIjo2NCxcIndpZHRoXCI6Mzc0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBUUFBQUJKQ1NmSUFBQUFHRWxFUVZSNDJtT28vMWZ4ditsLzBmLzYvdzFBT3ZNZkFHS2ZDOHlndDg0OUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ28uYjk4OGE0MDg5ODI1Y2VlZGJmZWNkYzk0ODU3YTFjZWEucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyaDNIc1EyRFFCQUYwUzlPdWo1STNRVUJHY0lPQ0kwSXNYdHdEd1NrcGhscStGUFBzaUo1bXBIazZxY0hEN3lvM0x2d1lHTkxGNm84MFZJSlI5cDZFbS9rNHQwN2hUeDU1T2Z3NGI4amF4UWRKK0VQMy9Ta0V3MnJaOHRLVnhwSkx1NXpabm9YNndJTFVVaEY2alV3R1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci4wMTY0NTA2MjllMzVjZWZkY2JiMzcwMDFjMDIzZTMxNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF2RWxFUVZSNG5CV05NUXJDVUF5R0U1VUtua0R3RGk3aTZLQ2JpNU9MVU9FVjZlRG1CVVRFQ3ppNUZGd1V2SUdqaTZPNGVBZGJUeUFvbFBSTDRDTjUvLysvUklzUXhFUWlGUm5UUzZHWUc2WjZWYk8vQnlLMEdUd2dCYThNK25EUlBJUXBQNTZpK2hhekgxdDhRNVBXWWU3NWhoanpqRkEzc3oyZHA2NllTNEt4QnlZb1hZUWQzaEg0S0F2TU5mMmxSWklNTWJjSUE0UWxNTXFCMUoxTkd3L1V1SjBpZkRGTzREVW4xYUpubW9mQUJmWDdJNFEyZUgzZ0JtVUZlQUpEaUZlZWlzMEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby44NDJlYTUxOWQ2NDM2OGVjNDIzOGQ4YTg1NjhhN2FhYy5wbmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjoyNTEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQVZVbEVRVlI0bkIzS3NRM0FJQkFFd1R2ZUlpV2xCTXY5dDJQWFFFQ0E0T0dNeUZiYW9hUTE1NEpaZ0x0enQwZ2d4b2o5Y01EN2ZpaWxjSXlCM3J2Y0o1L25Wczc1QU5WYTBWcERDSWJyc2cyY1pxYVVFbjgwVURUelVrUkpkZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLjMxZGYxNTAwMmI0ZDNjNGJkNzhkOWEyMjM2N2I4NTg3LnBuZ1wiLFwiaGVpZ2h0XCI6ODIsXCJ3aWR0aFwiOjUwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVlBQUFEakFPOURBQUFBSmtsRVFWUjRuQVZBc1EwQU1BaUN4YlYrNTlUL254QXduUG51ZnRoZFZCV1RnR1JzUXhJUDIwY1BNandRSlVVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0TG9nby5mZDdiZWMxZDg2ZjAxZjQ0MmUzZWExYmIyZjE5YWM3MS5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJqV01RUW9CWVFCR3Z5SWJNeVZLS1k3Z0FrN2lNRzdnRURhU3JRT3d0bVB4M25aS0ZvNGdwVWJUbjkzN1huMHZDZjNFRmN0Q29aZFljZUx0TExGVFR2bXdZV3ZyT0FrVEcxdnVyTm41ZEJTR1htMDVzL2ZDelNyZHp4ZEhEbjRkL0tPMURRL3FzbUtuNWl3Sy9RQUhHRHdTZlhmN3d3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdExvZ29Ib3Zlci5kOGY4MTc3MDViNjU2ZmNlOTY4ODlhMWM3Mzk4YWE2Ni5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsVWxFUVZSNDJtTUFnZWNKQ1N4Z09qSFJDc2pXQmJHZkFjVmdrc3hRU1I0ZzNnaVUrQTRVazRRcmdrcUtBVGsvZ2JnR0tOa041UDhIWWlFR3FDcGhJT2Nla1A0UGxMd0FwQ09lSlNiT0I5S1BnVmlBQVNqSURWUndBcVFBaVBjQzhSSWdmeCtRUGcra2VXQldzQUFWUGdjS3JnRGlaVUQ4QnlqR0JyTUM1a2hlb0tKN1FQd1FLTVlMOXdBeUF5Z2hBOFN5eUdJQWpkaGprUHhPd0hBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0aHViLjgzODYzN2FkYjc2NGNiNDNiZjdlZDY5YWJlZmVkOWJjLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdGh1YkhvdmVyLjkwNTRmNzljNGQwYTA2MzcyZWNiMDAxZDMzNDJiNjViLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsLjkwMTE5ZWRkODVlN2Y5ODAzZDkyNjY5ZGQyNTQzNmNiLnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsSG92ZXIuNzI4YmEyN2I3NDVjZjMzZTkyNjUxZWM0MWQ1MjE3ZjMuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaGFzaG5vZGVMb2dvLmQ0MGNlZDc4MTU3ZGYzYzI0MzI3NWU4ZjllMjY1YTg2LnBuZ1wiLFwiaGVpZ2h0XCI6ODksXCJ3aWR0aFwiOjMwNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUkVsRVFWUjRuQVdBS3c2QU1BeEFYMG1aSEVFZzJQM1Bnd09GNGd3TDJZZTFSSTV6bUU0djI1cHBIVVJBVmFtMUVPT0NYUGR3dDR5MXgvc0hJY3k0UXkyRlBTVitxbUFjZzVXOGlTd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvLjliYjRkMDEzNTM4ODkxODJiZTFhNDFiZjlkNzgxYTZmLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmpYR29RNUJZUUNHNGEvckZES3FReGZOVENQb2JzQWQwTGdDNGN4MWlEYlRCT0g5Z3AxZ0ptazJ3ODVtKzg5ZnpwN3lpRFdoNU1CR1hwTFJwaGUxeUx3U0M4NDBlWEx6MWNGek1lTk9oVEdqdUxlbmNwOC9SdzdzWGVQaGdkemg2eUVwVzFmOW9pdlgrWEJpRWwzNHVTSExDVHR5Y3FkT3JBSjFNRmtUOU8rMURRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvSG92ZXIuM2IxMTAwMmNkZDE2MDJlMmExMmQ5NjFhN2NlYzQ3YmIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcGtsRVFWUjQya1hNb1FyQ1lCVEY4ZFB0V2pTcjFXazNpb2hOZzJsZjhBVjhBMjM2QkliaGN4Z0ZzUm1zc2lBaU9HeUNxQXdHMi8rT3dRWS83ajFuZDlQVDk5ZEljODRCNWI0UllZa1E3Y2k1SHRPMEVKSlhZbG5nakNaZnZIRGp4VFhpTDVqYndZemx6cXp3Y295UmRmalFUOFYxbjVEZ2lBUDJkRFhtZzRPQldEb1VQOEtRUFdCdXlWWG1tOXkxZ3pyaHl6eGhVcmpRL2RHUVBTd2U1UTV4SVlBblNSbDR0WXBqMnd6NUhRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvLjhiYjEzNzhkNDE0NjUxYzYyMDhlMWQzNjY0MTIwNDc2LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmhYQnNRb0JBUURHOFM4V01aSUg4QUN5S0lOSk1Ya0I2VEpjNUZLeVdPaENYY3lrbE82R20yNjdwL2wvNzNQZDd5YzNMSThwMlJEdzhWM1VPK3pvTWZMVU15R0dpQ01GUDZjMDVTVVhZcDk0OCtmSlhGNlJFZkFsNXV5RVNBN0pmV09ORUpHMzhzTjlCblFkK3NxZXRyemc1UU1KRTdlUVZBR1k5RWpVRVNvWC9BQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIuMTU3MWFkZWM0ODFmMjhmOThmNTdhMjAzNWExYjgzMzcucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBckVsRVFWUjQybU40bnBEQXhBQUVRTnIwZVdMaXVtY0pDZkZBSEF2a1R3TGlCZ1lZQUFweUF3WFNnTFFJRUJzQXNRMVFneE5NVWc5SzV3SHhjaUNlRHBTY0E2U1pRWUkrUUoxVnp4SVRhNEYwQVpBL0VZaG5BZGx0UU5xVkFhZ3lFc2laQzhTeFFQWVVvR0F0RUpjQzJTMUFPaE5rUWpKUWNpR1FyZ2ZpYUNRM1pRTEZVMEd1YndTcUZnUFNTa0JCWWFpR2FpRE9BTEs1UUNyZGdKeDJJSjBOeEMxQWJBSFV3QUV6Q1FBY2dtOW9KSm9NSEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvanNMb2dvLmMxODJiN2UzNzQ2NTE5MTY5YmJjYThlODRlZDMyMTA0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNrbEVRVlI0MmpXTElRNkRRQlJFLzdWNmxKNWdWUTI2b3JLaXJtblN0S0liVWtFVzhBZ2NSK0ROQVZCY0FRY2ZDSGtaTVc4eXBrQWlranVSUkRBbDVoMnRLVTNSeTdRSmg1OHAzL2FCa1k2ZTRoQWZycHhjVlg3WmhaNzZrL0UyQ3E4Tloxb2V5dlExQldwZTNDbTVFWFZaQUEzTll5dmxVQ2Z1QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9qc0xvZ29Ib3Zlci5mM2Q2NjllNjQyNzM5NjgyNDU5ZWIwNDIyNjEyNzc1OS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF0VWxFUVZSNG5GMlBNUXJDUUJCRi8xZ29XT2tOQkVId0hJSTNFQ3R4ZzBYdTRoWFNSQ3NSTDJDUkl5ZzI2YXhTSkZvTFFockh0NlV1ek15Zi8vL083Rm9kUWlwcFp0TGJ6VHBnbWZ2SHBUNndzQ1pKanU2K3dDREluMk5tSjJ0Q3lCSFc5QzNSZzVRRG1FS3lQQnIyOUN2YVNGVGtydHp2MUFGVHkzOURobGlCQ3NRdDNETWFjc0FhTXA2TWFGa3p4SGdGVCtJdkRyaVhMcDBSZGp4NGczQ0RxNm5UT0NGRm5OTThXUEdpanJsZFVrZVlMbDhGWEVib1VMSkNjUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nby4yZTc4YjRhNzMyNWYwZmIyYjEzMDc2NDUxODBjM2RhNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFYRWxFUVZSNDJtWEdzUTFBVUJoRjRmODFoaEJSc29COXNJQkVSYWxRQ2ExR0pkRll3QTc2Yy9meG9wREkrMDV4cjhuaDdPTi9nRWJkdTVHWll0V21sWk9EeVRmUWF6VE5YTnkwbkd6c1dveVNuRVF4bVZJS0tndkk4ZXNCN2tzdGtvV0N4d0FBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nb0hvdmVyLmZjZTMwNzUxZjE0Y2IyZDY1MjkzMmE4NThmNmI1ZjE4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW5rbEVRVlI0bkRXUHdRbURRQkJGZHk1Q3dKdVFRMG9JS1NBZHBJeXNEYVNQUU02cElhV2tFcjE0RWhSUmNIeC8wQTg3LzgvTW45bGRhM00yVHdFM0JZNDRHZEhkWkVnQ2t1RFVZZURTc0F3ditNVGttNjQ2QmZtTXVzQVBHYjQwS2lZV0NnMUhHRGtUMjBvWlBpUlhObFR3ajhrN3VrY1g2TTZhbkorSVA4V0JUU3RYbE9RVCtSbStXVnZYdWpkZWp5RzBnQ0pZUERKMC9FTFlEUWMyQTFNN0dKUllhOG9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbi44M2JjMmQ5NjZjMmZmZjQ0NDNhZDU5M2ZjYTkxZWIwYi5zdmdcIixcImhlaWdodFwiOjUxMCxcIndpZHRoXCI6NTEwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbkhvdmVyLmNmMjUyNWY4YzMyYWIwNzlkOTU1ZTg1NmIyNDkzNTA1LnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nby5jMWQ1N2NiOGZhYjQ4NDAwNjExOWYyMGI1NjI4NmFjNy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJoM0lPdzRCWVFCRzBlOUhxNUJJTkdRNmp5aW1tY1FXWlBxcHhDNm9SR1VKb3BiUVdZY2wzTHNXTFhIS0U0cHh3Z2NaR1Vyb0VSb2V2bTBKL2ZnTGEvWmNQQmtHTVlRakZXTnhia0pzUGZ6N3p0UEUyTkVSdzlVWENTc0xXemVzYVp3NURSVkxhODdjMkxGZytBWDk0VU5yNlcvOTlBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nb0hvdmVyLjM1YjkwZTM5NjU3YzMzZGFiNWJjNmQwMzdiZjcwMDdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW1VbEVRVlI0Mm1ONG5wakl5QUFFenhJU3hJSDRPeEJmZlo2UUlBZ1NBOHNCT1V4UUJTWkF2QWlJandERnZFQmlRSm9acmdCSTZ3TWxZNEc0R1lpcm9XSXNEREFBNUpRQ0plU0JXQVRJdmdJMFhnMHVDZVI0QVFWTFlIeWdvdmxBdkJoWlFTaFFRU2lTZ3NsQS9pcVkwWnBBekFqRUhrQ0Y1a0JKYlNEYkJJaGxnVmdHcEZvZXlOQ0FPcklXaUtjQ2NUUVFxejlMU09BRkFMZWRXL0g2NFNSL0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLmI4ZjIyNjgyMDI0YjFkMmRhMWFiODVhNzAxMjNmZTI4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVgwbEVRVlI0Mm1QQUFGY1pHUml1Z0xEd0ZZc3J2Q2dTVjlTdUtGOWhaYmdxZEZVQXlHVzdJbkhGNFlyK1ZWdUdLOU92VEx1U2N5WCtTZzJRbkhIVmhlR3ExaFhWSzFGWHZLOG9Yakc1NG5CRkVac3RWeGlCbU9rS0NETmRaUVFBUmFvb011ZzB1TnNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9teXNxbExvZ29Ib3Zlci5hYTk4NDFiZjM3YjAyODExNTk0MDU4MmVmMzE4MjFkZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsRWxFUVZSNG5HM09NUTdDUUF3RXdITkRoU2hJVFJrSklWcitrN3lLVC9BZDBrTkJTa0FwRVJ4amhaSlZObXVmMTNzWDVZZXg2MHFsSmFKRVZkRkN3eUMwTmFDQzQwYmZhczkwaXJIdnJjMHdMMkhYb0tWdmVzMkV0YmlQNFlObmdXdmM0bDNLS2cxSFRsOFpjTUlOcG5rdjVaU0duZWJGY2FCUEhBd2F1blIyaVp2WC80UDQrVTBTTE14M1FOWlpwdWF2ZmdGOFdUdnBQdStjM2dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvbm9ibGVMb2dvLmY3ZjQ3NjQwM2UwOGZhZjU2ZGEzNTQ3MWMzNTBlMDAzLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMjUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTJVbEVRVlI0MmcyRzIwckRRQlFBNTJ3M0cyTk5TaFZSOFFMeEgvUk53WWQrdWVBUGlBVkZFVnBFYkxXMHNVMWprdDFqWUlZWklidGQwdThOWW1lOE15S3VaL0NxZEZBSERmYm0rdFRNRm10V1pXT0txcFdmMXcwY1JSQVpqdnNSZG5SM3BlZG5KOHkvRjFUYlN2UDhndW4wZzdwdTVPVnRnbmw2ZnBlditaTGgvZ0ZsN2FYeFNOeFBjWjF0RU94bEdQTjUvOERFcENSSnpPUDRGMk4zeWZZY1lhYlkxY2JyNFRDaktCWGp0NW9rRVNKL3hKUmt0bnVYajRwNlRVcU1FaEFzVUFFSTdHaXdNWVJCcHJRcXdZaEtWMXlxZ05Lb2hIK2FxMkppRnRJUzZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL25wbUxvZ28uZjc1MDliNWU5YjI5NWE2YTgyNDY2MzI1YzhjOTVhZGMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWFVsRVFWUjQybTJOc1ExQVlCZ0Z2L3ptRVpSS0dxMFJGTFRVZ3Fqb1ZHekFEQ2E1dDQrSXFIZ3YxOTZaUEJ3dlRwNTlwcDVLQXhVZE5RV3QwU2pYcUpTSlJLVTIwOHJPUXNiQnpNbHBpZ2lwYVlrSjhQRi9wTzVPM3RIbkYxV2pOV0JLNkJoQkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbnBtTG9nb0hvdmVyLmEyYzA3ODZlYzVhMjIwNjJiNmQyMTVlNzdiZTQ3MGFiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9FbEVRVlI0bkVXUHV3MENRUXhFUFJDU0VDR0lLWUNqQVJMcVFOcXJnQWJvZ200UUFSS1ZRTUF2QklrUTgrWVFkNk1kMldQUGVyMjZsdEtQaU13SWhaUmtzb2FHYkdpVklkSEgvcS9ac0VIY3ljZndCa2Z3Qlo5WUo3cVVzdWJXS1RObnhDTnhTWE5QYzhxNHloTzJUQmhTZkZEY2thL0l6N0NDUEZIWGMyNTVzd1Y2Z09FUUVXLzBoOWdZMkNuNXdnOFlHbGc3dDZGbkEvRCtMbkk2ZkFFYVBqNHozcTdFU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvcHl0aG9uTG9nby5iOGY0ZWQ5MTMzOWY1NjUwY2M3ZjU4ZjFlYzViYjVjYi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFia2xFUVZSNDJpV01zUW1EQUJRRkgrZ01EcUZEdUkzN1dDV2Q0QVNtRUxkSW1uc1FiR3dFc2JDMUVyNm8xOTBWSjZjU3BRZGFaeEtKTG1qQTRlcVJuRGRmRmdlOWF4ZnloK0JnWStIdm9KTTd3aU1UTXp0WG9LQ21KMWo1OFhMK2ZDckMwTnppUkhKRzY0RlNJajBCT0taTUJQb3pLOVFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvSG92ZXIuMzhhNDBlZWNiNWNkMWQ5ZTlmNTFlZGM5MWU1MTFlMzgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdWtsRVFWUjRuQjJPb1E3Q1FCQkVkOU5XWUVrZzRFbElxQWFMUjhBdlhFMXhLQVNmZ01DaHFPRVhPSVBIa2FCUm9OdWtLQ3loT2Q1eXlXUnVadWRtVDB2bllsSDlTZ2hURWRtQUYxamoxWGlSVmxrbVhQRGtpRG1HVS9RU0x0QmlEU1BFQ2t3dytpclNDeUdjNFNlNjBNbzV6L3M1Z1FiakRYOW9NQjRDYnl0T3ZGZ2dIZ1FTT0NIUWhsdTBlRnVSY3NscEdSQ1lNYXdabHVDS3Y3Y1Z3dEJPRGc2WWQvaEdPS1A1LzhrSW93RmRzQU1kc0ZYVkM0SDRCOEVRUmYxdWswSXlBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3JlYWN0TG9nby4yZmY3OGNjMzliNGFjODFmOGI2ZTYxODdhOWY2YWUxNS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFkMGxFUVZSNDJpV01NUTZDVUJpRC8vWHRobnNZVE5RNHNSc1owRW5jWVRBbUVsaUJDekN6d2tyQ2FiN2VCeDYwU1lldmFjME1SNklEZ1Y1eTVxV3pRZ3Irbkxoc2dFd2xMVFVWbWU5VElqb05qR3RHU2sweEQzb21abnJkRmZ2Smg1eGFqWEs5OTlNYklUKytPdXE2QVJ4UGd0VUp6bXdCUlRnOCtpU3ZmeHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ29Ib3Zlci5mNmRjMzA0Y2M0NThkYzEyN2MzY2U5YmQ1YmM0YTY1ZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFtRWxFUVZSNDJrM09zUXFETUJERzhWdXpGOStqV0doTEovZFNCOXVwRnBLdEhZcWc2S3ErZ0xPcnJvS1BwYS9oUHhMQndJKzdmSjVIeEo1SmF6VVpFODFhSCtETnhyeW9DckllZ2pNWEh4bFM3aWZxQmJKdCtDSm5TMDB0VWJocy9UdW1DZEF3MEZGN05PUUJZbUZOU1BCQWl3RWpXajdlRVFySERuMElmd1FsZldWNzZodXlEZHpnSThFZlIxejNqMVI0d25NaWw4a0NWVkZ4cWV5Y3BkTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3Nhc3NMb2dvLmU4MzUxYjIxOWIwZGE1YjRjMTAxMDA3NWUzM2ZkMmRjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9VbEVRVlI0bkIyT01RNEJVUlJGNzZPU3FEUWlVVkpTMklGWWdlaHR3eVlVS29sTzFPekdWNmdGTzFCTXhwdHo1LytjLysvN2MvTG1SYm1YcnFRYWxKR2NVckRseUdYQkg0YVJzZUdwUjM2UnIrUTZzU3pNS2Jad2x2U0FIZEtldTBJTUN3ZUtJM3hoRFcvNElCV0V0RERpWVFWOW1JRG5tY0lGaW9VeHdiK1lRUVZQY0pjYkRRWVdsaFFMT01FUDNLRmRDTzJRekVwZ3Q4dFhxc1A1dDlBQW9IOUhQTDQ5R2ZJQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci4yMzNmOTcwYzYyODBlODdlNmE3ZWI1ZTdkYTI3ZWZhOS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFvVWxFUVZSNG5DMlBNUTRCVVJSRjc2T1NxRFFpVVZKUzJJRllnZWlGVmRpRVFpWFJpWnJsakVJdHhnNFVrL0djaTVjNTgrLzdjL0xtL3loWDY2YWtHcFNSNHZsWEFEMENPYnQ4WGJEVFFycEh4cGxjMjdVd1psM0NVZElWTmtoYjFnb3hMT3hvOXZDRU9UeWdSQ29RMGtLUGpSbTBZUUErenhCT1VGam9FL3lMRVZSd0EwKzVNS0JqWVVvemdRTzh3Qk4reFpVc2NCa3lmTXNoMWVEOVpvSSsxOFk5akhpU1c0MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3NpdGVQb2ludExvZ28uNzA3ODQxYzljY2I1YzU4Y2ZmN2U1NThmMDJkOWE0OGQucG5nXCIsXCJoZWlnaHRcIjo4NixcIndpZHRoXCI6MjY5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFaMGxFUVZSNG5CWEx3UTFBTUJRRzRQOGQ2YVVjV0FCeFp3ODI2bUlkUVV6UUFVaWJIaXZWNUQweHdFZjd0bk5LaVdLTTBqWXRlZStscWlzb3BYQmZONUV4UnNaaGhITU9YZCtodkFVNVp6QXpyTFdnZVpwNVdSYzZqeE8vMUZvamhDQlBlaUFRK2dBRmlDMit1VnhWb3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvLjhiZThiNDhjYzBmNDdjNjc3NGVmM2IzMGVhMzA4MGE1LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmlXTk1RckNRQlFGZjQ3dzk0dUlwZDVLc1BNZUhzQkRXT1lZaXFXMjg3UVVRV3ppQm5LQ1RaWXc3UXhqTkRoQklpbHdHc041a3ZueW81TndVNUFwRlJVR3BXcjBmRGh6NWNaTFM1UHpuOWh4NHNDYmhSRmtGWTUwMnF0bFd4T1J1ZkNnMVowd3pkczFLellFTmdLYnpWUDVCaVR5YkFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvSG92ZXIuODhlZjE5YzUyMTg5YmJlODJiYTdiNGNkYTZkODUyM2YucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbUVsRVFWUjQya1hQUVFyQ01CQ0Y0Y2tSYkVURXBkNUtFQnJ3SGg3QVE3ajBHSXBMWFZlWFVpaVpSWnRDVDlEK1ExdTYrTWpMbXpBUWlYbnVzSUtQSVdSR3lkYVJuVmpRRUw2Y2lhSkNKTmQwaFRJVGdpY2t5cDVoYjZjQ0hUS3hWMmdabExqaGlSZCs5QnVKNDRQR2tJKzQ0c3o5ajdWdDhFalQrZ3RxN2lmY2NaZzNGSndKRDN5bTRSdGVLSnd1Mzl4aFM5N0R2aW9ESUw2SW43Z0NkbHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy91c0xvZ28uOTFmOGVmNTFiMDE4YzhiOTYzMjBmNmJhNTc4OGFiNWQucG5nXCIsXCJoZWlnaHRcIjo3NTAsXCJ3aWR0aFwiOjc1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBOEVsRVFWUjRuR1A4QndULy8vOW5ZR0ppWWdEUmpJeU1ETWlBRVNqNEQwZ3ovUHIxaDRHTmpZWGh3OGV2REkrZnZXV1FsaEJpWUdGaFltRDg4UEhMdnhsTERqRndzTE13NWllN01odzVlWVBoMmNzUC83Y2Z1Y2ZBd2d3MDcvQ0o2LzlzTGFZekhEcWV3YWlsSnNPdzY5QVZocWp1RS8vNWhGa1oxcGM1TURLMlQ5bjZyM0xkYllaSVBTSEdVRGNOaHRXN2JqQXMzL3I4LzZNRFNReXlVaUtNakcyVHQvNnJ5ajNDNEpXdXdoRHBxczRRRzdLSm9hTERncUc5UEpBQjZINEd4bytmdnY2N2N1TXhnN0s4T01PcEMzY1pMdDk2d1JEdVk4eWdyQ0FCVkFEMEZjd1hRSURzUDZBd1VCSUlBRnE0WnBBN0ZIVjVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nby5kZTVkN2JhOGMyMTZjMGI2OWI2NDZmOTRiNWEyM2EzYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJrMk5zUW5DWUJoRXIzQUZOOGdvT29EV0JoUXJLOEVCN0cxc0ZDRTdDQW9wa2dYK0RkNHRrK2JMUjlLa2VjYzdPRTZTeFlva0o5ZE9YVk5OK3FRUWJ1Ukx4bzQ2MlJJVThlWERRT0hCM3VGZWROejVFYnpZSnJPNEVqNzdSdkNmSnhVYmhIaFRIRFJhM0I1OXNFYUZVbEd5QkNPNWVRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLjZhNWFmYWMyZTNmOTliMzQ1NzkzNTk5NTM2ODJkYzJjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVrbEVRVlI0bkNXUE1RckNRQkJGWjhCU1NHVnY0UVZTQ1o1QlVEekJMcVN4OGlTS2hWaWtWRXN0RkVFVVM0bUlWN0NPNEJrQzQ1dGs0ZWRuLzd5ZDNkRXlCRkZWTWJPV2lsUW1JbmdrOVArdEF4MnloUEJENEd1QittakF3VnpMR0tkcXRxWTRJV3lqRGZBWkg1SVYzbUVQK2VPS2pMWnZDZzhPdlBBRCs2dCtRN2hBUGdsU2dqRys0a0VuL0VhbkdwaXhXUUpsZUlMbTZJaEdxSENnUjdFckluZkVDT29kVXVXUjdISUh4QmRRTXlZakF3UytGZkh1RDF4UlJIRGZ3ZkhCQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93YXNrb0xvZ28uOGE4ZTVjNjdmNDgyNTIyZjQ1OWM0OWFkZDJmNTE4OTYucG5nXCIsXCJoZWlnaHRcIjoyNTIsXCJ3aWR0aFwiOjEwMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVBVbEVRVlI0bkdPVW1IUTZrNEdSNFNVREE4TVhodi8vdVlBME13TWpJeXVRWm1KZytQOEpxT0RVTmFEQUZhRGtQNkRnTnlBV0F2SkJOQWlzQWdCQ21CQ0tLUFFzZ3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ28uYzgxMGJmODEwMDk5ZTFjYzMyYmU4MjRmYWVmOWVhMDkucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWTBsRVFWUjQybU5BZ0N0OFZ6U3Y4REZjRWI2U2ZhWHpTc1NWVTFjZVhmbHh4WnJocXZPVi8xZi9YNWtBSkVHMFBjTVY5U3Rycml5NUVucGxOWkJlZDFXRDRTcFk0Q3BVNElvR3d4V2dsaXYvcndLMWdHbDdocXNnUXp0Z2hsNjF4ckFXQUgzdVNkVUhGOG5IQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLjk5ZWU0ODcxMmFjNGM1ZTE4ZjNhNDEzZDY3OTkxOGM5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW4wbEVRVlI0bkdXUHNRMkRNQkJGL3pGQW1rZ1JVcFMwckJISk8wUXB6UVJJbE9rekFLT2taNGRrQ1ppQjduaUhnQVpMaC8zL1BSL2ZOdGExekYxdUpyRWJ1N3VmSkYxeEJodHpQaU5lMUIzakI5aENsT2dMT3NXRWhOR3ZOenNhRFkxdFBXSkNoZkZCVE5TWENVOUljQlhvZDB5b3lIQUFPQmQ4QUhKT2lKNTBFYllEYUFDd0pJRGxGMXZJRzhhZlZzdTVwUGFRY1ZNMGxyV0czWjg1QTVGTVFxRzhUeEtvQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nby42NDM0NTA4ZWQ1MWE5MDZhNzU4NGM5OTJjNTcwODAxYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiMGxFUVZSNDJnM0pzUW5DVUFBRzRZTzNnTVlkM0NBT0VEQ1F4aGdEZ3NQWWlqWVdFUnpEYWU2Zkp6NE9ydmxJQ1c2Y25lcXhBTFpaN0IxYzBvYXFMcEloWGZEamhrd1pRMVlma3BzanpuYVpYZjJLMTV6SnJ0ckpYKzd1ZmJzRlBPUnA3ekV2VzhFaU5sNXFqYVQ4QWU1OVE4QlZTdTRxQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nb0hvdmVyLmRkNTU3ODczMTc2MjAwMWE4Y2I0ZWU1NDIzNzU1NmQ4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXYwbEVRVlI0bkNXUHJRb0NVUkNGWjdndjRNK3phQmEwR0ZVUURNTGRKZ2FMVGJCbzhBRU1Qb0JKc0FqbTFTaHM4QzNjcGlaQndSMi93UXZET1hlK2M4K3ltc2NZUk9ScklpVzB5UlRNU1ZXZlloWTBUeExCMUFnTUFVY1ZDZmcydXVXZTZTM0dFdWtGeXduQk52NE5TUEZyVVozN0p6cVl3c3dPdkRLQ0t3SXpnZ04yTDIvb0FSNm1XZ2J2Z1J2Z0dOaEhQOTVRWlRubDVZVmdSSy9jZDh5SVdYcURjT3JBTGpERkc3NkY5N2JNR3dMR2Y3T0NOdVIvem9UdWFQZ0JUTjlMQ0ozbHRFWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL25la29tdXJhLmJiNGM1NWJmODY5MDJhZGY1NmQxOWM1NjlmODZjNDFkLnBuZ1wiLFwiaGVpZ2h0XCI6NTkyLFwid2lkdGhcIjo3OTAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXZFbEVRVlI0MmdWQVNRN0JVQmorL3ZhcERvcDBJWkdJRW1JcE5qWVcxbllPNXhDdUlRNGdFYllpQ0dLb29hWTJmWDIvMEdnd1ZFYWlJRkpKYnJrS3A5dGlDSW5yZUFycFdTVHdqc2p1ZFdBM2ZSRG5jRDV1cVdnSjVQdHQvdTRPRUpGajh2ejdncmZlVUZiRjBFekZ3VDZDMjJ4QlBRSm9vWjdRWjdPaTUzSUJKL2loV0tpUjBqSzB1bHh3Y25NUXB1OXpJMnRCdjkwb0tYdUlXYkwyaWVEZEQ3QkRoZ2pyVlVyQ055cWxHb3pKREd3YWNHSkplc2JnbElBL2paWlBKVWpRcGVRQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by41ODg2NGZjNjdhNGI4M2VlYTA0MTZmOTgxMjgxOTRiMS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUEwVWxFUVZSNG5BSEdBRG4vQVU5c1hQNG9PbUlCRXgwMEFQbjcrZ0FRQWZzQStnTUkvLzcrL2dBR0JQOEJBVnlIbC80ZURod0FFTkxUQUFWRlR3QU9DZllBQ3YvMUFQTU9KUUR2L1FjQUFXbXEyZjhMNTk0QStXOUpBQzZSbkFENERnc0FDZkhYQUIwcE0vL3YvdzhCQWFmRzMvN0d3Y2NCSitHNEFBODRWQUFJQmU0QTdQUHoveklxSWdEczhmSUJBYk9wblA3bTUvSUE2Z0lpQUFvZEtnQW04c0lBNVFNTEFDVVpEUUR4N2VZQUFaQ01qdjVOVTFRQjRPYjAvOFRyQUFFTjJiTUFDUVg1Ly9rRkNRQW9JQmNCT0h4Um92S2dHbzBBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvYm93bGluZ1Bob3RvLjRhZmIzZTg4ZDlhMzdjOGU5M2E4NmRkYWE3YzBmOTNlLnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXgwbEVRVlI0MmdWQWI0dkJjQnovZkg5K2R4czdzM2pnWEZpVHVnZlhycnU2dWp5U2VBVktQUEJ5bGFSNHBwUldKSkd5bWYrMitZcEtoY3JqMDlSUXNaS1lEVlE0TW9BVHowUG82cEc4L1FKR2JFdEZyVStuTzRNaWk4UmhzMlhsa1lJYmFwaG5raGluODlDMUVWTzcwMlgyUXJ3S0MzNjVBVmY5NEwyN0kySGFOV1IvcXp3Wjl1Q25zakNLSlZ6aUJZakxOZUJ6UkVqOC9TRGhyWkdSQjN5L2c2V1pFM0NtUzdTYWRaYUtEbCs1SVV6SElQa09Lbi85czIzbmFEVjNFQVhFTDI4R1BRRytPRW1xUUJDdzN3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLjRhNTEyYWNkZTNhZjA3NjhhNzFkZjU4YjcwYzdjNGQ5LnBuZ1wiLFwiaGVpZ2h0XCI6ODg5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHlHaS8vdTRkRC8zT0xuQVNJY0dRQUJjM2wvLy9YbDBBRDVBZ2tBRWc4T0FBR0Fhay8vQVA4R0FPOEJEUUFBQVA4QUFhT0thLzczOGZFQTBlYjdBT3p6OUFBQnFJcG8vZ3dEL0FERjJld0E0dkQrQUFHc2lHSCtDZ1g5QU80T01nRGo2L0lBQWFxRFcvOEhBTzBBRFVlT0FCMGlJZ0FCcEhsTy9oTU45d0FJT29ZQUdpWXFBTEpIT1o2emVzSk5BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jb3AyNFBob3RvLjA4ZTAzYjE3OGI4YjdjNzgwOGY1YTBiYjRmMTVlZDZlLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhrbEVRVlI0MmdWQVMwN0NRQmorL21Zc2xUYjRTblJEb29rUjRnRmN1SGJqRGJ5SU4vQUNuc1lEdUNPNmNtRTAxQWZ2bEZkZ21EQkRXK1lqOHZ6MDZLT29Ja29sdUx4cTRLTmpjWGJlNU1QOU5jYURvYWc0U1JCV3FxeEdCM0FMZzkrdXhueWRvdCtNWVoybENrSWxFQ0RjQy9IOTFvSTJSMWk1TGRLZmY4YjdnU2lROU42TDB3YTl2eDVhb3paTzZyZk1zZ3kxSkVCUTVpV0t2T1FvYmZQcjlZV2Y3MlRqMkFKYmcrbGtSdVdzQS8xR2xsSXdxMS9JM2MwaFRtczVqZGJZRklYc0FMRUhZV1lCRWxsNEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLjJmOGE2MjlhNmVhMWI4MTM1NDE3M2FjNWYyOTJmYmQ0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXdrbEVRVlI0MmdWQXZXckNRQUQrdnBxZlFaSXFwVlN3SFFwZEt2NmdidUlpanE3aTQva0FMb0w0QWlJNEtqZzRCd1FoSUtLNUpNYWNkeWVjTHZmYXNtMDJmbnlRUUhqTDhKVEs1SThjUmtsYXYyVkNxZHpFSWtMQmNaQ21LUzZ4aEVnZXVJdklXTlA1bW41K3h1ZGZEWTVYUXBKbUVDTEJMUXpNTmRpVHBkWkUrK0dCMVhZWHRuc0htU0U0TGt5MStBNnZVQ2RINDc2MmtjRkZERzJkVVBrYW90c2NZTHZiWUxXZTRhM29SdEJLVXRHRGxOOGM5TVpzL0hmdzRWZFE5alJmL0dSVFdlRW1WRlFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvZ2lld29udFBob3RvLjQ5MmNmOGMyMzJiODkyMmU5OTc1NTNjY2U4MjIzZGY5LnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQWlFbEVRVlI0MmhYTlFZNENNUXhFMFYrTzB5UGcvb2VaN1J4Z0RvT2dvWjJPRFZsK3FaNUt2My8vV1lnWXlmMTVjTVJnaklrM2R5R1ZOWFFtcEZSd3lzMnNlbmRpVEZEaHpXaVhuM0lUV3Z5NTcvUVZIWTc0aXRjN2FPNjFiVjBHWEs0Yjl0Z3h5V3JFc2M0b2pDcTQzYTdsNHp4WnRRYk5qWnlUaUlHVEtXdExoV1ltSnBVcTlRRWQvRXNKUE1oOWhnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8uNTIwYzlmZWZlZmRiNGIyYWVhMDg5YWY4MzZiNzgzMzAucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjg4OSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBajBsRVFWUjRuQUdFQUh2L0FadU1oUDlJVWtZQUZSa1dBUDM5L2YvZTIrQUF3YmpDQVFVRi9nQVNGeFgvQWEyaGwvOFdHQk1BQ1FvSS8vSHg5QURGdjhnQTVkM1pBQUVFL2dIaDNPZi9BYkttblA4TURnb0E4ZS95LytmbTZ3QUU5TzRBMU5yV0FQTDI2UUg3L1FiL0FhU1ZqUDhJQ3drQTZ1YnJBTTdrOFA4VSt2RUE1ZVBkQVAvLytBSC9BdmovL0xKSExrby9vWjRBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLjJmNDk1NDc0MmI4ZmM0YzI4NzU2MGQzZWI0YWRiNGJhLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqa2xFUVZSNG5BVkFzUW5DUUJSOVA0Y0VDWWVnQ0lvRHFOZ3A0Z0lpcExTd3NiRzBjSWdVTHVRR1RwQVJBcVlRTVlGNEdnbm5rZkJFb3VqTXloamtTWXJLK3RDYXRPVUxnL0VFalFCeTNJWHNkUHRzdzhwaXJuQjdCTXd6RDhYbkNlY2F5UDYwWmVrTXhWN2xzQWJjYjhwTFBNSzNkaWplQ1dRVHJnaDRWTDZXb1FSWXp1Nk0weGF5dWdjRjRnOXpEanZ3LzZwYVZnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by40N2JlZTk5ZWJjOGQ3ZjQzZDVlMzg5MGIzZTA1OGNlMC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTAyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBalVsRVFWUjRuQVZBTVE3QlVCaisvbWllMEtxbnBUcm9VRXNyYVNNaFlqT1ltQnhDSE1ENWJDNWd0aGxNaGxhVmtOQjhJc3ZWbG5uVndVVlBNWEVOekFaZkhzOGY1TXBEMUhoQmhtRkNwNmRwelBleWlXdlE2czdEcVFENlk2Uk9DYkg5bUw3MVk3cmV5V0xrUWxVRkgrVVROUjBpZXd1a2FiV3A2b3FlRjBnU0JiQmJKa0dpYXhxNDNqTDhBYWlWSzhXVndBRXRBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8uMzQ0MWJjMTkxMTIxZjM5NTBhMmIwMmEyYmI5M2ZjNDEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWowbEVRVlI0bkFHRUFIdi9BWFZoTXY4TUdUMEFKejliQUJVV0ZRQVZFeEwvL1BqMkFON1V5UUR6NTlFQUFXcGNQUC8zOWhUL0R4WWFBUVVORXdBM1BqMy83ZWJmQUwrNXZBRFc0dmNBQVM1QVkvLysvZUwvQUFmOEFmZjc5d0RkMjhqL0FCVXRBREViS2dBRkFRTUFBV0pmWGYvVTZ0My84dm5HQVFnSkNnQUZBaDcvK3ZueEFQcjU1d0FEL3dNQVRMZzVxSTNIVWJFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8uYjc4MTVlYjQ0OGE4MmRiYWFiZWUzZDA2NzZiZjcxZDkucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjc1NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBblVsRVFWUjQyZzNNU1E3QlVBQ0E0ZjgxcjhSUTBZcUZoVE5JdUFqM3RISUNLOExTM3F5MHREcXJEa241RHZBSnkzWXI3KzFVc2xZbmprS2FqUVp0VFVNSVJaUkZqdHh1MXJpT3hXZzg0V0dhNkhxWFZxZk4vWHBpZjdraUY0czVzZThRUnZGLzhPa2JPcS9iZ2QxcVNhZ2F5TmwwU3VBSDFOVWE2bkJBaFNMY3AxMFZaWUhSMDVCcGtwQm5HWmZ6a1NoSytPUVFlQzVLWUpJNlgzN0wyMDFBczVmYk1RQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLmEwZmNiOGJmZTg3OTRmODlhODM2ZTIwYjJlNmI0OWJlLnBuZ1wiLFwiaGVpZ2h0XCI6Nzk5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFJQ0FZQUFBQXg4VFU3QUFBQXFFbEVRVlI0MmdWQVFRdkJVQUQrM2p5c3RXeWt5S0xJd21GeGMzUDBVL3cwLzhKMU5hVlpIQlF1UzJJeldqSGJ5OXNUbVMyVytTOWxtR2dCbkxpRmd1Q2cwMkdkU0N4R2REeUx1VFVnbHRrRTFUVUZNaytnR0NvWmp5b3crdzFJVms4RFQ1L2dXWW9vdU1BK3ZDQ2QvS3NvNVpISWlTdzhieXRxTWhNU3U3dkl2Z2swM2NEbnpiQ3hWNkI3ZDQyYkgwQ3Q2bmlFSWRrNUdTaEJDZTF1QjV4ekZDbEZzYXpnRDVYeVJ5eHREZlJMQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLjZmZWVkMzM0ZmQwOTZiYmM0ZjU4YjgzZDdiNTQ3ZjViLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXJVbEVRVlI0MmhYTVFRN0JRQlFHNFA5bFhxZG9OUWdWTm03aHNrNGdEbURoR2hZU2NRQWhRdE5XT3pOOVQrMi9mSFE2N01VNklYRXRpc2NkbktZWXorYWFqQktFS0NiZVhSNm9tMGFkQ3Q3M0NxQUt3K3dGcWgzRzFpcFA4NXdTNmRBSTRFMEpNZ2I1TW9YdlJJTXdzZnBXMVFzTmJZVE56R0E2VUZoVGF4azYyUFlOWG9VbjRnR3JBTkN5d0w4eWt4RW1UR2krTitYcjhRVG4yMzZPMUdWYmlydFBqODRhRUNOYnJPa0h0RkpVVUtadFFwTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8uMDk0ZmEyNTg2N2IzZmFhYTJjNzg5ZGFmNDRmMTM5OGEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBeGtsRVFWUjQyZzNNTzA0Q1VSU0E0ZjhNbDVrTE04UERDUEdaMlBoZ0RjYUNSQ3V0cmQyR0N6Q3hkeGt1d2NhU1Nuc3JiZFNnTmhJWTRENE9mQXY0NU83aE1mcTBJV0xxNU0yVU1yZHNGRmIzTzVaV0xZalpybFhNRFZwc1duYUxsRzRHN1diZ2FmVE0rT05OWlhCeXBNei9HSjZkTXp3K3BOZHA4RDd4M056ZTYvWHBnY2pWeFdWMEl0TGY2alBvbHV5VWRWNitadnI2ejNwTHhMUjZlN2lvV3ZtRTBYZUYvVjBpM3RGRzhOT2xtcytmTVpsSkpjOHlOU0ZJU0JJV3ptbEU4VkZsQlhMK1JVMGFDZHp6QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWNsYXJlblBob3RvLmVjNGY2MTBkNWMxZWEyZWVkYzU1NGQyNWUyMzNlYjY3LnBuZ1wiLFwiaGVpZ2h0XCI6ODkwLFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHA3Y2Y0UERRNEFCZ2NIQU43ZzVBQUJqcGFVL2dVRkJnQUVBZ0lBenMzTUFBSFF3NjcvNWZEMkFQYjA4d0RUMWRjQUFhK1lmLy8zQlJUL0JnMEpBT1BvOFFFQmpJSjcvOXZKendBWEZnNEEyL0gxQUFGZFYxRCs0TnpoQU8zYzRnRCtGQTRBQVQ0NU12LzMvUUQvL2Y3L0FmbjQrZ0FCTWk4cy92MzkvZ0Q1Ky93QS9QNy9BQTNFUXVSMUIybzVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9ub3RyZURhbWVQaG90by5jYWFjMGQ3OTkxYzIyNGFiZTkwNGQ0NDBhYjczMWE0OS5wbmdcIixcImhlaWdodFwiOjY2NyxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF3MGxFUVZSNDJnVkF6VW9DUVJ6Ly9XYkdiV3pkVVNLNmRTZ1E2bFFQMEJ0MDZRRzc5Z2hlUEVWMEx3cWtDQkowL1lCQjNmVUQxOVhadi9ENXBWTXhiRUNwWUU5alhMVnZjZDV5VUJvN1pxTWVmUHJMU0pPUlRiRGFsbFFYclJPSlZJRnlPWURWQnpSc0RkTzBMOGIvZnpNVUJWRHVrUHNCL25vZmVIdnQwdmpoRkxQRFRCckpHZlA1Qk9NMFExeDNNTnU2azd1YmU5UTBFU21pMDMzSDErZVBtTXZyTmpRMWxuTXZpeXlITmNEVDR3TlVZalZsdjBZVjlwUVEyRXhpdUtiakVZaXhUN0djdnZ3WEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8uZjVkZjUyYzJmYjVkNzhjZmZiZGI4ZTY1OGM5NzE5ZTMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBdzBsRVFWUjQyZ1dBdnk4RFVSekFQOS9YOTNyWGE2OTRKM1dEQVltRVJOaHRCdkUvMm14R2k5VXFFaEdFV0F3V2FZZ0xQYjNyOWNmZHQ1SERvNFBtK2VsRkxpNnYyZC9kNHZ6cWxZOGYxWGsxWVZ4T3hhNTBZbExRbTl0N2NwZGllaEhlV0g0elE5U3lhZ2RoS085QVlHdE1xeUZaZGFTYkE0WkRwM2srRWR2ZjJkYmpKQmJmQytqV0dmWFhHM3RlZE0xWGZKb0tPVHM5YWFLZ2pUUENldUlweXlsM0Q0K2tHekd6MlJ5Yi9TMFl0NUZPNFBTLytCWlF3bTVmczFGRlVZeGtDV3VWUi9rUW9PblpBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8uMmY1ZjRmYzVmNDEyNjZlMzRkYmY1ZDc5YjBkNDVjNzQucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd1VsRVFWUjQyZ1ZBMzJzQmNRRC9mTXcydCt0N055UFdicnViM0hhYkZFK0tQSXJ5VnlzdnlvTlM2dnlNdUJBZDNZdE91YS9ZK0MxRlZlMUdFWjdSRlQ4UWlUZWtVa2taSklEcnh4Zmp6R1R4R0t4a1dsRmhiQVBvelR6S2xRSVdtb013NjhoWWJUYmd3M0RNay9yT3piOUowemI0WFhRby9Ubmloem5acy82aWp1ZlNyVGZoV1Nhd0hPUFRlSlU3UHdRVm5Xemw3RWpJQzVMYU0zS0t3RG1tWWpKejRSMTg5QUV3RFVSSGdHMHJJNjJYSi9xNmpYekJsdGY5R3NGMHhEc3JQMEdlS1VaMzdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9yeXNpYW5rYVBob3RvLmI4YjUwMzYxNDA1NzM0MjM5MTNhNzAzYmY4ZDk5YjY3LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXprbEVRVlI0bkEzS3ZVcENZUmpBOGY5enp0djdtbFlTZENwQm0ycUliSWh1b2t1SWh1Z09hdEdsdWJ0bzdEcmFvaUNpRDNLUWtqVEZiemh5MEVHVTk5SHB0L3prN3Y3TlMyZ2t0QWFYdHF5dE8rYWd1MW5IT0lsRkhoNS92YkVXNDFaSVp4eXBwVE8vSEY0SkJlUzZmS3Q3K1R6OWFjQk9GSkhMUmFSV00xanJORUJGQ3R2NDR0R0JaRGMyU1NZQmxlOTNHZ09qKzhVVG1yMUVwSFJ6NForZVB6ZzlQR2FyWUdqM2hyeSsvREdLQnlnV0taZk9mS2NleStYNWxWWXJuMUt2VmFsMVo5cG90Zm42K1pjRkZjNUh3bHBDMXlnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3NraVN3aXNzUGhvdG8uZDVmM2JiOWM5NmVmM2VjMTI3NmZmZTNlMjA4MzYyZjIucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBbzBsRVFWUjRuQTJPdXc0QlFSaUZ6NWtaV1NKQjRlRWxPaEdsam1oRXBkUXBQSUpxczVOZFpzM2wvMDE3cmgrM2g1Tk1adzFKZzVneVlnR1FrenBMVEp3aGorZWJEQ0dDVlZmWDROMzkwT2lJOVdxT3JodkF4L09sT1JlMGJZZVVFMG9SK0Q2Z0NOWDd2aTVjN3VJbWp0WWFHSzBYNDRoVXFIMUlVRkZ5ZDd3S1NLZ0NuMitBOXdPV3F3VTBTdzFVYTdNL1MyMVRSTlZZMGxtTEdMT0dNYUVpOGcvelUyR0N3NlkvdEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3N1c2hpUGhvdG8uZjk5NTBjNDg3ZTg0NTRlMjRlYjM3MTJkZDIzZGMzNGUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd2tsRVFWUjQyZzNLVGFzQlVSd0g0TjkvenBuUm1SdjNqanNLSVlTOGxMTEJ5a2VRbFcrc0ZMRWlDK1ZsZ1JKR1hwcUdjdzZMWi9kUXQ1VldkdnlIK0pGRFNndi9UaGpFVEMzOUFBWXg0dUYwQ2ZMcDY4TnlnSkFkZy9JalNHYUxVTld2YitURzlrcm1VeUo0V2Rqc2pxaEdYZVNiSFp5Y2lINkVCRkV2QVNYL1hPbzNDN0FoWURiYW1FNFcrcDRxNExkU0orNFpVUWlwTkJJMU9Ma3k0TWFROFc2WWpjWklpYmZtNzBEaGJERWF6dGU2WVRMS3N5dHNUdHE0N09HdEJIMEFZWkpEcjlRamlMQUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc011cnJlblBob3RvLjY1MmQ4ZTMzMTBhOTYzOTFlODlkN2NjOWJhMmZhMDM0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDU3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqMGxFUVZSNG5BR0VBSHYvQVdHYjJmOFVDd1AvQ1FMOUFBUUMvZ0QyNnVNQi92cjMveE1NQkFBd0xpZ0JBV1NKdS84Q0Jnai8rZmZ6QUFqdzJBQUxEaElCOXZQdi8vOEJCUUFGREJRQUFjUEh6UCtMbXIzLzVBZ1dBRVgvMWdEN0NCRUI3Z3NYL3dMNytRRDI4L0FBQWJXdXEvL00wZHYvOXc0WEFCeXlxQUQ4TmtBQkN6by8vd2I5K1FEMytmd0JMcnM5TXNidGQ1QUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLjZkNGQ5OGE4NmJjYmIwYTA5MWZlYmQ1ZTA5OTQ5MDYzLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhFbEVRVlI0bkIzT3ZRN0JVQmdHNFBkcnRkUmZJeWxTa2REQkpuWkdrd3V3dWdleE1kdkY3QWJFYmpOWUpGeUN3V2pDUWYrMHBlY1FOL0Rrb1dKdnhvWHJreFQ0aU1NWFpCNGg1aEJ2TGtNa1UwU3Q0WnJmbUl2ejFRYkNBUEFqSUtOQ04zSklxd3FvUFZxSlFscEQxY2orQlVOUDRlTThZWitPSXQ5cUVuWDdFejdvZDBqVk5MRGJCWXhkRVhpUzBCVUpacU5DdEZpdWVlQjdjR3dQN1A2QVZhK2haSnJZYkhlUUl3YzBuczU1dVdTUW5FZ0tJb2tzeTRLcVFCejJCengvK1M5K2VGRm5PWFEzQUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3dhbGVzUGhvdG8uMjczYjIxODFhYmU2Y2M3NjFlMjk5ZTczZGFjNDFlNWUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBMFVsRVFWUjRuQUhHQURuL0FjelIzUDREQmdVQkFRTUNBQWtHQ0FENitma0Evdi8vLy83Ly93QUNBQUVCQWM3VjMvNzg4ZkVBNTd1OUFCRTlPd0FPR2hrQTlmUDFBUDRCQUFEZjN0d0FBY0xJei8vaHhNTUEzSFJ1QUJkMVpBQXJWR3NBOC9Ed0FPbnM2Ly9XMXM4QkFZaUdpZjcxdTdrQnorM0FBQm9tU0FBZEx6b0E5ZWpnL3dRTEVBQUEvUG9CQVdaeGV2NE4xOWdBOHJ2SUFQUTNLZ0FWSGhBQUloSU5BQWtaSUFEdTRkb0FBVDVVWVA0NTd1b0JMK2ZwLy9zRkNBSFlNQ1VBR3c0Qy93SUpEZ0FEQkFNQk5sdFVGaU4xa1lZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRDb250YWluZXJcIjogXCJhYm91dF9hYm91dENvbnRhaW5lcl9fMXlvLUlcIixcblx0XCJjb250ZW50XCI6IFwiYWJvdXRfY29udGVudF9fMXNXRExcIixcblx0XCJzdW1tYXJ5XCI6IFwiYWJvdXRfc3VtbWFyeV9fajNrdTFcIixcblx0XCJob2JiaWVzXCI6IFwiYWJvdXRfaG9iYmllc19fMTBhTktcIixcblx0XCJuZXdzbGV0dGVyc1wiOiBcImFib3V0X25ld3NsZXR0ZXJzX18xWGU0TlwiLFxuXHRcImNvbW1pc3Npb25zXCI6IFwiYWJvdXRfY29tbWlzc2lvbnNfXzEwb0NCXCIsXG5cdFwic2Nyb2xsR2FsbGVyeVwiOiBcImFib3V0X3Njcm9sbEdhbGxlcnlfX1pRQzJlXCIsXG5cdFwiaGludFwiOiBcImFib3V0X2hpbnRfXzFPOFJ1XCIsXG5cdFwicHVsc2VcIjogXCJhYm91dF9wdWxzZV9fMXhIbkZcIixcblx0XCJwaG90b0dhbGxlcnlcIjogXCJhYm91dF9waG90b0dhbGxlcnlfX25la2pNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwaG90b0dyaWRcIjogXCJwaG90b2dyaWRfcGhvdG9HcmlkX18zNm0yTlwiLFxuXHRcImdhbWVcIjogXCJwaG90b2dyaWRfZ2FtZV9fMmh5MV9cIixcblx0XCJza2lcIjogXCJwaG90b2dyaWRfc2tpX18zN3cwalwiLFxuXHRcImNhclwiOiBcInBob3RvZ3JpZF9jYXJfXzRMVmE1XCIsXG5cdFwic2t5c2NyYXBwZXJcIjogXCJwaG90b2dyaWRfc2t5c2NyYXBwZXJfXzN5YVhqXCIsXG5cdFwibGFrZVwiOiBcInBob3RvZ3JpZF9sYWtlX18xUEo0SFwiLFxuXHRcIm1vbnVtZW50XCI6IFwicGhvdG9ncmlkX21vbnVtZW50X18zcnotMFwiLFxuXHRcInN1c2hpXCI6IFwicGhvdG9ncmlkX3N1c2hpX19fWElTY1wiLFxuXHRcImJvb3RzXCI6IFwicGhvdG9ncmlkX2Jvb3RzX18yZXM4d1wiLFxuXHRcIndhdGVyZmFsbFwiOiBcInBob3RvZ3JpZF93YXRlcmZhbGxfXzF0Vk9nXCIsXG5cdFwiY3Jvc3NcIjogXCJwaG90b2dyaWRfY3Jvc3NfXzJtUjZQXCIsXG5cdFwiYm93bGluZ1wiOiBcInBob3RvZ3JpZF9ib3dsaW5nX19vWmo2VlwiLFxuXHRcIm1hbmNoZXN0ZXJcIjogXCJwaG90b2dyaWRfbWFuY2hlc3Rlcl9fSC1ub2NcIixcblx0XCJhcnNlbmFsXCI6IFwicGhvdG9ncmlkX2Fyc2VuYWxfXzNUZEdFXCIsXG5cdFwiY2hlbHNlYVwiOiBcInBob3RvZ3JpZF9jaGVsc2VhX18xMjVCZFwiLFxuXHRcIndhbGVzXCI6IFwicGhvdG9ncmlkX3dhbGVzX18xODdlSFwiLFxuXHRcImFscHNcIjogXCJwaG90b2dyaWRfYWxwc19fSW9yckxcIixcblx0XCJjaHVyY2hcIjogXCJwaG90b2dyaWRfY2h1cmNoX18xZ1hNa1wiLFxuXHRcIm11cnJlblwiOiBcInBob3RvZ3JpZF9tdXJyZW5fXzFSMG1pXCIsXG5cdFwiZWlmZmVsXCI6IFwicGhvdG9ncmlkX2VpZmZlbF9fVjYyU3FcIixcblx0XCJicmlkZ2VcIjogXCJwaG90b2dyaWRfYnJpZGdlX18zTFdKaFwiLFxuXHRcImNsaW1iXCI6IFwicGhvdG9ncmlkX2NsaW1iX18tQW05RFwiLFxuXHRcImJhcmNhXCI6IFwicGhvdG9ncmlkX2JhcmNhX18yNnBQMlwiLFxuXHRcImNvbG9yVXBcIjogXCJwaG90b2dyaWRfY29sb3JVcF9fM3daLURcIixcblx0XCJwaG90b0luZm9cIjogXCJwaG90b2dyaWRfcGhvdG9JbmZvX18xQWlWelwiLFxuXHRcImZhZGVJblwiOiBcInBob3RvZ3JpZF9mYWRlSW5fXzM1anRwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX194S0lxSFwiLFxuXHRcImdvVXBTcXVhcmVcIjogXCJmb290ZXJfZ29VcFNxdWFyZV9fMlBjS1JcIixcblx0XCJjb3B5cmlnaHRzXCI6IFwiZm9vdGVyX2NvcHlyaWdodHNfXzItaW1vXCIsXG5cdFwiaWNvbnNcIjogXCJmb290ZXJfaWNvbnNfXzJVeF9fXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhYm91dEluZm9cIjogXCJtYWluaGVhZGVyX2Fib3V0SW5mb19fMXc2dS1cIixcblx0XCJoZWFkZXJcIjogXCJtYWluaGVhZGVyX2hlYWRlcl9fMmR3ODFcIixcblx0XCJkZXNjdHh0XCI6IFwibWFpbmhlYWRlcl9kZXNjdHh0X18yTUxFT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGVjaG5vbG9naWVzSWNvbnNcIjogXCJ0b29sc3RlY2hfdGVjaG5vbG9naWVzSWNvbnNfXzNuZDFzXCIsXG5cdFwidGVjaG5vbG9naWVzSWNvbnNSb3dcIjogXCJ0b29sc3RlY2hfdGVjaG5vbG9naWVzSWNvbnNSb3dfXzFxbVNNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uQ29udGFpbmVyXCI6IFwiaWNvbl9pY29uQ29udGFpbmVyX18zalVJNFwiLFxuXHRcImljb25cIjogXCJpY29uX2ljb25fXzE3VHFZXCIsXG5cdFwiaWNvbkFjdGl2ZVwiOiBcImljb25faWNvbkFjdGl2ZV9fMUY0NjJcIixcblx0XCJmYWRlSW5cIjogXCJpY29uX2ZhZGVJbl9fZXBXc3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVCYXJcIjogXCJtZW51YmFyX21lbnVCYXJfXzJYVzZrXCIsXG5cdFwidGl0bGVcIjogXCJtZW51YmFyX3RpdGxlX18zeUtRalwiLFxuXHRcInNxdWFyZUluaXRpYWxzXCI6IFwibWVudWJhcl9zcXVhcmVJbml0aWFsc19fMmZJYzNcIixcblx0XCJuYW1lXCI6IFwibWVudWJhcl9uYW1lX18zWWV3dVwiLFxuXHRcInRhYlwiOiBcIm1lbnViYXJfdGFiX19tSG8wbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGltZWxpbmVHcmlkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZF9fRk5DTklcIixcblx0XCJ0aW1lbGluZUdyaWRJdGVtXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1fXzNCcTlxXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbUNhcmRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbUNhcmRfXzNqd1NiXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmRfXzNQYk1yXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbVdpZGVcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbVdpZGVfXzFMdDBKXCIsXG5cdFwidGltZWxpbmVQb2ludFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZVBvaW50X18xOU9jMFwiLFxuXHRcImhvdmVyVGlwXCI6IFwidGltZWxpbmVncmlkX2hvdmVyVGlwX19FdTUxRVwiLFxuXHRcInB1bHNlXCI6IFwidGltZWxpbmVncmlkX3B1bHNlX18xQ3pQcVwiLFxuXHRcImNhcmRDb250ZW50XCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50X18zUkNSeVwiLFxuXHRcImNhcmRDb250ZW50SGVhZGVyXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50SGVhZGVyX18xTkdLNVwiLFxuXHRcImNvbXBhbnlJbmZvXCI6IFwidGltZWxpbmVncmlkX2NvbXBhbnlJbmZvX19NN0xJZlwiLFxuXHRcImNvbXBhbnlUaXRsZVwiOiBcInRpbWVsaW5lZ3JpZF9jb21wYW55VGl0bGVfXzJISlVNXCIsXG5cdFwiY29tcGFueUxvZ29cIjogXCJ0aW1lbGluZWdyaWRfY29tcGFueUxvZ29fXzM1cTRqXCIsXG5cdFwiY2FyZENvbnRlbnREZXRhaWxzXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50RGV0YWlsc19fM1Z3cmJcIixcblx0XCJjYXJkQ29udGVudERlc2NyaXB0aW9uXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50RGVzY3JpcHRpb25fXzJCaUtUXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvb2x0aXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==