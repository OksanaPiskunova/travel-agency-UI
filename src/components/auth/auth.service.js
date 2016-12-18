import jwtDecode from 'jwt-decode';

export default class AuthService {
    constructor($http, $rootScope) {
        'ngInject';

        this.$http = $http;
        this.$rootScope = $rootScope;
        this.store = window.localStorage;
        this.key = 'token';
    }

    getToken() {
        return this.store.getItem(this.key);
    }

    setToken(token) {
        if (token) {
            this.store.setItem(this.key, token);
        }
    }

    resetToken() {
        this.store.removeItem(this.key);
    }

    setCurrentUserByToken(token) {
        this.$rootScope.currentUser = jwtDecode(token);
    }

    loginUserByToken(token) {
        this.setToken(token);
        this.setCurrentUserByToken(token);
    }

    login(user) {
        return this.$http.post('http://localhost:8000/api-token-auth/', user)
            .then((response) => {
                console.log(response.data.token);
                this.loginUserByToken(response.data.token);
                return response;
            })
            .catch((error) => {
                console.log(error.data);
                return error;
            });
    }

    logout() {
        this.resetToken();
        this.$rootScope.currentUser = null;
    }

    register(user) {
        return this.$http.post('http://localhost:8000/users/', user)
            .then((response) => {
                console.log(response.data);
                return response;
            })
            .catch((error) => {
                console.log(error.data);
                return error;
            });
    }
}
