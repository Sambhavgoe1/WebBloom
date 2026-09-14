const builders = [
  {
    initials: 'PJ',
    name: 'Preyanshe Jindal',
    phone: '9868247245',
    email: 'pre13305@gmail.com',
    accent: 'blue',
    role: 'DESIGN · DIRECTION'
  },
  {
    initials: 'SG',
    name: 'Sambhav Goel',
    phone: '9540099098',
    email: 'sambhav.goel.03@gmail.com',
    accent: 'indigo',
    role: 'DEVELOPMENT · BUILD'
  }
]

export { builders }

export function ContactPage() {
  return (
    <section className="inner-page contact-page">
      <div className="inner-page-hero">
        <div className="section-number">01 / CONTACT WEBLOOM</div>
        <h1>Let’s make<br /><em>something matter.</em></h1>
        <p>Have a question, an early idea, or a project ready to move? Reach the builders directly.</p>
      </div>

      <div className="contact-grid">
        {builders.map((builder) => (
          <article id={builder.initials} className={`contact-card ${builder.accent}`} key={builder.email}>
            <div className="contact-card-visual"><span>{builder.initials}</span><small>// WEBLOOM<br />BUILDER</small></div>
            <div className="contact-card-body">
              <div><p className="eyebrow-left">{builder.role}</p><h2>{builder.name}</h2></div>
              <div className="contact-details">
                <a href={`tel:${builder.phone}`}>{builder.phone}</a>
                <a href={`mailto:${builder.email}`}>{builder.email}</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="page-return"><a className="under-link" href="/start-project">Start your project <b>→</b></a></div>
    </section>
  )
}