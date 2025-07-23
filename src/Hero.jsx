import heroIMG from './assets/icon.jpg'
import { IoMdArrowBack } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Particles from "react-tsparticles";

const Hero = () => {
  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      {/* Solid/gradient background layer */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000",
        zIndex: 0
      }} />
      {/* Animated SVG circles (optional, for design) */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
        <circle cx="10%" cy="20%" r="60" fill="#fff" opacity="0.12">
          <animate attributeName="cx" values="10%;90%;10%" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="80%" cy="70%" r="40" fill="#fff" opacity="0.10">
          <animate attributeName="cy" values="70%;30%;70%" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="10%" r="30" fill="#fff" opacity="0.08">
          <animate attributeName="cx" values="50%;60%;50%" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Particles layer */}
      <Particles
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#fff" },
            links: { color: "#fff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
      />
      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <a href="https://webdev-david.netlify.app/" className="return-link"> 
          <IoMdArrowBack className='arrow' /> 
          <span className='return'>Back to Portfolio</span> 
        </a>
        
        <div className="hero-center">
          <div className="hero-title">
            <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: 16, letterSpacing: '-1px' }}>
              Welcome to Our Professional CMS
            </h1>
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
      </div>
    </section>
  )
}

export default Hero
