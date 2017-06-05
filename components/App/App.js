import './AppS'

import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  return (
    <div className='App'>
      <header>
        <h1>Fruits</h1>
      </header>

      <main className='App'>
        {children}
      </main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object,
}

export default App
