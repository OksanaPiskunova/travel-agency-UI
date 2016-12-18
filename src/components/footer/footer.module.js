import angular from 'angular';

import './footer.style.css';

import FooterDirective from './footer.directive.js';

export default angular.module('app.module.footer', [])
    .directive('myfooter', FooterDirective)
    .name;
