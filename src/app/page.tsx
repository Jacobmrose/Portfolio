import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

export default function Page() {
  return (
    <main className='w-full h-full'>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
