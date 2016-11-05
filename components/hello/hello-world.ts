import { Component }     from '@angular/core';
import { Router }        from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'hello-world.html'
})

export class HelloWorldComponent {
  constructor(private router: Router) {
  }

  login() {
    this.router.navigate(['login'])
  }
}
