import logo from './assets/logo_central@2x.png'

export function Header() {
  return (
    <header className="hero__topbar">
      <div className="hero__brand">
        <span className="hero__brand-start">Start</span>
        <span className="hero__brand-separator"> ( </span>
        <span className="hero__rocket">🚀</span>
        <span className="hero__brand-separator"> ) </span>
        <span className="hero__brand-mission">Mission</span>
      </div>
      <div className="hero__meta">
        A ESCOLA START,<br />JANEIRO 2025 --<br />SEDE CAMPESTRE CENTRAL
      </div>
      <a href="https://central.online/startmission" className="hero__link">
        central.online<strong>/startmission</strong>
      </a>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}
