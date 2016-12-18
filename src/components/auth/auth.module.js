import angular from 'angular';

import AuthService from './auth.service.js';
import AuthInterceptor from './auth.interceptor.js';

export default angular.module('app.module.auth', [])
    .service('AuthService', AuthService)
    .service('AuthInterceptor', AuthInterceptor)
    .name;
