import { useState, useTransition } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Scrollbar } from '@radix-ui/react-scroll-area'

const ProductTab = () => {
  return (
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
          Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La. Nó có
          hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố như những
          chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu trắng tựa như
          nước của những dòng suối đang chảy xuống thung lũng bên dưới. Nhìn
          tổng thể thì vên đá như một khung cảnh thu nhỏ của những ngọn núi cao
          thấp trùng điệp, có hồ, có suối và thung lũng.
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
  )
}

const AuctionTab = () => {
  return (
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
  )
}

const HistoryTab = () => {
  return (
    <div className='rounded-[12px]'>
      <ScrollArea className='h-[266px]'>
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
        <ScrollBar orientation='vertical' />
      </ScrollArea>
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
      {activeTab === 'product' && <ProductTab />}
      {activeTab === 'auction' && <AuctionTab />}
      {activeTab === 'history' && <HistoryTab />}
    </div>
  )
}

export default AuctionInfomation
