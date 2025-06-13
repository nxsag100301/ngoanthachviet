import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import AuctionForm from './AuctionForm'
import { useRef } from 'react'

const AuctionDialog = ({ open, setOpen }) => {
  const formRef = useRef()
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      modal={false}
      className='rounded-[12px]'
    >
      <DialogContent className='w-[300px] sm:w[600px] md:w-[720px] rounded-[12px]'>
        <DialogHeader>
          <DialogTitle>Đấu giá</DialogTitle>
        </DialogHeader>
        <div>
          <AuctionForm
            ref={formRef}
            onOpenDialog={setOpen}
            currentPrice='5000000'
            stepPrice='500000'
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant='outline'
              onClick={() => setOpen(false)}
              className='h-[44px] w-[129px] border-none bg-gray-100 text-black-400 text-base'
            >
              Hủy
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              formRef.current.submit()
            }}
            className='h-[44px] w-[129px] text-white text-base'
          >
            Đấu giá
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuctionDialog
