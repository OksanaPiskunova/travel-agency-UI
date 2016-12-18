import angular from 'angular';

import './tour.style.css';

import TourTemplate from './tour.template.html';
import TourController from './tour.controller.js';

export default angular.module('app.tours.tour', [])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('tour', {
                url: '/tours/{id:int}',
                template: TourTemplate,
                controller: TourController,
                controllerAs: 'tour'
            });
    })
    .name;
