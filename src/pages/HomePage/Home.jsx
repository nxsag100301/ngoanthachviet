import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import RockArtSection from './RockArtSection'

const Home = () => {
  return (
    <div className='bg-[#EBEAEA]'>
      <HeroSection />
      <AboutSection />
      <RockArtSection />
    </div>
  )
}

export default Home
