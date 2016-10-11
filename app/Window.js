'use strict'

import { BrowserWindow } from 'electron'
import path from 'path'

class Window {
  create () {
    let opts = {
      maximizable: false,
      resizable: false,
      show: false,
      title: 'cappy',
      width: 400,
      height: 400
    }

    if (process.platform === 'darwin') {
      opts.titleBarStyle = 'hidden-inset'
    } else {
      opts.frame = false
    }

    this.mainWindow = new BrowserWindow(opts)
    this.mainWindow.loadURL('file:///' + path.join(__dirname, 'index.html'))

    this.mainWindow.on('focus', () => this.mainWindow.webContents.send('focus', true))
    this.mainWindow.on('blur', () => this.mainWindow.webContents.send('focus', false))

    if (process.env.NODE_ENV === 'development') {
      this.mainWindow.webContents.openDevTools({
        detach: true
      })
    }
  }
}

export default Window
