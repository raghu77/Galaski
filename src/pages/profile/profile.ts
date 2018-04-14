import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform} from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 user : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.user=sessionStorage.getItem('user')
    
  }
  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');
  // }

}
