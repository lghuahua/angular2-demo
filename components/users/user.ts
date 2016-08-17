import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { ErrorService } from '../error.service';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html'
})

export class UserComponent implements OnInit{
  private user:User = new User();
  constructor(){}

  ngOnInit(){
    this.user = JSON.parse(sessionStorage.getItem('currentUser'))
  }
}
