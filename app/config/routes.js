import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer, UserContainer, DuckDetailsContainer } from 'containers'
import { checkIfAuthed } from 'helpers/auth'
import { NotFound, Loading } from 'components'

export default function getRoutes (store = {}, history = {browserHistory}) {
  // function checkAuth (nextState, replace) {
  //   if (nextPathName === '/logout') return
  //   if (store.getState().users.isFetching === true) {
  //     return
  //   }
  //   const isAuthed = checkIfAuthed(store)
  //   const nextPathName = nextState.location.pathname

  //   // console.log('isAuthed', isAuthed)
  //   // console.log('nextPathName', nextPathName)
  //   if (nextPathName === '/' || nextPathName === '/auth') {
  //     if (isAuthed === true) {
  //       replace('/feed')
  //     }
  //   } else {
  //     if (isAuthed !== true) {
  //       replace('/auth')
  //     }
  //   }
  // }
  const NotAthed = UserAuthWrapper({
    authSelector: state => state.users,
    authenticatingSelector: state => state.users.isFetching,
    predicate: user => user.isAuthed === false,
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/feed',
    allowRedirectBack: false,
    LoadingComponent: Loading,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'NotAthed',
  })

  const Authed = UserAuthWrapper({
    authSelector: state => state.users,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'Authed',
    LoadingComponent: Loading,
    // Want to redirect the user when they are done loading and authenticated
    predicate: user => user.isAuthed && user.isFetching === false,
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/auth',
    allowRedirectBack: false,
  })

  return (
  <Router history={history}>
    <Router path ='/' component={MainContainer}>
      <Route path='logout' component = {Authed(LogoutContainer)}/>
      <IndexRoute component={NotAthed(HomeContainer)} />
      <Route path='auth' component={NotAthed(AuthenticateContainer)}/>
      <Route path='feed' component={Authed(FeedContainer)}/>
      <Route path='user/:uid' component={Authed(UserContainer)} />
      <Route path='duckDetail/:duckId' component={Authed(DuckDetailsContainer)} />
      <Route path='*' component = {NotFound} status={404}/>
    </Router>
  </Router>
  )
}

