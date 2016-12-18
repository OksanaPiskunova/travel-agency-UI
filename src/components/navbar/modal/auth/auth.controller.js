export default class ModalLoginController {
    constructor($uibModalInstance, formData, formlyValidationMessages) {
        'ngInject';

        this.$uibModalInstance = $uibModalInstance;
        this.formData = formData;

        formlyValidationMessages.messages.required = 'blablabla';
    }

    ok() {
        this.$uibModalInstance.close(this.formData.model);
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }
}
