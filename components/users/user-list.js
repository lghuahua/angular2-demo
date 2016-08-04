import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';


@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user-list.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class UserListComponent {
  users = [];
  user = {};
  options = new RequestOptions({ headers: new Headers({
    'Content-Type': "application/json",
    'charset': "UTF-8" })
  });
  isEditing = false;
  infoMsg = { body: "", type: "info"};
  constructor(http: Http, formBuilder: FormBuilder, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.http.get('/users').map(res => res.json()).subscribe(
      data => this.users =data,
      error => console.log(error)
    );
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

  enableEditing(user) {
    this.isEditing = true;
    this.user = user;
  }

  submitEdit(user) {
    this.http.put("/users/"+user._id, JSON.stringify(user), this.options).subscribe(
      res => {
        this.isEditing = false;
        this.user = user;
        this.sendInfoMsg("item edited successfully.", "success");
      },
      error => console.log(error)
    );
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    this.loadUser();
  }

  submitRemove(user) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.http.delete("/users/"+user._id, this.options).subscribe(
        res => {
          var pos = this.users.map((e) => { return e._id }).indexOf(user._id);
          this.users.splice(pos, 1);
          this.sendInfoMsg("item deleted successfully.", "success");
        },
        error => console.log(error)
      );
    }
  }
}