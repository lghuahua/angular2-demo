import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { UserService }            from './user.service';


@Injectable()
export class UserGuard implements CanActivate{
  constructor(private userService: UserService, private router: Router){}
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let name = route.params['name']
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    if(currentUser && name == currentUser.name){
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }


}