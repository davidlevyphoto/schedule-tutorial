var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { BookstoreHomePage } from '../pages';
import { HarukiApi } from '../../shared/shared';
/*
  Generated class for the Bookstores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var BookstoresPage = (function () {
    function BookstoresPage(navCtrl, navParams, HarukiApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HarukiApi = HarukiApi;
        this.loadingController = loadingController;
    }
    BookstoresPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting Bookstores'
        });
        loader.present().then(function () {
            _this.HarukiApi.getBookstores().then(function (data) {
                _this.bookstores = data;
                loader.dismiss();
            });
        });
    };
    BookstoresPage.prototype.viewBookstore = function ($event, bookstore) {
        this.navCtrl.push(BookstoreHomePage, bookstore);
    };
    return BookstoresPage;
}());
BookstoresPage = __decorate([
    Component({
        selector: 'page-bookstores',
        templateUrl: 'bookstores.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, HarukiApi, LoadingController])
], BookstoresPage);
export { BookstoresPage };
//# sourceMappingURL=bookstores.js.map