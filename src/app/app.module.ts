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

@NgModule({
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
