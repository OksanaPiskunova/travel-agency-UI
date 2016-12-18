export default class AccountController {
    constructor($resource, $http, $q, $rootScope, $state) {
        'ngInject';

        this.$http = $http;
        this.$rootScope = $rootScope;
        const self = this;

        const User = $resource('http://localhost:8000/users/:id/', {
            id: '@id'
        });
        User.get({ id: this.$rootScope.currentUser.user_id })
            .$promise
            .then((user) => {
                self.user = user;
                return user;
            })
            .catch((error) => {
                return error;
            });

        const Reservation = $resource('http://localhost:8000/reservations/', {}, {
            query: {
                method: 'get',
                isArray: false
            }
        });
        Reservation.query({
            user: this.$rootScope.currentUser.user_id
        })
            .$promise
            .then((response) => {
                console.log(response);
                self.reservations =response.results;
                self.tourPromises = self.reservations.map((reservation) => {
                    return self.$http.get(`http://localhost:8000/tours/${reservation.tour}/`)
                        .then((response) => {
                            console.log(response);
                            return response.data;
                        })
                        .catch((error) => {
                            console.log(error);
                            return error;
                        });
                });

                $q.all(self.tourPromises)
                    .then((result) => {
                        console.log(result);
                        self.tours = result;
                    });
                //console.log(self.tours);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}
