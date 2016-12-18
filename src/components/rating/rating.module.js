import angular from 'angular';

import RatingDirective from './rating.directive.js';

export default angular.module('app.module.rating', [])
    .directive('rating', RatingDirective)
    .name;
