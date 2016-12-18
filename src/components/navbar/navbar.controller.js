import ModalAuthTemplate from './modal/auth/auth.template.html';
import ModalAuthController from './modal/auth/auth.controller.js';

export default class NavbarController {
    constructor($uibModal, AuthService, $state) {
        'ngInject';

        this.$state = $state;
        this.$uibModal = $uibModal;
        this.AuthService = AuthService;

        this.menu = [
            {
                title: 'Home',
                state: 'home'
            },
            {
                title: 'Tours',
                state: 'tours'
            },
            {
                title: 'About',
                state: 'about'
            }
        ];
    }

    openLoginModal() {
        let user = {};

        this.$uibModal.open({
            template: ModalAuthTemplate,
            controller: ModalAuthController,
            controllerAs: 'auth',
            size: 'sm',
            resolve: {
                formData: () => {
                    return {
                        fields: [
                            {
                                key: 'username',
                                type: 'input',
                                templateOptions: {
                                    type: 'text',
                                    required: true,
                                    maxlength: 30,
                                    minlength: 2,
                                    label: 'Username',
                                    placeholder: 'Enter your username'
                                },
                                validation: {
                                    messages: {
                                        required: 'This field is required'
                                    }
                                }
                            },
                            {
                                key: 'password',
                                type: 'input',
                                templateOptions: {
                                    type: 'password',
                                    required: true,
                                    label: 'Password',
                                    placeholder: 'Enter your password'
                                }
                            }
                        ],
                        model: user
                    };
                }
            }
        })
            .result
            .then((user) => {
                this.AuthService.login(user)
                    .then(() => {
                        this.$state.go('account');
                    });

            });
    }

    logout() {
        this.AuthService.logout();
        this.$state.go('home');
    }

    openSingUpModal() {
        let user = {};

        this.$uibModal.open({
            template: ModalAuthTemplate,
            controller: ModalAuthController,
            controllerAs: 'auth',
            size: 'sm',
            resolve: {
                formData: () => {
                    return {
                        fields: [
                            {
                                key: 'first_name',
                                type: 'input',
                                templateOptions: {
                                    type: 'text',
                                    required: true,
                                    maxlength: 30,
                                    minlength: 2,
                                    label: 'First name',
                                    placeholder: 'Enter your first name'
                                },
                                validation: {
                                    messages: {
                                        required: 'This field is required'
                                    }
                                }
                            },
                            {
                                key: 'last_name',
                                type: 'input',
                                templateOptions: {
                                    type: 'text',
                                    required: true,
                                    maxlength: 30,
                                    minlength: 2,
                                    label: 'Last name',
                                    placeholder: 'Enter your last name'
                                },
                                validation: {
                                    messages: {
                                        required: 'This field is required'
                                    }
                                }
                            },
                            {
                                key: 'username',
                                type: 'input',
                                templateOptions: {
                                    type: 'text',
                                    required: true,
                                    maxlength: 30,
                                    minlength: 2,
                                    label: 'Username',
                                    placeholder: 'Enter your username'
                                },
                                validation: {
                                    messages: {
                                        required: 'This field is required'
                                    }
                                }
                            },
                            {
                                key: 'email',
                                type: 'input',
                                templateOptions: {
                                    type: 'email',
                                    required: true,
                                    maxlength: 30,
                                    minlength: 2,
                                    label: 'Email',
                                    placeholder: 'Enter your email'
                                },
                                validation: {
                                    messages: {
                                        required: 'This field is required'
                                    }
                                }
                            },
                            {
                                key: 'password',
                                type: 'input',
                                templateOptions: {
                                    type: 'password',
                                    required: true,
                                    label: 'Password',
                                    placeholder: 'Enter your password'
                                }
                            }
                        ],
                        model: user
                    };
                }
            }
        })
            .result
            .then((user) => {
                this.AuthService.register(user)
                    .then(() => this.AuthService.login(user))
                        .then(() => {
                            this.$state.go('account');
                        });
            });
    }
}
