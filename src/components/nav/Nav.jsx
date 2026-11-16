import { useEffect, useState } from 'react'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoHomeOutline } from 'react-icons/io5'
import { LuUserRound, LuCode, LuBriefcase, LuFolderOpen } from 'react-icons/lu'
import "./nav.css"

const links = [
  { id: "home", label: "Home", Icon: IoHomeOutline },
  { id: "about", label: "About", Icon: LuUserRound },
  { id: "skills", label: "Skills", Icon: LuCode },
  { id: "services", label: "Services", Icon: LuBriefcase },
  { id: "projects", label: "Projects", Icon: LuFolderOpen },
  { id: "contact", label: "Contact", Icon: BiMessageSquareDetail },
]

const Nav = () => {
  const [active, setActive] = useState("home")

  // Scroll-spy: highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Main">
      {links.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
          aria-label={label}
          aria-current={active === id ? "true" : undefined}
          title={label}
          onClick={() => setActive(id)}
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default Nav
