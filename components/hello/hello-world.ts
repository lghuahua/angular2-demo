import { Component }     from '@angular/core';
import { Router }        from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'components/hello/hello-world.html'
})

export class HelloWorldComponent {
  constructor(private router: Router) {
  }

  login() {
    this.router.navigate(['login'])
  }
}
