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
      width: 800,
      height: 400
    }

    if (process.platform === 'darwin') {
      opts.titleBarStyle = 'hidden-inset'
    } else {
      opts.frame = false
    }

    this.mainWindow = new BrowserWindow(opts)
    this.mainWindow.loadURL('file:///' + path.join(__dirname, 'index.html'))
    this.mainWindow.webContents.openDevTools()
  }
}

export default Window
