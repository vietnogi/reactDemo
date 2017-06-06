import './FruitRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Apples from 'components/Apples/Apples'
import Pears from 'components/Pears/Pears'
import FruitNav from 'components/FruitNav/FruitNav'

const AppRouter = function () {
  return (
    <BrowserRouter basename='/Fruits'>
      <div className='FruitRouter'>
        <header>
          <h2>Fruits</h2>
        </header>

        <main>
          <FruitNav />

          <Route exact path='/' component={Apples} />

          <Route path='/Apples' component={Apples} />

          <Route path='/Pears' component={Pears} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
