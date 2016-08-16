import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import { UserService } from './user.service';
import { ErrorService } from '../error.service';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/new-user.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [UserService]
})

export class NewUserComponent {

  user = [];
  options = new RequestOptions({ headers: new Headers({
    'Content-Type': "application/json",
    'charset': "UTF-8" })
  });
  adduserform: FormGroup;
  id = new FormControl("");
  name = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  confirm_password = new FormControl("", Validators.required);
  age = new FormControl("");
  address = new FormControl("");
  infoMsg   = { body: "", type: "info"};

  constructor(private http: Http,
              private formBuilder: FormBuilder,
              private router: Router,
              private errorService: ErrorService,
              private service: UserService) {
    this.adduserform = formBuilder.group({
      name: this.name,
      password: this.password,
      confirm_password: this.confirm_password,
      age: this.age,
      address: this.address
    });
  }

  sendInfoMsg(body, type, time = 3000) {
    this.errorService.p_informsg(body);
    this.errorService.p_type(type);
    window.setTimeout(() => this.errorService.p_informsg(''), time);
  }

  addUser() {
    if(this.adduserform.value.password == this.adduserform.value.confirm_password){
      this.http.post("/users/new-user", JSON.stringify(this.adduserform.value), this.options).subscribe(
        res => {
          window.sessionStorage.setItem('token', JSON.parse(res._body).token);
          this.sendInfoMsg('注册成功','info');
          this.service.setCurrentUser(JSON.parse(res._body).userobj);
          this.router.navigate(['user'])
        },
        error => {
          this.sendInfoMsg(JSON.parse(error._body).message, "warning")
        }
      );
    } else {
      this.sendInfoMsg("两次输入密码不同", "warning")
    }
  }

}