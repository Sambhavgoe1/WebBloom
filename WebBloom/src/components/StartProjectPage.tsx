import { builders } from './ContactPage'

export function StartProjectPage() {
  return (
    <section className="inner-page start-page">
      <div className="inner-page-hero">
        <div className="section-number">02 / START A PROJECT</div>
        <h1>Bring us the<br /><em>rough idea.</em></h1>
        <p>Meet the people behind Webloom and reach out directly about your next project.</p>
      </div>

      <div className="builders-strip">
        <div><div className="section-number">MEET THE BUILDERS</div><h2>Two minds,<br /><em>one craft.</em></h2></div>
        <div className="builder-list">
          {builders.map((builder) => <div className="builder-row" id={builder.initials} key={builder.email}>
            <span className={`builder-mark ${builder.accent}`}>{builder.initials}</span>
            <span><strong>{builder.name}</strong><small>{builder.role}</small><span className="builder-contact"><a href={`tel:${builder.phone}`}>{builder.phone}</a><a href={`mailto:${builder.email}`}>{builder.email}</a></span></span>
            <b>→</b>
          </div>)}
        </div>
      </div>
    </section>
  )
}