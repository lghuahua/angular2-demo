import { Injectable, OnInit }      from '@angular/core';
import { Subject }                 from 'rxjs/Subject';


@Injectable()
export class ErrorService {
  private informsg = new Subject<string>();
  private type = new Subject<string>();

  informsg$ = this.informsg.asObservable();
  type$ = this.type.asObservable();

  p_informsg(msg:string){
    this.informsg.next(msg);
  }
  p_type(type:string){
    this.type.next(type);
  }
  sendInfoMsg(body, type, time = 3000) {
    this.p_informsg(body);
    this.p_type(type);
    setTimeout(() => this.p_informsg(''), time);
  }
}