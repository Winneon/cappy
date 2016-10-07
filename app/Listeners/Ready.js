'use strict'

import Listener from '../Listener'
import ReadyToShow from './Window/ReadyToShow'

class Ready extends Listener {
  constructor () {
    super('ready')
  }

  onEvent (app) {
    app.tray.create()
    app.window.create()

    app.register(new ReadyToShow(), app.window.mainWindow)
  }
}

export default Ready
