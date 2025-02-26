import heroIMG from './assets/icon.jpg'
import { IoMdArrowBack } from 'react-icons/io'


const Hero = () => {
  return (
    <section className="hero">
      <a href="https://webdev-david.netlify.app/" className="return-link"> 
      <IoMdArrowBack className='arrow' /> 
      <h4 className='return'>Return</h4> 
      </a>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Home Base</h1>
          <p>
            Here are all the projects that I have coded with React so far. This will be the central place where I showcase my work, and I’ll update it as frequently as possible. Each project reflects my growth and skills in React, from building dynamic user interfaces to creating full-stack applications. Stay tuned for more updates as I continue to learn and develop new projects!
          </p>
        </div>
        <div className="img-container">
          <img src={heroIMG} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  )
}
export default Hero
