import { Component, OnInit }                       from '@angular/core';
import { Router, ActivatedRoute, Params}           from '@angular/router';
import { ErrorService }                            from '../services/error.service';
import { UserService }                             from '../services/user.service';
import { User }                                    from './user.model';


@Component({
  moduleId: module.id,
  templateUrl: 'components/users/user.html'
})

export class UserComponent{
  private user:User = new User();
  name:string;
  constructor(private router: Router,
              private route: ActivatedRoute){
    route.params.forEach((params:Params) => {
      name = params['name']
    })
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    if(currentUser && name == currentUser.name  && currentUser != 'undefined'){
      this.user = currentUser
    } else {
      router.navigate(['/login'])
    }
  }
}
