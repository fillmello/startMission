import banner from './assets/bannerHeader.jpeg'
import overlay from './assets/bannerHeaderOverlay.png'
import overlays from './assets/fundoVazio.png'
import './App.css'

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
          <div className="hero__topbar">
            <span className="hero__brand">
              <span className="hero__brand-start">Start</span> ( <span className="hero__rocket">🚀</span> ) <span className="hero__brand-mission">Mission</span>
            </span>
            <span className="hero__meta">
              A ESCOLA START,<br />JANEIRO 2025 --<br />SEDE CAMPESTRE CENTRAL
            </span>
            <span className="hero__link">
              central.online<strong>/startmission</strong>
            </span>
            <span className="hero__badge" aria-hidden="true">
              Ⓒ
            </span>
          </div>

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
