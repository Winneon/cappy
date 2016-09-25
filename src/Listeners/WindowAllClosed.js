'use strict'

import Listener from '../Listener'

class WindowAllClosed extends Listener {
  constructor () {
    super('window-all-closed')
  }

  onEvent (app) {
    if (process.platform === 'darwin') {
      app.app.dock.hide()
    }
  }
}

export default WindowAllClosed
