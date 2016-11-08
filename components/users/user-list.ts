import { Component, OnInit }                      from '@angular/core';
import { Router }                                 from '@angular/router';
import { Http, Headers, RequestOptions }          from '@angular/http';
import { FormGroup, FormControl, Validators,}     from '@angular/forms';
import { UserService }                            from '../services/user.service';
import { ErrorService }                           from '../services/error.service';

@Component({
  moduleId:    module.id,
  templateUrl: '/components/users/user-list.html',
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
  error: any;
  constructor(private http: Http,
              private router: Router,
              private errorService: ErrorService,
              private service: UserService) {}

  loadUser(){
    this.service.getUsers()
                .then(data => this.users = data)
                .catch(error => this.error = error);
  }

  enableEditing(user) {
    this.isEditing = true;
    this.user = user;
  }

  submitEdit(user) {
    this.service.editUser(user)
                  .then(function(){
                    this.isEditing = false
                    this.errorService.sendInfoMsg("item edited successfully.", "success");
                  })
                  .catch(error => this.error = error);
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.errorService.sendInfoMsg("item editing cancelled.", "warning");
    this.loadUser();
  }

  submitRemove(user) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.service.deleteUser(user)
                  .then(res => {
                    var pos = this.users.map((e) => { return e._id }).indexOf(user._id);
                    this.users.splice(pos, 1);
                    this.errorService.sendInfoMsg("item deleted successfully.", "success");
                  })
                  .catch(error => this.error = error)
    }
  }

  ngOnInit() {
    this.loadUser();
    this.isEditing = false;
  }
}