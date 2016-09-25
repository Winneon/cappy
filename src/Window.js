'use strict'

import { BrowserWindow } from 'electron'
import path from 'path'

class Window {
  create () {
    let opts = { }

    if (process.platform === 'darwin') {
      opts.titleBarStyle = 'hidden-inset'
    } else {
      opts.frame = false
    }

    this.mainWindow = new BrowserWindow(opts)

    this.mainWindow.on('closed', () => {
      this.mainWindow = undefined
    })

    this.mainWindow.loadURL('file:///' + path.join(__dirname, 'static', 'index.html'))
  }
}

export default Window
