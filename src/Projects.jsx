import { useFetchProjects } from './fetchProjects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className='projects'>
        <div className="title">
          <h2>Featured Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="loading-container">
          <div className="loading"></div>
          <p className="loading-text">Loading amazing projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section className='projects'>
      <div className="title">
        <h2>Featured Projects</h2>
        <div className="title-underline"></div>
        <p className="subtitle">A collection of my latest work in React and modern web development</p>
      </div>
      
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, img, url } = project;
          return (
            <div key={id} className='project-card'>
              <div className="project-image">
                <img src={img} alt={title} className='img'/>
                <div className="project-overlay">
                  <a href={url} target='_blank' rel='noreferrer' className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h5>{title}</h5>
                <div className="project-actions">
                  <a href={url} target='_blank' rel='noreferrer' className="btn btn-sm">
                    View Project
                  </a>
                  <a href="#" className="btn btn-sm btn-hipster">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {projects.length === 0 && (
        <div className="no-projects">
          <p>No projects available at the moment. Check back soon!</p>
        </div>
      )}
    </section>
  )
}

export default Projects
