// import 'babel-polyfill';
import { RouterModule }   from '@angular/router';
import { enableProdMode, NgModule }            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing }                             from './routes'
import { ErrorService }                        from './services/error.service';
import { UserService }                         from './services/user.service';
import { UserGuard }                           from './services/user-guard.service';
import {AppComponent}                          from './components';
import { HelloWorldComponent,
  LoginComponent,
  NewUserComponent,
  UserListComponent,
  UserComponent}                               from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    NewUserComponent,
    UserListComponent,
    UserComponent
  ],
  providers: [ UserService, UserGuard, ErrorService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}