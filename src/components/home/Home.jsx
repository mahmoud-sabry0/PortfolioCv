import React from 'react'
import me from "../../assets/c77d9952-6939-4028-8162-0531756e67ba.jpg"
import"./home.css"
import cv from "../../assets/Mahmoud_Sabry+Software_Engineer_CV (1).pdf"
import HomeSocials from './HomeSocials';
const Home = () => {
  return<>
    <div className='home'>
      <div className='container home-container'>
        <h4>Halo I,m</h4>
        <h1>Mahmoud Sabry</h1>
        <h4 className='text-light'>FrontEnd-Developer</h4>
        <div className='btns'>
          <a href={cv}  className='btn' download>Download CV</a>
           <a href='#' className='btn btn-primary'>Let,s talk</a>
        </div>
        <div className='me'>
<img src={me} alt=''/>
 
        </div>
       
        <a href="#about"  className='Scroll_Down'>Scroll Down</a>
        <HomeSocials/>
       
      </div>
 
    </div>
   
  </>
}

export default Home
