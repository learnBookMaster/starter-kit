import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAnalytics: FirebaseAnalytics) {
    // alert(JSON.stringify(this.firebaseAnalytics));
     //alert(this.firebaseAnalytics.logEvent("page_view",{page: "dashboard"}));

    this.firebaseAnalytics.logEvent('page_view', {page: "dashboard1"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    this.firebaseAnalytics.logEvent('page_view', {page: "dashboard2"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    this.firebaseAnalytics.logEvent('page_view3', {page: "dashboard"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

     this.firebaseAnalytics.logEvent('page_view4', {page: "dashboard1"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

     this.firebaseAnalytics.setCurrentScreen("setCurrentScreenVIPUL")
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logout() {
    firebase.auth().signOut();
  }

}
