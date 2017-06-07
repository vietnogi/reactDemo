import './MaizeStyles'
import React from 'react'
import { MAIZE_IMAGE_URLS } from './MaizeConstants'

const Maize = () => {
  return (
    <div className='Maize'>
      <h3>Maize</h3>

      <p>Maize (/ˈmeɪz/ MAYZ; Zea mays subsp. mays, from Spanish: maíz after Taíno mahiz), also known as corn, is a large grain plant first domesticated by indigenous peoples in southern Mexico[1] about 10,000 years ago. The leafy stalk of the plant produces separate pollen and ovuliferous inflorescences or ears, which are fruits, yielding kernels or seeds.</p>

      <ul>
        {
          MAIZE_IMAGE_URLS.map((url, i) => {
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

export default Maize
