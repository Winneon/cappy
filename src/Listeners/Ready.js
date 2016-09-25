'use strict'

import Listener from '../Listener'

class Ready extends Listener {
  constructor () {
    super('ready')
  }

  onEvent (app) {
    app.tray.create()
    app.window.create()
  }
}

export default Ready
