import React from 'react'
import './info.css'

function Info() {
  return (
    <div id='info-page'>
      <div id='info'>
          <div className='info-item'>Hi I'm Yangtsel (ﾉ´ヮ´)ﾉ*:･ﾟ✧.</div>
          
          <div className='info-item'>Hope you had a pleasant journey navigating your way to my corner of the internet. I am a NYC based software engineer exploring alternative ways of interacting and sharing knowledge on the web~</div> 
          <div className='info-item'>I am interested in the confluence between technology and our natural and built environments and how these forces shape the world around us.</div>

        <div className='info-item'>Some of my influences include:
        <ul>
          <li><a href='https://www.versobooks.com/books/2163-extrastatecraft'>Keller Easterling ↗</a></li>
          <li><a href='https://solar.lowtechmagazine.com/'>Low-Tech Magazine ↗</a></li>
          <li><a href='http://dunneandraby.co.uk/content/projects'>Anthony Dunne and Fiona Raby ↗</a></li>
        </ul>
        </div>
      </div>

      <div id="contact">
          <div className='contact-item-0'>
          <a href="https://read.cv/ysherap" rel="noreferrer" target="_blank">cv</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://linkedin.com/in/ysherap" rel="noreferrer" target="_blank">linkedin</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://github.com/y-sherap" rel="noreferrer" target="_blank">github</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://www.are.na/yangtsel-sherap" rel="noreferrer" target="_blank">are.na</a>
          </div>
          <div>/</div>
          <div className='contact-item'>
          <a href="https://twitter.com/realityforsale" rel="noreferrer" target="_blank">twitter</a>
          </div>
      </div>
      </div>
  )
}

export default Info

