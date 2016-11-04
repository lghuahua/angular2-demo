"use strict";
require('core-js/es6');
require('zone.js/dist/zone');
require('reflect-metadata');
require('babel-polyfill');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// import 'jquery'
global.jQuery = require('jquery');
require('bootstrap');
var app_module_1 = require('../components/app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
