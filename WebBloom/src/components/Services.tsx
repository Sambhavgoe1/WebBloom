const services = [
  [
    'Website Design',
    'Clear, memorable sites with an unmistakable point of view.'
  ],
  [
    'Development',
    'Fast, responsive builds that feel exceptional everywhere.'
  ],
  [
    'Landing Pages',
    'Focused experiences made to turn attention into action.'
  ],
  [
    'Redesigns',
    'A fresh perspective for a site that no longer feels like you.'
  ]
]

export function Services() {
  return (
    <section id="services" className="services section">
      
      <div className="services-intro">
        <div className="section-number">03 / WHAT WE DO</div>

        <h2>
          Digital presence,
          <br />
          <span>made more alive.</span>
        </h2>

        <p>
          From first sketch to final interaction, we make modern websites
          that do their job beautifully.
        </p>
      </div>

      <div className="service-grid">
        {services.map(([title, body], i) => (
          <div className="service" key={title}>
            
            <span className="service-no">
              0{i + 1}
            </span>

            <h3>{title}</h3>

            <p>{body}</p>

            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>

    </section>
  )
}