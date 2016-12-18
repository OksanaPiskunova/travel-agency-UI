import angular from 'angular';

import 'angular-video-background/src/video-background.module';
import 'angular-video-background/src/video-background.css';

import './home.style.css';

import HomeTemplate from './home.template.html';

export default angular.module('app.home', [
    'video-background'
])
.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            template: HomeTemplate
        });
})
.name;
