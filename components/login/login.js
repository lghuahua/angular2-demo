import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import {  Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  templateUrl: 'components/login/login.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class LoginComponent implements OnInit {
  user = [];
  options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' }) });
	infoMsg = { body: "", type: "info"};
  userform: FormGroup;
  name = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  constructor(http: Http, formBuilder: FormBuilder, router: Router) {
    this.userform = formBuilder.group({
      name: this.name,
      password: this.password
    });
    this.http = http;
    this.router = router
  }

  // sendInfoMsg(body, type, time = 3000) {
  //   this.infoMsg.body = body;
  //   this.infoMsg.type = type;
  //   window.setTimeout(() => this.infoMsg.body = "", time);
  // }

  login() {
    var router = this.router
    this.http.post("/users/login", JSON.stringify(this.userform.value), this.options).subscribe(
      res => {
        router.navigate(['list'])
        // this.user.push(res.json()); // the response contains the new item
        // this.sendInfoMsg("item login successfully.", "success");
        // TODO: reset the form here
      },
      error => console.log(error)
    );
  }

  newUser() {
    this.router.navigate(['new_user'])
  }
}
