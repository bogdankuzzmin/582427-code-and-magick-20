'use strict';

(function () {
  var userNameInputInvalidHandler = function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Минимальное значение симовлов - 2');
    } else {
      userNameInput.setCustomValidity('');
    }
  };

  var userNameInputHandler = function () {
    var valueLength = userNameInput.value.length;

    setupWizardForm.reportValidity();

    if (valueLength < userNameInputMinLength) {
      userNameInput.setCustomValidity('Ещё ' + (userNameInputMinLength - valueLength) + ' симв.');
    } else if (valueLength > userNameInputMaxLength) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - userNameInputMaxLength) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  };

  var init = function () {
    userNameInput.addEventListener('invalid', userNameInputInvalidHandler);
    userNameInput.addEventListener('input', userNameInputHandler);
  };

  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var userNameInput = document.querySelector('.setup-user-name');
  var userNameInputMinLength = userNameInput.minLength;
  var userNameInputMaxLength = userNameInput.maxLength;

  window.form = {
    userNameInput: userNameInput
  };

  init();
})();
