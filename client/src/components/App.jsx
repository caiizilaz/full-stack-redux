import React from 'react'
const createReactClass = require('create-react-class')
import { List } from 'immutable'

const pair = List.of('Trainspotting', '28 Days Later')

export default createReactClass({
  render() {
    return(
      React.cloneElement(this.props.children, {pair: pair})
    )
  }
})