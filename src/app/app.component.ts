import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//import { MyBookstoresPage } from '../pages/pages';
import { FeedPage } from '../pages/pages';
import { CitiesPage } from '../pages/pages';
import { BookstoresPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FeedPage;

  constructor(public platform: Platform) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // Splashscreen.hide();
    });
  }

  goToBookstores(){
    this.nav.push(BookstoresPage)
  }

  goToCities(){
    this.nav.push(CitiesPage);
  }

  goHome(){
    this.nav.push(FeedPage);
  }
}
