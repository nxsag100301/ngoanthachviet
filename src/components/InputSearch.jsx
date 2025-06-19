import React from 'react'
import { Input } from './ui/input'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

const InputSearch = ({ isOpen, onChange }) => {
  return (
    <div className='flex items-center'>
      {isOpen ? (
        <>
          <Input
            type='text'
            placeholder='Tìm kiếm...'
            className='bg-white text-black rounded-[12px] h-8 sm:h-10 px-3 py-1 md:w-60 transition-all duration-200'
            autoFocus
            onBlur={() => onChange(false)}
          />
          <IoClose
            onClick={() => onChange(false)}
            className='w-[42px] h-[42px] p-2 cursor-pointer text-white'
          />
        </>
      ) : (
        <IoIosSearch
          onClick={() => onChange(true)}
          className='hidden sm:block w-[42px] h-[42px] p-2 cursor-pointer text-white'
        />
      )}
    </div>
  )
}

export default InputSearch
