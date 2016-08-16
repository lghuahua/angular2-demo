import { Injectable, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions}     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';


@Injectable()

export class UserService {
  user = {};
  currentUser = User;
  options = new RequestOptions;
  constructor(private http: Http){
    var userLocal = sessionStorage.getItem('currentUser');
    var token = sessionStorage.getItem('token');
    this.options = new RequestOptions({ headers: new Headers({
      'Content-Type': "application/json",
      'charset': "UTF-8",
      'x-access-token': token})
    });
  }

  getUsers() {
    return this.http.get('/users', this.options)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }

  editUser(user){
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

  addNewUser(user){
    return this.http.post("/users/new-user", user, this.options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getCurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(user){
    sessionStorage.setItem('currentUser',JSON.stringify(user));
    this.currentUser = user;
  }

}