'use strict';

(function () {
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.filter.coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === window.filter.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.renderWizard.renderWizards(window.backend.wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }

      return rankDiff;
    }));
  };

  window.filter = {
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black',
    updateWizards: updateWizards
  };
})();
