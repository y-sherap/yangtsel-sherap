import './nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div id="navContainer">
            <div id='nav-title'>
                <Link to='/'>yangtsel sherap 𓆟</Link>
            </div>
            <div>
                <Link to='/work'>work</Link>
            </div>

            
        </div>

    </div>
)
}


export default Navbar