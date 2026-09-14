import logo from '../assets/webloom-logo.webp'

export function Footer() {
  return (
    <footer>

      <a href="/" className="brand">
        <img
          src={logo}
          alt="Webloom"
          className="footer-logo"
        />

        <span className="brand-name">
          WEBLOOM
        </span>

        <sup>®</sup>
      </a>

      <p>
        © 2026 WEBLOOM STUDIO. CRAFTED WITH INTENT.
      </p>

      <div>
        <a href="/#work">Work</a>
        <a href="/contact">Contact</a>
        <a href="/start-project">Start a project →</a>
      </div>

    </footer>
  )
}