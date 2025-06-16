import { Button } from '@/components/ui/button'

const ProductDescription = () => {
  return (
    <>
      <div className='mb-4 sm:mb-6 border-b border-gray-50 pb-6 md:pb-12'>
        <div className='font-medium text-black-500 mb-2'>Mô tả</div>
        <div className='text-base text-black-400 tracking-[0.15px] text-justify mb-6'>
          Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La. Nó có
          hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố như những
          chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu trắng tựa như
          nước của những dòng suối đang chảy xuống thung lũng bên dưới. Nhìn
          tổng thể thì vên đá như một khung cảnh thu nhỏ của những ngọn núi cao
          thấp trùng điệp, có hồ, có suối và thung lũng.
        </div>
        <div className='flex flex-row items-center gap-5 sm:gap-[44px]'>
          <Button className='w-[150px] h-[50px] sm:w-[250px] sm:h-[60px] md:w-[170px] md:h-[50px] lg:w-[200px] xl:w-[250px] lg:h-[60px] px-6 py-4 text-white text-lg'>
            Mua ngay
          </Button>
          <Button
            variant='outline'
            className='w-[150px] h-[50px] sm:w-[250px] sm:h-[60px] md:w-[170px] md:h-[50px] lg:w-[200px] xl:w-[250px] lg:h-[60px] px-6 py-4 text-lg'
          >
            Đấu giá
          </Button>
        </div>
      </div>
      <div className='flex flex-row justify-between mb-4 sm:mb-6'>
        <div className='flex flex-col gap-2 w-[70%]'>
          <span className='font-medium text-black-500 text-base'>Thông số</span>
          <span className='text-base text-black-400 tracking-[0.15px]'>
            Ngang 16cm, cao 21cm, sâu 7cm
          </span>
        </div>
        <div className='flex flex-col gap-2 items-end'>
          <span className='font-medium text-black-500 text-base'>Xuất xứ</span>
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
    </>
  )
}

export default ProductDescription
