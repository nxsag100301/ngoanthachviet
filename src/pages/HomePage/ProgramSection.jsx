import React, { useLayoutEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const tabOrder = ['contest', 'exhibiton', 'advise']

const tabConfigs = {
  contest: {
    bgImage: '/assets/images/contest-blur.png',
    imgSrc: '/assets/images/program.png',
    activeIcon: '/assets/icons/trophy.png',
    label: 'Hội thi'
  },
  exhibiton: {
    bgImage: '/assets/images/exhibition-blur.png',
    imgSrc: '/assets/images/trienlam.png',
    activeIcon: '/assets/icons/exhibiton-active.png',
    label: 'Triển lãm'
  },
  advise: {
    bgImage: '/assets/images/advise-blur.png',
    imgSrc: '/assets/images/tuvan.png',
    activeIcon: '/assets/icons/advise-active.png',
    label: 'Tư vấn'
  }
}

const ProgramCard = ({ type, onChangeTab }) => {
  const { bgImage, imgSrc, activeIcon, label } = tabConfigs[type]

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

      {/* Active button */}
      <Button
        onClick={() => onChangeTab(type)}
        className='z-30 absolute w-[90px] h-10 xl:w-[162px] xl:h-[60px] bg-white text-primary-600 rounded-[32px] text-xs sm:text-sm xl:text-xl
        bottom-8 sm:bottom-24 md:bottom-32 xl:bottom-44 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2'
      >
        <img src={activeIcon} className='w-3.5 h-3.5 xl:w-7 xl:h-7' />
        {label}
      </Button>

      {/* Other tabs */}
      {tabOrder
        .filter((tab) => tab !== type)
        .map((tab, index) => (
          <Button
            key={tab}
            onClick={() => onChangeTab(tab)}
            className={`absolute w-[90px] h-10 xl:w-[162px] xl:h-[60px] bg-white/70 text-gray-400 rounded-[32px] text-xs sm:text-sm xl:text-xl z-30
        bottom-8 sm:bottom-24 md:bottom-32 xl:bottom-44 ${
          index === 0
            ? 'left-3 sm:left-6 md:left-10 lg:left-20'
            : 'right-3 sm:right-6 md:right-10 lg:right-20'
        } flex items-center justify-center gap-2`}
          >
            <img
              src={
                tab === 'contest'
                  ? '/assets/icons/trophy-non-active.png'
                  : tab === 'exhibiton'
                  ? '/assets/icons/gallery.png'
                  : '/assets/icons/advise.png'
              }
              className='w-3.5 h-3.5 xl:w-7 xl:h-7'
            />
            {tabConfigs[tab].label}
          </Button>
        ))}
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
    }, 2000)

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
