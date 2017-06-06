import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Apples from 'components/Apples/Apples'
import FruitNav from 'components/FruitNav/FruitNav'

const AppRouter = function () {
  return (
    <BrowserRouter>
      <div className='AppRouter'>
        <header>
          <h1>Fruits</h1>
        </header>

        <FruitNav />

        <Route exact path='/' component={Apples} />

        <Route path='/Apples' component={Apples} />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
