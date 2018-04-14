import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Signup } from '../signup/signup';
import { ProfilePage } from '../profile/profile';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

token: String;
email: any;
password: any;

constructor(public navCtrl: NavController,
            public http: Http, 
            public alertCtrl: AlertController,
            public userService : UserDataServiceProvider) {}

  myFunction() {
    this.navCtrl.push(Signup);
  }

  dataValid() {
    let userData = {
      'email' : this.email
    }

    this.userService.login(userData).subscribe(
      data => {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(data.name));
          sessionStorage.setItem('user',userData.email)
          this.navCtrl.push(ProfilePage);
      },
      err => {
          console.log(err);
      }
    );
  }
}

     
  


