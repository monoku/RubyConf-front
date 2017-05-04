import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import store, { history } from './store/'
import HomePage from './containers/ContainerHomePage'
import ContentPages from './components/Pages/ContentPages'
import Error404 from './components/Pages/Error404'
import NewsInside from './components/Pages/NewsInside'
import News from './components/Pages/News'

const  App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news/" component={News} />
          <Route path="/news/:blog" component={NewsInside} />
          <Route exact path="/error/404" component={Error404} />
          <Route path="/:slug" component={ContentPages} />
          <Redirect to="error/404" />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
