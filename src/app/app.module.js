var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { MyBookstoresPage } from '../pages/pages';
import { BookstoresPage } from '../pages/pages';
import { CitiesPage } from '../pages/pages';
import { FeedPage } from '../pages/pages';
import { BookstoreDetailPage, BookstoreHomePage, BookstoreBooksPage } from '../pages/pages';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            MyBookstoresPage,
            CitiesPage,
            FeedPage,
            BookstoresPage,
            BookstoreDetailPage,
            BookstoreHomePage,
            BookstoreBooksPage
        ],
        imports: [
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            MyBookstoresPage,
            CitiesPage,
            FeedPage,
            BookstoresPage,
            BookstoreDetailPage,
            BookstoreHomePage,
            BookstoreBooksPage
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map