import {Route, Routes} from 'react-router'
import Navbar from "./components/nav/Navbar"
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import DiasporaHappyHour from './pages/diasporahappyhour/DiasporaHappyHour'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />   
          <Route path='/info' element={ <Info /> } />  
          <Route path='/diasporahappyhour' element={ <DiasporaHappyHour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
