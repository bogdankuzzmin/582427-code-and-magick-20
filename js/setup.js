'use strict';

var WIZZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userMenu = document.querySelector('.setup');
userMenu.classList.remove('hidden');

var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var getWizzard = function (names, surnames, coatColors, eyesColors) {
  var wizzardObj = {
    name: names[getRandomNumber(names)] + ' ' + surnames[getRandomNumber(surnames)],
    coatColor: coatColors[getRandomNumber(coatColors)],
    eyesColor: eyesColors[getRandomNumber(eyesColors)]
  };

  return wizzardObj;
};

var getWizzards = function (quantity) {
  var wizzardsArr = [];

  for (var i = 0; i < quantity; i++) {
    wizzardsArr.push(getWizzard(WIZZARD_NAMES, WIZZARD_SURNAMES, WIZZARD_COAT_COLORS, WIZZARD_EYES_COLOR));
  }

  return wizzardsArr;
};

var wizzards = getWizzards(4);

var renderWizzard = function (wizzard) {
  var wizzardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
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

addWizzards(wizzards);


var userMenuWizzards = document.querySelector('.setup-similar');
userMenuWizzards.classList.remove('hidden');
