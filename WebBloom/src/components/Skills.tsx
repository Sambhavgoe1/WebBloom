const stack = [
  'React',
  'TypeScript',
  'UI / UX',
  'Responsive',
  'Performance',
  'CSS',
  'Git',
  'Accessibility',
  'JavaScript'
]

export function Skills() {
  return (
    <section className="skills section">
      <div className="skills-panel">

        <div className="section-number">
          04 / OUR TOOLBOX
        </div>

        <h2>
          Fluent in the
          <br />
          <em>good stuff.</em>
        </h2>

        <p>
          Modern technology, considered details, and the craft to make both
          disappear into a great experience.
        </p>

        <div className="skills-cloud">
          {stack.map((s, i) => (
            <span
              key={s}
              className={`skill-tag whitespace-nowrap px-4 py-2 rounded-full tag-${i}`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <div className="core">
          WB
        </div>

      </div>
    </section>
  )
}