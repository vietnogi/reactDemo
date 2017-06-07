import './FoodRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FoodNav from 'components/FoodNav/FoodNav'
import FruitRouter from 'components/FruitRouter/FruitRouter'
import GrainRouter from 'components/GrainRouter/GrainRouter'
import CheeseRouter from 'components/CheeseRouter/CheeseRouter'

const FoodRouter = function () {
  return (
    <BrowserRouter>
      <div className='FoodRouter'>
        <header>
          <h1>My Food App</h1>
        </header>

        <FoodNav />

        <Route exact path='/' component={FruitRouter} />

        <Route path='/Fruits' component={FruitRouter} />

        <Route path='/Grains' component={GrainRouter} />

        <Route path='/Cheeses' component={CheeseRouter} />
      </div>
    </BrowserRouter>
  )
}

export default FoodRouter
