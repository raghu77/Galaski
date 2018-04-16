import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service';
import { ToastController } from 'ionic-angular'


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
 userName: any;
 email: any;
 password: any;
 confirmPassword: any;
 
  constructor(public userService : UserDataServiceProvider, private toastCtrl: ToastController) { }
    register(){

      let userData = {
        'name' : this.userName,
        'email' : this.email,
        'password' : this.password,
        
      }
  
      this.userService.registration(userData).subscribe(
        data => {
            console.log(data);
            let toast = this.toastCtrl.create({
              message: 'User was added successfully',
              duration: 3000,
              position: 'bottom'
            });
          
            // toast.onDidDismiss(() => {
            //   console.log('Dismissed toast');
            // });
          
            toast.present();

        },
        err => {
            console.log(err);
        }
      );
    }
  }
  
