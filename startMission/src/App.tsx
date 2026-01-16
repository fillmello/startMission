import banner from './assets/bannerHeader.jpeg'
import overlay from './assets/bannerHeaderOverlay.png'
import './App.css'
import { Header } from './Header'

function App() {
  return (
    <div className="page" style={{ backgroundImage: `url(${banner})` }}>
      <img
        src={overlay}
        alt="Start Mission overlay"
        className="hero__overlay"
      />
      
      <Header />

      <h1 className="hero__title">
        Assuma o seu
        <br />
        lugar no reino:
      </h1>

      <p className="hero__cta">
        sim, você tem
        <br />
        um chamado
        <br />
        para missões.
      </p>

      <ul className="hero__bullets" aria-hidden="true">
        <li className="hero__bullet hero__bullet--1"></li>
        <li className="hero__bullet hero__bullet--2"></li>
        <li className="hero__bullet hero__bullet--3"></li>
        <li className="hero__bullet hero__bullet--4"></li>
      </ul>

      <div className="hero__globe" aria-hidden="true">
        <div className="hero__globe-icon"></div>
      </div>
    </div>
  )
}

export default App
