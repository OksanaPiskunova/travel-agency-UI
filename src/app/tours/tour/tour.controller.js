export default class TourController {
    constructor($resource, $http, $rootScope, $state) {
        'ngInject';

        this.$state = $state;
        this.$resource = $resource;
        this.$http = $http;
        this.$rootScope = $rootScope;

        const self = this;

        const Tour = $resource('http://localhost:8000/tours/:id/', {
            id: '@id'
        });
        Tour.get({ id: $state.params.id})
            .$promise
            .then((tour) => {
                self.tour = tour;
                self.setImage(self.tour.image_tour[0]);
            })
            .catch((error) => {
                console.log(error);
            });

        (function () {
            var d = document, s = d.createElement('script');
            s.src = '//travelingtours.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    setImage(image) {
        this.mainImage = image;
    }

    reserve() {
        const self = this;

        console.log('la');
        console.log(this.$rootScope);
        console.log('lalallaa');

        let reservation = {
            "user": this.$rootScope.currentUser.user_id,
            "tour": this.tour.id,
            "paid_for": false
        };

        return this.$http.post('http://localhost:8000/reservations/', reservation)
            .then((response) => {
                self.reservations = response.results;
                console.log(response);
                this.$state.go('account');
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    updateRating() {
        return this.$http.put(`http://localhost:8000/ratings/${this.tour.rating_tour[0].id}/`,
            this.tour.rating_tour[0]
        )
            .then((response) => {
                this.tour.rating_tour[0] = response.data;
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
