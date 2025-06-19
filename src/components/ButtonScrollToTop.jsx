import React, { useEffect, useState } from 'react'

const ButtonScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showButton) return null

  return (
    <div
      onClick={handleScrollToTop}
      className='fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 group w-[36px] h-[36px] md:h-[44px] md:w-[44px] rounded-full bg-primary-50 hover:bg-primary-600 flex items-center justify-center cursor-pointer shadow-md transition-opacity duration-300'
    >
      <img
        src='/assets/icons/icon-scroll.png'
        className='group-hover:invert group-hover:brightness-0 w-[11px] h-[12px] md:w-[14px] md:h-[15px]'
        alt='Scroll to top'
      />
    </div>
  )
}

export default ButtonScrollToTop
