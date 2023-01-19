import './nav.css'
import MobileNav from './MobileNav'
import Navigation from './Navigation'

const Navbar = () => {

  return (
      <div id="navbarContainer">
        <MobileNav />
        <Navigation />
      </div>
  )
}

export default Navbar