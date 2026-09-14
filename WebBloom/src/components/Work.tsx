import jindalHydroImage from '../assets/jindal-hydro.webp'
import autocuroImage from '../assets/autocuro.webp'
import projectThreeImage from '../assets/radhey-ki-rasoi.webp'
import drVandanaImage from '../assets/dr-vandana.png'

interface Project {
  number: string
  title: string
  type: string
  description: string
  image: string
  link: string
  featured?: boolean
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Jindal Hydro Projects',
    type: 'MANUFACTURING · CORPORATE WEBSITE',
    description:
      'A modern digital presence for a hydraulic machinery manufacturer, built to showcase products, engineering capabilities and decades of experience.',
    image: jindalHydroImage,
    link: 'https://jindalhydro.com/',
    featured: true
  },
  {
    number: '02',
    title: 'AutoCuro',
    type: 'DEEP TECH · PRODUCT WEBSITE',
    description:
      'A modern product experience for an AI-driven PCB placement and routing platform built for the next generation of electronics design.',
    image: autocuroImage,
    link: 'https://autocuro.com/'
  },
  {
    number: '03',
    title: 'Radhey Ki Rasoi',
    type: 'RESTAURANT · FOOD EXPERIENCE',
    description:
      'A warm and visually engaging digital experience designed for a restaurant, bringing its food, atmosphere and personality to life online.',
    image: projectThreeImage,
    link: 'https://radhey-ki-rasoi.vercel.app/'
  },
  {
    number: '04',
    title: 'Dr. Vandana Malhotra Goel - Medical Portfolio',
    type: 'MEDICAL · PERSONAL WEBSITE',
    description:
      'A modern, responsive personal website for a medical professional, featuring an appointment contact form and built with React, TypeScript, Tailwind CSS, and a Google Sheets backend.',
    image: drVandanaImage,
    link: 'https://dr-vandana.vercel.app/'
  }
]

function ProjectCard({ project }: { project: Project }) {
  const handleClick = () => {
    if (project.link !== '#') {
      window.open(
        project.link,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  return (
    <article
      className={`work-project ${
        project.featured ? 'featured-project' : ''
      }`}
    >
      <div
        className="work-image-wrap"
        onClick={handleClick}
        role="link"
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            event.key === 'Enter' &&
            project.link !== '#'
          ) {
            handleClick()
          }
        }}
      >
        <div className="browser-bar">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="browser-label">
            WEBLOOM / SELECTED WORK
          </span>

          <span className="browser-arrow">↗</span>
        </div>

        <div className="work-image">
          <img
            src={project.image}
            alt={`${project.title} website preview`}
          />
        </div>

        <div className="work-hover">
          <span>VIEW LIVE WEBSITE</span>

          <div className="work-hover-arrow">
            ↗
          </div>
        </div>
      </div>

      <div className="work-project-info">

        <div className="work-project-main">
          <span className="work-number">
            {project.number}
          </span>

          <h3>{project.title}</h3>
        </div>

        <div className="work-project-description">

          <p className="project-type">
            {project.type}
          </p>

          <p>
            {project.description}
          </p>

        </div>

        {project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
            aria-label={`Visit ${project.title}`}
          >
            ↗
          </a>
        )}

      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="work section">

      <div className="work-heading">

        <div>
          <div className="section-number">
            02 / SELECTED WORK
          </div>

          <h2>
            Things we've built.
            <br />
            <em>Things that work.</em>
          </h2>
        </div>

        <div className="work-heading-copy">
          <p>
            A selection of websites and digital experiences
            designed and developed with clarity, personality
            and performance in mind.
          </p>

          <span>
            04 PROJECTS · AND GROWING
          </span>
        </div>

      </div>

      <div className="work-showcase">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}

      </div>

      <div className="work-bottom-message">

        <span className="work-line" />

        <p>
          YOUR PROJECT COULD BE
          <em> NEXT.</em>
        </p>

        <a href="#contact">
          LET'S TALK ↗
        </a>

      </div>

    </section>
  )
}