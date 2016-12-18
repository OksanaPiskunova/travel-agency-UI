import RatingTemplate from './rating.template.html';

export default () => ({
    template: RatingTemplate,
    restrict: 'E',
    scope: {
        rating: '=',
        onUserSelect: '&'
    }
});
