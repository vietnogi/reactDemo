import './CheeseNavStyles'
import React from 'react'
import { CHEESE_NAVS } from './CheeseNavConstants'
import { Link } from 'react-router-dom'

const CheeseNav = () => {
  return (
    <nav className='CheeseNav'>
      <ul>
        {
          CHEESE_NAVS.map(({ label, url }) => {
            return (
              <li key={url}>
                <Link to={url}>{label}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default CheeseNav
