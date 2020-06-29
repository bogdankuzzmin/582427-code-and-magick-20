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

  window.colorize = {
    colorize: colorize
  };
})();
