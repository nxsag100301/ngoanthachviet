import React from 'react'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import RockArtSection from './components/RockArtSection'
import RepresentativeSection from './components/RepresentativeSection'
import ProductSection from './components/ProductSection'
import ProgramSection from './components/ProgramSection'
import ContactSection from './components/ContactSection'
import NewsSections from './components/NewsSections'

const Home = () => {
  return (
    <div className='bg-[#EBEAEA]'>
      <HeroSection />
      <AboutSection />
      <RockArtSection />
      <RepresentativeSection />
      <ProductSection />
      <ProgramSection />
      <NewsSections />
      <ContactSection />
    </div>
  )
}

export default Home
