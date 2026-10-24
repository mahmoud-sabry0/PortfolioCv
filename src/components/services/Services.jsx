import React from 'react'
import { FaCode, FaReact, FaCloudUploadAlt, FaMobileAlt } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { TbApi } from 'react-icons/tb'
import "./services.css"
const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaMobileAlt className='icon'/>,
      title: "Responsive Web Design",
      disc: "Turning UI/UX designs into pixel-perfect pages that look great on mobile, tablet and desktop, with RTL support.",
    },
    {
      id: 2,
      icon: <FaReact className='icon'/>,
      title: "React Web Apps",
      disc: "Building fast single page applications with React, React Router and Redux Toolkit.",
    },
    {
      id: 3,
      icon: <TbApi className='icon'/>,
      title: "API Integration",
      disc: "Connecting your app to REST APIs with Axios and React Query, with proper loading and error states.",
    },
    {
      id: 4,
      icon: <IoIosRocket className='icon'/>,
      title: "Fast Performance",
      disc: "Optimized, lightweight websites that load quickly and give users a smooth experience.",
    },
    {
      id: 5,
      icon: <FaCode className='icon'/>,
      title: "Clean Code",
      disc: "Reusable components and organized code that is easy to read, maintain and scale.",
    },
    {
      id: 6,
      icon: <FaCloudUploadAlt className='icon'/>,
      title: "Deployment",
      disc: "Publishing your project online with GitHub Pages or Vercel so it's ready to share.",
    },
  ];
  return <>
     <section id='services'>
      <div className="top_section">
          <h5>What I Offer</h5>
          <h2>Services</h2>
        </div>
        <div className='container container_services'>
          {servicesData.map(({ id, icon, title, disc }) => (
            <article key={id} className='card'>
              {icon}
              <h3>{title}</h3>
              <p className='text-light'>{disc}</p>
            </article>
          ))}
        </div>
    </section>
  </>
}

export default Services
