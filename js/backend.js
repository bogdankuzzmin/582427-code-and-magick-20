'use strict';

(function () {
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick';
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';

  var TIMEOUT_IN_MS = 10000;

  var load = function (loadHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          loadHandler(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;

        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        errorHandler(error);
      }
    });

    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполнится за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL_LOAD);
    xhr.send();
  };

  var save = function (data, loadHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          loadHandler(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;

        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        errorHandler(error);
      }
    });

    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполнится за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', URL_SAVE);
    xhr.send(data);
  };

  var messageHandler = function (message) {
    var messageBlock = document.createElement('div');
    messageBlock.classList.add('message-block');
    messageBlock.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: crimson;';
    messageBlock.style.position = 'fixed';
    messageBlock.style.left = 0;
    messageBlock.style.right = 0;
    messageBlock.style.padding = '5px 0px';
    messageBlock.style.fontSize = '30px';
    messageBlock.style.boxShadow = '0px 5px 5px 0px rgba(0, 0, 0, 0.7)';
    messageBlock.style.transform = 'translateY(-50px)';
    messageBlock.style.animation = 'appear 0.8s ease-out forwards';

    messageBlock.textContent = message;
    document.body.insertAdjacentElement('afterbegin', messageBlock);
  };

  var submitHandler = function (evt) {
    save(new FormData(wizardForm), function () {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', window.dialog.onPopupEscPress);

      messageHandler('Данные успешно отправлены');
      setTimeout(animateMessageBlock, 3000);
      setTimeout(deleteMessageBlock, 4000);
    }, messageHandler);

    evt.preventDefault();
  };

  var successHandler = function (loadData) {
    shuffleArr(loadData);
    window.renderWizard.renderWizards(loadData);
  };

  var animateMessageBlock = function () {
    window.messageBlock = document.querySelector('.message-block');
    window.messageBlock.style.animation = 'disappear 0.8s ease-in';
  };

  var deleteMessageBlock = function () {
    window.messageBlock.remove();
  };

  var shuffleArr = function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };

  var userDialog = document.querySelector('.setup');
  var wizardForm = userDialog.querySelector('.setup-wizard-form');

  wizardForm.addEventListener('submit', submitHandler);

  load(successHandler, messageHandler);
})();
