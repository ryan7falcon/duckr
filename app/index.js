import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import * as reducers from 'redux/modules'
import getRoutes from './config/routes'

const initialState = window.__REDUX_STATE__
const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)
const reducer = combineReducers({...reducers, routing: routerReducer})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, routingMiddleware),
  DevTools.instrument(),
  //   window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

export const store = createStore(
  reducer,
  initialState,
  enhancer,
  )

const history = syncHistoryWithStore(baseHistory, store)

render(
  <Provider store={store}>
    <div>
      {getRoutes(store, history)}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
