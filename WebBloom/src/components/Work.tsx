import { useRef, useState } from 'react'

import jhpVideo from '../assets/jindal-hydro.mp4'
import autocuroVideo from '../assets/autocuro.mp4'

interface Project {
  title: string
  type: string
  description: string
  color: string
  tag: string
  link: string
  video: string
}

const projects: Project[] = [
  {
    title: 'Jindal Hydro Projects',
    type: 'MANUFACTURING · CORPORATE SITE',
    description:
      'A digital presence for a hydraulic baler and recycling machinery manufacturer, exporting since 1976.',
    color: 'amber',
    tag: 'JHP',
    link: 'https://jindalhydro.com/',
    video: jhpVideo
  },
  {
    title: 'AutoCuro',
    type: 'DEEP TECH · PCB AUTOMATION',
    description:
      'A product site for an AI-driven PCB placement and routing platform built for Altium, KiCad and Cadence.',
    color: 'violet',
    tag: 'AC',
    link: 'https://autocuro.com/',
    video: autocuroVideo
  }
]

function Preview({
  project,
  index
}: {
  project: Project
  index: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className={`project-preview ${project.color}`}>

      <div className="preview-top">
        <span>
          ● &nbsp;
          {project.title === 'Jindal Hydro Projects'
            ? 'jindalhydro.com'
            : 'autocuro.com'}
        </span>

        <span>↗</span>
      </div>

      <div className="preview-ui website-video">

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {!isPlaying && (
          <button
            type="button"
            className="video-play-button"
            onClick={handlePlay}
            aria-label={`Play ${project.title} preview`}
          >
            <span>▶</span>
          </button>
        )}

      </div>

      <div className="preview-footer">

        <span>
          {isPlaying
            ? 'LIVE WEBSITE PREVIEW'
            : 'CLICK TO PLAY'}
        </span>

        <span>
          0{index + 1} — 0{projects.length}
        </span>

      </div>

    </div>
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
            Made to be
            <br />
            <em>remembered.</em>
          </h2>

        </div>

        <p>
          A small selection of ambitious ideas we've helped turn into
          memorable digital experiences.
        </p>

      </div>

      <div className="project-list">

        {projects.map((p, i) => (

          <article
            className="project"
            key={p.title}
          >

            {/* VIDEO PREVIEW */}
            <Preview
              project={p}
              index={i}
            />

            <div className="project-info">

              <div>

                <span className="project-index">
                  0{i + 1}
                </span>

                <h3>
                  {p.title}
                </h3>

              </div>

              <div className="project-description">

                <p className="project-type">
                  {p.type}
                </p>

                <p>
                  {p.description}
                </p>

              </div>

              {/* OPEN REAL WEBSITE */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="round-arrow"
                aria-label={`Visit ${p.title}`}
              >
                ↗
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}