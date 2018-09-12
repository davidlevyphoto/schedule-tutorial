var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HttpModule } from '@angular/http';
//import { MyBookstoresPage } from '../pages/pages';
import { HarukiApi } from '../shared/shared';
import { FeedPage } from '../pages/pages';
import { CitiesPage } from '../pages/pages';
import { BookstoresPage } from '../pages/pages';
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = FeedPage;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            // Splashscreen.hide();
        });
    };
    MyApp.prototype.goToBookstores = function () {
        this.nav.push(BookstoresPage);
    };
    MyApp.prototype.goToCities = function () {
        this.nav.push(CitiesPage);
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(FeedPage);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html',
        providers: [
            HarukiApi,
            HttpModule
        ]
    }),
    __metadata("design:paramtypes", [Platform])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map