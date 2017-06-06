import React from 'react'
import { FRUIT_NAVS } from './FruitNavConstants'
import { Link } from 'react-router-dom'

const FruitNav = () => {
  return (
    <nav className='FruitNav'>
      <ul>
        {
          FRUIT_NAVS.map(({ label, url }) => {
            return (
              <li>
                <Link to={url} key={url}>{label}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default FruitNav
