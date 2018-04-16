import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Signup } from '../signup/signup';
import { ProfilePage } from '../profile/profile';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword'
import { TabPage } from '../tab/tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

loginForm: FormGroup;
constructor(public navCtrl: NavController,
            public http: Http, 
            public alertCtrl: AlertController,
            public userService : UserDataServiceProvider,
            public formBuilder: FormBuilder) {
              
}
ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
  });
}


  myFunction() {
    this.navCtrl.push(Signup);
  }

  login(value: any): void { 
    if(this.loginForm.valid) {
      let userData = {
        'email' : value.email
      }

      this.userService.login(userData).subscribe(
        data => {
            // console.log(JSON.stringify(data));
            // console.log(JSON.stringify(data.name));
            sessionStorage.setItem('user',userData.email)
            this.navCtrl.push(TabPage);
        },
        err => {
            console.log(err);
        }
      );
    }
  }
  forget() {
    this.navCtrl.push(ForgotpasswordPage);
  }
}

     
  


