import './nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div id="navContainer">
            <div id='nav-title'>
                <Link to='/'>yangtsel sherap</Link>
            </div>
            <div id='nav-right'>
                <Link to='/info'>info</Link>
            </div>
        </div>

    </div>
)
}


export default Navbar