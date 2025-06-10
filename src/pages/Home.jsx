import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import RockArt from '@/components/RockArt'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <RockArt />
    </>
  )
}

export default Home
