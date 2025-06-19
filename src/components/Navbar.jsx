import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import InputSearch from './InputSearch'

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
  const [isShowInputSearch, setIsShowInputSearch] = useState(false)

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
    <div className='h-[84px] bg-primary-900 py-1 sticky w-full top-0 z-50 select-none'>
      <div className='mx-auto h-full flex flex-row justify-between relative max-w-screen-2xl px-6 lg:px-20'>
        <img
          onClick={() => navigate('/')}
          src='/assets/images/logo.png'
          className='w-[100px] h-[76px] object-cover cursor-pointer sm:scale-125'
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
          {!isShowInputSearch && (
            <div className='flex flex-col gap-[2px]'>
              <span className='text-sm sm:text-base'>{time}</span>
              <span className='text-[10px] sm:text-xs leading-[18px] tracking-wide text-gray-300'>
                {today}
              </span>
            </div>
          )}
          <div className='hidden sm:flex gap-[25px] items-center'>
            <Button className='w-[162px] h-[60px] text-base leading-7 tracking-wide'>
              Đăng nhập
            </Button>
          </div>
          {/* <InputSearch
            isOpen={isShowInputSearch}
            onChange={setIsShowInputSearch}
          /> */}
          <DropdownMenu onOpenChange={setIsOpenMenu}>
            <DropdownMenuTrigger asChild>
              {isOpenMenu ? (
                <IoClose className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer block lg:hidden' />
              ) : (
                <IoMenu className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer block lg:hidden' />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='bg-primary-900 space-y-1 sm:space-y-2 md:space-y-3 text-white w-40 sm:w-52 md:w-60 mt-2 mr-2 border-primary-900 rounded-xl shadow-lg'
              align='end'
            >
              <DropdownMenuItem
                onClick={() => navigate('/')}
                className='text-base sm:text-lg md:text-xl'
              >
                Trang chủ
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate('/products')}
                className='text-base sm:text-lg md:text-xl'
              >
                Sản phẩm
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate('/news')}
                className='text-base sm:text-lg md:text-xl'
              >
                Tin tức
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate('/auction')}
                className='text-base sm:text-lg md:text-xl'
              >
                Đấu giá
              </DropdownMenuItem>
              {/* <DropdownMenuItem
                onClick={() => setIsShowInputSearch(true)}
                className='block sm:hidden text-base sm:text-lg md:text-xl'
              >
                Tìm kiếm
              </DropdownMenuItem> */}
              <DropdownMenuItem className='block sm:hidden text-base sm:text-lg md:text-xl'>
                Đăng nhập
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
