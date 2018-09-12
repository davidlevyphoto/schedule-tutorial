import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { HarukiApi, UserService } from '../../shared/shared';
import {BookstoreHomePage} from '../pages';

/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  favorites = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingController: LoadingController, 
              private userService: UserService,
              private HarukiApi: HarukiApi) {}

  favoriteTapped($event, favorite){
  	let loader = this.loadingController.create({
      content: 'Loading Data...',
      dismissOnPageChange: true
    });

    loader.present();

    this.HarukiApi.getBookstoreData(favorite.id)
    	.subscribe(t => this.navCtrl.push(BookstoreHomePage, favorite));


  }

  ionViewDidEnter(){
    //this.favorites = this.userService.getAllFavorites();
    this.userService.getAllFavorites().then(favs => this.favorites = favs);

    // let loader = this.loadingController.create({
    //   content: 'Loading Favorites...'
    // });

    // loader.present().then(() => {
    //   this.favorites = this.userService.getAllFavorites();
    //   console.log('favs:', this.favorites);
    //   loader.dismiss();
    // });
  }

  // ionViewDidLoad() {
  //   let loader = this.loadingController.create({
  //     content: 'Loading Favorites...'
  //   });

  //   loader.present().then(() => {
  //     this.HarukiApi.getBookstores().then(data => {
  //       this.favorites = data;
  //       loader.dismiss();
  //     });  
  //   });
  // }

}
