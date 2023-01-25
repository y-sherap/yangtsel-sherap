import React from 'react'
import './portfolio.css'

function Portfolio() {
return (
    <div id='portfolio-component'>
        <div className="portfolio-item">
        <a href="https://tibetan-alphabets.vercel.app/" target="_blank" rel="noreferrer">
            <img className="portfolioImage" src="https://www.lookandlearn.com/history-images/preview/YW/YW018/YW018270V_Circle-Watercolour-by-a-Tibetan-painter.jpg" alt="graph" />
        <div className="imageTitle">Tibetan Alphabet</div>
        </a>
        </div>
    </div>
)
}

export default Portfolio