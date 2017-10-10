import React from 'react'
const createReactClass = require('create-react-class')
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default createReactClass({
  // constructor(props) {
  //   super(props)
  // },
  getPair() {
    return this.props.pair || [];
  },
  isDisabled() {
    return !!this.props.hasVoted
  },
  hasVotedFor(e) {
    return this.props.hasVoted === e
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )}
      </div>
    )
  }
})
