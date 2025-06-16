import { useNavigate } from 'react-router-dom'
import AuctionStartOrEnd from './AuctionStartOrEnd'
import Status from './Status'
import { Button } from './ui/button'

const AuctionStatus = ({ auctionStatus }) => (
  <div
    className={`h-9 ${
      auctionStatus === 'notAuctionced'
        ? 'bg-gray-100 text-black-400'
        : 'bg-[#FFF9E7] text-[#F2B600]'
    } py-2 px-6 rounded-[20px] text-sm`}
  >
    {auctionStatus === 'notAuctionced' ? 'Chưa diễn ra' : 'Đang diễn ra'}
  </div>
)

const ProductCard = ({
  image,
  title,
  description,
  price,
  status,
  id,
  isAuction,
  auctionStatus,
  auctionTime
}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/products/1`)}
      className='relative pb-[25px] rounded-[20px] card-shadow cursor-pointer'
    >
      <img
        src='/assets/images/stone-card.png'
        className='h-[355px] rounded-t-[20px] w-full object-cover mb-3'
      />
      <img
        src='/assets/images/logo.png'
        className='absolute h-[76px] w-[122px] object-cover top-0 left-1/2 -translate-x-1/2 '
      />
      <div className='mx-2 md:mx-4 lg:mx-8'>
        <Status />
        <div className='text-lg tracking-[0.15px] font-medium  mb-2'>
          Đá cảnh mây vờn núi
        </div>
        {isAuction && auctionStatus ? (
          <div>
            <div className='w-[137px]  mb-4'>
              <AuctionStatus auctionStatus={auctionStatus} />
            </div>
            <div className=' mb-4'>
              <AuctionStartOrEnd auctionTime={auctionTime} />
            </div>
          </div>
        ) : (
          <div className='text-sm tracking-[0.15px] text-[rgba(74,76,86,1)] mb-4'>
            Ngang 16cm, cao 21cm, sâu 7cm
          </div>
        )}
        <div className='flex flex-row justify-between items-center text-lg tracking-[0.15px] font-medium'>
          {isAuction === true && auctionStatus === 'underAuction' ? (
            <Button variant='outline' className='h-[50px] w-[162px]'>
              Đấu giá ngay
            </Button>
          ) : isAuction === true && auctionStatus === 'notAuctionced' ? (
            <Button variant='outline' className='h-[50px] w-[162px]'>
              Chi tiết
            </Button>
          ) : (
            <>
              <span>1.111.111 VND</span>
              <Button variant='outline' className='h-[50px] w-[162px]'>
                Mua ngay
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
