import heroIMG from './assets/icon.jpg'
import { IoMdArrowBack } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="hero">
      <a href="https://webdev-david.netlify.app/" className="return-link"> 
        <IoMdArrowBack className='arrow' /> 
        <span className='return'>Back to Portfolio</span> 
      </a>
      
      <div className="hero-center">
        <div className="hero-title">
          <h1>Project Showcase</h1>
          <p>
            Welcome to my React development portfolio! Here you'll find a curated collection of projects that demonstrate my journey in modern web development. From interactive user interfaces to full-stack applications, each project showcases different aspects of React, JavaScript, and web technologies. I'm constantly learning and building, so check back regularly for new additions!
          </p>
          
          <div className="hero-actions">
            <a href="https://github.com/Dav50505" target="_blank" rel="noopener noreferrer" className="btn btn-hipster">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
        
        <div className="img-container">
          <div className="img-wrapper">
            <img src={heroIMG} alt="Developer workspace" className='img'/>
            <div className="img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
