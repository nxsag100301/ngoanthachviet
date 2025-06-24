import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    bgImage: '/assets/images/program/1.webp',
    imgSrc: '/assets/images/program/1.webp'
  },
  {
    bgImage: '/assets/images/program/2.webp',
    imgSrc: '/assets/images/program/2.webp'
  },
  {
    bgImage: '/assets/images/program/3.jpg',
    imgSrc: '/assets/images/program/3.jpg'
  },
  {
    bgImage: '/assets/images/program/4.jpg',
    imgSrc: '/assets/images/program/4.jpg'
  },
  {
    bgImage: '/assets/images/program/5.jpg',
    imgSrc: '/assets/images/program/5.jpg'
  },
  {
    bgImage: '/assets/images/program/6.jpg',
    imgSrc: '/assets/images/program/6.jpg'
  },
  {
    bgImage: '/assets/images/program/7.jpg',
    imgSrc: '/assets/images/program/7.jpg'
  },
  {
    bgImage: '/assets/images/program/8.jpg',
    imgSrc: '/assets/images/program/8.jpg'
  }
]

const ProgramCard = ({ bgImage, imgSrc, onLoad }) => {
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = () => {
    setLoaded(true)
    onLoad?.()
  }

  return (
    <div className='relative max-w-[1500px] mx-auto h-[300px] sm:h-[400px] md:h-[550px] xl:h-[710px] rounded-3xl'>
      {/* Nền blur */}
      <div
        className='absolute bg-no-repeat bg-center bg-[#fdfdfd] border-[#fdfdfd] inset-0 z-0 w-full h-full rounded-[80px] md:rounded-[120px] overflow-hidden transition-opacity duration-500'
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: 'blur(6px)',
          opacity: loaded ? 1 : 0,
          backgroundSize: '91% 90%'
        }}
      ></div>

      {/* Logo */}
      {loaded && (
        <img
          src='/assets/images/logo.png'
          className='absolute object-contain h-[60px] sm:h-[85px] md:h-[100px] xl:h-[130px] left-1/2 -translate-x-1/2 top-2 xl:top-4
    transition-opacity duration-500 opacity-100'
        />
      )}

      {/* Main image */}
      <div className='z-20 relative h-full mx-6 lg:mx-20'>
        <img
          src={imgSrc}
          onLoad={handleImageLoad}
          className={`object-cover h-[180px] sm:h-[240px] md:h-[370px] xl:h-[434px] rounded-2xl 
            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
            transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
        />
      </div>
    </div>
  )
}

const ProgramSection = () => {
  const [index, setIndex] = useState(0)
  const [canSwitch, setCanSwitch] = useState(false)

  useEffect(() => {
    if (!canSwitch) return

    const timeout = setTimeout(() => {
      setCanSwitch(false)
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [index, canSwitch])

  return (
    <div className='bg-[#FDFDFD] relative pt-4 pb-16 px-0 lg:px-11'>
      <div className='w-full text-center relative select-none mb-16 max-w-screen-2xl mx-auto z-20'>
        <div className='font-aquarelle text-[22px] sm:text-[32px] text-[#616161] font-normal lowercase'>
          Chương trình
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 font-penumbra font-bold text-[24px] sm:text-[36px] text-primary-600 w-full'>
          Hoạt động
        </div>
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <ProgramCard {...images[index]} onLoad={() => setCanSwitch(true)} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProgramSection
