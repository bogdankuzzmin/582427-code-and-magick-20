'use strict';

/* ========================================
      Constants
======================================== */
var WIZARDS_NUMBER = 4;


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

/* ========================================
      Function declarations
======================================== */

var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var getWizards = function (quantity) {
  var wizardsArr = [];

  for (var i = 0; i < quantity; i++) {
    var wizardObj = {
      name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES)],
      coatColor: WIZARD_COAT_COLOR[getRandomNumber(WIZARD_COAT_COLOR)],
      eyesColor: WIZARD_EYES_COLOR[getRandomNumber(WIZARD_EYES_COLOR)]
    };

    wizardsArr.push(wizardObj);
  }

  return wizardsArr;
};

var renderWizard = function (wizard) {
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

var onPopupEscPress = function (evt) {
  if (!userNameInput.matches(':focus')) {
    if (evt.key === 'Escape') {
      userMenu.classList.remove('hidden');
      closePopup();
    }
  }
};

var openPopup = function () {
  userMenu.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupWizardPlayer.addEventListener('click', wizardClickHandler);
};

var closePopup = function () {
  userMenu.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  setupWizardPlayer.removeEventListener('click', wizardClickHandler);
};

var wizardClickHandler = function (evt) {
  if (evt.target.matches('.wizard-coat')) {
    evt.target.style.fill = WIZARD_COAT_COLOR[getRandomNumber(WIZARD_COAT_COLOR)];
    wizardCoatColorInput.value = evt.target.style.fill;
  } else if (evt.target.matches('.wizard-eyes')) {
    evt.target.style.fill = WIZARD_EYES_COLOR[getRandomNumber(WIZARD_EYES_COLOR)];
    wizardEyesColorInput.value = evt.target.style.fill;
  } else if (evt.target.matches('.setup-fireball')) {
    evt.target.style.backgroundColor = WIZARD_FIREBALL_COLOR[getRandomNumber(WIZARD_FIREBALL_COLOR)];
    wizardFireballColorInput.value = rgbToHex(evt.target.style.backgroundColor);
  }
};

var userNameInputInvalidHandler = function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
};

var userNameInputInputHandler = function () {
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

var rgbToHex = function (rgb) {
  var sep = rgb.indexOf(',') > -1 ? ',' : '';

  rgb = rgb.substr(4).split(')')[0].split(sep);

  var r = (+rgb[0]).toString(16);
  var g = (+rgb[1]).toString(16);
  var b = (+rgb[2]).toString(16);

  if (r.length === 1) {
    r = '0' + r;
  }
  if (g.length === 1) {
    g = '0' + g;
  }
  if (b.length === 1) {
    b = '0' + b;
  }

  return '#' + r + g + b;
};

/* ========================================
      Variables
======================================== */

var wizardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var userMenuWizards = document.querySelector('.setup-similar');
userMenuWizards.classList.remove('hidden');

var setupWizardForm = document.querySelector('.setup-wizard-form');
var setupWizardPlayer = document.querySelector('.setup-player');
var userMenu = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var wizardCoatColorInput = document.querySelector('input[name="coat-color"]');
var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');
var wizardFireballColorInput = document.querySelector('input[name="fireball-color"]');
var userNameInputMinLength = userNameInput.minLength;
var userNameInputMaxLength = userNameInput.maxLength;


var wizards = getWizards(WIZARDS_NUMBER);

/* ========================================
      EventListeners
======================================== */

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

userNameInput.addEventListener('invalid', userNameInputInvalidHandler);
userNameInput.addEventListener('input', userNameInputInputHandler);

/* ========================================
      Execute functions
======================================== */

addWizards(wizards);
