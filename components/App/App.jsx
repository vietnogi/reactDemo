import './AppS'

import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  return (
    <main>{children}</main>
  )
}

App.propTypes = {
  children: PropTypes.object,
}

export default App
