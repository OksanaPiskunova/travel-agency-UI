import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/main.style.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import resource from 'angular-resource';
import uib from 'angular-ui-bootstrap';
import ngMap from 'ngmap';
import messages from 'angular-messages';
import formly from 'angular-formly/dist/formly.min.js';
import formlyBootstrap from 'angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js';

import Navbar from './components/navbar/navbar.module.js';
import Footer from './components/footer/footer.module.js';
import Tour from './components/tour/tour.module.js';
import Auth from './components/auth/auth.module.js';
import Rating from './components/rating/rating.module.js';

import HomePage from './app/home/home.module.js';
import ToursPage from './app/tours/tours.module.js';
import TourPage from './app/tours/tour/tour.module.js';
import AboutPage from './app/about/about.module.js';
import AccountPage from './app/account/account.module.js';

angular.module('app', [
    uirouter,
    resource,
    uib,
    ngMap,
    messages,
    formly,
    formlyBootstrap,

    Navbar,
    Footer,
    Tour,
    Auth,
    Rating,

    HomePage,
    ToursPage,
    TourPage,
    AboutPage,
    AccountPage
], ($urlRouterProvider, $locationProvider, $httpProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    //$httpProvider.interceptors.push('AuthInterceptor');
})
    .config(($httpProvider) => {
        //$httpProvider.interceptors.push('AuthInterceptor');
    })
    .run((AuthService) => {
        'ngInject';

        const token = AuthService.getToken();

        if (token) {
            AuthService.setCurrentUserByToken(token);
        }
    });
