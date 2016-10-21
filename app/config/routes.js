import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Router path ='/' component={MainContainer}>
      <Route path='auth' component={AuthenticateContainer} />
      <Route path='feed' component={FeedContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
  )

export default routes
