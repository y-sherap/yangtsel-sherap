import React from 'react'
import './portfolio.css'
import { useNavigate } from 'react-router-dom'

function Portfolio() {

    let navigate = useNavigate()

    const navigateToDHH = () => {
        navigate('/diasporahappyhour')
    }
return (
    <div id='portfolio-component'>
        <div className="portfolio-item">
            <a href="https://tibetan-alphabets.vercel.app/" target="_blank" rel="noreferrer">
            (01) tibetan alphabet</a>
        </div>
        <div className="portfolio-item">
            <a href="https://www.hostile-architecture.com/" target="_blank" rel="noreferrer">
            (02) hostile architecture</a>
        </div>
        <div className="portfolio-item" onClick={navigateToDHH}>
            (03) diaspora happy hour (coming soon) 
        </div>
        {/* <div className="portfolio-item">
            <a href="https://hostilearchitecture.vercel.app/" target="_blank" rel="noreferrer">
            (03) diaspora happy hour (coming soon) </a>
        </div> */}
    </div>
)
}

export default Portfolio