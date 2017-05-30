import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from 'components/App/App'
import Rentals from 'components/Rentals/Rentals'

const AppRouter = function () {
  return (
    <Router>
      <Route path='/' component={App} >
        <IndexRoute component={Rentals} />
      </Route>
    </Router>
  )
}

export default AppRouter
