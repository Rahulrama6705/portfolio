import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'
import CursorSpotlight from './components/CursorSpotlight'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
