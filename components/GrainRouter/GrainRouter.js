import './GrainRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Oats from 'components/Oats/Oats'
import GrainNav from 'components/GrainNav/GrainNav'

const GrainRouter = function () {
  return (
    <BrowserRouter basename='/Grains'>
      <div className='GrainRouter'>
        <header>
          <h2>My Grains</h2>
        </header>

        <main>
          <GrainNav />

          <Route exact path='/' component={Oats} />

          <Route path='/Oats' component={Oats} />

        </main>
      </div>
    </BrowserRouter>
  )
}

export default GrainRouter
