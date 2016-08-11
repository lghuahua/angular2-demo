"use strict";
require('zone.js');
require('reflect-metadata');
require('babel-polyfill');
var routes_1 = require('../components/routes');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var components_1 = require('../components/components');
platform_browser_dynamic_1.bootstrap(components_1.AppComponent, [
    routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    core_1.provide(angular2_jwt_1.AuthHttp, { useFactory: function () {
            return new angular2_jwt_1.AuthHttp();
        } })
]);
