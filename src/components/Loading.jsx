import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <img
        src='/assets/icons/spiner.png'
        alt='loading'
        className='w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 animate-spin'
      />
    </div>
  )
}

export default Loading
