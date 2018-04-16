import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup implements OnInit {

 registerForm : FormGroup;

  constructor(public userService: UserDataServiceProvider, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required]),Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmpassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  
  register(value:any) {
    if(this.registerForm.valid) {
      let userData = {
        'name': value.userName,
        'email': value.email,
        'password': value.password,
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
}

