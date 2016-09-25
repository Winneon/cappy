'use strict'

import { BrowserWindow } from 'electron'
import path from 'path'

class Window {
  create () {
    let opts = {
      'maximizable': false,
      'show': false
    }

    if (process.platform === 'darwin') {
      opts.titleBarStyle = 'hidden-inset'
    } else {
      opts.frame = false
    }

    this.mainWindow = new BrowserWindow(opts)
    this.mainWindow.loadURL('file:///' + path.join(__dirname, '..', 'static', 'index.html'))
  }
}

export default Window
