export default class ToursController {
    constructor($resource) {
        'ngInject';

        const self = this;

        const Tours = $resource('http://localhost:8000/tours/', {});
        Tours.get()
            .$promise
            .then((tours) => {
                self.tours = tours.results;
            });
    }
}
