import { Component, OnInit }                       from '@angular/core';
import { Router, ActivatedRoute, Params}           from '@angular/router';
import { ErrorService }                            from '../services/error.service';
import { UserService }                             from '../services/user.service';
import { User }                                    from './user.model';


@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html'
})

export class UserComponent implements OnInit {
  private user:User = new User();
  name:string;
  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute){}

  ngOnInit(){
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    // this.user = this.userService.getCurrentUser();
  }
}
