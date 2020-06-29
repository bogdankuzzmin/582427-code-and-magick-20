'use strict';

(function () {
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
      window.colorize(coat, window.setup.WIZARD_COAT_COLOR);
      wizardCoatColorInput.value = evt.target.style.fill;
      window.coatColor = window.newColor;
      window.filter.updateWizards();
    } else if (evt.target.matches('.wizard-eyes')) {
      window.colorize(eyes, window.setup.WIZARD_EYES_COLOR);
      wizardEyesColorInput.value = evt.target.style.fill;
      window.eyesColor = window.newColor;
      window.filter.updateWizards();
    } else if (evt.target.matches('.setup-fireball')) {
      window.colorize(fireball, window.setup.WIZARD_FIREBALL_COLOR);
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
