import logo from './assets/logo_central@2x.png'

export function Header() {
  return (
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
      <span className="logo">
        <img src={logo} alt="logo" />
      </span>
    </div>
  )
}
