import React from 'react'
import { Router, browserHistory } from 'react-router'
import { MainContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Router path ='/' component={MainContainer} />
  </Router>
  )

export default routes
