import './PearsStyles'
import React from 'react'
import { PEAR_IMAGE_URLS } from './PearsConstants'

const Pears = () => {
  return (
    <div className='Pears'>
      <h3>Pears</h3>

      <p>The pear is native to coastal and mildly temperate regions of the Old World, from western Europe and north Africa east right across Asia. It is a medium-sized tree, reaching 10–17 metres (33–56 ft) tall, often with a tall, narrow crown; a few species are shrubby.</p>

      <ul>
        {
          PEAR_IMAGE_URLS.map((url, i) => {
            return (
              <li key={i}>
                <img src={url} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Pears
