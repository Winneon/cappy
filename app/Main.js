'use strict'

import App from './App'

import Activate from './Listeners/Activate'
import Ready from './Listeners/Ready'
import WindowAllClosed from './Listeners/WindowAllClosed'

class Main {
  constructor () {
    this.app = new App()

    this.app.register(new Activate())
    this.app.register(new Ready())
    this.app.register(new WindowAllClosed())
  }
}

export default Main
