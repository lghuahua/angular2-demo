import { Component }         from '@angular/core';
import { ErrorService }      from '../services/error.service';
import { UserService }       from '../services/user.service';

@Component({
  selector:    'helloWorld',
  templateUrl: 'components/main/app.html',
  providers: [ErrorService]
})

export class AppComponent {
  informsg = '';
  errortype = 'info';
  constructor(private errorService: ErrorService,
              private service: UserService) {
    errorService.informsg$.subscribe(
      informsg => {
        this.informsg = informsg;
      });
    errorService.type$.subscribe(
      errortype => {
        this.errortype = errortype;
      })
  }

  logout(){
    this.service.logout();
  }
}