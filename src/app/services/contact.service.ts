import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  
    constructor(private http: Http) { }
    myfunction() {
        return http.get('https://jsonprovider.herokuapp.com/posts')
          .map(response => response.json());
      }
    }
