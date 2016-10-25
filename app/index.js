import getRoutes from './config/routes'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { checkIfAuthed } from 'helpers/auth'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import * as reducers from 'redux/modules'
import thunk from 'redux-thunk'

const initialState = window.__REDUX_STATE__

export const store = createStore(
  combineReducers({...reducers, routing: routerReducer}),
  initialState,
  compose(
  applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : (f) => f
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

render(
  <Provider store={store}>
    {getRoutes(checkAuth, history, store)}
  </Provider>,
  document.getElementById('app')
)
