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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n<a [routerLink]=\"['/']\">home page</a>\n\n<a [routerLink]=\"['/product', 1]\" [queryParams]=\"{id:1}\">product detial</a>\n\n<input type=\"button\" value=\"product detail\" (click)=\"toProductDetails()\">\n<a [routerLink]=\"[{outlets: {primary: 'home',aux: 'chat'}}]\">开始聊天</a>\n<!-- <a [routerLink]=\"[{outlets: {aux: 'chat'}}]\">开始聊天</a> -->\n<a [routerLink]=\"[{outlets: {aux: null}}]\">结束聊天</a>\n\n  <!-- <app-products></app-products> -->\n  <router-outlet></router-outlet>\n  \n  <router-outlet name=\"aux\"></router-outlet>\n\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'PCM';
    }
    AppComponent.prototype.toProductDetails = function () {
        this.router.navigate(['/product', 1]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _code404_code404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code404/code404.component */ "./src/app/code404/code404.component.ts");
/* harmony import */ var _product_desc_product_desc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-desc/product-desc.component */ "./src/app/product-desc/product-desc.component.ts");
/* harmony import */ var _seller_info_seller_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seller-info/seller-info.component */ "./src/app/seller-info/seller-info.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/log.service */ "./src/app/shared/log.service.ts");
/* harmony import */ var _shared_anotherproduct_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/anotherproduct.service */ "./src/app/shared/anotherproduct.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _code404_code404_component__WEBPACK_IMPORTED_MODULE_8__["Code404Component"],
                _product_desc_product_desc_component__WEBPACK_IMPORTED_MODULE_9__["ProductDescComponent"],
                _seller_info_seller_info_component__WEBPACK_IMPORTED_MODULE_10__["SellerInfoComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _shared_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"],
                    useFactory: function (logger, appConfig) {
                        if (appConfig.isDev) {
                            return new _shared_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"](logger);
                        }
                        else {
                            return new _shared_anotherproduct_service__WEBPACK_IMPORTED_MODULE_14__["AnotherproductService"](logger);
                        }
                    },
                    deps: [_shared_log_service__WEBPACK_IMPORTED_MODULE_13__["LogService"], "APP_CONFIG"]
                },
                {
                    provide: "APP_CONFIG",
                    useValue: { isDev: false }
                },
                _shared_log_service__WEBPACK_IMPORTED_MODULE_13__["LogService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _code404_code404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code404/code404.component */ "./src/app/code404/code404.component.ts");
/* harmony import */ var _product_desc_product_desc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-desc/product-desc.component */ "./src/app/product-desc/product-desc.component.ts");
/* harmony import */ var _seller_info_seller_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-info/seller-info.component */ "./src/app/seller-info/seller-info.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/guard */ "./src/app/guard/guard.ts");
/* harmony import */ var _guard_unsavedguard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/unsavedguard */ "./src/app/guard/unsavedguard.ts");
/* harmony import */ var _guard_productresolve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/productresolve */ "./src/app/guard/productresolve.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    /**辅助路由 */
    {
        path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], outlet: 'aux'
    },
    /**path不能以'/'开头 */
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    /**子路由 */
    {
        path: 'product/:id', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '', component: _product_desc_product_desc_component__WEBPACK_IMPORTED_MODULE_5__["ProductDescComponent"]
            },
            {
                path: 'seller/:id', component: _seller_info_seller_info_component__WEBPACK_IMPORTED_MODULE_6__["SellerInfoComponent"]
            }
        ],
        canActivate: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]],
        canDeactivate: [_guard_unsavedguard__WEBPACK_IMPORTED_MODULE_9__["UnsavedGuard"]],
        resolve: {
            product: _guard_productresolve__WEBPACK_IMPORTED_MODULE_10__["ProductResolve"]
        }
    },
    {
        path: '**', component: _code404_code404_component__WEBPACK_IMPORTED_MODULE_4__["Code404Component"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_guard_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"], _guard_unsavedguard__WEBPACK_IMPORTED_MODULE_9__["UnsavedGuard"], _guard_productresolve__WEBPACK_IMPORTED_MODULE_10__["ProductResolve"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\r\n    background: green;\r\n    height: 100px;\r\n    width: 30%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<textarea placeholder=\"please input content\" class=\"chat\"></textarea>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/code404/code404.component.css":
/*!***********************************************!*\
  !*** ./src/app/code404/code404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/code404/code404.component.html":
/*!************************************************!*\
  !*** ./src/app/code404/code404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page doesn't exist!\n</p>\n"

/***/ }),

