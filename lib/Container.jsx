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
          <div className="block">
            <div className="labels">
              <span>Compression</span>
            </div>
            <div className="inputs">
              <select name="compression">
                <option value="jpg">JPEG</option>
                <option value="png">PNG</option>
              </select>
            </div>
          </div>
          <div className="separator"></div>
          <div className="block">
            <div className="labels">
              <span>Shadow style</span>
            </div>
            <div className="inputs">
              <form>
                <label><input type="radio" value="none" name="compression" /><span>None</span></label>
                <label><input type="radio" value="show" name="compression" /><span>Show shadows</span></label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container
