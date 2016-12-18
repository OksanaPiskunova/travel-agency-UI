import angular from 'angular';

import './tours.style.css';

import ToursTemplate from './tours.template.html';
import ToursController from './tours.controller.js';

export default angular.module('app.tours', [])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('tours', {
                url: '/tours/',
                template: ToursTemplate,
                controller: ToursController,
                controllerAs: 'tours'
            });
    })
    .name;
