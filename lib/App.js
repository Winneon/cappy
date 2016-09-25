'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _Tray = require('./Tray');

var _Tray2 = _interopRequireDefault(_Tray);

var _Window = require('./Window');

var _Window2 = _interopRequireDefault(_Window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.electron = _electron2.default;
    this.app = _electron2.default.app;

    this.tray = new _Tray2.default();
    this.window = new _Window2.default();
  }

  _createClass(App, [{
    key: 'register',
    value: function register(listener) {
      var _this = this;

      this.app.removeAllListeners(listener.name);

      this.app.on(listener.name, function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        listener.onEvent(_this, args);
      });
    }
  }]);

  return App;
}();

exports.default = App;
//# sourceMappingURL=App.js.map