import angular from 'angular';

import AboutTemplate from './about.template.html';

export default angular.module('app.about', [])
.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('about',{
            url: '/about/',
            template: AboutTemplate
        });
})
.name;
