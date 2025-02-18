import heroIMG from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit tenetur ex, consequatur obcaecati laboriosam, tempora debitis facilis laborum sit provident molestiae nesciunt dolorem! Beatae pariatur quaerat sed suscipit voluptas.
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