import { Injectable, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions}     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import {AuthHttp, JwtHelper} from "angular2-jwt";

import { User } from './user.model';


@Injectable()

export class UserService {
  currentUser:User = new User();
  options = new RequestOptions;
  private _jwtHelper:JwtHelper = new JwtHelper();
  constructor(private http: Http){
    let userLocal = sessionStorage.getItem('currentUser');
    let token = sessionStorage.getItem('token');
    this.options = new RequestOptions({ headers: new Headers({
      'Content-Type': "application/json",
      'charset': "UTF-8",
      'x-access-token': token})
    });
    if(userLocal && token){
      let currentUser = JSON.parse(userLocal);
      let decode = this._jwtHelper.decodeToken(token);
      if(currentUser._id != decode.id){
        sessionStorage.removeItem('currentUser');
        return;
      }
      userLocal = JSON.parse(userLocal);
      this.currentUser = userLocal;
    }
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