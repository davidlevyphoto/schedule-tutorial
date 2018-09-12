import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookstoreDetailPage, BookstoreBooksPage} from '../pages';

/*
  Generated class for the BookstoreHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookstore-home',
  templateUrl: 'bookstore-home.html'
})
export class BookstoreHomePage {
  bookstore: any;
  bookstoreDetailTab = BookstoreDetailPage;
  bookstoreBooksTab = BookstoreBooksPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.bookstore = this.navParams.data;
  	//console.log("**bookstore:", this.bookstore);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookstoreHomePage');
  }

}
