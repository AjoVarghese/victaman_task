import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar } from './components/Nav'
import ContactForm from './components/ContactForm'
import { useRef } from 'react'
import { Footer } from './components/Footer'

function App () {
  const contactFormRef = useRef()

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behaviour: 'smooth' })
  }
  return (
    <div className='App'>
      <Navbar scrollToContactForm={scrollToContactForm} />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default App
