import React from 'react'
import './portfolio.css'

function Portfolio() {
return (
    <div id='portfolio-component'>

        <div className="portfolio-item">
        <a href="https://google.com" target="_blank" rel="noreferrer">
            <img className="portfolioImage" src="https://static.dezeen.com/uploads/2022/11/sumuyakushima-tono-architecture-residential-cooperative-housing-japan_dezeen_2364_col_0-852x568.jpg" alt="graph" />
            <div className="imageOverlay">
                <div className="imageTitle">Tibetan Alphabet</div>
            </div>
        </a>
        </div>

        <div className="portfolio-item">
        <a href="https://google.com" target="_blank" rel="noreferrer">
            <img className="portfolioImage" src="https://static.dezeen.com/uploads/2022/11/sumuyakushima-tono-architecture-residential-cooperative-housing-japan_dezeen_2364_col_0-852x568.jpg" alt="graph" />
            <div className="imageOverlay">
                <div className="imageTitle">Hostile Architecture </div>
            </div>
        </a>
        </div>

        <div className="portfolio-item">
        <a href="https://google.com" target="_blank" rel="noreferrer">
            <img className="portfolioImage" src="https://static.dezeen.com/uploads/2022/11/sumuyakushima-tono-architecture-residential-cooperative-housing-japan_dezeen_2364_col_0-852x568.jpg" alt="graph" />
            <div className="imageOverlay">
                <div className="imageTitle">Open Window</div>
            </div>
        </a>
        </div>
    </div>
)
}

export default Portfolio