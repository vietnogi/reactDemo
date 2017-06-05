import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from 'components/App/App'
import Apples from 'components/Apples/Apples'

const AppRouter = function () {
  return (
    <Router>
      <Route path='/' component={App} >
        <IndexRoute component={Apples} />
      </Route>
    </Router>
  )
}

export default AppRouter
