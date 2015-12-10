import React from 'react'
import { FontIcon, List, ListItem, Styles } from 'material-ui'
const { Colors } = Styles

export default React.createClass({
  displayName: 'ServicesList',

  propTypes: {
    registry: React.PropTypes.object.isRequired,
    onServiceClick: React.PropTypes.func.isRequired
  },

  render: function() {
    const serviceIcon = <FontIcon style={{fontSize: 42}}
      className='material-icons'
      color={Colors.grey400}>
      widgets
    </FontIcon>

    let services = []
    this.props.registry.services.forEach((versions, serviceName) => {
      services.push(
        <ListItem
          key={`${serviceName}`}
          leftAvatar={serviceIcon}
          primaryText={serviceName}
          onClick={() => {this.props.onServiceClick(serviceName, version)}} />
      )
    })

    return <div>
      <List subheader='Services'>
        {services}
      </List>
    </div>
  }
})
