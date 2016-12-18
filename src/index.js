import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/main.style.css';

//import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import HomePage from './app/home/home.module.js';

angular.module('app', [
    uirouter,

    HomePage,
], ($urlRouterProvider, $locationProvider, $httpProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    //$httpProvider.interceptors.push('AuthInterceptor');
});
