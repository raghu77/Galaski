import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {
 
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('Project'); 
  }
 
  save(data){
    this.storage.set('Project', data);
  }
 
}