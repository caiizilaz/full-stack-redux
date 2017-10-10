import React from 'react'
const createReactClass = require('create-react-class')
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default createReactClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div ref="winner">Winner is {this.props.winner}!</div>
    )
  }
})
