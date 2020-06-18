'use strict';

(function () {
  var getRandomColor = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };

  window.colorize = function (evt, colorArr) {
    var color = getRandomColor(colorArr);
    if (evt.tagName.toLowerCase() === 'div') {
      evt.style.backgroundColor = color;
    } else {
      evt.style.fill = color;
    }
  };
})();
