export default class AuthInterceptor {
    request(config) {
        const token = window.localStorage.getItem('token');

        if (token) {
            config.headers = config.header || {};
            config.headers.Authorization = `JWT ${token}`;
        }

        return config;
    }
}
