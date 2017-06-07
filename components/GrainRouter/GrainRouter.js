import './GrainRouterStyles'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GrainNav from 'components/GrainNav/GrainNav'
import Oats from 'components/Oats/Oats'
import Rice from 'components/Rice/Rice'
import Maize from 'components/Maize/Maize'

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

          <Route path='/Rice' component={Rice} />

          <Route path='/Maize' component={Maize} />

        </main>
      </div>
    </BrowserRouter>
  )
}

export default GrainRouter
