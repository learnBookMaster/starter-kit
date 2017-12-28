webpackJsonp([0],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(734);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_topics_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_courseTimeCalcAndroid_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_courseTimeCalcCordova_service__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ContentListPage } from '../content-list/content-list'; //comment code



var HomePage = (function () {
    function HomePage(navCtrl, navParams, firebaseAnalytics, menuCtrl, topicsService, courseTimeCalcServiceAndroid, courseTimeCalcServiceCordova) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseAnalytics = firebaseAnalytics;
        this.menuCtrl = menuCtrl;
        this.topicsService = topicsService;
        this.courseTimeCalcServiceAndroid = courseTimeCalcServiceAndroid;
        this.courseTimeCalcServiceCordova = courseTimeCalcServiceCordova;
        this.topics = this.topicsService.getTopics();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'mainPageMenu');
        this.menuCtrl.enable(false, 'subTopic');
        this.topic = this.navParams.get('topic');
        if (this.navParams.get('markPercent')) {
            this.markPercent = this.navParams.get('markPercent');
            this.topicsService.setPercentage(this.markPercent, this.topic);
        }
        if (this.navParams.get('timeSpent')) {
            this.timeSpent = this.navParams.get('timeSpent');
            this.displayTime = new Date(this.timeSpent).toISOString().substr(14, 5);
            this.topicsService.setTimeSpent(this.displayTime, this.topic);
        }
    };
    HomePage.prototype.startCourse = function (topic) {
        if (topic == 'Android') {
            this.courseTimeCalcServiceAndroid.setStartTime();
        }
        else {
            this.courseTimeCalcServiceCordova.setStartTime();
        }
        // this.navCtrl.setRoot(ContentListPage,{topic: topic}); //comment code
    };
    HomePage.prototype.logout = function () {
        this.topicsService.setPercentage(0, 'Android');
        this.topicsService.setPercentage(0, 'Cordova');
        this.topicsService.setTimeSpent('0:00', 'Android');
        this.topicsService.setTimeSpent('0:00', 'Cordova');
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/vipul/Desktop/IIT TechFeast/Starter Kit /learnBook-starter/src/pages/home/home.html"*/'<<!-- ion-header>\n    <ion-navbar>\n        <ion-title>\n            LearnBook\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only small (click)="logout()">\n                <ion-icon name=\'log-out\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card *ngFor="let topic of topics">\n\n        <ion-item>\n            <h2>{{topic.title}}</h2>\n            <p>{{topic.para1}}</p>\n        </ion-item>\n\n        <img src="{{topic.iconUrl}}">\n\n        <ion-card-content>\n            <p>{{topic.desc}}</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col col-3>\n                <button ion-button (click)="startCourse(topic.title)">\n                    Start\n                </button>\n            </ion-col>\n            <ion-col col-3>\n                <button ion-button icon-left clear>\n                    <ion-icon name="alert" style="color:#ff304c;" *ngIf="topic.marksObtained<50"></ion-icon>\n                    <ion-icon name="checkmark-circle" style="color:#95e616;" *ngIf="topic.marksObtained>=50"></ion-icon>\n                    <div>{{topic.marksObtained}}%</div>\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button icon-left clear>\n                    <ion-icon name="clock"></ion-icon>\n                    <div>{{topic.timeSpent}}</div>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n -->\n\n\n <ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <h2 > <font color="white">Welcome </font> </h2>\n  <button ion-button (click)="logout()">\n    Log out\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/vipul/Desktop/IIT TechFeast/Starter Kit /learnBook-starter/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__services_topics_service__["a" /* TopicsService */],
        __WEBPACK_IMPORTED_MODULE_5__services_courseTimeCalcAndroid_service__["a" /* CourseTimeCalcServiceAndroid */],
        __WEBPACK_IMPORTED_MODULE_6__services_courseTimeCalcCordova_service__["a" /* CourseTimeCalcServiceCordova */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map