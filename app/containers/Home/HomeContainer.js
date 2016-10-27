import React, { PropTypes } from 'react'
import { Home } from 'components'
import { connect } from 'react-redux'

const HomeContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
  },
  render () {
    return (
      <Home isFetching={this.props.isFetching}/>
    )
  },
})
export default connect(
  ({users}) => ({isFetching: users.isFetching}),
  )
  (HomeContainer)
