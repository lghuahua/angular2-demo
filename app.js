import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'helloWorld',
  templateUrl: './app.html',
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  constructor() {
  }
}