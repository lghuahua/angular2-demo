import 'core-js/es6';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'babel-polyfill';
import { appRouterProviders }         from '../components/routes'
import {provide, enableProdMode}      from '@angular/core';
import {bootstrap}                    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms,
         provideForms }               from '@angular/forms';
import { HTTP_PROVIDERS }             from '@angular/http';
import { UserService }                from '../components/services/user.service';
import { UserGuard }                  from '../components/services/user-guard.service';

// import 'jquery'

global.jQuery = require('jquery');
import 'bootstrap';


import {AppComponent} from '../components/components';

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  UserService,
  UserGuard
])