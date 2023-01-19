import {Route, Routes} from 'react-router'
import Navbar from "./components/nav/Navbar"
import Home from './pages/home/Home'
import Info from './pages/info/Info'


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />   
          <Route path='/#about' element={ <Info /> } />  
        </Routes>
      </main>
    </div>
  )
}

export default App