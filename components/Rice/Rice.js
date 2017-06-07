import './RiceStyles'
import React from 'react'
import { RICE_IMAGE_URLS } from './RiceConstants'

const Rice = () => {
  return (
    <div className='Rice'>
      <h3>Rice</h3>

      <p>Rice is the seed of the grass species Oryza sativa (Asian rice) or Oryza glaberrima (African rice). As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia. It is the agricultural commodity with the third-highest worldwide production (rice, 741.5 million tonnes in 2014), after sugarcane (1.9 billion tonnes) and maize (1.0 billion tonnes).</p>

      <ul>
        {
          RICE_IMAGE_URLS.map((url, i) => {
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

export default Rice
