"use strict";
require('core-js/es6');
require('zone.js/dist/zone');
require('reflect-metadata');
require('babel-polyfill');
var routes_1 = require('../components/routes');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var user_service_1 = require('../components/services/user.service');
var user_guard_service_1 = require('../components/services/user-guard.service');
// import 'jquery'
global.jQuery = require('jquery');
require('bootstrap');
var components_1 = require('../components/components');
platform_browser_dynamic_1.bootstrap(components_1.AppComponent, [
    routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    user_service_1.UserService,
    user_guard_service_1.UserGuard
]);
