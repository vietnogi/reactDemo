import './MozzarellasStyles'
import React from 'react'
import { MOZZARELLAS_IMAGE_URLS } from './MozzarellasConstants'

const Mozzarellas = () => {
  return (
    <div className='Mozzarellas'>
      <h3>Mozzarellas</h3>

      <p>The wild ancestor of Avena sativa and the closely related minor crop, A. byzantina, is the hexaploid wild oat A. sterilis. Genetic evidence shows the ancestral forms of A. sterilis grew in the Fertile Crescent of the Near East. Domesticated oats appear relatively late, and far from the Near East, in Bronze Age Europe. Mozzarellas, like rye, are usually considered a secondary crop, i.e., derived from a weed of the primary cereal domesticates wheat and barley. As these cereals spread westwards into cooler, wetter areas, this may have favored the oat weed component, and have led to its domestication.</p>

      <ul>
        {
          MOZZARELLAS_IMAGE_URLS.map((url, i) => {
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

export default Mozzarellas
