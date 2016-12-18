import angular from 'angular';

import AccountTemplate from './account.template.html';
import AccountController from './account.controller.js';

export default angular.module('app.account', [])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
        .state('account', {
            url: '/account/',
            template: AccountTemplate,
            controller: AccountController,
            controllerAs: 'account'
        });
    })
    .name;
