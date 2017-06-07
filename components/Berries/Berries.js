import './BerriesStyles'
import React from 'react'
import { BERRY_IMAGE_URLS } from './BerriesConstants'

const Berries = () => {
  return (
    <div className='Berries'>
      <h3>Berries</h3>

      <p>Berries have been valuable as a food source for humans since before the start of agriculture, and remain among the primary food sources of other primates. They were a seasonal staple for early hunter-gatherers for thousands of years, and wild berry gathering remains a popular activity in Europe and North America today. In time, humans learned to store berries so that they could be used in the winter. They may be made into fruit preserves, and among Native Americans, mixed with meat and fats as pemmican.</p>

      <ul>
        {
          BERRY_IMAGE_URLS.map((url, i) => {
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

export default Berries
