'use strict'

import Listener from '../Listener'

class Activate extends Listener {
  constructor () {
    super('activate')
  }

  onEvent (app) {
    if (app.window.mainWindow === undefined) {
      app.window.create()
    }
  }
}

export default Activate
