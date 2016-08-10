import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector:    'helloWorld',
  templateUrl: 'components/main/app.html',
  directives:  [ROUTER_DIRECTIVES]
})

export class AppComponent {
  constructor() {
  }
}