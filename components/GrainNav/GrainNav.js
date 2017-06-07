import './GrainNavStyles'
import React from 'react'
import { GRAIN_NAVS } from './GrainNavConstants'
import { Link } from 'react-router-dom'

const GrainNav = () => {
  return (
    <nav className='GrainNav'>
      <ul>
        {
          GRAIN_NAVS.map(({ label, url }) => {
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

export default GrainNav
