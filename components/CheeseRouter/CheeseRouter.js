import './CheeseRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CheeseNav from 'components/CheeseNav/CheeseNav'
import Cheddars from 'components/Cheddars/Cheddars'
import Mozzarellas from 'components/Mozzarellas/Mozzarellas'
import Parmesans from 'components/Parmesans/Parmesans'

const CheeseRouter = function () {
  return (
    <BrowserRouter basename='/Cheeses'>
      <div className='CheeseRouter'>
        <header>
          <h2>Cheeses</h2>
        </header>

        <main>
          <CheeseNav />

          <Route exact path='/' component={Cheddars} />

          <Route path='/Cheddars' component={Cheddars} />

          <Route path='/Mozzarellas' component={Mozzarellas} />

          <Route path='/Parmesans' component={Parmesans} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default CheeseRouter
