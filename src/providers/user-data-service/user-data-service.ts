import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataServiceProvider {
  token: String;
  email: any;
  password: any;
  constructor(public http: Http) {

    this.http.get('https://appshostosi.com/devapi/appConfig').map(res => res.json()).subscribe(value => {
      var headers: Headers = new Headers();
      headers.set("id", value.appConfig.authConfig.id);
      headers.set("secret", value.appConfig.authConfig.secret);
      headers.set('Content-type', 'application/json')

      let options = new RequestOptions({
        headers: headers
      });

      this.http.get('https://appshostosi.com/devapi/auth/token', options).map(res => res.json()).subscribe(value => {
        console.log(value.token);
        this.token = value.token;
      });
    });
    
  }


  login(userdata) {
    alert(JSON.stringify(userdata))
    var headers: Headers = new Headers();
    headers.set("authorization", "Bearer " + this.token);

    let body = new FormData();
    body.append('email', userdata.email);
    body.append('mode', "socialMedia");
    body.append('type', "signIn");
    body.append("deviceId", "7193B120-5E28-4DEE-8FBB-25936ECD10AA");

    let options = new RequestOptions({
      headers: headers
    });

    var url = 'https://appshostosi.com/devapi/users';
    var response = this.http.put(url, body, options).map(res => res.json());
    return response;
  }

  registration(userdata) {
    var headers: Headers = new Headers();
    headers.set("authorization", "Bearer " + this.token);

    let body = new FormData();
    body.append('name', userdata.email);
    body.append('email', userdata.email);
    body.append('password', userdata.email);
    body.append('mode', "email");
    body.append('type', "signup");
    body.append("deviceId", "7193B120-5E28-4DEE-8FBB-25936ECD10AA");
    // let body = new FormData();
    // body.append('email', userdata.userName);
    // body.append('email', userdata.email);
    // body.append('email', userdata.email);
    // body.append('email', userdata.email);
    
    // body.append('mode', "email");
    // body.append('type', "signup");
    // body.append("deviceId", "7193B120-5E28-4DEE-8FBB-25936ECD10AA");

    let options = new RequestOptions({
      headers: headers
    });

    var url = 'https://appshostosi.com/devapi/users';
    var response = this.http.post(url, body, options).map(res => res.json());
    return response;
  }
}

