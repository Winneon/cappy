'use strict'

import electron from 'electron'

import Tray from './Tray'
import Window from './Window'

class App {
  constructor () {
    this.electron = electron
    this.app = electron.app

    this.tray = new Tray()
    this.window = new Window()
  }

  register (listener) {
    this.app.removeAllListeners(listener.name)

    this.app.on(listener.name, (...args) => {
      listener.onEvent(this, args)
    })
  }
}

export default App
