import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import store, { history } from './store/'

const  HomePage =  () => <h1> Home</h1>

const  App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Route path="/" component={HomePage} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
