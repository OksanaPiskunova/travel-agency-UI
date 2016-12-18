import TourTemplate from './tour.template.html';

export default () => ({
    template: TourTemplate,
    restrict: 'E',
    scope : {
        tour: '='
    }
});
