/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  color: #444;\n  line-height: 1.9;\n  background-color: #f3f3f3;\n}\n\n/* general elements */\n.section {\n  padding: 15rem 3rem;\n  border-top: 1px solid #ddd;\n  transition: transform 1s, opacity 1s;\n}\n.section--hidden {\n  opacity: 0;\n  transform: translateY(8rem);\n}\n.section__title {\n  max-width: 80rem;\n  margin: 0 auto 8rem;\n}\n.section__description {\n  font-size: 1.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #5ec576;\n  margin-bottom: 1rem;\n}\n.section__header {\n  font-size: 4rem;\n  line-height: 1.3;\n  font-weight: 500;\n}\n\n.btn {\n  display: inline-block;\n  padding: 1.25rem 4.5rem;\n  font-size: 1.6rem;\n  font-family: inherit;\n  font-weight: 500;\n  border: none;\n  border-radius: 10rem;\n  cursor: pointer;\n  background-color: #5ec576;\n  transition: all 0.3s;\n}\n.btn:hover {\n  background-color: #4bbb7d;\n}\n.btn--text {\n  display: inline-block;\n  background: none;\n  font-size: 1.7rem;\n  font-family: inherit;\n  font-weight: 500;\n  color: #5ec576;\n  border: none;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 2px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\np {\n  color: #666;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  transition: filter 0.5s;\n}\n\n.lazy-img {\n  filter: blur(20px);\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 9rem;\n  width: 100%;\n  padding: 0 6rem;\n  z-index: 100;\n}\n.nav.sticky {\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n.nav__logo {\n  height: 4.5rem;\n  transition: all 0.3s;\n}\n.nav__links {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.nav__item {\n  margin-left: 4rem;\n}\n.nav__link:link, .nav__link:visited {\n  font-size: 1.7rem;\n  font-weight: 400;\n  color: inherit;\n  text-decoration: none;\n  display: block;\n  transition: all 0.3s;\n}\n.nav__link--btn:link, .nav__link--btn:visited {\n  padding: 0.8rem 2.5rem;\n  border-radius: 3rem;\n  background-color: #5ec576;\n  color: #222;\n}\n.nav__link--btn:hover, .nav__link--btn:active {\n  color: inherit;\n  background-color: #4bbb7d;\n  color: #333;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n  height: 100vh;\n}\n.header__title {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  row-gap: 3rem;\n  align-content: center;\n  justify-content: center;\n  align-items: start;\n  justify-items: start;\n  max-width: 115rem;\n}\n.header__img {\n  width: 100%;\n  grid-column: 2/3;\n  grid-row: 1/span 4;\n  transform: translateY(-6rem);\n}\n\nh1 {\n  margin: 0;\n  font-size: 5.5rem;\n  line-height: 1.35;\n}\n\nh4 {\n  font-size: 2.4rem;\n  font-weight: 500;\n}\n\n.highlight {\n  position: relative;\n}\n.highlight::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 0.7;\n  transform: scale(1.07, 1.05) skew(-15deg);\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\n}\n\n.features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  margin: 0 12rem;\n}\n.features__img {\n  width: 100%;\n}\n.features__feature {\n  align-self: center;\n  justify-self: center;\n  width: 70%;\n  font-size: 1.5rem;\n}\n.features__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5.5rem;\n  height: 5.5rem;\n  margin-bottom: 2rem;\n  background-color: rgba(94, 197, 118, 0.2274509804);\n  border-radius: 50%;\n}\n.features__icon svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #5ec576;\n}\n.features__header {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.operations {\n  max-width: 100rem;\n  margin: 12rem auto 0;\n  background-color: #fff;\n}\n.operations__tab-container {\n  display: flex;\n  justify-content: center;\n}\n.operations__tab {\n  margin-right: 2.5rem;\n  transform: translateY(-50%);\n}\n.operations__tab span {\n  margin-right: 1rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.operations__tab--1 {\n  background-color: #ffcb03;\n}\n.operations__tab--1:hover {\n  background-color: #ffbb00;\n}\n.operations__tab--3 {\n  background-color: #ff585f;\n  margin: 0;\n}\n.operations__tab--3:hover {\n  background-color: #fd424b;\n}\n.operations__tab--active {\n  transform: translateY(-66%);\n}\n.operations__content {\n  display: none;\n  font-size: 1.7rem;\n  padding: 2.5rem 7rem 6.5rem 7rem;\n}\n.operations__content--active {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  column-gap: 3rem;\n  row-gap: 0.5rem;\n}\n.operations__content p {\n  grid-column: 2;\n}\n.operations__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  align-self: center;\n}\n.operations__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 7rem;\n  width: 7rem;\n  border-radius: 50%;\n}\n.operations__icon svg {\n  height: 2.75rem;\n  width: 2.75rem;\n}\n.operations__icon--1 {\n  background-color: rgba(255, 205, 3, 0.1921568627);\n}\n.operations__icon--1 svg {\n  fill: #ffbb00;\n}\n.operations__icon--2 {\n  background-color: rgba(94, 197, 118, 0.2274509804);\n}\n.operations__icon--2 svg {\n  fill: #5ec576;\n}\n.operations__icon--3 {\n  background-color: rgba(255, 88, 96, 0.1764705882);\n}\n.operations__icon--3 svg {\n  fill: #ff585f;\n}\n\n.section__title--testimonials {\n  margin-bottom: 4rem;\n}\n\n.slider {\n  position: relative;\n  max-width: 100rem;\n  height: 50rem;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 50rem;\n  transition: transform 1s;\n}\n\n.slide > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.slider__btn {\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  height: 5.5rem;\n  width: 5.5rem;\n  border-radius: 50%;\n  border: none;\n  font-size: 3.25rem;\n  font-family: inherit;\n  color: #333;\n  background: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n}\n.slider__btn--left {\n  left: 6%;\n  transform: translate(-50%, -50%);\n}\n.slider__btn--right {\n  right: 6%;\n  transform: translate(50%, -50%);\n}\n\n.dots {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  display: flex;\n  transform: translateX(-50%);\n}\n.dots__dot {\n  border: none;\n  background-color: #b9b9b9;\n  opacity: 0.7;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  margin-right: 1.75rem;\n  cursor: pointer;\n  transition: all 0.5s;\n  /* Only necessary when overlying images */\n  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */\n}\n.dots__dot:last-child {\n  margin: 0;\n}\n.dots__dot--active {\n  /* background-color: #fff; */\n  background-color: #888;\n  opacity: 1;\n}\n\n/* testimonials */\n.testimonial {\n  position: relative;\n  width: 65%;\n}\n.testimonial::before {\n  content: \"“\";\n  position: absolute;\n  top: -5.7rem;\n  left: -6.8rem;\n  z-index: -1;\n  font-size: 20rem;\n  font-family: inherit;\n  line-height: 1;\n  color: #5ec576;\n}\n.testimonial__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.testimonial__text {\n  font-size: 1.7rem;\n  margin-bottom: 3.5rem;\n  color: #666;\n}\n.testimonial__author {\n  display: grid;\n  grid-template-columns: 6.5rem 1fr;\n  column-gap: 2rem;\n  margin-left: 3rem;\n  font-style: normal;\n}\n.testimonial__photo {\n  grid-row: 1/span 2;\n  width: 6.5rem;\n  border-radius: 50%;\n}\n.testimonial__name {\n  align-self: end;\n  margin: 0;\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n.testimonial__location {\n  font-size: 1.5rem;\n}\n\n.section--sign-up {\n  border-top: none;\n  border-bottom: 1px solid #444;\n  padding: 10rem 3rem;\n  text-align: center;\n  background-color: #37383d;\n}\n.section--sign-up .section__header {\n  color: #fff;\n}\n.section--sign-up .section__title {\n  margin-bottom: 6rem;\n}\n.section--sign-up .btn {\n  font-size: 1.9rem;\n  padding: 2rem 5rem;\n}\n\n.footer {\n  padding: 10rem 3rem;\n  background-color: #37383d;\n}\n.footer__nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5rem;\n  list-style: none;\n}\n.footer__item {\n  margin-right: 4rem;\n}\n.footer__item:last-child {\n  margin: 0;\n}\n.footer__link {\n  font-size: 1.6rem;\n  color: #eee;\n  text-decoration: none;\n}\n.footer__logo {\n  display: block;\n  height: 5rem;\n  margin: 0 auto 5rem;\n}\n.footer__copyright {\n  font-size: 1.4rem;\n  color: #aaa;\n  text-align: center;\n}\n.footer__copyright .footer__link {\n  font-size: 1.4rem;\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  max-width: 60rem;\n  padding: 5rem 6rem;\n  background-color: #f3f3f3;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n}\n.modal__header {\n  font-size: 3.25rem;\n  margin-bottom: 4.5rem;\n  line-height: 1.5;\n}\n.modal__form {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  gap: 2.5rem;\n  margin: 0 3rem;\n}\n.modal__form label {\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n.modal__form input {\n  padding: 1rem 1.5rem;\n  border: 1px solid #ddd;\n  font-size: 1.7rem;\n  border-radius: 0.5rem;\n}\n.modal__form button {\n  grid-column: 1/span 2;\n  justify-self: center;\n  margin-top: 1rem;\n}\n\n.btn--close-modal {\n  position: absolute;\n  top: 0.5rem;\n  right: 2rem;\n  font-size: 4rem;\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.3s;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/styles/base/_general.scss","webpack://./src/styles/base/_variables.scss","webpack://./src/styles/blocks/_nav.scss","webpack://./src/styles/blocks/_header.scss","webpack://./src/styles/blocks/_features.scss","webpack://./src/styles/blocks/_operations.scss","webpack://./src/styles/blocks/_slider.scss","webpack://./src/styles/blocks/_sign.scss","webpack://./src/styles/blocks/_footer.scss","webpack://./src/styles/blocks/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  color: #444;\n  line-height: 1.9;\n  background-color: #f3f3f3;\n}\n\n/* general elements */\n.section {\n  padding: 15rem 3rem;\n  border-top: 1px solid #ddd;\n  transition: transform 1s, opacity 1s;\n}\n.section--hidden {\n  opacity: 0;\n  transform: translateY(8rem);\n}\n.section__title {\n  max-width: 80rem;\n  margin: 0 auto 8rem;\n}\n.section__description {\n  font-size: 1.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #5ec576;\n  margin-bottom: 1rem;\n}\n.section__header {\n  font-size: 4rem;\n  line-height: 1.3;\n  font-weight: 500;\n}\n\n.btn {\n  display: inline-block;\n  padding: 1.25rem 4.5rem;\n  font-size: 1.6rem;\n  font-family: inherit;\n  font-weight: 500;\n  border: none;\n  border-radius: 10rem;\n  cursor: pointer;\n  background-color: #5ec576;\n  transition: all 0.3s;\n}\n.btn:hover {\n  background-color: #4bbb7d;\n}\n.btn--text {\n  display: inline-block;\n  background: none;\n  font-size: 1.7rem;\n  font-family: inherit;\n  font-weight: 500;\n  color: #5ec576;\n  border: none;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 2px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\np {\n  color: #666;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  transition: filter 0.5s;\n}\n\n.lazy-img {\n  filter: blur(20px);\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 9rem;\n  width: 100%;\n  padding: 0 6rem;\n  z-index: 100;\n}\n.nav.sticky {\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n.nav__logo {\n  height: 4.5rem;\n  transition: all 0.3s;\n}\n.nav__links {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.nav__item {\n  margin-left: 4rem;\n}\n.nav__link:link, .nav__link:visited {\n  font-size: 1.7rem;\n  font-weight: 400;\n  color: inherit;\n  text-decoration: none;\n  display: block;\n  transition: all 0.3s;\n}\n.nav__link--btn:link, .nav__link--btn:visited {\n  padding: 0.8rem 2.5rem;\n  border-radius: 3rem;\n  background-color: #5ec576;\n  color: #222;\n}\n.nav__link--btn:hover, .nav__link--btn:active {\n  color: inherit;\n  background-color: #4bbb7d;\n  color: #333;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 3rem;\n  height: 100vh;\n}\n.header__title {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  row-gap: 3rem;\n  align-content: center;\n  justify-content: center;\n  align-items: start;\n  justify-items: start;\n  max-width: 115rem;\n}\n.header__img {\n  width: 100%;\n  grid-column: 2/3;\n  grid-row: 1/span 4;\n  transform: translateY(-6rem);\n}\n\nh1 {\n  margin: 0;\n  font-size: 5.5rem;\n  line-height: 1.35;\n}\n\nh4 {\n  font-size: 2.4rem;\n  font-weight: 500;\n}\n\n.highlight {\n  position: relative;\n}\n.highlight::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 0.7;\n  transform: scale(1.07, 1.05) skew(-15deg);\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\n}\n\n.features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  margin: 0 12rem;\n}\n.features__img {\n  width: 100%;\n}\n.features__feature {\n  align-self: center;\n  justify-self: center;\n  width: 70%;\n  font-size: 1.5rem;\n}\n.features__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5.5rem;\n  height: 5.5rem;\n  margin-bottom: 2rem;\n  background-color: rgba(94, 197, 118, 0.2274509804);\n  border-radius: 50%;\n}\n.features__icon svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: #5ec576;\n}\n.features__header {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.operations {\n  max-width: 100rem;\n  margin: 12rem auto 0;\n  background-color: #fff;\n}\n.operations__tab-container {\n  display: flex;\n  justify-content: center;\n}\n.operations__tab {\n  margin-right: 2.5rem;\n  transform: translateY(-50%);\n}\n.operations__tab span {\n  margin-right: 1rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.operations__tab--1 {\n  background-color: #ffcb03;\n}\n.operations__tab--1:hover {\n  background-color: #ffbb00;\n}\n.operations__tab--3 {\n  background-color: #ff585f;\n  margin: 0;\n}\n.operations__tab--3:hover {\n  background-color: #fd424b;\n}\n.operations__tab--active {\n  transform: translateY(-66%);\n}\n.operations__content {\n  display: none;\n  font-size: 1.7rem;\n  padding: 2.5rem 7rem 6.5rem 7rem;\n}\n.operations__content--active {\n  display: grid;\n  grid-template-columns: 7rem 1fr;\n  column-gap: 3rem;\n  row-gap: 0.5rem;\n}\n.operations__content p {\n  grid-column: 2;\n}\n.operations__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  align-self: center;\n}\n.operations__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 7rem;\n  width: 7rem;\n  border-radius: 50%;\n}\n.operations__icon svg {\n  height: 2.75rem;\n  width: 2.75rem;\n}\n.operations__icon--1 {\n  background-color: rgba(255, 205, 3, 0.1921568627);\n}\n.operations__icon--1 svg {\n  fill: #ffbb00;\n}\n.operations__icon--2 {\n  background-color: rgba(94, 197, 118, 0.2274509804);\n}\n.operations__icon--2 svg {\n  fill: #5ec576;\n}\n.operations__icon--3 {\n  background-color: rgba(255, 88, 96, 0.1764705882);\n}\n.operations__icon--3 svg {\n  fill: #ff585f;\n}\n\n.section__title--testimonials {\n  margin-bottom: 4rem;\n}\n\n.slider {\n  position: relative;\n  max-width: 100rem;\n  height: 50rem;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 50rem;\n  transition: transform 1s;\n}\n\n.slide > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.slider__btn {\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  height: 5.5rem;\n  width: 5.5rem;\n  border-radius: 50%;\n  border: none;\n  font-size: 3.25rem;\n  font-family: inherit;\n  color: #333;\n  background: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n}\n.slider__btn--left {\n  left: 6%;\n  transform: translate(-50%, -50%);\n}\n.slider__btn--right {\n  right: 6%;\n  transform: translate(50%, -50%);\n}\n\n.dots {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  display: flex;\n  transform: translateX(-50%);\n}\n.dots__dot {\n  border: none;\n  background-color: #b9b9b9;\n  opacity: 0.7;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  margin-right: 1.75rem;\n  cursor: pointer;\n  transition: all 0.5s;\n  /* Only necessary when overlying images */\n  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */\n}\n.dots__dot:last-child {\n  margin: 0;\n}\n.dots__dot--active {\n  /* background-color: #fff; */\n  background-color: #888;\n  opacity: 1;\n}\n\n/* testimonials */\n.testimonial {\n  position: relative;\n  width: 65%;\n}\n.testimonial::before {\n  content: \"“\";\n  position: absolute;\n  top: -5.7rem;\n  left: -6.8rem;\n  z-index: -1;\n  font-size: 20rem;\n  font-family: inherit;\n  line-height: 1;\n  color: #5ec576;\n}\n.testimonial__header {\n  font-size: 2.25rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.testimonial__text {\n  font-size: 1.7rem;\n  margin-bottom: 3.5rem;\n  color: #666;\n}\n.testimonial__author {\n  display: grid;\n  grid-template-columns: 6.5rem 1fr;\n  column-gap: 2rem;\n  margin-left: 3rem;\n  font-style: normal;\n}\n.testimonial__photo {\n  grid-row: 1/span 2;\n  width: 6.5rem;\n  border-radius: 50%;\n}\n.testimonial__name {\n  align-self: end;\n  margin: 0;\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n.testimonial__location {\n  font-size: 1.5rem;\n}\n\n.section--sign-up {\n  border-top: none;\n  border-bottom: 1px solid #444;\n  padding: 10rem 3rem;\n  text-align: center;\n  background-color: #37383d;\n}\n.section--sign-up .section__header {\n  color: #fff;\n}\n.section--sign-up .section__title {\n  margin-bottom: 6rem;\n}\n.section--sign-up .btn {\n  font-size: 1.9rem;\n  padding: 2rem 5rem;\n}\n\n.footer {\n  padding: 10rem 3rem;\n  background-color: #37383d;\n}\n.footer__nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5rem;\n  list-style: none;\n}\n.footer__item {\n  margin-right: 4rem;\n}\n.footer__item:last-child {\n  margin: 0;\n}\n.footer__link {\n  font-size: 1.6rem;\n  color: #eee;\n  text-decoration: none;\n}\n.footer__logo {\n  display: block;\n  height: 5rem;\n  margin: 0 auto 5rem;\n}\n.footer__copyright {\n  font-size: 1.4rem;\n  color: #aaa;\n  text-align: center;\n}\n.footer__copyright .footer__link {\n  font-size: 1.4rem;\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  max-width: 60rem;\n  padding: 5rem 6rem;\n  background-color: #f3f3f3;\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n}\n.modal__header {\n  font-size: 3.25rem;\n  margin-bottom: 4.5rem;\n  line-height: 1.5;\n}\n.modal__form {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  gap: 2.5rem;\n  margin: 0 3rem;\n}\n.modal__form label {\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n.modal__form input {\n  padding: 1rem 1.5rem;\n  border: 1px solid #ddd;\n  font-size: 1.7rem;\n  border-radius: 0.5rem;\n}\n.modal__form button {\n  grid-column: 1/span 2;\n  justify-self: center;\n  margin-top: 1rem;\n}\n\n.btn--close-modal {\n  position: absolute;\n  top: 0.5rem;\n  right: 2rem;\n  font-size: 4rem;\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  transition: all 0.3s;\n}","* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 300;\r\n  color: #444;\r\n  line-height: 1.9;\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n/* general elements */\r\n\r\n.section {\r\n  padding: 15rem 3rem;\r\n  border-top: 1px solid #ddd;\r\n\r\n  transition: transform 1s, opacity 1s;\r\n  &--hidden {\r\n    opacity: 0;\r\n    transform: translateY(8rem);\r\n  }\r\n  &__title {\r\n    max-width: 80rem;\r\n    margin: 0 auto 8rem;\r\n  }\r\n  &__description {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    color: $color-primary;\r\n    margin-bottom: 1rem;\r\n  }\r\n  &__header {\r\n    font-size: 4rem;\r\n    line-height: 1.3;\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n\r\n  padding: 1.25rem 4.5rem;\r\n\r\n  font-size: 1.6rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n\r\n  border: none;\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n  background-color: $color-primary;\r\n  transition: all 0.3s;\r\n  &:hover {\r\n    background-color: $color-primary-darker;\r\n  }\r\n  &--text {\r\n    display: inline-block;\r\n    background: none;\r\n    font-size: 1.7rem;\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    color: $color-primary;\r\n    border: none;\r\n    border-bottom: 1px solid currentColor;\r\n    padding-bottom: 2px;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n  }\r\n}\r\n\r\np {\r\n  color: #666;\r\n}\r\n\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\nimg {\r\n  transition: filter 0.5s;\r\n}\r\n\r\n.lazy-img {\r\n  filter: blur(20px);\r\n}\r\n","$color-primary: #5ec576;\r\n$color-secondary: #ffcb03;\r\n$color-tertiary: #ff585f;\r\n$color-primary-darker: #4bbb7d;\r\n$color-secondary-darker: #ffbb00;\r\n$color-tertiary-darker: #fd424b;\r\n$color-primary-opacity: #5ec5763a;\r\n$color-secondary-opacity: #ffcd0331;\r\n$color-tertiary-opacity: #ff58602d;\r\n$gradient-primary: linear-gradient(to top left, #39b385, #9be15d);\r\n$gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);\r\n",".nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  height: 9rem;\r\n  width: 100%;\r\n  padding: 0 6rem;\r\n\r\n  z-index: 100;\r\n  &.sticky {\r\n    position: fixed;\r\n    background-color: rgba(255, 255, 255, 0.95);\r\n  }\r\n  &__logo {\r\n    height: 4.5rem;\r\n    transition: all 0.3s;\r\n  }\r\n  &__links {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style: none;\r\n  }\r\n  &__item {\r\n    margin-left: 4rem;\r\n  }\r\n  &__link {\r\n    &:link,\r\n    &:visited {\r\n      font-size: 1.7rem;\r\n      font-weight: 400;\r\n      color: inherit;\r\n      text-decoration: none;\r\n      display: block;\r\n      transition: all 0.3s;\r\n    }\r\n    &--btn {\r\n      &:link,\r\n      &:visited {\r\n        padding: 0.8rem 2.5rem;\r\n        border-radius: 3rem;\r\n        background-color: $color-primary;\r\n        color: #222;\r\n      }\r\n      &:hover,\r\n      &:active {\r\n        color: inherit;\r\n        background-color: $color-primary-darker;\r\n        color: #333;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  padding: 0 3rem;\r\n  height: 100vh;\r\n  &__title {\r\n    flex: 1;\r\n    display: grid;\r\n    grid-template-columns: 3fr 2fr;\r\n    row-gap: 3rem;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: start;\r\n    justify-items: start;\r\n\r\n    max-width: 115rem;\r\n  }\r\n  &__img {\r\n    width: 100%;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / span 4;\r\n    transform: translateY(-6rem);\r\n  }\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  font-size: 5.5rem;\r\n  line-height: 1.35;\r\n}\r\n\r\nh4 {\r\n  font-size: 2.4rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.highlight {\r\n  position: relative;\r\n  &::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -1;\r\n    opacity: 0.7;\r\n    transform: scale(1.07, 1.05) skew(-15deg);\r\n\r\n    background-image: $gradient-primary;\r\n  }\r\n}\r\n",".features {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 4rem;\r\n\r\n  margin: 0 12rem;\r\n  &__img {\r\n    width: 100%;\r\n  }\r\n  &__feature {\r\n    align-self: center;\r\n    justify-self: center;\r\n    width: 70%;\r\n    font-size: 1.5rem;\r\n  }\r\n  &__icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    width: 5.5rem;\r\n    height: 5.5rem;\r\n    margin-bottom: 2rem;\r\n\r\n    background-color: $color-primary-opacity;\r\n    border-radius: 50%;\r\n    svg {\r\n      height: 2.5rem;\r\n      width: 2.5rem;\r\n      fill: $color-primary;\r\n    }\r\n  }\r\n  &__header {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n",".operations {\r\n  max-width: 100rem;\r\n  margin: 12rem auto 0;\r\n\r\n  background-color: #fff;\r\n  &__tab-container {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  &__tab {\r\n    margin-right: 2.5rem;\r\n    transform: translateY(-50%);\r\n    span {\r\n      margin-right: 1rem;\r\n      font-weight: 600;\r\n      display: inline-block;\r\n    }\r\n    &--1 {\r\n      background-color: $color-secondary;\r\n      &:hover {\r\n        background-color: $color-secondary-darker;\r\n      }\r\n    }\r\n    &--3 {\r\n      background-color: $color-tertiary;\r\n      margin: 0;\r\n      &:hover {\r\n        background-color: $color-tertiary-darker;\r\n      }\r\n    }\r\n    &--active {\r\n      transform: translateY(-66%);\r\n    }\r\n  }\r\n  &__content {\r\n    display: none;\r\n    font-size: 1.7rem;\r\n    padding: 2.5rem 7rem 6.5rem 7rem;\r\n    &--active {\r\n      display: grid;\r\n      grid-template-columns: 7rem 1fr;\r\n      column-gap: 3rem;\r\n      row-gap: 0.5rem;\r\n    }\r\n    p {\r\n      grid-column: 2;\r\n    }\r\n  }\r\n  &__header {\r\n    font-size: 2.25rem;\r\n    font-weight: 500;\r\n    align-self: center;\r\n  }\r\n  &__icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 7rem;\r\n    width: 7rem;\r\n\r\n    border-radius: 50%;\r\n    svg {\r\n      height: 2.75rem;\r\n      width: 2.75rem;\r\n    }\r\n    &--1 {\r\n      background-color: $color-secondary-opacity;\r\n      svg {\r\n        fill: $color-secondary-darker;\r\n      }\r\n    }\r\n    &--2 {\r\n      background-color: $color-primary-opacity;\r\n      svg {\r\n        fill: $color-primary;\r\n      }\r\n    }\r\n    &--3 {\r\n      background-color: $color-tertiary-opacity;\r\n      svg {\r\n        fill: $color-tertiary;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".section__title--testimonials {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.slider {\r\n  position: relative;\r\n\r\n  max-width: 100rem;\r\n  height: 50rem;\r\n  margin: 0 auto;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.slide {\r\n  position: absolute;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  width: 100%;\r\n  height: 50rem;\r\n\r\n  transition: transform 1s;\r\n}\r\n\r\n.slide > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.slider__btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 10;\r\n\r\n  height: 5.5rem;\r\n  width: 5.5rem;\r\n  border-radius: 50%;\r\n  border: none;\r\n\r\n  font-size: 3.25rem;\r\n  font-family: inherit;\r\n  color: #333;\r\n\r\n  background: rgba(255, 255, 255, 0.7);\r\n  cursor: pointer;\r\n  &--left {\r\n    left: 6%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  &--right {\r\n    right: 6%;\r\n    transform: translate(50%, -50%);\r\n  }\r\n}\r\n\r\n.dots {\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 5%;\r\n  display: flex;\r\n\r\n  transform: translateX(-50%);\r\n  &__dot {\r\n    border: none;\r\n    background-color: #b9b9b9;\r\n    opacity: 0.7;\r\n    height: 1rem;\r\n    width: 1rem;\r\n    border-radius: 50%;\r\n    margin-right: 1.75rem;\r\n    cursor: pointer;\r\n    transition: all 0.5s;\r\n\r\n    /* Only necessary when overlying images */\r\n    /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */\r\n    &:last-child {\r\n      margin: 0;\r\n    }\r\n    &--active {\r\n      /* background-color: #fff; */\r\n      background-color: #888;\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n/* testimonials */\r\n\r\n.testimonial {\r\n  position: relative;\r\n  width: 65%;\r\n  &::before {\r\n    content: '\\201C';\r\n    position: absolute;\r\n    top: -5.7rem;\r\n    left: -6.8rem;\r\n    z-index: -1;\r\n\r\n    font-size: 20rem;\r\n    font-family: inherit;\r\n    line-height: 1;\r\n    color: $color-primary;\r\n  }\r\n  &__header {\r\n    font-size: 2.25rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  &__text {\r\n    font-size: 1.7rem;\r\n    margin-bottom: 3.5rem;\r\n    color: #666;\r\n  }\r\n  &__author {\r\n    display: grid;\r\n    grid-template-columns: 6.5rem 1fr;\r\n    column-gap: 2rem;\r\n\r\n    margin-left: 3rem;\r\n\r\n    font-style: normal;\r\n  }\r\n  &__photo {\r\n    grid-row: 1 / span 2;\r\n    width: 6.5rem;\r\n    border-radius: 50%;\r\n  }\r\n  &__name {\r\n    align-self: end;\r\n    margin: 0;\r\n\r\n    font-size: 1.7rem;\r\n    font-weight: 500;\r\n  }\r\n  &__location {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n",".section--sign-up {\r\n  border-top: none;\r\n  border-bottom: 1px solid #444;\r\n  padding: 10rem 3rem;\r\n\r\n  text-align: center;\r\n\r\n  background-color: #37383d;\r\n  .section__header {\r\n    color: #fff;\r\n    // text-align: center;\r\n  }\r\n  .section__title {\r\n    margin-bottom: 6rem;\r\n  }\r\n  .btn {\r\n    font-size: 1.9rem;\r\n    padding: 2rem 5rem;\r\n  }\r\n}\r\n",".footer {\r\n  padding: 10rem 3rem;\r\n  background-color: #37383d;\r\n  &__nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 5rem;\r\n\r\n    list-style: none;\r\n  }\r\n  &__item {\r\n    margin-right: 4rem;\r\n    &:last-child {\r\n      margin: 0;\r\n    }\r\n  }\r\n  &__link {\r\n    font-size: 1.6rem;\r\n    color: #eee;\r\n    text-decoration: none;\r\n  }\r\n  &__logo {\r\n    display: block;\r\n    height: 5rem;\r\n    margin: 0 auto 5rem;\r\n  }\r\n  &__copyright {\r\n    font-size: 1.4rem;\r\n    color: #aaa;\r\n    text-align: center;\r\n    .footer__link {\r\n      font-size: 1.4rem;\r\n    }\r\n  }\r\n}\r\n",".modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1000;\r\n\r\n  max-width: 60rem;\r\n  padding: 5rem 6rem;\r\n\r\n  background-color: #f3f3f3;\r\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);\r\n  transition: all 0.3s;\r\n  &__header {\r\n    font-size: 3.25rem;\r\n    margin-bottom: 4.5rem;\r\n    line-height: 1.5;\r\n  }\r\n  &__form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    margin: 0 3rem;\r\n    label {\r\n      font-size: 1.7rem;\r\n      font-weight: 500;\r\n    }\r\n    input {\r\n      padding: 1rem 1.5rem;\r\n      border: 1px solid #ddd;\r\n      font-size: 1.7rem;\r\n      border-radius: 0.5rem;\r\n    }\r\n    button {\r\n      grid-column: 1 / span 2;\r\n      justify-self: center;\r\n      margin-top: 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n.btn--close-modal {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 2rem;\r\n\r\n  font-size: 4rem;\r\n  font-family: inherit;\r\n  color: inherit;\r\n\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\r\n  z-index: 100;\r\n  transition: all 0.3s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon.png */ "./src/img/icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hero.png */ "./src/img/hero.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/digital-lazy.jpg */ "./src/img/digital-lazy.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons.svg */ "./src/img/icons.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/grow-lazy.jpg */ "./src/img/grow-lazy.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/card-lazy.jpg */ "./src/img/card-lazy.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/user-1.jpg */ "./src/img/user-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/user-2.jpg */ "./src/img/user-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/user-3.jpg */ "./src/img/user-3.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-monitor" });
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-trending-up" });
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-credit-card" });
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-upload" });
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-home" });
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___, { hash: "#icon-user-x" });
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" type=\"image/png\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap\" rel=\"stylesheet\">\r\n  <title>Bankist | When Banking meets Minimalist</title>\r\n</head>\r\n\r\n<body>\r\n  <!-- header -->\r\n  <header class=\"header\">\r\n    <nav class=\"nav\">\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Bankist logo\" class=\"nav__logo\" id=\"logo\">\r\n      <ul class=\"nav__links\">\r\n        <li class=\"nav__item\"><a class=\"nav__link\" href=\"#section--1\">Features</a></li>\r\n        <li class=\"nav__item\"><a class=\"nav__link\" href=\"#section--2\">Operations</a></li>\r\n        <li class=\"nav__item\"><a class=\"nav__link\" href=\"#section--3\">Testimonials</a></li>\r\n        <li class=\"nav__item\"><a class=\"nav__link nav__link--btn btn--show-modal\" href=\"#\">Open account</a></li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class=\"header__title\">\r\n      <h1>\r\n        When\r\n        <span class=\"highlight\">banking</span>\r\n        meets<br>\r\n        <span class=\"highlight\">minimalist</span>\r\n      </h1>\r\n      <h4>A simpler banking experience for a simpler life.</h4>\r\n      <button class=\"btn--text btn--scroll-to\">Learn more &DownArrow;</button>\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" class=\"header__img\" alt=\"Minimalist bank items\">\r\n    </div>\r\n  </header>\r\n\r\n  <!-- section 1 -->\r\n  <section class=\"section\" id=\"section--1\">\r\n    <div class=\"section__title\">\r\n      <h2 class=\"section__description\">Features</h2>\r\n      <h3 class=\"section__header\">Everything you need in a modern bank and more.</h3>\r\n    </div>\r\n\r\n    <div class=\"features\">\r\n\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" data-src=\"img/digital.jpg\" alt=\"Computer\" class=\"features__img lazy-img\">\r\n      <div class=\"features__feature\">\r\n        <div class=\"features__icon\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"features__header\">100% digital bank</h5>\r\n        <p>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias\r\n          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam\r\n          debitis ducimus.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"features__feature\">\r\n        <div class=\"features__icon\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"features__header\">Watch your money grow</h5>\r\n        <p>\r\n          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga\r\n          inventore ab? Nulla incidunt eius numquam sequi iste pariatur\r\n          quibusdam!\r\n        </p>\r\n      </div>\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" data-src=\"img/grow.jpg\" alt=\"Plant\" class=\"features__img lazy-img\">\r\n\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" data-src=\"img/card.jpg\" alt=\"Credit card\" class=\"features__img lazy-img\">\r\n      <div class=\"features__feature\">\r\n        <div class=\"features__icon\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"features__header\">Free debit card included</h5>\r\n        <p>\r\n          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim\r\n          eveniet consequatur odit quam quos possimus assumenda dicta fuga\r\n          inventore ab.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- section 2 -->\r\n  <section class=\"section\" id=\"section--2\">\r\n    <div class=\"section__title\">\r\n      <h2 class=\"section__description\">Operations</h2>\r\n      <h3 class=\"section__header\">Everything as simple as possible, but no simpler.</h3>\r\n    </div>\r\n\r\n    <div class=\"operations\">\r\n      <div class=\"operations__tab-container\">\r\n        <button class=\"btn operations__tab operations__tab--1 operations__tab--active\" data-tab=\"1\">\r\n          <span>01</span>Instant Transfers\r\n        </button>\r\n        <button class=\"btn operations__tab operations__tab--2\" data-tab=\"2\">\r\n          <span>02</span>Instant Loans\r\n        </button>\r\n        <button class=\"btn operations__tab operations__tab--3\" data-tab=\"3\">\r\n          <span>03</span>Instant Closing\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"operations__content operations__content--1 operations__content--active\">\r\n        <div class=\"operations__icon operations__icon--1\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"operations__header\">\r\n          Tranfser money to anyone, instantly! No fees, no BS.\r\n        </h5>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"operations__content operations__content--2\">\r\n        <div class=\"operations__icon operations__icon--2\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"operations__header\">\r\n          Buy a home or make your dreams come true, with instant loans.\r\n        </h5>\r\n        <p>\r\n          Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r\n          cupidatat non proident, sunt in culpa qui officia deserunt mollit\r\n          anim id est laborum.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"operations__content operations__content--3\">\r\n        <div class=\"operations__icon operations__icon--3\">\r\n          <svg>\r\n            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"></use>\r\n          </svg>\r\n        </div>\r\n        <h5 class=\"operations__header\">\r\n          No longer need your account? No problem! Close it instantly.\r\n        </h5>\r\n        <p>\r\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum. Ut enim ad minim\r\n          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n          ea commodo consequat.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- section 3 -->\r\n  <section class=\"section\" id=\"section--3\">\r\n    <div class=\"section__title section__title--testimonials\">\r\n      <h2 class=\"section__description\">Not sure yet?</h2>\r\n      <h3 class=\"section__header\">\r\n        Millions of Bankists are already making their lifes simpler.\r\n      </h3>\r\n    </div>\r\n\r\n    <!-- slider -->\r\n    <div class=\"slider\">\r\n\r\n      <div class=\"slide slide--1\">\r\n        <div class=\"testimonial\">\r\n          <h5 class=\"testimonial__header\">Best financial decision ever!</h5>\r\n          <blockquote class=\"testimonial__text\">\r\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\r\n            Accusantium quas quisquam non? Quas voluptate nulla minima\r\n            deleniti optio ullam nesciunt, numquam corporis et asperiores\r\n            laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus\r\n            id alias reiciendis, perferendis facere pariatur dolore veniam\r\n            autem esse non voluptatem saepe provident nihil molestiae.\r\n          </blockquote>\r\n          <address class=\"testimonial__author\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"testimonial__photo\">\r\n            <h6 class=\"testimonial__name\">Aarav Lynn</h6>\r\n            <p class=\"testimonial__location\">San Francisco, USA</p>\r\n          </address>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"slide slide--2\">\r\n        <div class=\"testimonial\">\r\n          <h5 class=\"testimonial__header\">\r\n            The last step to becoming a complete minimalist\r\n          </h5>\r\n          <blockquote class=\"testimonial__text\">\r\n            Quisquam itaque deserunt ullam, quia ea repellendus provident,\r\n            ducimus neque ipsam modi voluptatibus doloremque, corrupti\r\n            laborum. Incidunt numquam perferendis veritatis neque repellendus.\r\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo\r\n            deserunt exercitationem deleniti.\r\n          </blockquote>\r\n          <address class=\"testimonial__author\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"testimonial__photo\">\r\n            <h6 class=\"testimonial__name\">Miyah Miles</h6>\r\n            <p class=\"testimonial__location\">London, UK</p>\r\n          </address>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"slide slide--3\">\r\n        <div class=\"testimonial\">\r\n          <h5 class=\"testimonial__header\">\r\n            Finally free from old-school banks\r\n          </h5>\r\n          <blockquote class=\"testimonial__text\">\r\n            Debitis, nihil sit minus suscipit magni aperiam vel tenetur\r\n            incidunt commodi architecto numquam omnis nulla autem,\r\n            necessitatibus blanditiis modi similique quidem. Odio aliquam\r\n            culpa dicta beatae quod maiores ipsa minus consequatur error sunt,\r\n            deleniti saepe aliquid quos inventore sequi. Necessitatibus id\r\n            alias reiciendis, perferendis facere.\r\n          </blockquote>\r\n          <address class=\"testimonial__author\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"testimonial__photo\">\r\n            <h6 class=\"testimonial__name\">Francisco Gomes</h6>\r\n            <p class=\"testimonial__location\">Lisbon, Portugal</p>\r\n          </address>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"slide\"><img src=\"img/img-1.jpg\" alt=\"Photo 1\"></div>\r\n        <div class=\"slide\"><img src=\"img/img-2.jpg\" alt=\"Photo 2\"></div>\r\n        <div class=\"slide\"><img src=\"img/img-3.jpg\" alt=\"Photo 3\"></div>\r\n        <div class=\"slide\"><img src=\"img/img-4.jpg\" alt=\"Photo 4\"></div> -->\r\n\r\n      <button class=\"slider__btn slider__btn--left\">&larr;</button>\r\n      <button class=\"slider__btn slider__btn--right\">&rarr;</button>\r\n      <div class=\"dots\"></div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- section sign-up -->\r\n  <section class=\"section section--sign-up\">\r\n    <div class=\"section__title\">\r\n      <h3 class=\"section__header\">\r\n        The best day to join Bankist was one year ago. The second best is\r\n        today!\r\n      </h3>\r\n    </div>\r\n    <button class=\"btn btn--show-modal\">Open your free account today!</button>\r\n  </section>\r\n\r\n  <!-- footer -->\r\n  <footer class=\"footer\">\r\n    <ul class=\"footer__nav\">\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">About</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Pricing</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Terms of Use</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Privacy Policy</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Careers</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Blog</a>\r\n      </li>\r\n      <li class=\"footer__item\">\r\n        <a class=\"footer__link\" href=\"#\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Logo\" class=\"footer__logo\">\r\n    <p class=\"footer__copyright\">\r\n      github\r\n      <a class=\"footer__link github-link\" target=\"_blank\" href=\"https://github.com/spormuv\">spormuv</a>\r\n    </p>\r\n  </footer>\r\n\r\n  <!-- modal -->\r\n  <div class=\"modal hidden\">\r\n    <button class=\"btn--close-modal\">&times;</button>\r\n    <h2 class=\"modal__header\">\r\n      Open your bank account <br>\r\n      in just <span class=\"highlight\">5 minutes</span>\r\n    </h2>\r\n    <form class=\"modal__form\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input type=\"text\" id=\"first-name\" name=\"first-name\" required>\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input type=\"text\" id=\"last-name\" name=\"last-name\" required>\r\n      <label for=\"email\">Email Address</label>\r\n      <input type=\"email\" id=\"email\" name=\"email\" required>\r\n      <button class=\"btn\">Next step &rarr;</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"overlay hidden\"></div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/card-lazy.jpg":
/*!*******************************!*\
  !*** ./src/img/card-lazy.jpg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/card-lazy.dd870e59.jpg";

/***/ }),

