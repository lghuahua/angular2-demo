"use strict";
require('zone.js');
require('reflect-metadata');
require('babel-polyfill');
var routes_1 = require('../components/routes');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var components_1 = require('../components/components');
platform_browser_dynamic_1.bootstrap(components_1.AppComponent, [
    routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS
]);
