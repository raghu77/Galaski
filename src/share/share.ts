import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {
     
    username: string;
    email: string;
 
    constructor() {
        this.username = 'Username';
        this.email = 'Email';
    }
  
    setUserName(username, email) {
        this.username = username;
        this.email = email;       
    }
  
    getUserName() {
        return this.username + ' ' + this.email;
    }  
}