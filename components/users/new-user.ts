import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { FormGroup, FormControl,
         Validators, FormBuilder }            from '@angular/forms';
import { UserService }                        from '../services/user.service';
import { ErrorService }                       from '../services/error.service';

@Component({
  moduleId: module.id,
  templateUrl: '/components/users/new-user.html',
  providers: [UserService]
})

export class NewUserComponent {
  user = [];
  options = new RequestOptions({ headers: new Headers({
    'Content-Type': "application/json",
    'charset': "UTF-8" })
  });
  adduserform: FormGroup;
  name = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  confirm_password = new FormControl("", Validators.required);
  age = new FormControl("");
  address = new FormControl("");
  infoMsg   = { body: "", type: "info"};
  // 文档中改为 @Inject(FormBuilder) formBuilder: FormBuilder
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
    setTimeout(() => this.errorService.p_informsg(''), time);
  }

  addUser() {
    if(this.adduserform.value.password == this.adduserform.value.confirm_password){
      this.service.addNewUser(JSON.stringify(this.adduserform.value))
                  .then(res => {
                    sessionStorage.setItem('token', res.token);
                    this.sendInfoMsg('注册成功','success');
                    this.service.setCurrentUser(res.userobj);
                    this.router.navigate(['/user',res.userobj.name])
                  })
                  .catch(error => this.sendInfoMsg(error, "warning", 2000))
    } else {
      this.sendInfoMsg("两次输入密码不同", "warning")
    }
  }

}