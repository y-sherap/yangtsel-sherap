import React from 'react'
import './portfolio.css'

function Portfolio() {
return (
    <div id='portfolio-component'>
        <div className="portfolio-item">
            <a href="https://semba.vercel.app/" target="_blank" rel="noreferrer">
            (01) semba health</a>
        </div>
        <div className="portfolio-item">
            <a href="https://tibetan-alphabets.vercel.app/" target="_blank" rel="noreferrer">
            (02) tibetan alphabet</a>
        </div>
        <div className="portfolio-item">
            <a href="https://www.hostile-architecture.com/" target="_blank" rel="noreferrer">
            (03) hostile architecture</a>
        </div>
        <div className="portfolio-item">
        <a href="https://yangtsel.world/diasporahappyhour" target="_blank" rel="noreferrer">
            (04) diaspora happy hour</a>
        </div>
    </div>
)
}

export default Portfolio