'use strict';

var WIZZARDS_NUMBER = 4;

var WIZZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var getWizzards = function (quantity) {
  var wizzardsArr = [];

  for (var i = 0; i < quantity; i++) {
    var wizzardObj = {
      name: WIZZARD_NAMES[getRandomNumber(WIZZARD_NAMES)] + ' ' + WIZZARD_SURNAMES[getRandomNumber(WIZZARD_SURNAMES)],
      coatColor: WIZZARD_EYES_COLOR[getRandomNumber(WIZZARD_EYES_COLOR)],
      eyesColor: WIZZARD_COAT_COLORS[getRandomNumber(WIZZARD_COAT_COLORS)]
    };

    wizzardsArr.push(wizzardObj);
  }

  return wizzardsArr;
};

var renderWizzard = function (wizzard) {
  var wizzardElement = wizzardTemplate.cloneNode(true);

  wizzardElement.querySelector('.setup-similar-label').textContent = wizzard.name;
  wizzardElement.querySelector('.wizard-coat').style.fill = wizzard.coatColor;
  wizzardElement.querySelector('.wizard-eyes').style.fill = wizzard.eyesColor;

  return wizzardElement;
};

var addWizzards = function (character) {
  var userMenuWizzardsList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < character.length; i++) {
    fragment.appendChild(renderWizzard(character[i]));
  }

  userMenuWizzardsList.appendChild(fragment);
};

var wizzardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var userMenu = document.querySelector('.setup');
userMenu.classList.remove('hidden');

var userMenuWizzards = document.querySelector('.setup-similar');
userMenuWizzards.classList.remove('hidden');

var wizzards = getWizzards(WIZZARDS_NUMBER);

addWizzards(wizzards);
