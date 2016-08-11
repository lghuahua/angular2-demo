import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import { UserService } from './user.service';

@Component({
  moduleId:    module.id,
  templateUrl: 'components/users/user-list.html',
  directives:  [REACTIVE_FORM_DIRECTIVES],
  providers: [UserService]
})

export class UserListComponent implements OnInit{
  users = [];
  user  = {};
  options = new RequestOptions({ headers: new Headers({
    'Content-Type': "application/json",
    'charset': "UTF-8" })
  });
  isEditing = false;
  infoMsg   = { body: "", type: "info"};
  error: any;
  constructor(private http: Http,
              private formBuilder: FormBuilder,
              private router: Router,
              private service: UserService) {}

  loadUser(){
    this.service.getUsers()
                .then(data => this.users = data)
                .catch(error => this.error = error);
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
    this.service.editUser(user)
                  .then(function(){
                    this.isEditing = false
                    this.sendInfoMsg("item edited successfully.", "success");
                  })
                  .catch(error => this.error = error);
  }

  // submitEdit(user) {
  //   this.http.put("/users/"+user._id, JSON.stringify(user), this.options).subscribe(
  //     res => {
  //       this.isEditing = false;
  //       this.user = user;
  //       this.sendInfoMsg("item edited successfully.", "success");
  //     },
  //     error => console.log(error)
  //   );
  // }

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

  ngOnInit() {
    this.loadUser();
    this.isEditing = false;
  }
}