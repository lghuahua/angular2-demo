import { Component, OnInit }                       from '@angular/core';
import { Router, ActivatedRoute, Params}           from '@angular/router';
import { ErrorService }                            from '../services/error.service';
import { UserService }                             from '../services/user.service';
import { User }                                    from './user.model';
import { FormGroup, FormControl, Validators,
  FormBuilder, REACTIVE_FORM_DIRECTIVES }     from '@angular/forms';
import { MicropostService }  from '../services/micropost.service';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [MicropostService]
})

export class UserComponent implements OnInit {
  private user:User = new User();
  name:string;
  micropostForm: FormGroup;
  content = new FormControl("", Validators.required);

  constructor(private router: Router,
              private micropostService: MicropostService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.micropostForm = this.formBuilder.group({
      user_id: this.user._id,
      content: this.content
    });
    // this.user = this.userService.getCurrentUser();
  }

  creatMicropost(){
    this.micropostService.newMicropost(JSON.stringify(this.micropostForm.value))
        .then()
        .catch()

  }
}
