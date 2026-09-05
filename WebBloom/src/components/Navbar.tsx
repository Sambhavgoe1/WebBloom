import logo from '../assets/webloom-logo.webp'

export function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav">

        <a className="brand" href="#top">
          <img
            src={logo}
            alt="Webloom"
            className="brand-logo"
          />
          
          <span className="brand-text">WEBLOOM</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>

        <a className="nav-cta" href="#contact">
          Start a project <span>→</span>
        </a>

      </nav>
    </header>
  )
}