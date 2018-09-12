import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import {BookstoreHomePage} from '../pages';
import {HarukiApi} from '../../shared/shared'

/*
  Generated class for the Bookstores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookstores',
  templateUrl: 'bookstores.html'
})
export class BookstoresPage {

  bookstores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HarukiApi: HarukiApi, private loadingController: LoadingController) {}



  ionViewDidLoad() {
    
    let loader = this.loadingController.create({
      content: 'Getting Bookstores'
    });

    loader.present().then(() => {
      this.HarukiApi.getBookstores().then(data => {
        this.bookstores = data;
        loader.dismiss();
      });  
    });
  }

  viewBookstore($event, bookstore) {
  	this.navCtrl.push(BookstoreHomePage, bookstore);
  }

}
