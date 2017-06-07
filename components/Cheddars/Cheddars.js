import './CheddarsStyles'
import React from 'react'
import { CHEDDAR_IMAGE_URLS } from './CheddarsConstants'

const Cheddars = () => {
  return (
    <div className='Cheddars'>
      <h3>Cheddars</h3>

      <p>Cheddar cheese is a relatively hard, off-white (or orange if spices such as annatto are added), sometimes sharp-tasting (i.e., bitter[1]), natural cheese. Originating in the British village of Cheddar in Somerset,[2] cheeses of this style are produced beyond this region and in several countries around the world.</p>

      <p>Cheddar is the most popular type of cheese in the UK, accounting for 51% of the country's £1.9 billion annual cheese market.[3] It is also the second-most popular cheese in the US (behind mozzarella), with an average annual consumption of 10 lb (4.5 kg) per capita.[4] The US produced approximately 3,000,000,000 lb (1,300,000 long tons; 1,400,000 tonnes) in 2014,[5] and the UK 258,000 long tons (262,000 tonnes) in 2008.[6]</p>

      <ul>
        {
          CHEDDAR_IMAGE_URLS.map((url, i) => {
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

export default Cheddars
