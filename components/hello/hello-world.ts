import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { UserService }   from '../services/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'components/hello/hello-world.html',
  providers: [UserService]
})

export class HelloWorldComponent {
  constructor(private router: Router, private service: UserService) {
    let currentuser = this.service.getCurrentUser()
    if(currentuser.name){
      this.router.navigate(['user', currentuser.name])
    }
  }

  login() {
    this.router.navigate(['login'])
  }
}
