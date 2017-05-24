import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BookstoreDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookstore-detail',
  templateUrl: 'bookstore-detail.html'
})
export class BookstoreDetailPage {


  bookstore: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.bookstore = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookstoreDetailPage');
  }

}
