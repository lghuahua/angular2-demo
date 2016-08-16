import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { ErrorService } from '../error.service';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html',
  providers: [UserService]
})

export class UserComponent implements OnInit{
  constructor(private http: Http,
              private router: Router,
              private errorService: ErrorService,
              private service: UserService){}
  user = {};

  ngOnInit(){
    this.user = this.service.getCurrentUser();
  }

}
