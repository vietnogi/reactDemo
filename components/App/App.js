import './AppStyles'

import React from 'react'
import FruitNav from 'components/FruitNav/FruitNav'
import AppRouter from 'components/AppRouter/AppRouter'

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>Fruits</h1>
      </header>

      <FruitNav />

      <AppRouter />
    </div>
  )
}

export default App
