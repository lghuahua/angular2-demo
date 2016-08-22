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
  microposts = [];
  constructor(private router: Router,
              private errorService: ErrorService,
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
    this.loadMicropost(this.user._id)
    // this.user = this.userService.getCurrentUser();
  }

  sendInfoMsg(body, type, time = 3000) {
    this.errorService.p_informsg(body);
    this.errorService.p_type(type);
    setTimeout(() => this.errorService.p_informsg(''), time);
  }

  creatMicropost(){
    this.micropostService.newMicropost(JSON.stringify(this.micropostForm.value))
        .then(res => this.loadMicropost(this.user._id))
        .catch(error => this.sendInfoMsg(error, "warning", 2000))
  }

  loadMicropost(id){
    this.micropostService.getMicropost(id)
                .then(data => this.microposts = data)
                .catch(error => this.sendInfoMsg(error, "warning", 2000));
  }
}
