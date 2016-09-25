'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = require('electron');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);
  }

  _createClass(Window, [{
    key: 'create',
    value: function create() {
      var opts = {
        'maximizable': false,
        'show': false,
        'title': 'cappy'
      };

      if (process.platform === 'darwin') {
        opts.titleBarStyle = 'hidden-inset';
      } else {
        opts.frame = false;
      }

      this.mainWindow = new _electron.BrowserWindow(opts);
      this.mainWindow.loadURL('file:///' + _path2.default.join(__dirname, '..', 'static', 'index.html'));
    }
  }]);

  return Window;
}();

exports.default = Window;
//# sourceMappingURL=Window.js.map