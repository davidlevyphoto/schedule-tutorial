import { Component, ViewChild } from '@angular/core';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HttpModule } from '@angular/http';

//import { MyBookstoresPage } from '../pages/pages';
import { HarukiApi, UserService } from '../shared/shared';
import { FeedPage } from '../pages/pages';
import { CitiesPage } from '../pages/pages';
import { BookstoresPage } from '../pages/pages';
import { BookstoreHomePage } from '../pages/pages';


@Component({
  templateUrl: 'app.html',
  providers: [
    HarukiApi,
    UserService,
    HttpModule
  ]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any //= FeedPage;

  favoriteBookstores: any[];

  constructor(public platform: Platform, 
              private userService: UserService, 
              private loadingController: LoadingController,
              private harukiApi: HarukiApi,
              private events: Events) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.userService.initStorage().then(() => {
        this.rootPage = FeedPage;
        this.refreshFavorites();
        this.events.subscribe('favorites:changed', () => this.refreshFavorites());
      });

      // Splashscreen.hide();
    });
  }

  refreshFavorites(){
    //this.favoriteBookstores = this.userService.getAllFavorites();
    this.userService.getAllFavorites().then(favs => this.favoriteBookstores = favs);
  }


  // goToTeam(favorite){
  //   let loader = this.loadingController.create({
  //       content: 'Getting data...',
  //       dismissOnPageChange: true
  //   });
  //   loader.present();
  //   this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  // }

  goToBookstores(){
    this.nav.push(BookstoresPage)
  }

  goToBookstore(bookstore){
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });

    loader.present();
    this.harukiApi.getBookstoreDetails(bookstore.id).subscribe(l => this.nav.push(BookstoreHomePage, bookstore));

  }

  goToCities(){
    this.nav.push(CitiesPage);
  }

  goHome(){
    this.nav.push(FeedPage);
  }
}
