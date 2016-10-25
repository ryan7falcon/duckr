import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer, UserContainer, DuckDetailsContainer } from 'containers'
import { checkIfAuthed } from 'helpers/auth'
import { NotFound } from 'components'

export default function getRoutes (store = {}, history = {browserHistory}) {
  function checkAuth (nextState, replace) {
    
    if (store.getState().users.isFetching === true) {
      return
    }
    const isAuthed = checkIfAuthed(store)
    const nextPathName = nextState.location.pathname

    console.log('isAuthed', isAuthed)
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

        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth}/>
        <Route path='feed' component={FeedContainer} onEnter={checkAuth}/>
        <Route path='/:uid' component={UserContainer} onEnter={checkAuth}/>
        <Route path='duckDetail/:duckId' component={DuckDetailsContainer} onEnter={checkAuth}/>
        <IndexRoute component={HomeContainer} onEnter={checkAuth}/>

      <Route path='logout' component={LogoutContainer} />
      <Route path='*' component={NotFound} status={404} />
    </Router>
  </Router>
  )
}

