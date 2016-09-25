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

var Tray = function () {
  function Tray() {
    _classCallCheck(this, Tray);
  }

  _createClass(Tray, [{
    key: 'create',
    value: function create() {
      this.tray = new _electron.Tray(_path2.default.join(__dirname, '..', 'static', 'img', 'icon_menubar.png'));

      this.tray.setToolTip('cappy');
      this.tray.setPressedImage(_path2.default.join(__dirname, '..', 'static', 'img', 'icon_menubar_white.png'));

      this.tray.setContextMenu(_electron.Menu.buildFromTemplate([{
        label: 'Capture Screen', accelerator: 'CommandOrControl+Shift+8'
      }, {
        label: 'Capture Window', accelerator: 'CommandOrControl+Shift+5'
      }, {
        label: 'Capture Selection', accelerator: 'CommandOrControl+Shift+2'
      }, {
        type: 'separator'
      }, {
        role: 'quit', label: 'Quit', accelerator: 'CommandOrControl+Q'
      }]));
    }
  }]);

  return Tray;
}();

exports.default = Tray;
//# sourceMappingURL=Tray.js.map