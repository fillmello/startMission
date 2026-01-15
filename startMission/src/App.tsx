import banner from './assets/bannerHeader.jpeg'
import overlay from './assets/fundoVazio.png'
import './App.css'
import { Header } from './Header'

function App() {
  return (
    <div className="page">
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <img
          src={overlay}
          alt="Start Mission overlay"
          className="hero__overlay"
        />
        <div className="hero__layer">
          <Header />

          <div className="hero__title">
            Assuma o seu
            <br />
            lugar no reino:
          </div>

          <div className="hero__cta">
            sim, você tem
            <br />
            um chamado
            <br />
            para missões.
          </div>

          <div className="hero__bullets" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="hero__globe" aria-hidden="true">
            <span className="hero__globe-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
