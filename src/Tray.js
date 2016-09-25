'use strict'

import { app, Menu, Tray as ElectronTray } from 'electron'
import path from 'path'

class Tray {
  constructor () {
    this.trayMenu = [
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
        type: 'normal', label: 'Preferences'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]

    // macOS only
    this.appMenu = process.platform !== 'darwin' ? [ ] : [
      {
        label: app.getName(),
        submenu: [
          {
            role: 'about'
          },
          {
            type: 'separator'
          },
          {
            role: 'services',
            submenu: [ ]
          },
          {
            type: 'separator'
          },
          {
            role: 'hide'
          },
          {
            role: 'hideothers'
          },
          {
            role: 'unhide'
          },
          {
            type: 'separator'
          },
          {
            role: 'quit'
          }
        ]
      }
    ]
  }

  create () {
    this.tray = new ElectronTray(path.join(__dirname, '..', 'static', 'img', 'icon_menubar.png'))

    this.tray.setToolTip('cappy')
    this.tray.setPressedImage(path.join(__dirname, '..', 'static', 'img', 'icon_menubar_white.png'))

    this.tray.setContextMenu(Menu.buildFromTemplate(this.trayMenu))
    Menu.setApplicationMenu(Menu.buildFromTemplate(this.appMenu))
  }
}

export default Tray
