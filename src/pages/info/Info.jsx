import React from 'react'
import './info.css'

function Info() {
  return (
    <div id='info-page'>
      <div id='info'>
          <div className='info-item'>Yangtsel (she/her) is a NYC based software engineer exploring alternative ways of interacting and sharing knowledge on the web~</div> 
          <div className='info-item'>She is interested in the confluence between technology and the natural and built environments and how these forces shape the world around us.</div>

        <div className='info-item'>Her influences include:
        <ul>
          <li><a href='https://www.versobooks.com/books/2163-extrastatecraft'>Keller Easterling</a></li>
          <li><a href='https://solar.lowtechmagazine.com/'>Low-Tech Magazine</a></li>
          <li><a href='http://dunneandraby.co.uk/content/projects'>Anthony Dunne and Fiona Raby</a></li>
          <li><a href='https://placesjournal.org/article/maintenance-and-care/?cn-reloaded=1&cn-reloaded=1'>'Maintenance and Care' - Shannon Mattern</a></li>
        </ul>
        </div>
        <div id="contact">
          <div className='contact-item-0'>
          <a href="https://read.cv/ysherap" rel="noreferrer" target="_blank">cv</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://github.com/y-sherap" rel="noreferrer" target="_blank">github</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://www.are.na/yangtsel-sherap" rel="noreferrer" target="_blank">are.na</a>
          </div>
      </div>
      </div>
      </div>
  )
}

export default Info

