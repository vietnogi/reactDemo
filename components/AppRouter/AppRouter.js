import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Apples from 'components/Apples/Apples'

const AppRouter = function () {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Apples} />
        <Route path='/Apples' component={Apples} />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
