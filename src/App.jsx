import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import './App.css'

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header/Header'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Blog = lazy(() => import('./components/Blog/Blog'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const Loader = lazy(() => import('./components/UI/Loader'))
const ParticlesBackground = lazy(() => import('./components/UI/ParticlesBackground'))
const ScrollToTop = lazy(() => import('./components/UI/ScrollToTop'))

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Section refs for scrolling and intersection observation
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)
  const contactRef = useRef(null)
  
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
  // Handle section visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      const sections = [
        { ref: homeRef, id: 'home' },
        { ref: aboutRef, id: 'about' },
        { ref: projectsRef, id: 'projects' },
        { ref: skillsRef, id: 'skills' },
        { ref: blogRef, id: 'blog' },
        { ref: contactRef, id: 'contact' }
      ]

      for (const section of sections) {
        if (!section.ref.current) continue
        
        const element = section.ref.current
        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          if (activeSection !== section.id) {
            setActiveSection(section.id)
            // Update URL hash without scrolling
            window.history.replaceState(null, null, `#${section.id}`)
          }
          break
        }
      }
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  useEffect(() => {
    // Close menu when section changes
    setIsMenuOpen(false)

    // Simulate loading experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [activeSection])

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme))
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Theme classes
  const themeClasses = isDarkMode 
    ? 'min-h-screen bg-gray-900 text-gray-100' 
    : 'min-h-screen bg-gray-50 text-gray-800'

  if (isLoading) {
    return <Loader isDarkMode={isDarkMode} />
  }

  // Scroll to section function
  const scrollToSection = (section) => {
    const element = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      blog: blogRef,
      contact: contactRef
    }[section]

    if (element && element.current) {
      element.current.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section)
    }
  }

  return (
    <div className={themeClasses}>
      <Suspense fallback={<Loader isDarkMode={isDarkMode} />}>
        <ParticlesBackground isDarkMode={isDarkMode} />
        
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        <main className="relative z-10">
          {/* Home/Hero Section */}
          <section ref={homeRef} id="home">
            <Hero 
              scrollToSection={scrollToSection}
              isDarkMode={isDarkMode}
            />
          </section>

          {/* About Section */}
          <section ref={aboutRef} id="about">
            <About isDarkMode={isDarkMode} />
          </section>

          {/* Projects Section */}
          <section ref={projectsRef} id="projects">
            <Projects isDarkMode={isDarkMode} />
          </section>

          {/* Skills Section */}
          <section ref={skillsRef} id="skills">
            <Skills isDarkMode={isDarkMode} />
          </section>

          {/* Blog Section */}
          <section ref={blogRef} id="blog">
            <Blog isDarkMode={isDarkMode} />
          </section>

          {/* Contact Section */}
          <section ref={contactRef} id="contact">
            <Contact isDarkMode={isDarkMode} />
          </section>
        </main>

        <Footer isDarkMode={isDarkMode} />
        <ScrollToTop isDarkMode={isDarkMode} scrollProgress={scrollProgress} />
      </Suspense>
    </div>
  )
}

export default App