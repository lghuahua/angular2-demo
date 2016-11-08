import { Component, OnInit, Inject }            from '@angular/core';
import { Router, ActivatedRoute, Params}        from '@angular/router';
import { ErrorService }                         from '../services/error.service';
import { UserService }                          from '../services/user.service';
import { User }                                 from './user.model';
import { FormGroup, FormControl,
        Validators, FormBuilder }               from '@angular/forms';
import { MicropostService }                     from '../services/micropost.service';

@Component({
  moduleId: module.id,
  templateUrl: '/components/users/user.html',
  providers: [MicropostService]
})

export class UserComponent implements OnInit {
  private user:User = new User();
  name:string;
  micropostForm: FormGroup;
  content = new FormControl("", Validators.required);
  microposts = [];
  constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
              private router: Router,
              private errorService: ErrorService,
              private micropostService: MicropostService,
              private userService: UserService,
              private route: ActivatedRoute){
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.micropostForm = formBuilder.group({
      user_id: this.user._id,
      content: this.content
    });
  }

  ngOnInit(){
    this.loadMicropost(this.user._id)
  }

  creatMicropost(){
    this.micropostService.newMicropost(JSON.stringify(this.micropostForm.value))
        .then(res => this.loadMicropost(this.user._id))
        .catch(error => this.errorService.sendInfoMsg(error, "warning", 2000))
    this.micropostForm.value.content = ''
  }

  loadMicropost(id){
    this.micropostService.getMicropost(id)
                .then(data => this.microposts = data)
                .catch(error => this.errorService.sendInfoMsg(error, "warning", 2000));
  }
}
