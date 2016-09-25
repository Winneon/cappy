'use strict'

import { Tray as ElectronTray, Menu } from 'electron'
import path from 'path'

class Tray {
  create () {
    this.tray = new ElectronTray(path.join(__dirname, '..', 'static', 'img', 'icon_menubar.png'))

    this.tray.setToolTip('cappy')
    this.tray.setPressedImage(path.join(__dirname, '..', 'static', 'img', 'icon_menubar_white.png'))

    this.tray.setContextMenu(Menu.buildFromTemplate([{
      role: 'quit', label: 'Quit'
    }]))
  }
}

export default Tray
