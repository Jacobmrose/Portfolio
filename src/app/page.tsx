import About from './sections/About'
// import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experience from './sections/Experience'

export default function Page() {
  return (
    <main className='w-full h-full'>
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
