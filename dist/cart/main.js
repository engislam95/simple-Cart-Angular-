(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






var routes = [
    {
        path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products {\n  padding-top: 50px;\n  height: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0c1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_8__["SingleProductComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter.service.ts":
/*!************************************!*\
  !*** ./src/app/counter.service.ts ***!
  \************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CounterService = /** @class */ (function () {
    function CounterService() {
        this.id = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        // transfere el (id) as observable 34an aadr 23ml 3leh subscribe 
        this.currentCount = this.id.asObservable();
    }
    CounterService.prototype.onSend = function (count) {
        this.id.next(count);
        // console.log(this.id.next(count)) ;
    };
    CounterService.prototype.onRemove = function (count) {
        this.id.next(count);
        console.log(this.id.next(count));
    };
    CounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterService);
    return CounterService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <section class=\"container\">\n  <nav>\n      <section class=\"logo\">\n          \n          <img src=\"../../assets/img/logo.png\">\n          <ul>\n            <li><a routerLink=\"/home\"> home</a></li>\n            <li><a routerLink=\"/products\">Products </a> </li>\n        </ul>\n      </section>\n      <section class=\"list\"> \n          <i class=\"fas fa-cart-plus\"></i>\n          \n          <div> {{counter}}</div>\n      </section>\n  </nav>\n  <section class=\"header-content\">\n      <section class=\"content\">\n          <h1>the best app in the universe</h1>\n          <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>\n          <h5>“boys will be boys,”</h5>\n          <a>Learn More</a>\n          <a class=\"second\">Live Demo</a>\n      </section>\n      <section class=\"mob-img\">\n       \n      </section>\n  </section>\n  </section>\n \n  \n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .header-content .content a {\n  padding: 0px 45px;\n  line-height: 50px !important;\n  border: 2px solid #ffff;\n  color: #ffff;\n  display: inline-block;\n  margin-right: 20px;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  header .header-content .content a:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08); }\n  header .header-content .content .second {\n  padding: 0px 20px;\n  line-height: 50px !important;\n  background-color: #FABAB8;\n  color: #ffff;\n  display: inline-block;\n  border-style: none;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  header .header-content .content .second:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    color: #C6E6E1; }\n  body {\n  height: 2000px; }\n  .container {\n  margin: 0 auto;\n  padding: 0px;\n  width: 80%; }\n  header {\n  background-image: url('abstract-art-background-1037992.jpg');\n  height: 600px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative; }\n  header nav {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    margin-bottom: 100px; }\n  header nav .logo {\n      margin-right: 20%; }\n  header nav .logo img {\n        margin-right: 20%; }\n  header nav .logo ul {\n        margin-top: 5%;\n        display: inline-block;\n        width: 62%; }\n  header nav .logo li {\n        padding-right: 9%;\n        color: #ffff;\n        display: inline-block;\n        list-style: none;\n        text-transform: uppercase; }\n  header nav .logo a {\n        color: #ffff; }\n  header nav .list i {\n      font-size: 30px;\n      margin-top: 14%;\n      color: white;\n      display: inline-block; }\n  header nav .list div {\n      background-color: red;\n      width: 20px;\n      height: 20px;\n      color: #ffff;\n      border-radius: 50%;\n      position: absolute;\n      top: 105;\n      top: 3%;\n      right: 18%; }\n  header .header-content {\n    width: 50%;\n    color: #ffff; }\n  header .header-content .content {\n      margin-top: 30px; }\n  header .header-content .content h1 {\n        margin: 0px;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 40px;\n        font-weight: 600px;\n        line-height: 64.72px;\n        text-transform: capitalize; }\n  header .header-content .content h5 {\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 20px;\n        font-weight: 600px;\n        line-height: 32.36px;\n        color: #BBE4DE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcSXNsYW0gQWhtZWRcXERlc2t0b3BcXEFuZ3VsYXItUHJvamVjdHNcXHNob3BwaW5nLWNhcnRcXGNhcnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcnJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VDd0RJLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsdUJDbEVRO0VEbUVSLFlDbkVRO0VEb0VSLHFCQ2xEZ0I7RURtRGhCLGtCQUFrQjtFQW5EZCxrQkFxRGdCO0VBNUVwQixvQ0NZa0M7RURYbEMsZUFGK0I7RUFHL0IsZ0JBSDZDO0VBSTdDLHFCQUEwQixFQUFBO0VEVTlCO0lDaUVhLGVBQWU7SUEzQ2hCLG9EQzNCZTtJRDJCZixxREMzQmU7SUQyQmYsaURDM0JlLEVBQUE7RUZLM0I7RUN3RUksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsWUNuRlE7RURvRlIscUJDbEVnQjtFRG1FcEIsa0JBQW1CO0VBbkVYLGtCQW9FZ0I7RUEzRnBCLG9DQ1lrQztFRFhsQyxlQUYrQjtFQUcvQixnQkFINkM7RUFJN0MscUJBQTBCLEVBQUE7RURVOUI7SUNnRmEsZUFBZTtJQTFEaEIsb0RDM0JlO0lEMkJmLHFEQzNCZTtJRDJCZixpREMzQmU7SUR3Rm5CLGNBQWEsRUFBQTtFRDlGckI7RUFFSSxjQUFjLEVBQUE7RUFFbEI7RUFDSSxjRWlCVTtFRmhCVixZQUFZO0VBQ1osVUFBVSxFQUFBO0VBSWQ7RUNOSSw0REFBZ0M7RUFDaEMsYURRdUM7RUNQdkMsNEJBSHdEO0VBSXhELHNCQUp3RTtFRFd4RSxrQkFBa0IsRUFBQTtFQUp0QjtJQU9RLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0JBQW9CLEVBQUE7RUFUNUI7TUFjWSxpQkFBaUIsRUFBQTtFQWQ3QjtRQWVnQixpQkFBaUIsRUFBQTtFQWZqQztRQWlCZ0IsY0FBYztRQUNkLHFCRVJJO1FGU0osVUFBVSxFQUFBO0VBbkIxQjtRQXdCZ0IsaUJBQWlCO1FBQ2pCLFlFakNKO1FGa0NJLHFCRWhCSTtRRmlCSixnQkFBZ0I7UUFDaEIseUJBQXlCLEVBQUE7RUE1QnpDO1FBZ0NnQixZRXhDSixFQUFBO0VGUVo7TUFzQ2dCLGVBQWM7TUFDYixlQUFlO01BQ2QsWUFBWTtNQUNaLHFCRS9CRSxFQUFBO0VGVnBCO01BNENnQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsT0FBTztNQUNQLFVBQVUsRUFBQTtFQXBEMUI7SUEyRFEsVUFBVTtJQUNWLFlFcEVJLEVBQUE7RUZRWjtNQStEWSxnQkFBZ0IsRUFBQTtFQS9ENUI7UUFrRWdCLFdBQVc7UUMvRXZCLG9DQ1lrQztRRFhsQyxlRGdGa0Q7UUMvRWxELGtCRCtFeUQ7UUM5RXpELG9CQUEwQjtRRGdGZCwwQkFBMEIsRUFBQTtFQXRFMUM7UUNiSSxvQ0NZa0M7UURYbEMsZURzRmtEO1FDckZsRCxrQkRxRnlEO1FDcEZ6RCxvQkFBMEI7UURzRmQsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy92YXJyaWFibGVcIjtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuYm9keSBcclxue1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46ICRhdXRvTTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWhlYWRlciBzZWN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmhlYWRlciB7XHJcbiAgICBcclxuXHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWltYWdlKCRiYWNrRywgNjAwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIGltZ3ttYXJnaW4tcmlnaHQ6IDIwJTsgfVxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICRpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjIlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOSU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJGlubGluZTtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0JTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJGlubGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE4JTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDQwcHgsIDYwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDIwcHgsIDYwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0JCRTRERTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVidG47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWNvbmQge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlYnRuLWJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBtaXhpbiB0eXBvU3R5bGUoJGZvbnQsICRzaXplOiAxNHB4LCAkd2VpZ2h0OiA0MDApIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZSAqIDEuNjE4O1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1pbWFnZSgkZmlsZVBhdGgsICRoLCAkYmdSZWFwZWF0OiBuby1yZXBlYXQsICRiZ1NpemU6IGNvdmVyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGVQYXRoKTtcclxuICAgIGhlaWdodDogJGg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogJGJnUmVhcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJGJnU2l6ZTtcclxuICAgIFxyXG59XHJcblxyXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCwgJGVuZCkge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCAwJSwgJGVuZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQgMCUsICRlbmQgMTAwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiByb3VuZGVkKCRyYWRpdXM6IDAuNWVtKSB7XHJcbiAgICBAZWFjaCAkdmVuZG9yIGluICR2ZW5kb3JzIHtcclxuICAgICAgICAjeyR2ZW5kb3J9Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkc3ByZWFkLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcclxuICAgIEBpZiAkaW5zZXQge1xyXG4gICAgICAgIEBlYWNoICR2ZW5kb3IgaW4gJHZlbmRvcnMge1xyXG4gICAgICAgICAgICAjeyR2ZW5kb3J9Ym94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQGVhY2ggJHZlbmRvciBpbiAkdmVuZG9ycyB7XHJcbiAgICAgICAgICAgICN7JHZlbmRvcn1ib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRzcHJlYWQgJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJvcmRlci1hcHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgwZGVnLCAkd2hpdGUgMCUsICR3aGl0ZSAxMDAlKTtcclxuXHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcblxyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwcHggNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICR3aGl0ZSA7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcblxyXG4gICAgQGluY2x1ZGUgcm91bmRlZCg1cHgpO1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQpO1xyXG4gICAgJjpob3ZlcnsgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMTBweCwgMzBweCwgMHB4LCAkc2hhZG93KTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbiVidG4tYnQge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQkFCODsgXHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuYm9yZGVyLXN0eWxlOiBub25lIDtcclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250KTtcclxuICAgICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDEwcHgsIDMwcHgsIDBweCwgJHNoYWRvdyk7XHJcbiAgICAgICAgY29sb3I6I0M2RTZFMTsgXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuJWJ0bi1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDUwcHgpO1xyXG5cclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQ1JTtcclxufVxyXG5cclxuJWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuXHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDVweCk7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCk7XHJcbn1cclxuJWhlYWRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogJGxpZ25DO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBAZXh0ZW5kICVsYXJnZU9wZW5TYW5zO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcmVndWxhclJvYm90bztcclxuICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgXHJcbiAgICB9XHJcbn1cclxuJWhlYWQtdFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiAkbGlnbkM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIEBleHRlbmQgJWxhcmdlT3BlblNhbnM7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBAZXh0ZW5kICVyZWd1bGFyUm9ib3RvO1xyXG4gICAgfVxyXG59XHJcbiVyZWd1bGFyUm9ib3RvIHtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkcm9ib3RvRm9udCwgMTZweCwgNDAwKTtcclxufVxyXG5cclxuJW1lZGl1bVJvYm90byB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJHJvYm90b0ZvbnQsIDIwcHgsIDUwMCk7XHJcbn1cclxuXHJcbiVyZWd1bGFyT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDE2cHgsIDQwMCk7XHJcbn1cclxuXHJcbiVtZWRpdW1PcGVuU2FucyB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCwgMjBweCwgNjAwKTtcclxufVxyXG5cclxuJWxhcmdlT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDMwcHgsIDYwMCk7XHJcbn1cclxuIiwiLy8gdmVuZG9yc1xyXG4kdmVuZG9yczogXCItbW96LVwiLCBcIi13ZWJraXQtXCIsIFwiLW8tXCIsIFwiLW1zLVwiLCBcIlwiOyBcclxuXHJcbi8vIGNvbG9yc1xyXG4kZ3JhZGllbnRTdGFydENvbG9yOiAjYmMyYmZmOztcclxuJGdyYWRpZW50RW5kQ29sb3I6ICM3MjQ5ZmI7O1xyXG4kd2hpdGU6I2ZmZmY7IFxyXG4kYmxhY2s6IzAwMDAgO1xyXG4kZ3JleSA6cmdiKDEwMCwgOTgsIDk4KTsgXHJcbiRzaGFkb3c6cmdiYSgwLCAwLCAwLCAwLjA4KTsgXHJcblxyXG4vL2ZvbnRzXHJcbiRyb2JvdG9Gb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJG9wZW5TYW5zRm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4vL2ltYWdlc1xyXG4kYmctaW1nOicuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9ob21lLWJhbm5lci5qcGcnO1xyXG4kYmFja0c6Jy4uLy4uL2Fzc2V0cy9pbWcvYWJzdHJhY3QtYXJ0LWJhY2tncm91bmQtMTAzNzk5Mi5qcGcnO1xyXG4kbG9nbyA6ICcuLi9pbWcvbG9nby5wbmcnO1xyXG4kYWJvdXQ6Jy4uLy4uL2Fzc2V0cy9pbWcvYmFsbHBlbi1ibHVyLWNsb3NlLXVwLTQ2MTA3Ny5qcGcnO1xyXG4kc2lkZTonLi4vLi4vYXNzZXRzL2ltZy9jb25jZXB0LWRheWxpZ2h0LWZhY2lhbC1leHByZXNzaW9uLTIwMzU4NjQuanBnJztcclxuJG1vYmlsZUltZzpcIi4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyL3JpZ2h0LW1vYmlsZS5wbmdcIiA7XHJcbiRiYW5uZXI6XCIuLi8uLi9hc3NldHMvYmFubmVyL2Jhbm5lci5qcGdcIjtcclxuLy8gbGF5b3V0IFxyXG4kaW5saW5lOmlubGluZS1ibG9jayA7IFxyXG4kYXV0b00gOjAgYXV0bzsgXHJcbiRsaWduQzpjZW50ZXIgOyJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "counter", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <section class=\"container\">\n    <nav>\n        <section class=\"logo\">\n            \n            <img (click)=\"loadLogin()\" src=\"../../assets/img/logo.png\">\n            <ul>\n              <li><a routerLink=\"/home\"> home</a></li>\n              <li><a routerLink=\"/products\">Products </a> </li>\n          </ul>\n        </section>\n        <!-- <section class=\"list\"> \n            <i class=\"fas fa-cart-plus\"></i>\n            <div> {{counter}}</div>\n        </section> -->\n    </nav>\n    <section class=\"header-content\">\n        <section class=\"content\">\n            <h1>WELCOME TO MY SHOPPING CART APP WITH <br>ANGULAR 7</h1>\n            \n        </section>\n        \n    </section>\n    </section>\n   \n    \n  </header>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .header-content .content a {\n  padding: 0px 45px;\n  line-height: 50px !important;\n  border: 2px solid #ffff;\n  color: #ffff;\n  display: inline-block;\n  margin-right: 20px;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  header .header-content .content a:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08); }\n  header .header-content .content .second {\n  padding: 0px 20px;\n  line-height: 50px !important;\n  background-color: #FABAB8;\n  color: #ffff;\n  display: inline-block;\n  border-style: none;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  header .header-content .content .second:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    color: #C6E6E1; }\n  body {\n  height: 2000px; }\n  .container {\n  margin: 0 auto;\n  padding: 0px;\n  width: 80%; }\n  header {\n  background-image: url('abstract-art-background-1037992.jpg');\n  height: 600px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative; }\n  header nav {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    margin-bottom: 100px; }\n  header nav .logo {\n      margin-right: 20%; }\n  header nav .logo img {\n        margin-right: 20%; }\n  header nav .logo img:hover {\n          cursor: pointer; }\n  header nav .logo ul {\n        margin-top: 5%;\n        display: inline-block;\n        width: 62%; }\n  header nav .logo li {\n        padding-right: 9%;\n        color: #ffff;\n        display: inline-block;\n        list-style: none;\n        text-transform: uppercase; }\n  header nav .logo a {\n        color: #ffff; }\n  header nav .list i {\n      font-size: 30px;\n      margin-top: 14%;\n      color: white; }\n  header nav .list div {\n      background-color: red;\n      width: 20px;\n      height: 20px;\n      color: #ffff;\n      border-radius: 50%;\n      position: absolute;\n      top: 105;\n      top: 3%;\n      right: 18%; }\n  header .header-content {\n    width: 100%;\n    color: #ffff; }\n  header .header-content .content {\n      padding-top: 50px; }\n  header .header-content .content h1 {\n        margin: 0px;\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 40px;\n        font-weight: 600px;\n        line-height: 64.72px;\n        text-transform: capitalize; }\n  header .header-content .content h5 {\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 20px;\n        font-weight: 600px;\n        line-height: 32.36px;\n        color: #BBE4DE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXElzbGFtIEFobWVkXFxEZXNrdG9wXFxBbmd1bGFyLVByb2plY3RzXFxzaG9wcGluZy1jYXJ0XFxjYXJ0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcSXNsYW0gQWhtZWRcXERlc2t0b3BcXEFuZ3VsYXItUHJvamVjdHNcXHNob3BwaW5nLWNhcnRcXGNhcnQvc3JjXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXElzbGFtIEFobWVkXFxEZXNrdG9wXFxBbmd1bGFyLVByb2plY3RzXFxzaG9wcGluZy1jYXJ0XFxjYXJ0L3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFycmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUN3REksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qix1QkNsRVE7RURtRVIsWUNuRVE7RURvRVIscUJDbERnQjtFRG1EaEIsa0JBQWtCO0VBbkRkLGtCQXFEZ0I7RUE1RXBCLG9DQ1lrQztFRFhsQyxlQUYrQjtFQUcvQixnQkFINkM7RUFJN0MscUJBQTBCLEVBQUE7RURVOUI7SUNpRWEsZUFBZTtJQTNDaEIsb0RDM0JlO0lEMkJmLHFEQzNCZTtJRDJCZixpREMzQmUsRUFBQTtFRkszQjtFQ3dFSSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQ25GUTtFRG9GUixxQkNsRWdCO0VEbUVwQixrQkFBbUI7RUFuRVgsa0JBb0VnQjtFQTNGcEIsb0NDWWtDO0VEWGxDLGVBRitCO0VBRy9CLGdCQUg2QztFQUk3QyxxQkFBMEIsRUFBQTtFRFU5QjtJQ2dGYSxlQUFlO0lBMURoQixvREMzQmU7SUQyQmYscURDM0JlO0lEMkJmLGlEQzNCZTtJRHdGbkIsY0FBYSxFQUFBO0VEOUZyQjtFQUVJLGNBQWMsRUFBQTtFQUVsQjtFQUNJLGNFaUJVO0VGaEJWLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFJZDtFQ05JLDREQUFnQztFQUNoQyxhRFF1QztFQ1B2Qyw0QkFId0Q7RUFJeEQsc0JBSndFO0VEV3hFLGtCQUFrQixFQUFBO0VBSnRCO0lBT1EsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0IsRUFBQTtFQVQ1QjtNQWNZLGlCQUFpQixFQUFBO0VBZDdCO1FBZWdCLGlCQUFpQixFQUFBO0VBZmpDO1VBZTJDLGVBQWUsRUFBQTtFQWYxRDtRQWlCZ0IsY0FBYztRQUNkLHFCRVJJO1FGU0osVUFBVSxFQUFBO0VBbkIxQjtRQXdCZ0IsaUJBQWlCO1FBQ2pCLFlFakNKO1FGa0NJLHFCRWhCSTtRRmlCSixnQkFBZ0I7UUFDaEIseUJBQXlCLEVBQUE7RUE1QnpDO1FBZ0NnQixZRXhDSixFQUFBO0VGUVo7TUFzQ2dCLGVBQWM7TUFDYixlQUFlO01BQ2QsWUFBWSxFQUFBO0VBeEM5QjtNQTJDZ0IscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLE9BQU87TUFDUCxVQUFVLEVBQUE7RUFuRDFCO0lBMERRLFdBQVc7SUFDWCxZRW5FSSxFQUFBO0VGUVo7TUE4RFksaUJBQWlCLEVBQUE7RUE5RDdCO1FBaUVnQixXQUFXO1FDOUV2QixvQ0NZa0M7UURYbEMsZUQrRWtEO1FDOUVsRCxrQkQ4RXlEO1FDN0V6RCxvQkFBMEI7UUQrRWQsMEJBQTBCLEVBQUE7RUFyRTFDO1FDYkksb0NDWWtDO1FEWGxDLGVEcUZrRDtRQ3BGbEQsa0JEb0Z5RDtRQ25GekQsb0JBQTBCO1FEcUZkLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy92YXJyaWFibGVcIjtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuYm9keSBcclxue1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46ICRhdXRvTTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWhlYWRlciBzZWN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmhlYWRlciB7XHJcbiAgICBcclxuXHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWltYWdlKCRiYWNrRywgNjAwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIGltZ3ttYXJnaW4tcmlnaHQ6IDIwJTsgJjpob3ZlcntjdXJzb3I6IHBvaW50ZXI7fX1cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAkaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYyJTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDklO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICRpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNCU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTA1O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxOCU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDQwcHgsIDYwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDIwcHgsIDYwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0JCRTRERTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVidG47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWNvbmQge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlYnRuLWJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBtaXhpbiB0eXBvU3R5bGUoJGZvbnQsICRzaXplOiAxNHB4LCAkd2VpZ2h0OiA0MDApIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZSAqIDEuNjE4O1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1pbWFnZSgkZmlsZVBhdGgsICRoLCAkYmdSZWFwZWF0OiBuby1yZXBlYXQsICRiZ1NpemU6IGNvdmVyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGVQYXRoKTtcclxuICAgIGhlaWdodDogJGg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogJGJnUmVhcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJGJnU2l6ZTtcclxuICAgIFxyXG59XHJcblxyXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCwgJGVuZCkge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCAwJSwgJGVuZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQgMCUsICRlbmQgMTAwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiByb3VuZGVkKCRyYWRpdXM6IDAuNWVtKSB7XHJcbiAgICBAZWFjaCAkdmVuZG9yIGluICR2ZW5kb3JzIHtcclxuICAgICAgICAjeyR2ZW5kb3J9Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkc3ByZWFkLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcclxuICAgIEBpZiAkaW5zZXQge1xyXG4gICAgICAgIEBlYWNoICR2ZW5kb3IgaW4gJHZlbmRvcnMge1xyXG4gICAgICAgICAgICAjeyR2ZW5kb3J9Ym94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQGVhY2ggJHZlbmRvciBpbiAkdmVuZG9ycyB7XHJcbiAgICAgICAgICAgICN7JHZlbmRvcn1ib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRzcHJlYWQgJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJvcmRlci1hcHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgwZGVnLCAkd2hpdGUgMCUsICR3aGl0ZSAxMDAlKTtcclxuXHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcblxyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwcHggNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICR3aGl0ZSA7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcblxyXG4gICAgQGluY2x1ZGUgcm91bmRlZCg1cHgpO1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQpO1xyXG4gICAgJjpob3ZlcnsgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMTBweCwgMzBweCwgMHB4LCAkc2hhZG93KTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbiVidG4tYnQge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQkFCODsgXHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuYm9yZGVyLXN0eWxlOiBub25lIDtcclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250KTtcclxuICAgICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDEwcHgsIDMwcHgsIDBweCwgJHNoYWRvdyk7XHJcbiAgICAgICAgY29sb3I6I0M2RTZFMTsgXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuJWJ0bi1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDUwcHgpO1xyXG5cclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQ1JTtcclxufVxyXG5cclxuJWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuXHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDVweCk7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCk7XHJcbn1cclxuJWhlYWRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogJGxpZ25DO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBAZXh0ZW5kICVsYXJnZU9wZW5TYW5zO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcmVndWxhclJvYm90bztcclxuICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgXHJcbiAgICB9XHJcbn1cclxuJWhlYWQtdFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiAkbGlnbkM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIEBleHRlbmQgJWxhcmdlT3BlblNhbnM7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBAZXh0ZW5kICVyZWd1bGFyUm9ib3RvO1xyXG4gICAgfVxyXG59XHJcbiVyZWd1bGFyUm9ib3RvIHtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkcm9ib3RvRm9udCwgMTZweCwgNDAwKTtcclxufVxyXG5cclxuJW1lZGl1bVJvYm90byB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJHJvYm90b0ZvbnQsIDIwcHgsIDUwMCk7XHJcbn1cclxuXHJcbiVyZWd1bGFyT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDE2cHgsIDQwMCk7XHJcbn1cclxuXHJcbiVtZWRpdW1PcGVuU2FucyB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCwgMjBweCwgNjAwKTtcclxufVxyXG5cclxuJWxhcmdlT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDMwcHgsIDYwMCk7XHJcbn1cclxuIiwiLy8gdmVuZG9yc1xyXG4kdmVuZG9yczogXCItbW96LVwiLCBcIi13ZWJraXQtXCIsIFwiLW8tXCIsIFwiLW1zLVwiLCBcIlwiOyBcclxuXHJcbi8vIGNvbG9yc1xyXG4kZ3JhZGllbnRTdGFydENvbG9yOiAjYmMyYmZmOztcclxuJGdyYWRpZW50RW5kQ29sb3I6ICM3MjQ5ZmI7O1xyXG4kd2hpdGU6I2ZmZmY7IFxyXG4kYmxhY2s6IzAwMDAgO1xyXG4kZ3JleSA6cmdiKDEwMCwgOTgsIDk4KTsgXHJcbiRzaGFkb3c6cmdiYSgwLCAwLCAwLCAwLjA4KTsgXHJcblxyXG4vL2ZvbnRzXHJcbiRyb2JvdG9Gb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJG9wZW5TYW5zRm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4vL2ltYWdlc1xyXG4kYmctaW1nOicuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9ob21lLWJhbm5lci5qcGcnO1xyXG4kYmFja0c6Jy4uLy4uL2Fzc2V0cy9pbWcvYWJzdHJhY3QtYXJ0LWJhY2tncm91bmQtMTAzNzk5Mi5qcGcnO1xyXG4kbG9nbyA6ICcuLi9pbWcvbG9nby5wbmcnO1xyXG4kYWJvdXQ6Jy4uLy4uL2Fzc2V0cy9pbWcvYmFsbHBlbi1ibHVyLWNsb3NlLXVwLTQ2MTA3Ny5qcGcnO1xyXG4kc2lkZTonLi4vLi4vYXNzZXRzL2ltZy9jb25jZXB0LWRheWxpZ2h0LWZhY2lhbC1leHByZXNzaW9uLTIwMzU4NjQuanBnJztcclxuJG1vYmlsZUltZzpcIi4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyL3JpZ2h0LW1vYmlsZS5wbmdcIiA7XHJcbiRiYW5uZXI6XCIuLi8uLi9hc3NldHMvYmFubmVyL2Jhbm5lci5qcGdcIjtcclxuLy8gbGF5b3V0IFxyXG4kaW5saW5lOmlubGluZS1ibG9jayA7IFxyXG4kYXV0b00gOjAgYXV0bzsgXHJcbiRsaWduQzpjZW50ZXIgOyJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loadLogin = function () {
        this.router.navigate(['/']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  \n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\n        <h1 class=\"text-center\">Login</h1>\n      <form [formGroup]=\"login\"  (ngSubmit)=\"onSubmit(login)\">\n        <div id=\"user-data\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Name....\"  formControlName=\"username\" >\n          </div>\n         \n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email....\" formControlName=\"email\" >\n            <span class=\"help-block\" *ngIf=\"!login.get('email').valid \n              && login.get('email').touched \">please Enter valid Email !</span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"secret\">Secret Questions</label>\n          <select id=\"secret\" class=\"form-control\"  formControlName=\"secretMsg\">\n            <option value=\"pet\" >Your first Pet?</option>\n            <option value=\"teacher\" >Your first teacher?</option>\n          </select>\n        </div>\n        <!-- radio  -->\n        <div class=\"radio\" *ngFor=\"let gender of genders\">\n          <label>\n            <input type=\"radio\" formControlName=\"gender\"  [value]=\"gender\">\n            {{gender}}\n          </label>\n        </div>\n        \n        <button (click)=\"loadHome()\" [disabled]=\"login.invalid\" class=\"btn \" type=\"Login\" >Login</button>\n        <button  (click)=\"login.reset()\" class=\"btn \" type=\"button\" >Reset</button>\n        \n      </form>\n    </div>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0px 45px;\n  line-height: 50px !important;\n  border: 2px solid #ffff;\n  color: #ffff;\n  display: inline-block;\n  margin-right: 20px;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  button:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08); }\n  body {\n  background-image: url('abstract-art-background-1037992.jpg');\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  h1 {\n  color: #C9E9E4;\n  padding-top: 5%; }\n  label {\n  color: #ffff;\n  font-weight: bold;\n  font-size: 20px; }\n  button {\n  background-color: #C9E9E4;\n  color: #ffff;\n  font-weight: bold;\n  font-size: 20px; }\n  input.ng-invalid.ng-touched {\n  border: 1px solid red; }\n  .help-block {\n  color: red; }\n  form {\n  padding: 5% 22%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcVXNlcnNcXElzbGFtIEFobWVkXFxEZXNrdG9wXFxBbmd1bGFyLVByb2plY3RzXFxzaG9wcGluZy1jYXJ0XFxjYXJ0L3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcSXNsYW0gQWhtZWRcXERlc2t0b3BcXEFuZ3VsYXItUHJvamVjdHNcXHNob3BwaW5nLWNhcnRcXGNhcnQvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQ3lESSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHVCQ2xFUTtFRG1FUixZQ25FUTtFRG9FUixxQkNsRGdCO0VEbURoQixrQkFBa0I7RUFuRGQsa0JBcURnQjtFQTVFcEIsb0NDWWtDO0VEWGxDLGVBRitCO0VBRy9CLGdCQUg2QztFQUk3QyxxQkFBMEIsRUFBQTtFRFM5QjtJQ2tFYSxlQUFlO0lBM0NoQixvREMzQmU7SUQyQmYscURDM0JlO0lEMkJmLGlEQzNCZSxFQUFBO0VGTjNCO0VDS0ksNERBQWdDO0VBQ2hDLGFESnVDO0VDS3ZDLDRCQUh3RDtFQUl4RCxzQkFKd0UsRUFBQTtFREE1RTtFQUFHLGNBQWE7RUFBRSxlQUFjLEVBQUE7RUFDaEM7RUFDSSxZRUhRO0VGSVIsaUJBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUVuQjtFQUVJLHlCQUF5QjtFQUN6QixZRVZRO0VGV1IsaUJBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUVuQjtFQUVJLHFCQUFzQixFQUFBO0VBRTFCO0VBRUksVUFBUyxFQUFBO0VBRWI7RUFFSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy92YXJyaWFibGVcIjtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuYm9keVxyXG57XHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWltYWdlKCRiYWNrRywgMTAwdmgpO1xyXG59XHJcbmgxe2NvbG9yOiNDOUU5RTQ7IHBhZGRpbmctdG9wOjUlOyAgfVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbn1cclxuYnV0dG9ue1xyXG4gICAgQGV4dGVuZCAlYnRuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzlFOUU0IDtcclxuICAgIGNvbG9yOiR3aGl0ZSA7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyBcclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQgIDtcclxufVxyXG4uaGVscC1ibG9jayBcclxue1xyXG4gICAgY29sb3I6cmVkOyBcclxufVxyXG5mb3JtXHJcbntcclxuICAgIHBhZGRpbmc6IDUlIDIyJTtcclxuXHJcbn0iLCJAbWl4aW4gdHlwb1N0eWxlKCRmb250LCAkc2l6ZTogMTRweCwgJHdlaWdodDogNDAwKSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogJHNpemUgKiAxLjYxODtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtaW1hZ2UoJGZpbGVQYXRoLCAkaCwgJGJnUmVhcGVhdDogbm8tcmVwZWF0LCAkYmdTaXplOiBjb3Zlcikge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmaWxlUGF0aCk7XHJcbiAgICBoZWlnaHQ6ICRoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiZ1JlYXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ1NpemU7XHJcbiAgICBcclxufVxyXG5cclxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQsICRlbmQpIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCAwJSwgJGVuZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCAwJSwgJGVuZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQgMCUsICRlbmQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG59XHJcblxyXG5AbWl4aW4gcm91bmRlZCgkcmFkaXVzOiAwLjVlbSkge1xyXG4gICAgQGVhY2ggJHZlbmRvciBpbiAkdmVuZG9ycyB7XHJcbiAgICAgICAgI3skdmVuZG9yfWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCR0b3AsICRsZWZ0LCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yLCAkaW5zZXQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGluc2V0IHtcclxuICAgICAgICBAZWFjaCAkdmVuZG9yIGluICR2ZW5kb3JzIHtcclxuICAgICAgICAgICAgI3skdmVuZG9yfWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJHNwcmVhZCAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEBlYWNoICR2ZW5kb3IgaW4gJHZlbmRvcnMge1xyXG4gICAgICAgICAgICAjeyR2ZW5kb3J9Ym94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiVib3JkZXItYXBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuXHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDVweCk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMTBweCwgMzBweCwgMHB4LCAkc2hhZG93KTtcclxuICAgICAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHdoaXRlIDAlLCAkd2hpdGUgMTAwJSk7XHJcblxyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjYmMyYmZmIDAlLCAjNzI0OWZiIDEwMCUpO1xyXG5cclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiVidG4ge1xyXG4gICAgcGFkZGluZzogMHB4IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAkd2hpdGUgO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGRpc3BsYXk6ICRpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IFxyXG5cclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250KTtcclxuICAgICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDEwcHgsIDMwcHgsIDBweCwgJHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4lYnRuLWJ0IHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUJBQjg7IFxyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGRpc3BsYXk6ICRpbmxpbmU7XHJcbmJvcmRlci1zdHlsZTogbm9uZSA7XHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDVweCk7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCk7XHJcbiAgICAmOmhvdmVyeyBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgICAgIGNvbG9yOiNDNkU2RTE7IFxyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcbiVidG4tYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMTBweCwgMzBweCwgMHB4LCAkc2hhZG93KTtcclxuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjYmMyYmZmIDAlLCAjNzI0OWZiIDEwMCUpO1xyXG4gICAgQGluY2x1ZGUgcm91bmRlZCg1MHB4KTtcclxuXHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0NSU7XHJcbn1cclxuXHJcbiVjYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcclxuICAgIGRpc3BsYXk6ICRpbmxpbmU7XHJcblxyXG4gICAgQGluY2x1ZGUgcm91bmRlZCg1cHgpO1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQpO1xyXG59XHJcbiVoZWFkXHJcbntcclxuICAgIHRleHQtYWxpZ246ICRsaWduQztcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgQGV4dGVuZCAlbGFyZ2VPcGVuU2FucztcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIEBleHRlbmQgJXJlZ3VsYXJSb2JvdG87XHJcbiAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IFxyXG4gICAgfVxyXG59XHJcbiVoZWFkLXRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogJGxpZ25DO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBAZXh0ZW5kICVsYXJnZU9wZW5TYW5zO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcmVndWxhclJvYm90bztcclxuICAgIH1cclxufVxyXG4lcmVndWxhclJvYm90byB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJHJvYm90b0ZvbnQsIDE2cHgsIDQwMCk7XHJcbn1cclxuXHJcbiVtZWRpdW1Sb2JvdG8ge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRyb2JvdG9Gb250LCAyMHB4LCA1MDApO1xyXG59XHJcblxyXG4lcmVndWxhck9wZW5TYW5zIHtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250LCAxNnB4LCA0MDApO1xyXG59XHJcblxyXG4lbWVkaXVtT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDIwcHgsIDYwMCk7XHJcbn1cclxuXHJcbiVsYXJnZU9wZW5TYW5zIHtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250LCAzMHB4LCA2MDApO1xyXG59XHJcbiIsIi8vIHZlbmRvcnNcclxuJHZlbmRvcnM6IFwiLW1vei1cIiwgXCItd2Via2l0LVwiLCBcIi1vLVwiLCBcIi1tcy1cIiwgXCJcIjsgXHJcblxyXG4vLyBjb2xvcnNcclxuJGdyYWRpZW50U3RhcnRDb2xvcjogI2JjMmJmZjs7XHJcbiRncmFkaWVudEVuZENvbG9yOiAjNzI0OWZiOztcclxuJHdoaXRlOiNmZmZmOyBcclxuJGJsYWNrOiMwMDAwIDtcclxuJGdyZXkgOnJnYigxMDAsIDk4LCA5OCk7IFxyXG4kc2hhZG93OnJnYmEoMCwgMCwgMCwgMC4wOCk7IFxyXG5cclxuLy9mb250c1xyXG4kcm9ib3RvRm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRvcGVuU2Fuc0ZvbnQ6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuLy9pbWFnZXNcclxuJGJnLWltZzonLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIvaG9tZS1iYW5uZXIuanBnJztcclxuJGJhY2tHOicuLi8uLi9hc3NldHMvaW1nL2Fic3RyYWN0LWFydC1iYWNrZ3JvdW5kLTEwMzc5OTIuanBnJztcclxuJGxvZ28gOiAnLi4vaW1nL2xvZ28ucG5nJztcclxuJGFib3V0OicuLi8uLi9hc3NldHMvaW1nL2JhbGxwZW4tYmx1ci1jbG9zZS11cC00NjEwNzcuanBnJztcclxuJHNpZGU6Jy4uLy4uL2Fzc2V0cy9pbWcvY29uY2VwdC1kYXlsaWdodC1mYWNpYWwtZXhwcmVzc2lvbi0yMDM1ODY0LmpwZyc7XHJcbiRtb2JpbGVJbWc6XCIuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9yaWdodC1tb2JpbGUucG5nXCIgO1xyXG4kYmFubmVyOlwiLi4vLi4vYXNzZXRzL2Jhbm5lci9iYW5uZXIuanBnXCI7XHJcbi8vIGxheW91dCBcclxuJGlubGluZTppbmxpbmUtYmxvY2sgOyBcclxuJGF1dG9NIDowIGF1dG87IFxyXG4kbGlnbkM6Y2VudGVyIDsiXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.genders = ['male', 'female'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            secretMsg: ['pet', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['male', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.loadHome = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [counter]=\"count\"></app-header>\n\n<section class=\"products\">\n  <div class=\"container\">\n    <div class=\"row\">\n      \n      <div *ngFor=\"let product of  content\" class=\"col-lg-3 col-md-6 col-sm-12\">\n        \n        <app-single-product [itemm]=\"product\"  >  </app-single-product>\n        \n      </div>\n\n    </div>\n  </div>\n</section>\n\n<!-- (sendId) = \"onRecieve($event)\" (removeId)=\"onDelete($event)\" -->"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products {\n  padding-top: 50px;\n  height: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././counter.service */ "./src/app/counter.service.ts");



var ProductsComponent = /** @class */ (function () {
    //  onRecieve(id)
    // {
    //   this.count ++  ;
    // }
    // onDelete(id)
    // {
    //   if(this.count !== 0)
    //   {
    //     this.count-- ;
    //   }
    // }
    function ProductsComponent(countt) {
        this.countt = countt;
        this.content = [{
                pName: "First",
                pPrice: "$10.9",
                pmg: "../../assets/img/elements/g4.jpg"
            },
            {
                pName: "Second ",
                pPrice: "$20.7",
                pmg: "../../assets/img/elements/g3.jpg"
            },
            {
                pName: "Third",
                pPrice: "$25.2",
                pmg: "../../assets/img/elements/g5.jpg"
            },
            {
                pName: "Forth",
                pPrice: "$30.9",
                pmg: "../../assets/img/elements/a2.jpg"
            }];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countt.currentCount.subscribe(function (count) {
            _this.count = count;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsComponent.prototype, "counter", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/single-product/single-product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-product/single-product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \" style=\"width: 15rem;\" >\n <img src=\"{{itemm.pmg}}\" class=\"card-img-top\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{itemm.pName}}</h5>\n      <p class=\"card-text\">{{itemm.pPrice}}</p>\n      <a (click)=\"Send()\"  >Add To Cart</a>\n      <a (click)=\"Remove()\" > Remove </a>\n      <!-- <a href=\"#\">  <i class=\"fas fa-cart-plus\"></i> </a> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/single-product/single-product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/single-product/single-product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  padding: 0px 20px;\n  line-height: 50px !important;\n  background-color: #FABAB8;\n  color: #ffff;\n  display: inline-block;\n  border-style: none;\n  border-radius: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22.652px; }\n  a:hover {\n    cursor: pointer;\n    -o-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    -ms-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);\n    color: #C6E6E1; }\n  a {\n  display: inline;\n  padding: 20px 11px;\n  margin-right: 10px; }\n  h5 {\n  color: #46a89a;\n  font-weight: 600px;\n  font-size: 20px; }\n  p {\n  color: #d49896;\n  font-weight: 600px;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3QvQzpcXFVzZXJzXFxJc2xhbSBBaG1lZFxcRGVza3RvcFxcQW5ndWxhci1Qcm9qZWN0c1xcc2hvcHBpbmctY2FydFxcY2FydC9zcmNcXGFwcFxcc2luZ2xlLXByb2R1Y3RcXHNpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcHJvZHVjdC9DOlxcVXNlcnNcXElzbGFtIEFobWVkXFxEZXNrdG9wXFxBbmd1bGFyLVByb2plY3RzXFxzaG9wcGluZy1jYXJ0XFxjYXJ0L3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wcm9kdWN0L0M6XFxVc2Vyc1xcSXNsYW0gQWhtZWRcXERlc2t0b3BcXEFuZ3VsYXItUHJvamVjdHNcXHNob3BwaW5nLWNhcnRcXGNhcnQvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ21GSSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQ25GUTtFRG9GUixxQkNsRWdCO0VEbUVwQixrQkFBbUI7RUFuRVgsa0JBb0VnQjtFQTNGcEIsb0NDWWtDO0VEWGxDLGVBRitCO0VBRy9CLGdCQUg2QztFQUk3QyxxQkFBMEIsRUFBQTtFREQ5QjtJQzJGYSxlQUFlO0lBMURoQixvREMzQmU7SUQyQmYscURDM0JlO0lEMkJmLGlEQzNCZTtJRHdGbkIsY0FBYSxFQUFBO0VEOUZyQjtFQUdJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxjQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBR25CO0VBQUUsY0FBeUI7RUFBRSxrQkFBa0I7RUFDM0MsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3Nhc3MvdmFycmlhYmxlXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbmFcclxue1xyXG4gICAgQGV4dGVuZCAlYnRuLWJ0IDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbn1cclxuaDV7XHJcbiAgICBjb2xvcjpyZ2IoNzAsIDE2OCwgMTU0KSA7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcbn1cclxucHtjb2xvcjogcmdiKDIxMiwgMTUyLCAxNTApOyBmb250LXdlaWdodDogNjAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7fSIsIkBtaXhpbiB0eXBvU3R5bGUoJGZvbnQsICRzaXplOiAxNHB4LCAkd2VpZ2h0OiA0MDApIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZSAqIDEuNjE4O1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1pbWFnZSgkZmlsZVBhdGgsICRoLCAkYmdSZWFwZWF0OiBuby1yZXBlYXQsICRiZ1NpemU6IGNvdmVyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGVQYXRoKTtcclxuICAgIGhlaWdodDogJGg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogJGJnUmVhcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJGJnU2l6ZTtcclxuICAgIFxyXG59XHJcblxyXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCwgJGVuZCkge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0IDAlLCAkZW5kIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydCAwJSwgJGVuZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQgMCUsICRlbmQgMTAwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiByb3VuZGVkKCRyYWRpdXM6IDAuNWVtKSB7XHJcbiAgICBAZWFjaCAkdmVuZG9yIGluICR2ZW5kb3JzIHtcclxuICAgICAgICAjeyR2ZW5kb3J9Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkc3ByZWFkLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcclxuICAgIEBpZiAkaW5zZXQge1xyXG4gICAgICAgIEBlYWNoICR2ZW5kb3IgaW4gJHZlbmRvcnMge1xyXG4gICAgICAgICAgICAjeyR2ZW5kb3J9Ym94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQGVhY2ggJHZlbmRvciBpbiAkdmVuZG9ycyB7XHJcbiAgICAgICAgICAgICN7JHZlbmRvcn1ib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRzcHJlYWQgJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJvcmRlci1hcHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgwZGVnLCAkd2hpdGUgMCUsICR3aGl0ZSAxMDAlKTtcclxuXHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcblxyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwcHggNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICR3aGl0ZSA7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcblxyXG4gICAgQGluY2x1ZGUgcm91bmRlZCg1cHgpO1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQpO1xyXG4gICAgJjpob3ZlcnsgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCwgMTBweCwgMzBweCwgMHB4LCAkc2hhZG93KTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbiVidG4tYnQge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQkFCODsgXHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuYm9yZGVyLXN0eWxlOiBub25lIDtcclxuICAgIEBpbmNsdWRlIHJvdW5kZWQoNXB4KTtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkb3BlblNhbnNGb250KTtcclxuICAgICY6aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHgsIDEwcHgsIDMwcHgsIDBweCwgJHNoYWRvdyk7XHJcbiAgICAgICAgY29sb3I6I0M2RTZFMTsgXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuJWJ0bi1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAxMHB4LCAzMHB4LCAwcHgsICRzaGFkb3cpO1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDBkZWcsICNiYzJiZmYgMCUsICM3MjQ5ZmIgMTAwJSk7XHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDUwcHgpO1xyXG5cclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQ1JTtcclxufVxyXG5cclxuJWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgZGlzcGxheTogJGlubGluZTtcclxuXHJcbiAgICBAaW5jbHVkZSByb3VuZGVkKDVweCk7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCk7XHJcbn1cclxuJWhlYWRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogJGxpZ25DO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBAZXh0ZW5kICVsYXJnZU9wZW5TYW5zO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcmVndWxhclJvYm90bztcclxuICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgXHJcbiAgICB9XHJcbn1cclxuJWhlYWQtdFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiAkbGlnbkM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIEBleHRlbmQgJWxhcmdlT3BlblNhbnM7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBAZXh0ZW5kICVyZWd1bGFyUm9ib3RvO1xyXG4gICAgfVxyXG59XHJcbiVyZWd1bGFyUm9ib3RvIHtcclxuICAgIEBpbmNsdWRlIHR5cG9TdHlsZSgkcm9ib3RvRm9udCwgMTZweCwgNDAwKTtcclxufVxyXG5cclxuJW1lZGl1bVJvYm90byB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJHJvYm90b0ZvbnQsIDIwcHgsIDUwMCk7XHJcbn1cclxuXHJcbiVyZWd1bGFyT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDE2cHgsIDQwMCk7XHJcbn1cclxuXHJcbiVtZWRpdW1PcGVuU2FucyB7XHJcbiAgICBAaW5jbHVkZSB0eXBvU3R5bGUoJG9wZW5TYW5zRm9udCwgMjBweCwgNjAwKTtcclxufVxyXG5cclxuJWxhcmdlT3BlblNhbnMge1xyXG4gICAgQGluY2x1ZGUgdHlwb1N0eWxlKCRvcGVuU2Fuc0ZvbnQsIDMwcHgsIDYwMCk7XHJcbn1cclxuIiwiLy8gdmVuZG9yc1xyXG4kdmVuZG9yczogXCItbW96LVwiLCBcIi13ZWJraXQtXCIsIFwiLW8tXCIsIFwiLW1zLVwiLCBcIlwiOyBcclxuXHJcbi8vIGNvbG9yc1xyXG4kZ3JhZGllbnRTdGFydENvbG9yOiAjYmMyYmZmOztcclxuJGdyYWRpZW50RW5kQ29sb3I6ICM3MjQ5ZmI7O1xyXG4kd2hpdGU6I2ZmZmY7IFxyXG4kYmxhY2s6IzAwMDAgO1xyXG4kZ3JleSA6cmdiKDEwMCwgOTgsIDk4KTsgXHJcbiRzaGFkb3c6cmdiYSgwLCAwLCAwLCAwLjA4KTsgXHJcblxyXG4vL2ZvbnRzXHJcbiRyb2JvdG9Gb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJG9wZW5TYW5zRm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4vL2ltYWdlc1xyXG4kYmctaW1nOicuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci9ob21lLWJhbm5lci5qcGcnO1xyXG4kYmFja0c6Jy4uLy4uL2Fzc2V0cy9pbWcvYWJzdHJhY3QtYXJ0LWJhY2tncm91bmQtMTAzNzk5Mi5qcGcnO1xyXG4kbG9nbyA6ICcuLi9pbWcvbG9nby5wbmcnO1xyXG4kYWJvdXQ6Jy4uLy4uL2Fzc2V0cy9pbWcvYmFsbHBlbi1ibHVyLWNsb3NlLXVwLTQ2MTA3Ny5qcGcnO1xyXG4kc2lkZTonLi4vLi4vYXNzZXRzL2ltZy9jb25jZXB0LWRheWxpZ2h0LWZhY2lhbC1leHByZXNzaW9uLTIwMzU4NjQuanBnJztcclxuJG1vYmlsZUltZzpcIi4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyL3JpZ2h0LW1vYmlsZS5wbmdcIiA7XHJcbiRiYW5uZXI6XCIuLi8uLi9hc3NldHMvYmFubmVyL2Jhbm5lci5qcGdcIjtcclxuLy8gbGF5b3V0IFxyXG4kaW5saW5lOmlubGluZS1ibG9jayA7IFxyXG4kYXV0b00gOjAgYXV0bzsgXHJcbiRsaWduQzpjZW50ZXIgOyJdfQ== */"

/***/ }),

/***/ "./src/app/single-product/single-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-product/single-product.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././counter.service */ "./src/app/counter.service.ts");



var SingleProductComponent = /** @class */ (function () {
    // @Input() counter;
    // @Output() sendId = new EventEmitter<number>();
    // @Output() removeId = new EventEmitter<number>();
    function SingleProductComponent(counte) {
        this.counte = counte;
        this.count = 0;
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counte.currentCount.subscribe(function (count) {
            _this.count = count;
        });
    };
    SingleProductComponent.prototype.Send = function () {
        this.counte.onSend(++this.count);
    };
    SingleProductComponent.prototype.Remove = function () {
        this.counte.onRemove(--this.count);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SingleProductComponent.prototype, "itemm", void 0);
    SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-product',
            template: __webpack_require__(/*! ./single-product.component.html */ "./src/app/single-product/single-product.component.html"),
            styles: [__webpack_require__(/*! ./single-product.component.scss */ "./src/app/single-product/single-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]])
    ], SingleProductComponent);
    return SingleProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Islam Ahmed\Desktop\Angular-Projects\shopping-cart\cart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map