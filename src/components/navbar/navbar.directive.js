import NavbarTemplate from './navbar.template.html';

export default () => {
    return {
        template: NavbarTemplate,
        restrict: 'E',
        controllerAs: 'navbar',
        controller: 'NavbarController'
    };
};
