import getRoutes from './config/routes'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'

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

render(
  <Provider store={store}>
    {getRoutes(store, browserHistory)}
  </Provider>,
  document.getElementById('app')
)
