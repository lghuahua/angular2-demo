import { Component, OnInit }                       from '@angular/core';
import { Router }                                  from '@angular/router';
import { ROUTER_DIRECTIVES, RouteParams }          from '@angular/router-deprecated';
import { ErrorService }                            from '../services/error.service';
import { UserService }                             from '../services/user.service';
import { User }                                    from './user.model';

@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html',
  directives:[ROUTER_DIRECTIVES]
})

export class UserComponent implements OnInit{
  private user:User = new User();
  constructor(private router: Router){}

  ngOnInit(){
    // let name = this._params.get('name')
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    if(currentUser && currentUser != 'undefined'){
      this.user = currentUser
    } else {
      this.router.navigate(['home'])
    }
  }
}
