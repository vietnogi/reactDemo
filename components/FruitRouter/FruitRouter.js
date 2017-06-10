import './FruitRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Apples from 'components/Apples/Apples'
import Pears from 'components/Pears/Pears'
import Berries from 'components/Berries/Berries'
import FruitNav from 'components/FruitNav/FruitNav'
import CheeseRouter from 'components/CheeseRouter/CheeseRouter'

const FruitRouter = function () {
  return (
    <BrowserRouter basename='/Fruits'>
      <div className='FruitRouter'>
        <header>
          <h2>My Fruits</h2>
        </header>

        <main>
          <FruitNav />

          <Route exact path='/' component={Apples} />

          <Route path='/Apples' component={Apples} />

          <Route path='/Pears' component={Pears} />

          <Route path='/Berries' component={Berries} />

          <CheeseRouter basename={'/Fruits'} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default FruitRouter
