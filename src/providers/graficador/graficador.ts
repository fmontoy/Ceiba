import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Headers,RequestOptions} from '@angular/http';

/*
  Generated class for the GraficadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GraficadorProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello GraficadorProvider Provider');

  }

 
  public get(apiUrl) {
    return new Promise(resolve => {
      this.http.get(apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  public post(data, apiUrl) { 
    return (new Promise((resolve, reject) => {
    this.http.post(apiUrl, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }));
  }

}
