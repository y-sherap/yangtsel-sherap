import React from 'react'
import './portfolio.css'

function Portfolio() {
return (
    <div id='portfolio-component'>
        <div className="portfolio-item">
        <a href="https://tibetan-alphabets.vercel.app/" target="_blank" rel="noreferrer">
        <div className="imageTitle">Tibetan Alphabet</div>
        <div className="imageTitleYear">2023</div>
            <img className="portfolioImage" src="https://t4.ftcdn.net/jpg/04/67/68/61/360_F_467686172_2201i5Pl8hflghzOBNfJwy8yoTcf8lvM.jpg" alt="graph" />
        </a>
        </div>
    </div>
)
}

export default Portfolio