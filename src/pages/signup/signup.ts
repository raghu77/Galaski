import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
 userName: any;
 email: any;
 password: any;
 confirmPassword: any;
 
  constructor(public userService : UserDataServiceProvider) { }
    register(){

      let userData = {
        'name' : this.userName,
        'email' : this.email,
        'password' : this.password,
      }
  
      this.userService.registration(userData).subscribe(
        data => {
            console.log(data);
        },
        err => {
            console.log(err);
        }
      );
    }
  }
  
