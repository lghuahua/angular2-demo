import { Component }                    from '@angular/core';
import { Router }                               from '@angular/router';
import {  Http, Headers, RequestOptions }       from '@angular/http';
import { FormGroup, FormControl, Validators,
 FormBuilder, REACTIVE_FORM_DIRECTIVES }        from '@angular/forms';

@Component({
  moduleId:    module.id,
  templateUrl: 'components/login/login.html',
  directives:  [REACTIVE_FORM_DIRECTIVES]
})

export class LoginComponent {
  user = [];
  options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' }) });
	infoMsg = { body: "", type: "info"};
  userform: FormGroup;
  name     = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  constructor(private http: Http, private formBuilder: FormBuilder, private router: Router) {
    this.userform = formBuilder.group({
      name:     this.name,
      password: this.password
    });
  }

  login() {
    this.http.post("/users/login", JSON.stringify(this.userform.value), this.options).subscribe(
      res => {
        console.log(JSON.parse(res._body).token);
        this.router.navigate(['list'])
      },
      error => console.log(error)
    );
  }

  newUser() {
    this.router.navigate(['new_user'])
  }
}