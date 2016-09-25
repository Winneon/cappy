'use strict'

class Listener {
  constructor (name) {
    this.name = name
  }

  onEvent (app, ...args) {
    // Interface function.
  }
}

export default Listener
