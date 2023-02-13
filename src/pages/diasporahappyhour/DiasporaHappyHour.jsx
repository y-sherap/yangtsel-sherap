import React from 'react'
import './diasporahappyhour.css'
import image1 from './images/dhh-1.jpg'
import image2 from './images/dhh-2.jpg'
import image3 from './images/dhh-3.jpg'
import image4 from './images/dhh-4.jpg'
import image5 from './images/dhh-5.jpg'
import image6 from './images/dhh-6.jpg'
import image7 from './images/dhh-7.jpg'
import image8 from './images/dhh-8.jpg'

function DiasporaHappyHour() {
  return (
    <div id='diaspora-page'>
      <div id='diaspora-right'>
        <div id='images'>
          <div className='image-item'>
            <img src={image1} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image2} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image3} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image4} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image5} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image6} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image7} alt='distorted image' />
          </div>
          <div className='image-item'>
            <img src={image8} alt='distorted image' />
          </div>
        </div>
        <div id='diaspora-left'>
          <div className='left-text'>As a first generation immigrant in the United States and a third generation immigrant in India, my memories of "home" are just as distorted as these images I stumbled across while on google maps.</div>
          <div className='left-text'>Diaspora Happy Hour is my attempt to map my identity and feed my nostalgia for my homeland, both in India and Tibet.  </div>
      </div>
      </div>
    </div>
  )
}

export default DiasporaHappyHour