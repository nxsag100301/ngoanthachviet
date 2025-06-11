import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import RockArtSection from './RockArtSection'
import RepresentativeSection from './RepresentativeSection'
import ProductCard from '@/components/ProductCard'
import ProductSection from './ProductSection'

const Home = () => {
  return (
    <div className='bg-[#EBEAEA]'>
      <HeroSection />
      <AboutSection />
      <RockArtSection />
      <RepresentativeSection />
      <ProductSection />
    </div>
  )
}

export default Home
