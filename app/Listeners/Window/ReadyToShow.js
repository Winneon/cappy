'use strict'

import Listener from '../../Listener'

class Ready extends Listener {
  constructor () {
    super('ready-to-show')
  }

  onEvent (app) {
    app.window.mainWindow.show()
  }
}

export default Ready
