const people = [
  {
    name: 'Preyanshe Jindal',
    initial: 'PJ',
    accent: 'blue',
    about:
      'Thoughtful systems, sharp visual thinking, and an obsession with what makes a site click.'
  },
  {
    name: 'Sambhav Goel',
    initial: 'SG',
    accent: 'indigo',
    about:
      'Bringing ideas to life with clean code, considered motion, and a focus on the finish.'
  }
]

export function Team() {
  return (
    <section id="team" className="team section">
      
      <div className="team-heading">
        <div className="section-number">
          06 / THE BUILDERS
        </div>

        <h2>
          Built by people
          <br />
          <em>who care.</em>
        </h2>
      </div>

      <div className="people">
        {people.map((p) => (
          <article
            className={`person ${p.accent}`}
            key={p.name}
          >
            
            <div className="person-visual">
              <span className="person-initial">
                {p.initial}
              </span>

              <span className="person-coordinate">
                22.5726° N
                <br />
                88.3639° E
              </span>

              <span className="person-detail">
                // WEBLOOM
                <br />
                CO-BUILDER
              </span>
            </div>

            <div className="person-info">
              
              <div>
                <p>
                  DEVELOPER · CO-BUILDER
                </p>

                <h3>{p.name}</h3>
              </div>

              <p>{p.about}</p>

            </div>

          </article>
        ))}
      </div>

    </section>
  )
}