/***/ "./src/img/digital-lazy.jpg":
/*!**********************************!*\
  !*** ./src/img/digital-lazy.jpg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/digital-lazy.dd5fe35c.jpg";

/***/ }),

/***/ "./src/img/grow-lazy.jpg":
/*!*******************************!*\
  !*** ./src/img/grow-lazy.jpg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/grow-lazy.486fdd87.jpg";

/***/ }),

/***/ "./src/img/hero.png":
/*!**************************!*\
  !*** ./src/img/hero.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/hero.c6f67185.png";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icon.93190a85.png";

/***/ }),

/***/ "./src/img/icons.svg":
/*!***************************!*\
  !*** ./src/img/icons.svg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icons.94379b2f.svg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo.e2110f54.png";

/***/ }),

/***/ "./src/img/user-1.jpg":
/*!****************************!*\
  !*** ./src/img/user-1.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/user-1.2a9e7491.jpg";

/***/ }),

/***/ "./src/img/user-2.jpg":
/*!****************************!*\
  !*** ./src/img/user-2.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/user-2.40499f5b.jpg";

/***/ }),

/***/ "./src/img/user-3.jpg":
/*!****************************!*\
  !*** ./src/img/user-3.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/user-3.dd7fb51a.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");





// variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// button scrolling
btnScrollTo.addEventListener('click', function () {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth'
  });
});

// page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// add event listener to common parent
// determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--btn')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.11de2073.js.map