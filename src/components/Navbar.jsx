import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'

const getCurrentTime = () => {
  const now = new Date()
  return now.toLocaleTimeString('vi-VN', { hour12: false })
}

const getFormattedDate = () => {
  const now = new Date()
  const weekday = now.toLocaleDateString('vi-VN', { weekday: 'long' })
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = String(now.getFullYear())
  return `${weekday}, ${day}/${month}/${year}`
}

const Navbar = () => {
  const [time, setTime] = useState(getCurrentTime())
  const [today] = useState(getFormattedDate())
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false)
      }
    }
    if (isOpenMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenMenu])

  return (
    <div className='h-[84px] bg-primary-900 py-1 px-6 lg:px-20 sticky w-full top-0 z-50 select-none'>
      <div className='mx-auto h-full flex flex-row justify-between relative'>
        <img
          onClick={() => navigate('/')}
          src='/assets/images/logo.png'
          className='w-[114px] h-[76px] object-cover cursor-pointer'
          alt='logo '
        />
        <div
          className='text-white text-base leading-7 tracking-wide 
        flex items-center gap-[20px] md:gap-[20px] xl:gap-[68px]'
        >
          <span
            onClick={() => navigate('/')}
            className='cursor-pointer hidden lg:inline'
          >
            Trang chủ
          </span>
          <span
            onClick={() => navigate('/products')}
            className='cursor-pointer hidden lg:inline'
          >
            Sản phẩm
          </span>
          <span
            onClick={() => navigate('/news')}
            className='cursor-pointer hidden lg:inline'
          >
            Tin tức
          </span>
          <span
            onClick={() => navigate('/auction')}
            className='cursor-pointer hidden lg:inline'
          >
            Đấu giá
          </span>
          <div className='flex flex-col gap-[2px]'>
            <span>{time}</span>
            <span className='text-xs leading-[18px] tracking-wide text-gray-300'>
              {today}
            </span>
          </div>
          <div className='hidden sm:flex gap-[25px] items-center'>
            <IoIosSearch className='w-[42px] h-[42px] p-2 cursor-pointer' />
            <Button className='w-[172px] h-[60px] text-base leading-7 tracking-wide'>
              Đăng nhập
            </Button>
          </div>
          {isOpenMenu ? (
            <IoClose
              className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer block lg:hidden'
              onClick={() => setIsOpenMenu((prev) => !prev)}
            />
          ) : (
            <IoMenu
              className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer block lg:hidden'
              onClick={() => setIsOpenMenu((prev) => !prev)}
            />
          )}
        </div>
        {isOpenMenu && (
          <div
            ref={menuRef}
            className='absolute w-[150px] text-white flex flex-col gap-3 bg-primary-900 right-2 top-14 py-2'
          >
            <div
              onClick={() => {
                navigate('/')
                setIsOpenMenu(false)
              }}
              className='cursor-pointer pl-3 text-base leading-7 tracking-wide'
            >
              Trang chủ
            </div>
            <div
              onClick={() => {
                navigate('/products')
                setIsOpenMenu(false)
              }}
              className='cursor-pointer pl-3 text-base leading-7 tracking-wide'
            >
              Sản phẩm
            </div>
            <div
              onClick={() => {
                navigate('/news')
                setIsOpenMenu(false)
              }}
              className='cursor-pointer pl-3 text-base leading-7 tracking-wide'
            >
              Tin tức
            </div>
            <div
              onClick={() => {
                navigate('/auction')
                setIsOpenMenu(false)
              }}
              className='cursor-pointer pl-3 text-base leading-7 tracking-wide'
            >
              Đấu giá
            </div>
            <div className='cursor-pointer pl-3 text-base leading-7 tracking-wide block sm:hidden'>
              Đăng nhập
            </div>
            <div className='cursor-pointer pl-3 text-base leading-7 tracking-wide block sm:hidden'>
              Tìm kiếm
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
