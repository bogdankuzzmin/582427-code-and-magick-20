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

  window.wizardClickHandler = function (evt) {
    if (evt.target.matches('.wizard-coat')) {
      window.colorize.colorize(coat, COAT_COLORS);
      wizardCoatColorInput.value = evt.target.style.fill;
      window.filter.coatColor = window.colorize.newColor;
      window.filter.updateWizards();
    } else if (evt.target.matches('.wizard-eyes')) {
      window.colorize.colorize(eyes, EYES_COLORS);
      wizardEyesColorInput.value = evt.target.style.fill;
      window.filter.eyesColor = window.colorize.newColor;
      window.filter.updateWizards();
    } else if (evt.target.matches('.setup-fireball')) {
      window.colorize.colorize(fireball, WIZARD_FIREBALL_COLOR);
      wizardFireballColorInput.value = rgbToHex(evt.target.style.backgroundColor);
    }
  };

  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball');

  var wizardCoatColorInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballColorInput = document.querySelector('input[name="fireball-color"]');
})();
