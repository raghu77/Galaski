// import { Validators, FormGroup, FormControl,FormBuilder,NgForm  } from '@angular/forms';
// import { Component } from "@angular/core";
// import {  Control, ControlGroup } from '@angular/common';  
// import { NavController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';

// /**
//  * Generated class for the LoginPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',  

// })
// export class LoginPage {
//   loginForm: ControlGroup;

//   constructor(
//     private nav: NavController,
//     builder: FormBuilder,
//     public alertController: AlertController,public controlGroup:ControlGroup ) {
//     this.loginForm = builder.group({
//       'username': [
//         '', // default value
//         Validators.compose([Validators.required, Validators.minLength(5)])
//       ],
//       'password': [
//         '',
//         Validators.compose([Validators.required, Validators.minLength(5)])
//       ]
//     });
//   }

//   validate(): boolean {
//     if (this.loginForm.valid) {
//       return true;
//     }

//     // figure out the error message
//     let errorMsg = '';

//     // validate each field
//     let control = this.loginForm.controls['username'];
//     if (!control.valid) {
//       if (control.errors['required']) {
//         errorMsg = 'Provide a username please';
//       } else if (control.errors['minlength']) {
//         errorMsg = 'The username must have at least 5 characters';
//       }
//     }
//     // validate password ...

//     let alert = this.alertController.create({
//       //title: 'Error!',
//       subTitle: errorMsg || 'Empty error message!',
//       buttons: ['OK']
//     });
//     alert.present();

//     return false;
//   }

//   submit(): void {
//     if (this.validate()) {
//       // process the data
//     }
//   }
// }