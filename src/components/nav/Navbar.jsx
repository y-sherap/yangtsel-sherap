import './nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div id="navContainer">
            <div id='nav-title'>
                <Link to='/'>Yangtsel Sherap 𓆟</Link>
            </div>
            <div id='nav-title'>
                <Link to='/work'>Portfolio</Link>
            </div>

            
        </div>

    </div>
)
}


export default Navbar