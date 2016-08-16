import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ErrorService } from '../error.service';

@Component({
  selector:    'helloWorld',
  templateUrl: 'components/main/app.html',
  directives:  [ROUTER_DIRECTIVES],
  providers: [ErrorService]
})

export class AppComponent {
  informsg = '';
  errortype = 'info';
  constructor(private errorService: ErrorService) {
    errorService.informsg$.subscribe(
      informsg => {
        this.informsg = informsg;
      });
    errorService.type$.subscribe(
      errortype => {
        this.errortype = errortype;
      })
  }

}