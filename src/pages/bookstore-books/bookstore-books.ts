import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { HarukiApi } from '../../shared/shared';

/*
  Generated class for the BookstoreBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookstore-books',
  templateUrl: 'bookstore-books.html'
})
export class BookstoreBooksPage {

  books = [];

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private loadingController: LoadingController,
  				private harukiApi: HarukiApi) {}

  ionViewDidLoad() {
    let selectedBookstore = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting Books...'
    });

    loader.present().then(() => {
		this.harukiApi.getBookstoreData(selectedBookstore.id).subscribe( data => {
	    	this.books = data.bookstore.books;
	    	loader.dismiss();
	    });
    });
    
  }

}
