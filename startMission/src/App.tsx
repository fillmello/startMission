import banner from './assets/bannerHeader.jpeg'
import './App.css'
import { SubHeader } from './SubHeader'

function App() {
  return (
    <div className="page" style={{ backgroundImage: `url(${banner})` }}>      
      <SubHeader />


      <ul className="hero__bullets top-[60%]" aria-hidden="true">
        <li className="hero__bullet hero__bullet--1"></li>
        <li className="hero__bullet hero__bullet--2"></li>
        <li className="hero__bullet hero__bullet--3"></li>
        <li className="hero__bullet hero__bullet--4"></li>
      </ul>
    </div>
  )
}

export default App
