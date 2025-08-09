import React from 'react'
import { FaCode } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import "./services.css"
const Services = () => {
  return <>
     <section id='services'>
      <div className="top_section">
          <h5>What I Offer</h5>
          <h2>Services</h2>
        </div>
        <div className='container container_services'>
          <article className='card'>
          <MdDesignServices className='icon'/>
          <h3>Web design</h3>
          <p className='text_light'>Lorem ipsum dolor sit amet</p>
            
          </article>
           <article className='card'>
          <IoIosRocket className='icon'/>
          <h3>Fast Performance</h3>
          <p className='text_light'>Lorem ipsum dolor sit amet</p>
            
          </article>
           <article className='card'>
          <FaCode className='icon'/>
          <h3>Clean Code</h3>
          <p className='text_light'>Lorem ipsum dolor sit amet</p>
            
          </article>
        </div>
    </section>
  </>
}

export default Services
