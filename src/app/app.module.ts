import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Data } from '../provider/data/data';
//import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { UserDataServiceProvider } from '../providers/user-data-service/user-data-service';
import { ProfilePage } from '../pages/profile/profile';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword'
import { TabPage} from '../pages/tab/tab'
import { CalenderPage } from '../pages/calender/calender';
import { TaskPage } from '../pages/task/task';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    ProfilePage,
    ForgotpasswordPage,
    CalenderPage,
    TabPage,
    TaskPage,
    SettingsPage
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
    ForgotpasswordPage,
    TabPage,
    CalenderPage,
    TaskPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataServiceProvider,
   // Data
  ]
})
export class AppModule {}
