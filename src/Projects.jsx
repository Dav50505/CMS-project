import projects from './data.js';

const Projects = () => {
  return (
    <section className='projects'>
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { title, image, url } = project;
          return (
            <a key={title} href={url} target='_blank' rel='noreferrer' className='project'>
              <img src={image} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
