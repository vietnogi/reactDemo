import './ApplesS'

import React from 'react'
import PropTypes from 'prop-types'

import { APPLE_IMAGE_URLS } from 'constants/imageUrlsConstants'

const Rentals = ({ children }) => {
  return (
    <div className='Apples'>
      <h2>Apples!</h2>

      <p>The apple tree (Malus pumila, commonly and erroneously called Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.</p>

      <ul>
        {
          APPLE_IMAGE_URLS.map((url) => {
            return (
              <li>
                <img src={url} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

Rentals.propTypes = {
  children: PropTypes.object,
}

export default Rentals
