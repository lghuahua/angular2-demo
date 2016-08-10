import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import {  Http, Headers, RequestOptions }     from '@angular/http';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/new-user.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
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
  age = new FormControl("");
  address = new FormControl("");

  constructor(private http: Http, private formBuilder: FormBuilder, private router: Router) {
    this.adduserform = formBuilder.group({
      id: this.id,
      name: this.name,
      password: this.password,
      age: this.age,
      address: this.address
    });
    // this.http = http;
    // this.router = router
  }
  addUser() {
    var router = this.router
    this.http.post("/users/new-user", JSON.stringify(this.adduserform.value), this.options).subscribe(
      res => {
        router.navigate(['list'])
      },
      error => console.log(error)
    );
  }

}