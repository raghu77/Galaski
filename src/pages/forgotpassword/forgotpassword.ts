import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Signup } from '../signup/signup';
import { ProfilePage } from '../profile/profile';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HomePage } from '../home/home'
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage implements OnInit {

  forgotpasswordForm: FormGroup;
  
  constructor(public navCtrl: NavController,
    public http: Http, 
    public alertCtrl: AlertController,
    public userService : UserDataServiceProvider,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {  
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ForgotpasswordPage');
  // }

  forgot(value: any): void { 
    if(this.forgotpasswordForm.valid) {
      let userData = {
        'email' : value.email
      }
      this.userService.forgot(userData).subscribe(
        data => {
            this.navCtrl.push(HomePage);
        },
        err => {
            console.log(err);
        }
      );
    }
  }

}
