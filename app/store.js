import getRoutes from './config/routes'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'
import * as reducers from 'redux/modules'
import { Provider } from 'react-redux'
import React from 'react'
import { browserHistory } from 'react-router'

export const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  applyMiddleware(thunk)
  // window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

const history = syncHistoryWithStore(browserHistory, store)

function checkAuth (nextState, replace) {
  if (store.getState().users.isFetching === true) {
    return
  }

  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname

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

export var routes = getRoutes(checkAuth, history)
export var provider = (
  <Provider store={store}>
    {routes}
  </Provider>)

