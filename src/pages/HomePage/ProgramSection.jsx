import React, { useLayoutEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const tabOrder = ['contest', 'exhibiton', 'advise']

const tabConfigs = {
  contest: {
    bgImage: '/assets/images/contest-blur.png',
    imgSrc: '/assets/images/program.png',
    label: 'Hội thi'
  },
  exhibiton: {
    bgImage: '/assets/images/exhibition-blur.png',
    imgSrc: '/assets/images/trienlam.png',
    label: 'Triển lãm'
  },
  advise: {
    bgImage: '/assets/images/advise-blur.png',
    imgSrc: '/assets/images/tuvan.png',
    label: 'Tư vấn'
  }
}

const ProgramCard = ({ type }) => {
  const { bgImage, imgSrc } = tabConfigs[type]

  return (
    <div className='relative max-w-[1376px] mx-auto h-[300px] sm:h-[400px] md:h-[550px] xl:h-[710px]'>
      <div
        className='absolute bg-no-repeat bg-cover inset-0 z-0 w-full h-full rounded-[40px] overflow-hidden'
        style={{
          ['--bg']: `url('${bgImage}')`,
          backgroundImage: 'var(--bg)',
          filter: 'blur(8px)'
        }}
      ></div>

      {/* Logo */}
      <img
        src='/assets/images/logo.png'
        className='absolute object-contain h-[65px] sm:h-[85px] md:h-[100px] xl:h-[130px] left-1/2 -translate-x-1/2 top-0 xl:top-2'
      />

      {/* Main Image */}
      <div className='z-20 relative h-full mx-6 lg:mx-20'>
        <img
          src={imgSrc}
          className='object-cover h-[200px] sm:h-[240px] md:h-[370px] xl:h-[434px] rounded-3xl 
          absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
        />
      </div>
    </div>
  )
}

const ProgramSection = () => {
  const [tab, setTab] = useState('contest')

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setTab((prev) => {
        const currentIndex = tabOrder.indexOf(prev)
        const nextIndex = (currentIndex + 1) % tabOrder.length
        return tabOrder[nextIndex]
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [tab])

  return (
    <div className='bg-[#FDFDFD] relative pt-4 pb-16 px-6 lg:px-20'>
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
          key={tab}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ProgramCard type={tab} onChangeTab={setTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProgramSection
