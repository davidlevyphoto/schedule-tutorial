var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
var HarukiApi = (function () {
    function HarukiApi(http) {
        this.http = http;
        this.baseUrl = 'https://schedule-tutorial-30cd8.firebaseio.com/';
        this.currentBookstore = {};
    }
    HarukiApi.prototype.getBookstores = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/bookstores.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    HarukiApi.prototype.getBookstoreDetails = function (bookstoreId) {
        var _this = this;
        return this.http.get(this.baseUrl + "/bookstores.json?orderBy=\"id\"&equalTo=\"" + bookstoreId + "\"")
            .map(function (response) {
            _this.currentBookstore = response.json();
            return _this.currentBookstore;
        });
    };
    HarukiApi.prototype.getBookstoreData = function (bookstoreId) {
        var _this = this;
        return this.http.get(this.baseUrl + "/bookstores-data/" + bookstoreId + ".json")
            .map(function (response) {
            _this.currentBookstore = response.json();
            return _this.currentBookstore;
        });
    };
    return HarukiApi;
}());
HarukiApi = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HarukiApi);
export { HarukiApi };
//# sourceMappingURL=haruki-api.service.js.map