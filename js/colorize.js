'use strict';

(function () {
  var getRandomColor = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };

  var colorize = function (evt, colorArr) {
    var newColor = getRandomColor(colorArr);
    window.colorize.newColor = newColor;
    if (evt.tagName.toLowerCase() === 'div') {
      evt.style.backgroundColor = newColor;
    } else {
      evt.style.fill = newColor;
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

  window.colorize = {
    colorize: colorize,
    rgbToHex: rgbToHex
  };
})();
