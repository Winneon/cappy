'use strict'

import React from 'react'
import SidebarItem from './SidebarItem.jsx'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar'>
        <SidebarItem name="Capture" />
        <SidebarItem name="Upload" />
        <SidebarItem name="Folder" />
        <SidebarItem name="About" />
      </div>
    )
  }
}

export default Sidebar
