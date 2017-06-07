import './OatsStyles'
import React from 'react'
import { OAT_IMAGE_URLS } from './OatsConstants'

const Oats = () => {
  return (
    <div className='Oats'>
      <h3>Oats</h3>

      <p>The wild ancestor of Avena sativa and the closely related minor crop, A. byzantina, is the hexaploid wild oat A. sterilis. Genetic evidence shows the ancestral forms of A. sterilis grew in the Fertile Crescent of the Near East. Domesticated oats appear relatively late, and far from the Near East, in Bronze Age Europe. Oats, like rye, are usually considered a secondary crop, i.e., derived from a weed of the primary cereal domesticates wheat and barley. As these cereals spread westwards into cooler, wetter areas, this may have favored the oat weed component, and have led to its domestication.</p>

      <ul>
        {
          OAT_IMAGE_URLS.map((url, i) => {
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

export default Oats
