'use strict';

(function () {
  var getRandomColor = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };

  window.colorize = function (evt, colorArr) {
    window.newColor = getRandomColor(colorArr);
    if (evt.tagName.toLowerCase() === 'div') {
      evt.style.backgroundColor = window.newColor;
    } else {
      evt.style.fill = window.newColor;
    }
  };
})();
