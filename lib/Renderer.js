'use strict'

import { ipcRenderer as ipc } from 'electron'
import React from 'react'
import ReactDOM from 'react-dom'

import Capture from './Capture'
import Container from './Container.jsx'

ReactDOM.render(<Container />, document.querySelector('div.content'))

ipc.on('screen', () => {
  new Capture().screen()
})
