import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Rentals = ({ children }) => {
  return (
    <div className='jumbo'>
      <div className='right tomster' />

      <h2>Welcome!</h2>

      <p>We hope you find exactly what you're looking for in a place to stay.</p>

      <Link to='about' className='button'>About Us</Link>
    </div>
  )
}

Rentals.propTypes = {
  children: PropTypes.object,
}

export default Rentals
