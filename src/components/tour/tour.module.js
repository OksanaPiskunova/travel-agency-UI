import angular from 'angular';

import './tour.style.css';

import TourDirective from './tour.directive.js';

export default angular.module('app.module.tour', [])
    .directive('tour', TourDirective)
    //.controller('TourController', TourController)
    .name;
