'use strict'

import electron from 'electron'

import Tray from './Tray'
import Window from './Window'

class App {
  constructor () {
    this.electron = electron
    this.app = electron.app

    this.window = new Window()
    this.tray = new Tray(this)
  }

  register (listener, obj) {
    let listen = !obj ? this.app : obj

    listen.removeAllListeners(listener.name)

    listen.on(listener.name, (...args) => {
      listener.onEvent(this, args)
    })
  }
}

export default App
