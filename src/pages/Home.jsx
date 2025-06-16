import React from 'react'
import Navbar from '../components/Navbar'
import hero from "../assets/hero.jpg"
import LatestMatchesBanner from '../components/LatestMatchesBannner.jsx'
import WhoWeAreSection from '../components/WhoWeAreSection.jsx'
import SponsorsSection from '../components/SponsorsSection.jsx'
import RegisterNow from '../components/RegisterNow.jsx'
import UpcomingMatch from '../components/UpcomingMatch.jsx'
import FitCenter from '../components/FitCenter.jsx'
import CTASection from '../components/CTASection.jsx'
import ContactUs from '../components/ContactUsSection.jsx'
import Hero from '../components/Hero.jsx'

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <LatestMatchesBanner />
      <WhoWeAreSection/>
      <RegisterNow/>
      <SponsorsSection/>
      <UpcomingMatch/>
      <FitCenter/>
      <ContactUs/>
      <CTASection/>
    </div>
  )
}

export default Home 