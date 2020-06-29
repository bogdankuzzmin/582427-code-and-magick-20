'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var renderWizard = function (wizard) {
    var wizardTemplate = document.getElementById('similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    var userMenuWizardsList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > window.setup.WIZARDS_NUMBER ? window.setup.WIZARDS_NUMBER : wizards.length;

    userMenuWizardsList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    userMenuWizardsList.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.renderWizard = {
    renderWizards: renderWizards
  };
})();
