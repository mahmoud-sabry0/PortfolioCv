import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <Home />
      <Nav />
      <main>
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
