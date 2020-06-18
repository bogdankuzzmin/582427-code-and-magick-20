'use strict';

(function () {
  var onPopupEscPress = function (evt) {
    if (!window.form.userNameInput.matches(':focus')) {
      if (evt.key === 'Escape') {
        userMenu.classList.remove('hidden');
        closePopup();
      }
    }
  };

  var openPopup = function () {
    userMenu.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    setupWizardPlayer.addEventListener('click', window.wizardClickHandler);
  };

  var closePopup = function () {
    userMenu.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupWizardPlayer.removeEventListener('click', window.wizardClickHandler);
  };

  var init = function () {
    setupOpen.addEventListener('click', function () {
      openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        openPopup();
      }
    });

    setupClose.addEventListener('click', function () {
      closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        closePopup();
      }
    });
  };

  var setupWizardPlayer = document.querySelector('.setup-player');
  var userMenu = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  init();
})();
