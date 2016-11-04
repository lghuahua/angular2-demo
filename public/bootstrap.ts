import 'core-js/es6';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'babel-polyfill';
import { enableProdMode}      from '@angular/core';
import { platformBrowserDynamic }     from '@angular/platform-browser-dynamic';

// import 'jquery'

global.jQuery = require('jquery');
import 'bootstrap';

import {AppModule} from '../components/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
