'use strict';

(function () {
  var getRandomNumber = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  var getWizards = function (quantity) {
    var wizardsArr = [];

    for (var i = 0; i < quantity; i++) {
      var wizardObj = {
        name: window.setup.WIZARD_NAMES[getRandomNumber(window.setup.WIZARD_NAMES)] + ' ' + window.setup.WIZARD_SURNAMES[getRandomNumber(window.setup.WIZARD_SURNAMES)],
        coatColor: window.setup.WIZARD_COAT_COLOR[getRandomNumber(window.setup.WIZARD_COAT_COLOR)],
        eyesColor: window.setup.WIZARD_EYES_COLOR[getRandomNumber(window.setup.WIZARD_EYES_COLOR)]
      };

      wizardsArr.push(wizardObj);
    }

    return wizardsArr;
  };

  var renderWizard = function (wizard) {
    var userMenuWizards = document.querySelector('.setup-similar');
    userMenuWizards.classList.remove('hidden');
    var wizardTemplate = document.getElementById('similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addWizards = function (character) {
    var userMenuWizardsList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < character.length; i++) {
      fragment.appendChild(renderWizard(character[i]));
    }

    userMenuWizardsList.appendChild(fragment);
  };

  var wizards = getWizards(window.setup.WIZARDS_NUMBER);

  addWizards(wizards);
})();
