import 'zone.js';
import 'reflect-metadata';
import 'babel-polyfill';
import { appRouterProviders } from './routes'
import {provide, enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms }      from '@angular/forms';

import {AppComponent} from './app';

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
])