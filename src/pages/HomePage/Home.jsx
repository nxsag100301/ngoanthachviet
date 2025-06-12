import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import RockArtSection from './RockArtSection'
import RepresentativeSection from './RepresentativeSection'
import ProductSection from './ProductSection'
import ProgramSection from './ProgramSection'
import ContactSection from './ContactSection'

const Home = () => {
  return (
    <div className='bg-[#EBEAEA]'>
      <HeroSection />
      <AboutSection />
      <RockArtSection />
      <RepresentativeSection />
      <ProductSection />
      <ProgramSection />
      <ContactSection />
    </div>
  )
}

export default Home
