import { Component } from '@angular/core';
import { ToastController, AlertController, NavController, NavParams } from 'ionic-angular';
import { HarukiApi, UserService } from '../../shared/shared';
import { Geolocation } from 'ionic-native';
declare var window:any;

/*
  Generated class for the BookstoreDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'bookstore-detail.html'
})
export class BookstoreDetailPage {

  map: any = {};
  location = {};
  bookstore: any = {};
  isFollowing = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private harukiApi: HarukiApi,
              private alertController: AlertController,
              private toastController: ToastController,
              private userService: UserService){

  	 this.bookstore = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookstoreDetailPage');
    this.userService.isFavoriteBookstore(this.bookstore.id).then(value => this.isFollowing = value);
    /* COMMENTING SINCE I HAVE THE BOOKSTORE INFORMATION ALREADY LOADED
    let selectedBookstore = this.navParams.data;
    this.harukiApi.getBookstoreData(selectedBookstore.id).subscribe(data => {
      //this.bookstore = data;
      //console.log(data);
      
    });
    */

    let location = this.bookstore.geometry.location;

    this.map = {
      lat: location.lat,
      lng: location.lng,
      zoom: 12,
      markerLabel: this.bookstore.name
    };

    this.getGeolocation();
  }

  toggleFollow(){
    if (this.isFollowing) {
      let confirm = this.alertController.create({
        title: 'Unfollow?',
        message: 'Are you sure you want to unfollow ' + this.bookstore.name + '?', 
        buttons: [
            {
              text: 'Yes',
              handler: () => {
                this.isFollowing = false;
                this.userService.unfavoriteBookstore(this.bookstore);

                let toast = this.toastController.create({
                  message: 'You have unfollowed this bookstore.',
                  duration: 2000,
                  position: 'bottom'
                });
                toast.present(); 
              }
            },
            { text: 'No' }
          ]
        });
        confirm.present();
      } else {
        this.isFollowing = true;
        this.userService.favoriteBookstore(this.bookstore);
      }
    }

    goToDirections(){
      let location = this.bookstore.geometry.location;
      window.location = `geo:${location.lat},${location.lng};u=35;`;
    } 

    goToMap(){

    }

    getGeolocation(){
      Geolocation.getCurrentPosition().then((resp) => {
          this.location = {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          };
          console.log(this.location);
        });
    }


}
