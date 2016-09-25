'use strict'

import { Tray as ElectronTray, Menu } from 'electron'
import path from 'path'

class Tray {
  create () {
    this.tray = new ElectronTray(path.join(__dirname, '..', 'static', 'img', 'icon_menubar.png'))

    this.tray.setToolTip('cappy')
    this.tray.setPressedImage(path.join(__dirname, '..', 'static', 'img', 'icon_menubar_white.png'))

    this.tray.setContextMenu(Menu.buildFromTemplate([
      {
        label: 'Capture Screen', accelerator: 'CommandOrControl+Shift+8'
      },
      {
        label: 'Capture Window', accelerator: 'CommandOrControl+Shift+5'
      },
      {
        label: 'Capture Selection', accelerator: 'CommandOrControl+Shift+2'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit', label: 'Quit', accelerator: 'CommandOrControl+Q'
      }
    ]))
  }
}

export default Tray
