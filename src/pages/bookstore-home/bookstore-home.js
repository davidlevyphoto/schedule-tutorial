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
import { NavController, NavParams } from 'ionic-angular';
import { BookstoreDetailPage, BookstoreBooksPage } from '../pages';
/*
  Generated class for the BookstoreHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var BookstoreHomePage = (function () {
    function BookstoreHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookstoreDetailTab = BookstoreDetailPage;
        this.bookstoreBooksTab = BookstoreBooksPage;
        this.bookstore = this.navParams.data;
        //console.log("**bookstore:", this.bookstore);
    }
    BookstoreHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookstoreHomePage');
    };
    return BookstoreHomePage;
}());
BookstoreHomePage = __decorate([
    Component({
        selector: 'page-bookstore-home',
        templateUrl: 'bookstore-home.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], BookstoreHomePage);
export { BookstoreHomePage };
//# sourceMappingURL=bookstore-home.js.map