import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CitiesPage } from '../pages';

/*
  Generated class for the MyBookstores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-bookstores',
  templateUrl: 'my-bookstores.html'
})
export class MyBookstoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBookstoresPage');
  }

  goToCities(){
  	this.navCtrl.push(CitiesPage);
  }

}
