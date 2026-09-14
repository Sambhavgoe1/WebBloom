import logo from '../assets/webloom-logo.webp'
import { useState } from 'react'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav-wrap ${menuOpen ? 'menu-open' : ''}`}>
      <nav className="nav">

        <a className="brand" href="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Webloom"
            className="brand-logo"
          />
          
          <span className="brand-text">WEBLOOM</span>
        </a>

        <div className="nav-links" id="site-menu">
          <a href="/#work" onClick={closeMenu}>Work</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#services" onClick={closeMenu}>Services</a>
          <a href="/start-project" onClick={closeMenu}>Contact</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>
    </header>
  )
}