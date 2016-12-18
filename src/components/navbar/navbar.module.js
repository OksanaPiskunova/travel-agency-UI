import angular from 'angular';

import './navbar.style.css';

import NavbarDirective from './navbar.directive.js';
import NavbarController from './navbar.controller.js';

export default angular.module('app.module.navbar', [])
  .directive('navbar', NavbarDirective)
  .controller('NavbarController', NavbarController)
  .name;
