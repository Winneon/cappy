'use strict'

import React from 'react'

import Titlebar from './Components/Titlebar.jsx'
import Sidebar from './Components/Sidebar.jsx'

class Container extends React.Component {
  render () {
    return (
      <div>
        <Titlebar />
        <div className="app">
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Container
