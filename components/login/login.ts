import { Component }                    from '@angular/core';
import { Router }                               from '@angular/router';
import {  Http, Headers, RequestOptions }       from '@angular/http';
import { FormGroup, FormControl, Validators,
 FormBuilder, REACTIVE_FORM_DIRECTIVES }        from '@angular/forms';
import { UserService } from '../services/user.service';
import { ErrorService } from '../services/error.service';

@Component({
  moduleId:    module.id,
  templateUrl: 'components/login/login.html',
  directives:  [REACTIVE_FORM_DIRECTIVES],
  providers: [UserService]
})

export class LoginComponent {
  user = [];
  token = window.sessionStorage.getItem('token');
  options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8', 'x-access-token':this.token }) });
	infoMsg = { body: "", type: "info"};
  userform: FormGroup;
  name     = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  constructor(private http: Http,
              private formBuilder: FormBuilder,
              private service: UserService,
              private errorService: ErrorService,
              private router: Router) {
    this.userform = formBuilder.group({
      name:     this.name,
      password: this.password
    });
  }

  login() {
    this.service.login(JSON.stringify(this.userform.value))
                .then(res => {
                  sessionStorage.setItem('token', res.token);
                  this.service.setCurrentUser(res.userobj);
                  this.router.navigate(['user'])
                })
                .catch(error => this.sendInfoMsg(error, "warning", 2000))
  }

  sendInfoMsg(body, type, time = 3000) {
    this.errorService.p_informsg(body);
    this.errorService.p_type(type);
    setTimeout(() => this.errorService.p_informsg(''), time);
  }

  newUser() {
    this.router.navigate(['new_user'])
  }
}
