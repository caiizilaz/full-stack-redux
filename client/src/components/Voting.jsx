import React from 'react'
const createReactClass = require('create-react-class')
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner'
import Vote from './Vote'

export default createReactClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    )
  }
})