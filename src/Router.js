import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import store, { history } from './store/'
import HomePage from './components/Pages/HomePages'
import AboutUs from './components/Pages/AboutUs'
import Faq from './components/Pages/Faq'
import News from './components/Pages/News'
import NewsInside from './components/Pages/NewsInside'

const  App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/news" component={News} />
        <Route exact path="/newsinside" component={NewsInside} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
