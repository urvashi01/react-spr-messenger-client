'use strict';

exports.__esModule = true;

var _SprMessenger = require('./SprMessenger');

var _SprMessenger2 = _interopRequireDefault(_SprMessenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadMessenger(_window, _document, scriptVal, messengerVar) {
  var sprMessenger = _window[messengerVar] ? _window[messengerVar] : _window[messengerVar] = {};
  var methods = ['initialize', 'updateOptions', 'launch', 'hide', 'show'];
  sprMessenger.queue = [];
  methods.forEach(function (method) {
    sprMessenger[method] = function () {
      sprMessenger.queue.push({ name: method, params: Array.prototype.slice.call(arguments) });
    };
  });
  var scriptTag = _document.createElement(scriptVal);
  var appliedScripts = _document.getElementsByTagName(scriptVal)[0];
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = '//sprcdn.sprinklr.com/messenger/e6e442a970ffba6000a8/messenger.js';
  appliedScripts.parentNode.insertBefore(scriptTag, appliedScripts);
}

exports.default = {
  initialize: function initialize(config) {
    if (typeof window === 'undefined') {
      return false;
    }
    if (!window.sprMessenger) {
      loadMessenger(window, document, "script", "sprMessenger");
    }
    window.sprMessenger.initialize(config);
  },


  SprMessenger: _SprMessenger2.default
};