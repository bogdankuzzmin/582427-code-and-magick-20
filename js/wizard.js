'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(56, 159, 117)'
  ];

  var EYES_COLORS = [
    'red',
    'yellow',
    'green',
    'blue',
    'green'
  ];

  var WIZARD_FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var coatChangeHandler = window.debounce(function (color) {
    window.filter.coatColor = color;
    window.filter.updateWizards();
  });

  var eyesChangeHandler = window.debounce(function (color) {
    window.filter.eyesColor = color;
    window.filter.updateWizards();
  });

  window.wizardClickHandler = function (evt) {
    if (evt.target.matches('.wizard-coat')) {
      window.colorize.colorize(coat, COAT_COLORS);
      wizardCoatColorInput.value = evt.target.style.fill;
      coatChangeHandler(window.colorize.newColor);
    } else if (evt.target.matches('.wizard-eyes')) {
      window.colorize.colorize(eyes, EYES_COLORS);
      wizardEyesColorInput.value = evt.target.style.fill;
      eyesChangeHandler(window.colorize.newColor);
    } else if (evt.target.matches('.setup-fireball')) {
      window.colorize.colorize(fireball, WIZARD_FIREBALL_COLOR);
      wizardFireballColorInput.value = window.colorize.rgbToHex(evt.target.style.backgroundColor);
    }
  };

  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball');

  var wizardCoatColorInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballColorInput = document.querySelector('input[name="fireball-color"]');
})();
