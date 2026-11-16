import me from "../../assets/me.jpeg"
import "./home.css"
import cv from "../../assets/Mahmoud_Sabry_CV.pdf"
import HomeSocials from './HomeSocials'

const Home = () => {
  return (
    <header className='home' id='home'>
      <div className='container home-container'>
        <h4>Hello, I'm</h4>
        <h1>Mahmoud Sabry</h1>
        <h4 className='text-light'>Front-End Developer</h4>
        <div className='btns'>
          <a href={cv} className='btn' download='Mahmoud_Sabry_CV.pdf'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className='me'>
          <img src={me} alt='Mahmoud Sabry' width={300} height={400} fetchPriority='high' />
        </div>
        <a href="#about" className='Scroll_Down'>Scroll Down</a>
        <HomeSocials />
      </div>
    </header>
  )
}

export default Home
