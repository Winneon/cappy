'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Activate = require('./Listeners/Activate');

var _Activate2 = _interopRequireDefault(_Activate);

var _Ready = require('./Listeners/Ready');

var _Ready2 = _interopRequireDefault(_Ready);

var _WindowAllClosed = require('./Listeners/WindowAllClosed');

var _WindowAllClosed2 = _interopRequireDefault(_WindowAllClosed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  this.app = new _App2.default();

  this.app.register(new _Activate2.default());
  this.app.register(new _Ready2.default());
  this.app.register(new _WindowAllClosed2.default());
};

exports.default = Main;
//# sourceMappingURL=Main.js.map