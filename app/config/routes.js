import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer, UserContainer, DuckDetailsContainer } from 'containers'
import { checkIfAuthed } from 'helpers/auth'
import { NotFound } from 'components'

export default function getRoutes (store = {}, history = {browserHistory}) {

  function checkAuth (nextState, replace) {
    if (nextPathName === '/logout') return
    if (store.getState().users.isFetching === true) {
      return
    }
    const isAuthed = checkIfAuthed(store)
    const nextPathName = nextState.location.pathname

    console.log('isAuthed', isAuthed)
    console.log('nextPathName', nextPathName)
    if (nextPathName === '/' || nextPathName === '/auth') {
      if (isAuthed === true) {
        replace('/feed')
      }
    } else {
      if (isAuthed !== true) {
        replace('/auth')
      }
    }
  }

  return (
  <Router history={history}>
    <Router path ='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} onEnter={checkAuth}/>

      <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth}/>
      <Route path='feed' component={FeedContainer} onEnter={checkAuth}/>
      <Route path='/:uid' component={UserContainer} onEnter={checkAuth}/>
      <Route path='duckDetail/:duckId' component={DuckDetailsContainer} onEnter={checkAuth}/>

      <Route path='logout' component = {LogoutContainer}/>
      <Route path='*' component={NotFound} status={404} />
    </Router>
  </Router>
  )
}

