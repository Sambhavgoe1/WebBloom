import type { ReactNode } from 'react'

const Glyph = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={`float-card ${className}`}>
    {children}
  </div>
)

export function Hero() {
  return (
    <section className="hero-section" id="top">

      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-grid" />

      {/* Floating Code Card */}
      <Glyph className="code-card">
        <i>const</i> impact = <b>∞</b>
        <br />
        <span>build(remarkable)</span>
      </Glyph>

      {/* Floating Browser Card */}
      <Glyph className="mini-browser">
        <div className="browser-dots">
          <b />
          <b />
          <b />
        </div>

        <div className="browser-wave" />
        <div className="browser-line" />
      </Glyph>

      {/* Floating Plus Card */}
      <Glyph className="plus-card">
        ✦
      </Glyph>

      {/* Main Hero Content */}
      <div className="hero-content">

        <p className="eyebrow">
          <span className="status-dot" />
          Digital studio · Est. 2024
        </p>

        <h1>
          WE BUILD
          <br />
          <em>websites</em> PEOPLE
          <br />
          REMEMBER
          <span className="blue-dot">.</span>
        </h1>

        <p className="hero-copy">
          WEBLOOM is a two-developer studio creating sharp, fast,
          and visually unforgettable digital spaces for businesses
          with something to say.
        </p>

        <div className="hero-actions">

          <a href="#work" className="primary-button">
            Explore our work
          </a>

          <a href="#contact" className="text-button">
            Let’s build something
          </a>

        </div>

      </div>

      {/* Bottom Hero Information */}
      <div className="hero-meta">

        <span>
          SCROLL TO EXPLORE <i>↓</i>
        </span>

        <div className="meta-line" />

        <span>
          BASED IN INDIA · WORKING WORLDWIDE
        </span>

      </div>

      {/* Statistics */}
      <div className="stats-pill">

        <div>
          <b>02</b>
          <span>DEVELOPERS</span>
        </div>

        <div>
          <b>∞</b>
          <span>IDEAS</span>
        </div>

        <div>
          <b>24/7</b>
          <span>OBSESSED</span>
        </div>

      </div>

    </section>
  )
}