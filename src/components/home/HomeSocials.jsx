import { socialLinks } from "../../data"
import "./home.css"

const HomeSocials = () => {
  return (
    <div className='home_Socials'>
      {socialLinks.map(({ label, href, Icon }) => {
        const external = href.startsWith("http")
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default HomeSocials
