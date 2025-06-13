import AnotherProducts from '@/components/AnotherProducts'
import AuctionDialog from '@/components/AuctionDialog'
import Status from '@/components/Status'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Scrollbar } from '@radix-ui/react-scroll-area'
import React, { useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ImageGallery = ({ listImage }) => {
  const [selectedImg, setSelectedImg] = useState(listImage[0])
  const [imageToSelect, setImageToSelect] = useState(listImage.slice(1))

  const handleSelectImage = (selectedImage, newImageSelect) => {
    setImageToSelect((prev) => {
      const newListImg = prev.filter((img) => img !== newImageSelect)
      newListImg.unshift(selectedImage)
      return newListImg
    })
    setSelectedImg(newImageSelect)
  }

  return (
    <div className=''>
      <img
        src={`/assets/images/${selectedImg}`}
        className='rounded-[12px] mb-3 sm:mb-6 h-[300px] sm:h-[483px] w-[628px] object-cover mx-auto'
      />
      <div className='grid grid-cols-3 w-fit mx-auto gap-3 sm:gap-6'>
        {imageToSelect &&
          imageToSelect.length > 0 &&
          imageToSelect.map((img, index) => (
            <img
              key={index}
              src={`/assets/images/${img}`}
              className='rounded-[12px] mb-6 cursor-pointer object-cover h-[105px] w-[155px] sm:h-[193px] sm:w-[193px] md:h-[120px] md:w-[140px] xl:h-[193px] xl:w-[193px] border'
              onClick={() => handleSelectImage(selectedImg, img)}
            />
          ))}
      </div>
    </div>
  )
}

const AuctionStartOrEnd = () => {
  return (
    <div className='h-[72px] rounded-[6px] py-2 px-4 lg:px-6 flex justify-between bg-bluebg items-center'>
      <span className='text-sm sm:text-lg md:text-base lg:text-lg text-blue'>
        Đấu giá bắt đầu sau
      </span>
      <div className='flex flex-row gap-2 sm:gap-4  lg:gap-8 items-center'>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          01
        </div>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          15
        </div>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          29
        </div>
      </div>
    </div>
  )
}

const AuctionInfomation = () => {
  //   product: 'Thông tin sản phẩm đấu giá',
  //   auction: 'Thông tin đấu giá',
  //   history: 'Lịch sử phiên đấu giá'
  const [activeTab, setACtiveTab] = useState('product')
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition()
  return (
    <div className='py-6 px-3 md:px-9 rounded-[12px] shadow-lg'>
      <div className='mb-6 flex flex-row items-center justify-between text-base'>
        <div
          onClick={() => {
            startTransition(() => setACtiveTab('product'))
          }}
          className={`w-1/3 text-center cursor-pointer border-b-2 pb-2 ${
            activeTab === 'product' && 'text-primary-800 border-primary-800'
          }`}
        >
          <span className='hidden md:block'>Thông tin sản phẩm đấu giá</span>
          <span className='block md:hidden '>Sản phẩm</span>
        </div>
        <div
          onClick={() => {
            startTransition(() => setACtiveTab('auction'))
          }}
          className={`w-1/3 text-center cursor-pointer border-b-2 pb-2 ${
            activeTab === 'auction' && 'text-primary-800 border-primary-800'
          }`}
        >
          <span className='hidden md:block'>Thông tin đấu giá</span>
          <span className='block md:hidden '>Đấu giá</span>
        </div>
        <div
          onClick={() => {
            startTransition(() => setACtiveTab('history'))
          }}
          className={`w-1/3 text-center cursor-pointer border-b-2 pb-2 ${
            activeTab === 'history' && 'text-primary-800 border-primary-800'
          }`}
        >
          <span className='hidden md:block'>Lịch sử phiên đấu giá</span>
          <span className='block md:hidden '>Lịch sử </span>
        </div>
      </div>
      {activeTab === 'product' && (
        <div className='space-y-3'>
          <div className='text-base'>
            <span className='font-semibold'>Tên sản phẩm: </span>
            <span className='font-normal'>Đá cảnh</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Mã sản phẩm: </span>
            <span className='font-normal'>ABCDEF</span>
          </div>
          <div className=' text-base'>
            <span className='font-semibold'>Giá khởi điểm: </span>
            <span className='font-normal'>3.000.000 VND</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Bước giá: </span>
            <span className='font-normal'>500.000 VND</span>
          </div>
          <div className='text-base font-semibold text-justify'>
            Mô tả: {` `}
            <span className='font-normal'>
              Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La.
              Nó có hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố
              như những chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu
              trắng tựa như nước của những dòng suối đang chảy xuống thung lũng
              bên dưới. Nhìn tổng thể thì vên đá như một khung cảnh thu nhỏ của
              những ngọn núi cao thấp trùng điệp, có hồ, có suối và thung lũng.
            </span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Thông số: </span>
            <span className='font-normal'>Ngang 16cm, Cao 21cm, Sâu 7cm</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Xuất xứ: </span>
            <span className='font-normal'>Việt Nam</span>
          </div>
          <div className='font-semibold'>Lịch sử</div>
          <div className='flex flex-row gap-3 mb-2'>
            <span className=''>2021</span>
            <span className='flex flex-row gap-2 items-center text-black-400'>
              <div className='w-[10px] h-[10px] rounded-full bg-primary-600' />
              Được chuyển giao
            </span>
          </div>
          <div className='flex flex-row gap-3'>
            <span className=''>2020</span>
            <span className='flex flex-row gap-2 items-center text-black-400'>
              <div className='w-[10px] h-[10px] rounded-full bg-primary-600' />
              Được khai quật bởi
            </span>
          </div>
        </div>
      )}
      {activeTab === 'auction' && (
        <div className='space-y-3'>
          <div className='text-base'>
            <span className='font-semibold'>Đấu giá viên: </span>
            <span className='font-normal'>Nguyễn Xuân Sáng</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Địa chỉ: </span>
            <span className='font-normal'>
              D2 Đường 5B Him Lam P. Tân Hưng, Quận 7, TP. Hồ Chí Minh
            </span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Thời gian mở phiên: </span>
            <span className='font-normal'>15:00 | 20/05/2024</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Thời gian đóng phiên: </span>
            <span className='font-normal'>16:00 | 20/05/2024</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Bước giá: </span>
            <span className='font-normal text-justify'>500.000 VND</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Số bước giá tối đa: </span>
            <span className='font-normal'>Không giới hạn</span>
          </div>
          <div className='text-base'>
            <span className='font-semibold'>Phương thức đấu giá: </span>
            <span className='font-normal'>Đấu giá lên và liên tục</span>
          </div>
        </div>
      )}
      {activeTab === 'history' && (
        <div className='rounded-[12px]'>
          <ScrollArea className='h-[266px] overflow-auto'>
            <div className='space-y-4 pr-4'>
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:items-center p-3 rounded-md'
                >
                  <div className='flex flex-row gap-3 items-center'>
                    <div className='w-8 h-8 bg-[#D9D9D9] rounded-full shrink-0' />
                    <div className='text-sm'>
                      Nguyễn Văn AAA{' '}
                      <span className='text-primary-800'>
                        đã đấu giá thành công với giá đấu 7.500.000 VND
                      </span>
                    </div>
                  </div>
                  <div className='text-xs text-gray-400 shrink-0'>
                    15:00 | 20/05/2025
                  </div>
                </div>
              ))}
            </div>
            <Scrollbar orientation='vertical' />
          </ScrollArea>
        </div>
      )}
    </div>
  )
}

const DetailProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isAuction, setIsAuction] = useState(false)
  const listImage = [
    'detail-prod.png',
    'about-stone.png',
    'about-stone2.png',
    'representative.png'
  ]
  return (
    <div className='max-w-screen-2xl mx-auto bg-white px-6 lg:px-20 pt-9 pb-12'>
      <div className='font-bold font-penumbra text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary-600 mb-3 sm:mb-6 uppercase'>
        Sản phẩm
      </div>
      <div className='flex flex-row gap-2 items-center text-sm sm:text-lg mb-4 sm:mb-6'>
        <span
          onClick={() => navigate('/')}
          className='cursor-pointer text-primary-600'
        >
          Trang chủ
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span
          onClick={() => navigate('/products')}
          className='cursor-pointer text-primary-600'
        >
          Sản phẩm
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span className='text-gray-400 select-none'>Chi tiết</span>
      </div>
      <div className='flex flex-col md:flex-row gap-[20px] sm:gap-[40px] xl:gap-[108px] '>
        <div className='w-full md:w-1/2'>
          <ImageGallery listImage={listImage} />
          <div className='mt-4 sm:mt-6 h-[80px] sm:h-[104px] rounded-[12px] px-4 sm:px-9 py-4 shadow-lg flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-1 sm:gap-2'>
              <span className='text-black-500 text-sm sm:text-base'>
                Giá khởi điểm
              </span>
              <span className='text-primary-800 text-lg sm:text-2xl md:text-lg lg:text-xl xl:text-2xl font-semibold'>
                3.000.000 VND
              </span>
            </div>
            <Button
              onClick={() => setIsAuction((prev) => !prev)}
              className='w-[113px] h-[50px] sm:w-[195px] sm:h-[60px] md:w-[110px] md:h-[45px] lg:w-[160px] xl:w-[195px] lg:h-[60px] px-6 py-4 text-white text-lg'
            >
              Đấu giá
            </Button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex flex-row justify-between items-center mb-3 sm:mb-4'>
            <span className='text-[#01021D] text-2xl font-semibold'>
              Đá cảnh thác chảy
            </span>
            <div className='w-10 h-10 bg-[#E5E5E5] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src='/assets/icons/bell.png' />
            </div>
          </div>
          <div className='w-full sm:w-[60%] mb-4 sm:mb-6'>
            <Status />
          </div>
          <div className='flex flex-row justify-between mb-6'>
            <div className='flex flex-col gap-2'>
              <span className='text-black-500 font-normal text-xs sm:text-sm'>
                Thời gian bắt đầu
              </span>
              <span className='text-black-500 font-semibold text-sm sm:text-base'>
                15:00 | 13/06/2025
              </span>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <span className='text-black-500 font-normal text-xs sm:text-sm'>
                Thời gian kết thúc
              </span>
              <span className='text-black-500 font-semibold text-sm sm:text-base'>
                15:00 | 13/06/2025
              </span>
            </div>
          </div>
          <div className='mb-6'>
            <AuctionStartOrEnd />
          </div>
          <div className='space-y-2 mb-4 sm:mb-6'>
            <div className='font-medium text-black-500'>Mô tả</div>
            <div className='text-base text-black-400 tracking-[0.15px] text-justify'>
              Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La.
              Nó có hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố
              như những chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu
              trắng tựa như nước của những dòng suối đang chảy xuống thung lũng
              bên dưới. Nhìn tổng thể thì vên đá như một khung cảnh thu nhỏ của
              những ngọn núi cao thấp trùng điệp, có hồ, có suối và thung lũng.
            </div>
          </div>
          <div className='flex flex-row justify-between mb-4 sm:mb-6'>
            <div className='flex flex-col gap-2 w-[70%]'>
              <span className='font-medium text-black-500 text-base'>
                Thông số
              </span>
              <span className='text-base text-black-400 tracking-[0.15px]'>
                Ngang 16cm, cao 21cm, sâu 7cm
              </span>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <span className='font-medium text-black-500 text-base'>
                Xuất xứ
              </span>
              <span className='text-base text-black-400 tracking-[0.15px]'>
                Việt Nam
              </span>
            </div>
          </div>
          <div className='font-medium text-black-500 mb-2'>Lịch sử</div>
          <div className='flex flex-row gap-3 mb-2'>
            <span className='font-medium text-[#242424]'>2021</span>
            <span className='flex flex-row gap-2 items-center text-black-400'>
              <div className='w-[10px] h-[10px] rounded-full bg-primary-600' />
              Được chuyển giao
            </span>
          </div>
          <div className='flex flex-row gap-3'>
            <span className='font-medium text-[#242424]'>2020</span>
            <span className='flex flex-row gap-2 items-center text-black-400'>
              <div className='w-[10px] h-[10px] rounded-full bg-primary-600' />
              Được khai quật bởi
            </span>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <AuctionInfomation />
      </div>
      <div>
        <AnotherProducts />
      </div>
      <AuctionDialog open={isAuction} setOpen={setIsAuction} />
    </div>
  )
}

export default DetailProduct
