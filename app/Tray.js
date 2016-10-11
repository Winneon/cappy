'use strict'

import { Menu, Tray as ElectronTray } from 'electron'
import path from 'path'

class Tray {
  constructor (app) {
    this.app = app

    this.trayMenu = [
      {
        label: 'Capture Screen',
        accelerator: 'CommandOrControl+Shift+8',
        click: () => {
          app.window.mainWindow.webContents.send('screen')
        }
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
        type: 'normal', label: 'Preferences',
        click: () => {
          if (!app.window.mainWindow){
            app.window.create()

            if (process.platform === 'darwin') {
              app.app.dock.show()
            }
          }
        }
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
        label: app.app.getName(),
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
    this.tray = new ElectronTray(path.join(__dirname, 'static', 'icon_menubar.png'))

    this.tray.setToolTip('Cappy')
    this.tray.setPressedImage(path.join(__dirname, 'static', 'icon_menubar_white.png'))

    this.tray.setContextMenu(Menu.buildFromTemplate(this.trayMenu))
    Menu.setApplicationMenu(Menu.buildFromTemplate(this.appMenu))
  }
}

export default Tray
