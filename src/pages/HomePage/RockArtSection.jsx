import React from 'react'

const RockArtSection = () => {
  return (
    <div className='bg-primary-700 relative h-[490px] sm:h-[550px] xl:h-[669px] bg-mountain2 bg-bottom bg-blend-overlay'>
      <div className='text-end relative select-none mb-16'>
        <div className='relative max-w-screen-2xl mx-auto px-6 lg:px-20'>
          <div className='absolute right-[60px] lg:right-[117px] font-aquarelle text-[#FFFEFE] text-[22px] sm:text-[32px] font-normal lowercase block md:hidden xl:block'>
            Nghệ thuật
          </div>
          <div
            className='absolute right-6 lg:right-20 top-6 sm:top-8 font-penumbra font-bold 
          text-[24px] sm:text-[36px] text-black block md:hidden xl:block'
          >
            Đá suiseki
          </div>
        </div>
        <div
          className='px-6 lg:pr-20 lg:pl-0 2xl:px-20 max-w-screen-2xl w-full h-full mx-auto
       sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl tracking-[0.15px]'
        >
          <img
            src='/assets/images/rock-art2.png'
            className='absolute left-1/2 -translate-x-1/2 top-5 md:hidden w-[350px] h-[480px] 
            sm:max-w-[400px] sm:h-[530px] object-contain'
          />
          <div className='relative hidden md:block'>
            <img
              src='/assets/images/rock-art.png'
              className='absolute -top-28 lg:-top-28 xl:-top-[128px] w-[550px] h-[570px] lg:w-[550px] lg:h-[570px] 
              xl:w-auto xl:h-auto md:-left-14 lg:-left-6 xl:-left-10 2xl:-left-[55px]'
            />
            <div
              className='absolute -right-2 lg:right-9 xl:right-[70px] 2xl:right-[260px] 
            md:top-14 lg:top-16 xl:top-[100px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[550px] text-start'
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
              className='absolute md:-right-3 xl:-right-[34px] lg:-right-12 2xl:-right-2
              md:top-[170px] lg:top-[210px] xl:top-[285px] md:max-w-[220px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[710px] text-start'
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
              className='absolute md:right-3 lg:-right-3 xl:right-4 2xl:right-48 md:top-[360px] lg:top-[365px] xl:top-[468px] 
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
