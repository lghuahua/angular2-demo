import { Injectable, OnInit }                from '@angular/core';
import { Router }                            from '@angular/router';
import { Http, Headers, RequestOptions}      from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthHttp, JwtHelper}                from "angular2-jwt";
import { User }                              from '../users/user.model';


@Injectable()

export class MicropostService {
  token = sessionStorage.getItem('token');
  options = new RequestOptions({ headers: new Headers({
      'Content-Type': "application/json",
      'charset': "UTF-8",
      'x-access-token': this.token})
    });
  constructor(private http: Http){}

  newMicropost(micro){
    return this.http.post("/micropost/new", micro, this.options)
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error.json().message);
  }

  getMicropost(id){
    return this.http.get("/micropost/" + id, this.options)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }

}