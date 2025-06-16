import React from 'react'

const RockArtSection = () => {
  return (
    <div className='bg-primary-700 relative h-[490px] sm:h-[550px] xl:h-[669px] bg-mountain2 bg-bottom bg-blend-overlay'>
      <div
        className='px-6 lg:pr-20 lg:pl-0 2xl:px-20 max-w-screen-2xl w-full h-full mx-auto
       sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl tracking-[0.15px]'
      >
        <div className='text-end relative select-none mb-16 pr-7'>
          <div className='font-aquarelle text-[#FFFEFE] text-[22px] sm:text-[32px] font-normal lowercase block md:hidden xl:block'>
            Nghệ thuật
          </div>
          <div
            className='absolute right-0 top-6 sm:top-8 font-penumbra font-bold 
          text-[24px] sm:text-[36px] text-black block md:hidden xl:block'
          >
            Đá suiseki
          </div>
          <img
            src='/assets/images/rock-art2.png'
            className='absolute left-1/2 -translate-x-1/2 top-5 md:hidden w-[350px] h-[480px] 
            sm:max-w-[400px] sm:h-[530px] object-contain'
          />
          <div className='relative hidden md:block'>
            <img
              src='/assets/images/rock-art.png'
              className='absolute -top-28 lg:-top-28 xl:-top-48 2xl:-top-48 w-[550px] h-[570px] lg:w-[550px] lg:h-[570px] 
              xl:w-auto xl:h-auto md:-left-14 lg:-left-6 xl:-left-10 2xl:-left-[55px]'
            />
            <div
              className='absolute -right-6 lg:right-3 xl:right-12 2xl:right-56 
            md:top-14 lg:top-16 xl:top-9 md:max-w-[300px] lg:max-w-[450px] xl:max-w-[550px] text-start'
            >
              <div className='font-penumbra font-bold uppercase text-sm lg:text-xl xl:text-2xl text-white mb-2'>
                Nghệ thuật từ đá và thiên nhiên
              </div>
              <div className='font-medium text-sm xl:text-base text-[#271100]'>
                Suiseki, từ tiếng Nhật, kết hợp giữa "Sui" (Nước) và "Seki"
                (Đá), là nghệ thuật chiêm ngưỡng đá trong hình dáng tự nhiên
                nhất.
              </div>
            </div>
            <div
              className='absolute md:-right-8 xl:-right-[60px] lg:-right-20 2xl:-right-10
              md:top-[170px] lg:top-[215px] 2xl:top-[215px] md:max-w-[220px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[710px] text-start'
            >
              <div className='font-penumbra font-bold uppercase text-sm lg:text-xl xl:text-2xl text-white mb-2'>
                Nguồn gốc của Suiseki
              </div>
              <div className='font-medium text-sm xl:text-base text-[#271100]'>
                Suiseki, nghệ thuật thưởng ngoạn đá tự nhiên, bắt nguồn từ Trung
                Hoa với tên gọi Gongshi. Vào thời Nữ hoàng Suiko (593{`-`}628),
                Suiseki được du nhập vào Nhật Bản như một món quà ngoại giao.
              </div>
            </div>
            <div
              className='absolute md:-right-2 lg:-right-10 xl:-right-3 2xl:right-40 md:top-[360px] lg:top-[365px] xl:top-[410px] 
             md:max-w-[280px] lg:max-w-[500px] xl:max-w-[609px] text-start'
            >
              <div className='font-penumbra font-bold uppercase text-sm lg:text-xl xl:text-2xl text-white mb-2'>
                Vẻ đẹp tự nhiên
              </div>
              <div className='font-medium text-sm xl:text-base text-[#271100]'>
                Đá Suiseki là những tác phẩm nghệ thuật từ thiên nhiên, mang
                trong mình vẻ đẹp tự nhiên nguyên bản. Đặt trên đế gỗ (Daiza)
                hoặc khay cát (Suiban).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RockArtSection
