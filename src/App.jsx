import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './components/Gallery.jsx'
import Alumni from './pages/Alumni.jsx'
import Registration from './pages/Registration.jsx'
import RegistrationForm from './pages/RegistrationForm.jsx'
import Partnership from './pages/Partnership.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration/form" element={<RegistrationForm />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
