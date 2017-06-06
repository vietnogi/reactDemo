import './FoodRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FoodNav from 'components/FoodNav/FoodNav'
import FruitRouter from 'components/FruitRouter/FruitRouter'

const FoodRouter = function () {
  return (
    <BrowserRouter>
      <div className='FoodRouter'>
        <header>
          <h1>My Food App</h1>
        </header>

        <FoodNav />

        <Route exact path='/' component={FruitRouter} />

        <Route exact path='/Fruits' component={FruitRouter} />
      </div>
    </BrowserRouter>
  )
}

export default FoodRouter
