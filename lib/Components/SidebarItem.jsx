'use strict'

import React from 'react'

class SidebarItem extends React.Component {
  render () {
    return (
      <div className="sidebar_item">
        {this.props.name}
      </div>
    )
  }
}

export default SidebarItem