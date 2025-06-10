import { Button } from './ui/button'

const ProductCard = ({ image, title, description, price, status }) => {
  return (
    <div className='relative w-[410px] pb-[25px] rounded-[20px] card-shadow'>
      <img
        src='/assets/images/stone-card.png'
        className='h-[355px] rounded-t-[20px] w-full object-cover mb-3'
      />
      <img
        src='/assets/images/logo.png'
        className='absolute h-[76px] w-[122px] object-cover top-0 left-1/2 -translate-x-1/2 '
      />
      <div
        className='bg-[rgba(238,255,226,1)] rounded-2xl ml-4 p-4 
      h-[62px] mb-4 text-[rgba(0,152,0,1)] font-medium text-sm tracking-[0.15px] flex flex-row items-center gap-4'
      >
        <img src='/assets/icons/checked.png' className='w-7 h-7' />
        Đã được định danh bởi Ngoạn Thạch Việt
      </div>
      <div className='text-lg tracking-[0.15px] font-medium mx-8 mb-2'>
        Đá cảnh mây vờn núi
      </div>
      <div className='text-sm tracking-[0.15px] text-[rgba(74,76,86,1)] mx-8 mb-4'>
        Ngang 16cm, cao 21cm, sâu 7cm
      </div>
      <div className='mx-8 flex flex-row justify-between items-center text-lg tracking-[0.15px] font-medium'>
        1.111.111 VND
        <Button variant='outline' className='h-[50px] w-[134px]'>
          Mua ngay
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
