import { Injectable, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers}     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UserService {
  user = {};
  constructor(private http: Http){
  }


  getUsers() {
    return this.http.get('/users')
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }

  editUser(user: user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `/users/${user._id}`
    return this.http.put(url, JSON.stringify(user), {headers: headers})
               . toPromise()
               .then(response => response.statusText)
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}