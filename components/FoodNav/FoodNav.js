import './FoodNavStyles'
import React from 'react'
import { FOOD_NAVS } from './FoodNavConstants'
import { Link } from 'react-router-dom'

const FoodNav = () => {
  return (
    <nav className='FoodNav'>
      <ul>
        {
          FOOD_NAVS.map(({ label, url }) => {
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

export default FoodNav
