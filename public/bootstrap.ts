import 'zone.js';
import 'reflect-metadata';
import 'babel-polyfill';
import { appRouterProviders } from '../components/routes'
import {provide, enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms }      from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
// import 'jquery'

global.jQuery = require('jquery');
import 'bootstrap';


import {AppComponent} from '../components/components';

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
])