/***/ "./src/app/code404/code404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/code404/code404.component.ts ***!
  \**********************************************/
/*! exports provided: Code404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code404Component", function() { return Code404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Code404Component = /** @class */ (function () {
    function Code404Component() {
    }
    Code404Component.prototype.ngOnInit = function () {
    };
    Code404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code404',
            template: __webpack_require__(/*! ./code404.component.html */ "./src/app/code404/code404.component.html"),
            styles: [__webpack_require__(/*! ./code404.component.css */ "./src/app/code404/code404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Code404Component);
    return Code404Component;
}());



/***/ }),

/***/ "./src/app/guard/guard.ts":
/*!********************************!*\
  !*** ./src/app/guard/guard.ts ***!
  \********************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
var LoginGuard = /** @class */ (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function () {
        var loggedIn = Math.random() < 0.5;
        if (!loggedIn) {
            console.log("用户为登录");
        }
        return loggedIn;
    };
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/guard/productresolve.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/productresolve.ts ***!
  \*****************************************/
/*! exports provided: ProductResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolve", function() { return ProductResolve; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductResolve = /** @class */ (function () {
    function ProductResolve(router) {
        this.router = router;
    }
    ProductResolve.prototype.resolve = function (route, state) {
        var productId = route.params["id"];
        if (1 == productId) {
            return new _products_products_component__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "iphone7", "tets", 33, "test", "", 1, "");
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    ProductResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ProductResolve);
    return ProductResolve;
}());



/***/ }),

/***/ "./src/app/guard/unsavedguard.ts":
/*!***************************************!*\
  !*** ./src/app/guard/unsavedguard.ts ***!
  \***************************************/
/*! exports provided: UnsavedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedGuard", function() { return UnsavedGuard; });
var UnsavedGuard = /** @class */ (function () {
    function UnsavedGuard() {
    }
    UnsavedGuard.prototype.canDeactivate = function (component) {
        return window.confirm("你还没有保存，确定要离开么?");
    };
    return UnsavedGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n    background: red;\r\n    height: 100px;\r\n    width: 70%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <p>\n    home works!\n  </p>\n  \n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product-desc/product-desc.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-desc/product-desc.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-desc/product-desc.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-desc/product-desc.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-desc works!\n</p>\n"

/***/ }),

/***/ "./src/app/product-desc/product-desc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-desc/product-desc.component.ts ***!
  \********************************************************/
