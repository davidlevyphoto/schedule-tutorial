import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookstoreHomePage} from '../pages';

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

  bookstores = [
  	{ id: 1, name: 'The Last Bookstore'},
  	{ id: 2, name: 'Skylight Books'},
  	{ id: 3, name: 'Chevalier Books'},
  	{ id: 4, name: 'Hennessey &amp; Ingalls'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}



  ionViewDidLoad() {
    console.log('ionViewDidLoad BookstoresPage');
  }

  viewBookstore($event, bookstore) {
  	this.navCtrl.push(BookstoreHomePage, bookstore);
  }

}
