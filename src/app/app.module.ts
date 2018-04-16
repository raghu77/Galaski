import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
//import { Data } from '../provider/data/data';
//import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

//import { LoginPage } from '../pages/login/login';

import { UserDataServiceProvider } from '../providers/user-data-service/user-data-service';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    ProfilePage,
    ForgotPasswordPage
   // LoginPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup,
    ProfilePage,
   ForgotPasswordPage
   // LoginPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataServiceProvider,

  ]
})
export class AppModule {}