/*! exports provided: ProductDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescComponent", function() { return ProductDescComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDescComponent = /** @class */ (function () {
    function ProductDescComponent() {
    }
    ProductDescComponent.prototype.ngOnInit = function () {
    };
    ProductDescComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-desc',
            template: __webpack_require__(/*! ./product-desc.component.html */ "./src/app/product-desc/product-desc.component.html"),
            styles: [__webpack_require__(/*! ./product-desc.component.css */ "./src/app/product-desc/product-desc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDescComponent);
    return ProductDescComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\r\n    background: yellow;\r\n    height: 100px;\r\n    width: 70%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card border-primary product'>\n  <div class='card-header'>\n      MR Zhang\n  </div>\n  <div class='card-body'>\n      <div class='row'>\n          <div class='col-md-2'>Filtruj:</div>\n          <div class='col-md-4'>\n              <input type='text' [(ngModel)]=\"productId\"/>\n          </div>\n      </div>\n      <div class='row'>\n          <div class='col-md-3'>\n              <h3>Filtrowanie po:</h3>\n          </div>\n      </div>\n      <div class='table-responsive' *ngIf='products && products.length'>\n          <table class='table'>\n              <thead>\n                  <tr>\n                      <!-- <th>\n                          <button class='btn btn-primary'>\n                              Pokaż obrazek\n                          </button>\n                      </th> -->\n                      <th>Produkt</th>\n                      <th>Kod</th>\n                      <th>Dostępny od</th>\n                      <th>Cena</th>\n                      <th>Ocena</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor='let product of products;'>\n                      <!-- <td></td> -->\n                      <td>{{product.productName}}</td>\n                      <td>{{product.productCode}}</td>\n                      <td>{{product.releaseDate}}</td>\n                      <td>{{product.price}}</td>\n                      <td>{{product.starRating}}</td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n  </div>\n\n  <p>\n      here is product info\n  </p>\n  <p>\n      product id: {{productId}}\n    </p>\n    <a [routerLink]=\"['./']\">product desc</a>\n    <a [routerLink]=\"['./seller', 99]\">seller info</a>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _shared_anotherproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/anotherproduct.service */ "./src/app/shared/anotherproduct.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(routeInfo, productService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.pageTitle = 'Lista produktów';
    }
    ProductsComponent.prototype.loaddata = function () {
        this.products = this.productService.getProduct();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaddata();
        //参数快照
        //this.productId = this.routeInfo.snapshot.queryParams["id"];
        // this.productId = this.routeInfo.snapshot.params["id"];
        //参数订阅
        this.routeInfo.params.subscribe(function (params) { _this.productId = params["id"]; });
        this.routeInfo.data.subscribe(function (data) {
            _this.productId = data.product.productId,
                _this.productName = data.product.productName;
        });
        console.log(this.productId);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")],
            providers: [{
                    provide: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
                    useClass: _shared_anotherproduct_service__WEBPACK_IMPORTED_MODULE_3__["AnotherproductService"]
                }]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());

var Product = /** @class */ (function () {
    function Product(productId, productName, productCode, price, releaseDate, description, starRating, imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.price = price;
        this.releaseDate = releaseDate;
        this.description = description;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/seller-info/seller-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/seller-info/seller-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/seller-info/seller-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/seller-info/seller-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  seller-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/seller-info/seller-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/seller-info/seller-info.component.ts ***!
  \******************************************************/
/*! exports provided: SellerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoComponent", function() { return SellerInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellerInfoComponent = /** @class */ (function () {
    function SellerInfoComponent(routeInfo) {
        this.routeInfo = routeInfo;
    }
    SellerInfoComponent.prototype.ngOnInit = function () {
        this.sellerId = this.routeInfo.snapshot.params["id"];
    };
    SellerInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-info',
            template: __webpack_require__(/*! ./seller-info.component.html */ "./src/app/seller-info/seller-info.component.html"),
            styles: [__webpack_require__(/*! ./seller-info.component.css */ "./src/app/seller-info/seller-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SellerInfoComponent);
    return SellerInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/anotherproduct.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/anotherproduct.service.ts ***!
  \**************************************************/
/*! exports provided: AnotherproductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnotherproductService", function() { return AnotherproductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "./src/app/shared/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnotherproductService = /** @class */ (function () {
    function AnotherproductService(logger) {
        this.logger = logger;
    }
    AnotherproductService.prototype.getProductById = function (id) {
        throw new Error("Method not implemented.");
    };
    AnotherproductService.prototype.getProducts = function () {
        throw new Error("Method not implemented.");
    };
    AnotherproductService.prototype.getProduct = function () {
        this.logger.log("getProduct method called!");
        this.products = [
            {
                "productId": 3,
                "productName": "ano1",
                "productCode": "GDN-0011",
                "releaseDate": "19.03.2016",
                "description": "Grabie ogrodowe z drewnanym trzonkiem.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 4,
                "productName": "ano2",
                "productCode": "GDN-0023",
                "releaseDate": "18.03.2016",
                "description": "Wózek ogrodowy o pojemności 50 litrów",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
        return this.products;
    };
    AnotherproductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], AnotherproductService);
    return AnotherproductService;
}());



/***/ }),

/***/ "./src/app/shared/log.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/log.service.ts ***!
  \***************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.log = function (message) {
        console.log(message);
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/product.service.ts ***!
  \*******************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "./src/app/shared/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(logger) {
        this.logger = logger;
    }
    ProductService.prototype.getProduct = function () {
        this.logger.log("getProduct method called!");
        this.products = [
            {
                "productId": 1,
                "productName": "Grabie",
                "productCode": "GDN-0011",
                "releaseDate": "19.03.2016",
                "description": "Grabie ogrodowe z drewnanym trzonkiem.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Wózek ogrodowy",
                "productCode": "GDN-0023",
                "releaseDate": "18.03.2016",
                "description": "Wózek ogrodowy o pojemności 50 litrów",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
        return this.products;
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProductById = function (id) {
        return this.products.find(function (product) { return product.productId == id; });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], ProductService);
    return ProductService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace\source\github\angular-springboot\policy-center\pcm-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map