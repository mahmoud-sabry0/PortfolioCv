import { services } from '../../data'
import "./services.css"

const Services = () => {
  return (
    <section id='services'>
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className='container container_services'>
        {services.map(({ title, disc, Icon }) => (
          <article key={title} className='card'>
            <Icon className='icon' aria-hidden="true" />
            <h3>{title}</h3>
            <p className='text-light'>{disc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
